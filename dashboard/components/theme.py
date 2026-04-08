from __future__ import annotations

import streamlit as st

from dashboard.components.inputs import SEARCH_INPUT_LABELS


def _build_search_input_surface_selectors() -> str:
    return ",\n".join(
        f'div[data-baseweb="input"]:has(input[aria-label="{label}"]) > div'
        for label in SEARCH_INPUT_LABELS
    )


def _build_search_input_inner_selectors() -> str:
    return ",\n".join(
        f'div[data-baseweb="input"]:has(input[aria-label="{label}"]) input'
        for label in SEARCH_INPUT_LABELS
    )


SEARCH_INPUT_SURFACE_SELECTORS = _build_search_input_surface_selectors()
SEARCH_INPUT_INNER_SELECTORS = _build_search_input_inner_selectors()


def _build_global_theme_css() -> str:
    return """
    <style>
    :root {
        --app-accent: #FF0033;
        --app-accent-dark: #E11D48;
        --app-accent-soft: #FFF1F4;
        --app-accent-soft-strong: #FFE4EA;
        --app-accent-blue: #2563EB;
        --app-bg: #FFFFFF;
        --app-surface: #F9FAFB;
        --app-surface-2: #F3F4F6;
        --app-card: #FFFFFF;
        --app-border: #E5E7EB;
        --app-border-strong: rgba(255, 0, 51, 0.16);
        --app-text: #111827;
        --app-text-muted: #6B7280;
        --app-text-soft: #9CA3AF;
        --app-hover: #F8FAFC;
        --app-shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04);
        --app-shadow-md: 0 10px 30px rgba(15, 23, 42, 0.06);
        --app-shadow-lg: 0 18px 46px rgba(15, 23, 42, 0.08);
        --app-radius-sm: 14px;
        --app-radius-md: 18px;
        --app-radius-lg: 24px;
        --app-radius-xl: 28px;
        --app-radius-pill: 999px;
        --app-control-height: 46px;
        --app-input-height: 46px;
        --app-search-height: 52px;
        --app-textarea-min-height: 120px;
        --app-input-radius: 14px;
        --app-input-pill-radius: 999px;
        --app-input-padding-x: 0.95rem;
        --app-input-padding-y: 0.72rem;
        --app-input-border: #E5E7EB;
        --app-input-hover-border: #D1D5DB;
        --app-input-focus-border: #F43F5E;
        --app-input-focus-shadow: 0 0 0 3px rgba(255, 0, 51, 0.10);
        --app-input-placeholder: #9CA3AF;
        --app-header-height: 3.6rem;
        --app-page-width: 1220px;
        --app-command-width: 1040px;
        --app-section-width: 1140px;
        --app-font-display: "DMSans", system-ui, sans-serif;
        --app-font-body: "DMSans", system-ui, sans-serif;
        --app-font-mono: "FiraCode", ui-monospace, monospace;
        --yt-red: var(--app-accent);
        --yt-red-dark: var(--app-accent-dark);
        --yt-red-soft: var(--app-accent-soft);
        --yt-blue: var(--app-accent-blue);
        --yt-surface: var(--app-surface);
        --yt-surface-alt: var(--app-surface);
        --yt-surface-muted: var(--app-surface-2);
        --yt-card: var(--app-card);
        --yt-border: var(--app-border);
        --yt-border-strong: var(--app-border-strong);
        --yt-text: var(--app-text);
        --yt-text-muted: var(--app-text-muted);
        --yt-text-soft: var(--app-text-soft);
        --yt-hover: var(--app-hover);
        --yt-shadow: var(--app-shadow-md);
        --yt-shadow-hover: var(--app-shadow-lg);
    }

    html, body, [data-testid="stAppViewContainer"] {
        background:
            radial-gradient(circle at top center, rgba(255, 0, 51, 0.05) 0%, transparent 28%),
            linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%) !important;
        color: var(--app-text) !important;
        font-family: var(--app-font-body);
        font-size: 15px;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
    }

    body {
        color: var(--app-text);
    }

    [data-testid="stHeader"] {
        height: var(--app-header-height) !important;
        background: rgba(255, 255, 255, 0.82) !important;
        backdrop-filter: blur(18px);
        border-bottom: 1px solid rgba(229, 231, 235, 0.92) !important;
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
    }

    [data-testid="stHeader"] * {
        color: var(--app-text) !important;
    }

    [data-testid="stDecoration"] {
        display: none !important;
    }

    [data-testid="stStatusWidget"] {
        visibility: hidden !important;
        width: 0 !important;
        opacity: 0 !important;
    }

    [data-testid="stToolbar"] {
        top: 0.35rem !important;
        right: 0.9rem !important;
    }

    [data-testid="stToolbar"] button {
        border-radius: 999px !important;
        border: 1px solid var(--app-border) !important;
        background: rgba(255, 255, 255, 0.9) !important;
        box-shadow: var(--app-shadow-sm) !important;
        transition: border-color 0.16s ease, background-color 0.16s ease, transform 0.16s ease !important;
    }

    [data-testid="stToolbar"] button:hover {
        border-color: var(--app-border-strong) !important;
        background: var(--app-accent-soft) !important;
        transform: translateY(-1px);
    }

    [data-testid="stAppViewContainer"] > .main {
        background: transparent !important;
    }

    .block-container {
        max-width: var(--app-page-width) !important;
        padding-top: calc(var(--app-header-height) + 1rem) !important;
        padding-bottom: 2.75rem !important;
        padding-left: 1.25rem !important;
        padding-right: 1.25rem !important;
    }

    section[data-testid="stMain"] > div {
        padding-top: 0 !important;
    }

    .stAppDeployButton {
        display: none !important;
    }

    .app-shell-header {
        max-width: 900px;
        margin: 0 auto 1.55rem;
    }

    .app-shell-header.centered {
        text-align: center;
        align-items: center;
    }

    .app-shell-kicker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.42rem 0.82rem;
        border-radius: var(--app-radius-pill);
        border: 1px solid rgba(255, 0, 51, 0.14);
        background: var(--app-accent-soft);
        color: var(--app-accent-dark);
        font-size: 11px;
        letter-spacing: 0.14em;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 0.9rem;
    }

    .app-shell-title,
    .yt-page-title {
        font-family: var(--app-font-display);
        font-size: clamp(2.4rem, 4vw, 3.7rem);
        font-weight: 700;
        letter-spacing: -0.05em;
        line-height: 1.02;
        color: var(--app-text);
        margin: 0 0 0.7rem;
    }

    .app-shell-subtitle,
    .yt-page-subtitle {
        max-width: 760px;
        margin: 0 auto;
        color: var(--app-text-muted);
        font-size: 1rem;
        line-height: 1.72;
    }

    .app-shell-badge-row,
    .app-inline-chip-row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.55rem;
        margin-top: 1rem;
    }

    .app-shell-badge,
    .app-inline-chip {
        display: inline-flex;
        align-items: center;
        padding: 0.42rem 0.8rem;
        border-radius: var(--app-radius-pill);
        border: 1px solid var(--app-border);
        background: rgba(255, 255, 255, 0.88);
        color: var(--app-text-muted);
        font-size: 12px;
        font-weight: 600;
        box-shadow: var(--app-shadow-sm);
    }

    .app-shell-context-card,
    .app-shell-card,
    .app-hero-block {
        width: min(100%, 820px);
        margin: 1.05rem auto 0;
        padding: 1.25rem 1.35rem;
        border-radius: var(--app-radius-xl);
        background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.97) 0%, rgba(250, 251, 252, 0.98) 100%);
        border: 1px solid rgba(229, 231, 235, 0.92);
        box-shadow: var(--app-shadow-md);
    }

    .app-shell-context-eyebrow,
    .app-shell-card-eyebrow,
    .app-hero-kicker {
        font-size: 11px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--app-accent-dark);
        margin-bottom: 0.45rem;
    }

    .app-shell-context-copy,
    .app-shell-card-copy,
    .app-hero-blurb {
        margin: 0;
        color: var(--app-text-muted);
        font-size: 14px;
        line-height: 1.7;
    }

    .app-shell-card-title {
        font-family: var(--app-font-display);
        font-size: 18px;
        font-weight: 700;
        color: var(--app-text);
        margin-bottom: 0.3rem;
    }

    .app-section-shell {
        max-width: var(--app-section-width);
        margin: 0 auto 0.8rem;
    }

    .app-section-title,
    .yt-section-header {
        font-family: var(--app-font-display);
        font-size: 1.42rem;
        font-weight: 700;
        letter-spacing: -0.03em;
        color: var(--app-text);
        margin: 0 0 0.18rem;
    }

    .app-section-copy {
        margin: 0;
        color: var(--app-text-muted);
        font-size: 14px;
        line-height: 1.65;
        max-width: 760px;
    }

    .yt-section-header span {
        display: inline;
    }

    .yt-section-underline {
        width: 64px;
        height: 3px;
        border-radius: 999px;
        background: linear-gradient(90deg, var(--app-accent), rgba(255, 0, 51, 0.18));
        margin: 0.45rem 0 0.75rem;
    }

    .metric-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 0.95rem;
        margin-bottom: 1.25rem;
    }

    .metric-card {
        padding: 1rem 1.05rem;
        border-radius: var(--app-radius-md);
        background: rgba(255, 255, 255, 0.94);
        border: 1px solid rgba(229, 231, 235, 0.95);
        box-shadow: var(--app-shadow-sm);
        transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
    }

    .metric-card:hover {
        transform: translateY(-2px);
        border-color: var(--app-border-strong);
        box-shadow: var(--app-shadow-md);
    }

    .metric-label {
        color: var(--app-text-muted);
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.24rem;
    }

    .metric-value {
        font-family: var(--app-font-display);
        color: var(--app-text);
        font-size: 1.7rem;
        font-weight: 700;
        line-height: 1.08;
    }

    .metric-delta {
        margin-top: 0.25rem;
        font-size: 12px;
        font-weight: 600;
    }

    .metric-delta.positive { color: #027A48; }
    .metric-delta.negative { color: #B42318; }

    .yt-card,
    .yt-summary-panel,
    .yt-callout-info,
    .yt-callout-recommend,
    .thumb-card {
        background: rgba(255, 255, 255, 0.96);
        border: 1px solid rgba(229, 231, 235, 0.95);
        border-radius: var(--app-radius-lg);
        box-shadow: var(--app-shadow-sm);
    }

    .yt-summary-panel,
    .yt-callout-info,
    .yt-callout-recommend {
        padding: 1.1rem 1.15rem;
        margin-bottom: 1rem;
    }

    .yt-summary-panel h3,
    .yt-callout-recommend h4 {
        margin: 0 0 0.65rem;
        color: var(--app-text);
        font-family: var(--app-font-display);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .strategy-summary-list {
        margin: 0;
        padding-left: 1.15rem;
        color: var(--app-text-muted);
        font-size: 14px;
        line-height: 1.65;
    }

    .strategy-summary-list strong {
        color: var(--app-text);
    }

    .keyword-chip {
        display: inline-flex;
        align-items: center;
        padding: 0.34rem 0.64rem;
        margin: 0 0.45rem 0.45rem 0;
        border-radius: var(--app-radius-pill);
        background: var(--app-surface);
        border: 1px solid var(--app-border);
        color: var(--app-text-muted);
        font-size: 12px;
        font-weight: 700;
    }

    .stButton > button,
    .stFormSubmitButton > button {
        min-height: var(--app-control-height) !important;
        border-radius: 14px !important;
        padding: 0.62rem 1.1rem !important;
        font-family: var(--app-font-display) !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease, background-color 0.16s ease !important;
    }

    button[kind="primary"],
    .stButton > button[kind="primary"],
    .stFormSubmitButton > button[kind="primary"] {
        background: linear-gradient(180deg, #FF174A 0%, #E11D48 100%) !important;
        color: #FFFFFF !important;
        border: 1px solid transparent !important;
        box-shadow: 0 12px 24px rgba(225, 29, 72, 0.20) !important;
    }

    button[kind="primary"]:hover,
    .stButton > button[kind="primary"]:hover,
    .stFormSubmitButton > button[kind="primary"]:hover {
        transform: translateY(-1px);
        box-shadow: 0 18px 30px rgba(225, 29, 72, 0.22) !important;
        filter: brightness(1.01);
    }

    .stButton > button:not([kind="primary"]),
    .stFormSubmitButton > button:not([kind="primary"]),
    button[kind="secondary"],
    button[kind="secondaryFormSubmit"] {
        background: rgba(255, 255, 255, 0.95) !important;
        color: var(--app-text) !important;
        border: 1px solid var(--app-border) !important;
        box-shadow: var(--app-shadow-sm) !important;
    }

    .stButton > button:not([kind="primary"]):hover,
    .stFormSubmitButton > button:not([kind="primary"]):hover,
    button[kind="secondary"]:hover,
    button[kind="secondaryFormSubmit"]:hover {
        background: var(--app-accent-soft) !important;
        color: var(--app-accent-dark) !important;
        border-color: var(--app-border-strong) !important;
        transform: translateY(-1px);
    }

    div[data-testid="stTextInput"] label,
    div[data-testid="stTextArea"] label,
    div[data-testid="stSelectbox"] label,
    div[data-testid="stDateInput"] label,
    div[data-testid="stNumberInput"] label,
    .stToggle label,
    .stCheckbox label,
    .stRadio label,
    .stSlider label {
        color: var(--app-text-muted) !important;
        font-size: 13px !important;
        font-weight: 600 !important;
    }

    div[data-testid="stTextInput"] [data-baseweb="input"] > div,
    div[data-testid="stNumberInput"] [data-baseweb="input"] > div,
    div[data-testid="stDateInput"] [data-baseweb="input"] > div,
    div[data-testid="stSelectbox"] [data-baseweb="select"] > div {
        background: #FFFFFF !important;
        border-radius: var(--app-input-radius) !important;
        border: 1px solid var(--app-input-border) !important;
        color: var(--app-text) !important;
        min-height: var(--app-input-height) !important;
        padding: 0 var(--app-input-padding-x) !important;
        display: flex !important;
        align-items: center !important;
        box-shadow: none !important;
        transition: border-color 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease !important;
    }

    div[data-testid="stTextArea"] [data-baseweb="textarea"] > div {
        background: #FFFFFF !important;
        border-radius: var(--app-input-radius) !important;
        border: 1px solid var(--app-input-border) !important;
        min-height: var(--app-textarea-min-height) !important;
        padding: var(--app-input-padding-y) var(--app-input-padding-x) !important;
        box-shadow: none !important;
        transition: border-color 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease !important;
    }

    div[data-testid="stTextInput"] [data-baseweb="input"] > div:hover,
    div[data-testid="stNumberInput"] [data-baseweb="input"] > div:hover,
    div[data-testid="stDateInput"] [data-baseweb="input"] > div:hover,
    div[data-testid="stSelectbox"] [data-baseweb="select"] > div:hover,
    div[data-testid="stTextArea"] [data-baseweb="textarea"] > div:hover {
        border-color: var(--app-input-hover-border) !important;
        background: #FFFFFF !important;
    }

    div[data-testid="stTextInput"] [data-baseweb="input"] > div:focus-within,
    div[data-testid="stNumberInput"] [data-baseweb="input"] > div:focus-within,
    div[data-testid="stDateInput"] [data-baseweb="input"] > div:focus-within,
    div[data-testid="stSelectbox"] [data-baseweb="select"] > div:focus-within,
    div[data-testid="stTextArea"] [data-baseweb="textarea"] > div:focus-within {
        border-color: var(--app-input-focus-border) !important;
        box-shadow: var(--app-input-focus-shadow) !important;
    }

    div[data-testid="stTextInput"] input,
    div[data-testid="stNumberInput"] input,
    div[data-testid="stDateInput"] input,
    div[data-testid="stSelectbox"] input,
    div[data-testid="stSelectbox"] [data-baseweb="select"] span,
    div[data-testid="stTextArea"] textarea {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
        color: var(--app-text) !important;
        font-size: 14px !important;
        line-height: 1.55 !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    div[data-testid="stTextInput"] input,
    div[data-testid="stNumberInput"] input,
    div[data-testid="stDateInput"] input,
    div[data-testid="stSelectbox"] input {
        min-height: calc(var(--app-input-height) - 2px) !important;
    }

    div[data-testid="stTextArea"] textarea {
        min-height: calc(var(--app-textarea-min-height) - (2 * var(--app-input-padding-y))) !important;
        resize: vertical !important;
    }

    div[data-testid="stTextInput"] input::placeholder,
    div[data-testid="stNumberInput"] input::placeholder,
    div[data-testid="stDateInput"] input::placeholder,
    div[data-testid="stSelectbox"] input::placeholder,
    div[data-testid="stTextArea"] textarea::placeholder {
        color: var(--app-input-placeholder) !important;
        opacity: 1 !important;
    }

    div[data-testid="stTextInput"] [data-baseweb="input"]::before,
    div[data-testid="stTextInput"] [data-baseweb="input"]::after,
    div[data-testid="stNumberInput"] [data-baseweb="input"]::before,
    div[data-testid="stNumberInput"] [data-baseweb="input"]::after,
    div[data-testid="stDateInput"] [data-baseweb="input"]::before,
    div[data-testid="stDateInput"] [data-baseweb="input"]::after,
    div[data-testid="stTextArea"] [data-baseweb="textarea"]::before,
    div[data-testid="stTextArea"] [data-baseweb="textarea"]::after {
        display: none !important;
        box-shadow: none !important;
    }

    [data-testid="stSegmentedControl"] {
        width: 100%;
        background: rgba(255, 255, 255, 0.96) !important;
        border-radius: 16px !important;
        padding: 6px !important;
        border: 1px solid var(--app-border) !important;
        box-shadow: var(--app-shadow-sm);
    }

    [data-testid="stSegmentedControl"] button,
    [data-testid="stSegmentedControl"] [role="radio"] {
        min-height: var(--app-control-height) !important;
        width: 100% !important;
        justify-content: center !important;
        border-radius: 12px !important;
        color: var(--app-text-muted) !important;
    }

    [data-testid="stSegmentedControl"] [aria-checked="true"],
    [data-testid="stSegmentedControl"] [data-selected="true"] {
        background: var(--app-accent-soft) !important;
        color: var(--app-accent-dark) !important;
        border: 1px solid rgba(255, 0, 51, 0.12) !important;
        box-shadow: inset 0 -2px 0 var(--app-accent) !important;
    }

    .stTabs [data-baseweb="tab-list"] {
        gap: 0.55rem;
        border-bottom: 1px solid var(--app-border);
    }

    .stTabs [data-baseweb="tab"] {
        border-radius: 12px 12px 0 0;
        transition: background-color 0.16s ease, color 0.16s ease;
    }

    .stTabs [data-baseweb="tab"]:hover {
        background: var(--app-accent-soft);
    }

    .stTabs [data-baseweb="tab"] p {
        font-size: 14px;
        font-weight: 600;
        color: var(--app-text-muted);
    }

    [aria-selected="true"] p {
        color: var(--app-accent-dark) !important;
        font-weight: 700 !important;
    }

    [data-testid="stExpander"] {
        border: 1px solid var(--app-border) !important;
        border-radius: 16px !important;
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: none !important;
    }

    [data-testid="stExpander"] details,
    [data-testid="stExpander"] summary {
        background: transparent !important;
    }

    [data-testid="stExpander"] summary {
        border-radius: 16px !important;
        transition: background-color 0.16s ease !important;
    }

    [data-testid="stExpander"] summary:hover {
        background: var(--app-hover) !important;
    }

    [data-testid="stExpander"] summary p {
        font-family: var(--app-font-display);
        color: var(--app-text) !important;
        font-size: 13px !important;
        font-weight: 700 !important;
    }

    [data-testid="stForm"] {
        border-radius: var(--app-radius-lg);
        border: 1px solid var(--app-border);
        background: rgba(255, 255, 255, 0.98);
        box-shadow: var(--app-shadow-md);
    }

    div[data-testid="stCaption"] {
        color: var(--app-text-soft) !important;
    }

    div[data-testid="stMarkdownContainer"] h1,
    div[data-testid="stMarkdownContainer"] h2,
    div[data-testid="stMarkdownContainer"] h3,
    div[data-testid="stMarkdownContainer"] h4 {
        color: var(--app-text);
        font-family: var(--app-font-display);
    }

    .styled-dataframe thead tr th {
        background: var(--app-surface) !important;
        color: var(--app-text) !important;
        border-bottom: 1px solid var(--app-border) !important;
        font-family: var(--app-font-display);
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
    }

    .styled-dataframe tbody tr:nth-child(odd) {
        background-color: #FCFCFD;
    }

    .styled-dataframe tbody tr:nth-child(even) {
        background-color: #FFFFFF;
    }

    code, pre, .stCodeBlock {
        font-family: var(--app-font-mono) !important;
    }

    .fade-in {
        animation: fadeIn 0.35s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
    }
    </style>
    """


