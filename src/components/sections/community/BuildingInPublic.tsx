"use client";

import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import {
  Users,
  Scale,
  FlaskConical,
  Megaphone,
  Vote,
  GraduationCap,
  Handshake,
  Newspaper,
  Landmark,
  HeartHandshake,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Stakeholder {
  icon: LucideIcon;
  label: string;
  examples: string;
}

const stakeholders: Stakeholder[] = [
  { icon: Vote, label: "Candidates", examples: "Local, state & federal" },
  { icon: Megaphone, label: "Operatives", examples: "Managers & consultants" },
  { icon: FlaskConical, label: "Researchers", examples: "AI & political science" },
  { icon: Scale, label: "Ethicists", examples: "Tech ethics & policy" },
  { icon: Landmark, label: "Policy Experts", examples: "Election & AI law" },
  { icon: GraduationCap, label: "Educators", examples: "Civic & digital literacy" },
  { icon: Users, label: "Voters", examples: "Citizens & community" },
  { icon: Newspaper, label: "Journalists", examples: "Political & tech media" },
  { icon: Handshake, label: "Party Leaders", examples: "State & local committees" },
  { icon: HeartHandshake, label: "Advocates", examples: "Nonprofits & civic orgs" },
];

const outcomes = [
  {
    title: "Collaborative Research",
    description:
      "We partner with researchers, ethicists, and policy experts to produce analysis that's rigorous and accessible. Published on the Substack and open to community discussion.",
  },
  {
    title: "User Feedback Loops",
    description:
      "Surveys, roundtables, and direct conversations with the campaigns using our tools. Your experience shapes every feature, every policy, and every product decision.",
  },
  {
    title: "Transparent Decisions",
    description:
      "When we face a hard call, we explain our reasoning publicly. We think it's the only way to earn the trust that working in democracy requires.",
  },
];

// Equal groups on a gentle zig-zag. Two multi-partisan ribbons weave through
// them in opposite phase, so the strands cross between the groups — everyone
// woven together, no center absorbing from anyone.
const VW = 900;
const VH = 360;
const Y_HI = 132;
const Y_LO = 248;
const ACCENTS = ["#FF3366", "#FF6B8F", "#8E5CF7", "#7AB8FF", "#4D9FFF"];

const nodes = stakeholders.map((s, i) => ({
  ...s,
  x: 64 + (i * (VW - 128)) / (stakeholders.length - 1),
  y: i % 2 === 0 ? Y_HI : Y_LO,
  accent: ACCENTS[i % ACCENTS.length],
  labelAbove: i % 2 === 0,
}));

function weave(pointHi: boolean): string {
  const pts = stakeholders.map((_, i) => ({
    x: 64 + (i * (VW - 128)) / (stakeholders.length - 1),
    y: (i % 2 === 0) === pointHi ? Y_HI : Y_LO,
  }));
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const mx = (p0.x + p1.x) / 2;
    d += ` C ${mx} ${p0.y} ${mx} ${p1.y} ${p1.x} ${p1.y}`;
  }
  return d;
}

// Small branded, subtly-animated emblems for the three outcome cards. Motion
// uses the reduced-motion-gated ga-* utilities, so they fall still when a viewer
// prefers reduced motion.
function OutcomeGraphic({ i }: { i: number }) {
  if (i === 0) {
    // Collaborative Research — connected nodes converging
    return (
      <svg viewBox="0 0 72 52" className="h-12 w-auto" aria-hidden="true">
        <line x1="18" y1="38" x2="36" y2="14" stroke="#8E5CF7" strokeWidth="2" opacity="0.35" />
        <line x1="54" y1="38" x2="36" y2="14" stroke="#8E5CF7" strokeWidth="2" opacity="0.35" />
        <line x1="18" y1="38" x2="54" y2="38" stroke="#8E5CF7" strokeWidth="2" opacity="0.35" />
        <circle cx="36" cy="14" r="7" fill="#FF3366" className="ga-glow" />
        <circle cx="18" cy="38" r="6" fill="#8E5CF7" className="ga-ping" />
        <circle cx="54" cy="38" r="6" fill="#4D9FFF" className="ga-ping" style={{ animationDelay: "0.7s" }} />
      </svg>
    );
  }
  if (i === 1) {
    // User Feedback Loops — a loop with a signal traveling it
    return (
      <svg viewBox="0 0 72 52" className="h-12 w-auto" aria-hidden="true">
        <path d="M40 12 a16 16 0 1 0 14 9" fill="none" stroke="#8E5CF7" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 12 l-9 -1 l4 8 z" fill="#8E5CF7" />
        <circle cx="20" cy="26" r="4" fill="#4D9FFF" className="ga-ping" />
        <circle cx="52" cy="34" r="3.5" fill="#FF6B8F" className="ga-ping" style={{ animationDelay: "0.6s" }} />
      </svg>
    );
  }
  // Transparent Decisions — an open panel, a check, rays of light
  return (
    <svg viewBox="0 0 72 52" className="h-12 w-auto" aria-hidden="true">
      <line x1="36" y1="8" x2="36" y2="2" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" className="ga-glow" />
      <line x1="52" y1="12" x2="56" y2="8" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" className="ga-glow" />
      <line x1="20" y1="12" x2="16" y2="8" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" className="ga-glow" />
      <rect x="22" y="14" width="28" height="24" rx="3" fill="none" stroke="#4D9FFF" strokeWidth="2.5" />
      <path d="M29 26 l5 5 10 -11" fill="none" stroke="#00D084" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ga-glow" />
    </svg>
  );
}

