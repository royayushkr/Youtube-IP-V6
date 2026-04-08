from __future__ import annotations

import streamlit as st


APP_THEME_CSS = """
<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap');

:root {
    --yt-red: #FF0000;
    --yt-red-dark: #CC0000;
    --yt-red-soft: #FEF2F2;
    --yt-blue: #065FD4;
    --yt-surface: #F9F9F9;
    --yt-surface-alt: #F9F9F9;
    --yt-surface-muted: #F2F2F2;
    --yt-card: #FFFFFF;
    --yt-border: #E5E5E5;
    --yt-border-strong: rgba(255, 0, 0, 0.18);
    --yt-text: #0F0F0F;
    --yt-text-muted: #606060;
    --yt-text-soft: #8A8A8A;
    --yt-hover: #F2F2F2;
    --yt-shadow: 0 1px 2px rgba(15, 15, 15, 0.06), 0 8px 20px rgba(15, 15, 15, 0.04);
    --yt-shadow-hover: 0 2px 6px rgba(15, 15, 15, 0.08), 0 12px 24px rgba(15, 15, 15, 0.05);
    --app-radius-lg: 22px;
    --app-radius-md: 18px;
    --app-radius-pill: 999px;
    --app-control-height: 46px;
    --app-page-width: 1200px;
    --app-command-width: 1000px;
    --app-section-width: 1120px;
    --app-header-offset: 0.85rem;
    --app-header-inner-offset: 0.15rem;
    --app-font-display: "Inter", system-ui, sans-serif;
    --app-font-body: "Inter", system-ui, sans-serif;
    --app-font-mono: "IBM Plex Mono", ui-monospace, monospace;
}

html, body, [data-testid="stAppViewContainer"] {
    background: #FFFFFF !important;
    color: var(--yt-text) !important;
    font-family: var(--app-font-body);
    font-size: 15px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
}

[data-testid="stHeader"],
[data-testid="stToolbar"],
[data-testid="stDecoration"],
[data-testid="stStatusWidget"] {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
}

[data-testid="stSidebar"] {
    background: #FFFFFF !important;
    border-right: 1px solid var(--yt-border);
}

[data-testid="stSidebarNav"] {
    padding-top: 0.15rem !important;
}

[data-testid="stSidebarNav"] ul {
    gap: 0.35rem !important;
}

[data-testid="stSidebarNavLink"],
[data-testid="stSidebarNav"] ul li a {
    min-height: 42px !important;
    padding: 0.58rem 0.72rem !important;
    margin: 0.05rem 0 !important;
    border-radius: 14px !important;
    transition: background-color 0.14s ease, box-shadow 0.14s ease !important;
}

[data-testid="stSidebarNavLink"]:hover,
[data-testid="stSidebarNav"] ul li a:hover {
    background: var(--yt-hover) !important;
}

[data-testid="stSidebarNavLink"][aria-current="page"],
[data-testid="stSidebarNav"] ul li a[aria-current="page"] {
    background: #FFFFFF !important;
    box-shadow: inset 3px 0 0 var(--yt-red), 0 1px 2px rgba(15, 15, 15, 0.05) !important;
}

[data-testid="stSidebarNavLink"] > div,
[data-testid="stSidebarNav"] ul li a > div {
    gap: 0.4rem !important;
}

[data-testid="stSidebarNavLink"] p,
[data-testid="stSidebarNav"] ul li a p {
    font-weight: 600 !important;
    color: var(--yt-text) !important;
    line-height: 1.25 !important;
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
    padding-top: var(--app-header-offset) !important;
    padding-bottom: 2.75rem;
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
}

section[data-testid="stMain"] > div {
    padding-top: var(--app-header-inner-offset) !important;
}

::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
    background: rgba(15, 23, 42, 0.18);
    border-radius: 4px;
}

.yt-app-hero-shell {
    overflow: visible !important;
    padding-top: 0;
    margin-top: 0;
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
    background: var(--yt-card);
    box-shadow: var(--yt-shadow);
}

.app-hero-kicker {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--yt-red);
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
    height: 3px;
    border-radius: 999px;
    background: var(--yt-red);
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
    background: var(--yt-card);
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
    background: var(--yt-surface) !important;
    color: var(--yt-text) !important;
    border-bottom: 1px solid var(--yt-border) !important;
    font-family: var(--app-font-display);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.styled-dataframe tbody tr:nth-child(odd) { background-color: #FCFCFC; }
.styled-dataframe tbody tr:nth-child(even) { background-color: #FFFFFF; }

.keyword-chip {
    display: inline-flex;
    align-items: center;
    padding: 0.32rem 0.62rem;
    margin: 0 0.4rem 0.4rem 0;
    border-radius: 999px;
    background: var(--yt-surface);
    border: 1px solid var(--yt-border);
    color: var(--yt-text-muted);
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
    background: var(--yt-red) !important;
    color: #FFFFFF !important;
    border: none !important;
    box-shadow: 0 6px 14px rgba(15, 15, 15, 0.08) !important;
}

button[kind="primary"]:hover,
.stButton > button[kind="primary"]:hover,
.stFormSubmitButton > button[kind="primary"]:hover {
    transform: translateY(-1px);
    filter: brightness(1.02);
    box-shadow: 0 8px 18px rgba(15, 15, 15, 0.10) !important;
}

.stButton > button:not([kind="primary"]),
.stFormSubmitButton > button:not([kind="primary"]),
button[kind="secondary"],
button[kind="secondaryFormSubmit"] {
    background: var(--yt-surface) !important;
    color: var(--yt-text) !important;
    border: 1px solid var(--yt-border) !important;
    box-shadow: none !important;
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
    box-shadow: 0 1px 2px rgba(15, 15, 15, 0.04);
}

.stTextInput > div > div:focus-within,
.stSelectbox > div > div:focus-within,
[data-baseweb="select"] > div:focus-within,
[data-baseweb="input"] > div:focus-within {
    border-color: var(--yt-red-dark) !important;
    box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.06) !important;
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
    background: #FFFFFF !important;
    color: var(--yt-red) !important;
    border: 1px solid var(--yt-border) !important;
    box-shadow: inset 0 -2px 0 var(--yt-red) !important;
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
    color: var(--yt-red) !important;
    font-weight: 700 !important;
}

[data-testid="stExpander"] {
    border: 1px solid var(--yt-border) !important;
    border-radius: 16px !important;
    background: #FFFFFF !important;
    box-shadow: none;
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
    background: #FFFFFF;
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
    color: var(--yt-text-muted);
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
