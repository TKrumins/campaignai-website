import type { CSSProperties } from "react";

/**
 * Four-point AI sparkle (the brand mark motif). Lightweight inline SVG so
 * it can be scattered across motion graphics in any palette color/size.
 * Add `sparkle-twinkle` via className to animate (pulse + slow rotate);
 * set `--dur` in style to vary the cadence.
 */
export function AISparkle({
  size = 16,
  color = "#FFB800",
  className = "",
  style,
  glow = false,
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  glow?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 4px ${color})` : undefined, ...style }}
      aria-hidden
    >
      <path
        d="M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z"
        fill={color}
      />
    </svg>
  );
}
