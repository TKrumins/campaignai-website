import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { StepMedia } from "@/components/sections/how-it-works/StepMedia";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

// Node colours walk the ribbon red -> violet -> blue, one per scene; each number
// gently flashes in its own colour (glow passed to the CSS var --node-glow).
const NODE_COLORS = [
  { ring: "#FF3366", glow: "rgba(255,51,102,0.35)" },
  { ring: "#B94FC4", glow: "rgba(185,79,196,0.32)" },
  { ring: "#8E5CF7", glow: "rgba(142,92,247,0.32)" },
  { ring: "#7E7BF0", glow: "rgba(126,123,240,0.30)" },
  { ring: "#6398FA", glow: "rgba(99,152,250,0.30)" },
  { ring: "#4D9FFF", glow: "rgba(77,159,255,0.34)" },
];

// Slight per-scene tilt so the film players zig-zag down the ribbon like the
// home hero's reel. Alternates with the card's side.
const TILT = [-2.5, 2.5, -2, 2, -2.5, 2];

// The real production flow (6.3), in order. Titles are active — every step is
// a decision the user makes; the AI only ever proposes.
const steps = [
  {
    number: 1,
    title: "Start with your story",
    body: "Begin with a conversation about your campaign: who you are, why you're running, and who needs to hear it. The platform learns your story, your voice, and your race — and every video you make builds on that foundation.",
  },
  {
    number: 2,
    title: "Turn your goals into a plan",
    body: "A guided video briefing turns your goals into a production plan. Tell it what this video needs to do — introduce you, explain an issue, or get out the vote — and the plan takes shape around it.",
  },
  {
    number: 3,
    title: "Write the script, in your words",
    body: "Draft your script with structured suggestions built from your own story. You set the message, adjust the tone, and approve every word. Nothing goes into the script that you didn't decide.",
  },
  {
    number: 4,
    title: "Storyboard it, scene by scene",
    body: "Lay out the video scene by scene and pick the content for each one: your own footage, stock, or AI-generated visuals with clear disclosure. If a shot only you can capture, we send friendly, detailed instructions to go film it.",
  },
  {
    number: 5,
    title: "Direct the voice and score",
    body: "Choose the voice that carries your script and the score underneath it. Preview options and adjust until it sounds like your campaign.",
  },
  {
    number: 6,
    title: "Review, approve, and submit",
    body: "Look over the full plan, make your final calls, and submit. Submitting is the moment your video goes into production — and it's the only step where you hand off the wheel.",
  },
];

// Winding ribbon threads in the home-hero visual language: a continuous
// Multi-Partisan (red -> violet -> blue) path with drifting colour stops and a
// travelling white comet. Desktop weaves down the centre; mobile hugs the left.
const RIBBON_STOPS = [
  { offset: 0, color: "#FF3366" },
  { offset: 0.25, color: "#D144A1" },
  { offset: 0.5, color: "#8E5CF7" },
  { offset: 0.75, color: "#6A81FB" },
  { offset: 1, color: "#4D9FFF" },
];
const RIBBON_CYCLE_S = 9;

const RIBBON_D_DESKTOP =
  "M 50 0 C 90 27 90 55 50 83 C 10 138 10 194 50 250 C 90 306 90 361 50 417 C 10 472 10 528 50 583 C 90 639 90 694 50 750 C 10 806 10 861 50 917 C 90 945 90 972 50 1000";
const RIBBON_D_MOBILE =
  "M 20 0 C 32 70 8 140 20 220 C 32 300 8 380 20 470 C 32 560 8 640 20 730 C 32 820 8 900 20 1000";

// RWB sparkles scattered down the reel, kept off the copy columns.
const SPARKS = [
  { l: 6, t: 8, c: "#4D9FFF", s: 15 },
  { l: 93, t: 18, c: "#FF3366", s: 13 },
  { l: 50, t: 30, c: "#E8F4F8", s: 12 },
  { l: 8, t: 52, c: "#E8F4F8", s: 13 },
  { l: 92, t: 62, c: "#4D9FFF", s: 14 },
  { l: 50, t: 76, c: "#FF3366", s: 12 },
  { l: 9, t: 90, c: "#4D9FFF", s: 12 },
];

