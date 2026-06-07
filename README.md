# Journal & Conference Impact Atlas

> English | [简体中文](./README.zh-CN.md)

A clean, scholarly single‑page visualization of the impact of computer‑science / AI **journals and conferences**. A toggle switches between two views:

- **SCI 分区** — Chinese Academy of Sciences tiers (一~四区), measured by **Journal Impact Factor (IF)**.
- **CCF 等级** — CCF recommended‑venue grades (A / B / C), measured by **Google Scholar h5‑index**.

Each venue is drawn as a horizontal bar (length = impact metric), grouped by tier and color‑coded. Bars animate in on load, can be sorted ascending/descending, and **each row expands on click** to reveal details (currently the official website, with room to grow).

> ⚠️ The two views are **not comparable**: SCI uses Impact Factor; CCF is conference‑heavy and uses the h5‑index instead (conferences have no IF).

Built with **TypeScript + React + Vite**.

## Quick start

```bash
npm install
npm run dev      # local dev server with hot reload (default http://localhost:5173/)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Features

- **SCI ⇄ CCF toggle** with a tier‑colored, animated bar chart.
- **Sortable** by impact, ascending or descending (button in the meta bar).
- **Expandable rows** — click (or focus + Enter/Space) any venue to reveal a detail panel. Smoothly animated; respects `prefers-reduced-motion`; keyboard‑ and screen‑reader‑accessible.
- **Field tags** (AI / CV / NLP / DM / IP / TH) and full official names.
- **Type‑checked data** — the dataset is validated at author time (see below).

## Updating the data (the main maintenance task)

All venue data lives in a single file: **`src/data.ts`**. To change a value or add/remove a venue, just edit the entry:

```ts
{ name: "CVPR", full: "IEEE/CVF Conf. on ...", field: "CV", v: 450, url: "https://cvpr.thecvf.com/" },
```

- `v` is the impact value — **Impact Factor** (one decimal) in the SCI view, **h5‑index** (integer) in the CCF view.
- `field` must be one of the defined field codes (`AI` / `CV` / `NLP` / `DM` / `IP` / `TH`).
- `url` is the official homepage (optional — a missing URL shows “待补充” gracefully).
- The trailing `satisfies Dataset` **type‑checks every edit**: a value typed as a string, a misspelled field code, or a missing required key is flagged in your editor immediately, instead of breaking the page at runtime.
- **Adding a new field code:** add it to the `Field` union in `src/types.ts` first, then add its label to `FIELD_LABELS` in `src/data.ts` — TypeScript will point out everywhere that needs updating.

## Data sources & provenance

Values were verified online (not from memory); see the header comment in `src/data.ts` for the per‑field method.

| Metric | Source | As of |
| --- | --- | --- |
| SCI Impact Factor | 2024 JCR (released June 2025), per‑journal via [BioxBio](https://www.bioxbio.com/) (mirrors Clarivate JCR) | 2024 JCR |
| CCF h5‑index | [Google Scholar Metrics](https://scholar.google.com/citations?view_op=top_venues) top‑venue lists | 2025 |
| Official URLs | Publisher journal pages (IEEE Xplore / Springer / Elsevier / ACM DL / Nature / SPIE / Wiley‑IET / World Scientific) and conference organizing‑society series pages | — |

Notes:

- **Multimedia Tools and Applications** was removed from the SCI view — it has been discontinued from the Web of Science core and has no 2024 JCR IF.
- A few CCF‑C venues (**IJCNN**, **The Visual Computer**, **PRICAI**) fall below Google Scholar Metrics’ public top‑20 cutoff, so their h5 could not be authoritatively refreshed; they keep prior values and are marked `[估算]` (estimate) in `src/data.ts`.
- Conferences rotate their site each year, so URLs point to the stable society/series page rather than a year‑specific site.

## Customizing the look

Presentation defaults live in **`src/config.ts`** (these were the original design tool’s “Tweaks” panel, now baked in as constants):

- `TIER_COLORS` / `PALETTES` — tier color scheme.
- `SCALE_MODE` — bar length basis: `"global"` (whole view) or `"perTier"`.
- `DEFAULT_SORT_DESC`, `SHOW_FULL`, `SHOW_FIELD` — initial sort direction and which labels to show.

All visual styling is in `src/styles.css` (ported 1:1 from the original design prototype).

## Project structure

```
src/
  main.tsx              entry point
  App.tsx               page assembly + view/sort/animation state
  types.ts              data model (Dataset / Tier / VenueItem / Field ...)
  data.ts               ★ the dataset — update this
  config.ts             color & display defaults
  utils.ts              value formatting + URL display helper
  styles.css            all styles
  components/
    Masthead.tsx        title + SCI/CCF toggle
    MetaBar.tsx         metric label + count + sort button
    CcfNote.tsx         h5-index explainer (CCF view)
    TierSection.tsx     a single tier (header + rows)
    BarRow.tsx          one bar row + expandable detail panel
    Colophon.tsx        footer legend + disclaimer
    SortIcon.tsx        sort direction icon
```

## Disclaimer

The data is representative and provided for illustration; it may differ from the latest official figures. Always confirm against the authoritative source (JCR / Google Scholar Metrics) for critical use. The original design handoff bundle is kept under `design_pkg/` (gitignored) for reference.
