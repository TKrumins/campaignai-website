"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BookOpenCheck, ScanLine, BadgeCheck, Radar, RotateCcw } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { ComingSoonSeal } from "@/components/ui/ComingSoonSeal";

/**
 * The clearance pass — a four-beat preview of what our regulation tracker will
 * do to a finished video once it ships. Nothing here reads real law or real
 * state data: the stage is an illustration on a loop, and clicking a beat just
 * parks the illustration on that beat. The rosette says Coming Soon out loud.
 *
 * Replaced the old 50-state picker, which implied a live lookup we do not have.
 */

const BEATS = [
  {
    key: "read",
    icon: BookOpenCheck,
    title: "Read the rules where you run",
    copy: "Disclosure requirements state by state, plus whatever is moving through the session.",
  },
  {
    key: "check",
    icon: ScanLine,
    title: "Check them against your cut",
    copy: "Your finished video gets held up against what those rules actually ask for.",
  },
  {
    key: "label",
    icon: BadgeCheck,
    title: "Build the disclosure in",
    copy: "The label your race calls for is part of the video, not something bolted on after.",
  },
  {
    key: "watch",
    icon: Radar,
    title: "Stamp it, then keep watching",
    copy: "You get a plain-language record of the pass, and we keep an eye out after you post.",
  },
] as const;

