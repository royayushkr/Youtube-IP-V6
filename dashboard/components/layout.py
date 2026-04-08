"""Shared shell: glass heroes, section headers, and compact shell helpers."""

from __future__ import annotations

from html import escape
from typing import Dict, Iterable, List, Sequence, Tuple

import streamlit as st


PAGE_HERO: Dict[str, Tuple[str, str, str, Tuple[str, ...]]] = {
    "Channel Analysis": (
        "Channel Analysis",
        "Benchmark datasets and see which channels and videos actually move the needle.",
        "Filter committed CSVs, compare engagement across categories, and surface rankings, trends, and scatter insights without leaving this workspace.",
        ("CSV benchmarks", "Engagement signals", "Portfolio view"),
    ),
    "Channel Insights": (
        "Channel Insights",
        "Track public channel snapshots and turn real performance signals into better topic decisions.",
        "Add a public channel by URL, handle, or channel ID. Channel Insights stores manual snapshots over time, highlights the themes and formats that are working, and turns those signals into grounded next-topic ideas.",
        ("SQLite snapshots", "Heuristic and BERTopic-ready", "Public API only"),
    ),
    "Ytuber": (
        "Ytuber",
        "Your live creator workspace for search, audits, AI studio, and planning.",
        "Search by handle, name, or channel ID, then move through audits, keyword intel, outliers, title lab, benchmarks, planner, and AI Studio in one continuous flow.",
        ("YouTube Data API", "Multi-module workspace", "AI Studio"),
    ),
    "Outlier Finder": (
        "Outlier Finder",
        "Discover breakout videos before the niche catches up.",
        "Scan any topic, filter the noise, and surface overperforming videos with clear research signals. Review the winners first, understand the pattern next, and layer AI interpretation only after the evidence is visible.",
        ("Public YouTube data", "Explainable scoring", "Structured AI research"),
    ),
    "Media Lab": (
        "Media Lab",
        "Inspect public YouTube assets and prepare export-ready downloads.",
        "Use one streamlined workspace for video lookup, transcript export, thumbnail preview and generation, plus MP4 and MP3 preparation without bringing back old batch or playlist complexity.",
        ("Single-video workflow", "Transcripts and thumbnails", "MP4 and MP3 prep"),
    ),
    "Deployment": (
        "Deployment",
        "Run locally or ship to Streamlit Cloud with the same entrypoint everywhere.",
        "Use `streamlit_app.py` as the main file, install from `requirements.txt`, configure secrets, and keep ffmpeg available for Media Lab audio flows.",
        ("streamlit_app.py", "Secrets ready", "Cloud deploy"),
    ),
}


def render_page_header(page: str, *, centered: bool = True) -> None:
    """Render the glass hero used across the current V6 shell."""
    row = PAGE_HERO.get(page)
    if not row:
        return

    badge, headline, description, tags = row
    tags_html = ""
    if tags:
        parts: List[str] = []
        for idx, tag in enumerate(tags):
            cls = "feature-hero-tag"
            if idx % 3 == 0:
                cls += " feature-hero-tag--accent-r"
            elif idx % 3 == 1:
                cls += " feature-hero-tag--accent-b"
            parts.append(f'<span class="{cls}">{escape(tag)}</span>')
        tags_html = f'<div class="feature-hero-tags">{"".join(parts)}</div>'

    st.markdown(
        f"""
        <div class="glass-page-hero fade-in">
            <p class="product-eyebrow">
                <span class="product-eyebrow-red">YouTube</span> Creator Insights
                <span class="product-eyebrow-sep">·</span>
                Purdue × Google
            </p>
            <div class="feature-badge">
                <span class="feature-badge-dot" aria-hidden="true"></span>
                {escape(badge)}
            </div>
            <h1 class="feature-headline">{escape(headline)}</h1>
            <p class="feature-description">{escape(description)}</p>
            {tags_html}
        </div>
        """,
        unsafe_allow_html=True,
    )


def render_card_container(title: str, copy: str, *, eyebrow: str | None = None) -> None:
    eyebrow_html = f'<div class="app-hero-kicker">{escape(eyebrow)}</div>' if eyebrow else ""
    st.markdown(
        f"""
        <div class="yt-card fade-in">
            {eyebrow_html}
            <div class="app-section-title">{escape(title)}</div>
            <p class="app-section-copy">{escape(copy)}</p>
        </div>
        """,
        unsafe_allow_html=True,
    )


def render_section_header(title: str, subtitle: str | None = None) -> None:
    subtitle_html = f'<p class="app-section-copy">{escape(subtitle)}</p>' if subtitle else ""
    st.markdown(
        f"""
        <div class="app-section-shell">
            <div class="app-section-title">{escape(title)}</div>
            {subtitle_html}
        </div>
        """,
        unsafe_allow_html=True,
    )


def render_chip_row(items: Iterable[str]) -> None:
    chips = "".join(
        f'<span class="app-meta-pill">{escape(str(item))}</span>'
        for item in items
        if str(item)
    )
    if chips:
        st.markdown(f'<div class="app-inline-chip-row">{chips}</div>', unsafe_allow_html=True)
