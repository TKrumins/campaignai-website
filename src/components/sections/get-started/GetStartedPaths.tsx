"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

function FlowPill({ text, tone = "dark" }: { text: string; tone?: "dark" | "light" }) {
  return (
    <span
      className={`inline-block rounded-full text-xs font-medium px-3 py-1 ${
        tone === "dark" ? "bg-white/10 text-white" : "bg-dawn-frost text-regal-navy"
      }`}
    >
      {text}
    </span>
  );
}

export function GetStartedPaths() {
  return (
    <section id="waitlist" className="py-16 md:py-20 bg-dawn-frost scroll-mt-24">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-[640px] mx-auto mb-10">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mb-3">
              Two ways to make your video.
            </h2>
            <p className="text-granite text-base">
              One you can start today. One that&apos;s on the way &mdash; and you
              make every creative call either way.
            </p>
          </div>
        </ScrollReveal>

        {/* Availability widget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Available now */}
          <ScrollReveal>
            <div className="rounded-2xl bg-regal-navy p-6 md:p-8 h-full flex flex-col text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-freedom-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-freedom-blue" />
                </span>
                <span className="text-freedom-blue text-xs font-bold uppercase tracking-widest">
                  Available now
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">
                Work with our team
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-5 flex-1">
                You plan your video on our platform with AI-powered guidance, and
                our human editors polish every frame. Professional results without
                a production background.
              </p>
              <div className="flex flex-wrap gap-2">
                <FlowPill text="Buy your video" />
                <span className="text-white/40 text-xs self-center">&rarr;</span>
                <FlowPill text="Plan it" />
                <span className="text-white/40 text-xs self-center">&rarr;</span>
                <FlowPill text="We polish it" />
              </div>
            </div>
          </ScrollReveal>

          {/* Coming soon */}
          <ScrollReveal delay={100}>
            <div
              className="rounded-2xl bg-white p-6 md:p-8 h-full flex flex-col relative overflow-hidden"
              style={{ border: "2px solid transparent", backgroundClip: "padding-box" }}
            >
              {/* Bridge gradient border */}
              <span
                className="absolute inset-0 rounded-2xl -z-10"
                style={{
                  padding: "2px",
                  background: "linear-gradient(135deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  borderRadius: "inherit",
                }}
              />
              {/* Sheen animation */}
              <span className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none sheen-sweep" />

              <div className="flex items-center gap-2 mb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-pioneer-gold" />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{
                    background: "linear-gradient(135deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Coming soon
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-regal-navy mb-3">
                Create it all yourself
              </h3>
              <p className="text-granite text-sm leading-relaxed mb-5 flex-1">
                Soon you&apos;ll create your own videos end to end &mdash; script,
                storyboard, and final cut, on your own schedule, faster and more
                affordably than ever.
              </p>
              <div className="flex flex-wrap gap-2">
                <FlowPill text="Sign in" tone="light" />
                <span className="text-slate/40 text-xs self-center">&rarr;</span>
                <FlowPill text="Create end to end" tone="light" />
                <span className="text-slate/40 text-xs self-center">&rarr;</span>
                <FlowPill text="Publish" tone="light" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Single waitlist form */}
        <ScrollReveal delay={150}>
          <div id="waitlist-form" className="max-w-[560px] mx-auto scroll-mt-24">
            <div className="text-center mb-5">
              <h3 className="font-heading font-bold text-2xl text-regal-navy mb-2">
                Want to create videos yourself?
              </h3>
              <p className="text-granite text-sm max-w-[440px] mx-auto">
                Join the waitlist for the self-serve platform. Just your name and
                email &mdash; be first in line when it launches.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
              <WaitlistForm />
            </div>
            <p className="text-slate/80 text-xs mt-3 text-center max-w-md mx-auto">
              It ships when it meets the same bar as everything else we make.
              We&apos;d rather be right than first.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
