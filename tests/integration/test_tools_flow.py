from pathlib import Path

from src.services import youtube_tools
from src.services.media_error_service import map_media_error


def test_prepare_video_download_returns_prepared_artifact(monkeypatch, tmp_path) -> None:
    metadata = youtube_tools.VideoMetadata(
        title="Example",
        channel="Channel",
        duration_seconds=95,
        duration_label="1:35",
        publish_date="2024-01-01",
        video_id="video-1",
        content_type="Video",
        webpage_url="https://www.youtube.com/watch?v=video-1",
        thumbnail_url="https://img.youtube.com/vi/video-1/hqdefault.jpg",
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
                for hook in self.options.get("progress_hooks") or []:
                    hook({"status": "downloading", "downloaded_bytes": 10_000_000, "total_bytes": 20_000_000})
                    hook({"status": "finished"})
                output_template = self.options["outtmpl"]["default"]
                output_path = Path(output_template.replace("%(ext)s", "mp4"))
                output_path.write_bytes(b"video")
            return {"id": "video-1"}

    monkeypatch.setattr(youtube_tools.yt_dlp, "YoutubeDL", _FakeYDL)

    updates = []
    artifact = youtube_tools.prepare_video_download(
        "https://www.youtube.com/watch?v=video-1",
        "up_to_1080p",
        progress_callback=updates.append,
    )

    assert artifact.file_name.endswith(".mp4")
    assert artifact.size_bytes > 0
    assert updates[-1]["stage"] == "ready"


def test_media_error_mapper_explains_restricted_video() -> None:
    info = map_media_error("Sign in to confirm your age. This video may be inappropriate for some users.")

    assert info.title == "Age-restricted video"
    assert "public workflow" in info.message
