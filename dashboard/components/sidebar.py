from __future__ import annotations

import streamlit as st


PAGE_OPTIONS = [
    "Channel Analysis",
    "Channel Insights",
    "Media Lab",
    "Outlier Finder",
    "Ytuber",
    "Deployment",
]

_LEGACY_PAGE_MAP = {
    "Recommendations": "Media Lab",
    "Thumbnails": "Media Lab",
    "Tools": "Media Lab",
}


def _normalize_page_name(value: str) -> str:
    page_name = _LEGACY_PAGE_MAP.get(str(value or "").strip(), str(value or "").strip())
    if page_name not in PAGE_OPTIONS:
        return PAGE_OPTIONS[0]
    return page_name


def render_sidebar_header() -> None:
    """Product-grade sidebar header above Streamlit navigation."""
    st.markdown(
        """
        <div class="app-sidebar-shell">
            <div class="app-sidebar-brand">
                <div class="app-sidebar-brand-mark">▶</div>
                <div>
                    <div class="app-sidebar-brand-title">Creator Insights</div>
                    <div class="app-sidebar-brand-copy">YouTube IP V6 · Purdue × Google</div>
                </div>
            </div>
            <div class="app-sidebar-helper">Native navigation stays visible across deployment, narrower screens, and reruns.</div>
        </div>
        """,
        unsafe_allow_html=True,
    )


def render_sidebar_footer() -> None:
    """Helpful deployment notes beneath the navigation."""
    st.markdown(
        """
        <div class="app-sidebar-footer">
            <div class="app-sidebar-footer-title">Deployment Notes</div>
            <div class="app-sidebar-footer-copy">
                Configure <code>YOUTUBE_API_KEYS</code>, <code>GEMINI_API_KEYS</code>, and
                <code>OPENAI_API_KEYS</code> in Streamlit secrets or your local <code>.env</code>.
            </div>
            <div class="app-sidebar-footer-meta">
                <strong>Purdue University × Google</strong><br/>
                Daniels School of Business — MS BAIM Capstone<br/>
                <span>Repo: royayushkr/Youtube-IP-V6</span>
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )
