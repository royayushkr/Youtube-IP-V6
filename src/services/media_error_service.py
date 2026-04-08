from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class MediaErrorInfo:
    title: str
    message: str
    technical_detail: str


def map_media_error(exc: Exception | str) -> MediaErrorInfo:
    technical_detail = str(exc or "").strip() or "Unknown error."
    detail = technical_detail.lower()

    if "members-only" in detail or "members only" in detail:
        return MediaErrorInfo(
            title="Members-only video",
            message="This video is limited to channel members, so the app cannot preview or download its public assets.",
            technical_detail=technical_detail,
        )
    if "private video" in detail or "is private" in detail:
        return MediaErrorInfo(
            title="Private video",
            message="This video is private. Use a public YouTube video or Short to continue.",
            technical_detail=technical_detail,
        )
    if "age-restricted" in detail or "sign in to confirm your age" in detail or "confirm your age" in detail:
        return MediaErrorInfo(
            title="Age-restricted video",
            message="This video requires an age check, so Streamlit cannot fetch it in this public workflow.",
            technical_detail=technical_detail,
        )
    if "not available in your country" in detail or "geo-restricted" in detail or "region-restricted" in detail:
        return MediaErrorInfo(
            title="Region-restricted video",
            message="This video is not available from the current region, so the download or preview cannot be completed here.",
            technical_detail=technical_detail,
        )
    if "video is unavailable" in detail or "unavailable" in detail or "not available" in detail:
        return MediaErrorInfo(
            title="Video unavailable",
            message="This video is unavailable, removed, or no longer public.",
            technical_detail=technical_detail,
        )
    if "transcripts are disabled" in detail:
        return MediaErrorInfo(
            title="Transcript unavailable",
            message="This video has transcripts disabled, so there is no caption track to export.",
            technical_detail=technical_detail,
        )
    if "no transcript is available" in detail or "requested transcript language is not available" in detail:
        return MediaErrorInfo(
            title="Transcript unavailable",
            message="This video does not expose a transcript in the requested language.",
            technical_detail=technical_detail,
        )
    if "ffmpeg is required" in detail:
        return MediaErrorInfo(
            title="FFmpeg required",
            message="This operation needs FFmpeg on the deployment host before the file can be prepared.",
            technical_detail=technical_detail,
        )
    if "too large" in detail or "download limit" in detail:
        return MediaErrorInfo(
            title="File too large",
            message="The file is larger than the safe in-app download limit for this Streamlit session.",
            technical_detail=technical_detail,
        )
    if "failed to download" in detail and "thumbnail" in detail:
        return MediaErrorInfo(
            title="Thumbnail download failed",
            message="The public thumbnail could not be fetched for this video.",
            technical_detail=technical_detail,
        )
    if "enter a youtube url" in detail or "use a public youtube" in detail or "valid public youtube video id" in detail:
        return MediaErrorInfo(
            title="Invalid input",
            message="Use a public YouTube watch URL, Short URL, youtu.be URL, or direct video ID.",
            technical_detail=technical_detail,
        )

    return MediaErrorInfo(
        title="Could not complete this request",
        message="The app could not finish this media task for the current video. Try another public video or open the details below.",
        technical_detail=technical_detail,
    )


__all__ = ["MediaErrorInfo", "map_media_error"]
