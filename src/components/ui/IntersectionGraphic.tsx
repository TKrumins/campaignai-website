"use client";

import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Scale, Eye, Handshake } from "lucide-react";

// Three political streams — Republican (crimson), Independent (bridge violet),
// Democrat (blue) — flowing down and weaving into one common node. The stream
// colours blend toward violet as they converge, so "different starts, shared
// ground" reads in the gradient itself. Traveling lights carry each colour to
// the centre. Brand tokens throughout (the old version used raw red-600 /
// blue-600 and crude rotated <div> bars).

const STREAMS = [
  { id: "rep", label: "Republican", color: "#FF3366", d: "M120 66 C 120 150, 300 150, 300 232" },
  { id: "ind", label: "Independent", color: "#8E5CF7", d: "M300 66 C 300 128, 300 172, 300 232" },
  { id: "dem", label: "Democrat", color: "#4D9FFF", d: "M480 66 C 480 150, 300 150, 300 232" },
];

const SPARK = "M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z";

const trustSignals = [
  {
    icon: Handshake,
    title: "No single party controls the product",
    description: "Every decision is shaped by people with different political perspectives.",
  },
  {
    icon: Eye,
    title: "Transparency by design",
    description: "AI disclosure on every video. No hidden agendas. No partisan favoritism.",
  },
  {
    icon: Scale,
    title: "Accountability in every direction",
    description: "Our founders hold each other to a higher standard because they don't always agree.",
  },
  {
    icon: ShieldCheck,
    title: "Your trust is the product",
    description: "If campaigns across the spectrum trust us, we're doing something right.",
  },
];

export function IntersectionGraphic() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      {/* Convergence visual — three streams weaving into common ground */}
      <ScrollReveal>
        <div className="mb-10">
          <svg viewBox="0 0 600 300" className="mx-auto h-auto w-full max-w-[560px]" role="img" aria-label="Three political streams converging on common ground">
            <defs>
              {STREAMS.map((s) => (
                <linearGradient key={s.id} id={`str-${s.id}`} gradientUnits="userSpaceOnUse" x1="300" y1="66" x2="300" y2="232">
                  <stop offset="0" stopColor={s.color} />
                  <stop offset="1" stopColor="#8E5CF7" />
                </linearGradient>
              ))}
              <linearGradient id="conv-node" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#FF3366" />
                <stop offset="0.5" stopColor="#8E5CF7" />
                <stop offset="1" stopColor="#4D9FFF" />
              </linearGradient>
              <filter id="conv-glow"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>

            {/* streams */}
            {STREAMS.map((s) => (
              <path key={s.id} id={`path-${s.id}`} d={s.d} fill="none" stroke={`url(#str-${s.id})`} strokeWidth="6" strokeLinecap="round" opacity="0.9" />
            ))}

            {/* traveling lights converging to the centre */}
            {STREAMS.map((s, i) => (
              <circle key={s.id} r="4.5" fill={s.color} filter="url(#conv-glow)">
                <animateMotion dur={`${2.6 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.5}s`}>
                  <mpath href={`#path-${s.id}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1" dur={`${2.6 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
              </circle>
            ))}

            {/* party markers */}
            {STREAMS.map((s) => {
              const x = s.id === "rep" ? 120 : s.id === "dem" ? 480 : 300;
              return (
                <g key={s.id}>
                  <circle cx={x} cy="58" r="9" fill={s.color} />
                  <circle cx={x} cy="58" r="14" fill="none" stroke={s.color} strokeOpacity="0.3" strokeWidth="2" />
                  <text x={x} y="34" textAnchor="middle" className="font-heading" fontSize="15" fontWeight="700" fill="#0D1B3E">{s.label}</text>
                </g>
              );
            })}

            {/* convergence node */}
            <circle cx="300" cy="252" r="30" fill="url(#conv-node)" />
            <circle cx="300" cy="252" r="24" fill="#fff" />
            <path d="M289 252 l7 7 15 -16" fill="none" stroke="#0D1B3E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

            {/* AI sparkles */}
            {[
              { x: 175, y: 120, s: 15, c: "#FF3366", d: 0 },
              { x: 300, y: 100, s: 11, c: "#8E5CF7", d: 0.6 },
              { x: 425, y: 120, s: 15, c: "#4D9FFF", d: 0.3 },
              { x: 355, y: 244, s: 12, c: "#FFB800", d: 0.9 },
            ].map((p, i) => {
              const k = p.s / 24;
              return (
                <g key={i} transform={`translate(${p.x} ${p.y}) scale(${k}) translate(-12 -12)`}>
                  <path d={SPARK} fill={p.c} className="sparkle-twinkle" style={{ ["--dur"]: `${2.6 + (i % 3) * 0.5}s`, animationDelay: `${p.d}s` } as CSSProperties} />
                </g>
              );
            })}
          </svg>

          <div className="mx-auto mt-2 max-w-[420px] text-center">
            <p className="font-heading text-lg font-extrabold text-regal-navy sm:text-xl">Principles we can all agree on</p>
            <p className="mt-1 text-sm text-slate">
              We don&apos;t agree on much in politics. We do agree that every campaign deserves
              professional tools &mdash; and that&apos;s the whole idea.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Trust signals grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {trustSignals.map(({ icon: Icon, title, description }, i) => (
          <ScrollReveal key={title} delay={100 + i * 100}>
            <div className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm ring-1 ring-black/5">
              <div className="w-12 h-12 rounded-lg bg-regal-navy/5 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-regal-navy" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-regal-navy mb-1">{title}</h4>
                <p className="text-slate text-sm leading-snug">{description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
