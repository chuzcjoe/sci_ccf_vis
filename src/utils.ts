import type { MetricKey } from "./types";

/**
 * Format an impact value for display.
 * IF keeps one decimal (e.g. 20.8, 1.0); h5-index is an integer (e.g. 440).
 */
export function formatValue(metricKey: MetricKey, v: number): string {
  return metricKey === "IF" ? v.toFixed(1) : String(v);
}

/** Strip protocol and trailing slash for a compact link label. */
export function prettyUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/+$/, "");
}
