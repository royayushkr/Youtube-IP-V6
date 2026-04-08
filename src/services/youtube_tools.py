from __future__ import annotations

import shutil
from collections.abc import Callable
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Any, Literal

import streamlit as st
import yt_dlp

from src.services.media_error_service import map_media_error
from src.services.thumbnail_hub_service import resolve_video_target
from src.utils.file_utils import guess_mime_type, safe_temp_dir, sanitize_filename


TargetType = Literal["video", "short"]
AudioProfile = Literal["best_audio_original", "mp3_conversion"]
VideoProfile = Literal["best_available", "up_to_1080p", "up_to_720p", "up_to_480p"]
ProgressCallback = Callable[[dict[str, Any]], None]

STREAMLIT_DOWNLOAD_LIMIT_BYTES = 100 * 1024 * 1024
_CACHE_TTL_SECONDS = 60 * 60


@dataclass(frozen=True)
class ResolvedYoutubeTarget:
    input_value: str
    canonical_url: str
    target_type: TargetType
    video_id: str


@dataclass(frozen=True)
class VideoMetadata:
    title: str
    channel: str
    duration_seconds: int | None
    duration_label: str
    publish_date: str | None
    video_id: str
    content_type: str
    webpage_url: str
    thumbnail_url: str | None
    thumbnail_variants: dict[str, str] = field(default_factory=dict)
    transcript_available: bool | None = None
    transcript_languages: tuple[str, ...] = ()


@dataclass(frozen=True)
class FormatOption:
    format_id: str
    selector: str
    label: str
    ext: str
    resolution: str
    filesize_estimate: int | None
    audio_codec: str | None
    video_codec: str | None
    is_audio_only: bool
    is_video_only: bool
    requires_ffmpeg: bool


@dataclass(frozen=True)
class PreparedArtifact:
    file_path: str
    file_name: str
    mime_type: str
    size_bytes: int
    source_item_id: str
    artifact_type: Literal["audio", "video"]


class _SilentYTDLPLogger:
    def debug(self, msg: str) -> None:  # pragma: no cover - deliberately silent
        return

    def warning(self, msg: str) -> None:  # pragma: no cover - deliberately silent
        return

    def error(self, msg: str) -> None:  # pragma: no cover - deliberately silent
        return


def _emit_progress(
    progress_callback: ProgressCallback | None,
    *,
    stage: str,
    percent: float,
    detail: str,
) -> None:
    if progress_callback is None:
        return
    progress_callback(
        {
            "stage": stage,
            "percent": max(0.0, min(1.0, percent)),
            "detail": detail,
        }
    )


def _seconds_to_label(seconds: int | None) -> str:
    if not seconds:
        return "Unknown"
    minutes, secs = divmod(int(seconds), 60)
    hours, minutes = divmod(minutes, 60)
    if hours:
        return f"{hours:d}:{minutes:02d}:{secs:02d}"
    return f"{minutes:d}:{secs:02d}"


def _format_upload_date(upload_date: str | None) -> str | None:
    if not upload_date:
        return None
    try:
        return datetime.strptime(upload_date, "%Y%m%d").date().isoformat()
    except ValueError:
        return upload_date


def _target_type_from_input(value: str) -> TargetType:
    return "short" if "/shorts/" in str(value or "").lower() else "video"


def validate_youtube_url(value: str) -> ResolvedYoutubeTarget:
    video_id, canonical_url = resolve_video_target(value)
    return ResolvedYoutubeTarget(
        input_value=value,
        canonical_url=canonical_url,
        target_type=_target_type_from_input(value),
        video_id=video_id,
    )


def _yt_dlp_base_options() -> dict[str, Any]:
    return {
        "quiet": True,
        "no_warnings": True,
        "noprogress": True,
        "logger": _SilentYTDLPLogger(),
        "skip_download": True,
        "noplaylist": True,
    }


@st.cache_data(ttl=_CACHE_TTL_SECONDS, show_spinner=False)
def _cached_video_info(url: str) -> dict[str, Any]:
    with yt_dlp.YoutubeDL(_yt_dlp_base_options()) as ydl:
        return ydl.extract_info(url, download=False)


