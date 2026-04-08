from pathlib import Path

from src.services import youtube_tools


def test_validate_youtube_url_supports_watch_short_and_direct_id() -> None:
    watch = youtube_tools.validate_youtube_url("https://www.youtube.com/watch?v=abc123xyz90")
    short = youtube_tools.validate_youtube_url("https://www.youtube.com/shorts/xyz789abc12")
    direct = youtube_tools.validate_youtube_url("hij456klm34")

    assert watch.target_type == "video"
    assert watch.video_id == "abc123xyz90"
    assert short.target_type == "short"
    assert short.video_id == "xyz789abc12"
    assert direct.target_type == "video"
    assert direct.canonical_url.endswith("hij456klm34")


def test_get_available_formats_builds_audio_and_video_choices(monkeypatch) -> None:
    youtube_tools._cached_video_info.clear()
    monkeypatch.setattr(
        youtube_tools,
        "_cached_video_info",
        lambda url: {
            "id": "abc123xyz90",
            "formats": [
                {
                    "format_id": "140",
                    "ext": "m4a",
                    "acodec": "mp4a.40.2",
                    "vcodec": "none",
                    "abr": 128,
                    "filesize": 4_500_000,
                },
                {
                    "format_id": "18",
                    "ext": "mp4",
                    "acodec": "mp4a.40.2",
                    "vcodec": "avc1.42001E",
                    "height": 360,
                    "fps": 30,
                    "filesize": 11_000_000,
                },
                {
                    "format_id": "137",
                    "ext": "mp4",
                    "acodec": "none",
                    "vcodec": "avc1.640028",
                    "height": 1080,
                    "fps": 30,
                    "filesize": 40_000_000,
                },
            ],
        },
    )
    monkeypatch.setattr(youtube_tools, "ffmpeg_available", lambda: True)

    formats = youtube_tools.get_available_formats("https://www.youtube.com/watch?v=abc123xyz90")

    assert len(formats["audio"]) == 1
    assert formats["audio"][0].format_id == "140"
    assert len(formats["video"]) == 2
    assert formats["video"][0].selector == "137+bestaudio/best"
    assert formats["video"][0].requires_ffmpeg is True


def test_prepare_audio_download_emits_progress(monkeypatch, tmp_path) -> None:
    metadata = youtube_tools.VideoMetadata(
        title="Example",
        channel="Channel",
        duration_seconds=120,
        duration_label="2:00",
        publish_date="2024-01-01",
        video_id="video-1",
        content_type="Video",
        webpage_url="https://www.youtube.com/watch?v=video-1",
        thumbnail_url=None,
    )
    monkeypatch.setattr(youtube_tools, "fetch_video_metadata", lambda value: metadata)
    monkeypatch.setattr(
        youtube_tools,
        "validate_youtube_url",
        lambda value: youtube_tools.ResolvedYoutubeTarget(
            input_value=value,
            canonical_url="https://www.youtube.com/watch?v=video-1",
            target_type="video",
            video_id="video-1",
        ),
    )
    monkeypatch.setattr(youtube_tools, "safe_temp_dir", lambda prefix: tmp_path)
    monkeypatch.setattr(youtube_tools, "ffmpeg_available", lambda: True)

    class _FakeYDL:
        def __init__(self, options):
            self.options = options

        def __enter__(self):
            return self

        def __exit__(self, exc_type, exc, tb):
            return False

        def extract_info(self, url, download=False):
            if download:
                hooks = self.options.get("progress_hooks") or []
                for hook in hooks:
                    hook({"status": "downloading", "downloaded_bytes": 5_000_000, "total_bytes": 10_000_000})
                    hook({"status": "finished"})
                output_template = self.options["outtmpl"]["default"]
                output_path = Path(output_template.replace("%(ext)s", "mp3"))
                output_path.write_bytes(b"audio")
            return {"id": "video-1"}

    monkeypatch.setattr(youtube_tools.yt_dlp, "YoutubeDL", _FakeYDL)

    updates = []
    artifact = youtube_tools.prepare_audio_download(
        "https://www.youtube.com/watch?v=video-1",
        "mp3_conversion",
        progress_callback=updates.append,
    )

    assert artifact.file_name.endswith(".mp3")
    assert any(update["stage"] == "downloading" for update in updates)
    assert updates[-1]["stage"] == "ready"


def test_prepare_video_download_requires_ffmpeg_for_merged_profiles(monkeypatch) -> None:
    monkeypatch.setattr(youtube_tools, "ffmpeg_available", lambda: False)
    monkeypatch.setattr(
        youtube_tools,
        "fetch_video_metadata",
        lambda value: youtube_tools.VideoMetadata(
            title="Example",
            channel="Channel",
            duration_seconds=120,
            duration_label="2:00",
            publish_date="2024-01-01",
            video_id="video-1",
            content_type="Video",
            webpage_url=value,
            thumbnail_url=None,
        ),
    )

    try:
        youtube_tools.prepare_video_download("https://www.youtube.com/watch?v=video-1", "up_to_1080p")
    except ValueError as exc:
        assert "FFmpeg is required" in str(exc)
    else:  # pragma: no cover - defensive
        raise AssertionError("Expected a ValueError when ffmpeg is missing.")
