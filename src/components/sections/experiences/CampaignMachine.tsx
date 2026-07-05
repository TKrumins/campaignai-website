"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The Campaign Machine (4.3), v2. A connected machine: a hopper feeds meshed
 * gears powered by the candidate at the center, and finished work rides a
 * conveyor past human inspector stations into the output bin. Flipping the AI
 * switch spins the engine gears (staggered) and rolls a time-saved counter; the
 * candidate gear NEVER accelerates. `remove the candidate` stops the machine
 * dead. `remove the humans` degrades taste and safety at the stations.
 * `What happens without guardrails?` maps patterns to OUTCOMES only (never
 * methods) and resolves onto the three refusal commitments in Verdant.
 *
 * Reduced motion: gears and belt hold still (stepped states), all copy intact.
 */

/* ---- gear geometry ---- */
function gearTeeth(cx: number, cy: number, r: number, teeth: number, toothLen = 10) {
  const paths: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * r;
    const y1 = cy + Math.sin(a) * r;
    const x2 = cx + Math.cos(a) * (r + toothLen);
    const y2 = cy + Math.sin(a) * (r + toothLen);
    paths.push(`M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }
  return paths;
}

function MachineGear({
  cx, cy, r, teeth, color, dur, reverse, spinning, faded, label,
}: {
  cx: number; cy: number; r: number; teeth: number; color: string; dur: number;
  reverse?: boolean; spinning: boolean; faded?: boolean; label?: string;
}) {
  return (
    <g>
      <g
        className={`machine-gear ${spinning ? "spinning" : ""} ${reverse ? "rev" : ""}`}
        style={{ animationDuration: `${dur}s`, opacity: faded ? 0.35 : 1, ["--gear-dur"]: `${dur}s` } as React.CSSProperties}
      >
        {gearTeeth(cx, cy, r, teeth).map((d, i) => (
          <path key={i} d={d} stroke={color} strokeWidth="7" strokeLinecap="round" />
        ))}
        <circle cx={cx} cy={cy} r={r} fill={color} />
        <circle cx={cx} cy={cy} r={r * 0.34} fill="#0D1B3E" opacity="0.35" />
      </g>
      {label && (
        <text x={cx} y={cy + 3} textAnchor="middle" fontSize="9" fontWeight="700"
          fill="#0D1B3E" opacity="0.7" style={{ fontFamily: "Manrope, sans-serif" }}>
          {label}
        </text>
      )}
    </g>
  );
}

function InspectorStation({ x, healthy }: { x: number; healthy: boolean }) {
  const c = healthy ? "#00D084" : "#E62E2E";
  return (
    <g>
      <rect x={x - 26} y={236} width="52" height="34" rx="6" fill="#0D1B3E" />
      <rect x={x - 26} y={236} width="52" height="34" rx="6" fill="none" stroke={c} strokeWidth="2" />
      <circle cx={x} cy={250} r="6" fill="#E8F4F8" />
      <path d={`M${x - 8} 264 a8 8 0 0 1 16 0`} fill="#E8F4F8" />
      <circle cx={x + 14} cy={244} r="5" fill="none" stroke={c} strokeWidth="2" />
      <line x1={x + 17} y1={247} x2={x + 21} y2={251} stroke={c} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

function MachineSVG({
  running, aiOn, humansOn, candidateOn, reduced,
}: {
  running: boolean; aiOn: boolean; humansOn: boolean; candidateOn: boolean; reduced: boolean;
}) {
  const engineDur = aiOn ? 2.2 : 6.5;
  const spin = running && !reduced;
  const flowClass = spin ? "machine-flow spinning" : "machine-flow";
  const beltClass = spin ? "machine-belt spinning" : "machine-belt";
  const items = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 760 340" className="w-full h-auto" role="img"
      aria-label="A campaign machine: a hopper feeds meshed gears powered by the candidate, and finished videos ride a conveyor past human review stations into the output bin.">
      {/* base plate */}
      <rect x="16" y="40" width="728" height="260" rx="18" fill="#ffffff" opacity="0.04" />
      <rect x="16" y="40" width="728" height="260" rx="18" fill="none" stroke="#ffffff" strokeOpacity="0.1" />

      {/* hopper feeding raw ideas */}
      <g>
        <path d="M70 70 h84 l-20 44 h-44 z" fill="#4D9FFF" opacity="0.25" />
        <path d="M70 70 h84 l-20 44 h-44 z" fill="none" stroke="#4D9FFF" strokeOpacity="0.5" />
        {[0, 1, 2].map((k) => (
          <circle key={k} cx={100 + k * 12} cy={84} r="4" fill="#7AB8FF"
            className={spin ? "machine-drop spinning" : "machine-drop"}
            style={{ animationDelay: `${k * 0.8}s` }} />
        ))}
        <text x="112" y="132" textAnchor="middle" fontSize="9" fill="#B8D8F0" style={{ fontFamily: "Inter, sans-serif" }}>raw ideas</text>
      </g>

      {/* meshed gear cluster, candidate at center */}
      <MachineGear cx={210} cy={150} r={30} teeth={9} color="#4D9FFF" dur={engineDur} spinning={spin} faded={!candidateOn} label="content" />
      <MachineGear cx={300} cy={112} r={34} teeth={11} color="#8E5CF7" dur={engineDur} reverse spinning={spin} faded={!candidateOn} label="reach" />
      <MachineGear cx={300} cy={196} r={30} teeth={9} color="#FF6B8F" dur={engineDur} reverse spinning={spin} faded={!candidateOn} label="timing" />
      <MachineGear cx={470} cy={150} r={34} teeth={11} color="#00D084" dur={engineDur} spinning={spin} faded={!candidateOn} label="labels" />

      {/* candidate gear: the person at the center, never accelerates */}
      <MachineGear cx={388} cy={154} r={44} teeth={14} color={candidateOn ? "#FFB800" : "#666666"} dur={6} spinning={running && !reduced} />
      <g>
        <circle cx="388" cy="146" r="9" fill="#0D1B3E" />
        <path d="M376 168 a12 12 0 0 1 24 0z" fill="#0D1B3E" />
      </g>

      {/* belt/connector from cluster down to the conveyor */}
      <path d="M470 184 q10 30 0 52" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="3" fill="none" />

      {/* conveyor */}
      <rect x="70" y="250" width="600" height="8" rx="4" fill="#ffffff" opacity="0.12" />
      <line x1="70" y1="254" x2="670" y2="254" stroke="#7AB8FF" strokeOpacity="0.6" strokeWidth="4"
        strokeDasharray="4 24" className={beltClass} />

      {/* inspector stations on the conveyor */}
      <InspectorStation x={300} healthy={humansOn} />
      <InspectorStation x={470} healthy={humansOn} />

      {/* output bin */}
      <g>
        <path d="M676 214 h54 v44 h-54" fill="#0D1B3E" opacity="0.5" />
        <path d="M676 214 h54 v44 h-54" fill="none" stroke="#4D9FFF" strokeOpacity="0.4" />
        <rect x="686" y="238" width="34" height="8" rx="2" fill="#4D9FFF" opacity="0.6" />
        <rect x="686" y="228" width="34" height="8" rx="2" fill="#4D9FFF" opacity="0.4" />
      </g>

      {/* items flowing along the conveyor through the stations */}
      {items.map((k) => (
        <g key={k} className={flowClass} style={{ animationDelay: `${k * 1.35}s` }} transform="translate(100 234)">
          <g className={humansOn ? "" : "machine-output-degraded"}>
            <rect x="0" y="0" width="26" height="16" rx="3"
              fill={humansOn ? "#4D9FFF" : "#E62E2E"} opacity="0.85" />
            <path d="M9 4 l8 4 -8 4 z" fill="#E8F4F8" />
            {!humansOn && (
              <circle cx="26" cy="0" r="5" fill="#E62E2E" stroke="#160608" strokeWidth="1" />
            )}
          </g>
        </g>
      ))}
    </svg>
  );
}

function Toggle({ label, on, onChange, tone = "verdant" }: {
  label: string; on: boolean; onChange: (v: boolean) => void; tone?: "verdant" | "scarlet";
}) {
  return (
    <button type="button" role="switch" aria-checked={on} onClick={() => onChange(!on)}
      className="inline-flex items-center gap-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue rounded-full">
      <span className={`relative w-12 h-7 rounded-full transition-colors ${on ? (tone === "scarlet" ? "bg-critical-scarlet" : "bg-verdant") : "bg-slate/40"}`}>
        <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white motion-safe:transition-transform ${on ? "translate-x-5" : ""}`} />
      </span>
      <span>{label}</span>
    </button>
  );
}

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

  useEffect(() => {
    const running = aiOn && candidateOn && !badScenario;
    if (!running) return;
    if (reduced) { setTimeSaved((t) => (t < 480 ? 480 : t)); return; }
    const id = window.setInterval(() => setTimeSaved((t) => t + 7), 90);
    return () => window.clearInterval(id);
  }, [aiOn, candidateOn, badScenario, reduced]);

  const running = aiOn && candidateOn;

  function exitBadScenario() {
    setBadScenario(false);
    setRestored(true);
    requestAnimationFrame(() =>
      resolveRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" })
    );
  }

  return (
    <section className={`py-14 md:py-20 transition-colors ${badScenario ? "bg-[#160608]" : "bg-regal-navy"}`}>
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {!badScenario && (
          <>
            {/* Master switch + counter */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <button type="button" role="switch" aria-checked={aiOn} onClick={() => setAiOn((v) => !v)}
                className="group inline-flex items-center gap-4 rounded-full bg-white/5 border border-white/15 px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue">
                <span className={`relative w-16 h-9 rounded-full transition-colors ${aiOn ? "bg-verdant" : "bg-slate/50"}`}>
                  <span className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white motion-safe:transition-transform ${aiOn ? "translate-x-7" : ""}`} />
                </span>
                <span className="text-left">
                  <span className="block font-heading font-extrabold text-beacon-white text-lg">
                    {aiOn ? "AI is on" : "Flip the switch"}
                  </span>
                  <span className="block text-beacon-white/60 text-xs">
                    {reduced ? (aiOn ? "Engine: fast. Candidate: same steady pace." : "Engine: idle.") : "Watch what speeds up. Notice what doesn't."}
                  </span>
                </span>
              </button>
              <div className="text-center" style={{ animation: running && !reduced ? "machineTimeSavedPulse 1.6s ease-in-out infinite" : undefined }}>
                <p className="font-heading font-extrabold text-3xl text-verdant tabular-nums">
                  {Math.floor(timeSaved / 60)}h {timeSaved % 60}m
                </p>
                <p className="text-beacon-white/60 text-[11px] uppercase tracking-wider">Time the engine saved</p>
              </div>
            </div>

            {/* The machine */}
            <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-4 md:p-8">
              <MachineSVG running={running} aiOn={aiOn} humansOn={humansOn} candidateOn={candidateOn} reduced={reduced} />
              {!candidateOn && (
                <p className="mt-2 text-center font-heading font-extrabold text-xl md:text-2xl text-beacon-white">
                  No candidate, no campaign. <span className="text-verdant">AI never changes that.</span>
                </p>
              )}
            </div>

            {/* Controls */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="rounded-2xl border border-white/10 bg-regal-navy/40 p-4 flex flex-col items-start gap-2">
                <Toggle label={humansOn ? "Human review: on" : "Human review: removed"} on={humansOn} onChange={setHumansOn} />
                <p className="text-beacon-white/60 text-xs">Toggle off and watch the output leave the stations flagged and off-kilter.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-regal-navy/40 p-4 flex flex-col items-start gap-2">
                <Toggle label={candidateOn ? "Remove the candidate" : "Candidate removed"} on={!candidateOn} onChange={(v) => setCandidateOn(!v)} tone="scarlet" />
                <p className="text-beacon-white/60 text-xs">The person at the center powers the whole machine.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-regal-navy/40 p-4 flex flex-col items-start gap-2">
                <Toggle label="What happens without guardrails?" on={badScenario} onChange={(v) => { setBadScenario(v); if (v) setRestored(false); }} tone="scarlet" />
                <p className="text-beacon-white/60 text-xs">See the dark timeline, then the brakes we built for it.</p>
              </div>
            </div>

            {/* Human-in-the-loop detail */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-regal-navy/40 p-5 md:p-7">
              <p className="font-heading font-bold text-beacon-white mb-4">What the human stations catch</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {HUMAN_CATCHES.map((h) => (
                  <div key={h.flag} className={`rounded-xl p-4 border ${humansOn ? "border-verdant/40 bg-verdant/5" : "border-critical-scarlet/50 bg-critical-scarlet/10"}`}>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${humansOn ? "text-verdant" : "text-critical-scarlet"}`}>
                      {humansOn ? "Caught" : "Missed"}
                    </p>
                    <p className="text-beacon-white text-sm font-semibold">{h.flag}</p>
                    <p className="text-beacon-white/60 text-xs mt-1">{h.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-beacon-white/70 text-sm mt-4 max-w-[640px]">
                {humansOn
                  ? "AI provides the speed. Humans provide the judgment. Every output passes a person before it leaves."
                  : "Speed without judgment ships the tone-deaf line, the overreaching claim, the misleading frame. Judgment is not optional."}
              </p>
            </div>
          </>
        )}

        {badScenario && <BadScenario onRestore={exitBadScenario} />}

        {/* Resolution beat: governors + refusals */}
        <div ref={resolveRef}
          className={`mt-10 rounded-3xl border-2 border-verdant/50 bg-verdant/5 p-6 md:p-9 ${restored ? "ring-2 ring-verdant" : ""} ${badScenario ? "hidden" : ""}`}>
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
            The dark timeline is real. These are the governors on this machine, the commitments that do not move:
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
        <p className="text-critical-scarlet font-heading font-extrabold text-lg uppercase tracking-wider">Without guardrails</p>
      </div>
      <p className="text-beacon-white/70 text-sm mb-8 max-w-[680px]">
        Poorly built or poorly deployed AI does real damage in politics. This is what it costs, mapped to outcomes, never to methods.
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
        <button type="button" onClick={onRestore}
          className="btn-hover inline-flex items-center justify-center rounded-full bg-verdant text-regal-navy px-7 py-3.5 text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
          Restore the guardrails &rarr;
        </button>
        <p className="text-beacon-white/50 text-xs mt-3">The dark timeline exists. Here is the company that built the brakes.</p>
      </div>
    </div>
  );
}
