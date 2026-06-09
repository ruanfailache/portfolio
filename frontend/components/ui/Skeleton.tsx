import type { CSSProperties } from "react";

export default function Skeleton({
  width = "100%",
  height = 20,
  style,
}: {
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
}) {
  return (
    <div
      className="skeleton"
      style={{ width, height, ...style }}
      aria-hidden="true"
    />
  );
}
