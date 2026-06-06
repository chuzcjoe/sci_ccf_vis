// Domain model for the journal / conference impact atlas.
// These types are the contract the data file (`data.ts`) is checked against,
// so hand-editing values or adding new venues is validated at author time.

/** Research field tag shown on each venue. Add new codes here first. */
export type Field = "AI" | "CV" | "NLP" | "DM" | "IP" | "TH";

/**
 * Which impact metric a view uses. The two views are NOT comparable:
 * - "IF" — Journal Impact Factor (one decimal place), used by the SCI view.
 * - "h5" — Google Scholar h5-index (integer), used by the CCF view.
 */
export type MetricKey = "IF" | "h5";

/** The two data sources the toggle switches between. */
export type ViewKey = "sci" | "ccf";

/** A single journal or conference. */
export interface VenueItem {
  /** Short name / abbreviation shown as the row title, e.g. "IEEE TPAMI". */
  name: string;
  /** Full official name; hidden when it equals `name`. */
  full: string;
  /** Research field; must be one of the `Field` codes. */
  field: Field;
  /** The impact value (IF or h5-index, depending on the view). */
  v: number;
}

/** A tier / grade band (e.g. 一区, CCF-A) holding its venues. */
export interface Tier {
  /** Stable key used for React lists. */
  id: string;
  /** Display name, e.g. "一区" or "CCF-A". */
  name: string;
  /** Short English / Latin label, e.g. "Q1 · Top". */
  en: string;
  items: VenueItem[];
}

/** One toggle-able view (SCI or CCF). */
export interface ViewData {
  metricKey: MetricKey;
  /** Metric name shown in the meta bar, e.g. "影响因子". */
  metricLabel: string;
  /** Metric sub-label, e.g. "Journal Impact Factor". */
  metricSub: string;
  tiers: Tier[];
}

/** Whole dataset: one `ViewData` per view. */
export type Dataset = Record<ViewKey, ViewData>;