def _thumbnail_variants_from_info(info: dict[str, Any]) -> dict[str, str]:
    thumbnails = info.get("thumbnails") or []
    collected: list[tuple[int, str]] = []
    for thumb in thumbnails:
        url = thumb.get("url")
        if not url:
            continue
        score = int((thumb.get("height") or 0) * (thumb.get("width") or 0))
        collected.append((score, url))
    fallback = info.get("thumbnail")
    if fallback:
        collected.append((0, fallback))

    unique_urls: list[str] = []
    for _, url in sorted(collected, key=lambda item: item[0], reverse=True):
        if url not in unique_urls:
            unique_urls.append(url)

    labels = ["Best Available", "High", "Medium", "Low"]
    return {
        labels[index] if index < len(labels) else f"Option {index + 1}": url
        for index, url in enumerate(unique_urls[:4])
    }


def _build_video_metadata(info: dict[str, Any], *, target_type: TargetType | None = None) -> VideoMetadata:
    inferred_type = target_type or ("short" if "/shorts/" in (info.get("webpage_url") or "") else "video")
    transcript_languages = tuple(
        sorted(set((info.get("subtitles") or {}).keys()) | set((info.get("automatic_captions") or {}).keys()))
    )
    variants = _thumbnail_variants_from_info(info)
    thumbnail_url = variants.get("Best Available") or info.get("thumbnail")
    return VideoMetadata(
        title=info.get("title") or "Untitled Video",
        channel=info.get("uploader") or info.get("channel") or "Unknown Channel",
        duration_seconds=info.get("duration"),
        duration_label=_seconds_to_label(info.get("duration")),
        publish_date=_format_upload_date(info.get("upload_date")),
        video_id=info.get("id") or "",
        content_type="Short" if inferred_type == "short" else "Video",
        webpage_url=info.get("webpage_url") or validate_youtube_url(info.get("id") or "").canonical_url,
        thumbnail_url=thumbnail_url,
        thumbnail_variants=variants,
        transcript_available=bool(transcript_languages),
        transcript_languages=transcript_languages,
    )


def _filesize_estimate(format_info: dict[str, Any]) -> int | None:
    return format_info.get("filesize") or format_info.get("filesize_approx")


def _format_size_label(size_bytes: int | None) -> str:
    if not size_bytes:
        return "Size Unknown"
    size = float(size_bytes)
    for unit in ("B", "KB", "MB", "GB"):
        if size < 1024 or unit == "GB":
            if unit == "B":
                return f"{int(size)} {unit}"
            return f"{size:.1f} {unit}"
        size /= 1024
    return f"{size_bytes} B"


def _audio_label(format_info: dict[str, Any]) -> str:
    bitrate = format_info.get("abr")
    bitrate_label = f"{int(bitrate)} kbps" if bitrate else "Audio"
    size_label = _format_size_label(_filesize_estimate(format_info))
    ext = (format_info.get("ext") or "audio").upper()
    return f"{ext} Audio • {bitrate_label} • {size_label}"


def _video_label(format_info: dict[str, Any], *, merged: bool) -> str:
    height = format_info.get("height")
    fps = format_info.get("fps")
    ext = (format_info.get("ext") or "video").upper()
    resolution = f"{height}p" if height else "Video"
    fps_label = f"{fps:.0f} fps" if fps else "Unknown fps"
    size_label = _format_size_label(_filesize_estimate(format_info))
    suffix = " • MP4" if merged else ""
    return f"{resolution} • {ext} • {fps_label} • {size_label}{suffix}"


def ffmpeg_available() -> bool:
    return shutil.which("ffmpeg") is not None


def fetch_video_metadata(value: str) -> VideoMetadata:
    target = validate_youtube_url(value)
    try:
        return _build_video_metadata(_cached_video_info(target.canonical_url), target_type=target.target_type)
    except Exception as exc:  # pragma: no cover - exercised through callers/tests
        raise RuntimeError(map_media_error(exc).technical_detail) from exc


