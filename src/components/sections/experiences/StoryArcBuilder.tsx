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
 * The Story Arc Builder (4.4), v2. ABUNDANCE framing only. The case is multiple
 * linked videos telling one broader story. Inputs are race + goals; you can add
 * optional chapters to extend the library. Output is an assembled arc mapped to
 * the four established video types plus optional add-ons, with storyboard
 * thumbnails and how the pieces interlock. Opportunity math is computed from
 * constants only and renders as what the arc unlocks. Client-side only, nothing
 * stored. No savings or scarcity language anywhere.
 */

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

type Thumb = "announce" | "explain" | "testimonial" | "gotv" | "rapid" | "close";

interface Chapter {
  type: string;
  role: string;
  sets: string;
  goal?: string;
  thumb: Thumb;
  optional?: boolean;
  addLabel?: string;
}

// The four established types, in arc order, plus optional add-ons.
const BASE: Chapter[] = [
  { type: "Announcement", role: "Introduce yourself", sets: "Voters meet you first, so every chapter after this has a face to trust.", goal: "introduce", thumb: "announce" },
  { type: "Issue explainers", role: "Show the plan", sets: "Now that they know you, each issue becomes its own short chapter.", goal: "explain", thumb: "explain" },
  { type: "Testimonial", role: "Let others vouch", sets: "Real voices confirm what your explainers promised. Trust compounds.", goal: "trust", thumb: "testimonial" },
  { type: "GOTV", role: "Turn belief into turnout", sets: "The arc closes by asking the people you've won to actually vote.", goal: "turnout", thumb: "gotv" },
];

const ADDONS: Chapter[] = [
  { type: "Rapid response", role: "Answer the moment", sets: "When news breaks, you already have a voice ready to use it.", thumb: "rapid", optional: true, addLabel: "Add rapid response" },
  { type: "Closing argument", role: "Make the final case", sets: "The last word before the vote, built to land.", thumb: "close", optional: true, addLabel: "Add a closing argument" },
];

function Storyboard({ thumb }: { thumb: Thumb }) {
  const frame = (children: React.ReactNode) => (
    <svg viewBox="0 0 96 60" className="w-full h-auto rounded-md" aria-hidden="true">
      <rect width="96" height="60" rx="6" fill="#0D1B3E" />
      {children}
    </svg>
  );
  switch (thumb) {
    case "announce":
      return frame(<>
        <circle cx="48" cy="26" r="11" fill="#FFB800" opacity="0.9" />
        <path d="M34 48a14 14 0 0 1 28 0z" fill="#E8F4F8" opacity="0.85" />
        <rect x="20" y="52" width="56" height="4" rx="2" fill="#FF3366" />
      </>);
    case "explain":
      return frame(<>
        <rect x="18" y="16" width="40" height="6" rx="3" fill="#8E5CF7" />
        <rect x="18" y="28" width="30" height="5" rx="2.5" fill="#8E5CF7" opacity="0.6" />
        <rect x="18" y="38" width="36" height="5" rx="2.5" fill="#8E5CF7" opacity="0.4" />
        <circle cx="72" cy="30" r="10" fill="none" stroke="#4D9FFF" strokeWidth="3" />
      </>);
    case "testimonial":
      return frame(<>
        <circle cx="34" cy="26" r="9" fill="#E8F4F8" opacity="0.85" />
        <path d="M24 46a10 10 0 0 1 20 0z" fill="#E8F4F8" opacity="0.6" />
        <path d="M56 20 q14 0 14 12 q0 8 -8 10 l2 -8 q-8 -2 -8 -14z" fill="#00D084" opacity="0.85" />
      </>);
    case "gotv":
      return frame(<>
        <path d="M48 14 l10 14 -7 0 0 18 -6 0 0 -18 -7 0z" fill="#4D9FFF" />
        <rect x="20" y="50" width="56" height="4" rx="2" fill="#00D084" />
      </>);
    case "rapid":
      return frame(<>
        <path d="M46 14 l-10 22 8 0 -4 12 16 -22 -8 0 6 -12z" fill="#FF9500" />
      </>);
    case "close":
      return frame(<>
        <rect x="26" y="18" width="44" height="26" rx="3" fill="none" stroke="#FF3366" strokeWidth="2.5" />
        <path d="M34 31 l6 6 12 -12" stroke="#FF3366" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </>);
    default:
      return null;
  }
}

