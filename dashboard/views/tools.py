from __future__ import annotations

from datetime import datetime, timezone
from html import escape
from pathlib import Path
from typing import Any

import streamlit as st

from dashboard.components.visualizations import section_header
from src.llm_integration.thumbnail_generator import ThumbnailGenerator, get_api_key
from src.services.media_error_service import MediaErrorInfo, map_media_error
from src.services.thumbnail_hub_service import PreparedThumbnailArtifact, ThumbnailPreview, prepare_thumbnail_download, preview_thumbnail_target
from src.services.transcript_service import TranscriptOption, fetch_transcript_text, list_transcript_options, prepare_transcript_download
from src.services.youtube_tools import (
    STREAMLIT_DOWNLOAD_LIMIT_BYTES,
    FormatOption,
    PreparedArtifact,
    VideoMetadata,
    ffmpeg_available,
    fetch_video_metadata,
    get_available_formats,
    prepare_audio_download,
    prepare_video_download,
)
from src.utils.api_keys import get_provider_key_count
from src.utils.file_utils import cleanup_temp_dirs


MEDIA_LAB_STATE_KEYS = (
    "media_lab_preview",
    "media_lab_formats",
    "media_lab_transcripts",
    "media_lab_thumbnail_preview",
    "media_lab_error",
    "media_lab_transcript_text",
    "media_lab_transcript_artifact",
    "media_lab_audio_artifact",
    "media_lab_video_artifact",
    "media_lab_thumbnail_artifacts",
    "media_lab_generated_images",
    "media_lab_temp_paths",
)

PROVIDER_LABELS = {
    "gemini": "Gemini",
    "openai": "OpenAI / ChatGPT",
}

IMAGE_MODEL_CATALOG = {
    "gemini": [
        {
            "id": "gemini-2.5-flash-image",
            "label": "Gemini 2.5 Flash Image",
            "summary": "Fastest option for thumbnail ideation with strong prompt adherence.",
            "per_image": 0.039,
            "size_options": ["1024x1024"],
            "quality_options": ["standard"],
        },
    ],
    "openai": [
        {
            "id": "gpt-image-1.5",
            "label": "GPT Image 1.5",
            "summary": "Highest-quality thumbnail rendering with flexible formats and background control.",
            "pricing": {
                "low": {"1024x1024": 0.009, "1024x1536": 0.013, "1536x1024": 0.013},
                "medium": {"1024x1024": 0.034, "1024x1536": 0.050, "1536x1024": 0.050},
                "high": {"1024x1024": 0.133, "1024x1536": 0.200, "1536x1024": 0.200},
            },
            "size_options": ["1024x1024", "1024x1536", "1536x1024"],
            "quality_options": ["low", "medium", "high"],
            "background_options": ["opaque", "transparent"],
            "format_options": ["png", "webp", "jpeg"],
        },
        {
            "id": "gpt-image-1-mini",
            "label": "GPT Image 1 Mini",
            "summary": "Lower-cost thumbnail iteration when you want a few fast visual angles.",
            "pricing": {
                "low": {"1024x1024": 0.005, "1024x1536": 0.006, "1536x1024": 0.006},
                "medium": {"1024x1024": 0.011, "1024x1536": 0.015, "1536x1024": 0.015},
                "high": {"1024x1024": 0.036, "1024x1536": 0.052, "1536x1024": 0.052},
            },
            "size_options": ["1024x1024", "1024x1536", "1536x1024"],
            "quality_options": ["low", "medium", "high"],
            "background_options": ["opaque", "transparent"],
            "format_options": ["png", "webp", "jpeg"],
        },
    ],
}

AUDIO_PROFILE_OPTIONS = {
    "MP3 (Recommended)": "mp3_conversion",
    "Best Audio (Original Container)": "best_audio_original",
}
VIDEO_PROFILE_OPTIONS = {
    "Best Available": "best_available",
    "Up To 1080p (Recommended)": "up_to_1080p",
    "Up To 720p": "up_to_720p",
    "Up To 480p": "up_to_480p",
}


