import type { CSSProperties } from "react";
import { Scissors, Wand2 } from "lucide-react";
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
const steps = [
  {
    number: 1,
    title: "Talk it through",
    body: "It starts as a conversation. A guided intake interview asks about the core pieces of your video, offering context and suggestions as you describe what you want to make — so you never start from a blank page.",
  },
  {
    number: 2,
    title: "Approve your brief",
    body: "The AI turns that conversation into a clear production brief — the blueprint for your video. You review it, adjust anything that's off, and approve it before a single frame gets built.",
  },
  {
    number: 3,
    title: "Shape the script, in your words",
    body: "A script is written in real time, broken into frames that pair what the narrator says with what the viewer sees. Edit any line directly, or lean on an AI refinement panel — every final word is yours.",
  },
  {
    number: 4,
    title: "Storyboard it, frame by frame",
    body: "The AI sketches your storyboard as you watch — low-fidelity frames appearing before your eyes — so you can see the shape of the video and shape it, one frame at a time.",
  },
  {
    number: 5,
    title: "Select your content",
    body: "Fill each frame your way: pull from the CampaignAI asset library, upload your own photos and footage, drop a placeholder to add later, or get a “go film it” guide for a shot only you can capture. Prefer stock or AI-generated b-roll? Steer it with a reference of your own.",
  },
  {
    number: 6,
    title: "Direct the voice and music",
    body: "Choose the voiceover that carries your script — clear styles like Authoritative or Warm, in a male or female voice — then fine-tune it, or upload your own. Do the same for the score: an AI-made track you guide, your own recording, or none at all.",
  },
  {
    number: 7,
    title: "Review, approve, and submit",
    body: "Add anything still outstanding, look over the whole thing, and submit. That's the hand-off to post-production — polish, stitching, compliance checks, and quality assurance — and the only step where you hand off the wheel.",
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

// A little "editing bay" strip for the human-editors path: a mini frame with an
// edit timeline. Clip blocks in the Multi-Partisan hues.
function EditingBayVisual() {
  return (
    <div className="relative mb-5 overflow-hidden rounded-xl bg-regal-navy p-3 ring-1 ring-black/10" aria-hidden="true">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-freedom-blue/20">
          <Scissors className="h-3.5 w-3.5 text-freedom-blue" />
        </span>
        <span className="text-[11px] font-semibold text-beacon-white/80">Editing bay</span>
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-liberty-crimson" />
      </div>
      {/* preview frame */}
      <div className="mb-2 h-10 rounded-md bg-gradient-to-br from-[#23407E] to-freedom-blue/70" />
      {/* timeline */}
      <div className="flex items-center gap-1">
        <span className="h-3 flex-[3] rounded-sm bg-liberty-crimson/80" />
        <span className="h-3 flex-[2] rounded-sm bg-bridge-violet/80" />
        <span className="h-3 flex-[4] rounded-sm bg-freedom-blue/80" />
        <span className="h-3 flex-[2] rounded-sm bg-horizon-azure/80" />
      </div>
    </div>
  );
}

// A little "render" strip for the AI path: a mini frame with sparkles and a
// progress bar mid-render.
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
      {/* preview frame */}
      <div className="relative mb-2 h-10 rounded-md bg-gradient-to-br from-bridge-violet/50 to-freedom-blue/60">
        <AISparkle size={12} color="#FFFFFF" glow className="sparkle-twinkle absolute right-2 top-1.5" style={{ ["--dur"]: "3s", animationDelay: "400ms" } as CSSProperties} />
      </div>
      {/* progress */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-bridge-violet to-freedom-blue" />
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
              Seven steps, from first conversation to finished film. The AI does
              the heavy lifting &mdash; you direct every one, and nothing moves
              forward until you say so.
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
                        <p className="text-granite leading-relaxed">{body}</p>
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
                  <EditingBayVisual />
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
                  <RenderVisual />
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
