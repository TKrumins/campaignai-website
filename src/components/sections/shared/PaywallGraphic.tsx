"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";

/**
 * "Democracy has a paywall" reveal: a brick wall breaks open to reveal the
 * CampaignAI mark on the other side. Preserved here as a standalone, reusable
 * graphic — it was retired from the home page (2026-07-16) and is earmarked for
 * the future "For ___" audience-pages project (see docs/handoff/DEFERRED-PROJECTS.md).
 */

// Red / White / Blue sparkles around the broken opening — kept to the sides.
const SPARKS = [
  { l: 20, t: 33, c: "#FF3366", s: 16 },
  { l: 80, t: 29, c: "#E8F4F8", s: 13 },
  { l: 84, t: 62, c: "#4D9FFF", s: 18 },
  { l: 16, t: 66, c: "#E8F4F8", s: 12 },
  { l: 12, t: 22, c: "#4D9FFF", s: 12 },
  { l: 88, t: 82, c: "#FF3366", s: 14 },
];

const BW = 50;
const BH = 26;
const GAP = 3;
const CX = 200;
const CY = 205;
const RX = 98;
const RY = 118;

// Fallen bricks at the base of the broken wall.
const RUBBLE = [
  { x: 48, y: 393, rot: -16, f: "#5b6478" },
  { x: 104, y: 402, rot: 10, f: "#4a5265" },
  { x: 150, y: 395, rot: -7, f: "#5b6478" },
  { x: 205, y: 404, rot: 17, f: "#4a5265" },
  { x: 252, y: 396, rot: -12, f: "#5b6478" },
  { x: 302, y: 403, rot: 8, f: "#4a5265" },
  { x: 344, y: 394, rot: -18, f: "#5b6478" },
];

type Brick = {
  key: string;
  x: number;
  y: number;
  fill: string;
  isBreak: boolean;
  tx: number;
  ty: number;
  rot: number;
  delay: number;
};

function buildBricks(): Brick[] {
  const cols = Math.ceil(400 / BW) + 2;
  const rows = Math.ceil(400 / BH) + 1;
  const bricks: Brick[] = [];
  let i = 0;
  for (let r = 0; r < rows; r++) {
    const offset = r % 2 ? -BW / 2 : 0;
    for (let c = -1; c < cols; c++) {
      const x = c * BW + offset;
      const y = r * BH;
      const cx = x + BW / 2;
      const cy = y + BH / 2;
      const dxn = (cx - CX) / RX;
      const dyn = (cy - CY) / RY;
      const isBreak = dxn * dxn + dyn * dyn < 1;
      const vx = cx - CX;
      const vy = cy - CY;
      const dist = Math.hypot(vx, vy) || 1;
      const mag = 110 + (1 - Math.min(dist / 140, 1)) * 80;
      bricks.push({
        key: `${r}-${c}`,
        x,
        y,
        fill: (r + c) % 2 ? "#2c303c" : "#3b4150",
        isBreak,
        tx: (vx / dist) * mag,
        ty: (vy / dist) * mag - 24,
        rot: (i % 2 ? 1 : -1) * (18 + ((i * 13) % 42)),
        delay: Math.round(Math.min(dist, 140) * 1.9),
      });
      i++;
    }
  }
  return bricks;
}

export function PaywallGraphic() {
  const bricks = useMemo(buildBricks, []);
  const ref = useRef<HTMLDivElement>(null);
  const [broken, setBroken] = useState(false);
  const [instant, setInstant] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true);
      setBroken(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let timer: number;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          timer = window.setTimeout(() => setBroken(true), 1500);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!broken) return;
    if (instant) {
      setShowExtras(true);
      return;
    }
    const t = window.setTimeout(() => setShowExtras(true), 1500);
    return () => window.clearTimeout(t);
  }, [broken, instant]);

  const contentStyle = (delay: string): CSSProperties => ({
    opacity: broken ? 1 : 0,
    transition: instant ? "none" : "opacity 0.85s ease",
    transitionDelay: instant ? "0s" : delay,
  });

  const rayColors = ["#FF3366", "#8E5CF7", "#4D9FFF"];

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[440px]">
      <svg viewBox="0 0 400 420" className="w-full drop-shadow-xl" role="img" aria-label="A paywall breaking open to reveal the CampaignAI logo">
        <defs>
          <radialGradient id="holeGlow" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="0.5" stopColor="#EBEAFB" stopOpacity="0.45" />
            <stop offset="1" stopColor="#EBEAFB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* light streaming through the opening — red / purple / blue */}
        <g style={contentStyle("0.35s")}>
          {Array.from({ length: 12 }).map((_, i) => (
            <polygon
              key={i}
              className="paywall-ray"
              points={`${CX},${CY} ${CX - 7},${i % 2 ? 45 : 8} ${CX + 7},${i % 2 ? 45 : 8}`}
              fill={rayColors[i % 3]}
              fillOpacity="0.34"
              transform={`rotate(${i * 30} ${CX} ${CY})`}
              style={{ animationDelay: `${(i % 4) * 0.4}s` }}
            />
          ))}
          <ellipse cx={CX} cy={CY} rx="150" ry="165" fill="url(#holeGlow)" />
        </g>

        {/* wall */}
        <g>
          {bricks.map((b) =>
            b.isBreak ? (
              <rect
                key={b.key}
                x={b.x + GAP / 2}
                y={b.y + GAP / 2}
                width={BW - GAP}
                height={BH - GAP}
                rx="3"
                fill={b.fill}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transform: broken ? `translate(${b.tx}px, ${b.ty}px) rotate(${b.rot}deg)` : "none",
                  opacity: broken ? 0 : 1,
                  transition: instant ? "none" : "transform 1.2s cubic-bezier(0.4,0,0.2,1), opacity 1.2s ease",
                  transitionDelay: instant ? "0s" : `${b.delay}ms`,
                }}
              />
            ) : (
              <rect key={b.key} x={b.x + GAP / 2} y={b.y + GAP / 2} width={BW - GAP} height={BH - GAP} rx="3" fill={b.fill} />
            )
          )}
        </g>

        {/* reveal: the CampaignAI mark through the opening */}
        <g style={contentStyle("0.5s")}>
          <image
            href="/assets/logos/logo-transparent-light.png"
            x={CX - 80}
            y={CY - 80}
            width="160"
            height="160"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {/* rubble at the base of the broken wall */}
        <g style={contentStyle("0.9s")}>
          {RUBBLE.map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={b.y}
              width={BW - GAP + 4}
              height={BH - GAP + 2}
              rx="3"
              fill={b.f}
              stroke="#20242e"
              strokeWidth="1.5"
              transform={`rotate(${b.rot} ${b.x + (BW - GAP) / 2} ${b.y + (BH - GAP) / 2})`}
            />
          ))}
        </g>
      </svg>

      {/* RWB sparkles — only after the wall has broken */}
      {showExtras &&
        SPARKS.map((p, i) => (
          <AISparkle
            key={i}
            size={p.s}
            color={p.c}
            glow
            className="sparkle-twinkle absolute"
            style={{ left: `${p.l}%`, top: `${p.t}%`, ["--dur"]: `${2.6 + (i % 3) * 0.6}s`, animationDelay: `${i * 0.3}s` } as CSSProperties}
          />
        ))}
    </div>
  );
}
