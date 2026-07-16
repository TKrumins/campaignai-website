import type { CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";

type Spark = { x: string; y: string; size: number; color: string; dur: string; glow?: boolean };

/**
 * Red / white / blue sparkle motif ringing the hero visual. The field box is
 * anchored to the visual column and expanded outward, so every sparkle sits in
 * the margin around the visual (or in the gap between the visual and the lead
 * copy) — never over the text. Because it's tied to the visual it scales the
 * same on every breakpoint: on mobile the visual stacks below the copy, so the
 * whole field drops with it and still clears the text.
 */
// Thinned ~40% per Tom, and deliberately cleared of the top-left of the visual
// (the corner nearest the films' upper-left) — everything now sits along the
// right edge and bottom.
const SPARKS: Spark[] = [
  { x: "93%", y: "5%", size: 16, color: "#4D9FFF", dur: "3.6s", glow: true },
  { x: "99%", y: "32%", size: 12, color: "#FF3366", dur: "2.9s" },
  { x: "97%", y: "66%", size: 15, color: "#E8F4F8", dur: "3.1s", glow: true },
  { x: "89%", y: "95%", size: 13, color: "#4D9FFF", dur: "2.7s" },
  { x: "52%", y: "99%", size: 11, color: "#FF3366", dur: "3.4s", glow: true },
  { x: "9%", y: "93%", size: 14, color: "#7AB8FF", dur: "2.8s" },
];

export function HeroSparkleField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-x-6 -inset-y-8 z-0 lg:-inset-x-12"
    >
      {SPARKS.map((s, i) => (
        <AISparkle
          key={i}
          size={s.size}
          color={s.color}
          glow={s.glow}
          className="sparkle-twinkle absolute"
          style={{ left: s.x, top: s.y, ["--dur"]: s.dur } as CSSProperties}
        />
      ))}
    </div>
  );
}

/**
 * Desktop-only spread that carries the sparkle motif across the whole hero — the
 * center gap between the copy and visual, and the bottom band below the pricing.
 * Positions are section-relative and hand-placed to sit in genuinely empty zones
 * (never the copy). Hidden below lg, where the single-column layout has no such
 * gaps and the visual-anchored field already does the work.
 */
const SPREAD: Spark[] = [
  { x: "51%", y: "52%", size: 14, color: "#FF3366", dur: "2.7s", glow: true },
  { x: "5%", y: "88%", size: 13, color: "#7AB8FF", dur: "2.9s", glow: true },
  { x: "38%", y: "90%", size: 10, color: "#E8F4F8", dur: "2.6s" },
  { x: "62%", y: "94%", size: 13, color: "#4D9FFF", dur: "3.4s", glow: true },
];

export function HeroSparkleSpread() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
      {SPREAD.map((s, i) => (
        <AISparkle
          key={i}
          size={s.size}
          color={s.color}
          glow={s.glow}
          className="sparkle-twinkle absolute"
          style={{ left: s.x, top: s.y, ["--dur"]: s.dur } as CSSProperties}
        />
      ))}
    </div>
  );
}
