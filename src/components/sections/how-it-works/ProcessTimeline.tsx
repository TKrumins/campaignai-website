import type { CSSProperties } from "react";
import { Scissors, Wand2, MousePointerClick, Music } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { StepMedia } from "@/components/sections/how-it-works/StepMedia";
import { ReelCanvas } from "@/components/sections/how-it-works/ReelCanvas";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

// Node colours walk the ribbon red -> violet -> blue, one per scene; each number
// gently flashes in its own colour (glow passed to the CSS var --node-glow).
const NODE_COLORS = [
  { ring: "#FF3366", glow: "rgba(255,51,102,0.35)" },
  { ring: "#E14A9E", glow: "rgba(225,74,158,0.32)" },
  { ring: "#B94FC4", glow: "rgba(185,79,196,0.32)" },
  { ring: "#8E5CF7", glow: "rgba(142,92,247,0.32)" },
  { ring: "#7E7BF0", glow: "rgba(126,123,240,0.30)" },
  { ring: "#6398FA", glow: "rgba(99,152,250,0.30)" },
  { ring: "#4D9FFF", glow: "rgba(77,159,255,0.34)" },
];

// Slight per-scene tilt so the film players zig-zag down the ribbon like the
// home hero's reel. Alternates with the card's side.
const TILT = [-2.5, 2.5, -2, 2, -2.5, 2, -2];

// The real production flow (6.3), in order. Titles are active — every step is
// a decision the user makes; the AI only ever proposes.
// Bodies are Tom's copy verbatim; "\n" starts a new line, a leading "*" marks a
// footnote. Titles are short, active labels — every step is your decision.
const steps = [
  {
    number: 1,
    title: "Start with a conversation",
    body: "Our guided intake interview asks about your vision for the video, offering context and suggestions as needed. No more “starting from a blank page.”",
  },
  {
    number: 2,
    title: "Approve your brief",
    body: "Receive a clear, structured production brief for your video. Review it, adjust anything that is off, and approve it to start production.",
  },
  {
    number: 3,
    title: "Shape the script",
    body: "A script is drafted in real time, broken into frames that pair what the viewer sees and hears. Edit any line directly or use our AI refinement tools. You decide what goes in every line.",
  },
  {
    number: 4,
    title: "Build the storyboard",
    body: "Navigate your visual storyboard, using simple sketches to inspire ideas for how you want the video to look and feel to the audience.",
  },
  {
    number: 5,
    title: "Bring in your content",
    body: "Bring in your content from the CampaignAI asset library, upload your own photos and footage, set a reminder to add later, or get a “Go Film It” guide for a shot only you can capture.\nPrefer stock footage or AI-generated footage? Provide guidance for our editors to achieve your vision.",
  },
  {
    number: 6,
    title: "Direct voice & music",
    body: "Set the direction for your voiceover with starting examples and fine-tuning, or upload your own. Do the same for the score: guide an AI-made track, upload your own recording, or none at all.",
  },
  {
    number: 7,
    title: "Review and submit",
    body: "Upload anything else you want to see in the video, look over the whole thing, and submit.\nThis starts the hand-off to post-production — stitching, polish, compliance checks, and quality assurance — and the only step where you hand over the wheel.\n*Video packages start with 1–2 revisions, with additional revisions available for purchase.",
  },
];

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

// The human-editors path: a live editing bay — a playhead scrubs the frame, clips
// get trimmed and moved on the timeline, a note gets scored in, a polish sparkle.
function EditingBayVisual() {
  return (
    <div className="relative mb-5 overflow-hidden rounded-xl bg-regal-navy p-3 ring-1 ring-black/10" aria-hidden="true">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-freedom-blue/20">
          <Scissors className="h-3.5 w-3.5 text-freedom-blue" />
        </span>
        <span className="text-[11px] font-semibold text-beacon-white/80">Editing bay</span>
        <Music className="ml-auto h-3.5 w-3.5 text-horizon-azure ga-slide" />
      </div>
      {/* preview frame — a playhead scrubs across, a polish sparkle twinkles */}
      <div className="relative mb-2 h-10 overflow-hidden rounded-md bg-gradient-to-br from-[#23407E] to-freedom-blue/70">
        <span className="hiw-scrub absolute top-0 h-full w-px bg-beacon-white/80" />
        <AISparkle size={10} color="#FFFFFF" glow className="sparkle-twinkle absolute right-1.5 top-1" style={{ ["--dur"]: "2.2s" } as CSSProperties} />
      </div>
      {/* timeline — clips trimmed (scaleX), moved (slide), added (pulse) */}
      <div className="flex items-center gap-1">
        <span className="hiw-trim h-3 flex-[3] rounded-sm bg-liberty-crimson/80" />
        <span className="ga-slide h-3 flex-[2] rounded-sm bg-bridge-violet/80" />
        <span className="hiw-trim h-3 flex-[4] rounded-sm bg-freedom-blue/80" style={{ animationDelay: "0.9s" }} />
        <span className="ga-blink h-3 flex-[2] rounded-sm bg-horizon-azure/80" />
      </div>
    </div>
  );
}

