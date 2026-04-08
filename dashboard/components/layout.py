"""Shared shell and layout primitives for the Creator Insights app."""

from __future__ import annotations

from html import escape
from typing import Dict, Iterable, Sequence, Tuple

import streamlit as st


PAGE_CONTEXT: Dict[str, Tuple[str, str]] = {
    "Channel Analysis": (
        "Dataset Intelligence",
        "Committed CSV benchmarks with filters, engagement views, and chart-backed summaries for fast category reviews.",
    ),
    "Channel Insights": (
        "Public Channel Depth",
        "Momentum tracking, topic views, and refresh-to-disk public channel snapshots in one research surface.",
    ),
    "Media Lab": (
        "Creator Utilities",
        "Transcript extraction, thumbnail workflows, MP4 prep, and MP3 exports in a streamlined single-video workspace.",
    ),
    "Outlier Finder": (
        "Breakout Research",
        "Quota-aware scans, explainable scoring, compact AI research, and public-video pattern discovery for breakout ideas.",
    ),
    "Ytuber": (
        "Command Center",
        "Channel search, audits, AI planning, competitive reads, and creative workflows under one workspace.",
    ),
    "Deployment": (
        "Launch Readiness",
        "Deploy the V6 app to Streamlit Community Cloud with the right repo, secrets, and media dependencies.",
    ),
}

PRODUCT_TITLE = "YouTube Creator Insights"
PRODUCT_SUBTITLE = (
    "YouTube IP V6 · Purdue University × Google — cross-channel analytics, benchmarking, "
    "public-channel intelligence, outlier research, and creator-ready media workflows."
)

SHELL_BADGES: Sequence[str] = (
    "Creator analytics",
    "Public YouTube data",
    "AI-assisted research",
)


def render_card_container(title: str, copy: str, *, eyebrow: str | None = None) -> None:
    eyebrow_html = (
        f'<div class="app-shell-card-eyebrow">{escape(eyebrow)}</div>' if eyebrow else ""
    )
    st.markdown(
        f"""
        <div class="app-shell-card">
            {eyebrow_html}
            <div class="app-shell-card-title">{escape(title)}</div>
            <div class="app-shell-card-copy">{escape(copy)}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )


def render_page_header(page: str, *, centered: bool = True) -> None:
    """Render the global product header plus page-specific context."""
    context = PAGE_CONTEXT.get(page)
    align_class = "app-shell-header centered" if centered else "app-shell-header"
    badges = "".join(
        f'<span class="app-shell-badge">{escape(badge)}</span>' for badge in SHELL_BADGES
    )
    context_html = ""
    if context:
        eyebrow, copy = context
        context_html = f"""
        <div class="app-shell-context-card">
            <div class="app-shell-context-eyebrow">{escape(eyebrow)}</div>
            <div class="app-shell-context-copy">{escape(copy)}</div>
        </div>
        """

    st.markdown(
        f"""
        <section class="{align_class}">
            <div class="app-shell-kicker">Purdue × Google Capstone Product</div>
            <h1 class="app-shell-title">{PRODUCT_TITLE}</h1>
            <p class="app-shell-subtitle">{escape(PRODUCT_SUBTITLE)}</p>
            <div class="app-shell-badge-row">{badges}</div>
            {context_html}
        </section>
        """,
        unsafe_allow_html=True,
    )


def render_section_header(title: str, subtitle: str | None = None) -> None:
    subtitle_html = (
        f'<p class="app-section-copy">{escape(subtitle)}</p>' if subtitle else ""
    )
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
        f'<span class="app-inline-chip">{escape(str(item))}</span>' for item in items if str(item)
    )
    if chips:
        st.markdown(f'<div class="app-inline-chip-row">{chips}</div>', unsafe_allow_html=True)
