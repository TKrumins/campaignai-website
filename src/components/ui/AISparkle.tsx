import type { CSSProperties } from "react";

/** Gradient fills declared once in the root layout's global <defs>. */
export type SparkleGradient =
  | "patriot"
  | "patriot-deep"
  | "verdant"
  | "verdant-deep"
  | "verdant-pale"
  | "civic";

/** Solid color used for the glow when a gradient fill is in play. */
const GRADIENT_GLOW: Record<SparkleGradient, string> = {
  patriot: "#8E5CF7",
  "patriot-deep": "#8E5CF7",
  verdant: "#00D084",
  "verdant-deep": "#2FAE7E",
  "verdant-pale": "#6EE7B7",
  civic: "#2FAE7E",
};

/**
 * Four-point AI sparkle (the brand mark motif). Lightweight inline SVG so
 * it can be scattered across motion graphics in any palette color/size.
 * Add `sparkle-twinkle` via className to animate (pulse + slow rotate);
 * set `--dur` in style to vary the cadence.
 *
 * Pass `gradient` instead of `color` for a two- or three-stop fill (patriot
 * red/white/blue, staged greens, or green-into-blue).
 */
export function AISparkle({
  size = 16,
  color = "#FFB800",
  gradient,
  className = "",
  style,
  glow = false,
}: {
  size?: number;
  color?: string;
  gradient?: SparkleGradient;
  className?: string;
  style?: CSSProperties;
  glow?: boolean;
}) {
  const fill = gradient ? `url(#sparkle-${gradient})` : color;
  const glowColor = gradient ? GRADIENT_GLOW[gradient] : color;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 4px ${glowColor})` : undefined, ...style }}
      aria-hidden
    >
      <path
        d="M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z"
        fill={fill}
      />
    </svg>
  );
}
