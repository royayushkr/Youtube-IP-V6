# YouTube IP V6 Architecture

This document is the current-runtime reference for V6. The version-history story lives in the README and project brief; this file focuses on how the deployed app works today, page by page and service by service.

## Deep-Dive Guide

- [Channel Analysis](#channel-analysis)
- [Channel Insights](#channel-insights)
- [Media Lab](#media-lab)
- [Outlier Finder](#outlier-finder)
- [Ytuber](#ytuber)
- [Deployment](#deployment)
- [Model-Backed Topic Artifact Flow](#model-backed-topic-artifact-flow)

## Runtime Inventory

| Item | Count | Notes |
| --- | --- | --- |
| Streamlit entrypoints | `2` | `streamlit_app.py` and `dashboard/app.py` |
| Current sidebar destinations | `6` | `Channel Analysis`, `Channel Insights`, `Media Lab`, `Outlier Finder`, `Ytuber`, `Deployment` |
| Primary runtime data paths | `2` | bundled GitHub CSVs and live API-backed requests |
| Live provider families | `3` | `YouTube`, `Gemini`, `OpenAI` |
| Channel Insights topic modes | `2` | `Heuristic Topics` and `Model-Backed Topics (Beta)` |
| Channel Insights tabs | `6` | `Overview`, `Topic Trends`, `Formats & Patterns`, `Outliers`, `Next Topics`, `History` |
| Media Lab workflow sections | `5` | `Video Lookup`, `Transcript`, `Thumbnail Studio`, `Audio Download`, `Video Download` |
| Ytuber workspace modules | `8` | `AI Studio`, `Overview`, `Channel Audit`, `Keyword Intel`, `Outliers Finder`, `Title & SEO Lab`, `Competitor Benchmark`, `Content Planner` |
| Main Outlier Finder post-search sections | `4` | `Top Outliers In This Scan`, `Breakout Snapshot`, `AI Research`, `How This Works` |

## Sidebar Navigation

1. `Channel Analysis`
2. `Channel Insights`
3. `Media Lab`
4. `Outlier Finder`
5. `Ytuber`
6. `Deployment`

V6 keeps the V5 public-only `Channel Insights` posture, but replaces the old separate `Thumbnails` and `Tools` pages with one consolidated `Media Lab` workflow.

## Full V6 Runtime And Data Pipeline

```mermaid
flowchart TD
    A["Bundled GitHub CSV data<br/>data/youtube api data/*.csv"] --> B["streamlit_app.py"]
    U["User actions"] --> B
    B --> C["dashboard/app.py"]
    C --> D["Streamlit navigation + sidebar"]
    D --> E["Page views"]

    S["Streamlit secrets / env"] --> F["src/utils/api_keys.py"]
    F --> G["YouTube Data API v3"]
    F --> H["Gemini / OpenAI"]

    A --> I["Dataset-backed path"]
    G --> J["Live public-channel path"]
    H --> K["AI generation path"]

    I --> L["pandas transforms + visualization helpers"]
    J --> L
    K --> L

    J --> M["Channel Insights service pipeline"]
    M --> M1["load_public_channel_workspace(...)"]
    M1 --> M2["ensure_public_channel_frame(...)"]
    M2 --> M3["add_channel_video_features(...)"]
    M3 --> M4["_apply_requested_topic_mode(...)"]
    M4 --> M5["heuristic or BERTopic assignment"]
    M5 --> M6["metrics + scoring + outliers + snapshots"]

    G --> P["Media Lab service pipeline"]
    H --> P
    P --> P1["fetch metadata + transcripts + formats + thumbnail preview"]
    P1 --> P2["prepare transcript / public thumbnail / MP3 / MP4 artifacts"]
    P2 --> P3["AI thumbnail generation + error mapping + progress reporting"]

    L --> N["charts, cards, tables, downloads, AI outputs"]
    M6 --> N
    P3 --> N
```

## API Data Pipeline Overview

```mermaid
flowchart LR
    A["Streamlit secrets / env"] --> B["src/utils/api_keys.py"]
    B --> C["Select / rotate provider key"]

    C --> D["YouTube Data API"]
    C --> E["Gemini"]
    C --> F["OpenAI"]

    D --> G["Channel Insights / Outlier Finder / Ytuber / Media Lab public asset flow"]
    E --> H["Media Lab AI thumbnails / Ytuber AI Studio / Outlier AI"]
    F --> H

    G --> I["service-layer normalization"]
    H --> I
    I --> J["pandas frames / scored payloads / artifact prep"]
    J --> K["dashboard/components/visualizations.py"]
    K --> L["Rendered Streamlit UI"]
```

## Page Problem Map

| Page | Problem Solved | Main Services / Inputs | Main UI Outputs | Runtime Type |
| --- | --- | --- | --- | --- |
| `Channel Analysis` | benchmark committed cross-channel datasets | CSVs, pandas, visualization helpers | KPI cards, trend charts, ranked tables | dataset-backed |
| `Channel Insights` | analyze one tracked public channel over time | `public_channel_service`, `channel_snapshot_store`, `channel_insights_service`, `topic_model_runtime`, `model_artifact_service` | topic trends, format analysis, outliers, next-topic ideas, history | mixed |
| `Media Lab` | perform single-video creator media tasks without switching pages | `youtube_tools.py`, `transcript_service.py`, `thumbnail_hub_service.py`, `media_error_service.py`, `ThumbnailGenerator`, provider keys | transcript preview/download, thumbnail grid, AI-generated images, MP3/MP4 downloads | mixed |
| `Outlier Finder` | find niche winners using explainable scoring | `outliers_finder.py`, `outlier_ai.py`, YouTube API | scored outlier tables, breakout charts, AI research | mixed |
| `Ytuber` | run a live creator AI workspace for one channel | YouTube API loaders, scoring helpers, thumbnail generator, AI generation | audits, AI Studio, keyword and planner outputs | mixed |
| `Deployment` | explain setup and deployment in the app shell | static app guidance | setup and deploy notes | static |

## Channel Analysis

`Channel Analysis` is the most direct continuation of the original V1 dataset analytics idea. It stays entirely on the bundled CSV path.

### Current Data Flow

```mermaid
flowchart LR
    A["data/youtube api data/*.csv"] --> B["pandas load + clean"]
    B --> C["category / channel / date filters"]
    C --> D["KPI aggregations"]
    C --> E["monthly trend transforms"]
    C --> F["ranking tables"]
    D --> G["cards"]
    E --> H["charts"]
    F --> I["styled dataframes"]
```

### What it outputs today

- high-level KPI summaries
- monthly upload and performance trends
- top channels and top videos
- benchmark views of publishing behavior across the bundled dataset

## Channel Insights

`Channel Insights` is the deepest current analysis path in V6. It is public-only, snapshot-based, and shares one refresh pipeline regardless of topic mode.

### Connect And Refresh Flow

```mermaid
flowchart TD
    A["User enters channel URL / handle / channel ID"] --> B["refresh_channel_insights(...)"]
    B --> C["load_public_channel_workspace(...)"]
    C --> D["ensure_public_channel_frame(...)"]
    D --> E["add_channel_video_features(...)"]
    E --> F["_apply_requested_topic_mode(...)"]
    F --> G["score + summarize + persist snapshot"]
    G --> H["Tracked channel list updated"]
    G --> I["6 rendered tabs"]
```

### Topic-Mode Integration

The split between topic modes happens only after the same base public-channel dataframe is built.

```mermaid
flowchart TD
    A["feature frame from add_channel_video_features(...)"] --> B["_apply_requested_topic_mode(...)"]
    B --> C["_apply_heuristic_topics(...)"]
    B --> D["apply_optional_topic_model(...)"]
    D -->|artifact missing / invalid / load failed / transform failed| C
    C --> E["primary_topic + topic_labels + topic_source='heuristic'"]
    D --> F["model_topic_id + model_topic_label_raw + model_topic_label"]
    F --> G["primary_topic + topic_labels + topic_source='bertopic_global'"]
    E --> H["shared metrics and scoring path"]
    G --> H
```

### What The Topic Fields Feed

| Field | Role In The Pipeline |
| --- | --- |
| `primary_topic` | grouping key for topic metrics and explanation text |
| `topic_labels` | per-video label list for inspection and grouping |
| `topic_source` | records whether the row came from heuristics or BERTopic beta |
| `model_topic_id` | raw BERTopic id retained when beta succeeds |
| `model_topic_label_raw` | direct label read from the model |
| `model_topic_label` | human-readable cleaned label used in the UI |

Those fields feed:

- topic metrics
- duration metrics
- title-pattern metrics
- outlier and underperformer tables
- next-topic recommendations
- persisted snapshot metadata

### Heuristic Vs Model-Backed Topics

| Mode | Better For | Constraint | Why It Exists |
| --- | --- | --- | --- |
| `Heuristic Topics` | speed, deploy safety, transparent token-based grouping | more literal topic grouping | always-available default |
| `Model-Backed Topics (Beta)` | semantic grouping across different phrasings | depends on external artifact readiness | optional richer topic clustering |

### BERTopic Artifact State Table

| Artifact State | What It Means | What The UI Shows |
| --- | --- | --- |
| `disabled` | model artifacts are not enabled in config | `Unavailable` |
| `unconfigured` | manifest URL or other required config is missing | `Unavailable` |
| `download_required` | beta is configured but artifact is not cached yet | `Download Required` |
| `ready` | artifact bundle is cached and loadable | `Ready` |
| `invalid` | manifest, checksum, or extracted bundle is not usable | `Failed / Fallback Active` |

### Heuristic Topic Derivation

```mermaid
flowchart LR
    A["video_title + video_tags + short description excerpt"] --> B["tokenize_topic_text(...)"]
    B --> C["normalize_topic_token(...)"]
    C --> D["drop stopwords + weak tokens + short tokens"]
    D --> E["weight tokens using log1p(views_per_day + 1)"]
    E --> F["build top token pool"]
    F --> G["assign topic_labels"]
    G --> H["set primary_topic from first label"]
```

### BERTopic Beta Preprocessing

```mermaid
flowchart LR
    A["video_title"] --> B["duplicate title"]
    C["video_description"] --> D["strip boilerplate + truncate"]
    E["video_tags"] --> F["normalize tags"]
    B --> G["build_bertopic_inference_text(...)"]
    D --> G
    F --> G
    G --> H["remove standalone digits"]
    H --> I["compute bertopic_token_count"]
    I --> J["flag is_sparse_text"]
    J --> K["BERTopic transform(...)"]
    K --> L["model_topic_id + raw label + human label + topic_source"]
```

### Channel Insights Tab Flow

```mermaid
flowchart TD
    A["refresh_channel_insights(...)"] --> B["public workspace + feature frame"]
    B --> C["topic mode branch"]
    C --> D["score videos"]
    D --> E["topic metrics"]
    D --> F["duration metrics"]
    D --> G["title-pattern metrics"]
    D --> H["publish-day/hour metrics"]
    E --> I["Overview"]
    E --> J["Topic Trends"]
    F --> K["Formats & Patterns"]
    G --> K
    D --> L["Outliers"]
    E --> M["Next Topics"]
    H --> M
    D --> N["store_channel_snapshot(...)"]
    N --> O["History"]
```

### What each Channel Insights tab does

| Tab | Current Purpose | Main Inputs |
| --- | --- | --- |
| `Overview` | summarize strongest signals, best duration/title pattern, and current channel state | summary payload, recommendation summary, topic/duration metrics |
| `Topic Trends` | show which themes are winning or fading | topic metrics dataframe and topic labels |
| `Formats & Patterns` | compare duration buckets, title patterns, and packaging effects | duration metrics and title-pattern metrics |
| `Outliers` | surface strongest and weakest recent videos with explanations | scored video frame and outlier tables |
| `Next Topics` | turn current strengths and gaps into grounded future ideas | recommendation bundle and theme cards |
| `History` | compare snapshots over time | persisted channel snapshot store |

## Media Lab

`Media Lab` is the main V6 workflow change. Historically, V5 documented separate `Thumbnails` and `Tools` pages. In current V6 those two pages are consolidated into one focused, single-video workspace.

### Current Media Lab flow

```mermaid
flowchart TD
    A["Video URL / ID"] --> B["fetch_video_metadata(...)"]
    B --> C["get_available_formats(...)"]
    B --> D["list_transcript_options(...)"]
    B --> E["preview_thumbnail_target(...)"]

    C --> F["Video Lookup summary"]
    D --> G["Transcript"]
    E --> H["Thumbnail Studio"]

    H --> I["prepare_thumbnail_download(...)"]
    H --> J["ThumbnailGenerator.generate(...)"]

    C --> K["prepare_audio_download(...)"]
    C --> L["prepare_video_download(...)"]

    G --> M["text preview + text download"]
    I --> N["public thumbnail download"]
    J --> O["generated image gallery + downloads"]
    K --> P["MP3 or original audio artifact"]
    L --> Q["MP4 artifact"]
```

### Current Media Lab sections

| Section | Purpose | Main Services |
| --- | --- | --- |
| `Video Lookup` | validate one public video and load shared context for the rest of the page | `fetch_video_metadata(...)`, `get_available_formats(...)`, `list_transcript_options(...)`, `preview_thumbnail_target(...)` |
| `Transcript` | preview public captions and download them as text | `fetch_transcript_text(...)`, `prepare_transcript_download(...)` |
| `Thumbnail Studio` | either export public thumbnail variants or generate new AI thumbnails | `preview_thumbnail_target(...)`, `prepare_thumbnail_download(...)`, `ThumbnailGenerator.generate(...)` |
| `Audio Download` | prepare a user-friendly MP3 by default, or expose the original audio container in advanced mode | `prepare_audio_download(...)`, `ffmpeg_available()` |
| `Video Download` | prepare a downloadable MP4 using simpler quality profiles instead of broad format pickers | `prepare_video_download(...)` |

### Video Lookup

`Video Lookup` is the page anchor. It resolves the URL once and shares that result across transcript, thumbnail, audio, and video actions.

What happens on lookup:

- validate the public video target
- fetch shared metadata and available formats
- fetch transcript options
- discover public thumbnail variants
- cache the result in session state so the rest of the page does not keep reloading

### Transcript

The transcript path is deliberately stage-based and user-readable.

```mermaid
flowchart LR
    A["Transcript language choice"] --> B["fetch_transcript_text(...)"]
    B --> C["prepare_transcript_download(...)"]
    C --> D["Preview text area"]
    D --> E["Download Transcript"]
```

Current transcript behavior:

- shows a clean preview before download
- uses a progress/status sequence instead of a silent action
- exposes advanced transcript options inside an expander
- returns friendly errors when captions are unavailable or disabled

### Thumbnail Studio

`Thumbnail Studio` has two internal modes inside the same section:

- `Preview & Download`
- `AI Generate`

#### Public thumbnail mode

```mermaid
flowchart LR
    A["preview_thumbnail_target(...)"] --> B["discover variant grid"]
    B --> C["user selects one variant card"]
    C --> D["prepare_thumbnail_download(...)"]
    D --> E["temporary artifact"]
    E --> F["Download button"]
```

#### AI thumbnail mode

```mermaid
flowchart LR
    A["prompt + provider + model settings"] --> B["ThumbnailGenerator.generate(...)"]
    B --> C["Gemini or OpenAI image response"]
    C --> D["outputs/thumbnails"]
    D --> E["gallery cards + downloads"]
```

Current thumbnail behavior:

- previews multiple public resolutions in a grid
- supports provider/model selection for AI generation
- keeps advanced generation settings hidden behind expanders
- stores generated outputs under `outputs/thumbnails`

### Audio Download

Audio preparation is designed around a recommended path first and an advanced path second.

```mermaid
flowchart LR
    A["Audio profile"] --> B["prepare_audio_download(...)"]
    B --> C["yt-dlp + optional ffmpeg conversion"]
    C --> D["progress hook updates"]
    D --> E["prepared artifact + download"]
```

Current audio behavior:

- defaults to MP3
- keeps the original-container option as an advanced path
- shows progress through `st.progress`
- surfaces clearer messages when `ffmpeg` is missing or the video is restricted

### Video Download

Video preparation uses simpler quality profiles instead of broad format pickers.

```mermaid
flowchart LR
    A["Video quality profile"] --> B["prepare_video_download(...)"]
    B --> C["yt-dlp download + merge flow"]
    C --> D["progress hook updates"]
    D --> E["MP4 artifact + download"]
```

Current video behavior:

- prefers simple quality presets over raw format complexity
- returns MP4 artifacts for in-app download
- shares the same friendly error mapping as audio and transcript flows

### Media Lab error handling

`Media Lab` centralizes friendly error mapping instead of surfacing raw backend exceptions first.

| Failure Mode | Current User-Facing Behavior |
| --- | --- |
| private or deleted video | clear unavailable message |
| members-only / age-restricted / region-restricted video | friendly restriction-specific copy |
| transcript unavailable | caption-specific message and no broken preview state |
| `ffmpeg` missing | audio conversion guidance instead of a raw stack trace |
| oversized artifact | explains that the file is too large for in-app delivery |

### Historical note

In historical V5 documentation:

- `Thumbnails` was a separate page
- `Tools` had `Single`, `Batch`, and `Playlist`

In current V6 runtime:

- those workflows are merged into `Media Lab`
- only the single-video path remains active in the live surface

## Outlier Finder

`Outlier Finder` is an evidence-first, AI-second workflow. It starts from a structured search request, builds a candidate frame, scores outliers, and only then offers AI interpretation.

### Search And Scoring Flow

```mermaid
flowchart TD
    A["Search form inputs"] --> B["OutlierSearchRequest"]
    B --> C["_search_video_ids(...)"]
    C --> D["_fetch_videos(...)"]
    D --> E["_fetch_channels(...)"]
    E --> F["_build_candidate_frame(...)"]
    F --> G["_apply_request_filters(...)"]
    G --> H["_fetch_channel_baseline_cached(...)"]
    H --> I["_prepare_peer_percentiles(...)"]
    I --> J["_score_outlier_frame(...)"]
    J --> K["OutlierSearchResult"]
    K --> L["cards + table + charts"]
    K --> M["optional AI research"]
```

### What the search form controls

- niche query
- timeframe and custom date range
- broad vs exact match mode
- region and language
- freshness focus
- duration preference
- language strictness
- minimum views
- subscriber range and hidden-subscriber handling
- excluded keywords
- search depth and baseline limits

### Post-search result sections

| Section | What It Does |
| --- | --- |
| `Top Outliers In This Scan` | shows the scored winner set first, with result cards and the full sortable table |
| `Breakout Snapshot` | visualizes score, velocity, packaging, duration, age, and scan quality |
| `AI Research` | converts the evidence into structured research cards only after the results are visible |
| `How This Works` | explains the scoring methodology and caveats |

### Outlier Finder presentation flow

```mermaid
flowchart TD
    A["Top Outliers In This Scan"] --> B["result cards + result table"]
    B --> C["Breakout Snapshot"]
    C --> D["breakout scatter + age + duration + title pattern + scan quality"]
    D --> E["AI Research"]
    E --> F["structured insight cards from Gemini/OpenAI"]
    F --> G["How This Works"]
```

## Ytuber

`Ytuber` is a segmented live creator workspace, not a tabbed analytics page. It starts with a channel search, loads a workspace dataframe, and then lets the user switch across eight modules.

### Channel Load Flow

```mermaid
flowchart TD
    A["Channel query"] --> B["_fetch_or_get_cached_channel(...)"]
    B --> C["cached rows or live YouTube API refresh"]
    C --> D["channel dataframe"]
    D --> E["segmented workspace selector"]
    E --> F["active module render"]
```

### Current Ytuber modules

| Module | Current Role |
| --- | --- |
| `AI Studio` | generate titles, descriptions, scripts, hooks, ideas, and thumbnail concepts |
| `Overview` | summarize core channel performance and recent activity |
| `Channel Audit` | show channel consistency and performance quality checks |
| `Keyword Intel` | derive recent keyword patterns and opportunity cues |
| `Outliers Finder` | hand off into a channel-contextualized outlier workflow |
| `Title & SEO Lab` | score titles and descriptions and route weak directions into AI Studio |
| `Competitor Benchmark` | compare current channel behavior to selected competitors |
| `Content Planner` | turn current patterns into scheduling and planning suggestions |

### Ytuber workspace flow

```mermaid
flowchart LR
    A["Channel search"] --> B["cached/live load"]
    B --> C["workspace dataframe"]
    C --> D["AI Studio"]
    C --> E["Overview"]
    C --> F["Channel Audit"]
    C --> G["Keyword Intel"]
    C --> H["Outliers Finder"]
    C --> I["Title & SEO Lab"]
    C --> J["Competitor Benchmark"]
    C --> K["Content Planner"]
    G --> D
    H --> L["Outlier research handoff"]
    I --> D
    J --> K
```

## Deployment

`Deployment` is the operational reference page inside the app shell. It does not run analysis itself; it explains how to run or deploy the app, which repo/branch is active, and which secrets need to exist.

### How it fits the shell

```mermaid
flowchart LR
    A["Deployment page"] --> B["repo / branch guidance"]
    A --> C["secrets guidance"]
    A --> D["run / deploy notes"]
    B --> E["supports all other pages operationally"]
    C --> E
    D --> E
```

## Model-Backed Topic Artifact Flow

```mermaid
flowchart LR
    A["Streamlit secrets"] --> B["MODEL_ARTIFACTS_ENABLED"]
    A --> C["MODEL_ARTIFACTS_MANIFEST_URL"]
    C --> D["src/services/model_artifact_service.py"]
    D --> E["Manifest JSON"]
    E --> F["artifact_url + sha256 + bundle_version"]
    F --> G["download only on explicit beta refresh"]
    G --> H["outputs/models/runtime/<bundle_version>/"]
    H --> I["src/services/topic_model_runtime.py"]
    I --> J["src/services/channel_insights_service.py"]
    D --> K["fallback to heuristics if artifact is missing or invalid"]
    K --> J
```

## Cross-Version Architectural Summary

```mermaid
flowchart LR
    A["V1<br/>analytics concept"] --> B["V2<br/>creator-suite breadth"]
    B --> C["V3<br/>clear page architecture"]
    C --> D["V4<br/>deep intelligence + auth branch"]
    D --> E["V5<br/>public-only clarity + deep docs"]
    E --> F["V6<br/>Media Lab + lighter live shell"]
```

| Version | Main Architectural Shift |
| --- | --- |
| `V1` | established the public-data analytics and modeling thesis |
| `V2` | expanded the product into a wide creator operating system |
| `V3` | clarified runtime shell, page ownership, and active services |
| `V4` | added Channel Insights, Assistant, Google OAuth, owner analytics, and optional BERTopic runtime |
| `V5` | removed Assistant and OAuth, kept the strongest workflows, and documented the current runtime in depth |
| `V6` | merged public asset workflows into `Media Lab`, lightened the shell, and aligned the current runtime with a cleaner deploy surface |
