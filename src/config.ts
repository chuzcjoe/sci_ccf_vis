// Presentation config — these were the prototype's "Tweaks" panel defaults.
// The design tool's tweak panel is gone; change these constants to re-theme.

/** Tier color palettes (index 0 = top tier). Swap `TIER_COLORS` to switch. */
export const PALETTES = {
  academicBlue: ["#29487D", "#3E8E7E", "#C9893E", "#9C5A66"],
  coolGray: ["#2B3A4A", "#506B81", "#8AA1B1", "#B6C2CB"],
  warm: ["#9A3B2E", "#C9722E", "#D9A441", "#B19668"],
} as const;

/** Active palette: one color per tier, top to bottom. */
export const TIER_COLORS: readonly string[] = PALETTES.academicBlue;

/**
 * Bar length basis:
 * - "global"  — every bar measured against the max across the whole view.
 * - "perTier" — each tier's bars measured against that tier's own max.
 */
export const SCALE_MODE: "global" | "perTier" = "global";

/** Initial sort direction: true = 影响力 高 → 低 (descending). */
export const DEFAULT_SORT_DESC = true;

/** Show each venue's full official name under its short name. */
export const SHOW_FULL = true;

/** Show the research-field tag chip next to each venue. */
export const SHOW_FIELD = true;
