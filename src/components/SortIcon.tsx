interface SortIconProps {
  /** "desc" = arrow points down (高→低); "asc" = flipped. */
  dir: "asc" | "desc";
}

export function SortIcon({ dir }: SortIconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: dir === "asc" ? "scaleY(-1)" : "none" }}
    >
      <path d="M7 4v15" />
      <path d="M3.5 15.5 7 19l3.5-3.5" />
      <path d="M13 6h8M13 11h6M13 16h4" />
    </svg>
  );
}
