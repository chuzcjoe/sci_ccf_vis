import { SortIcon } from "./SortIcon";

interface MetaBarProps {
  metricLabel: string;
  metricSub: string;
  totalCount: number;
  tierCount: number;
  sortDesc: boolean;
  onToggleSort: () => void;
}

export function MetaBar({
  metricLabel,
  metricSub,
  totalCount,
  tierCount,
  sortDesc,
  onToggleSort,
}: MetaBarProps) {
  return (
    <div className="metabar">
      <div className="metric">
        <span className="m-name">{metricLabel}</span>
        <span className="m-sub">{metricSub}</span>
      </div>
      <div className="meta-tools">
        <span className="count">
          {totalCount} 个刊物 · {tierCount} 个分级
        </span>
        <button className="sortbtn" onClick={onToggleSort} title="切换排序方向">
          <SortIcon dir={sortDesc ? "desc" : "asc"} />
          {sortDesc ? "影响力 高 → 低" : "影响力 低 → 高"}
        </button>
      </div>
    </div>
  );
}
