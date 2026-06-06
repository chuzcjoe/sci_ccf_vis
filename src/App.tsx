import { useEffect, useMemo, useState } from "react";
import { VENUE_DATA } from "./data";
import {
  DEFAULT_SORT_DESC,
  SCALE_MODE,
  SHOW_FIELD,
  SHOW_FULL,
  TIER_COLORS,
} from "./config";
import type { ViewKey } from "./types";
import { Masthead } from "./components/Masthead";
import { MetaBar } from "./components/MetaBar";
import { CcfNote } from "./components/CcfNote";
import { TierSection } from "./components/TierSection";
import { Colophon } from "./components/Colophon";

export default function App() {
  const [view, setView] = useState<ViewKey>("sci"); // 'sci' | 'ccf'
  const [sortDesc, setSortDesc] = useState(DEFAULT_SORT_DESC);
  const [grown, setGrown] = useState(false);

  // Grow bars from zero on first paint and whenever the view switches.
  // (Sort direction changes just transition widths/positions smoothly — no reset.)
  useEffect(() => {
    setGrown(false);
    const id = window.setTimeout(() => setGrown(true), 60);
    return () => window.clearTimeout(id);
  }, [view]);

  const data = VENUE_DATA[view];

  // Global max across the whole view (for the "global" scale mode).
  const globalMax = useMemo(() => {
    let m = 0;
    for (const tier of data.tiers) {
      for (const it of tier.items) {
        if (it.v > m) m = it.v;
      }
    }
    return m;
  }, [data]);

  const totalCount = useMemo(
    () => data.tiers.reduce((s, tr) => s + tr.items.length, 0),
    [data],
  );

  const tierColor = (i: number) =>
    TIER_COLORS[i] ?? TIER_COLORS[TIER_COLORS.length - 1];

  return (
    <div className="page">
      <Masthead view={view} onSwitch={setView} />

      <MetaBar
        metricLabel={data.metricLabel}
        metricSub={data.metricSub}
        totalCount={totalCount}
        tierCount={data.tiers.length}
        sortDesc={sortDesc}
        onToggleSort={() => setSortDesc((d) => !d)}
      />

      {view === "ccf" && <CcfNote />}

      <main>
        {data.tiers.map((tier, ti) => {
          const localMax = tier.items.reduce((m, it) => Math.max(m, it.v), 0);
          const base = SCALE_MODE === "perTier" ? localMax : globalMax;
          return (
            <TierSection
              key={tier.id}
              tier={tier}
              color={tierColor(ti)}
              metricKey={data.metricKey}
              base={base}
              sortDesc={sortDesc}
              grown={grown}
              showFull={SHOW_FULL}
              showField={SHOW_FIELD}
            />
          );
        })}
      </main>

      <Colophon tiers={data.tiers} colors={TIER_COLORS} />
    </div>
  );
}
