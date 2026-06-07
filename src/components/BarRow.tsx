import { useId, useState, type KeyboardEvent } from "react";
import type { MetricKey, VenueItem } from "../types";
import { FIELD_LABELS } from "../data";
import { formatValue, prettyUrl } from "../utils";

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
  const [open, setOpen] = useState(false);
  const detailId = useId();
  const pct = Math.max(1.5, (item.v / base) * 100);
  const wide = pct > 16; // wide enough to hold the value inside the bar
  const valStr = formatValue(metricKey, item.v);

  const toggle = () => setOpen((o) => !o);
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={open ? "venue open" : "venue"}>
      <div
        className="row"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={detailId}
        onClick={toggle}
        onKeyDown={onKeyDown}
      >
        <div className="row-name">
          <div className="row-abbr">
            <svg
              className="row-chevron"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
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

      <div
        id={detailId}
        className={open ? "row-detail open" : "row-detail"}
        aria-hidden={!open}
      >
        <div className="row-detail-inner">
          <dl className="detail-list">
            <div className="detail-item">
              <dt>官网</dt>
              <dd>
                {item.url ? (
                  <a
                    className="detail-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={open ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {prettyUrl(item.url)}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                ) : (
                  <span className="detail-empty">待补充</span>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