def _build_sidebar_css() -> str:
    return """
    <style>
    [data-testid="stSidebar"] {
        background:
            radial-gradient(circle at top left, rgba(255, 0, 51, 0.04) 0%, transparent 32%),
            linear-gradient(180deg, #FBFBFC 0%, #FFFFFF 100%) !important;
        border-right: 1px solid rgba(229, 231, 235, 0.95) !important;
        box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.7);
    }

    section[data-testid="stSidebar"] {
        min-width: 18rem !important;
        max-width: 18rem !important;
    }

    [data-testid="stSidebarUserContent"] {
        padding-top: 0.5rem !important;
        padding-bottom: 1rem !important;
    }

    [data-testid="stSidebarNav"] {
        padding-top: 0.8rem !important;
        padding-bottom: 0.6rem !important;
    }

    [data-testid="stSidebarNav"] ul {
        gap: 0.42rem !important;
    }

    [data-testid="stSidebarNavLink"],
    [data-testid="stSidebarNav"] ul li a {
        min-height: 46px !important;
        padding: 0.72rem 0.82rem !important;
        margin: 0.04rem 0 !important;
        border-radius: 16px !important;
        border: 1px solid transparent !important;
        background: transparent !important;
        transition:
            background-color 0.16s ease,
            border-color 0.16s ease,
            box-shadow 0.16s ease,
            transform 0.16s ease !important;
    }

    [data-testid="stSidebarNavLink"]:hover,
    [data-testid="stSidebarNav"] ul li a:hover {
        background: var(--app-accent-soft) !important;
        border-color: rgba(255, 0, 51, 0.10) !important;
        box-shadow: var(--app-shadow-sm) !important;
        transform: translateX(2px);
    }

    [data-testid="stSidebarNavLink"][aria-current="page"],
    [data-testid="stSidebarNav"] ul li a[aria-current="page"] {
        background: linear-gradient(180deg, #FFF7F8 0%, #FFFFFF 100%) !important;
        border-color: rgba(255, 0, 51, 0.16) !important;
        box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06) !important;
    }

    [data-testid="stSidebarNavLink"] p,
    [data-testid="stSidebarNav"] ul li a p {
        font-family: var(--app-font-display) !important;
        font-weight: 600 !important;
        color: var(--app-text) !important;
        line-height: 1.25 !important;
    }

    [data-testid="stSidebarNavLink"][aria-current="page"] p,
    [data-testid="stSidebarNav"] ul li a[aria-current="page"] p {
        color: var(--app-accent-dark) !important;
    }

    [data-testid="stSidebarNavLink"] > div,
    [data-testid="stSidebarNav"] ul li a > div {
        gap: 0.55rem !important;
    }

    [data-testid="stSidebarCollapsedControl"],
    [data-testid="collapsedControl"] {
        top: 0.65rem !important;
        left: 0.75rem !important;
    }

    [data-testid="stSidebarCollapsedControl"] button,
    [data-testid="collapsedControl"] button {
        background: rgba(255, 255, 255, 0.96) !important;
        border: 1px solid var(--app-border) !important;
        border-radius: 999px !important;
        color: var(--app-text) !important;
        box-shadow: var(--app-shadow-md) !important;
        transition: border-color 0.16s ease, background-color 0.16s ease, transform 0.16s ease !important;
    }

    [data-testid="stSidebarCollapsedControl"] button:hover,
    [data-testid="collapsedControl"] button:hover {
        background: var(--app-accent-soft) !important;
        border-color: var(--app-border-strong) !important;
        transform: translateY(-1px);
    }

    .app-sidebar-shell {
        margin-bottom: 0.3rem;
        padding: 0.9rem 0.1rem 0.55rem;
    }

    .app-sidebar-brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.85rem 0.95rem;
        border-radius: 20px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(249, 250, 251, 0.98) 100%);
        border: 1px solid rgba(229, 231, 235, 0.95);
        box-shadow: var(--app-shadow-md);
    }

    .app-sidebar-brand-mark {
        width: 38px;
        height: 38px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #FF174A 0%, #E11D48 100%);
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
        box-shadow: 0 12px 24px rgba(225, 29, 72, 0.18);
    }

    .app-sidebar-brand-title {
        color: var(--app-text);
        font-family: var(--app-font-display);
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .app-sidebar-brand-copy,
    .app-sidebar-helper,
    .app-sidebar-footer-copy,
    .app-sidebar-footer-meta {
        color: var(--app-text-muted);
        font-size: 12px;
        line-height: 1.6;
    }

    .app-sidebar-helper {
        margin-top: 0.7rem;
        padding: 0 0.25rem;
    }

    .app-sidebar-footer {
        margin-top: 0.8rem;
        padding: 1rem 1rem 0.95rem;
        border-radius: 20px;
        background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.98) 100%);
        border: 1px solid rgba(229, 231, 235, 0.95);
        box-shadow: var(--app-shadow-sm);
    }

    .app-sidebar-footer-title {
        color: var(--app-text);
        font-family: var(--app-font-display);
        font-size: 13px;
        font-weight: 700;
        margin-bottom: 0.35rem;
    }

    .app-sidebar-footer code {
        background: #F3F4F6;
        border: 1px solid var(--app-border);
        border-radius: 8px;
        padding: 0.08rem 0.35rem;
        color: var(--app-text);
    }

    .app-sidebar-footer-meta {
        margin-top: 0.7rem;
        font-size: 11px;
    }
    </style>
    """


