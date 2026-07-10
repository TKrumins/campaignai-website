import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { StepMedia } from "@/components/sections/how-it-works/StepMedia";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

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

export function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
              Six steps. Every call is yours.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              The AI does the heavy lifting. You steer at every step &mdash;
              nothing moves forward until you say so.
            </p>
          </div>
        </ScrollReveal>

        {/* Flowing timeline */}
        <div className="relative">
          {/* Vertical spine with a traveling light */}
          <div
            className="absolute left-[27px] md:left-[35px] top-2 bottom-2 w-[3px] rounded-full overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-0 patriot-gradient opacity-25" />
            <div className="hiw-spine-comet absolute left-0 w-full h-16 bg-gradient-to-b from-transparent via-freedom-blue to-transparent" />
          </div>

          <div className="space-y-14 md:space-y-20">
            {steps.map(({ number, title, body }, i) => (
              <ScrollReveal key={number} delay={i * 60}>
                <div className="relative pl-20 md:pl-28">
                  {/* Number node on the spine */}
                  <div className="absolute left-0 md:left-1 top-0">
                    <div className="hiw-node-pulse w-14 h-14 rounded-full patriot-gradient p-[3px] shadow-md">
                      <div className="w-full h-full rounded-full bg-regal-navy flex items-center justify-center">
                        <span className="text-white font-heading font-extrabold text-lg">
                          {String(number).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-regal-navy leading-tight mb-3">
                        {title}
                      </h3>
                      <p className="text-granite leading-relaxed">{body}</p>
                    </div>
                    <div>
                      <StepMedia step={number} title={title} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* The fork: what happens after you submit */}
        <ScrollReveal>
          <div className="mt-20 max-w-[880px] mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy tracking-[-0.5px] mb-3">
                Hit submit, and your video goes into production.
              </h3>
              <p className="text-granite leading-relaxed max-w-[620px] mx-auto">
                Today, every project is finished by our human editors. Soon,
                you&apos;ll be able to choose your path &mdash; and you&apos;ll
                still make every creative call either way.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Path A — available now */}
              <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-md p-7 flex flex-col">
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
              <div className="rounded-2xl bg-dawn-frost ring-1 ring-freedom-blue/20 p-7 flex flex-col">
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
