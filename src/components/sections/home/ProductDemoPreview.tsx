"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties, ComponentType } from "react";
import { Megaphone, HandCoins, FileText, Vote, Play, Check, Zap, Camera, Lock, Globe, Share2, Users, MapPin, Scale, ChevronsRight } from "lucide-react";
import { AISparkle } from "@/components/ui/AISparkle";
import { StatusBadge } from "@/components/ui/StatusBadge";

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
      "The feeling of hitting launch day with a film ready to go. One piece that anchors your website, powers your first social push, and opens the room at your kickoff — so you arrive looking every bit the campaign you are.",
    deliver: [],
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
    deliver: [],
    spark: "#4D9FFF",
    video: null,
  },
  {
    key: "policy",
    title: "Policy Explainer",
    icon: FileText,
    tagline: "A complex position, made plain.",
    blurb:
      "Build a video library detailing your platform. Actionable, evergreen content that makes complex positions plain — ready to use again and again across your race.",
    deliver: [],
    spark: "#8E5CF7",
    video: null,
  },
  {
    key: "gotv",
    title: "Get Out The Vote",
    icon: Vote,
    tagline: "A final-weekend turnout push.",
    blurb:
      "High-energy calls to action for the closing stretch, built to convert enthusiasm into turnout.",
    deliver: [],
    spark: "#E8F4F8",
    video: null,
  },
  {
    key: "rapid",
    title: "Rapid Response",
    icon: Zap,
    variant: "support",
    statusLabel: "On the roadmap",
    tagline: "When news breaks.",
    blurb:
      "A quick-turn video you drop between your core films to answer an attack, seize a headline, or set the record straight.",
    deliver: [],
    spark: "#FF3366",
    video: null,
  },
  {
    key: "contrast",
    title: "Contrast Ad",
    icon: Scale,
    variant: "support",
    statusLabel: "On the roadmap",
    tagline: "You vs. the alternative.",
    blurb:
      "A side-by-side that draws the clear line between your record and your opponent's — sharp, factual, and squarely on message.",
    deliver: [],
    spark: "#4D9FFF",
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
  // Open on Announcement (the arc's first beat). Once the visitor reaches the
  // section, auto-rotate through the four core types every 5s (crossfading) so it
  // previews the whole product on its own. The moment they pick a type, the
  // rotation stops for good — they're driving now — until the page is refreshed.
  const [active, setActive] = useState(0);
  const [userPicked, setUserPicked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const t = TYPES[active];

  // Only start the rotation once the visitor actually reaches the section.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (userPicked || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Mobile (below lg, the swipe-strip layout): do NOT auto-rotate — the visitor
    // drives it by swiping/tapping. Auto-rotate only on the desktop column.
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const at = CORE_INDICES.indexOf(prev);
        return CORE_INDICES[(at + 1) % CORE_INDICES.length];
      });
    }, 5000);
    return () => clearInterval(id);
  }, [userPicked, inView]);

  function select(i: number) {
    setActive(i);
    setPlaying(false);
    setUserPicked(true);
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-dawn-frost">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {internal && (
          <div className="mb-8 rounded-xl border border-bridge-violet/30 bg-bridge-violet/5 px-5 py-3 text-center text-sm text-regal-navy">
            <span className="font-semibold">Internal preview.</span> This is the live
            homepage Product section, rendered in isolation.
          </div>
        )}

        <div className="text-center max-w-[760px] mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
            Your campaign is bigger than one video. Tell the full story.
          </h2>
          <p className="text-granite text-lg leading-[1.7]">
            Create the video you need when you need it. Fast intake. 48-hour
            delivery. Centered around YOU.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-regal-navy/5 px-4 py-2 text-sm font-medium text-regal-navy">
            <Check className="h-4 w-4 shrink-0 text-verdant" />
            Every video ships with human editorial review and full ownership. No watermark.
          </p>
        </div>

        {/* Mobile swipe cue — the strip auto-rotation is off on phones, so nudge
            the visitor to swipe. Fades once they pick a type. */}
        {!userPicked && (
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold text-slate lg:hidden">
            <AISparkle size={12} color="#FF3366" glow className="sparkle-twinkle" style={{ ["--dur"]: "2.2s" } as CSSProperties} />
            Swipe to explore each type
            <ChevronsRight className="h-4 w-4 animate-pulse text-freedom-blue" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
          {/* left: selectable type list. On mobile it freezes as a compact
              sticky bar under the nav so the four types stay tappable while the
              stage scrolls; it releases at the bottom of this block. On desktop
              it's the vertical column beside the stage. */}
          {/* Mobile: the top nav has already slid to the bottom by the time
              this section is reached, so the sticky bar only needs to clear the
              announcement ticker. Desktop keeps the full nav-height offset. */}
          <div className="sticky top-[calc(var(--announce-h,0px)+0.75rem)] z-30 mb-3 -mx-4 flex snap-x gap-2 overflow-x-auto bg-dawn-frost/95 px-4 py-2 backdrop-blur [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:top-[calc(var(--announce-h,0px)+7rem)] lg:mx-0 lg:mb-0 lg:flex-col lg:gap-3 lg:self-start lg:z-auto lg:snap-none lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
            {TYPES.map(({ key, title, icon: Icon, tagline, variant, statusLabel }, i) => {
              const on = i === active;
              const support = variant === "support";
              // The two roadmap formats carry the branded orange status tag; the
              // "your own footage" candid format stays neutral.
              const roadmap = key === "rapid" || key === "contrast";
              const firstSupport = support && TYPES[i - 1]?.variant !== "support";
              return (
                <Fragment key={key}>
                  {firstSupport && (
                    <>
                      {/* Mobile strip: a slim vertical rule separates the core films
                          from the supporting formats. Desktop column: the label. */}
                      <span aria-hidden className="mx-1 h-9 w-px shrink-0 self-center bg-gray-200 lg:hidden" />
                      <p className="hidden items-center gap-1.5 px-1 text-[10px] font-bold uppercase tracking-wider text-[#C2410C] lg:mt-3 lg:flex lg:border-t lg:border-gray-200 lg:pt-3">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-alert-amber" />
                        On the Roadmap
                      </p>
                    </>
                  )}
                  <button
                    onClick={() => select(i)}
                    aria-pressed={on}
                    className={`shrink-0 snap-start text-left rounded-xl border p-2 transition-all lg:p-4 ${
                      on
                        ? "bg-regal-navy border-regal-navy shadow-lg"
                        : support
                          ? "border-dashed border-gray-300 bg-white/60 hover:border-freedom-blue/50 hover:shadow"
                          : "bg-white border-gray-200 hover:border-freedom-blue/50 hover:shadow"
                    }`}
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg lg:h-10 lg:w-10 ${
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
                            className={`mt-0.5 inline-flex items-center gap-1 rounded-full px-1.5 py-px text-[9px] font-bold uppercase tracking-wider lg:text-[10px] ${
                              roadmap
                                ? on
                                  ? "bg-alert-amber/25 text-alert-amber"
                                  : "bg-alert-amber/15 text-[#C2410C] ring-1 ring-alert-amber/30"
                                : on
                                  ? "bg-white/15 text-beacon-white/80"
                                  : "bg-regal-navy/5 text-slate"
                            }`}
                          >
                            {roadmap && <span aria-hidden className="h-1 w-1 rounded-full bg-alert-amber" />}
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
              <div key={active} className="stage-in h-full w-full">
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
            </div>

            <div className="mt-6">
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-heading font-bold text-2xl text-regal-navy">{t.title}</h3>
                {t.variant === "support" && t.statusLabel && (
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                      t.key === "rapid" || t.key === "contrast"
                        ? "bg-alert-amber/15 text-[#C2410C] ring-1 ring-alert-amber/30"
                        : "bg-bridge-violet/10 text-bridge-violet"
                    }`}
                  >
                    {(t.key === "rapid" || t.key === "contrast") && (
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-alert-amber" />
                    )}
                    {t.statusLabel}
                  </span>
                )}
              </div>
              <p className="text-granite leading-relaxed mb-5">{t.blurb}</p>

              {t.variant === "support" ? (
                <SupportDetail typeKey={t.key} />
              ) : (
                <>
                  {/* per-type experiential spotlight (replaces the old spec bullets) */}
                  {t.key === "announce" && <AnnouncementSpotlight />}
                  {t.key === "fund" && <MilestoneSpotlight />}
                  {t.key === "policy" && <LibrarySpotlight />}
                  {t.key === "gotv" && <GOTVSpotlight />}
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/** Explainer stage shown for the supporting formats (no demo film). */
function SupportStage({ typeKey }: { typeKey: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(135deg,#0D1B3E_0%,#16234d_100%)]">
      {/* Rapid Response + Contrast Ad are the two roadmap formats — stamped
          "Coming Fall 2026". Authentic & Candid is your own footage (available
          now), so it carries no coming-soon stamp. */}
      {typeKey !== "candid" && (
        <StatusBadge label="Coming Fall 2026" tone="dark" className="absolute right-3 top-3 z-10" />
      )}
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
        ) : typeKey === "contrast" ? (
          <>
            {/* two sides, side by side — you vs the alternative */}
            <rect x="26" y="42" width="120" height="96" rx="10" fill="#4D9FFF" opacity="0.12" stroke="#4D9FFF" strokeWidth="1.5" />
            <rect x="174" y="42" width="120" height="96" rx="10" fill="#64748b" opacity="0.10" stroke="#64748b" strokeWidth="1.5" />
            {/* your side — rising bars + up mark */}
            <g>
              <rect x="48" y="104" width="15" height="26" rx="2" fill="#4D9FFF" className="ga-draw" />
              <rect x="70" y="90" width="15" height="40" rx="2" fill="#7AB8FF" className="ga-draw" style={{ animationDelay: "0.2s" } as CSSProperties} />
              <rect x="92" y="74" width="15" height="56" rx="2" fill="#4D9FFF" className="ga-draw" style={{ animationDelay: "0.4s" } as CSSProperties} />
            </g>
            <path d="M60 66 l8 -10 8 10 z" fill="#7AB8FF" className="ga-glow" />
            {/* their side — short, flat bars */}
            <g opacity="0.75">
              <rect x="196" y="116" width="15" height="14" rx="2" fill="#94a3b8" />
              <rect x="218" y="112" width="15" height="18" rx="2" fill="#94a3b8" />
              <rect x="240" y="118" width="15" height="12" rx="2" fill="#94a3b8" />
            </g>
            {/* center VS badge */}
            <circle cx="160" cy="90" r="17" fill="#0D1B3E" stroke="#FF3366" strokeWidth="2" />
            <text x="160" y="94" textAnchor="middle" fontSize="11" fontFamily="sans-serif" fontWeight="bold" fill="#FF6B8F">VS</text>
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
        color={typeKey === "rapid" ? "#FF3366" : typeKey === "contrast" ? "#4D9FFF" : "#8E5CF7"}
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
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C2410C]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-alert-amber" />
            On the roadmap
          </span>
        </div>
      </div>
    );
  }
  if (typeKey === "contrast") {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-regal-navy">
          <Scale className="h-4 w-4 text-freedom-blue" />
          A clear, factual side-by-side
        </p>
        <p className="mb-4 text-sm leading-relaxed text-granite">
          Contrast ads draw the line between your record and the alternative &mdash; always
          factual, always on message, and reviewed by a human before anything ships. A sharp way
          to frame the choice for voters when the race tightens.
        </p>
        {/* subtle graphic: your record vs the alternative */}
        <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-stretch gap-3">
          <div className="rounded-lg bg-freedom-blue/[0.08] p-3 ring-1 ring-freedom-blue/20">
            <p className="text-[10px] font-bold uppercase tracking-wider text-freedom-blue">Your record</p>
            <div className="mt-2 flex items-end gap-1.5">
              {[16, 26, 36].map((h, i) => (
                <span key={i} className="w-3 rounded-sm bg-freedom-blue/70" style={{ height: h }} />
              ))}
            </div>
          </div>
          <span className="flex items-center text-xs font-bold text-liberty-crimson">VS</span>
          <div className="rounded-lg bg-slate/10 p-3 ring-1 ring-slate/20">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate">The alternative</p>
            <div className="mt-2 flex items-end gap-1.5">
              {[14, 12, 16].map((h, i) => (
                <span key={i} className="w-3 rounded-sm bg-slate/40" style={{ height: h }} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-regal-navy/5">
            <div className="h-full w-1/3 rounded-full multipartisan-gradient" />
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C2410C]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-alert-amber" />
            On the roadmap
          </span>
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

function AnnouncementSpotlight() {
  const rows = [
    { icon: Globe, label: "Anchors your campaign website" },
    { icon: Share2, label: "Powers your first social push" },
    { icon: Users, label: "Opens the room at rallies & fundraisers" },
  ];
  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
      <p className="mb-4 text-sm font-semibold text-regal-navy">
        One launch film, working everywhere at once
      </p>
      <div className="flex items-center gap-4">
        {/* the film */}
        <div className="shrink-0 text-center">
          <div className="grid h-16 w-24 place-items-center rounded-lg bg-regal-navy">
            <Play className="ml-0.5 h-5 w-5 fill-beacon-white text-beacon-white" />
          </div>
          <p className="mt-1.5 text-[10px] font-semibold text-slate">Your launch film</p>
        </div>
        <span className="font-heading text-xl font-bold text-regal-navy">&rarr;</span>
        {/* destinations it feeds */}
        <div className="min-w-0 flex-1 space-y-2">
          {rows.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 rounded-lg bg-dawn-frost px-3 py-2">
              <Icon className="h-4 w-4 shrink-0 text-freedom-blue" />
              <span className="text-xs font-medium text-regal-navy">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GOTVSpotlight() {
  const channels = [
    { icon: Share2, label: "Social & text blasts" },
    { icon: Users, label: "Volunteer group chats" },
    { icon: MapPin, label: "Door-to-door reminders" },
    { icon: Vote, label: "Polls-open, day-of push" },
  ];
  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
      <p className="mb-4 text-sm font-semibold text-regal-navy">
        Deploy your closing message everywhere it lands
      </p>
      <div className="grid grid-cols-2 gap-2">
        {channels.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 rounded-lg bg-dawn-frost px-3 py-2">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white ring-1 ring-black/5">
              <Icon className="h-3.5 w-3.5 text-freedom-blue" />
            </span>
            <span className="text-xs font-medium leading-tight text-regal-navy">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="h-[2px] flex-1 rounded-full bg-gradient-to-r from-liberty-crimson via-bridge-violet to-freedom-blue" />
        <span className="inline-flex items-center rounded-full bg-regal-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-beacon-white">
          Election Day
        </span>
      </div>
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