def _inject_media_lab_css() -> None:
    st.markdown(
        """
        <style>
        .media-lab-page {
            max-width: var(--app-page-width);
            margin: 0 auto;
        }
        .media-lab-hero {
            padding: 1.4rem 1.55rem;
            border-radius: 28px;
            background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,245,247,0.98) 100%);
            border: 1px solid rgba(229, 57, 53, 0.10);
            box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
            margin-bottom: 1.2rem;
        }
        .media-lab-kicker {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.48rem 0.82rem;
            border-radius: 999px;
            background: rgba(229, 57, 53, 0.08);
            border: 1px solid rgba(229, 57, 53, 0.16);
            color: #C62828;
            font-size: 12px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 0.85rem;
        }
        .media-lab-kicker-dot {
            width: 9px;
            height: 9px;
            border-radius: 999px;
            background: linear-gradient(180deg, #FF0033 0%, #D93025 100%);
            box-shadow: 0 0 18px rgba(255, 0, 51, 0.24);
        }
        .media-lab-title {
            font-family: var(--app-font-display);
            font-size: clamp(34px, 4vw, 52px);
            line-height: 1.02;
            font-weight: 800;
            color: #101828;
            letter-spacing: -0.04em;
            margin-bottom: 0.7rem;
        }
        .media-lab-subtitle {
            color: #475467;
            font-size: 15px;
            line-height: 1.7;
            max-width: 760px;
        }
        .media-lab-pill-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.55rem;
            margin-top: 1rem;
        }
        .media-lab-pill {
            padding: 0.42rem 0.78rem;
            border-radius: 999px;
            background: #FFFFFF;
            border: 1px solid rgba(15, 23, 42, 0.08);
            color: #344054;
            font-size: 12px;
            font-weight: 600;
        }
        .media-lab-bento {
            border-radius: 24px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: #FFFFFF;
            box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
            padding: 1.1rem 1.15rem;
            margin-bottom: 1rem;
            transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
        }
        .media-lab-bento:hover {
            transform: translateY(-2px);
            box-shadow: 0 22px 48px rgba(15, 23, 42, 0.12);
            border-color: rgba(229, 57, 53, 0.18);
        }
        .media-lab-card-title {
            font-family: var(--app-font-display);
            color: #101828;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }
        .media-lab-card-copy {
            color: #667085;
            font-size: 13px;
            line-height: 1.6;
        }
        .media-lab-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.8rem;
        }
        .media-lab-stat {
            border-radius: 18px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: linear-gradient(180deg, #FFFFFF 0%, #FFF7F8 100%);
            padding: 0.9rem 0.95rem;
        }
        .media-lab-stat-label {
            color: #667085;
            font-size: 11px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 0.22rem;
        }
        .media-lab-stat-value {
            color: #101828;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.45;
        }
        .media-lab-empty {
            padding: 1rem 1.1rem;
            border-radius: 20px;
            border: 1px dashed rgba(15, 23, 42, 0.14);
            background: rgba(255, 255, 255, 0.85);
            color: #667085;
            font-size: 13px;
            line-height: 1.65;
        }
        .media-lab-artifact {
            padding: 0.85rem 0.95rem;
            border-radius: 18px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: linear-gradient(180deg, #FFFFFF 0%, #FFF9FA 100%);
            margin-top: 0.8rem;
        }
        .media-lab-artifact-label {
            color: #101828;
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 0.15rem;
        }
        .media-lab-artifact-copy {
            color: #667085;
            font-size: 12px;
            line-height: 1.55;
        }
        .media-lab-thumb-card {
            padding: 0.85rem;
            border-radius: 20px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: #FFFFFF;
            box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
            margin-bottom: 0.8rem;
        }
        .media-lab-thumb-label {
            color: #101828;
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 0.45rem;
        }
        .media-lab-note {
            color: #667085;
            font-size: 12px;
            line-height: 1.55;
        }
        .media-lab-lookup-shell [data-testid="stForm"] {
            background: transparent;
            border: none;
            padding: 0;
            box-shadow: none;
        }
        .media-lab-error {
            border-radius: 20px;
            border: 1px solid rgba(217, 45, 32, 0.15);
            background: #FEF3F2;
            padding: 0.95rem 1rem;
            margin-bottom: 1rem;
        }
        .media-lab-error-title {
            color: #B42318;
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 0.2rem;
        }
        .media-lab-error-copy {
            color: #912018;
            font-size: 13px;
            line-height: 1.55;
        }
        @media (max-width: 900px) {
            .media-lab-grid {
                grid-template-columns: 1fr;
            }
        }
        </style>
        """,
        unsafe_allow_html=True,
    )


def _catalog_map(provider: str) -> dict[str, dict[str, Any]]:
    return {item["id"]: item for item in IMAGE_MODEL_CATALOG[provider]}


def _format_model_option(provider: str, model_id: str) -> str:
    item = _catalog_map(provider)[model_id]
    return f"{item['label']}  •  {item['summary']}"


def _estimate_image_cost(provider: str, model_id: str, count: int, size: str, quality: str) -> float:
    item = _catalog_map(provider)[model_id]
    if provider == "gemini":
        return float(item["per_image"]) * count
    return float(item["pricing"][quality][size]) * count


