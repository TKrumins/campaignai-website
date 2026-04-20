"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
  ArrowRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Stakeholder {
  icon: LucideIcon;
  label: string;
  examples: string;
}

const stakeholders: Stakeholder[] = [
  { icon: Vote, label: "Candidates", examples: "Local, state & federal campaigns" },
  { icon: Megaphone, label: "Operatives", examples: "Campaign managers & consultants" },
  { icon: FlaskConical, label: "Researchers", examples: "AI, political science & media studies" },
  { icon: Scale, label: "Ethicists", examples: "Technology ethics & policy scholars" },
  { icon: Landmark, label: "Policy Experts", examples: "Election law & AI regulation" },
  { icon: GraduationCap, label: "Educators", examples: "Civic tech & digital literacy" },
  { icon: Users, label: "Voters", examples: "Everyday citizens & community leaders" },
  { icon: Newspaper, label: "Journalists", examples: "Political & technology media" },
  { icon: Handshake, label: "Party Leaders", examples: "State & local party committees" },
  { icon: HeartHandshake, label: "Advocates", examples: "Nonprofits & civic organizations" },
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

/* Compute ellipse positions for the SVG viewBox (800x520, center 400,260) */
const cx = 400;
const cy = 260;
const rx = 340;
const ry = 210;

function nodePos(i: number, total: number): [number, number] {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
  return [cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)];
}

const nodePositions = stakeholders.map((_, i) => nodePos(i, stakeholders.length));

export function BuildingInPublic() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <SectionLabel text="Our Approach" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] text-regal-navy tracking-[-1px] mt-3 mb-4">
              Join our public conversation around effective and ethical AI.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-[700px] mx-auto">
              We shape CampaignAI by speaking to experts and everyday folks.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Visual: Hub-and-spoke ecosystem ── */}
        <ScrollReveal>
          <div className="relative my-14 md:my-20">
            {/* ── Desktop: radial layout ── */}
            <div className="hidden lg:block relative" style={{ paddingBottom: "65%" }}>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 520"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Hub gradient ring */}
                  <linearGradient id="bip-hub-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF3366" />
                    <stop offset="40%" stopColor="#FF3366" />
                    <stop offset="50%" stopColor="#E8F4F8" />
                    <stop offset="60%" stopColor="#4D9FFF" />
                    <stop offset="100%" stopColor="#0D1B3E" />
                  </linearGradient>
                  {/* Per-line gradients so each line shades from its node color into navy near center */}
                  {nodePositions.map(([nx, ny], i) => {
                    const color = i % 2 === 0 ? "#FF3366" : "#4D9FFF";
                    return (
                      <linearGradient key={`lg-${i}`} id={`bip-lg-${i}`} x1={nx} y1={ny} x2={cx} y2={cy} gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor={color} stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#0D1B3E" stopOpacity="0.25" />
                      </linearGradient>
                    );
                  })}
                  {/* Pulse dot glow filter */}
                  <filter id="bip-glow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Connection lines — solid, more visible */}
                {nodePositions.map(([nx, ny], i) => (
                  <line
                    key={`line-${i}`}
                    x1={nx} y1={ny} x2={cx} y2={cy}
                    stroke={`url(#bip-lg-${i})`}
                    strokeWidth="2"
                  />
                ))}

                {/* Animated pulse dots traveling from each node to center */}
                {nodePositions.map(([nx, ny], i) => {
                  const color = i % 2 === 0 ? "#FF3366" : "#4D9FFF";
                  const duration = 2.5 + (i % 3) * 0.4; // stagger speeds
                  const delay = i * 0.25;
                  return (
                    <circle key={`pulse-${i}`} r="4" fill={color} filter="url(#bip-glow)" opacity="0.9">
                      <animateMotion
                        dur={`${duration}s`}
                        repeatCount="indefinite"
                        begin={`${delay}s`}
                        path={`M${nx},${ny} L${cx},${cy}`}
                      />
                      <animate attributeName="opacity" values="0;0.9;0.9;0" dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} />
                      <animate attributeName="r" values="3;5;3" dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} />
                    </circle>
                  );
                })}

                {/* Center hub */}
                <circle cx={cx} cy={cy} r="44" fill="url(#bip-hub-ring)" />
                <circle cx={cx} cy={cy} r="38" fill="white" />

                {/* Stakeholder nodes */}
                {nodePositions.map(([nx, ny], i) => {
                  const s = stakeholders[i];
                  const color = i % 2 === 0 ? "#FF3366" : "#4D9FFF";
                  return (
                    <g key={s.label}>
                      <circle cx={nx} cy={ny} r="26" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.35" strokeWidth="1.5" />
                      <circle cx={nx} cy={ny} r="18" fill="white" stroke={color} strokeOpacity="0.2" strokeWidth="1" />
                      <text x={nx} y={ny + 38} textAnchor="middle" className="font-heading" fontWeight="700" fontSize="11" fill="#0D1B3E">
                        {s.label}
                      </text>
                      <text x={nx} y={ny + 50} textAnchor="middle" className="font-body" fontSize="8" fill="#666666">
                        {s.examples}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Lucide icons positioned over SVG node centers */}
              {nodePositions.map(([nx, ny], i) => {
                const Icon = stakeholders[i].icon;
                const leftPct = (nx / 800) * 100;
                const topPct = (ny / 520) * 100;
                return (
                  <div
                    key={stakeholders[i].label}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                  >
                    <Icon
                      className={`w-5 h-5 ${i % 2 === 0 ? "text-liberty-crimson" : "text-freedom-blue"}`}
                      strokeWidth={1.75}
                    />
                  </div>
                );
              })}
            </div>

            {/* ── Mobile/tablet: flowing grid with center hub ── */}
            <div className="lg:hidden">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full patriot-gradient flex items-center justify-center shadow-lg shadow-freedom-blue/15">
                  <div className="w-16 h-16 rounded-full bg-white" />
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-2 text-slate">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Shaped by
                  </span>
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stakeholders.map(({ icon: Icon, label, examples }, i) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-dawn-frost border border-gray-100 rounded-xl p-3"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <Icon className={`w-4 h-4 ${i % 2 === 0 ? "text-liberty-crimson" : "text-freedom-blue"}`} strokeWidth={1.75} />
                    </div>
                    <div>
                      <span className="text-regal-navy text-xs font-bold block leading-tight">
                        {label}
                      </span>
                      <span className="text-slate text-[10px] leading-tight">
                        {examples}
                      </span>
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
              <div className="rounded-2xl overflow-hidden h-full">
                <div className="h-1 patriot-gradient" />
                <div className="bg-dawn-frost p-7 h-full">
                  <h3 className="font-heading font-bold text-lg text-regal-navy mb-3">
                    {title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
