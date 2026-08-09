"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BookOpenCheck, ScanLine, BadgeCheck, Radar, RotateCcw } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { ComingSoonSeal } from "@/components/ui/ComingSoonSeal";

/**
 * The clearance pass — four checks a finished video will make once our
 * regulation tracker ships. Each beat gets its OWN scene, not a running total
 * on one stage: a board of rules, a scan, a lower-third close-up, and a stamp
 * with a watch dial. Nothing here reads real law or real state data; clicking
 * a beat just parks the stage on that scene. The rosette says Coming Soon.
 *
 * Replaced the old 50-state picker, which implied a live lookup we do not have.
 */

const BEATS = [
  {
    key: "read",
    icon: BookOpenCheck,
    title: "We read the rulebook. You never have to.",
    copy: "Fifty states, fifty sets of AI disclosure rules, and they keep changing mid-session. Keeping up is our job, not one more thing on your list.",
  },
  {
    key: "check",
    icon: ScanLine,
    title: "Your actual cut gets checked.",
    copy: "Not a template, not a guess — the video you're about to post, held up against what your state asks for.",
  },
  {
    key: "label",
    icon: BadgeCheck,
    title: "The disclosure is built in, not bolted on.",
    copy: "The label lands inside the video where it belongs, so it looks like part of the piece instead of a warning sticker.",
  },
  {
    key: "watch",
    icon: Radar,
    title: "Green light — and we keep watching.",
    copy: "You get a plain-English record that you're clear, and we stay on the rules after you post, in case they move.",
  },
] as const;

const BEAT_MS = 3200;

