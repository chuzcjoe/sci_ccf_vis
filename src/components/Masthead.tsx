import type { ViewKey } from "../types";

interface MastheadProps {
  view: ViewKey;
  onSwitch: (view: ViewKey) => void;
}

export function Masthead({ view, onSwitch }: MastheadProps) {
  return (
    <header className="masthead">
      <div className="mast-left">
        <p className="eyebrow">Computer Science · Artificial Intelligence</p>
        <h1>期刊与会议影响力图谱</h1>
        <p className="sub">
          按收录目录分级排列，横条长度对应各刊物的影响力指标。点击右上角按钮在 SCI
          分区与 CCF 等级之间切换。
        </p>
      </div>
      <div className="toggle" role="group" aria-label="切换数据源">
        <button
          className={view === "sci" ? "active" : ""}
          aria-pressed={view === "sci"}
          onClick={() => onSwitch("sci")}
        >
          SCI 分区
          <span className="tg-sub">中科院 · 一~四区</span>
        </button>
        <button
          className={view === "ccf" ? "active" : ""}
          aria-pressed={view === "ccf"}
          onClick={() => onSwitch("ccf")}
        >
          CCF 等级
          <span className="tg-sub">推荐目录 · A/B/C</span>
        </button>
      </div>
    </header>
  );
}