def get_available_formats(value: str) -> dict[str, list[FormatOption]]:
    target = validate_youtube_url(value)
    try:
        info = _cached_video_info(target.canonical_url)
    except Exception as exc:  # pragma: no cover - exercised through callers/tests
        raise RuntimeError(map_media_error(exc).technical_detail) from exc

    audio_options: list[FormatOption] = []
    video_options: list[FormatOption] = []
    ffmpeg_ready = ffmpeg_available()
    seen_video_selectors: set[str] = set()

    for format_info in info.get("formats") or []:
        format_id = str(format_info.get("format_id") or "")
        ext = str(format_info.get("ext") or "")
        if not format_id or ext == "mhtml":
            continue

        audio_codec = format_info.get("acodec")
        video_codec = format_info.get("vcodec")
        is_audio_only = audio_codec not in {None, "none"} and video_codec in {None, "none"}
        is_video_capable = video_codec not in {None, "none"}

        if is_audio_only:
            audio_options.append(
                FormatOption(
                    format_id=format_id,
                    selector=format_id,
                    label=_audio_label(format_info),
                    ext=ext,
                    resolution="Audio",
                    filesize_estimate=_filesize_estimate(format_info),
                    audio_codec=audio_codec,
                    video_codec=video_codec,
                    is_audio_only=True,
                    is_video_only=False,
                    requires_ffmpeg=False,
                )
            )
            continue

        if not is_video_capable:
            continue

        has_audio = audio_codec not in {None, "none"}
        if has_audio:
            selector = format_id
            requires_merge = False
        elif ffmpeg_ready:
            selector = f"{format_id}+bestaudio/best"
            requires_merge = True
        else:
            continue

        if selector in seen_video_selectors:
            continue
        seen_video_selectors.add(selector)

        height = format_info.get("height")
        resolution = f"{height}p" if height else "Video"
        video_options.append(
            FormatOption(
                format_id=format_id,
                selector=selector,
                label=_video_label(format_info, merged=requires_merge),
                ext="mp4" if requires_merge else ext,
                resolution=resolution,
                filesize_estimate=_filesize_estimate(format_info),
                audio_codec=audio_codec,
                video_codec=video_codec,
                is_audio_only=False,
                is_video_only=not has_audio,
                requires_ffmpeg=requires_merge,
            )
        )

    audio_options.sort(key=lambda item: (item.filesize_estimate or 0, item.label), reverse=True)
    video_options.sort(
        key=lambda item: (
            int(item.resolution.replace("p", "")) if item.resolution.endswith("p") else 0,
            item.filesize_estimate or 0,
        ),
        reverse=True,
    )
    return {"audio": audio_options, "video": video_options}


def _audio_profile_selector(profile: str) -> tuple[str, list[dict[str, Any]] | None]:
    if profile == "best_audio_original":
        return "bestaudio/best", None
    if profile == "mp3_conversion":
        if not ffmpeg_available():
            raise ValueError("FFmpeg is required for MP3 conversion.")
        return "bestaudio/best", [{"key": "FFmpegExtractAudio", "preferredcodec": "mp3", "preferredquality": "192"}]
    return profile, None


def _video_profile_selector(profile: str) -> str:
    selectors = {
        "best_available": "bestvideo*+bestaudio/best",
        "up_to_1080p": "bestvideo*[height<=1080]+bestaudio/best",
        "up_to_720p": "bestvideo*[height<=720]+bestaudio/best",
        "up_to_480p": "bestvideo*[height<=480]+bestaudio/best",
    }
    return selectors.get(profile, profile)


def _locate_downloaded_file(temp_dir: Path) -> Path:
    candidates = [
        path
        for path in temp_dir.rglob("*")
        if path.is_file()
        and not path.name.endswith((".part", ".ytdl", ".info.json", ".description"))
    ]
    if not candidates:
        raise RuntimeError("No downloadable file was produced for this request.")
    return max(candidates, key=lambda path: path.stat().st_mtime)


