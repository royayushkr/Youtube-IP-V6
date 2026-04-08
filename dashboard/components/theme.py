from __future__ import annotations

import streamlit as st


APP_THEME_CSS = """
<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap');

:root {
    --yt-red: #FF0033;
    --yt-red-dark: #D92D20;
    --yt-red-soft: #FFF3F5;
    --yt-rose: #FF5A76;
    --yt-surface: #FFFFFF;
    --yt-surface-alt: #FFF8F8;
    --yt-surface-muted: #F8FAFC;
    --yt-border: rgba(15, 23, 42, 0.08);
    --yt-border-strong: rgba(255, 0, 51, 0.16);
    --yt-text: #101828;
    --yt-text-muted: #667085;
    --yt-text-soft: #98A2B3;
    --yt-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
    --yt-shadow-hover: 0 22px 52px rgba(15, 23, 42, 0.12);
    --app-radius-lg: 22px;
    --app-radius-md: 18px;
    --app-radius-pill: 999px;
    --app-control-height: 46px;
    --app-page-width: 1200px;
    --app-command-width: 1000px;
    --app-section-width: 1120px;
    --app-font-display: "Inter", system-ui, sans-serif;
    --app-font-body: "Inter", system-ui, sans-serif;
    --app-font-mono: "IBM Plex Mono", ui-monospace, monospace;
}

html, body, [data-testid="stAppViewContainer"] {
    background: linear-gradient(180deg, #FFF8F8 0%, #FFFFFF 24%, #FFFFFF 100%) !important;
    color: var(--yt-text) !important;
    font-family: var(--app-font-body);
    font-size: 15px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
}

[data-testid="stDecoration"] {
    height: 3px !important;
    min-height: 3px !important;
    max-height: 3px !important;
    background: linear-gradient(90deg, #FF0033, #FF5A76) !important;
}

[data-testid="stHeader"] {
    background: rgba(255, 255, 255, 0.88) !important;
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--yt-border);
}

[data-testid="stSidebar"] {
    background: linear-gradient(180deg, #FFFFFF 0%, #FFF7F8 100%) !important;
    border-right: 1px solid var(--yt-border);
}

[data-testid="stSidebarCollapsedControl"] button,
[data-testid="collapsedControl"] button {
    background: #FFFFFF !important;
    border: 1px solid var(--yt-border) !important;
    border-radius: 999px !important;
    color: var(--yt-text) !important;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

.block-container {
    max-width: var(--app-page-width) !important;
    padding-top: 2.1rem !important;
    padding-bottom: 2.75rem;
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
}

section[data-testid="stMain"] > div {
    padding-top: 0.85rem !important;
}

::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
    background: rgba(15, 23, 42, 0.18);
    border-radius: 4px;
}

.yt-app-hero-shell {
    overflow: visible !important;
    padding-top: 0.35rem;
}

.yt-page-title {
    font-family: var(--app-font-display);
    font-size: clamp(2rem, 3vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.15;
    color: var(--yt-text);
    margin-bottom: 0.45rem;
}

.yt-page-subtitle {
    color: var(--yt-text-muted);
    font-size: 15px;
    max-width: 860px;
    line-height: 1.65;
}

.app-hero-block {
    padding: 1.1rem 1.2rem;
    border-radius: 22px;
    border: 1px solid var(--yt-border);
    background: linear-gradient(180deg, #FFFFFF 0%, #FFF8F8 100%);
    box-shadow: var(--yt-shadow);
}

.app-hero-kicker {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--yt-red-dark);
    margin-bottom: 0.35rem;
}

.app-hero-blurb {
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
    color: var(--yt-text-muted);
    max-width: 760px;
}

.yt-section-header {
    font-family: var(--app-font-display);
    font-size: 1.35rem;
    font-weight: 700;
    margin-top: 1.55rem;
    margin-bottom: 0.35rem;
    color: var(--yt-text);
}

.yt-section-underline {
    width: 76px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(90deg, #FF0033, #FF5A76);
    margin-bottom: 0.95rem;
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
    background: linear-gradient(180deg, #FFFFFF 0%, #FFF8F8 100%);
    border: 1px solid var(--yt-border);
    box-shadow: var(--yt-shadow);
    transition: transform 0.14s ease, box-shadow 0.14s ease, border-color 0.14s ease;
}

.metric-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--yt-shadow-hover);
    border-color: var(--yt-border-strong);
}

.metric-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--yt-text-muted);
    margin-bottom: 0.25rem;
    font-weight: 700;
}

.metric-value {
    font-family: var(--app-font-display);
    font-size: 1.7rem;
    font-weight: 800;
    line-height: 1.1;
    color: var(--yt-text);
}

.metric-delta.positive { color: #027A48; }
.metric-delta.negative { color: #B42318; }

.styled-dataframe thead tr th {
    background: linear-gradient(90deg, #FF0033, #FF5A76) !important;
    color: #FFFFFF !important;
    border-bottom: none !important;
    font-family: var(--app-font-display);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.styled-dataframe tbody tr:nth-child(odd) { background-color: rgba(255, 248, 248, 0.55); }
.styled-dataframe tbody tr:nth-child(even) { background-color: rgba(255, 255, 255, 0.92); }

.keyword-chip {
    display: inline-flex;
    align-items: center;
    padding: 0.32rem 0.62rem;
    margin: 0 0.4rem 0.4rem 0;
    border-radius: 999px;
    background: rgba(255, 0, 51, 0.08);
    border: 1px solid rgba(255, 0, 51, 0.12);
    color: #B42318;
    font-size: 12px;
    font-weight: 700;
}

.ytuber-status-card {
    text-align: center;
}

.ytuber-status-label {
    color: var(--yt-text-muted);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
}

.ytuber-status-value {
    color: var(--yt-text);
    font-size: 28px;
    font-weight: 800;
    line-height: 1.1;
}

.ytuber-status-detail {
    color: var(--yt-text-muted);
    font-size: 12px;
    margin-top: 0.2rem;
}

.stButton > button,
.stFormSubmitButton > button {
    min-height: var(--app-control-height) !important;
    border-radius: 999px !important;
    padding: 0.55rem 1.15rem !important;
    font-family: var(--app-font-display) !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease !important;
}

button[kind="primary"],
.stButton > button[kind="primary"],
.stFormSubmitButton > button[kind="primary"] {
    background: linear-gradient(135deg, #FF0033 0%, #FF5A76 100%) !important;
    color: #FFFFFF !important;
    border: none !important;
    box-shadow: 0 16px 34px rgba(255, 0, 51, 0.22) !important;
}

button[kind="primary"]:hover,
.stButton > button[kind="primary"]:hover,
.stFormSubmitButton > button[kind="primary"]:hover {
    transform: translateY(-1px);
    filter: brightness(1.02);
    box-shadow: 0 20px 38px rgba(255, 0, 51, 0.28) !important;
}

.stButton > button:not([kind="primary"]),
.stFormSubmitButton > button:not([kind="primary"]),
button[kind="secondary"],
button[kind="secondaryFormSubmit"] {
    background: #FFFFFF !important;
    color: var(--yt-text) !important;
    border: 1px solid var(--yt-border) !important;
    box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06) !important;
}

.stTextInput > div > div > input,
.stTextArea textarea,
.stSelectbox > div > div,
.stDateInput > div > div,
.stSlider > div > div,
[data-baseweb="select"] > div,
[data-baseweb="input"] > div {
    background-color: #FFFFFF !important;
    border-radius: 12px !important;
    border: 1px solid var(--yt-border) !important;
    color: var(--yt-text) !important;
    min-height: var(--app-control-height) !important;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
}

.stTextInput > div > div:focus-within,
.stSelectbox > div > div:focus-within,
[data-baseweb="select"] > div:focus-within,
[data-baseweb="input"] > div:focus-within {
    border-color: var(--yt-red-dark) !important;
    box-shadow: 0 0 0 4px rgba(255, 0, 51, 0.08) !important;
}

.stTextInput input::placeholder,
.stTextArea textarea::placeholder {
    color: var(--yt-text-soft) !important;
}

[data-testid="stSegmentedControl"] {
    width: 100%;
    background: #FFFFFF !important;
    border-radius: 16px !important;
    padding: 6px !important;
    border: 1px solid var(--yt-border) !important;
}

[data-testid="stSegmentedControl"] button,
[data-testid="stSegmentedControl"] [role="radio"] {
    min-height: var(--app-control-height) !important;
    width: 100% !important;
    justify-content: center !important;
    border-radius: 12px !important;
    color: var(--yt-text-muted) !important;
}

[data-testid="stSegmentedControl"] [aria-checked="true"],
[data-testid="stSegmentedControl"] [data-selected="true"] {
    background: linear-gradient(135deg, rgba(255, 0, 51, 0.10), rgba(255, 90, 118, 0.08)) !important;
    color: var(--yt-red-dark) !important;
    border: 1px solid rgba(255, 0, 51, 0.12) !important;
}

.stToggle label, .stCheckbox label, .stRadio label, .stSelectbox label,
.stDateInput label, .stTextInput label, .stSlider label, .stNumberInput label {
    color: var(--yt-text-muted) !important;
    font-weight: 600 !important;
    font-size: 13px !important;
}

.stTabs [data-baseweb="tab-list"] {
    gap: 0.5rem;
    border-bottom: 1px solid var(--yt-border);
}

.stTabs [data-baseweb="tab"] p {
    font-size: 14px;
    font-weight: 600;
    color: var(--yt-text-muted);
}

[aria-selected="true"] p {
    color: var(--yt-red-dark) !important;
    font-weight: 700 !important;
}

[data-testid="stExpander"] {
    border: 1px solid var(--yt-border) !important;
    border-radius: 16px !important;
    background: #FFFFFF !important;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}

[data-testid="stExpander"] summary {
    font-family: var(--app-font-display);
    font-size: 13px;
    font-weight: 700;
    color: var(--yt-text);
}

.yt-card,
.yt-summary-panel {
    border-radius: var(--app-radius-lg);
    padding: 1.1rem 1.2rem;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFF8F8 100%);
    border: 1px solid var(--yt-border);
    box-shadow: var(--yt-shadow);
    margin-bottom: 1rem;
}

.yt-callout-info,
.yt-callout-recommend {
    border-radius: 16px;
    padding: 1rem 1.1rem;
    border: 1px solid var(--yt-border);
    background: #FFFFFF;
    color: var(--yt-text-muted);
    margin-bottom: 1rem;
}

.yt-summary-panel::before { display: none; }
.yt-summary-panel h3 {
    margin: 0 0 0.7rem;
    font-family: var(--app-font-display);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--yt-red-dark);
}

.strategy-summary-list {
    margin: 0;
    padding-left: 1.2rem;
    color: var(--yt-text-muted);
    font-size: 14px;
    line-height: 1.62;
}

.strategy-summary-list strong { color: var(--yt-text); }

.app-section-shell { max-width: var(--app-section-width); margin: 0 auto 2rem; }
.app-command-shell { max-width: var(--app-command-width); margin: 0 auto 2rem; }
.app-section-title {
    font-family: var(--app-font-display);
    font-size: 1.55rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--yt-text);
    margin-bottom: 0.25rem;
}
.app-section-copy {
    color: var(--yt-text-muted);
    font-size: 14px;
    line-height: 1.6;
    max-width: 760px;
}
.app-subsection-label {
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--yt-text-soft);
    font-weight: 700;
    margin: 0.25rem 0 0.65rem;
}

.thumb-card {
    border-radius: 20px;
    overflow: hidden;
    background: #FFFFFF;
    border: 1px solid var(--yt-border);
    box-shadow: var(--yt-shadow);
    transition: transform 0.14s ease, box-shadow 0.14s ease;
}
.thumb-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--yt-shadow-hover);
}
.thumb-card img { width: 100%; display: block; }
.thumb-card-footer {
    padding: 0.5rem 0.7rem 0.7rem;
    font-size: 12px;
    color: var(--yt-text-muted);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div[data-testid="stCaption"] { color: var(--yt-text-soft) !important; }
div[data-testid="stMarkdownContainer"] h1,
div[data-testid="stMarkdownContainer"] h2,
div[data-testid="stMarkdownContainer"] h3 { color: var(--yt-text); }

.fade-in {
    animation: fadeIn 0.35s ease-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
"""


def inject_shared_theme() -> None:
    st.markdown(APP_THEME_CSS, unsafe_allow_html=True)
