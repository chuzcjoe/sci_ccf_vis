import type { Tier } from "../types";

interface ColophonProps {
  tiers: Tier[];
  colors: readonly string[];
}

export function Colophon({ tiers, colors }: ColophonProps) {
  return (
    <footer className="colophon">
      <div className="legend">
        {tiers.map((tr, ti) => (
          <span className="legend-item" key={tr.id}>
            <span
              className="legend-dot"
              style={{ background: colors[ti] ?? colors[colors.length - 1] }}
            />
            {tr.name}
          </span>
        ))}
      </div>
      <div style={{ textAlign: "right", maxWidth: "46ch" }}>
        SCI 影响因子为 2024 JCR（2025 年发布，源自 BioxBio/Clarivate）；
        CCF h5-index 为 2025 Google Scholar Metrics。两视图数值不可横向比较。
      </div>
    </footer>
  );
}