export function StoryArcBuilder() {
  const [race, setRace] = useState(RACES[0].key);
  const [goals, setGoals] = useState<string[]>(["introduce", "turnout"]);
  const [added, setAdded] = useState<string[]>([]);

  const raceObj = RACES.find((r) => r.key === race) ?? RACES[0];
  const perVideo = raceObj.candidate ? CANDIDATE_PER_VIDEO : STANDARD_PER_VIDEO;

  const arc: Chapter[] = [...BASE, ...ADDONS.filter((a) => added.includes(a.type))];
  const chapters = arc.length;
  const cuts = chapters * 3;

  function toggleGoal(k: string) {
    setGoals((g) => (g.includes(k) ? g.filter((x) => x !== k) : [...g, k]));
  }
  function toggleAdd(t: string) {
    setAdded((a) => (a.includes(t) ? a.filter((x) => x !== t) : [...a, t]));
  }

  return (
    <section className="py-14 md:py-20 bg-dawn-frost">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Socratic frame */}
        <p className="text-center text-regal-navy font-heading font-bold text-lg md:text-xl max-w-[620px] mx-auto mb-8">
          What is the one thing voters must know first? Start there, then build outward.
        </p>

        {/* Inputs */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 mb-8">
          <div className="mb-6">
            <label className="block text-slate text-xs font-bold uppercase tracking-wider mb-3">Your race</label>
            <div className="flex flex-wrap gap-2">
              {RACES.map((r) => (
                <button key={r.key} type="button" onClick={() => setRace(r.key)} aria-pressed={race === r.key}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${race === r.key ? "border-freedom-blue bg-freedom-blue text-white" : "border-gray-300 text-granite hover:border-freedom-blue"}`}>
                  {r.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-slate text-xs font-bold uppercase tracking-wider mb-3">Your goals</label>
            <div className="flex flex-wrap gap-2">
              {GOALS.map((g) => {
                const on = goals.includes(g.key);
                return (
                  <button key={g.key} type="button" onClick={() => toggleGoal(g.key)} aria-pressed={on}
                    className={`rounded-full border-2 px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-verdant ${on ? "border-verdant bg-verdant/10 text-regal-navy" : "border-gray-300 text-granite hover:border-verdant"}`}>
                    <span aria-hidden="true" className={on ? "text-verdant mr-1.5" : "text-slate/40 mr-1.5"}>&#x2713;</span>
                    {g.label}
                  </button>
                );
              })}
            </div>
          </div>
          <p className="text-slate text-xs mt-5">Nothing you enter here leaves your browser.</p>
        </div>

        {/* The assembled arc */}
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy text-center mb-2">
          Your story arc
        </h2>
        <p className="text-granite text-sm text-center mb-8">Each chapter sets up the next. Together they tell one story.</p>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {arc.map((chapter, i) => {
            const emphasized = chapter.goal ? goals.includes(chapter.goal) : true;
            return (
              <div key={chapter.type}
                className={`rounded-2xl border p-4 flex gap-4 items-start ${emphasized ? "border-verdant/50 bg-white" : "border-gray-200 bg-white/70"}`}>
                <div className="w-24 shrink-0">
                  <Storyboard thumb={chapter.thumb} />
                  <p className="text-center text-[10px] font-bold text-slate uppercase tracking-wider mt-1">Ch. {i + 1}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="font-heading font-bold text-base text-regal-navy">{chapter.type}</h3>
                    <span className="text-slate text-[11px] uppercase tracking-wider">{chapter.role}</span>
                  </div>
                  <p className="text-granite text-[13px] leading-relaxed mt-1">
                    {i < arc.length - 1 ? (
                      <><span className="text-freedom-blue font-semibold">Sets up Ch. {i + 2}: </span>{chapter.sets}</>
                    ) : chapter.sets}
                  </p>
                  {chapter.optional && (
                    <button type="button" onClick={() => toggleAdd(chapter.type)}
                      className="mt-2 text-liberty-crimson text-xs font-semibold hover:underline">
                      Remove chapter
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add optional chapters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ADDONS.filter((a) => !added.includes(a.type)).map((a) => (
            <button key={a.type} type="button" onClick={() => toggleAdd(a.type)}
              className="rounded-full border-2 border-dashed border-freedom-blue/50 text-freedom-blue px-4 py-2 text-sm font-semibold hover:bg-freedom-blue/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue">
              + {a.addLabel}
            </button>
          ))}
        </div>

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
          <span className="font-heading font-bold text-regal-navy">${perVideo.toLocaleString()}</span>{" "}
          per chapter{raceObj.candidate ? " for candidate campaigns this cycle" : ""}. Add chapters whenever the story calls for another.
        </p>

        {/* The one purchase CTA endcap (4.4) */}
        <div className="rounded-3xl bg-regal-navy p-8 md:p-10 text-center">
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-beacon-white mb-6">Start with chapter one.</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-6">
            <div className="text-center">
              <Button variant="patriot" href={CALENDLY_PURCHASE} external className="px-8 py-3">{CTA_PRIMARY}</Button>
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