export function BuildingInPublic() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <SectionLabel text="Our Approach" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] text-regal-navy tracking-[-1px] mt-3 mb-4">
              Woven from every corner of the conversation.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-[700px] mx-auto">
              CampaignAI isn&apos;t built in a lab and handed down. We shape it in the
              open, alongside experts and everyday folks &mdash; each an equal thread
              in the same fabric.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Visual: interweaving ribbons among equal groups ── */}
        <ScrollReveal>
          <div className="relative my-14 md:my-16">
            {/* Desktop / tablet: woven ribbon */}
            <div className="hidden md:block relative" style={{ paddingBottom: "40%" }}>
              <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${VW} ${VH}`} preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="bip-ribbon" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF3366" />
                    <stop offset="50%" stopColor="#8E5CF7" />
                    <stop offset="100%" stopColor="#4D9FFF" />
                  </linearGradient>
                </defs>

                {/* two strands, opposite phase — they cross between the groups */}
                <g className="ribbon-sway">
                  <path d={weave(true)} fill="none" stroke="url(#bip-ribbon)" strokeWidth="9" strokeLinecap="round" opacity="0.9" />
                  <path d={weave(false)} fill="none" stroke="url(#bip-ribbon)" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
                </g>

                {/* equal group nodes on the weave */}
                {nodes.map((n) => (
                  <g key={n.label}>
                    <circle cx={n.x} cy={n.y} r="24" fill="#FFFFFF" stroke={n.accent} strokeWidth="2.5" />
                    <circle cx={n.x} cy={n.y} r="30" fill="none" stroke={n.accent} strokeOpacity="0.25" strokeWidth="1.5" />
                    {(() => {
                      const ly = n.labelAbove ? n.y - 40 : n.y + 44;
                      const ey = n.labelAbove ? n.y - 52 : n.y + 56;
                      return (
                        <>
                          <text x={n.x} y={ly} textAnchor="middle" className="font-heading" fontWeight="700" fontSize="13" fill="#0D1B3E">{n.label}</text>
                          <text x={n.x} y={ey} textAnchor="middle" fontSize="9.5" fill="#666666">{n.examples}</text>
                        </>
                      );
                    })()}
                  </g>
                ))}
              </svg>

              {/* lucide icons over node centers */}
              {nodes.map((n) => {
                const Icon = n.icon;
                return (
                  <div key={n.label} className="absolute z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ left: `${(n.x / VW) * 100}%`, top: `${(n.y / VH) * 100}%` }}>
                    <Icon className="w-5 h-5" color={n.accent} strokeWidth={1.9} />
                  </div>
                );
              })}

              <AISparkle size={14} color="#8E5CF7" glow className="sparkle-twinkle absolute left-[46%] top-[6%]" style={{ ["--dur"]: "3s" } as CSSProperties} />
              <AISparkle size={11} color="#FF3366" glow className="sparkle-twinkle absolute right-[8%] top-[10%]" style={{ ["--dur"]: "2.7s", animationDelay: "500ms" } as CSSProperties} />
            </div>

            {/* Mobile: equal chips over a woven ribbon accent (no hub) */}
            <div className="md:hidden">
              <svg viewBox="0 0 320 24" className="mx-auto mb-6 w-full max-w-[320px]" aria-hidden="true">
                <path d="M4 12 C 44 2, 84 22, 124 12 S 204 2, 244 12 S 316 22, 316 12" fill="none" stroke="url(#bip-ribbon-m)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="bip-ribbon-m" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF3366" />
                    <stop offset="50%" stopColor="#8E5CF7" />
                    <stop offset="100%" stopColor="#4D9FFF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stakeholders.map(({ icon: Icon, label, examples }, i) => (
                  <div key={label} className="flex items-center gap-3 bg-dawn-frost border border-gray-100 rounded-xl p-3">
                    <div className="shrink-0 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <Icon className="w-4 h-4" color={ACCENTS[i % ACCENTS.length]} strokeWidth={1.9} />
                    </div>
                    <div>
                      <span className="text-regal-navy text-xs font-bold block leading-tight">{label}</span>
                      <span className="text-slate text-[10px] leading-tight">{examples}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Body copy ── */}
        <ScrollReveal>
          <div className="text-granite text-lg leading-[1.7] max-w-[760px] mx-auto mb-14 text-center">
            <p>
              When we face an ethical question, we write about it. When we design
              a feature, we ask for input. When a state passes a new AI law, we
              break it down so every campaign understands what it means for them.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Outcome cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map(({ title, description }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
                <div className="mb-4"><OutcomeGraphic i={i} /></div>
                <h3 className="font-heading font-bold text-lg text-regal-navy mb-3">{title}</h3>
                <p className="text-slate text-sm leading-relaxed">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
