import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { SlidersHorizontal, UserCheck, Send } from "lucide-react";

// Condensed to three phases for the homepage; the full six-step walkthrough
// lives on /how-it-works, so this primes and funnels rather than duplicates.
const phases = [
  {
    number: "01",
    icon: SlidersHorizontal,
    title: "You direct every decision",
    description:
      "Your story, your script, your storyboard, your narration and music. You make every creative call. Nothing goes in that you didn't choose.",
    chips: ["Story", "Script", "Storyboard", "Voice & music"],
    spark: "#FF3366",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "A human editor polishes every frame",
    description:
      "Your video goes to our production team. Real editors review, refine, and finalize the whole thing before it ever reaches you.",
    chips: ["Human editorial review"],
    spark: "#8E5CF7",
  },
  {
    number: "03",
    icon: Send,
    title: "You download and deploy",
    description:
      "Your finished ad arrives within 48 hours with disclosure labels built in. Ready for social, email, your website, and digital ads.",
    chips: ["48-hour delivery", "Disclosure built in"],
    spark: "#4D9FFF",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-beacon-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="How It Works" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              From your story to a finished ad.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              You stay in the director&apos;s chair the whole way. Here is the
              shape of it, start to finish.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map(({ number, icon: Icon, title, description, chips, spark }, i) => (
            <ScrollReveal key={number} delay={i * 100}>
              <div className="relative h-full rounded-2xl bg-white p-7 shadow-md ring-1 ring-black/5">
                <div className="h-1.5 multipartisan-gradient absolute inset-x-0 top-0 rounded-t-2xl" />
                <AISparkle
                  size={15}
                  color={spark}
                  glow
                  className="sparkle-twinkle absolute right-5 top-6"
                  style={{ ["--dur"]: `${2.6 + i * 0.4}s` } as CSSProperties}
                />
                <div className="mt-2 mb-4 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full patriot-gradient p-[2px] shrink-0">
                    <div className="w-full h-full rounded-full bg-regal-navy flex items-center justify-center">
                      <span className="font-heading font-bold text-xs text-white">{number}</span>
                    </div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-regal-navy/5">
                    <Icon className="h-5 w-5 text-regal-navy" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-regal-navy mb-2">{title}</h3>
                <p className="text-granite text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <span key={c} className="rounded-full bg-regal-navy/5 px-3 py-1 text-xs font-medium text-regal-navy">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Button variant="blue-outline" href="/how-it-works">
              See the full process &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
