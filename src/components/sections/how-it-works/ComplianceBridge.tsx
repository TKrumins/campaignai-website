import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";

export function ComplianceBridge() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: the hero is YOU — your finished video, cleared to ship */}
            <div className="relative order-last lg:order-first">
              <AISparkle size={16} color="#2FAE7E" glow className="sparkle-twinkle absolute -left-2 top-2 z-20" style={{ ["--dur"]: "2.8s" } as CSSProperties} />
              <AISparkle size={13} color="#E8F4F8" glow className="sparkle-twinkle absolute right-3 -top-3 z-20" style={{ ["--dur"]: "3.2s", animationDelay: "600ms" } as CSSProperties} />

              {/* 50-state coverage backdrop */}
              <div className="absolute -inset-3 rounded-3xl bg-verdant/5 ring-1 ring-verdant/15" aria-hidden="true" />

              <div className="relative aspect-video overflow-hidden rounded-xl border-[3px] border-white bg-regal-navy shadow-2xl ring-1 ring-black/10">
                {/* your video */}
                <div className="absolute inset-0 bg-gradient-to-br from-regal-navy via-[#23407E] to-freedom-blue/70" aria-hidden="true" />
                <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-beacon-white/85 shadow-lg">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-regal-navy">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>

                {/* your lower-third */}
                <div className="absolute inset-x-0 bottom-0 p-3" aria-hidden="true">
                  <div className="mb-1.5 h-2 w-28 rounded bg-beacon-white/70" />
                  <div className="h-1.5 w-20 rounded bg-beacon-white/35" />
                </div>

                {/* the disclosure label we attach for you */}
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-verdant/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white" aria-hidden="true">
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                  </svg>
                  AI-disclosed
                </span>

                {/* cleared-to-ship stamp */}
                <div className="absolute top-3 right-3 rotate-[-9deg]">
                  <div className="inline-flex items-center gap-1.5 rounded-md border-2 border-verdant/80 bg-white/95 px-2.5 py-1 shadow">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-verdant" aria-hidden="true">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-verdant">
                      Cleared to ship
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-slate">
                Your video &mdash; state-specific disclosure label attached, ready to post.
              </p>
            </div>

            {/* Right: the promise, framed as their last mile */}
            <div className="border-l-[6px] border-l-verdant pl-6 md:pl-8">
              <SectionLabel text="Compliance · Your last mile" color="verdant" />
              <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy mt-3 mb-5">
                Regulations are complicated. That&apos;s our problem, not yours.
              </h2>
              <p className="text-granite text-lg leading-[1.7] mb-4">
                You focus on the message only you can deliver. Making sure it
                ships clean &mdash; every disclosure, in every state you run in
                &mdash; is our job, built into your production.
              </p>
              <p className="text-granite text-lg leading-[1.7] mb-4">
                AI in campaigns is new territory, and the rules differ in every
                state. We monitor disclosure requirements and track pending
                legislation so you don&apos;t have to &mdash; and every video
                ships with a clear label tailored to your state&apos;s laws,
                built to the most current requirements we can identify.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-verdant/10 px-3 py-1.5 text-sm font-semibold text-verdant">
                  <span className="font-heading font-extrabold">50</span> states tracked
                </span>
                <span className="inline-flex items-center rounded-full bg-verdant/10 px-3 py-1.5 text-sm font-semibold text-verdant">
                  Updated as the laws change
                </span>
              </div>

              <Button variant="verdant-outline" href="/compliance">
                See how we track regulations across all 50 states &rarr;
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-slate/80 text-sm text-center max-w-[700px] mx-auto mt-12">
            CampaignAI provides compliance tools and guidance, not legal advice.
            When in doubt, consult with your campaign&apos;s legal counsel.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