def _build_ytdlp_progress_hook(progress_callback: ProgressCallback | None) -> Callable[[dict[str, Any]], None]:
    def _hook(data: dict[str, Any]) -> None:
        status = data.get("status")
        if status == "downloading":
            total = data.get("total_bytes") or data.get("total_bytes_estimate") or 0
            downloaded = data.get("downloaded_bytes") or 0
            percent = (downloaded / total) if total else 0.35
            speed = data.get("speed")
            speed_label = f" at {speed / (1024 * 1024):.1f} MB/s" if speed else ""
            _emit_progress(
                progress_callback,
                stage="downloading",
                percent=min(0.94, percent),
                detail=f"Downloading {downloaded / (1024 * 1024):.1f} MB{speed_label}",
            )
        elif status == "finished":
            _emit_progress(
                progress_callback,
                stage="finalizing",
                percent=0.97,
                detail="Download finished. Finalizing the file...",
            )

    return _hook


def _download_with_ytdlp(
    value: str,
    *,
    format_selector: str,
    artifact_type: Literal["audio", "video"],
    file_stem: str,
    progress_callback: ProgressCallback | None = None,
    postprocessors: list[dict[str, Any]] | None = None,
    merge_output_format: str | None = None,
) -> PreparedArtifact:
    metadata = fetch_video_metadata(value)
    target = validate_youtube_url(value)
    temp_dir = safe_temp_dir(f"yt-tools-{artifact_type}-")
    output_template = str(temp_dir / f"{sanitize_filename(file_stem, metadata.video_id)}.%(ext)s")
    _emit_progress(progress_callback, stage="validating", percent=0.08, detail="Validating the public video target...")

    options: dict[str, Any] = {
        **_yt_dlp_base_options(),
        "skip_download": False,
        "format": format_selector,
        "outtmpl": {"default": output_template},
        "progress_hooks": [_build_ytdlp_progress_hook(progress_callback)],
    }
    if postprocessors:
        options["postprocessors"] = postprocessors
    if merge_output_format:
        options["merge_output_format"] = merge_output_format

    try:
        _emit_progress(progress_callback, stage="preparing", percent=0.14, detail="Preparing the yt-dlp download job...")
        with yt_dlp.YoutubeDL(options) as ydl:
            ydl.extract_info(target.canonical_url, download=True)
        file_path = _locate_downloaded_file(temp_dir)
        _emit_progress(progress_callback, stage="ready", percent=1.0, detail="File is ready to download.")
    except Exception as exc:
        raise RuntimeError(map_media_error(exc).technical_detail) from exc

    return PreparedArtifact(
        file_path=str(file_path),
        file_name=file_path.name,
        mime_type=guess_mime_type(file_path),
        size_bytes=file_path.stat().st_size,
        source_item_id=metadata.video_id,
        artifact_type=artifact_type,
    )


def prepare_audio_download(
    value: str,
    profile: str = "mp3_conversion",
    *,
    progress_callback: ProgressCallback | None = None,
) -> PreparedArtifact:
    metadata = fetch_video_metadata(value)
    selector, postprocessors = _audio_profile_selector(profile)
    return _download_with_ytdlp(
        value,
        format_selector=selector,
        artifact_type="audio",
        file_stem=f"{metadata.title}-audio",
        postprocessors=postprocessors,
        progress_callback=progress_callback,
    )


def prepare_video_download(
    value: str,
    profile_or_format: str = "up_to_1080p",
    *,
    progress_callback: ProgressCallback | None = None,
) -> PreparedArtifact:
    metadata = fetch_video_metadata(value)
    selector = _video_profile_selector(profile_or_format)
    merge_output_format = "mp4" if "+" in selector else None
    if "+" in selector and not ffmpeg_available():
        raise ValueError("FFmpeg is required for merged video downloads.")
    return _download_with_ytdlp(
        value,
        format_selector=selector,
        artifact_type="video",
        file_stem=metadata.title,
        merge_output_format=merge_output_format,
        progress_callback=progress_callback,
    )


__all__ = [
    "FormatOption",
    "PreparedArtifact",
    "ResolvedYoutubeTarget",
    "STREAMLIT_DOWNLOAD_LIMIT_BYTES",
    "VideoMetadata",
    "ffmpeg_available",
    "fetch_video_metadata",
    "get_available_formats",
    "prepare_audio_download",
    "prepare_video_download",
    "validate_youtube_url",
]