def _register_temp_paths(*artifacts: PreparedArtifact | PreparedThumbnailArtifact | None) -> None:
    temp_paths = set(st.session_state.get("media_lab_temp_paths", []))
    for artifact in artifacts:
        if artifact is None:
            continue
        temp_paths.add(str(Path(artifact.file_path).parent))
    st.session_state["media_lab_temp_paths"] = sorted(temp_paths)


def _clear_media_lab_outputs() -> None:
    cleanup_temp_dirs(st.session_state.get("media_lab_temp_paths", []))
    for key in MEDIA_LAB_STATE_KEYS:
        st.session_state.pop(key, None)
    st.session_state["media_lab_temp_paths"] = []


def _clear_download_outputs_only() -> None:
    cleanup_temp_dirs(st.session_state.get("media_lab_temp_paths", []))
    for key in (
        "media_lab_transcript_text",
        "media_lab_transcript_artifact",
        "media_lab_audio_artifact",
        "media_lab_video_artifact",
        "media_lab_thumbnail_artifacts",
    ):
        st.session_state.pop(key, None)
    st.session_state["media_lab_temp_paths"] = []


def _artifact_too_large(size_bytes: int) -> bool:
    return size_bytes > STREAMLIT_DOWNLOAD_LIMIT_BYTES


def _render_error(info: MediaErrorInfo) -> None:
    st.markdown(
        (
            '<div class="media-lab-error">'
            f'<div class="media-lab-error-title">{escape(info.title)}</div>'
            f'<div class="media-lab-error-copy">{escape(info.message)}</div>'
            '</div>'
        ),
        unsafe_allow_html=True,
    )
    with st.expander("Technical details", expanded=False):
        st.code(info.technical_detail)


def _progress_widgets(key: str) -> tuple[Any, Any]:
    status_slot = st.empty()
    progress_slot = st.empty()
    progress = progress_slot.progress(0)
    status_slot.caption("Waiting to start.")
    return status_slot, progress


def _set_progress(status_slot: Any, progress: Any, *, percent: float, message: str) -> None:
    progress.progress(int(max(0.0, min(1.0, percent)) * 100))
    status_slot.caption(message)


def _progress_callback_factory(status_slot: Any, progress: Any):
    def _callback(update: dict[str, Any]) -> None:
        _set_progress(
            status_slot,
            progress,
            percent=float(update.get("percent", 0.0)),
            message=str(update.get("detail", "Working...")),
        )

    return _callback


def _render_download_button(artifact: PreparedArtifact | PreparedThumbnailArtifact, *, label: str, key: str) -> None:
    file_path = Path(artifact.file_path)
    if not file_path.exists():
        st.warning("This temporary file is no longer available. Prepare it again.")
        return

    if _artifact_too_large(int(artifact.size_bytes)):
        limit_mb = STREAMLIT_DOWNLOAD_LIMIT_BYTES / (1024 * 1024)
        size_mb = artifact.size_bytes / (1024 * 1024)
        st.warning(f"This file is {size_mb:.1f} MB. In-app downloads are limited to about {limit_mb:.0f} MB.")
        return

    st.download_button(
        label,
        data=file_path.read_bytes(),
        file_name=artifact.file_name,
        mime=artifact.mime_type,
        use_container_width=True,
        key=key,
    )
    st.caption(f"{artifact.file_name} • {(artifact.size_bytes / (1024 * 1024)):.2f} MB")


def _render_artifact_panel(title: str, copy: str, artifact: PreparedArtifact | PreparedThumbnailArtifact, *, button_label: str, key: str) -> None:
    st.markdown(
        (
            '<div class="media-lab-artifact">'
            f'<div class="media-lab-artifact-label">{escape(title)}</div>'
            f'<div class="media-lab-artifact-copy">{escape(copy)}</div>'
            '</div>'
        ),
        unsafe_allow_html=True,
    )
    _render_download_button(artifact, label=button_label, key=key)


