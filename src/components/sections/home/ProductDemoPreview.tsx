"use client";

import { useState } from "react";
import type { CSSProperties, ComponentType } from "react";
import { Megaphone, HandCoins, FileText, Vote, Play, Check, Zap, Camera } from "lucide-react";
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
};

// Four core video types. Policy Explainers is wired to a real dogfooded film;
// the rest are placeholders until sample films are produced.
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
];

/**
 * The Product section. Promoted to the live homepage 2026-07-10, replacing the
 * static ProductSection grid.
 *
 * `internal` shows the preview banner and is set only by the hidden
 * /preview/product route. The homepage must never render it.
 */
export function ProductDemoPreview({ internal = false }: { internal?: boolean }) {
  // Open on a type that has a real film rather than on TYPES[0] (Announcement),
  // whose stage reads "Demo film in production" — a bad first impression for a
  // section whose job is to prove the product exists. Once every type has a
  // sample this collapses back to 0 on its own and the arc order is restored.
  const [active, setActive] = useState(() => {
    const i = TYPES.findIndex((t) => t.video);
    return i === -1 ? 0 : i;
  });
  const [playing, setPlaying] = useState(false);
  const t = TYPES[active];

  function select(i: number) {
    setActive(i);
    setPlaying(false);
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
            Pick a type to see it in action. Same story-first process, same
            48-hour delivery, whatever the moment calls for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
          {/* left: selectable type list */}
          <div className="flex flex-col gap-3">
            {TYPES.map(({ key, title, icon: Icon, tagline }, i) => {
              const on = i === active;
              return (
                <button
                  key={key}
                  onClick={() => select(i)}
                  aria-pressed={on}
                  className={`text-left rounded-xl border p-4 transition-all ${
                    on
                      ? "bg-regal-navy border-regal-navy shadow-lg"
                      : "bg-white border-gray-200 hover:border-freedom-blue/50 hover:shadow"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        on ? "bg-white/10" : "bg-regal-navy/5"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${on ? "text-beacon-white" : "text-regal-navy"}`} />
                    </span>
                    <div>
                      <p className={`font-heading font-bold ${on ? "text-beacon-white" : "text-regal-navy"}`}>
                        {title}
                      </p>
                      <p className={`text-xs ${on ? "text-beacon-white/70" : "text-slate"}`}>
                        {tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* right: stage + detail */}
          <div>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 bg-regal-navy">
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
              ) : (
                <PlaceholderStage title={t.title} spark={t.spark} />
              )}
            </div>

            <div className="mt-6">
              <h3 className="font-heading font-bold text-2xl text-regal-navy mb-2">{t.title}</h3>
              <p className="text-granite leading-relaxed mb-5">{t.blurb}</p>
              <LogoMarkBulletList items={t.deliver} />

              {/* per-type capability spotlight */}
              {t.key === "fund" && <MilestoneSpotlight />}
              {t.key === "policy" && <LibrarySpotlight />}

              <p className="mt-5 text-sm text-slate">
                <Check className="mr-1 inline h-4 w-4 text-verdant" />
                Every type ships with a human editorial review and full ownership. No watermark.
              </p>
            </div>
          </div>
        </div>

        {/* Campaign arc: how the types play out over a cycle */}
        <CampaignArc />

        {/* Beyond the four core types */}
        <div className="mt-16">
          <div className="text-center max-w-[720px] mx-auto mb-8">
            <SectionLabel text="Beyond the Four" />
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy tracking-[-0.5px] mt-3">
              Core content, plus everything in between.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BeyondCard
              icon={Zap}
              title="Rapid Response"
              blurb="News breaks and the moment moves fast. Drop a quick-turn video in between your core content to answer an attack, seize a headline, or set the record straight, same day."
              chips={["Same-day turnaround", "Slots between core films", "On-message, on-brand"]}
              spark="#FF3366"
            />
            <BeyondCard
              icon={Camera}
              title="Authentic & Candid"
              blurb="Not every moment should feel produced. Run raw, candid, from-the-trail videos alongside your polished films, so voters see both the campaign and the person."
              chips={["Candid, hand-held feel", "Runs alongside produced", "Real moments, real voice"]}
              spark="#8E5CF7"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CampaignArc() {
  // Bookended by Announcement and GOTV; fundraising + policy throughout;
  // rapid response and candid dropped in sporadically.
  const marks = [
    { pos: 2, type: "announce", label: "Announcement" },
    { pos: 15, type: "fund" },
    { pos: 23, type: "rapid" },
    { pos: 32, type: "policy" },
    { pos: 43, type: "fund" },
    { pos: 51, type: "candid" },
    { pos: 60, type: "policy" },
    { pos: 69, type: "fund" },
    { pos: 77, type: "rapid" },
    { pos: 86, type: "policy" },
    { pos: 98, type: "gotv", label: "GOTV" },
  ];
  const style: Record<string, { color: string; r: number }> = {
    announce: { color: "#FF3366", r: 9 },
    gotv: { color: "#4D9FFF", r: 9 },
    fund: { color: "#4D9FFF", r: 6 },
    policy: { color: "#8E5CF7", r: 6 },
    rapid: { color: "#FF3366", r: 4 },
    candid: { color: "#94A3B8", r: 4 },
  };
  const legend = [
    { label: "Announcement & GOTV (bookends)", color: "#FF3366" },
    { label: "Fundraising appeals", color: "#4D9FFF" },
    { label: "Policy explainers", color: "#8E5CF7" },
    { label: "Rapid response", color: "#FF3366", small: true },
    { label: "Candid footage", color: "#94A3B8", small: true },
  ];
  return (
    <div className="mt-16 rounded-2xl bg-white p-6 md:p-8 shadow-md ring-1 ring-black/5">
      <div className="text-center max-w-[640px] mx-auto mb-8">
        <SectionLabel text="The Campaign Arc" />
        <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy tracking-[-0.5px] mt-3">
          One video isn&apos;t a campaign. This is.
        </h3>
        <p className="text-granite text-sm mt-3">
          Announcement and GOTV bookend the cycle, with fundraising and policy
          throughout, and rapid response and candid moments in between.
        </p>
      </div>

      <div className="relative mx-auto mt-14 mb-10 h-1 max-w-[900px] rounded-full bg-gradient-to-r from-liberty-crimson via-bridge-violet to-freedom-blue">
        {marks.map((m, i) => {
          const s = style[m.type];
          return (
            <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2" style={{ left: `${m.pos}%` }}>
              <span
                className="block rounded-full border-2 border-white shadow"
                style={{ width: s.r * 2, height: s.r * 2, background: s.color }}
              />
              {m.label && (
                <span className="absolute left-1/2 top-[-30px] -translate-x-1/2 whitespace-nowrap text-[11px] font-bold text-regal-navy">
                  {m.label}
                </span>
              )}
            </div>
          );
        })}
        <span className="absolute left-0 top-5 text-[11px] font-medium text-slate">Launch</span>
        <span className="absolute right-0 top-5 text-[11px] font-medium text-slate">Election Day</span>
      </div>

      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {legend.map((l) => (
          <span key={l.label} className="inline-flex items-center gap-1.5 text-xs text-granite">
            <span
              className="rounded-full"
              style={{ width: l.small ? 8 : 12, height: l.small ? 8 : 12, background: l.color }}
            />
            {l.label}
          </span>
        ))}
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
      <p className="mt-3 text-xs text-slate">
        One embeddable library. Every explainer in one place, always on your site.
      </p>
    </div>
  );
}

function BeyondCard({
  icon: Icon,
  title,
  blurb,
  chips,
  spark,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  blurb: string;
  chips: string[];
  spark: string;
}) {
  return (
    <div className="relative rounded-2xl bg-white p-7 shadow-md ring-1 ring-black/5">
      <div className="h-1.5 patriot-gradient absolute inset-x-0 top-0 rounded-t-2xl" />
      <AISparkle
        size={16}
        color={spark}
        glow
        className="sparkle-twinkle absolute right-5 top-6"
        style={{ ["--dur"]: "2.8s" } as CSSProperties}
      />
      <div className="mb-4 mt-2 flex h-11 w-11 items-center justify-center rounded-lg bg-regal-navy/5">
        <Icon className="h-5 w-5 text-regal-navy" />
      </div>
      <h4 className="font-heading font-bold text-xl text-regal-navy mb-2">{title}</h4>
      <p className="text-granite text-sm leading-relaxed mb-4">{blurb}</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <span key={c} className="rounded-full bg-regal-navy/5 px-3 py-1 text-xs font-medium text-regal-navy">
            {c}
          </span>
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
