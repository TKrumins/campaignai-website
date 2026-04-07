import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Tell your story",
    description:
      "Share what drives your campaign: your background, your values, and the message you want voters to hear.",
  },
  {
    number: "02",
    title: "Shape your script",
    description:
      "We walk you through drafting your script step by step. You choose the words, the tone, and the message. Nothing goes in that you didn't decide.",
  },
  {
    number: "03",
    title: "Build your storyboard",
    description:
      "Select your visuals, set the pacing, and design the look and feel of your ad. You make every creative decision with ease.",
  },
  {
    number: "04",
    title: "Set your narration and music",
    description:
      "Choose the voice, tone, and soundtrack that bring your video to life. Every element reflects your campaign, not a template.",
  },
  {
    number: "05",
    title: "A human editor polishes every frame",
    description:
      "Your video goes through our production team. Real editors review, refine, and finalize your ad before it reaches you.",
  },
  {
    number: "06",
    title: "Download and deploy",
    description:
      "Your finished video arrives within 48 hours, with disclosure labels built in. Ready for social media, email, your website, and other digital advertising.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="How It Works" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              From your story to a finished ad. Here&apos;s how.
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {steps.map(({ number, title, description }, i) => (
            <ScrollReveal key={number} delay={i * 100}>
              <div className="flex gap-6 mb-10 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full patriot-gradient p-[3px] shrink-0 opacity-80">
                    <div className="w-full h-full rounded-full bg-regal-navy flex items-center justify-center">
                      <span className="font-heading font-bold text-sm text-white">{number}</span>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[2px] flex-1 patriot-gradient opacity-30 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-heading font-bold text-xl text-regal-navy mb-1">
                    {title}
                  </h3>
                  <p className="text-granite leading-relaxed">{description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Button variant="blue-outline" href="/how-it-works">
              Learn more about our process &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