function RibbonThread({
  d,
  gradientId,
  viewBox,
  className,
}: {
  d: string;
  gradientId: string;
  viewBox: string;
  className: string;
}) {
  return (
    <svg
      className={`ribbon-sway pointer-events-none absolute inset-y-0 h-full ${className}`}
      viewBox={viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0.35" y2="1">
          {RIBBON_STOPS.map(({ offset, color }, i) => (
            <stop
              key={offset}
              className="ribbon-stop"
              offset={offset}
              stopColor={color}
              style={{ animationDelay: `${(i * RIBBON_CYCLE_S) / RIBBON_STOPS.length - RIBBON_CYCLE_S}s` }}
            />
          ))}
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke={`url(#${gradientId})`} strokeWidth="7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path
        className="ribbon-comet"
        d={d}
        fill="none"
        stroke="#E8F4F8"
        strokeWidth="3.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.9"
      />
    </svg>
  );
}

export function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel text="The Process" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              Your story, unfolding one scene at a time.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              Six scenes, from first conversation to finished film. The AI does
              the heavy lifting &mdash; you direct every one, and nothing moves
              forward until you say so.
            </p>
          </div>
        </ScrollReveal>

        {/* The reel: film players threaded down a winding Multi-Partisan ribbon */}
        <div className="relative">
          {/* Winding ribbon — centred on desktop, left rail on mobile */}
          <RibbonThread
            d={RIBBON_D_DESKTOP}
            gradientId="hiwRibbonDesktop"
            viewBox="0 0 100 1000"
            className="left-1/2 hidden w-[130px] -translate-x-1/2 md:block"
          />
          <RibbonThread
            d={RIBBON_D_MOBILE}
            gradientId="hiwRibbonMobile"
            viewBox="0 0 40 1000"
            className="left-0 w-[54px] md:hidden"
          />

          {/* RWB sparkles */}
          {SPARKS.map((p, i) => (
            <AISparkle
              key={i}
              size={p.s}
              color={p.c}
              glow
              className="sparkle-twinkle absolute z-10"
              style={{ left: `${p.l}%`, top: `${p.t}%`, ["--dur"]: `${2.6 + (i % 3) * 0.5}s`, animationDelay: `${i * 0.35}s` } as CSSProperties}
            />
          ))}

          <div className="relative z-10 space-y-16 md:space-y-24">
            {steps.map(({ number, title, body }, i) => {
              const cardLeft = i % 2 === 0;
              return (
                <ScrollReveal key={number} delay={i * 70}>
                  <div className="relative">
                    {/* Number node — a bead on the ribbon */}
                    <div className="absolute z-30 left-[27px] top-4 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                      <div
                        className="hiw-node-flash h-14 w-14 rounded-full p-[3px] shadow-md"
                        style={{ background: NODE_COLORS[i].ring, ["--node-glow"]: NODE_COLORS[i].glow, animationDelay: `${i * 0.45}s` } as CSSProperties}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-regal-navy">
                          <span className="font-heading text-lg font-extrabold text-white">
                            {String(number).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pl-20 md:grid md:grid-cols-2 md:items-center md:gap-x-24 md:pl-0">
                      <div className={cardLeft ? "md:order-1" : "md:order-2"}>
                        <StepMedia step={number} title={title} tilt={TILT[i]} />
                      </div>
                      <div className={`mt-6 md:mt-0 ${cardLeft ? "md:order-2" : "md:order-1"}`}>
                        <h3 className="font-heading font-bold text-2xl text-regal-navy leading-tight mb-3">
                          {title}
                        </h3>
                        <p className="text-granite leading-relaxed">{body}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* The fork: submit, and it splits into production */}
        <ScrollReveal>
          <div className="mt-24 max-w-[920px] mx-auto">
            <div className="text-center mb-10">
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy tracking-[-0.5px] mb-3">
                Hit submit, and your video goes into production.
              </h3>
              <p className="text-granite leading-relaxed max-w-[620px] mx-auto">
                Today, every project is finished by our human editors. Soon,
                you&apos;ll be able to choose your path &mdash; and you&apos;ll
                still make every creative call either way.
              </p>
            </div>

            {/* Submit node forking into the two paths */}
            <div className="relative">
              <div className="relative flex justify-center">
                <AISparkle size={14} color="#FF3366" glow className="sparkle-twinkle absolute -left-1 top-0 z-10" style={{ ["--dur"]: "2.4s" } as CSSProperties} />
                <AISparkle size={12} color="#4D9FFF" glow className="sparkle-twinkle absolute -right-1 top-1 z-10" style={{ ["--dur"]: "2.8s", animationDelay: "500ms" } as CSSProperties} />
                <div className="relative z-10 inline-flex items-center gap-2 rounded-full bg-regal-navy px-6 py-3 shadow-lg ring-1 ring-white/10">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-beacon-white" aria-hidden="true">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                  </svg>
                  <span className="font-heading font-bold text-beacon-white">Submit</span>
                </div>
              </div>

              {/* Y-fork: solid lit branch (now) + dashed branch (soon), with a
                  signal flowing down each into production. */}
              <svg
                className="pointer-events-none absolute left-1/2 top-[46px] h-[60px] w-full max-w-[560px] -translate-x-1/2"
                viewBox="0 0 560 60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M280 0 C280 34 140 26 140 60" fill="none" stroke="#4D9FFF" strokeWidth="3" strokeLinecap="round" />
                <path d="M280 0 C280 34 420 26 420 60" fill="none" stroke="#8E5CF7" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 7" opacity="0.6" />
                <path className="proof-wave" d="M280 0 C280 34 140 26 140 60" fill="none" stroke="#E8F4F8" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                <path className="proof-wave" d="M280 0 C280 34 420 26 420 60" fill="none" stroke="#E8F4F8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </svg>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[68px]">
                {/* Path A — available now */}
                <div className="rounded-2xl bg-white ring-1 ring-freedom-blue/20 shadow-md p-7 flex flex-col">
                  <span className="inline-flex w-fit items-center rounded-full bg-freedom-blue/10 text-freedom-blue text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
                    Available now
                  </span>
                  <h4 className="font-heading font-bold text-xl text-regal-navy mb-2">
                    Our human editors
                  </h4>
                  <p className="text-granite text-sm leading-relaxed">
                    Real editors take it from here &mdash; 3 revisions during
                    development and 1 back-and-forth in post &mdash; and deliver
                    your finished video within 48 hours of submission.
                  </p>
                </div>

                {/* Path B — coming soon */}
                <div className="rounded-2xl bg-dawn-frost ring-1 ring-bridge-violet/20 p-7 flex flex-col">
                  <span className="inline-flex w-fit items-center rounded-full bg-pioneer-gold/15 text-pioneer-gold text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
                    Coming soon
                  </span>
                  <h4 className="font-heading font-bold text-xl text-regal-navy mb-2">
                    AI post-production
                  </h4>
                  <p className="text-granite text-sm leading-relaxed mb-4 flex-1">
                    Go from approved plan to finished cut faster and more
                    affordably, with AI handling post &mdash; you still make every
                    call. Be first in line when it launches.
                  </p>
                  <a
                    href="/get-started#waitlist"
                    className="inline-flex items-center gap-1 text-freedom-blue text-sm font-semibold hover:underline"
                  >
                    Join the waitlist &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-14">
            <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3">
              {CTA_PRIMARY}
            </Button>
            <p className="text-slate text-sm mt-2">{CTA_MICROCOPY}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
