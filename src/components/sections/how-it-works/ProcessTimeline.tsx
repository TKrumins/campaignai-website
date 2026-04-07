import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Tell your story",
    body: "It starts with a conversation. Share the story behind your campaign: who you are, why you're running, what you believe in, and what your community needs to hear. You can type it, record it, or walk us through it however feels natural. The more context you share, the better we build alongside you.",
  },
  {
    number: "02",
    title: "Shape your script",
    body: "We guide you through drafting your script step by step. You set the message, choose the tone, and approve every word. Our tools suggest structure and phrasing based on your story, but nothing goes into the script that you didn't decide. This is your voice, shaped with professional support.",
  },
  {
    number: "03",
    title: "Build your storyboard",
    body: "Select your visuals, set the pacing, and design the look and feel of your ad. Choose from your campaign footage, stock footage, or AI-generated b-roll (w/ clear disclosure). Or get guidance to record a quick video on your phone.",
  },
  {
    number: "04",
    title: "Set your narration and music",
    body: "Choose the voice, tone, and soundtrack that bring your video to life. Preview options, adjust the feel, and produce an ad that sounds like your campaign and speaks to your audience.",
  },
  {
    number: "05",
    title: "A human editor polishes every frame",
    body: "Real editors review the visual flow, tighten the pacing, refine transitions, and make sure the final product meets a standard you would be proud to put your name on. Because your story matters to us.",
    note: "Not quite right? We offer 3 revisions during the development process and 1 back-and-forth with our editors in post-production to make sure the final video represents your campaign.",
  },
  {
    number: "06",
    title: "Download and deploy",
    body: "Your finished video arrives within 48 hours, with disclosure labels built in. Ready for social media, email, your website, and other digital advertising. Multiple formats (15-, 30-, or 60-seconds, 1080p, vertical/square/landscape), one production process.",
  },
];

function StepNumberCircle({ number }: { number: string }) {
  return (
    <div className="w-[60px] h-[60px] rounded-full patriot-gradient p-[3px] z-10 relative shadow-md">
      <div className="w-full h-full rounded-full bg-regal-navy flex items-center justify-center">
        <span className="text-white font-heading font-bold text-lg">{number}</span>
      </div>
    </div>
  );
}

function StepImage({ number }: { number: string }) {
  const stepNum = parseInt(number, 10);
  return (
    <div className="w-[280px] h-[280px] mx-auto rounded-full overflow-hidden shadow-lg ring-1 ring-gray-200">
      <Image
        src={`/Step-by-Step Guides/Step ${stepNum}.png`}
        alt={`Step ${stepNum} illustration`}
        width={280}
        height={280}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5 md:whitespace-nowrap">
              From conversation to campaign ad.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              Every video starts with you. Not a template. Not a stock script.
              Your story, your voice, your campaign. Here is how we turn that
              into a finished, compliant campaign ad.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Connective line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] patriot-gradient -translate-x-1/2 opacity-30" />

          {steps.map(({ number, title, body, note }, i) => {
            // Odd steps (01, 03, 05) text on left, image on right
            // Even steps (02, 04, 06) text on right, image on left
            const textOnLeft = i % 2 === 0;

            return (
              <ScrollReveal key={number} delay={i * 80}>
                <div className="relative mb-28 last:mb-0">
                  {/* Desktop: alternating layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] items-center gap-y-6">
                    {/* Left column */}
                    <div className={textOnLeft ? "pr-10" : "pr-10 order-1"}>
                      {textOnLeft ? (
                        <div className="text-right">
                          <h3 className="font-heading font-bold text-2xl text-regal-navy mb-2">
                            {title}
                          </h3>
                          <p className="text-granite leading-relaxed">
                            {body}
                          </p>
                          {note && (
                            <p className="text-slate text-sm leading-relaxed mt-3">
                              {note}
                            </p>
                          )}
                        </div>
                      ) : (
                        <StepImage number={number} />
                      )}
                    </div>

                    {/* Center: number circle */}
                    <div className="flex justify-center order-2">
                      <StepNumberCircle number={number} />
                    </div>

                    {/* Right column */}
                    <div className={textOnLeft ? "pl-10 order-3" : "pl-10 order-3"}>
                      {textOnLeft ? (
                        <StepImage number={number} />
                      ) : (
                        <div>
                          <h3 className="font-heading font-bold text-2xl text-regal-navy mb-2">
                            {title}
                          </h3>
                          <p className="text-granite leading-relaxed">
                            {body}
                          </p>
                          {note && (
                            <p className="text-slate text-sm leading-relaxed mt-3">
                              {note}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile: vertical stack */}
                  <div className="md:hidden flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full patriot-gradient p-[2px] shrink-0">
                        <div className="w-full h-full rounded-full bg-regal-navy flex items-center justify-center">
                          <span className="text-white font-heading font-bold text-sm">{number}</span>
                        </div>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px flex-1 bg-freedom-blue/20 mt-2" />
                      )}
                    </div>
                    <div className="pb-2">
                      <h3 className="font-heading font-bold text-xl text-regal-navy mb-1">
                        {title}
                      </h3>
                      <p className="text-granite leading-relaxed">{body}</p>
                      {note && (
                        <p className="text-slate text-sm leading-relaxed mt-3">
                          {note}
                        </p>
                      )}
                      <div className="mt-6">
                        <StepImage number={number} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Button variant="crimson" href="/get-started">
              Create your video &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
