import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { StepAnimation } from "@/components/sections/how-it-works/StepAnimation";
import { SlidersHorizontal, UserCheck, Send, Sparkles } from "lucide-react";

// Condensed to three phases for the homepage; the full seven-step walkthrough
// lives on /how-it-works, so this primes and funnels rather than duplicates.
// Each card borrows one of the process page's branded StepAnimation scenes so
// the teaser feels like the same world — kept deliberately high-level here.
const phases = [
  {
    number: "01",
    icon: SlidersHorizontal,
    visual: 3,
    title: "You direct every decision",
    description:
      "Your story, your script, your storyboard, your narration and music. You make every creative call. Nothing goes in that you didn't choose.",
    chips: ["Story", "Script", "Storyboard", "Voice & music"],
  },
  {
    number: "02",
    icon: UserCheck,
    visual: 6,
    title: "A human editor polishes every frame",
    description:
      "Your video goes to our production team. Real editors review, refine, and finalize the whole thing before it ever reaches you.",
    chips: ["Human editorial review"],
  },
  {
    number: "03",
    icon: Send,
    visual: 7,
    title: "You download and deploy",
    description:
      "Your finished ad arrives within 48 hours with disclosure labels built in. Ready for social, email, your website, and digital ads.",
    chips: ["48-hour delivery", "Disclosure built in"],
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white">
      <AISparkle
        size={16}
        color="#8E5CF7"
        glow
        className="sparkle-twinkle absolute right-[6%] top-24 hidden md:block"
        style={{ ["--dur"]: "4.7s" } as CSSProperties}
      />
      <AISparkle
        size={11}
        color="#B8B8B8"
        className="sparkle-twinkle absolute left-[5%] top-40 hidden lg:block"
        style={{ ["--dur"]: "6.2s" } as CSSProperties}
      />
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="mb-4">
              <SectionLabel text="How It Works" favicon />
            </div>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
              Guide your video from start to finish.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              You stay in the director&apos;s chair the whole way. Here is the
              shape of it, start to finish.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map(({ number, icon: Icon, visual, title, description, chips }, i) => (
            <ScrollReveal key={number} delay={i * 100}>
              <div className="relative h-full overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
                <div className="h-1.5 multipartisan-gradient absolute inset-x-0 top-0 z-10" />
                {/* process-page-style animated scene */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <StepAnimation step={visual} />
                  <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-regal-navy/85 font-heading text-xs font-bold text-white ring-1 ring-white/20">
                    {number}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-regal-navy/5">
                      <Icon className="h-4 w-4 text-regal-navy" />
                    </span>
                    <h3 className="font-heading font-bold text-xl text-regal-navy">{title}</h3>
                  </div>
                  <p className="text-granite text-sm leading-relaxed mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {chips.map((c) => (
                      <span key={c} className="rounded-full bg-regal-navy/5 px-3 py-1 text-xs font-medium text-regal-navy">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI disclaimer — moved below the three cards so it applies to the
            whole process, not just step one. */}
        <ScrollReveal>
          <div className="mx-auto mt-8 flex max-w-[760px] items-start gap-3 rounded-xl bg-freedom-blue/[0.07] px-5 py-4 ring-1 ring-freedom-blue/15">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-freedom-blue" />
            <p className="text-sm font-medium leading-relaxed text-regal-navy">
              Use as much or as little AI as you want. Bring your own footage,
              voiceover, and photos, and we build the ad around them.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Button variant="blue-outline" href="/video-production-process">
              See the full process &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
