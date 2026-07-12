"use client";

import { Fragment, useEffect, useState } from "react";
import type { CSSProperties, ComponentType } from "react";
import Link from "next/link";
import { Megaphone, HandCoins, FileText, Vote, Play, Check, Zap, Camera, Lock, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { LogoMarkBulletList } from "@/components/ui/LogoMarkBulletList";
import { VIDEO_RESILIENCY_ACT } from "@/lib/constants";

type VideoType = {
  key: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  tagline: string;
  blurb: string;
  deliver: string[];
  spark: string;
  video: { src: string; poster: string; label: string } | null;
  // "core" = one of the four films we produce; "support" = a format that lives
  // alongside the core films but works differently (coming soon, or your own
  // footage). Support types are selectable but sit apart in the picker and show
  // an explainer stage instead of a demo film.
  variant?: "core" | "support";
  statusLabel?: string;
};

// Four core video types plus two supporting formats. Policy Explainers is wired
// to a real dogfooded film; the rest are placeholders until sample films exist.
const TYPES: VideoType[] = [
  {
    key: "announce",
    title: "Announcement",
    icon: Megaphone,
    tagline: "Launch day, ready to post.",
    blurb:
      "Your first impression with voters. Who you are, what you stand for, and why you are running now.",
    deliver: [
      "A launch-ready 60-second film",
      "15- and 30-second cutdowns for every platform",
      "Vertical, square, and widescreen formats",
      "State-specific AI disclosure label",
    ],
    spark: "#FF3366",
    video: null,
  },
  {
    key: "fund",
    title: "Fundraising Appeal",
    icon: HandCoins,
    tagline: "An ask that actually converts.",
    blurb:
      "Authentic asks built around urgency, personal connection, and a clear call to give before the deadline.",
    deliver: [
      "A deadline-driven appeal built to convert",
      "Donation-page and email-ready cuts",
      "A/B variants for subject and hook testing",
      "State-specific AI disclosure label",
    ],
    spark: "#4D9FFF",
    video: null,
  },
  {
    key: "policy",
    title: "Policy Explainer",
    icon: FileText,
    tagline: "A complex position, made plain.",
    blurb:
      "Complex positions in 60 seconds. Clear narration, data visuals, and formatting built to be shared.",
    deliver: [
      "Your position explained in 60 seconds",
      "Clean data visuals and on-screen callouts",
      "Shareable cuts for every platform",
      "State-specific AI disclosure label",
    ],
    spark: "#8E5CF7",
    video: {
      src: VIDEO_RESILIENCY_ACT,
      poster: "/assets/videos/posters/the-resiliency-act.jpg",
      label: "The Resiliency Act",
    },
  },
  {
    key: "gotv",
    title: "Get Out The Vote",
    icon: Vote,
    tagline: "A final-weekend turnout push.",
    blurb:
      "High-energy calls to action for the closing stretch, built to convert enthusiasm into turnout.",
    deliver: [
      "A closing-stretch turnout film",
      "Same-day and get-to-the-polls cuts",
      "Location and deadline personalization",
      "State-specific AI disclosure label",
    ],
    spark: "#E8F4F8",
    video: null,
  },
  {
    key: "rapid",
    title: "Rapid Response",
    icon: Zap,
    variant: "support",
    statusLabel: "Coming soon",
    tagline: "When news breaks.",
    blurb:
      "A quick-turn video you drop between your core films to answer an attack, seize a headline, or set the record straight.",
    deliver: [],
    spark: "#FF3366",
    video: null,
  },
  {
    key: "candid",
    title: "Authentic & Candid",
    icon: Camera,
    variant: "support",
    statusLabel: "Your own footage",
    tagline: "Straight from the trail.",
    blurb:
      "The raw, from-the-trail clips you film yourself and post straight to social — no studio, no tools. A real part of your story, so we make room for it alongside the polished films.",
    deliver: [],
    spark: "#8E5CF7",
    video: null,
  },
];

// Only the four core films auto-rotate; the two supporting formats are
// selectable but sit out of the cycle.
const CORE_INDICES = TYPES.map((t, i) => (t.variant === "support" ? -1 : i)).filter((i) => i >= 0);

// Ambient Red / White / Blue AI sparkles set around the stage (home-hero
// language). Some sit just off the edges (negative / >100 offsets) so they
// frame the video rather than cover it.
const STAGE_SPARKS = [
  { l: -3, t: 7, c: "#FF3366", s: 18 },
  { l: 96, t: -4, c: "#4D9FFF", s: 15 },
  { l: 101, t: 46, c: "#E8F4F8", s: 13 },
  { l: -4, t: 64, c: "#4D9FFF", s: 16 },
  { l: 90, t: 93, c: "#FF3366", s: 14 },
  { l: 34, t: -5, c: "#E8F4F8", s: 12 },
];

/**
 * The Product section. Promoted to the live homepage 2026-07-10, replacing the
 * static ProductSection grid.
 *
 * `internal` shows the preview banner and is set only by the hidden
 * /preview/product route. The homepage must never render it.
 */
export function ProductDemoPreview({ internal = false }: { internal?: boolean }) {
  // Open on Announcement (the arc's first beat) and auto-rotate through the four
  // core types every 4s so the section previews the whole product on its own.
  // The moment a visitor picks a type, the rotation stops for good — they're
  // driving now — until the page is refreshed.
  const [active, setActive] = useState(0);
  const [userPicked, setUserPicked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const t = TYPES[active];

  useEffect(() => {
    if (userPicked) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const at = CORE_INDICES.indexOf(prev);
        return CORE_INDICES[(at + 1) % CORE_INDICES.length];
      });
    }, 4000);
    return () => clearInterval(id);
  }, [userPicked]);

  function select(i: number) {
    setActive(i);
    setPlaying(false);
    setUserPicked(true);
  }

  return (
    <section className="py-16 md:py-24 bg-dawn-frost">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {internal && (
          <div className="mb-8 rounded-xl border border-bridge-violet/30 bg-bridge-violet/5 px-5 py-3 text-center text-sm text-regal-navy">
            <span className="font-semibold">Internal preview.</span> This is the live
            homepage Product section, rendered in isolation.
          </div>
        )}

        <div className="text-center max-w-[760px] mx-auto mb-12">
          <SectionLabel text="The Product" />
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
            One product. Every video your campaign runs.
          </h2>
          <p className="text-granite text-lg leading-[1.7]">
            Watch each type in action, or jump to the one you need. Same
            story-first process, same 48-hour delivery, whatever the moment
            calls for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
          {/* left: selectable type list. On mobile it freezes as a compact
              sticky bar under the nav so the four types stay tappable while the
              stage scrolls; it releases at the bottom of this block. On desktop
              it's the vertical column beside the stage. */}
          {/* Mobile: the top nav has already slid to the bottom by the time
              this section is reached, so the sticky bar only needs to clear the
              announcement ticker. Desktop keeps the full nav-height offset. */}
          <div className="sticky top-[calc(var(--announce-h,0px)+0.75rem)] z-30 mb-3 grid grid-cols-2 gap-2 rounded-xl bg-dawn-frost/95 py-2 backdrop-blur sm:grid-cols-4 lg:top-[calc(var(--announce-h,0px)+7rem)] lg:self-start lg:z-auto lg:mb-0 lg:flex lg:flex-col lg:gap-3 lg:rounded-none lg:bg-transparent lg:py-0 lg:backdrop-blur-none">
            {TYPES.map(({ key, title, icon: Icon, tagline, variant, statusLabel }, i) => {
              const on = i === active;
              const support = variant === "support";
              const firstSupport = support && TYPES[i - 1]?.variant !== "support";
              return (
                <Fragment key={key}>
                  {firstSupport && (
                    <p className="col-span-2 mt-1 px-1 text-[10px] font-bold uppercase tracking-wider text-slate sm:col-span-4 lg:col-span-1 lg:mt-3 lg:border-t lg:border-gray-200 lg:pt-3">
                      Also part of the mix
                    </p>
                  )}
                  <button
                    onClick={() => select(i)}
                    aria-pressed={on}
                    className={`text-left rounded-xl border p-2.5 transition-all lg:p-4 ${
                      on
                        ? "bg-regal-navy border-regal-navy shadow-lg"
                        : support
                          ? "border-dashed border-gray-300 bg-white/60 hover:border-freedom-blue/50 hover:shadow"
                          : "bg-white border-gray-200 hover:border-freedom-blue/50 hover:shadow"
                    }`}
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg lg:h-10 lg:w-10 ${
                          on ? "bg-white/10" : "bg-regal-navy/5"
                        }`}
                      >
                        <Icon className={`h-4 w-4 lg:h-5 lg:w-5 ${on ? "text-beacon-white" : "text-regal-navy"}`} />
                      </span>
                      <div className="min-w-0">
                        <p className={`font-heading font-bold text-sm leading-tight lg:text-base ${on ? "text-beacon-white" : "text-regal-navy"}`}>
                          {title}
                        </p>
                        {support && statusLabel ? (
                          <span
                            className={`mt-0.5 inline-block rounded-full px-1.5 py-px text-[9px] font-bold uppercase tracking-wider lg:text-[10px] ${
                              on ? "bg-white/15 text-beacon-white/80" : "bg-regal-navy/5 text-slate"
                            }`}
                          >
                            {statusLabel}
                          </span>
                        ) : (
                          <p className={`hidden text-xs lg:block ${on ? "text-beacon-white/70" : "text-slate"}`}>
                            {tagline}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                </Fragment>
              );
            })}
          </div>

          {/* right: stage + detail */}
          <div>
            <div className="relative">
              {/* ambient AI sparkles framing the stage — home-hero language */}
              {STAGE_SPARKS.map((p, i) => (
                <AISparkle
                  key={i}
                  size={p.s}
                  color={p.c}
                  glow
                  className="sparkle-twinkle absolute z-20"
                  style={{ left: `${p.l}%`, top: `${p.t}%`, ["--dur"]: `${2.6 + (i % 3) * 0.5}s`, animationDelay: `${i * 0.35}s` } as CSSProperties}
                />
              ))}
              <div className="relative z-10 aspect-video w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 bg-regal-navy">
              {t.video && playing ? (
                <video
                  src={t.video.src}
                  poster={t.video.poster}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              ) : t.video ? (
                <button
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 h-full w-full"
                  aria-label={`Play ${t.video.label}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.video.poster} alt={t.video.label} className="h-full w-full object-cover" />
                  <span className="absolute inset-0 bg-regal-navy/25 transition-colors group-hover:bg-regal-navy/10" />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-beacon-white/90 shadow-lg transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7 fill-regal-navy text-regal-navy" />
                  </span>
                  <span className="absolute bottom-3 left-4 rounded-full bg-regal-navy/70 px-3 py-1 text-xs font-semibold text-beacon-white">
                    {t.video.label} &middot; real film
                  </span>
                </button>
              ) : t.variant === "support" ? (
                <SupportStage typeKey={t.key} />
              ) : (
                <PlaceholderStage title={t.title} spark={t.spark} />
              )}
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-heading font-bold text-2xl text-regal-navy">{t.title}</h3>
                {t.variant === "support" && t.statusLabel && (
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                      t.key === "rapid"
                        ? "bg-liberty-crimson/10 text-liberty-crimson"
                        : "bg-bridge-violet/10 text-bridge-violet"
                    }`}
                  >
                    {t.statusLabel}
                  </span>
                )}
              </div>
              <p className="text-granite leading-relaxed mb-5">{t.blurb}</p>

              {t.variant === "support" ? (
                <SupportDetail typeKey={t.key} />
              ) : (
                <>
                  <LogoMarkBulletList items={t.deliver} />

                  {/* per-type capability spotlight */}
                  {t.key === "fund" && <MilestoneSpotlight />}
                  {t.key === "policy" && <LibrarySpotlight />}

                  <p className="mt-5 text-sm text-slate">
                    <Check className="mr-1 inline h-4 w-4 text-verdant" />
                    Every type ships with a human editorial review and full ownership. No watermark.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Campaign arc — teased here; the full animated calendar lives on the
            Video Production Process page so the home page stays lighter. */}
        <div className="mt-16 text-center">
          <SectionLabel text="The Campaign Arc" />
          <h3 className="mx-auto mt-3 max-w-[640px] font-heading text-2xl font-extrabold tracking-[-0.5px] text-regal-navy md:text-3xl">
            A campaign is a series of stories, told in new and exciting ways.
          </h3>
          <p className="mx-auto mt-3 max-w-[620px] text-granite leading-relaxed">
            Every video is a chapter — your launch, your asks, the policies you
            fight for, the candid moments, the closing push. No single film is
            your campaign. Told together, over a race, they are.
          </p>
          <Link
            href="/how-it-works#campaign-arc"
            className="mt-5 inline-flex items-center gap-1.5 font-semibold text-freedom-blue hover:underline"
          >
            See how they play out across a campaign
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Explainer stage shown for the two supporting formats (no demo film). */
function SupportStage({ typeKey }: { typeKey: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(135deg,#0D1B3E_0%,#16234d_100%)]">
      <svg viewBox="0 0 320 180" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {typeKey === "rapid" ? (
          <>
            {/* a signal pinging out — news breaking, answered fast */}
            {[0, 1, 2].map((i) => (
              <circle
                key={i}
                cx="160"
                cy="92"
                r={22 + i * 22}
                fill="none"
                stroke="#FF3366"
                strokeWidth="2"
                opacity={0.5 - i * 0.12}
                className="ga-glow"
                style={{ animationDelay: `${i * 0.4}s` } as CSSProperties}
              />
            ))}
            <circle cx="160" cy="92" r="12" fill="#FF3366" className="ga-blink" />
            <path d="M156 86 h8 l-5 8 h6 l-11 14 3 -12 h-6 z" fill="#fff" />
            {/* incoming headline ticker */}
            <rect x="34" y="150" width="252" height="14" rx="4" fill="#ffffff" opacity="0.08" />
            <rect x="42" y="155" width="120" height="4" rx="2" fill="#FF6B8F" className="ga-draw" />
            <rect x="170" y="155" width="80" height="4" rx="2" fill="#7AB8FF" opacity="0.6" />
          </>
        ) : (
          <>
            {/* a hand-held phone capturing a candid moment */}
            <g transform="rotate(-8 160 92)">
              <rect x="128" y="40" width="64" height="112" rx="12" fill="#0b1633" stroke="#8E5CF7" strokeWidth="2.5" />
              <rect x="134" y="52" width="52" height="80" rx="6" fill="url(#candidScreen)" />
              <circle cx="160" cy="142" r="4" fill="#8E5CF7" opacity="0.7" />
              <g className="ga-glow">
                <circle cx="160" cy="90" r="13" fill="#ffffff" opacity="0.85" />
                <path d="M156 84 v12 l10 -6 z" fill="#0D1B3E" />
              </g>
            </g>
            <defs>
              <linearGradient id="candidScreen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#B94FC4" stopOpacity="0.55" />
                <stop offset="1" stopColor="#4D9FFF" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <text x="160" y="168" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.65" fontWeight="bold">
              Filmed by you · shared straight to social
            </text>
          </>
        )}
      </svg>
      <AISparkle
        size={20}
        color={typeKey === "rapid" ? "#FF3366" : "#8E5CF7"}
        glow
        className="sparkle-twinkle absolute left-[16%] top-[20%]"
        style={{ ["--dur"]: "3s" } as CSSProperties}
      />
      <AISparkle
        size={14}
        color="#E8F4F8"
        glow
        className="sparkle-twinkle absolute right-[18%] bottom-[26%]"
        style={{ ["--dur"]: "2.4s" } as CSSProperties}
      />
    </div>
  );
}

/** Below-stage explainer for the supporting formats. */
function SupportDetail({ typeKey }: { typeKey: string }) {
  if (typeKey === "rapid") {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-regal-navy">
          <Lock className="h-4 w-4 text-liberty-crimson" />
          Turns on as your library grows
        </p>
        <p className="mb-4 text-sm leading-relaxed text-granite">
          Rapid response will be a self-serve capability. Once your campaign has produced a
          handful of videos, we have enough of your voice and story for the tool to draft an
          on-message reply at news speed — so it unlocks then, not on day one.
        </p>
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-regal-navy/5">
            <div className="h-full w-2/5 rounded-full multipartisan-gradient" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate">Coming soon</span>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-regal-navy">
        <Camera className="h-4 w-4 text-bridge-violet" />
        This is footage you already have
      </p>
      <p className="text-sm leading-relaxed text-granite">
        Candid clips aren&apos;t something we produce — they&apos;re yours, filmed on your phone
        and posted as they happen. We call it out here because it&apos;s a real part of the mix
        that keeps your polished films feeling human.
      </p>
      <p className="mt-3 text-xs text-slate">
        On the roadmap: simple trimming and captions so your own clips are quick to post.
      </p>
    </div>
  );
}

function MilestoneSpotlight() {
  const marks = ["Launch", "Q2 deadline", "Debate night", "GOTV week"];
  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
      <p className="mb-4 text-sm font-semibold text-regal-navy">
        Tie each appeal to the moment that drives giving
      </p>
      <div className="relative flex items-center justify-between">
        <span className="absolute left-0 right-0 top-[7px] h-[2px] bg-gradient-to-r from-liberty-crimson via-bridge-violet to-freedom-blue" />
        {marks.map((m, i) => (
          <div key={m} className="relative z-10 flex flex-1 flex-col items-center text-center">
            <span className="h-4 w-4 rounded-full border-2 border-white bg-regal-navy shadow" />
            <span className="mt-2 text-[11px] font-medium text-granite">{m}</span>
            {i < marks.length - 1 && (
              <span className="mt-1 text-[10px] text-slate">appeal</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LibrarySpotlight() {
  const shots = [
    "/assets/videos/posters/the-resiliency-act.jpg",
    "/assets/videos/posters/shasm-act.jpg",
    "/assets/videos/posters/the-resiliency-act-2.jpg",
    "/assets/videos/posters/shasm-act-2.jpg",
  ];
  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
      <p className="mb-4 text-sm font-semibold text-regal-navy">
        Build a video library your campaign website can host
      </p>
      <div className="grid grid-cols-4 gap-2">
        {shots.map((src) => (
          <div key={src} className="relative aspect-video overflow-hidden rounded-md ring-1 ring-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-beacon-white/85">
                <Play className="ml-0.5 h-2.5 w-2.5 fill-regal-navy text-regal-navy" />
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderStage({ title, spark }: { title: string; spark: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(135deg,#0D1B3E_0%,#16234d_100%)]">
      {/* film-frame perforations */}
      <div className="absolute inset-y-0 left-0 flex w-6 flex-col justify-around">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-auto h-3 w-3 rounded-sm bg-white/10" />
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 flex w-6 flex-col justify-around">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-auto h-3 w-3 rounded-sm bg-white/10" />
        ))}
      </div>
      <AISparkle
        size={22}
        color={spark}
        glow
        className="sparkle-twinkle absolute left-[22%] top-[24%]"
        style={{ ["--dur"]: "3s" } as CSSProperties}
      />
      <AISparkle
        size={16}
        color="#E8F4F8"
        glow
        className="sparkle-twinkle absolute right-[26%] bottom-[28%]"
        style={{ ["--dur"]: "2.4s" } as CSSProperties}
      />
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
        <Play className="ml-1 h-7 w-7 fill-beacon-white text-beacon-white" />
      </span>
      <p className="mt-4 font-heading font-bold text-lg text-beacon-white">{title}</p>
      <p className="text-sm text-beacon-white/60">Demo film in production</p>
    </div>
  );
}
