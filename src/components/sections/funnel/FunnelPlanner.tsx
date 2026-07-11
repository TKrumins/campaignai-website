"use client";

import { useState, type CSSProperties } from "react";
import { Check, ArrowRight, Megaphone, FileText, HeartHandshake, Vote, Users, Landmark, type LucideIcon } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { Button } from "@/components/ui/Button";

// Icon keys keep chapter config serializable, so Server Component pages can pass
// it straight to this Client Component.
const ICONS: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  file: FileText,
  heart: HeartHandshake,
  vote: Vote,
  users: Users,
  landmark: Landmark,
};

// The reusable hero-journey centerpiece for every /for/* page. The visitor picks
// a starting point and watches their set of videos take shape, with the group's
// price + reassurance + a tagged booking CTA built in. Config per group keeps it
// a template, not five rewrites.

export interface PlannerChapter {
  id: string;
  label: string; // the pick-a-first-move chip
  short: string; // the card title
  icon: string; // key into ICONS
  accent: string;
  line: string; // shown when this chapter is the selected start
}

interface FunnelPlannerProps {
  label: string;
  labelColor?: "blue" | "crimson" | "verdant" | "gold" | "horizon";
  heading: string;
  sub: string;
  chapters: PlannerChapter[];
  followNote?: string; // "Then" (arc) or "Plus" (roster)
  price: string;
  priceNote: string;
  priceIsNumber?: boolean;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "patriot" | "verdant-outline";
  secondary?: { label: string; href: string } | null;
}

export function FunnelPlanner({
  label,
  labelColor = "crimson",
  heading,
  sub,
  chapters,
  followNote = "Then",
  price,
  priceNote,
  priceIsNumber = true,
  bullets,
  ctaLabel,
  ctaHref,
  ctaVariant = "patriot",
  secondary = null,
}: FunnelPlannerProps) {
  const [first, setFirst] = useState(chapters[0].id);
  const startIdx = chapters.findIndex((c) => c.id === first);
  const active = chapters[startIdx] ?? chapters[0];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <SectionLabel text={label} color={labelColor} />
          <h2 className="mt-3 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
            {heading}
          </h2>
          <p className="text-lg leading-relaxed text-granite">{sub}</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {chapters.map((c) => {
            const on = c.id === first;
            const CIcon = ICONS[c.icon];
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setFirst(c.id)}
                aria-pressed={on}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                  on ? "border-transparent bg-regal-navy text-white shadow-sm" : "border-gray-300 text-granite hover:border-regal-navy/50"
                }`}
              >
                <CIcon className="h-4 w-4" style={{ color: on ? c.accent : undefined }} />
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {chapters.map((c, i) => {
            const isStart = c.id === first;
            const order = ((i - startIdx + chapters.length) % chapters.length) + 1;
            const CIcon = ICONS[c.icon];
            return (
              <div
                key={c.id}
                className={`relative flex flex-col rounded-2xl border p-4 transition-all ${
                  isStart ? "border-transparent bg-regal-navy text-beacon-white shadow-lg" : "border-gray-200 bg-dawn-frost/50"
                }`}
                style={isStart ? { boxShadow: `0 10px 26px ${c.accent}40` } : undefined}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: isStart ? c.accent : `${c.accent}18` }}>
                    <CIcon className="h-4 w-4" style={{ color: isStart ? "#fff" : c.accent }} />
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isStart ? "text-beacon-white/70" : "text-slate"}`}>
                    {isStart ? "Start here" : `${followNote} · ${order}`}
                  </span>
                </div>
                <p className={`font-heading text-sm font-bold ${isStart ? "text-beacon-white" : "text-regal-navy"}`}>{c.short}</p>
                {isStart && <p className="mt-1 text-xs leading-snug text-beacon-white/70">{active.line}</p>}
              </div>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-regal-navy p-6 text-beacon-white shadow-xl sm:p-8">
          <AISparkle size={14} color="#7AB8FF" glow className="sparkle-twinkle absolute right-5 top-5" style={{ ["--dur"]: "2.8s" } as CSSProperties} />
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div>
              <p className="font-heading text-2xl font-extrabold text-beacon-white">
                {priceIsNumber ? <span className="patriot-gradient-text-bright">{price}</span> : <span className="text-verdant">{price}</span>}{" "}
                <span className="text-lg font-bold text-beacon-white/80">{priceNote}</span>
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {bullets.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-beacon-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-freedom-blue" strokeWidth={3} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Button variant={ctaVariant} href={ctaHref} external className={`w-full justify-center px-7 py-3 md:w-auto ${ctaVariant === "verdant-outline" ? "!text-beacon-white !border-beacon-white/50 hover:!bg-beacon-white hover:!text-regal-navy" : ""}`}>
                {ctaLabel}
              </Button>
              {secondary && (
                <a href={secondary.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-freedom-blue hover:underline">
                  {secondary.label} <ArrowRight className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
