from __future__ import annotations

import streamlit as st


APP_THEME_CSS = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap');

:root {
    --app-canvas: #090B14;
    --app-bg: #0F1324;
    --app-bg-alt: #141A31;
    --app-surface-1: #141A31;
    --app-surface-2: #1A2140;
    --app-surface-3: #202850;
    --app-surface-soft: rgba(255, 255, 255, 0.035);
    --app-border: rgba(255, 255, 255, 0.08);
    --app-border-strong: rgba(196, 181, 253, 0.22);
    --app-text: #F7F8FC;
    --app-text-secondary: #B8C1DA;
    --app-text-tertiary: #8993B2;
    --app-accent: #8B5CF6;
    --app-accent-2: #A855F7;
    --app-accent-soft: #C4B5FD;
    --app-success: #34D399;
    --app-warning: #FBBF24;
    --app-shadow: 0 18px 42px rgba(3, 6, 20, 0.52);
    --app-shadow-glow: 0 0 0 1px rgba(139, 92, 246, 0.12), 0 24px 56px rgba(83, 44, 184, 0.24);
    --app-radius-lg: 24px;
    --app-radius-md: 18px;
    --app-radius-pill: 999px;

    /* Backwards-compatible aliases for existing page-level CSS */
    --yt-red: #8B5CF6;
    --yt-red-dark: #6D28D9;
    --yt-bg: #0F1324;
    --yt-bg-alt: #141A31;
    --yt-surface: #1A2140;
    --yt-accent: #A855F7;
    --yt-success: #34D399;
    --yt-warning: #FBBF24;
    --yt-text: #F7F8FC;
    --yt-text-muted: #B8C1DA;
}

html, body, [data-testid="stAppViewContainer"] {
    background:
        radial-gradient(circle at top center, rgba(139, 92, 246, 0.16) 0%, transparent 26%),
        radial-gradient(circle at top left, rgba(168, 85, 247, 0.14) 0%, transparent 22%),
        linear-gradient(180deg, #0E1120 0%, #090B14 45%, #070912 100%) !important;
    color: var(--app-text);
    font-family: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

[data-testid="stHeader"] {
    background: rgba(9, 11, 20, 0.76) !important;
    backdrop-filter: blur(14px);
}

[data-testid="stSidebar"] {
    background:
        radial-gradient(circle at top left, rgba(139, 92, 246, 0.18) 0%, transparent 28%),
        linear-gradient(180deg, #0F1324 0%, #141A31 48%, #0F1324 100%) !important;
    border-right: 1px solid rgba(255, 255, 255, 0.06);
}

[data-testid="stSidebarCollapsedControl"] button,
[data-testid="collapsedControl"] button {
    background: rgba(255, 255, 255, 0.06) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 999px !important;
    color: #FFFFFF !important;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28) !important;
}

.block-container {
    padding-top: 2rem;
    padding-bottom: 3rem;
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.16);
    border-radius: 4px;
}

.yt-page-title {
    font-family: "Space Grotesk", "Plus Jakarta Sans", system-ui, sans-serif;
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 0.3rem;
    color: var(--app-text);
    letter-spacing: -0.03em;
}

.yt-page-subtitle {
    color: var(--app-text-secondary);
    font-size: 15px;
    margin-bottom: 1.4rem;
    max-width: 720px;
}

.yt-section-header {
    font-family: "Space Grotesk", "Plus Jakarta Sans", system-ui, sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-top: 1.7rem;
    margin-bottom: 0.4rem;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    color: var(--app-text);
    letter-spacing: -0.02em;
}

.yt-section-underline {
    width: 88px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--app-accent), var(--app-accent-soft));
    margin-bottom: 1.15rem;
    box-shadow: 0 0 18px rgba(139, 92, 246, 0.32);
}

.metric-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.25rem;
}

.metric-card {
    flex: 1 1 160px;
    padding: 0.95rem 1rem;
    border-radius: var(--app-radius-md);
    background:
        linear-gradient(180deg, rgba(36, 44, 80, 0.92) 0%, rgba(20, 26, 49, 0.98) 100%);
    border: 1px solid var(--app-border);
    box-shadow: var(--app-shadow);
    backdrop-filter: blur(12px);
    transition: transform 0.15s ease-out, box-shadow 0.15s ease-out, border-color 0.15s;
}

