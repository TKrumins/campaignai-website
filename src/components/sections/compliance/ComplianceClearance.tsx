"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BookOpenCheck, ScanLine, BadgeCheck, Radar, RotateCcw } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { ComingSoonSeal } from "@/components/ui/ComingSoonSeal";

/**
 * Four steps a finished video goes through once our regulation tracker ships.
 * Each beat gets its OWN scene, not a running total on one stage: a board of
 * rules, a scan, a lower-third close-up, and the written record next to a watch
 * dial. Nothing here reads real law or real state data; clicking a beat just
 * parks the stage on that scene. The rosette says Coming Soon.
 *
 * COPY RULE FOR THIS WHOLE SECTION: we do legwork, we never clear anyone. No
 * "cleared", "approved", "compliant", "green light", or anything implying a
 * legal sign-off — that belongs to the campaign's counsel, and every block of
 * copy here has to leave room for them. Replaced the old 50-state picker, which
 * implied a live lookup we do not have.
 */

const BEATS = [
  {
    key: "read",
    icon: BookOpenCheck,
    title: "We read the rulebook so you don't start cold.",
    copy: "Fifty states, fifty sets of rules, all still moving. We track them; you and your counsel decide what it means for your race.",
  },
  {
    key: "check",
    icon: ScanLine,
    title: "Your actual cut gets reviewed.",
    copy: "Not a template — the video you're about to post, checked against the guidance we hold for your state.",
  },
  {
    key: "label",
    icon: BadgeCheck,
    title: "The disclosure is built in, not bolted on.",
    copy: "The label lands inside the video, formatted to the guidance we have — part of the piece, not a warning sticker.",
  },
  {
    key: "watch",
    icon: Radar,
    title: "You get a written record. We keep watching.",
    copy: "A plain-English summary of what we checked and applied, so your counsel starts on page three, not page one. If rules move after you post, we flag it.",
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
/* Scene 4 — the written record, and the watch that stays on           */
/* ------------------------------------------------------------------ */
function SceneRecord() {
  const rows = [96, 124, 152, 180];

  return (
    <g className="stage-in">
      {/* The record is a report, deliberately NOT a certificate or a stamp:
          it says what we looked at, and hands the judgment to counsel. */}
      <ellipse cx="152" cy="222" rx="104" ry="5" fill="#0D1B3E" opacity="0.06" />
      <g className="cc-rise">
        <rect x="46" y="34" width="212" height="182" rx="8" fill="#FFFFFF" stroke="#0D1B3E" strokeOpacity="0.16" />
        <path d="M46 42 a8 8 0 0 1 8 -8 h196 a8 8 0 0 1 8 8 v28 h-212 Z" fill="#00D084" />
        <text x="62" y="59" className="font-heading" fontSize="11" fontWeight="800" letterSpacing="1.1" fill="#FFFFFF">
          WHAT WE CHECKED
        </text>

        {rows.map((y, i) => (
          <g key={y} className="cc-tick cc-fx" style={{ animationDelay: `${0.3 + i * 0.14}s` }}>
            <circle cx="68" cy={y} r="7" fill="#00D084" fillOpacity="0.16" />
            <path
              d={`M64.5 ${y} L67 ${y + 2.6} L71.5 ${y - 3}`}
              fill="none"
              stroke="#00D084"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="84" y1={y - 4} x2="238" y2={y - 4} stroke="#0D1B3E" strokeOpacity="0.2" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="84" y1={y + 5} x2={i % 2 ? 198 : 216} y2={y + 5} stroke="#0D1B3E" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}

        {/* the line that hands it off */}
        <line x1="62" y1="200" x2="242" y2="200" stroke="#0D1B3E" strokeOpacity="0.12" />
        <text x="62" y="211" className="font-heading" fontSize="8.5" fontWeight="700" letterSpacing="0.8" fill="#0D1B3E" fillOpacity="0.45">
          FOR YOUR COUNSEL&apos;S REVIEW
        </text>
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

const SCENES = [SceneRules, SceneScan, SceneLabel, SceneRecord];

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
            <SectionLabel text="Ready for review" color="verdant" />
            <h2 className="mt-3 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
              Your disclosure homework, done before you ask.
            </h2>
            <p className="text-lg leading-relaxed text-granite">
              Every state writes its own AI disclosure rules, and keeps rewriting
              them mid-session. Tracking that shouldn&apos;t fall to you &mdash; you
              have doors to knock. Our tracker isn&apos;t public yet; when it is,
              every video goes through these four steps first.
            </p>
            <p className="mt-4 text-sm font-semibold text-verdant">
              It comes with the video, not a separate bill. Built to speed your
              counsel&apos;s review, not replace it.
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
                  An illustration &mdash; not a legal review
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ---------------- The beats ---------------- */}
          <ScrollReveal delay={100}>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate">
                Four steps, every video
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
                  {auto ? "On a loop" : "Paused on your pick"}
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
          <div className="mx-auto mt-12 max-w-[720px] rounded-xl border border-regal-navy/10 bg-dawn-frost px-6 py-5 text-center">
            <p className="text-sm leading-relaxed text-granite">
              <span className="font-semibold text-regal-navy">
                This speeds your review up. It doesn&apos;t stand in for one.
              </span>{" "}
              We build compliance tools and share what our research finds. We don&apos;t give
              legal advice, approve, or certify anything, and we can&apos;t guarantee any video
              meets your jurisdiction&apos;s requirements. Have your counsel review before you
              publish.
            </p>
            <p className="mt-3 text-xs text-slate/80">
              This feature hasn&apos;t shipped yet &mdash; everything above is a preview.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
