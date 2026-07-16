"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { DollarSign, UserX, Lock, TrendingUp, Play } from "lucide-react";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

// The $10,000 reference moves into this band (no longer the lead line up top),
// with the honest range spelled out beneath it.
const stats = [
  { value: "$10,000+", label: "What a single agency ad can run — and fees range from $3,000 to $100,000+ with the race.", icon: DollarSign, color: "text-liberty-crimson" },
  { value: "$10.8B", label: "Expected spend on the 2026 midterm cycle", icon: TrendingUp, color: "text-freedom-blue" },
  { value: "95%", label: "Of local candidates priced out of professional video", icon: UserX, color: "text-liberty-crimson" },
  { value: "85%", label: "Believe campaign costs keep good people from running", icon: Lock, color: "text-freedom-blue" },
];

// One-vs-many: a single big-budget ad set against the library of videos a
// campaign can make with us instead. We're not the budget option — we're a
// different way to run a campaign, telling many stories over the race.
function OneVsManyGraphic() {
  const tileAccents = [
    "#FF3366", "#8E5CF7", "#4D9FFF", "#FF3366",
    "#4D9FFF", "#8E5CF7", "#FF3366", "#4D9FFF",
  ];
  return (
    <div className="mt-7 rounded-2xl border border-gray-200 bg-dawn-frost p-5">
      <div className="flex items-center gap-4">
        {/* one big ad */}
        <div className="shrink-0 text-center">
          <div className="grid h-[86px] w-[72px] place-items-center rounded-lg bg-slate/10 ring-1 ring-slate/25 sm:w-[84px]">
            <span className="font-heading text-2xl font-extrabold text-slate">$$$</span>
          </div>
          <p className="mt-2 max-w-[84px] text-[11px] font-semibold leading-tight text-slate">
            One big&nbsp;ad
          </p>
        </div>

        <span className="font-heading text-2xl font-bold text-regal-navy">&rarr;</span>

        {/* a whole season of video */}
        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-4 gap-1.5">
            {tileAccents.map((c, i) => (
              <div
                key={i}
                className="relative flex aspect-video items-center justify-center rounded-md ring-1 ring-black/5"
                style={{ backgroundColor: `${c}1A` }}
              >
                <Play className="h-2.5 w-2.5" style={{ color: c }} fill={c} />
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11px] font-semibold leading-tight text-regal-navy">
            A whole season of video with CampaignAI
          </p>
        </div>
      </div>
    </div>
  );
}

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
        Democracy shouldn&apos;t have a paywall.
      </p>
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
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* copy */}
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-4xl font-extrabold tracking-[-1.5px] text-regal-navy sm:text-5xl md:text-[52px]">
                Don&apos;t spend your whole budget on one ad.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-granite">
                A campaign is a season of stories, not a single spot. Instead of
                pouring everything into one expensive ad, produce a whole library
                of videos across your race &mdash; for a fraction of what one
                agency ad costs.
              </p>

              <OneVsManyGraphic />

              {/* Honest range so a non-candidate visitor isn't anchored on the
                  candidate rate before the pricing section below. */}
              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate">
                Candidates start at <span className="font-semibold text-regal-navy">$599</span> this
                cycle, organizations at <span className="font-semibold text-regal-navy">$1,999</span>,
                and nonprofits get mission-based pricing.{" "}
                <Link href="#pricing" className="font-semibold text-freedom-blue hover:underline">
                  See what applies to you &rarr;
                </Link>
              </p>

              <div className="mt-8">
                <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3">
                  {CTA_PRIMARY}
                </Button>
                <p className="mt-2 text-sm text-slate">{CTA_MICROCOPY}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* graphic */}
          <ScrollReveal delay={150}>
            <PaywallGraphic />
          </ScrollReveal>
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