def _render_hero() -> None:
    st.markdown(
        """
        <div class="media-lab-page">
            <div class="media-lab-hero">
                <div class="media-lab-kicker"><span class="media-lab-kicker-dot"></span>Media Lab</div>
                <div class="media-lab-title">One clean workspace for transcripts, thumbnails, video, and audio.</div>
                <div class="media-lab-subtitle">
                    Start from one public YouTube video or Short, then extract captions, preview multi-resolution thumbnails,
                    generate new thumbnail concepts, and prepare MP4 or MP3 downloads with clear progress and friendlier errors.
                </div>
                <div class="media-lab-pill-row">
                    <span class="media-lab-pill">Single public video workflow</span>
                    <span class="media-lab-pill">Transcript + thumbnail + media downloads</span>
                    <span class="media-lab-pill">Temporary artifacts only</span>
                    <span class="media-lab-pill">Streamlit + yt-dlp ready</span>
                </div>
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )


def _render_summary_cards(preview: VideoMetadata | None, formats: dict[str, list[FormatOption]] | None, transcripts: list[TranscriptOption] | None) -> None:
    items = [
        ("Current target", preview.content_type if preview else "No video loaded"),
        ("Transcript options", str(len(transcripts or [])) if preview else "0"),
        (
            "Formats discovered",
            f"{len((formats or {}).get('video', []))} video / {len((formats or {}).get('audio', []))} audio" if preview else "Load a video first",
        ),
        ("FFmpeg", "Available" if ffmpeg_available() else "Not installed"),
    ]
    blocks = "".join(
        (
            '<div class="media-lab-stat">'
            f'<div class="media-lab-stat-label">{escape(label)}</div>'
            f'<div class="media-lab-stat-value">{escape(value)}</div>'
            '</div>'
        )
        for label, value in items
    )
    st.markdown(
        (
            '<div class="media-lab-bento">'
            '<div class="media-lab-card-title">Current Run Summary</div>'
            '<div class="media-lab-card-copy">The merged media workflow stays intentionally narrow: one public video at a time, clean downloads, and no hidden batch side effects.</div>'
            f'<div class="media-lab-grid" style="margin-top:0.9rem;">{blocks}</div>'
            '</div>'
        ),
        unsafe_allow_html=True,
    )


def _lookup_video() -> None:
    with st.container(border=True):
        st.markdown("### Video Lookup")
        st.caption("Paste one public YouTube watch URL, Short URL, youtu.be URL, or direct video ID.")
        with st.form("media_lab_lookup_form", clear_on_submit=False):
            lookup_value = st.text_input(
                "YouTube URL Or Video ID",
                key="media_lab_lookup_value",
                placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/...",
            )
            lookup_clicked = st.form_submit_button("Load Video", type="primary", use_container_width=True)

        if lookup_clicked:
            _clear_media_lab_outputs()
            try:
                with st.spinner("Fetching metadata, transcript options, formats, and public thumbnails..."):
                    preview = fetch_video_metadata(lookup_value)
                    formats = get_available_formats(lookup_value)
                    transcripts = list_transcript_options(preview.video_id)
                    try:
                        thumb_preview = preview_thumbnail_target(lookup_value)
                    except Exception:
                        thumb_preview = None
                st.session_state["media_lab_preview"] = preview
                st.session_state["media_lab_formats"] = formats
                st.session_state["media_lab_transcripts"] = transcripts
                st.session_state["media_lab_thumbnail_preview"] = thumb_preview
                st.session_state["media_lab_thumbnail_artifacts"] = {}
                st.session_state["media_lab_generated_images"] = []
                st.session_state.pop("media_lab_error", None)
            except Exception as exc:
                st.session_state["media_lab_error"] = exc
                for key in ("media_lab_preview", "media_lab_formats", "media_lab_transcripts", "media_lab_thumbnail_preview"):
                    st.session_state.pop(key, None)


def _render_metadata(preview: VideoMetadata, thumbnail_preview: ThumbnailPreview | None) -> None:
    left, right = st.columns([1.05, 0.95], gap="large")
    with left:
        rows = [
            ("Title", preview.title),
            ("Channel", preview.channel),
            ("Duration", preview.duration_label),
            ("Published", preview.publish_date or "Unknown"),
            ("Type", preview.content_type),
            ("Video ID", preview.video_id),
        ]
        blocks = "".join(
            (
                '<div class="media-lab-stat">'
                f'<div class="media-lab-stat-label">{escape(label)}</div>'
                f'<div class="media-lab-stat-value">{escape(value)}</div>'
                '</div>'
            )
            for label, value in rows
        )
        st.markdown(
            (
                '<div class="media-lab-bento">'
                '<div class="media-lab-card-title">Video Lookup</div>'
                '<div class="media-lab-card-copy">This preview anchors every transcript, thumbnail, audio, and video action in the page.</div>'
                f'<div class="media-lab-grid" style="margin-top:0.9rem;">{blocks}</div>'
                '</div>'
            ),
            unsafe_allow_html=True,
        )
    with right:
        st.markdown(
            (
                '<div class="media-lab-bento">'
                '<div class="media-lab-card-title">Thumbnail Preview</div>'
                '<div class="media-lab-card-copy">Public thumbnail variants are discovered separately so the thumbnail section can stay multi-resolution and grid-based.</div>'
                '</div>'
            ),
            unsafe_allow_html=True,
        )
        if thumbnail_preview and thumbnail_preview.thumbnail_variants:
            default_variant = thumbnail_preview.default_variant
            st.image(thumbnail_preview.thumbnail_variants[default_variant], use_container_width=True)
            st.caption(f"{default_variant} preview")
        elif preview.thumbnail_url:
            st.image(preview.thumbnail_url, use_container_width=True)
        else:
            st.info("No public thumbnail preview is available for this video.")


def _render_transcript_panel(preview: VideoMetadata, transcripts: list[TranscriptOption]) -> None:
    with st.container(border=True):
        section_header("Transcript", subtitle="Fetch a public transcript, preview it, and download it as a text file.")
        if not transcripts:
            st.info("No public transcript is available for this video.")
            return

        labels = [
            f"{option.language_label} ({option.language_code}){' • Auto' if option.is_generated else ' • Manual'}"
            for option in transcripts
        ]
        selected_label = st.selectbox("Transcript Language", labels, index=0, key="media_lab_transcript_language")
        selected_option = transcripts[labels.index(selected_label)]
        with st.expander("Advanced transcript options", expanded=False):
            prefer_any = st.toggle("Fallback to any available transcript", value=True, key="media_lab_transcript_fallback")

        if st.button("Extract Transcript", type="primary", use_container_width=True, key="media_lab_extract_transcript"):
            status_slot, progress = _progress_widgets("media_lab_transcript_progress")
            try:
                _set_progress(status_slot, progress, percent=0.10, message="Validating transcript availability...")
                transcript_text = fetch_transcript_text(
                    preview.video_id,
                    selected_option.language_code,
                    prefer_any=prefer_any,
                )
                _set_progress(status_slot, progress, percent=0.72, message="Preparing transcript download...")
                artifact = prepare_transcript_download(
                    preview.video_id,
                    selected_option.language_code,
                    prefer_any=prefer_any,
                    video_title=preview.title,
                    transcript_text=transcript_text,
                )
                _register_temp_paths(artifact)
                st.session_state["media_lab_transcript_text"] = transcript_text
                st.session_state["media_lab_transcript_artifact"] = artifact
                _set_progress(status_slot, progress, percent=1.0, message="Transcript ready.")
            except Exception as exc:
                _set_progress(status_slot, progress, percent=1.0, message="Transcript extraction failed.")
                _render_error(map_media_error(exc.__cause__ or exc))
                return

        transcript_text = st.session_state.get("media_lab_transcript_text", "")
        artifact: PreparedArtifact | None = st.session_state.get("media_lab_transcript_artifact")
        if transcript_text:
            st.text_area("Transcript Preview", value=transcript_text, height=240, key="media_lab_transcript_preview")
        if artifact:
            _render_artifact_panel(
                "Prepared Transcript",
                "Your transcript export is ready. Files stay temporary and are cleared when the page state resets.",
                artifact,
                button_label="Download Transcript",
                key="media_lab_transcript_download",
            )


def _render_thumbnail_download_panel(thumbnail_preview: ThumbnailPreview | None) -> None:
    if not thumbnail_preview:
        st.markdown(
            '<div class="media-lab-empty">Load a public video first to preview the available thumbnail variants and export one of them.</div>',
            unsafe_allow_html=True,
        )
        return

    section_header("Thumbnail Studio", subtitle="Preview the public thumbnail variants or generate new concepts with Gemini or OpenAI.")
    public_tab, generate_tab = st.tabs(["Preview & Download", "AI Generate"])

    with public_tab:
        st.markdown(
            '<div class="media-lab-card-copy" style="margin-bottom:0.8rem;">Each card represents a public thumbnail resolution exposed by YouTube for this specific video.</div>',
            unsafe_allow_html=True,
        )
        variants = list(thumbnail_preview.thumbnail_variants.items())
        cols = st.columns(2 if len(variants) > 1 else 1, gap="large")
        stored_artifacts: dict[str, PreparedThumbnailArtifact] = st.session_state.get("media_lab_thumbnail_artifacts", {})
        for index, (label, url) in enumerate(variants):
            with cols[index % len(cols)]:
                st.markdown(f'<div class="media-lab-thumb-card"><div class="media-lab-thumb-label">{escape(label)}</div>', unsafe_allow_html=True)
                st.image(url, use_container_width=True)
                if st.button(
                    f"Prepare {label}",
                    type="primary",
                    use_container_width=True,
                    key=f"media_lab_prepare_thumbnail_{label}",
                ):
                    status_slot, progress = _progress_widgets(f"media_lab_thumb_progress_{label}")
                    try:
                        _set_progress(status_slot, progress, percent=0.10, message="Validating public thumbnail variant...")
                        _set_progress(status_slot, progress, percent=0.45, message="Downloading the thumbnail file...")
                        artifact = prepare_thumbnail_download(thumbnail_preview.canonical_url, label)
                        _register_temp_paths(artifact)
                        stored_artifacts[label] = artifact
                        st.session_state["media_lab_thumbnail_artifacts"] = stored_artifacts
                        _set_progress(status_slot, progress, percent=1.0, message="Thumbnail ready.")
                    except Exception as exc:
                        _set_progress(status_slot, progress, percent=1.0, message="Thumbnail preparation failed.")
                        _render_error(map_media_error(exc.__cause__ or exc))
                        st.markdown("</div>", unsafe_allow_html=True)
                        continue

                if label in stored_artifacts:
                    _render_artifact_panel(
                        f"{label} Thumbnail",
                        "Prepared for in-app download. Choose another card if you want a different public resolution.",
                        stored_artifacts[label],
                        button_label=f"Download {label}",
                        key=f"media_lab_download_thumbnail_{label}",
                    )
                st.markdown("</div>", unsafe_allow_html=True)

    with generate_tab:
        provider = st.selectbox(
            "Provider",
            ["gemini", "openai"],
            index=0,
            format_func=lambda value: PROVIDER_LABELS.get(value, value.title()),
            key="media_lab_generate_provider",
        )
        model_options = [item["id"] for item in IMAGE_MODEL_CATALOG[provider]]
        model = st.selectbox(
            "Model",
            model_options,
            format_func=lambda value: _format_model_option(provider, value),
            key="media_lab_generate_model",
        )
        model_meta = _catalog_map(provider)[model]

        default_api_key = get_api_key(provider) or ""
        api_key = st.text_input(
            "Provider API Key",
            value=default_api_key,
            type="password",
            key="media_lab_generate_api_key",
            help="Leave this unchanged if the provider key is already configured in Streamlit secrets.",
        )
        title = st.text_input("Thumbnail Title", value=st.session_state.get("media_lab_preview").title if st.session_state.get("media_lab_preview") else "The Physics of Black Holes in 10 Minutes")
        context = st.text_area(
            "Creative Context",
            value="Audience: curious learners. Goal: make the core idea instantly legible and emotionally clickable.",
            height=110,
            key="media_lab_generate_context",
        )
        style = st.text_area(
            "Style Direction",
            value="Bold contrast, one clear subject, cinematic lighting, 16:9 composition, minimal clutter.",
            height=90,
            key="media_lab_generate_style",
        )
        negative_prompt = st.text_input(
            "Avoid",
            value="tiny text, low contrast, too many subjects, busy background",
            key="media_lab_generate_negative",
        )

        config_cols = st.columns(4)
        with config_cols[0]:
            count = st.slider("Concepts", min_value=1, max_value=6, value=3, key="media_lab_generate_count")
        with config_cols[1]:
            size = st.selectbox("Image Size", model_meta["size_options"], key="media_lab_generate_size")
        with config_cols[2]:
            quality = st.selectbox("Quality", model_meta["quality_options"], key="media_lab_generate_quality")
        with config_cols[3]:
            st.markdown(
                f"""
                <div class="media-lab-stat">
                    <div class="media-lab-stat-label">Configured Keys</div>
                    <div class="media-lab-stat-value">{get_provider_key_count(provider)}</div>
                </div>
                """,
                unsafe_allow_html=True,
            )

        background = "opaque"
        output_format = "png"
        with st.expander("Advanced generation options", expanded=False):
            if provider == "openai":
                advanced_cols = st.columns(2)
                with advanced_cols[0]:
                    background = st.selectbox("Background", model_meta.get("background_options", ["opaque"]), key="media_lab_generate_background")
                with advanced_cols[1]:
                    output_format = st.selectbox("Format", model_meta.get("format_options", ["png"]), key="media_lab_generate_format")
            else:
                st.caption("Gemini image generation in this app currently uses its native default output format.")

        estimated_cost = _estimate_image_cost(provider, model, count, size, quality)
        st.caption(f"Estimated spend for this run: about ${estimated_cost:.4f}.")

        if st.button("Generate Thumbnail Concepts", type="primary", use_container_width=True, key="media_lab_generate_button"):
            if not api_key:
                st.error("Add a provider API key in the field above or via Streamlit secrets.")
            elif not title.strip() or not context.strip():
                st.error("Both a title and creative context are required.")
            else:
                try:
                    with st.spinner("Generating thumbnails..."):
                        generator = ThumbnailGenerator(provider=provider, api_key=api_key, model=model)
                        images = generator.generate(
                            title=title,
                            context=context,
                            style=style,
                            negative_prompt=negative_prompt,
                            count=count,
                            size=size,
                            quality=quality,
                            output_format=output_format if provider == "openai" else None,
                            background=background if provider == "openai" else None,
                        )
                    output_dir = Path("outputs") / "thumbnails"
                    output_dir.mkdir(parents=True, exist_ok=True)
                    timestamp = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
                    generated_images: list[dict[str, Any]] = []
                    for index, image in enumerate(images, start=1):
                        extension = "png" if "png" in image.mime_type else "jpg"
                        file_name = f"thumbnail_{timestamp}_{index}.{extension}"
                        file_path = output_dir / file_name
                        file_path.write_bytes(image.image_bytes)
                        generated_images.append(
                            {
                                "file_name": file_name,
                                "mime_type": image.mime_type,
                                "image_bytes": image.image_bytes,
                            }
                        )
                    st.session_state["media_lab_generated_images"] = generated_images
                except Exception as exc:
                    _render_error(map_media_error(exc.__cause__ or exc))

        generated_images: list[dict[str, Any]] = st.session_state.get("media_lab_generated_images", [])
        if generated_images:
            gallery_cols = st.columns(min(len(generated_images), 3) or 1, gap="large")
            for index, image in enumerate(generated_images):
                with gallery_cols[index % len(gallery_cols)]:
                    st.markdown("<div class='media-lab-thumb-card'>", unsafe_allow_html=True)
                    st.image(image["image_bytes"], use_container_width=True)
                    st.download_button(
                        "Download Concept",
                        data=image["image_bytes"],
                        file_name=image["file_name"],
                        mime=image["mime_type"],
                        use_container_width=True,
                        key=f"media_lab_generated_download_{index}",
                    )
                    st.markdown("</div>", unsafe_allow_html=True)


def _render_audio_panel(preview: VideoMetadata | None, formats: dict[str, list[FormatOption]] | None) -> None:
    with st.container(border=True):
        section_header("Audio Download", subtitle="Prepare an MP3 by default, with a lighter advanced path for the original audio container.")
        if not preview:
            st.markdown('<div class="media-lab-empty">Load a video first to prepare audio downloads.</div>', unsafe_allow_html=True)
            return

        default_audio_label = "MP3 (Recommended)" if ffmpeg_available() else "Best Audio (Original Container)"
        audio_label = st.selectbox(
            "Audio Output",
            list(AUDIO_PROFILE_OPTIONS.keys()),
            index=list(AUDIO_PROFILE_OPTIONS.keys()).index(default_audio_label),
            key="media_lab_audio_profile",
        )
        if audio_label == "MP3 (Recommended)" and not ffmpeg_available():
            st.warning("FFmpeg is not installed, so MP3 conversion is not available in this environment.")

        with st.expander("Advanced audio details", expanded=False):
            audio_formats = (formats or {}).get("audio", [])
            if audio_formats:
                st.caption(f"Discovered {len(audio_formats)} audio-only source formats for this video.")
            else:
                st.caption("No dedicated audio-only formats were discovered; yt-dlp will still try the best available audio stream.")

        if st.button("Prepare Audio File", type="primary", use_container_width=True, key="media_lab_prepare_audio"):
            status_slot, progress = _progress_widgets("media_lab_audio_progress")
            try:
                artifact = prepare_audio_download(
                    preview.webpage_url,
                    AUDIO_PROFILE_OPTIONS[audio_label],
                    progress_callback=_progress_callback_factory(status_slot, progress),
                )
                _register_temp_paths(artifact)
                st.session_state["media_lab_audio_artifact"] = artifact
            except Exception as exc:
                _set_progress(status_slot, progress, percent=1.0, message="Audio preparation failed.")
                _render_error(map_media_error(exc.__cause__ or exc))
                return

        artifact: PreparedArtifact | None = st.session_state.get("media_lab_audio_artifact")
        if artifact:
            _render_artifact_panel(
                "Prepared Audio File",
                "Audio artifacts are temporary. Re-run the preparation step if the file is cleaned up between sessions.",
                artifact,
                button_label="Download Audio",
                key="media_lab_audio_download",
            )


def _render_video_panel(preview: VideoMetadata | None, formats: dict[str, list[FormatOption]] | None) -> None:
    with st.container(border=True):
        section_header("Video Download", subtitle="Prepare an MP4 using yt-dlp with quality profiles instead of batch-heavy format pickers.")
        if not preview:
            st.markdown('<div class="media-lab-empty">Load a video first to prepare MP4 downloads.</div>', unsafe_allow_html=True)
            return

        video_label = st.selectbox(
            "Video Quality",
            list(VIDEO_PROFILE_OPTIONS.keys()),
            index=1,
            key="media_lab_video_profile",
        )
        with st.expander("Advanced video details", expanded=False):
            video_formats = (formats or {}).get("video", [])
            if video_formats:
                st.caption(f"Discovered {len(video_formats)} downloadable video format candidates. The app still uses quality profiles for predictable MP4 outputs.")
            else:
                st.caption("No video candidates were discovered yet. Some videos still download successfully through yt-dlp profile selection.")

        if st.button("Prepare Video File", type="primary", use_container_width=True, key="media_lab_prepare_video"):
            status_slot, progress = _progress_widgets("media_lab_video_progress")
            try:
                artifact = prepare_video_download(
                    preview.webpage_url,
                    VIDEO_PROFILE_OPTIONS[video_label],
                    progress_callback=_progress_callback_factory(status_slot, progress),
                )
                _register_temp_paths(artifact)
                st.session_state["media_lab_video_artifact"] = artifact
            except Exception as exc:
                _set_progress(status_slot, progress, percent=1.0, message="Video preparation failed.")
                _render_error(map_media_error(exc.__cause__ or exc))
                return

        artifact: PreparedArtifact | None = st.session_state.get("media_lab_video_artifact")
        if artifact:
            _render_artifact_panel(
                "Prepared Video File",
                "Video artifacts are prepared as temporary files and stay subject to the Streamlit in-app download limit.",
                artifact,
                button_label="Download Video",
                key="media_lab_video_download",
            )


def render() -> None:
    _inject_media_lab_css()
    st.markdown('<div class="media-lab-page">', unsafe_allow_html=True)
    _render_hero()

    preview: VideoMetadata | None = st.session_state.get("media_lab_preview")
    formats: dict[str, list[FormatOption]] | None = st.session_state.get("media_lab_formats")
    transcripts: list[TranscriptOption] | None = st.session_state.get("media_lab_transcripts")
    thumbnail_preview: ThumbnailPreview | None = st.session_state.get("media_lab_thumbnail_preview")

    lookup_col, summary_col = st.columns([1.25, 0.95], gap="large")
    with lookup_col:
        _lookup_video()
        if st.session_state.get("media_lab_error"):
            _render_error(map_media_error(st.session_state["media_lab_error"].__cause__ or st.session_state["media_lab_error"]))
    with summary_col:
        _render_summary_cards(preview, formats, transcripts)

    preview = st.session_state.get("media_lab_preview")
    formats = st.session_state.get("media_lab_formats")
    transcripts = st.session_state.get("media_lab_transcripts", [])
    thumbnail_preview = st.session_state.get("media_lab_thumbnail_preview")

    if not preview:
        st.markdown(
            '<div class="media-lab-empty">Start with a public YouTube video or Short URL to unlock transcript extraction, thumbnail tools, MP4 preparation, and MP3 download.</div>',
            unsafe_allow_html=True,
        )
        st.markdown("</div>", unsafe_allow_html=True)
        return

    _render_metadata(preview, thumbnail_preview)

    top_left, top_right = st.columns([1.0, 1.0], gap="large")
    with top_left:
        _render_transcript_panel(preview, transcripts)
    with top_right:
        _render_thumbnail_download_panel(thumbnail_preview)

    bottom_left, bottom_right = st.columns([1.0, 1.0], gap="large")
    with bottom_left:
        _render_audio_panel(preview, formats)
    with bottom_right:
        _render_video_panel(preview, formats)

    st.markdown(
        (
            '<div class="media-lab-bento" style="margin-top:1rem;">'
            '<div class="media-lab-card-title">Media Lab Notes</div>'
            '<div class="media-lab-card-copy">'
            'This workflow only supports public YouTube videos and Shorts. Private, members-only, age-restricted, region-restricted, or removed videos may fail. '
            'Downloads are prepared into temporary files and may be blocked if they exceed the safe in-app size limit.'
            '</div>'
            '</div>'
        ),
        unsafe_allow_html=True,
    )
    st.markdown("</div>", unsafe_allow_html=True)
