import type { MetricKey, Tier } from "../types";
import { BarRow } from "./BarRow";

interface TierSectionProps {
  tier: Tier;
  color: string;
  metricKey: MetricKey;
  /** Value that maps to 100% bar width for this tier's rows. */
  base: number;
  sortDesc: boolean;
  grown: boolean;
  showFull: boolean;
  showField: boolean;
}

export function TierSection({
  tier,
  color,
  metricKey,
  base,
  sortDesc,
  grown,
  showFull,
  showField,
}: TierSectionProps) {
  const items = [...tier.items].sort((a, b) =>
    sortDesc ? b.v - a.v : a.v - b.v,
  );
  const vals = tier.items.map((it) => it.v);
  const lo = Math.min(...vals);
  const hi = Math.max(...vals);

  return (
    <section className="tier">
      <div className="tier-head">
        <span className="tier-swatch" style={{ background: color }} />
        <span className="tier-name">{tier.name}</span>
        <span className="tier-en">{tier.en}</span>
        <span className="tier-meta">
          {tier.items.length} 项 · {metricKey} {lo}–{hi}
        </span>
      </div>
      <div className="rows">
        {items.map((it, idx) => (
          <BarRow
            key={it.name}
            item={it}
            color={color}
            base={base}
            metricKey={metricKey}
            grown={grown}
            index={idx}
            showFull={showFull}
            showField={showField}
          />
        ))}
      </div>
    </section>
  );
}
