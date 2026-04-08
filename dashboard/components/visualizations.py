import math
from typing import Any, Dict, Iterable, List, Optional, Sequence

import numpy as np
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import streamlit as st

from dashboard.components.layout import render_section_header


# Creator Insights palette (neutral-first YouTube-light shell)
YT_COLORWAY: List[str] = [
    "#FF0000",
    "#065FD4",
    "#34A853",
    "#FBBC04",
    "#7E57C2",
    "#00ACC1",
    "#5F6368",
]

PLOTLY_INTERACTIVE_CONFIG: Dict[str, Any] = {
    "scrollZoom": True,
    "displayModeBar": True,
    "displaylogo": False,
    "doubleClick": "reset",
    "modeBarButtonsToRemove": ["lasso2d", "select2d"],
}

PLOTLY_DASHBOARD_TEMPLATE: Dict[str, Any] = {
    "layout": {
        "paper_bgcolor": "rgba(0,0,0,0)",
        "plot_bgcolor": "#FFFFFF",
        "font": {
            "color": "#606060",
            "family": "DMSans, system-ui, sans-serif",
        },
        "xaxis": {
            "gridcolor": "#E5E5E5",
            "zerolinecolor": "#E5E5E5",
            "title": {"font": {"color": "#0F0F0F"}},
            "tickfont": {"color": "#606060"},
        },
        "yaxis": {
            "gridcolor": "#E5E5E5",
            "zerolinecolor": "#E5E5E5",
            "title": {"font": {"color": "#0F0F0F"}},
            "tickfont": {"color": "#606060"},
        },
        "colorway": YT_COLORWAY,
        "hoverlabel": {
            "bgcolor": "#FFFFFF",
            "font": {"color": "#0F0F0F"},
            "bordercolor": "#E5E5E5",
        },
    }
}

# Back-compat alias
PLOTLY_LIGHT_TEMPLATE = PLOTLY_DASHBOARD_TEMPLATE


def apply_dashboard_chart_theme(fig: go.Figure) -> go.Figure:
    """Apply the shared light analytics template for dashboard Plotly figures."""
    fig.update_layout(**PLOTLY_DASHBOARD_TEMPLATE["layout"])
    fig.update_layout(
        title_font=dict(
            size=17,
            family="DMSans, system-ui, sans-serif",
            color="#0F0F0F",
        ),
        legend=dict(
            bgcolor="rgba(255,255,255,0.96)",
            bordercolor="#E5E5E5",
            borderwidth=1,
            font=dict(color="#606060"),
        ),
    )
    return fig


def show_plotly_chart(fig: go.Figure, *, config: Optional[Dict[str, Any]] = None) -> None:
    """Render Plotly with pan/zoom toolbar and scroll-wheel zoom enabled."""
    merged = dict(PLOTLY_INTERACTIVE_CONFIG)
    if config:
        merged.update(config)
    st.plotly_chart(fig, use_container_width=True, config=merged)


def graph_insight_expander(chart_title: str, body_md: str) -> None:
    """Collapsed inference / interpretation text (dropdown) below analytics visuals."""
    with st.expander(f"How to read this chart — {chart_title}", expanded=False):
        st.markdown(body_md)


def styled_metric_card(
    label: str,
    value: str,
    delta: Optional[str] = None,
    icon: Optional[str] = None,
    color: Optional[str] = None,
) -> str:
    """Return HTML for a single glassmorphism metric card.

    Leading whitespace is avoided so Markdown does not treat the block
    as an indented code block.
    """
    color_style = f"color:{color};" if color else ""
    delta_class = ""
    if delta:
        if delta.strip().startswith(("+", "▲")):
            delta_class = "positive"
        elif delta.strip().startswith(("-", "▼")):
            delta_class = "negative"
    delta_html = (
        f'<div class="metric-delta {delta_class}">{delta}</div>' if delta else ""
    )
    html = (
        f'<div class="metric-card">'
        f'<div class="metric-label">{label}</div>'
        f'<div class="metric-value" style="{color_style}">'
        f'{value}'
        f'</div>'
        f'{delta_html}'
        f'</div>'
    )
    return html


def kpi_row(metrics: List[Dict[str, Any]]) -> None:
    """Render a row of KPI metric cards.

    Each metric dict: {label, value, delta?, icon?, color?}
    """
    cards_html = "".join(
        styled_metric_card(
            m.get("label", ""),
            str(m.get("value", "")),
            delta=m.get("delta"),
            icon=m.get("icon"),
            color=m.get("color"),
        )
        for m in metrics
    )
    st.markdown(f'<div class="metric-row">{cards_html}</div>', unsafe_allow_html=True)


