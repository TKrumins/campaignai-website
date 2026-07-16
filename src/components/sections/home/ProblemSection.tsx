"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { DollarSign, UserX, Lock, TrendingUp } from "lucide-react";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";
import { CampaignArc } from "./CampaignArc";

// The $10,000 reference moves into this band (no longer the lead line up top),
// with the honest range spelled out beneath it.
const stats = [
  { value: "$10,000+", label: "What a single agency ad can run — and fees range from $3,000 to $100,000+ with the race.", icon: DollarSign, color: "text-liberty-crimson" },
  { value: "$10.8B", label: "Expected spend on the 2026 midterm cycle", icon: TrendingUp, color: "text-freedom-blue" },
  { value: "95%", label: "Of local candidates priced out of professional video", icon: UserX, color: "text-liberty-crimson" },
  { value: "85%", label: "Believe campaign costs keep good people from running", icon: Lock, color: "text-freedom-blue" },
];

// Red / White / Blue sparkles around the broken opening — kept to the sides so
// they never sit over the "$599" reveal or the heading.
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

// Fallen bricks at the base of the broken wall — lighter than the wall so
// they read clearly as debris.
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

function PaywallGraphic() {
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
          // Hold 1.5s so the viewer settles in before the wall breaks.
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

  // Hold the sparkles until the wall has actually broken.
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
      <p className="mb-5 text-center font-heading text-2xl font-extrabold tracking-[-0.5px] text-regal-navy md:text-3xl">
        Feel like democracy has a paywall?
      </p>
      <svg viewBox="0 0 400 420" className="w-full drop-shadow-xl" role="img" aria-label="A paywall breaking open to reveal the CampaignAI logo">
        <defs>
          <radialGradient id="holeGlow" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="0.5" stopColor="#EBEAFB" stopOpacity="0.45" />
            <stop offset="1" stopColor="#EBEAFB" stopOpacity="0" />
          </radialGradient>
          {/* Knocks the opaque white background out of the logo raster so the
              mark reveals cleanly on the light glow (alpha = 1 − luminance). */}
          <filter id="logoKnockout" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -0.2126 -0.7152 -0.0722 0 1"
            />
          </filter>
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

        {/* reveal: the CampaignAI mark through the opening — the paywall breaks
            open to reveal us on the other side. */}
        <g style={contentStyle("0.5s")}>
          <image
            href="/assets/logos/logo-light-background.svg"
            x={CX - 78}
            y={CY - 78}
            width="156"
            height="156"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#logoKnockout)"
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

export function ProblemSection() {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* lead-in: the paywall breaks on the question, revealing us */}
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-[460px]">
            <PaywallGraphic />
          </div>
        </ScrollReveal>

        {/* the answer + a short Q&A */}
        <ScrollReveal>
          <div className="mx-auto max-w-[880px] text-center">
            <h2 className="font-heading text-4xl font-extrabold tracking-[-1.5px] text-regal-navy sm:text-5xl md:text-[52px]">
              Don&apos;t spend your whole budget on one ad.
            </h2>

            <div className="mt-9 grid gap-5 text-left sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-dawn-frost p-6">
                <p className="font-heading text-lg font-bold text-regal-navy">
                  Do I need one big, expensive ad to be taken seriously?
                </p>
                <p className="mt-3 leading-relaxed text-granite">
                  No. A campaign is a season of stories, not a single spot. For
                  decades, one professional ad could eat your whole video budget
                  &mdash; we help you make many, across your whole race, instead.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-dawn-frost p-6">
                <p className="font-heading text-lg font-bold text-regal-navy">
                  So what does it actually cost?
                </p>
                <p className="mt-3 leading-relaxed text-granite">
                  A fraction of one agency ad. Candidates start at{" "}
                  <span className="font-semibold text-regal-navy">$599</span> this
                  cycle, organizations at{" "}
                  <span className="font-semibold text-regal-navy">$1,999</span>, and
                  nonprofits get mission-based pricing.{" "}
                  <Link href="#pricing" className="font-semibold text-freedom-blue hover:underline">
                    See what applies to you &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Campaign Arc — the season of stories, visualized (graphic only) */}
        <ScrollReveal delay={100}>
          <div className="mt-12">
            <CampaignArc showHeader={false} />
          </div>
        </ScrollReveal>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3">
            {CTA_PRIMARY}
          </Button>
          <p className="mt-2 text-sm text-slate">{CTA_MICROCOPY}</p>
        </div>

        {/* integrated stat band */}
        <ScrollReveal>
          <div className="mt-16 grid grid-cols-1 gap-6 rounded-2xl bg-regal-navy px-6 py-8 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon, color }, i) => (
              <div key={value} className="relative flex flex-col items-center text-center">
                {i > 0 && <span className="absolute -left-3 top-2 hidden h-16 w-px bg-white/10 lg:block" />}
                <div className="mb-2 flex items-center gap-2">
                  <Icon className={`h-6 w-6 ${color}`} strokeWidth={1.9} />
                  <AISparkle size={13} color={i % 2 ? "#4D9FFF" : "#FF3366"} glow className="sparkle-twinkle" style={{ ["--dur"]: "3.2s", animationDelay: `${i * 0.4}s` } as CSSProperties} />
                </div>
                <p className="font-heading text-3xl font-extrabold text-beacon-white md:text-4xl">{value}</p>
                <p className="mt-2 max-w-[220px] text-sm leading-snug text-beacon-white/70">{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
