from __future__ import annotations

from typing import Any

import streamlit as st


SEARCH_INPUT_LABELS = (
    "Search Channel",
    "Channel URL, Handle, Or Channel ID",
    "YouTube URL Or Video ID",
    "Niche Or Keyword",
    "YouTube Video URL Or ID",
)


def render_search_input(label: str, **kwargs: Any) -> str:
    kwargs.setdefault("label_visibility", "visible")
    return st.text_input(label, **kwargs)


def render_text_input(label: str, **kwargs: Any) -> str:
    kwargs.setdefault("label_visibility", "visible")
    return st.text_input(label, **kwargs)


def render_text_area(label: str, **kwargs: Any) -> str:
    kwargs.setdefault("label_visibility", "visible")
    return st.text_area(label, **kwargs)


__all__ = [
    "SEARCH_INPUT_LABELS",
    "render_search_input",
    "render_text_area",
    "render_text_input",
]