.metric-card:hover {
    transform: translateY(-2px);
    border-color: var(--app-border-strong);
    box-shadow: var(--app-shadow-glow);
}

.metric-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--app-text-tertiary);
    margin-bottom: 0.2rem;
}

.metric-value {
    font-family: "Space Grotesk", "Plus Jakarta Sans", system-ui, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.08;
    color: var(--app-text);
}

.metric-icon {
    font-size: 18px;
    margin-right: 0.5rem;
}

.metric-delta {
    font-size: 12px;
    margin-top: 0.2rem;
}

.metric-delta.positive {
    color: var(--app-success);
}

.metric-delta.negative {
    color: #F472B6;
}

.styled-dataframe thead tr th {
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.92), rgba(26, 33, 64, 0.98));
    color: #FFFFFF !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.styled-dataframe tbody tr:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.015);
}

.styled-dataframe tbody tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.028);
}

button[kind="primary"], .stButton > button {
    background: linear-gradient(90deg, var(--app-accent), var(--app-accent-2));
    color: #FFFFFF;
    border-radius: var(--app-radius-pill);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 0.48rem 1.2rem;
    font-weight: 700;
    box-shadow: 0 12px 30px rgba(54, 20, 122, 0.34);
    transition: transform 0.12s ease-out, box-shadow 0.12s ease-out, filter 0.15s;
}

button[kind="primary"]:hover, .stButton > button:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 34px rgba(54, 20, 122, 0.42);
    filter: brightness(1.05);
}

button[kind="secondary"] {
    background: rgba(255, 255, 255, 0.04) !important;
    color: var(--app-text) !important;
    border: 1px solid rgba(196, 181, 253, 0.22) !important;
}

.stTextInput > div > div > input,
.stTextArea textarea,
.stSelectbox > div > div,
.stDateInput > div > div,
.stSlider > div > div,
[data-baseweb="select"] > div,
[data-baseweb="input"] > div {
    background-color: rgba(15, 19, 36, 0.96) !important;
    border-radius: 14px !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    color: var(--app-text) !important;
    box-shadow: none !important;
}

.stTextInput > div > div > input:focus,
.stTextArea textarea:focus {
    outline: none !important;
    border-color: rgba(139, 92, 246, 0.9) !important;
    box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.32) !important;
}

.stToggle label, .stCheckbox label, .stRadio label, .stSelectbox label,
.stDateInput label, .stTextInput label, .stSlider label, .stNumberInput label {
    color: var(--app-text-secondary) !important;
    font-weight: 600 !important;
}

.stTabs [data-baseweb="tab-list"] {
    gap: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.stTabs [data-baseweb="tab"] {
    padding: 0.35rem 0 0.6rem;
}

.stTabs [data-baseweb="tab"] p {
    font-size: 14px;
    font-weight: 600;
    color: var(--app-text-secondary);
}

[aria-selected="true"] p {
    color: var(--app-text) !important;
}

.yt-card {
    border-radius: var(--app-radius-md);
    padding: 1.1rem 1.25rem;
    background:
        linear-gradient(180deg, rgba(33, 40, 73, 0.96) 0%, rgba(20, 26, 49, 0.98) 100%);
    border: 1px solid var(--app-border);
    box-shadow: var(--app-shadow);
    backdrop-filter: blur(12px);
    margin-bottom: 1.25rem;
}

.keyword-chip {
    display: inline-flex;
    align-items: center;
    padding: 0.18rem 0.62rem;
    border-radius: 999px;
    margin: 0.12rem;
    font-size: 12px;
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.22), rgba(196, 181, 253, 0.16));
    border: 1px solid rgba(196, 181, 253, 0.16);
    color: var(--app-text);
    white-space: nowrap;
}

.fade-in {
    animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
"""


def inject_shared_theme() -> None:
    st.markdown(APP_THEME_CSS, unsafe_allow_html=True)