def _build_search_input_css() -> str:
    return f"""
    <style>
    {SEARCH_INPUT_SURFACE_SELECTORS} {{
        min-height: var(--app-search-height) !important;
        border-radius: var(--app-input-pill-radius) !important;
        padding-left: 1.1rem !important;
        padding-right: 1.1rem !important;
        background: linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%) !important;
        box-shadow: var(--app-shadow-sm) !important;
    }}

    {SEARCH_INPUT_SURFACE_SELECTORS}:hover {{
        border-color: var(--app-input-hover-border) !important;
    }}

    {SEARCH_INPUT_SURFACE_SELECTORS}:focus-within {{
        border-color: var(--app-input-focus-border) !important;
        box-shadow: var(--app-input-focus-shadow) !important;
    }}

    {SEARCH_INPUT_INNER_SELECTORS} {{
        padding: 0 !important;
        margin: 0 !important;
        min-height: calc(var(--app-search-height) - 2px) !important;
        line-height: 1.55 !important;
    }}
    </style>
    """


def apply_global_theme_styles() -> None:
    st.markdown(_build_global_theme_css(), unsafe_allow_html=True)


def apply_sidebar_styles() -> None:
    st.markdown(_build_sidebar_css(), unsafe_allow_html=True)


def inject_shared_theme() -> None:
    apply_global_theme_styles()
    apply_sidebar_styles()
    st.markdown(_build_search_input_css(), unsafe_allow_html=True)
