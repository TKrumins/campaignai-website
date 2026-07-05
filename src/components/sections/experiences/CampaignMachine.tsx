"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * The Campaign Machine (4.3). A full-width machine of gears with a person at
 * the center. Flipping the AI switch spins the engine gears (staggered) and
 * rolls a time-saved counter; the candidate gear NEVER accelerates.
 * `remove the candidate` stops the machine dead. Human-in-the-loop stations
 * every output passes through; `remove the humans` degrades taste and safety.
 * The `What happens without guardrails?` toggle maps patterns to OUTCOMES only
 * (never methods) and resolves onto the three refusal commitments in Verdant.
 *
 * Reduced motion: gears hold still (stepped states), all copy intact.
 */

interface GearProps {
  size: number;
  teeth?: number;
  color: string;
  spinning: boolean;
  durationSec: number;
  reverse?: boolean;
  label?: string;
  sub?: string;
  faded?: boolean;
}

function Gear({ size, teeth = 10, color, spinning, durationSec, reverse, label, sub, faded }: GearProps) {
  const r = 50;
  const toothLen = 12;
  const paths: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2;
    const x1 = 50 + Math.cos(a) * r;
    const y1 = 50 + Math.sin(a) * r;
    const x2 = 50 + Math.cos(a) * (r + toothLen);
    const y2 = 50 + Math.sin(a) * (r + toothLen);
    paths.push(`M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }
  const style = { "--gear-dur": `${durationSec}s`, animationDuration: `${durationSec}s` } as CSSProperties;
  return (
    <div className="flex flex-col items-center" style={{ width: size }}>
      <svg
        viewBox="0 0 124 124"
        width={size}
        height={size}
        className={`machine-gear ${spinning ? "spinning" : ""} ${reverse ? "rev" : ""} ${faded ? "opacity-40" : ""}`}
        style={style}
        aria-hidden="true"
      >
        <g transform="translate(12 12)">
          {paths.map((d, i) => (
            <path key={i} d={d} stroke={color} strokeWidth="9" strokeLinecap="round" />
          ))}
          <circle cx="50" cy="50" r="50" fill={color} />
          <circle cx="50" cy="50" r="20" fill="#0D1B3E" opacity="0.35" />
        </g>
      </svg>
      {label && (
        <div className="text-center mt-2">
          <p className="font-heading font-bold text-xs uppercase tracking-wider">{label}</p>
          {sub && <p className="text-[11px] opacity-70">{sub}</p>}
        </div>
      )}
    </div>
  );
}

function Toggle({
  label,
  on,
  onChange,
  tone = "navy",
}: {
  label: string;
  on: boolean;
  onChange: (v: boolean) => void;
  tone?: "navy" | "scarlet";
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className="inline-flex items-center gap-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue rounded-full"
    >
      <span
        className={`relative w-12 h-7 rounded-full transition-colors ${
          on ? (tone === "scarlet" ? "bg-critical-scarlet" : "bg-verdant") : "bg-slate/40"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white motion-safe:transition-transform ${
            on ? "translate-x-5" : ""
          }`}
        />
      </span>
      <span>{label}</span>
    </button>
  );
}

const ENGINE = [
  { label: "Content", sub: "scripts + cuts", color: "#4D9FFF", teeth: 10 },
  { label: "Outreach", sub: "reach + timing", color: "#8E5CF7", teeth: 12 },
  { label: "Scheduling", sub: "calendars", color: "#FF6B8F", teeth: 9 },
  { label: "Compliance", sub: "disclosure labels", color: "#00D084", teeth: 11 },
];

const HUMAN_CATCHES = [
  { flag: "Tone that is off", note: "A line that would read as tone-deaf never leaves the room." },
  { flag: "Claims that overreach", note: "A promise the campaign can't stand behind gets pulled." },
  { flag: "A frame that misrepresents", note: "An edit that changes the meaning gets caught and re-cut." },
];

const BAD_PATTERNS = [
  { pattern: "Impersonation of real people", outcome: "Voters can no longer trust what they see or hear." },
  { pattern: "Fabricated video of opponents", outcome: "Races turn on things that never happened." },
  { pattern: "Deception at scale", outcome: "A different story sold to every voter at once." },
  { pattern: "Misleading people about voting", outcome: "Voters turned away from a vote that was theirs." },
];

const REFUSALS = [
  "We will never impersonate a real person.",
  "We will never help deceive voters about how, when, or where to vote.",
  "We will never train major AI models on your campaign's data.",
];

export function CampaignMachine() {
  const [aiOn, setAiOn] = useState(false);
  const [humansOn, setHumansOn] = useState(true);
  const [candidateOn, setCandidateOn] = useState(true);
  const [badScenario, setBadScenario] = useState(false);
  const [restored, setRestored] = useState(false);
  const [timeSaved, setTimeSaved] = useState(0);
  const [reduced, setReduced] = useState(false);
  const resolveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Rolling time-saved counter while the machine runs with AI on.
  useEffect(() => {
    const running = aiOn && candidateOn && !badScenario;
    if (!running) return;
    if (reduced) {
      setTimeSaved((t) => (t < 480 ? 480 : t));
      return;
    }
    const id = window.setInterval(() => setTimeSaved((t) => t + 7), 90);
    return () => window.clearInterval(id);
  }, [aiOn, candidateOn, badScenario, reduced]);

  const running = aiOn && candidateOn;
  const engineDur = aiOn ? 2.4 : 7; // engine speeds up with AI...
  const candidateDur = 6; // ...the candidate gear never accelerates.

  function exitBadScenario() {
    setBadScenario(false);
    setRestored(true);
    requestAnimationFrame(() =>
      resolveRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" })
    );
  }

  return (
    <section
      className={`py-14 md:py-20 transition-colors ${
        badScenario ? "bg-[#160608]" : "bg-regal-navy"
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Master switch */}
        <div className="flex flex-col items-center mb-10">
          <button
            type="button"
            role="switch"
            aria-checked={aiOn}
            onClick={() => setAiOn((v) => !v)}
            disabled={badScenario}
            className="group inline-flex items-center gap-4 rounded-full bg-white/5 border border-white/15 px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue disabled:opacity-50"
          >
            <span
              className={`relative w-16 h-9 rounded-full transition-colors ${
                aiOn ? "bg-verdant" : "bg-slate/50"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white motion-safe:transition-transform ${
                  aiOn ? "translate-x-7" : ""
                }`}
              />
            </span>
            <span className="text-left">
              <span className="block font-heading font-extrabold text-beacon-white text-lg">
                {aiOn ? "AI is on" : "Flip the switch"}
              </span>
              <span className="block text-beacon-white/60 text-xs">
                {reduced
                  ? aiOn
                    ? "Engine: running fast. Candidate: same steady pace."
                    : "Engine: idle."
                  : "Watch what speeds up. Notice what doesn't."}
              </span>
            </span>
          </button>

          {/* Rolling time-saved counter */}
          <div
            className="mt-5 text-center"
            style={{ animation: running && !reduced ? "machineTimeSavedPulse 1.6s ease-in-out infinite" : undefined }}
          >
            <p className="font-heading font-extrabold text-3xl md:text-4xl text-verdant tabular-nums">
              {Math.floor(timeSaved / 60)}h {timeSaved % 60}m
            </p>
            <p className="text-beacon-white/60 text-xs uppercase tracking-wider">
              Time the engine saved
            </p>
          </div>
        </div>

        {/* The machine */}
        {badScenario ? (
          <BadScenario onRestore={exitBadScenario} />
        ) : (
          <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-10">
            {/* Gear train */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-beacon-white">
              {ENGINE.map((g, i) => (
                <Gear
                  key={g.label}
                  size={i % 2 === 0 ? 88 : 104}
                  teeth={g.teeth}
                  color={g.color}
                  spinning={running}
                  durationSec={engineDur}
                  reverse={i % 2 === 1}
                  label={g.label}
                  sub={g.sub}
                  faded={!candidateOn}
                />
              ))}

              {/* Candidate gear: the person at the center, never accelerates */}
              <div className="relative">
                <Gear
                  size={132}
                  teeth={14}
                  color={candidateOn ? "#FFB800" : "#666666"}
                  spinning={running}
                  durationSec={candidateDur}
                  label="The candidate"
                  sub={candidateOn ? "steady, human pace" : "removed"}
                />
                <svg viewBox="0 0 24 24" className="absolute top-[34px] left-1/2 -translate-x-1/2 w-8 h-8" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" fill="#0D1B3E" />
                  <path d="M4 21a8 8 0 0 1 16 0z" fill="#0D1B3E" />
                </svg>
              </div>
            </div>

            {/* Human-in-the-loop stations */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-regal-navy/40 p-5 md:p-7">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <p className="font-heading font-bold text-beacon-white">
                  Human review stations
                </p>
                <Toggle
                  label={humansOn ? "Human review: on" : "Human review: removed"}
                  on={humansOn}
                  onChange={setHumansOn}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {HUMAN_CATCHES.map((h) => (
                  <div
                    key={h.flag}
                    className={`rounded-xl p-4 border ${
                      humansOn
                        ? "border-verdant/40 bg-verdant/5"
                        : "border-critical-scarlet/50 bg-critical-scarlet/10"
                    }`}
                  >
                    <p
                      className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                        humansOn ? "text-verdant" : "text-critical-scarlet"
                      }`}
                    >
                      {humansOn ? "Caught" : "Missed"}
                    </p>
                    <p className="text-beacon-white text-sm font-semibold">{h.flag}</p>
                    <p className="text-beacon-white/60 text-xs mt-1">{h.note}</p>
                  </div>
                ))}
              </div>

              {/* Output tray degrades when humans are removed */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-beacon-white/50 text-xs uppercase tracking-wider">
                  Leaving the machine
                </span>
                <div className="flex gap-2">
                  {[0, 1, 2].map((k) => (
                    <div
                      key={k}
                      className={`w-16 h-10 rounded-md bg-freedom-blue/30 border border-freedom-blue/50 relative ${
                        humansOn ? "" : "machine-output-degraded border-critical-scarlet/70"
                      }`}
                    >
                      {!humansOn && (
                        <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-critical-scarlet text-white text-[9px] font-bold flex items-center justify-center">
                          !
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-beacon-white/70 text-sm mt-4 max-w-[640px]">
                {humansOn
                  ? "AI provides the speed. Humans provide the judgment. Every output passes a person before it leaves."
                  : "Speed without judgment ships the tone-deaf line, the overreaching claim, the misleading frame. Judgment is not optional."}
              </p>
            </div>

            {/* Remove the candidate */}
            <div className="mt-8 flex flex-col items-center">
              <Toggle
                label={candidateOn ? "Remove the candidate" : "Candidate removed"}
                on={!candidateOn}
                onChange={(v) => setCandidateOn(!v)}
                tone="scarlet"
              />
              {!candidateOn && (
                <p className="mt-4 font-heading font-extrabold text-xl md:text-2xl text-beacon-white text-center max-w-[520px]">
                  No candidate, no campaign.{" "}
                  <span className="text-verdant">AI never changes that.</span>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Bad-scenario entry / resolution */}
        <div className="mt-10 flex flex-col items-center gap-4">
          {!badScenario && (
            <Toggle
              label="What happens without guardrails?"
              on={badScenario}
              onChange={(v) => {
                setBadScenario(v);
                if (v) setRestored(false);
              }}
              tone="scarlet"
            />
          )}
        </div>

        {/* Resolution beat: the guardrails as physical governors + refusals */}
        <div
          ref={resolveRef}
          className={`mt-10 rounded-3xl border-2 border-verdant/50 bg-verdant/5 p-6 md:p-9 ${
            restored ? "ring-2 ring-verdant" : ""
          } ${badScenario ? "hidden" : ""}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-verdant shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <p className="font-heading font-extrabold text-xl md:text-2xl text-beacon-white">
              The guardrails are bolted on, not bolted after.
            </p>
          </div>
          <p className="text-beacon-white/70 text-sm mb-6 max-w-[680px]">
            The dark timeline is real. These are the governors on this machine, the
            commitments that do not move:
          </p>
          <ul className="space-y-3">
            {REFUSALS.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <span className="text-verdant mt-0.5" aria-hidden="true">&#x2713;</span>
                <span className="text-verdant font-semibold text-base md:text-lg">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BadScenario({ onRestore }: { onRestore: () => void }) {
  return (
    <div className="rounded-3xl border-2 border-critical-scarlet/50 bg-black/40 p-6 md:p-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-3 h-3 rounded-full bg-critical-scarlet animate-pulse" />
        <p className="text-critical-scarlet font-heading font-extrabold text-lg uppercase tracking-wider">
          Without guardrails
        </p>
      </div>
      <p className="text-beacon-white/70 text-sm mb-8 max-w-[680px]">
        Poorly built or poorly deployed AI does real damage in politics. This is what
        it costs, mapped to outcomes, never to methods.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {BAD_PATTERNS.map((b) => (
          <div key={b.pattern} className="rounded-xl border border-critical-scarlet/40 bg-critical-scarlet/10 p-5">
            <p className="text-beacon-white font-heading font-bold text-sm mb-2">{b.pattern}</p>
            <div className="flex items-center gap-2 text-critical-scarlet text-xs font-semibold uppercase tracking-wider mb-1">
              <span aria-hidden="true">&rarr;</span> The outcome
            </div>
            <p className="text-beacon-white/85 text-sm">{b.outcome}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onRestore}
          className="btn-hover inline-flex items-center justify-center rounded-full bg-verdant text-regal-navy px-7 py-3.5 text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Restore the guardrails &rarr;
        </button>
        <p className="text-beacon-white/50 text-xs mt-3">
          The dark timeline exists. Here is the company that built the brakes.
        </p>
      </div>
    </div>
  );
}