const BEAT_MS = 2800;

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

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Scattered brand sparkles — staged greens with a patriot accent. */}
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
        gradient="patriot-deep"
        className="sparkle-twinkle absolute right-[5%] top-28 hidden md:block"
        style={{ ["--dur" as string]: "3.4s" } as CSSProperties}
      />
      <AISparkle
        size={16}
        gradient="civic"
        className="sparkle-twinkle absolute bottom-28 left-[8%] hidden md:block"
        style={{ ["--dur" as string]: "5.2s" } as CSSProperties}
      />
      <AISparkle
        size={13}
        gradient="verdant"
        className="sparkle-twinkle absolute bottom-36 right-[9%] hidden lg:block"
        style={{ ["--dur" as string]: "4.1s" } as CSSProperties}
      />

      <div className="relative mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel text="Cleared to ship" color="verdant" />
            <h2 className="mt-3 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
              Wherever you&apos;re running, your video will ship clean.
            </h2>
            <p className="text-lg leading-relaxed text-granite">
              Our regulation tracker isn&apos;t public yet. Here&apos;s the pass
              your video will make when it is &mdash; four beats, start to stamp.
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
                <svg viewBox="0 0 480 248" className="w-full" role="img" aria-label="Illustration: a video passing a four-step clearance check">
                  <defs>
                    <linearGradient id="cc-card" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0D1B3E" />
                      <stop offset="100%" stopColor="#23407E" />
                    </linearGradient>
                    <linearGradient id="cc-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00D084" />
                      <stop offset="100%" stopColor="#4D9FFF" />
                    </linearGradient>
                    <linearGradient id="cc-scan-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00D084" stopOpacity="0" />
                      <stop offset="50%" stopColor="#A7F3D0" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#00D084" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="cc-card-clip">
                      <rect x="140" y="42" width="300" height="169" rx="12" />
                    </clipPath>
                  </defs>

                  {/* ---- the rulebook stack ---- */}
                  {step === 3 && (
                    <circle
                      key={`watch-${step}`}
                      cx="47"
                      cy="118"
                      r="50"
                      fill="none"
                      stroke="#00D084"
                      strokeWidth="1.5"
                      strokeDasharray="5 7"
                      className="cc-watch cc-fx"
                    />
                  )}
                  <g opacity={step === 0 ? 1 : 0.8} style={{ transition: "opacity 400ms ease" }}>
                    <g transform="rotate(-9 37 126)">
                      <rect x="8" y="88" width="58" height="76" rx="4" fill="#FFFFFF" stroke="#0D1B3E" strokeOpacity="0.14" />
                    </g>
                    <g transform="rotate(-4 43 120)">
                      <rect x="14" y="82" width="58" height="76" rx="4" fill="#FFFFFF" stroke="#0D1B3E" strokeOpacity="0.18" />
                    </g>
                    <g transform="rotate(1.5 49 114)">
                      <rect x="20" y="76" width="58" height="76" rx="4" fill="#FFFFFF" stroke="#0D1B3E" strokeOpacity="0.3" />
                      <rect x="27" y="83" width="18" height="5" rx="2.5" fill="#00D084" />
                      <g stroke="#0D1B3E" strokeOpacity="0.22" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="27" y1="97" x2="71" y2="97" />
                        <line x1="27" y1="106" x2="64" y2="106" />
                        <line x1="27" y1="115" x2="71" y2="115" />
                        <line x1="27" y1="124" x2="55" y2="124" />
                        <line x1="27" y1="133" x2="67" y2="133" />
                      </g>
                    </g>
                  </g>

                  {/* ---- connector into the video ---- */}
                  <g key={`link-${step}`}>
                    <path
                      d="M92 122 C 108 106 120 100 132 108"
                      fill="none"
                      stroke="url(#cc-flow)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="cc-connector"
                    />
                    <path d="M126 99 L138 108 L125 116 Z" fill="#4D9FFF" />
                  </g>

                  {/* ---- the video ---- */}
                  <ellipse cx="290" cy="220" rx="140" ry="6" fill="#0D1B3E" opacity="0.06" />
                  <rect x="140" y="42" width="300" height="169" rx="12" fill="url(#cc-card)" />
                  <rect x="148" y="50" width="284" height="153" rx="8" fill="none" stroke="#E8F4F8" strokeOpacity="0.12" />
                  <circle cx="290" cy="124" r="23" fill="#E8F4F8" fillOpacity="0.9" />
                  <path d="M284 115 L303 124 L284 133 Z" fill="#0D1B3E" />
                  <rect x="156" y="195" width="268" height="3.5" rx="1.75" fill="#E8F4F8" fillOpacity="0.16" />
                  <rect x="156" y="195" width="104" height="3.5" rx="1.75" fill="#4D9FFF" />

                  <g clipPath="url(#cc-card-clip)">
                    {/* scan sweep */}
                    {step === 1 && (
                      <g key={`scan-${step}`} className="cc-scan-line">
                        <rect x="140" y="44" width="300" height="2.5" fill="url(#cc-scan-grad)" />
                        <rect x="140" y="46" width="300" height="28" fill="url(#cc-scan-grad)" opacity="0.12" />
                      </g>
                    )}

                    {/* checkpoints found */}
                    {step >= 1 && (
                      <g key={`ticks-${step}`}>
                        {[
                          [188, 76],
                          [396, 118],
                          [226, 150],
                        ].map(([cx, cy], i) => (
                          <g
                            key={`${cx}-${cy}`}
                            className="cc-tick cc-fx"
                            style={{ animationDelay: `${0.12 * i + 0.1}s` }}
                          >
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
                    )}

                    {/* the disclosure label, built in */}
                    {step >= 2 && (
                      <g key={`chip-${step}`} className="cc-rise">
                        <rect x="156" y="164" width="116" height="22" rx="5" fill="#00D084" fillOpacity="0.95" />
                        <path
                          d="M165 175 L168 178.6 L174.5 171.4"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <text x="182" y="179" className="font-heading" fontSize="9.5" fontWeight="800" letterSpacing="1" fill="#FFFFFF">
                          AI-DISCLOSED
                        </text>
                      </g>
                    )}

                    {/* the stamp */}
                    {step === 3 && (
                      <g key={`stamp-${step}`} transform="translate(356 172)">
                        <g className="cc-stamp cc-fx">
                          <rect x="-46" y="-17" width="92" height="34" rx="3" fill="#FFFFFF" fillOpacity="0.96" stroke="#00D084" strokeWidth="2" />
                          <rect x="-41.5" y="-12.5" width="83" height="25" rx="2" fill="none" stroke="#00D084" strokeOpacity="0.65" strokeWidth="0.9" />
                          <text x="0" y="4" textAnchor="middle" className="font-heading" fontSize="11.5" fontWeight="800" letterSpacing="1.8" fill="#0B7A56">
                            CLEARED
                          </text>
                        </g>
                      </g>
                    )}
                  </g>
                </svg>

                {/* live-region-free caption; the beat list carries the meaning */}
                <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wider text-slate/70">
                  Illustration only &mdash; nothing here is a live legal check
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ---------------- The beats ---------------- */}
          <ScrollReveal delay={100}>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate">
                The pass, beat by beat
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
            A preview of a feature we haven&apos;t released yet. CampaignAI provides compliance
            tools and guidance, not legal advice &mdash; when in doubt, consult your
            campaign&apos;s legal counsel.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
