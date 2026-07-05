import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { StepMedia } from "@/components/sections/how-it-works/StepMedia";
import {
  CALENDLY_PURCHASE,
  CTA_PRIMARY,
  CTA_MICROCOPY,
  DELIVERY_LINE,
} from "@/lib/constants";

// The real production flow (6.3), in order.
const steps = [
  {
    number: 1,
    title: "Train your CampaignAI",
    body: "Start with a conversation about your campaign: who you are, why you're running, and who needs to hear it. The platform learns your story, your voice, and your race, and every video you make builds on that foundation.",
  },
  {
    number: 2,
    title: "Video briefing to plan",
    body: "A guided video briefing turns your goals into a production plan. Tell us what this video needs to do, whether that's introduce you, explain an issue, or get out the vote, and the plan takes shape around it.",
  },
  {
    number: 3,
    title: "Develop your script",
    body: "Draft your script with structured suggestions built from your own story. You set the message, adjust the tone, and approve every word. Nothing goes into the script that you didn't decide.",
  },
  {
    number: 4,
    title: "Build your storyboard and choose content",
    body: "Lay out the video scene by scene and pick the content for each one: your own footage, stock, or AI-generated visuals with clear disclosure. If your video needs footage only you can capture, we send you friendly, detailed instructions to go film it.",
  },
  {
    number: 5,
    title: "Set audio direction: voiceover and score",
    body: "Choose the voice that carries your script and the score underneath it. Preview options and adjust until it sounds like your campaign.",
  },
  {
    number: 6,
    title: "Review and submit",
    body: "Look over the full plan, make your final calls, and submit. Submitting is the moment your video goes into production: our human editors take it from there, with 3 revisions during development and 1 back-and-forth in post.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
              Six steps. Your decisions.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-20 md:space-y-24">
          {steps.map(({ number, title, body }, i) => {
            const mediaRight = i % 2 === 0;
            return (
              <ScrollReveal key={number} delay={i * 60}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className={mediaRight ? "" : "md:order-2"}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full patriot-gradient p-[2.5px] shrink-0">
                        <div className="w-full h-full rounded-full bg-regal-navy flex items-center justify-center">
                          <span className="text-white font-heading font-bold text-base">
                            {String(number).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-regal-navy leading-tight">
                        {title}
                      </h3>
                    </div>
                    <p className="text-granite leading-relaxed">{body}</p>
                  </div>
                  <div className={mediaRight ? "md:order-2" : ""}>
                    <StepMedia step={number} title={title} />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Delivery callout: the submission trigger, stated plainly */}
        <ScrollReveal>
          <div className="mt-20 rounded-2xl bg-dawn-frost border border-freedom-blue/20 p-7 md:p-9 text-center max-w-[760px] mx-auto">
            <h3 className="font-heading font-bold text-xl text-regal-navy mb-3">
              Then our editors go to work.
            </h3>
            <p className="text-granite leading-relaxed">{DELIVERY_LINE}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Button variant="crimson" href={CALENDLY_PURCHASE} external className="px-8 py-3">
              {CTA_PRIMARY}
            </Button>
            <p className="text-slate text-sm mt-2">{CTA_MICROCOPY}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