/* ------------------------------------------------------------------ */
/* Scene 1 — a board of rules, read for you                            */
/* ------------------------------------------------------------------ */
function SceneRules() {
  const cols = [67, 157, 247, 337];
  const rows = [39, 101, 163];
  const checked = new Set(["1-0", "0-2", "3-1"]);

  return (
    <g className="stage-in">
      {rows.map((y, r) =>
        cols.map((x, c) => {
          const id = `${c}-${r}`;
          const i = r * cols.length + c;
          const isChecked = checked.has(id);
          return (
            <g key={id} className="cc-tick cc-fx" style={{ animationDelay: `${i * 0.045}s` }}>
              <rect x={x} y={y} width="76" height="46" rx="4" fill="#FFFFFF" stroke="#0D1B3E" strokeOpacity="0.14" />
              <rect x={x + 8} y={y + 8} width="16" height="4" rx="2" fill={isChecked ? "#00D084" : "#0D1B3E"} fillOpacity={isChecked ? 1 : 0.18} />
              <g stroke="#0D1B3E" strokeOpacity="0.16" strokeWidth="2.5" strokeLinecap="round">
                <line x1={x + 8} y1={y + 22} x2={x + 60} y2={y + 22} />
                <line x1={x + 8} y1={y + 30} x2={x + 48} y2={y + 30} />
                <line x1={x + 8} y1={y + 38} x2={x + 56} y2={y + 38} />
              </g>
              {isChecked && (
                <g className="cc-tick cc-fx" style={{ animationDelay: `${0.75 + i * 0.06}s` }}>
                  <circle cx={x + 63} cy={y + 12} r="9" fill="#00D084" />
                  <path
                    d={`M${x + 59} ${y + 12} L${x + 61.6} ${y + 15} L${x + 67} ${y + 8.6}`}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              )}
            </g>
          );
        })
      )}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Scene 2 — the scan across your finished cut                         */
/* ------------------------------------------------------------------ */
function SceneScan() {
  return (
    <g className="stage-in">
      <ellipse cx="240" cy="222" rx="132" ry="6" fill="#0D1B3E" opacity="0.06" />
      <rect x="90" y="40" width="300" height="169" rx="12" fill="url(#cc-card)" />
      <rect x="98" y="48" width="284" height="153" rx="8" fill="none" stroke="#E8F4F8" strokeOpacity="0.12" />
      <circle cx="240" cy="122" r="23" fill="#E8F4F8" fillOpacity="0.9" />
      <path d="M234 113 L253 122 L234 131 Z" fill="#0D1B3E" />
      <rect x="106" y="193" width="268" height="3.5" rx="1.75" fill="#E8F4F8" fillOpacity="0.16" />
      <rect x="106" y="193" width="104" height="3.5" rx="1.75" fill="#4D9FFF" />

      <g clipPath="url(#cc-scan-clip)">
        <g className="cc-scan-line">
          <rect x="90" y="42" width="300" height="2.5" fill="url(#cc-scan-grad)" />
          <rect x="90" y="44" width="300" height="28" fill="url(#cc-scan-grad)" opacity="0.12" />
        </g>
        {[
          [140, 74],
          [346, 86],
          [178, 160],
        ].map(([cx, cy], i) => (
          <g key={`${cx}-${cy}`} className="cc-tick cc-fx" style={{ animationDelay: `${0.5 + i * 0.35}s` }}>
            <circle cx={cx} cy={cy} r="8.5" fill="#00D084" />
            <path
              d={`M${cx - 3.6} ${cy} L${cx - 1} ${cy + 2.8} L${cx + 3.8} ${cy - 3}`}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}
      </g>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Scene 3 — the lower third, close up, with the label locking in      */
/* ------------------------------------------------------------------ */
function SceneLabel() {
  const brackets = [
    "M96 132 L96 122 L112 122",
    "M300 122 L316 122 L316 132",
    "M96 168 L96 178 L112 178",
    "M316 168 L316 178 L300 178",
  ];

  return (
    <g className="stage-in">
      <rect x="60" y="42" width="360" height="164" rx="12" fill="url(#cc-card)" />
      <rect x="68" y="50" width="344" height="148" rx="8" fill="none" stroke="#E8F4F8" strokeOpacity="0.12" />

      {/* what's already in frame, abstracted to hairlines */}
      <g stroke="#E8F4F8" strokeOpacity="0.2" strokeWidth="4" strokeLinecap="round">
        <line x1="96" y1="76" x2="248" y2="76" />
        <line x1="96" y1="92" x2="196" y2="92" />
      </g>

      {/* where in the frame we are — a thumbnail with the lower third lit.
          Kept left of x=380 so the Coming Soon seal never sits on top of it. */}
      <g>
        <rect x="296" y="66" width="64" height="36" rx="3" fill="#E8F4F8" fillOpacity="0.1" stroke="#E8F4F8" strokeOpacity="0.22" />
        <rect x="300" y="88" width="38" height="9" rx="2" fill="#00D084" />
      </g>

      {/* the label itself, sliding up into place */}
      <g className="cc-rise">
        <rect x="96" y="132" width="220" height="46" rx="8" fill="#00D084" fillOpacity="0.95" />
        <path
          d="M118 155 L126 163 L142 145"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="156" y="161" className="font-heading" fontSize="17" fontWeight="800" letterSpacing="1.4" fill="#FFFFFF">
          AI-DISCLOSED
        </text>
      </g>

      {/* corner brackets snapping shut around it */}
      {brackets.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="#A7F3D0"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="cc-tick cc-fx"
          style={{ animationDelay: `${0.45 + i * 0.09}s` }}
        />
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Scene 4 — stamped, then watched                                     */
/* ------------------------------------------------------------------ */
function SceneStamp() {
  return (
    <g className="stage-in">
      <ellipse cx="164" cy="212" rx="112" ry="5" fill="#0D1B3E" opacity="0.06" />
      <rect x="44" y="56" width="240" height="135" rx="10" fill="url(#cc-card)" />
      <rect x="51" y="63" width="226" height="121" rx="7" fill="none" stroke="#E8F4F8" strokeOpacity="0.12" />
      <circle cx="164" cy="112" r="19" fill="#E8F4F8" fillOpacity="0.85" />
      <path d="M159 105 L174 112 L159 119 Z" fill="#0D1B3E" />
      <rect x="58" y="172" width="212" height="3" rx="1.5" fill="#E8F4F8" fillOpacity="0.16" />
      <rect x="58" y="172" width="150" height="3" rx="1.5" fill="#4D9FFF" />

      {/* the stamp thuds onto the finished cut */}
      <g transform="translate(196 158)">
        <g className="cc-stamp cc-fx">
          <rect x="-52" y="-19" width="104" height="38" rx="3" fill="#FFFFFF" fillOpacity="0.97" stroke="#00D084" strokeWidth="2.2" />
          <rect x="-47" y="-14" width="94" height="28" rx="2" fill="none" stroke="#00D084" strokeOpacity="0.65" strokeWidth="0.9" />
          <text x="0" y="5" textAnchor="middle" className="font-heading" fontSize="13" fontWeight="800" letterSpacing="2" fill="#0B7A56">
            CLEARED
          </text>
        </g>
      </g>

      {/* and the watch stays on — dropped below the seal's corner */}
      <g>
        <circle cx="362" cy="134" r="54" fill="none" stroke="#0D1B3E" strokeOpacity="0.12" />
        <circle cx="362" cy="134" r="36" fill="none" stroke="#0D1B3E" strokeOpacity="0.1" />
        <circle cx="362" cy="134" r="19" fill="none" stroke="#0D1B3E" strokeOpacity="0.08" />
        <line x1="308" y1="134" x2="416" y2="134" stroke="#0D1B3E" strokeOpacity="0.08" />
        <line x1="362" y1="80" x2="362" y2="188" stroke="#0D1B3E" strokeOpacity="0.08" />
        <g className="cc-radar" style={{ transformOrigin: "362px 134px" }}>
          <path d="M362 134 L362 80 A54 54 0 0 1 407 104 Z" fill="url(#cc-radar-grad)" />
        </g>
        <circle cx="362" cy="134" r="3.5" fill="#00D084" />
        {[
          [386, 110],
          [336, 154],
          [380, 160],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="#00D084"
            className="cc-blip"
            style={{ animationDelay: `${i * 0.9}s` }}
          />
        ))}
      </g>
    </g>
  );
}

const SCENES = [SceneRules, SceneScan, SceneLabel, SceneStamp];

export function ComplianceClearance() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!auto) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    timer.current = setInterval(() => {
      setStep((s) => (s + 1) % BEATS.length);
    }, BEAT_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [auto]);

  const pick = (i: number) => {
    setAuto(false);
    setStep(i);
  };

  const replay = () => {
    setStep(0);
    setAuto(true);
  };

  const Scene = SCENES[step];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Compliance runs on one sub-brand: staged greens and white, nothing else. */}
      <AISparkle
        size={22}
        gradient="verdant"
        className="sparkle-twinkle absolute left-[5%] top-24 hidden md:block"
        style={{ ["--dur" as string]: "4.6s" } as CSSProperties}
      />
      <AISparkle
        size={14}
        gradient="verdant-deep"
        className="sparkle-twinkle absolute left-[9%] top-40 hidden lg:block"
        style={{ ["--dur" as string]: "6.1s" } as CSSProperties}
      />
      <AISparkle
        size={26}
        gradient="verdant-pale"
        className="sparkle-twinkle absolute right-[5%] top-28 hidden md:block"
        style={{ ["--dur" as string]: "3.4s" } as CSSProperties}
      />
      <AISparkle
        size={16}
        gradient="verdant"
        className="sparkle-twinkle absolute bottom-28 left-[8%] hidden md:block"
        style={{ ["--dur" as string]: "5.2s" } as CSSProperties}
      />
      <AISparkle
        size={13}
        gradient="verdant-deep"
        className="sparkle-twinkle absolute bottom-36 right-[9%] hidden lg:block"
        style={{ ["--dur" as string]: "4.1s" } as CSSProperties}
      />

      <div className="relative mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel text="Cleared to ship" color="verdant" />
            <h2 className="mt-3 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
              Hit post without holding your breath.
            </h2>
            <p className="text-lg leading-relaxed text-granite">
              Every state writes its own AI disclosure rules, and they keep
              rewriting them mid-session. You shouldn&apos;t have to track that
              &mdash; you have doors to knock. Our regulation tracker isn&apos;t open
              to the public yet. When it is, every video you make will clear these
              four checks before it ever reaches a voter.
            </p>
            <p className="mt-4 text-sm font-semibold text-verdant">
              No lawyer on retainer. No compliance consultant. It comes with the video, not as a bill on top.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-8">
          {/* ---------------- The stage ---------------- */}
          <ScrollReveal>
            <div className="relative">
              {/* Splashy seal, pinned up and to the right of the stage */}
              <ComingSoonSeal
                label="Coming soon"
                className="absolute -right-1 -top-9 z-30 h-auto w-[100px] sm:-right-5 sm:-top-12 md:w-[140px]"
              />

              <div className="relative overflow-hidden rounded-2xl border border-regal-navy/10 bg-dawn-frost p-3 shadow-sm sm:p-5">
                <svg
                  viewBox="0 0 480 248"
                  className="w-full"
                  role="img"
                  aria-label={`Illustration, step ${step + 1} of 4: ${BEATS[step].title}`}
                >
                  <defs>
                    <linearGradient id="cc-card" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0D1B3E" />
                      <stop offset="100%" stopColor="#23407E" />
                    </linearGradient>
                    <linearGradient id="cc-scan-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00D084" stopOpacity="0" />
                      <stop offset="50%" stopColor="#A7F3D0" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#00D084" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="cc-radar-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00D084" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#00D084" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="cc-scan-clip">
                      <rect x="90" y="40" width="300" height="169" rx="12" />
                    </clipPath>
                  </defs>

                  <g key={step}>
                    <Scene />
                  </g>
                </svg>

                <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wider text-slate/70">
                  A sketch of what&apos;s coming &mdash; not a live legal check
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ---------------- The beats ---------------- */}
          <ScrollReveal delay={100}>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate">
                Four checks, every video
              </p>
              <ul className="space-y-2">
                {BEATS.map((beat, i) => {
                  const on = i === step;
                  const Icon = beat.icon;
                  return (
                    <li key={beat.key}>
                      <button
                        type="button"
                        onClick={() => pick(i)}
                        aria-pressed={on}
                        className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-verdant ${
                          on
                            ? "border-verdant/50 bg-verdant/8"
                            : "border-regal-navy/10 bg-white hover:border-verdant/30 hover:bg-verdant/4"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            on ? "bg-verdant text-white" : "bg-regal-navy/6 text-regal-navy/60"
                          }`}
                        >
                          <Icon className="h-4 w-4" strokeWidth={2.2} />
                        </span>
                        <span>
                          <span className="block font-heading text-[15px] font-bold text-regal-navy">
                            {beat.title}
                          </span>
                          <span className="mt-0.5 block text-sm leading-relaxed text-slate">
                            {beat.copy}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-xs text-slate/70">
                  {auto ? "Playing on a loop" : "Paused on your pick"}
                </span>
                <button
                  type="button"
                  onClick={replay}
                  className="inline-flex items-center gap-1.5 rounded-full border border-regal-navy/15 px-3 py-1.5 text-xs font-semibold text-regal-navy transition-colors hover:border-verdant/50 hover:text-verdant focus:outline-none focus-visible:ring-2 focus-visible:ring-verdant"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Play it again
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="mx-auto mt-12 max-w-[700px] text-center text-sm text-slate/80">
            This is a preview of something we haven&apos;t shipped yet. CampaignAI provides
            compliance tools and guidance, not legal advice &mdash; when it really counts, loop
            in your campaign&apos;s counsel.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