def section_header(title: str, subtitle: Optional[str] = None, icon: Optional[str] = None) -> None:
    """Render a shared section header using the app shell's design system."""
    render_section_header(title, subtitle)
    st.markdown('<div class="yt-section-underline"></div>', unsafe_allow_html=True)


def animated_counter(value: float, label: str) -> None:
    """Render a simple animated counter using CSS animation."""
    st.markdown(
        f"""
        <div class="fade-in" style="margin-bottom:0.6rem;">
            <div class="metric-label">{label}</div>
            <div class="metric-value" style="font-size:32px;">{value:,}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )


def plotly_line_chart(
    df: pd.DataFrame,
    x: str,
    y_cols: Sequence[str],
    title: str,
    secondary_y: Optional[Iterable[str]] = None,
) -> go.Figure:
    """Create a multi-line Plotly chart with optional secondary y-axis."""
    secondary_y = set(secondary_y or [])
    if secondary_y:
        fig = make_subplots(specs=[[{"secondary_y": True}]])
        for col in y_cols:
            use_secondary = col in secondary_y
            fig.add_trace(
                go.Scatter(
                    x=df[x],
                    y=df[col],
                    name=col,
                    mode="lines+markers",
                    line={"shape": "spline"},
                ),
                secondary_y=use_secondary,
            )
        fig.update_xaxes(title_text=x)
        fig.update_yaxes(title_text=y_cols[0], secondary_y=False)
        if len(y_cols) > 1:
            fig.update_yaxes(title_text=y_cols[-1], secondary_y=True)
    else:
        fig = go.Figure()
        for col in y_cols:
            fig.add_trace(
                go.Scatter(
                    x=df[x],
                    y=df[col],
                    name=col,
                    mode="lines+markers",
                    line={"shape": "spline"},
                )
            )
        fig.update_xaxes(title_text=x)
        fig.update_yaxes(title_text=", ".join(y_cols))

    fig.update_layout(title=title)
    apply_dashboard_chart_theme(fig)
    return fig


def plotly_bar_chart(
    df: pd.DataFrame,
    x: str,
    y: str,
    title: str,
    horizontal: bool = False,
) -> go.Figure:
    """Create a bar chart with a restrained blue-led emphasis for the light shell."""
    bar_line = dict(color="#E5E5E5", width=0.8)
    _bar_cs = [[0, "#D2E3FC"], [0.5, "#7BAAF7"], [1, "#065FD4"]]
    if horizontal:
        fig = go.Figure(
            go.Bar(
                x=df[y],
                y=df[x],
                orientation="h",
                marker=dict(color=df[y], colorscale=_bar_cs, line=bar_line),
            )
        )
    else:
        fig = go.Figure(
            go.Bar(
                x=df[x],
                y=df[y],
                marker=dict(color=df[y], colorscale=_bar_cs, line=bar_line),
            )
        )
    fig.update_layout(title=title)
    apply_dashboard_chart_theme(fig)
    return fig


def plotly_donut_chart(
    df: pd.DataFrame,
    names: str,
    values: str,
    title: str,
) -> go.Figure:
    """Create a donut chart with center label."""
    fig = px.pie(
        df,
        names=names,
        values=values,
        hole=0.55,
        color_discrete_sequence=YT_COLORWAY,
    )
    fig.update_traces(textposition="inside", textinfo="percent+label")
    fig.update_layout(title=title)
    apply_dashboard_chart_theme(fig)
    return fig


def plotly_heatmap(
    df: pd.DataFrame,
    x: str,
    y: str,
    z: str,
    title: str,
) -> go.Figure:
    """Create a heatmap from tall-form data with x, y, z columns."""
    pivot = df.pivot(index=y, columns=x, values=z)
    fig = go.Figure(
        data=go.Heatmap(
            z=pivot.values,
            x=pivot.columns,
            y=pivot.index,
            colorscale="Viridis",
            colorbar=dict(
                title=z,
                tickfont=dict(color="#475467"),
                title_font=dict(color="#101828"),
            ),
        )
    )
    fig.update_layout(title=title)
    apply_dashboard_chart_theme(fig)
    return fig


def plotly_radar_chart(
    categories: Sequence[str],
    series: Dict[str, Sequence[float]],
    title: str,
) -> go.Figure:
    """Create a radar / spider chart for competitor comparison."""
    fig = go.Figure()
    for name, values in series.items():
        vals = list(values)
        if vals and vals[0] != vals[-1]:
            vals.append(vals[0])
        cats = list(categories)
        if cats and cats[0] != cats[-1]:
            cats.append(cats[0])
        fig.add_trace(go.Scatterpolar(r=vals, theta=cats, fill="toself", name=name))
    fig.update_layout(polar=dict(radialaxis=dict(visible=True)), title=title)
    apply_dashboard_chart_theme(fig)
    return fig


def plotly_gauge_chart(
    value: float,
    title: str,
    max_val: float = 100,
) -> go.Figure:
    """Create a circular gauge for scoring."""
    fig = go.Figure(
        go.Indicator(
            mode="gauge+number",
            value=value,
            gauge={
                "axis": {"range": [0, max_val]},
                "bar": {"color": "#FF0000"},
                "steps": [
                    {"range": [0, max_val * 0.5], "color": "rgba(229,229,229,0.85)"},
                    {"range": [max_val * 0.5, max_val * 0.8], "color": "rgba(6,95,212,0.14)"},
                    {"range": [max_val * 0.8, max_val], "color": "rgba(255,0,0,0.16)"},
                ],
            },
            title={"text": title},
        )
    )
    apply_dashboard_chart_theme(fig)
    return fig


def plotly_scatter(
    df: pd.DataFrame,
    x: str,
    y: str,
    size: Optional[str],
    color: Optional[str],
    title: str,
    *,
    log_x: bool = False,
    enhanced_markers: bool = False,
) -> go.Figure:
    """Create a scatter plot with optional log-scaled X and clearer markers."""
    hover_cols = [c for c in ("channel_title", "video_title") if c in df.columns]
    color_kw: Dict[str, Any] = {}
    if color and color in df.columns:
        color_kw["color"] = color
        color_kw["color_discrete_sequence"] = YT_COLORWAY
    fig = px.scatter(
        df,
        x=x,
        y=y,
        size=size if size in df.columns else None,
        hover_data=hover_cols if hover_cols else None,
        **color_kw,
    )
    fig.update_layout(title=title)
    apply_dashboard_chart_theme(fig)
    if log_x:
        fig.update_xaxes(type="log", title=f"{x} (log scale)")
    if enhanced_markers:
        fig.update_traces(
            marker=dict(size=12, opacity=0.9, line=dict(width=1.2, color="rgba(255,255,255,0.25)")),
        )
    return fig


def plotly_treemap(
    df: pd.DataFrame,
    path: Sequence[str],
    values: str,
    title: str,
) -> go.Figure:
    """Create a treemap for keyword intelligence."""
    fig = px.treemap(
        df,
        path=path,
        values=values,
        color=values,
        color_continuous_scale=["#E8F0FE", "#7BAAF7", "#065FD4"],
    )
    fig.update_layout(title=title)
    apply_dashboard_chart_theme(fig)
    return fig


def plotly_funnel_chart(
    stages: Sequence[str],
    values: Sequence[float],
    title: str,
) -> go.Figure:
    """Create a funnel chart for content pipeline stages."""
    fig = go.Figure(
        go.Funnel(
            y=list(stages),
            x=list(values),
            textinfo="value+percent initial",
        )
    )
    fig.update_layout(title=title)
    apply_dashboard_chart_theme(fig)
    return fig


def styled_dataframe(
    df: pd.DataFrame,
    title: Optional[str] = None,
    precision: int = 1,
    image_columns: Optional[Sequence[str]] = None,
) -> None:
    """Render a styled dataframe with gradients on numeric columns.

    Args:
        df: DataFrame to render.
        title: Optional title shown above the table.
        precision: Decimal precision for numeric columns.
        image_columns: Optional list of columns that should display images if URLs.
    """
    if df.empty:
        st.info("No rows to display.")
        return

    if title:
        st.markdown(f"**{title}**", unsafe_allow_html=True)

    numeric_cols = df.select_dtypes(include=[np.number]).columns
    styler = df.style.format(precision=precision)
    if len(numeric_cols) > 0:
        styler = styler.background_gradient(
            subset=numeric_cols, cmap="YlGnBu", low=0.2, high=0.85
        )

    # Use Streamlit's native image column config when requested
    column_config: Dict[str, Any] = {}
    if image_columns:
        for col in image_columns:
            if col in df.columns:
                column_config[col] = st.column_config.ImageColumn(col)

    try:
        st.dataframe(
            styler,
            use_container_width=True,
            hide_index=True,
            column_config=column_config or None,
        )
    except Exception:
        # Styled DataFrames use Arrow; a broken/missing pyarrow install (common on Windows) still shows data.
        st.dataframe(
            df,
            use_container_width=True,
            hide_index=True,
            column_config=column_config or None,
        )


def styled_keyword_chips(keywords: Sequence[str]) -> None:
    """Render a set of keywords as styled chips."""
    chips = "".join(f'<span class="keyword-chip">{kw}</span>' for kw in keywords)
    st.markdown(chips, unsafe_allow_html=True)