// The AI path: the same bay, but the machine is doing it — a generative shimmer
// sweeps the frame, sparkles bloom, and the render bar fills on its own.
function RenderVisual() {
  return (
    <div className="relative mb-5 overflow-hidden rounded-xl bg-regal-navy p-3 ring-1 ring-bridge-violet/20" aria-hidden="true">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-bridge-violet/25">
          <Wand2 className="h-3.5 w-3.5 text-bridge-violet" />
        </span>
        <span className="text-[11px] font-semibold text-beacon-white/80">AI render</span>
        <AISparkle size={12} color="#E8F4F8" glow className="sparkle-twinkle ml-auto" style={{ ["--dur"]: "2.4s" } as CSSProperties} />
      </div>
      {/* preview frame — generative shimmer + blooming sparkles */}
      <div className="sheen-sweep relative mb-2 h-10 overflow-hidden rounded-md bg-gradient-to-br from-bridge-violet/50 to-freedom-blue/60">
        <AISparkle size={12} color="#FFFFFF" glow className="sparkle-twinkle absolute right-2 top-1.5" style={{ ["--dur"]: "3s", animationDelay: "400ms" } as CSSProperties} />
        <AISparkle size={8} color="#FF6B8F" glow className="sparkle-twinkle absolute bottom-1 left-2" style={{ ["--dur"]: "2.2s", animationDelay: "800ms" } as CSSProperties} />
      </div>
      {/* progress fills as it renders */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div className="hiw-fill h-full rounded-full bg-gradient-to-r from-bridge-violet to-freedom-blue" />
      </div>
    </div>
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
              Seven steps, from first conversation to finished film. You direct
              every one &mdash; nothing moves forward until you say so.
            </p>
          </div>
        </ScrollReveal>

        {/* The reel: film players threaded down a ribbon that runs through the
            centre of every numbered node (measured live in ReelCanvas). */}
        <ReelCanvas>
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
                    {/* Number node — a bead the ribbon threads through */}
                    <div className="absolute z-30 left-[27px] top-4 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                      <div
                        data-reel-node
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
                        <div className="space-y-2 text-granite leading-relaxed">
                          {body.split("\n").map((line, j) =>
                            line.startsWith("*") ? (
                              <p key={j} className="text-xs text-slate">{line.slice(1)}</p>
                            ) : (
                              <p key={j}>{line}</p>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </ReelCanvas>

        {/* The fork: submit, and it splits into production */}
        <ScrollReveal>
          <div className="mt-24 max-w-[920px] mx-auto">
            <div className="text-center mb-10">
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy tracking-[-0.5px] mb-3">
                Hit submit, and your video goes into production.
              </h3>
              <p className="text-granite leading-relaxed max-w-[620px] mx-auto">
                Right now, real people on our team take it from there and finish
                every video by hand. Soon, you&apos;ll be able to choose your path
                &mdash; and either way, every creative call stays yours.
              </p>
            </div>

            {/* Submit node forking into the two paths */}
            <div className="relative">
              <div className="relative flex flex-col items-center">
                <AISparkle size={14} color="#FF3366" glow className="sparkle-twinkle absolute left-[calc(50%-64px)] top-0 z-10" style={{ ["--dur"]: "2.4s" } as CSSProperties} />
                <AISparkle size={12} color="#4D9FFF" glow className="sparkle-twinkle absolute left-[calc(50%+52px)] top-1 z-10" style={{ ["--dur"]: "2.8s", animationDelay: "500ms" } as CSSProperties} />
                {/* Illustration of the moment you submit — deliberately NOT a real
                    button: dashed outline + a cursor tapping it + a caption. */}
                <div className="relative z-10 inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-regal-navy/35 bg-white px-6 py-3">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-regal-navy" aria-hidden="true">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                  </svg>
                  <span className="font-heading font-bold text-regal-navy">Submit</span>
                  <MousePointerClick className="hiw-tap h-5 w-5 text-freedom-blue" aria-hidden="true" />
                </div>
                <span className="mt-2 text-[11px] font-medium uppercase tracking-wider text-slate">
                  The one moment you press go
                </span>
              </div>

              {/* Y-fork: solid lit branch (now) + dashed branch (soon), with a
                  signal flowing down each into production. */}
              <svg
                className="pointer-events-none absolute left-1/2 top-[86px] h-[60px] w-full max-w-[560px] -translate-x-1/2"
                viewBox="0 0 560 60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M280 0 C280 34 140 26 140 60" fill="none" stroke="#4D9FFF" strokeWidth="3" strokeLinecap="round" />
                <path d="M280 0 C280 34 420 26 420 60" fill="none" stroke="#8E5CF7" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 7" opacity="0.6" />
                <path className="proof-wave" d="M280 0 C280 34 140 26 140 60" fill="none" stroke="#E8F4F8" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                <path className="proof-wave" d="M280 0 C280 34 420 26 420 60" fill="none" stroke="#E8F4F8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </svg>

              <div className="grid grid-cols-2 gap-3 md:gap-6 mt-[76px]">
                {/* Path A — available now */}
                <div className="rounded-2xl bg-white ring-1 ring-freedom-blue/20 shadow-md p-4 sm:p-7 flex flex-col">
                  <EditingBayVisual />
                  <span className="inline-flex w-fit items-center rounded-full bg-freedom-blue/10 text-freedom-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 mb-4">
                    Available now
                  </span>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-regal-navy mb-2">
                    Hand-finished by our editors
                  </h4>
                  <p className="text-granite text-sm leading-relaxed">
                    Real people on our team take it from here &mdash; 3 revisions
                    during development and 1 in post &mdash; and deliver your
                    finished video within 48 hours of submission.
                  </p>
                </div>

                {/* Path B — coming soon */}
                <div className="rounded-2xl bg-dawn-frost ring-1 ring-bridge-violet/20 p-4 sm:p-7 flex flex-col">
                  <RenderVisual />
                  <span className="inline-flex w-fit items-center rounded-full bg-pioneer-gold/15 text-pioneer-gold text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 mb-4">
                    Coming soon
                  </span>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-regal-navy mb-2">
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
