"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  CALENDLY_PURCHASE,
  CTA_PRIMARY,
  CTA_MICROCOPY,
  DELIVERY_LINE,
  WAITLIST_SHORT,
} from "@/lib/constants";

/**
 * The Story Arc Builder (4.4). ABUNDANCE framing only: the case is multiple
 * linked videos telling one broader story. Inputs are race + goals; output is a
 * suggested arc mapped to the four established video types and how the pieces
 * interlock. Opportunity math is computed from constants only and renders as
 * what the arc unlocks. Client-side only, nothing stored. No savings or
 * scarcity language anywhere.
 */

// Per-video starting prices, from the locked pricing constants.
const CANDIDATE_PER_VIDEO = 599; // 2026 midterm cycle candidate rate
const STANDARD_PER_VIDEO = 1999;

const RACES = [
  { key: "local", label: "Local candidate", candidate: true },
  { key: "state-leg", label: "State legislative", candidate: true },
  { key: "statewide", label: "Statewide or federal", candidate: true },
  { key: "ballot", label: "Ballot initiative", candidate: false },
  { key: "advocacy", label: "Advocacy or nonprofit", candidate: false },
];

const GOALS = [
  { key: "introduce", label: "Introduce myself" },
  { key: "explain", label: "Explain my positions" },
  { key: "trust", label: "Build trust" },
  { key: "turnout", label: "Turn out voters" },
];

// The four established video types, in the arc order the product teaches.
const ARC = [
  {
    type: "Announcement",
    role: "Introduce yourself",
    sets: "Voters meet you first, so every chapter after this has a face to trust.",
    goal: "introduce",
  },
  {
    type: "Issue explainers",
    role: "Show the plan",
    sets: "Now that they know you, each issue becomes its own short chapter.",
    goal: "explain",
  },
  {
    type: "Testimonial",
    role: "Let others vouch",
    sets: "Real voices confirm what your explainers promised. Trust compounds.",
    goal: "trust",
  },
  {
    type: "GOTV",
    role: "Turn belief into turnout",
    sets: "The arc closes by asking the people you've won to actually vote.",
    goal: "turnout",
  },
];

export function StoryArcBuilder() {
  const [race, setRace] = useState(RACES[0].key);
  const [goals, setGoals] = useState<string[]>(["introduce", "turnout"]);

  const raceObj = RACES.find((r) => r.key === race) ?? RACES[0];
  const perVideo = raceObj.candidate ? CANDIDATE_PER_VIDEO : STANDARD_PER_VIDEO;
  const chapters = ARC.length;
  const cuts = chapters * 3; // 15-, 30-, 60-second versions per chapter

  function toggleGoal(k: string) {
    setGoals((g) => (g.includes(k) ? g.filter((x) => x !== k) : [...g, k]));
  }

  return (
    <section className="py-14 md:py-20 bg-dawn-frost">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        {/* Inputs */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 mb-8">
          <div className="mb-6">
            <label className="block text-slate text-xs font-bold uppercase tracking-wider mb-3">
              Your race
            </label>
            <div className="flex flex-wrap gap-2">
              {RACES.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setRace(r.key)}
                  aria-pressed={race === r.key}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                    race === r.key
                      ? "border-freedom-blue bg-freedom-blue text-white"
                      : "border-gray-300 text-granite hover:border-freedom-blue"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-slate text-xs font-bold uppercase tracking-wider mb-3">
              Your goals
            </label>
            <div className="flex flex-wrap gap-2">
              {GOALS.map((g) => {
                const on = goals.includes(g.key);
                return (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => toggleGoal(g.key)}
                    aria-pressed={on}
                    className={`rounded-full border-2 px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-verdant ${
                      on
                        ? "border-verdant bg-verdant/10 text-regal-navy"
                        : "border-gray-300 text-granite hover:border-verdant"
                    }`}
                  >
                    <span aria-hidden="true" className={on ? "text-verdant mr-1.5" : "text-slate/40 mr-1.5"}>
                      &#x2713;
                    </span>
                    {g.label}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-slate text-xs mt-5">Nothing you enter here leaves your browser.</p>
        </div>

        {/* The arc */}
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy text-center mb-2">
          Your story arc
        </h2>
        <p className="text-granite text-sm text-center mb-8 max-w-[560px] mx-auto">
          Four chapters, one story. Each one sets up the next.
        </p>

        <ol className="relative space-y-4 mb-10">
          {ARC.map((chapter, i) => {
            const emphasized = goals.includes(chapter.goal);
            return (
              <li
                key={chapter.type}
                className={`rounded-2xl border p-5 md:p-6 flex gap-4 items-start ${
                  emphasized ? "border-verdant/50 bg-white" : "border-gray-200 bg-white/70"
                }`}
              >
                <span
                  className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-sm ${
                    emphasized ? "bg-verdant text-white" : "bg-regal-navy/10 text-regal-navy"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="font-heading font-bold text-lg text-regal-navy">{chapter.type}</h3>
                    <span className="text-slate text-xs uppercase tracking-wider">{chapter.role}</span>
                    {emphasized && (
                      <span className="text-verdant text-[11px] font-bold uppercase tracking-wider">
                        On your list
                      </span>
                    )}
                  </div>
                  <p className="text-granite text-sm leading-relaxed mt-1">
                    {i < ARC.length - 1 ? (
                      <>
                        <span className="text-freedom-blue font-semibold">Sets up chapter {i + 2}: </span>
                        {chapter.sets}
                      </>
                    ) : (
                      chapter.sets
                    )}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Opportunity math, computed from constants only */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
          {[
            { big: `${chapters}`, small: "chapters, one story" },
            { big: `${cuts}`, small: "cuts: 15s, 30s, 60s each" },
            { big: "Every", small: "format: social, email, web, ads" },
            { big: "Yours", small: "to own outright, no watermark" },
          ].map((s) => (
            <div key={s.small} className="rounded-2xl bg-white border border-gray-200 p-5 text-center">
              <p className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy">{s.big}</p>
              <p className="text-slate text-xs mt-1 leading-snug">{s.small}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-granite text-sm mb-10">
          Build the full arc starting at{" "}
          <span className="font-heading font-bold text-regal-navy">
            ${perVideo.toLocaleString()}
          </span>{" "}
          per chapter{raceObj.candidate ? " for candidate campaigns this cycle" : ""}. Add chapters
          whenever the story calls for another.
        </p>

        {/* The one purchase CTA endcap (4.4) */}
        <div className="rounded-3xl bg-regal-navy p-8 md:p-10 text-center">
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-beacon-white mb-6">
            Start with chapter one.
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-6">
            <div className="text-center">
              <Button variant="crimson" href={CALENDLY_PURCHASE} external className="px-8 py-3">
                {CTA_PRIMARY}
              </Button>
              <p className="text-beacon-white/60 text-sm mt-2">{CTA_MICROCOPY}</p>
            </div>
            <div className="text-center">
              <Button variant="blue-outline" href="/get-started#waitlist" className="!text-beacon-white !border-beacon-white/60 hover:!bg-beacon-white hover:!text-regal-navy">
                Join the waitlist
              </Button>
              <p className="text-beacon-white/50 text-xs mt-2 max-w-[220px]">{WAITLIST_SHORT}</p>
            </div>
          </div>
          <p className="text-beacon-white/70 text-sm max-w-[560px] mx-auto">{DELIVERY_LINE}</p>
        </div>
      </div>
    </section>
  );
}
