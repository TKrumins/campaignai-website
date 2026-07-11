"use client";

import { useState, type CSSProperties } from "react";
import { Megaphone, FileText, HeartHandshake, Vote, Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { Button } from "@/components/ui/Button";
import { CALENDLY_CANDIDATE } from "@/lib/constants";

// Candidate hero-journey centerpiece: the visitor picks their first move and
// watches their whole campaign arc take shape — one video becomes a library.
// Tailored to candidates ($599 this cycle, human editor, nothing upfront) so a
// hesitant first-timer finds reassurance and an eager one feels the momentum.

const CHAPTERS = [
  { id: "announce", label: "Introduce yourself", short: "Announcement", icon: Megaphone, accent: "#FF3366", line: "Voters meet you first — so every video after this has a face they trust." },
  { id: "issue", label: "Explain an issue", short: "Issue explainer", icon: FileText, accent: "#8E5CF7", line: "Make your position clear and shareable, in your own words." },
  { id: "raise", label: "Rally your donors", short: "Fundraising appeal", icon: HeartHandshake, accent: "#6A81FB", line: "Make the case for support right when it counts." },
  { id: "gotv", label: "Get out the vote", short: "GOTV push", icon: Vote, accent: "#4D9FFF", line: "Turn the belief you've built into turnout in the final stretch." },
];

export function CandidatePlanner() {
  const [first, setFirst] = useState(CHAPTERS[0].id);
  const startIdx = CHAPTERS.findIndex((c) => c.id === first);
  const active = CHAPTERS[startIdx] ?? CHAPTERS[0];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <SectionLabel text="Your campaign, one video at a time" color="crimson" />
          <h2 className="mt-3 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
            Start with one video. Build a whole campaign.
          </h2>
          <p className="text-lg leading-relaxed text-granite">
            Pick where you want to start. Watch how it grows into everything a race needs.
          </p>
        </div>

        {/* Pick your first move */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CHAPTERS.map((c) => {
            const on = c.id === first;
            const CIcon = c.icon;
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

        {/* The campaign arc — your first pick leads, the rest follow */}
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {CHAPTERS.map((c, i) => {
            const isStart = c.id === first;
            const order = ((i - startIdx + CHAPTERS.length) % CHAPTERS.length) + 1;
            const CIcon = c.icon;
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
                    {isStart ? "Start here" : `Then · ${order}`}
                  </span>
                </div>
                <p className={`font-heading text-sm font-bold ${isStart ? "text-beacon-white" : "text-regal-navy"}`}>{c.short}</p>
                {isStart && <p className="mt-1 text-xs leading-snug text-beacon-white/70">{active.line}</p>}
              </div>
            );
          })}
        </div>

        {/* The reassurance + booking card */}
        <div className="relative overflow-hidden rounded-3xl bg-regal-navy p-6 text-beacon-white shadow-xl sm:p-8">
          <AISparkle size={14} color="#7AB8FF" glow className="sparkle-twinkle absolute right-5 top-5" style={{ ["--dur"]: "2.8s" } as CSSProperties} />
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div>
              <p className="font-heading text-2xl font-extrabold text-beacon-white">
                <span className="patriot-gradient-text-bright">$599</span> per video, this cycle.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  "A real human editor finishes every one — no AI slop.",
                  "Nothing charged upfront. You approve the cost first.",
                  "Delivered 48 hours after you submit.",
                  "You own it outright — no watermark, no fees.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-beacon-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-freedom-blue" strokeWidth={3} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Button variant="patriot" href={CALENDLY_CANDIDATE} external className="w-full justify-center px-7 py-3 md:w-auto">
                Start my first video
              </Button>
              <a href="#waitlist" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-freedom-blue hover:underline">
                Or plan it yourself soon <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
