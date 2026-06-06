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
      <div style={{ textAlign: "right", maxWidth: "42ch" }}>
        数据为约 2023–2024 年的代表性数值，仅供示意，可能与最新官方数据存在出入。
      </div>
    </footer>
  );
}
