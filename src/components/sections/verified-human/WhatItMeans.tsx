import { X, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhatItMeans() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel text="What it actually means" />
            <h2 className="mt-3 mb-5 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
              Not &ldquo;no AI was used.&rdquo; Something you can actually stand behind.
            </h2>
            <p className="text-lg leading-relaxed text-granite">
              &ldquo;AI-free&rdquo; is a promise almost no modern video can honestly
              make &mdash; and it isn&apos;t the promise voters need anyway. The one
              that matters is accountability: a real campaign shaped this, approved
              it, and put their name on it.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {/* The promise nobody can keep */}
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-gray-200 bg-dawn-frost/60 p-7">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate/15">
                  <X className="h-4 w-4 text-slate" strokeWidth={3} />
                </span>
                <span className="font-heading text-lg font-bold text-slate">The old promise</span>
              </div>
              <p className="font-heading text-xl font-bold text-regal-navy">&ldquo;No AI was involved.&rdquo;</p>
              <p className="mt-3 text-granite leading-relaxed">
                Impossible to prove, easy to fake, and beside the point. It tells a
                voter nothing about who is responsible for what they&apos;re watching
                &mdash; and it quietly punishes campaigns for using modern tools well.
              </p>
            </div>
          </ScrollReveal>

          {/* The promise that matters */}
          <ScrollReveal delay={100}>
            <div className="h-full rounded-2xl border border-freedom-blue/25 bg-white p-7 shadow-sm ring-1 ring-freedom-blue/10">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-freedom-blue/15">
                  <Check className="h-4 w-4 text-freedom-blue" strokeWidth={3} />
                </span>
                <span className="font-heading text-lg font-bold text-freedom-blue">The one that matters</span>
              </div>
              <p className="font-heading text-xl font-bold text-regal-navy">&ldquo;A real campaign made and approved this.&rdquo;</p>
              <p className="mt-3 text-granite leading-relaxed">
                Because our process requires you to make and sign off on every
                creative decision, we can guarantee what voters actually care about:
                a real, accountable person &mdash; your campaign &mdash; stood behind
                this video. Not an AI running on its own. Not an outsider putting words
                in your mouth.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* The broadcast heritage line */}
        <ScrollReveal>
          <p className="mx-auto mt-14 max-w-[820px] text-center text-lg leading-relaxed text-granite">
            On television, <span className="font-semibold text-regal-navy">&ldquo;I&apos;m ___ and I approve this
            message&rdquo;</span> has carried this weight for decades. On social, where
            AI slop spreads faster than anyone can fact-check it, a spoken line
            isn&apos;t enough. Verified Human carries that same accountability into a
            file &mdash; where it can&apos;t be stripped off and can be checked by anyone.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
