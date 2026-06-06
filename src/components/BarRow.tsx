import type { MetricKey, VenueItem } from "../types";
import { FIELD_LABELS } from "../data";
import { formatValue } from "../utils";

interface BarRowProps {
  item: VenueItem;
  color: string;
  /** Value that maps to 100% bar width (global max or per-tier max). */
  base: number;
  metricKey: MetricKey;
  /** Whether bars have grown from 0 (drives the entrance animation). */
  grown: boolean;
  /** Position within the tier, used to stagger the grow animation. */
  index: number;
  showFull: boolean;
  showField: boolean;
}

export function BarRow({
  item,
  color,
  base,
  metricKey,
  grown,
  index,
  showFull,
  showField,
}: BarRowProps) {
  const pct = Math.max(1.5, (item.v / base) * 100);
  const wide = pct > 16; // wide enough to hold the value inside the bar
  const valStr = formatValue(metricKey, item.v);

  return (
    <div className="row">
      <div className="row-name">
        <div className="row-abbr">
          <span>{item.name}</span>
          {showField && (
            <span className="field-tag" title={FIELD_LABELS[item.field]}>
              {item.field}
            </span>
          )}
        </div>
        {showFull && item.full && item.full !== item.name && (
          <div className="row-full" title={item.full}>
            {item.full}
          </div>
        )}
      </div>
      <div className="row-bar">
        <div className="track">
          <div
            className="fill"
            style={{
              width: grown ? `${pct}%` : "0%",
              background: color,
              transitionDelay: `${grown ? index * 35 : 0}ms`,
            }}
          >
            {wide && <span className="val val-in">{valStr}</span>}
          </div>
          {!wide && (
            <span
              className="val val-out"
              style={{ left: `${grown ? pct : 0}%` }}
            >
              {valStr}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
