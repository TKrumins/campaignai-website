import type { Metadata } from "next";
import { PenLine, Scale, Sparkles, UserCheck, MessagesSquare, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { RedLinesToggle } from "@/components/sections/ethics/RedLinesToggle";
import { ethicsColumns, ethicsDisclaimer } from "@/components/sections/home/EthicsSection";

export const metadata: Metadata = {
  title: "Ethics - CampaignAI",
  description:
    "Truth in tech. We built the guardrails before we built the features: disclosure labels by default, written consent for any likeness, your data stays yours, and you make every creative decision. We don't guarantee compliance — we help you get it right.",
};

export default function EthicsPage() {
  return (
    <>
      {/* Hero */}
      <section data-hero className="pt-40 pb-16 bg-regal-navy">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <SectionLabel text="Ethics-First" color="verdant" />
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-beacon-white tracking-[-1px] mt-3 mb-5">
              We do the hard ethical work.
            </h1>
            <p className="text-beacon-white/85 text-lg leading-relaxed max-w-[660px] mx-auto">
              We&apos;re optimistic about what this technology can do &mdash; which is
              exactly why we won&apos;t let it be weaponized. We built the guardrails
              before we built the features, so you can focus on the work only you
              can do.
            </p>
            <p className="text-verdant font-heading font-bold text-lg mt-6">
              Our value is our values.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Truth in tech — the stance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="border-l-[6px] border-l-verdant pl-6 md:pl-10">
              <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy tracking-[-0.5px] mb-5">
                Truth in tech.
              </h2>
              <div className="space-y-4 text-granite text-lg leading-[1.7] max-w-[720px]">
                <p>
                  New technology always arrives faster than the rules around it.
                  Too few leaders are building for the next generation instead of
                  the next news cycle &mdash; and that gap is exactly where this
                  technology gets weaponized.
                </p>
                <p>
                  We&apos;re not here to slow the technology down. We&apos;re here to
                  make sure it&apos;s used honestly: to tell true stories, in your
                  words, with real disclosure. As the tools grow more powerful, we
                  push back on the ways they can deceive and lean into the ways they
                  can help.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* AI proposes → you decide */}
          <ScrollReveal>
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <div className="flex-1 rounded-2xl bg-dawn-frost p-6 ring-1 ring-black/5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-bridge-violet/15">
                    <Sparkles className="h-5 w-5 text-bridge-violet" />
                  </span>
                  <span className="font-heading font-bold text-regal-navy">The AI proposes</span>
                </div>
                <p className="text-granite text-sm leading-relaxed">
                  It drafts, suggests, and does the heavy lifting &mdash; scripts,
                  storyboards, and options for you to react to.
                </p>
              </div>
              <ArrowRight className="mx-auto h-6 w-6 shrink-0 rotate-90 text-slate sm:rotate-0" />
              <div className="flex-1 rounded-2xl bg-regal-navy p-6 shadow-md">
                <div className="mb-2 flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-verdant/20">
                    <UserCheck className="h-5 w-5 text-verdant" />
                  </span>
                  <span className="font-heading font-bold text-beacon-white">You decide</span>
                </div>
                <p className="text-beacon-white/75 text-sm leading-relaxed">
                  Every creative call is yours. The AI never runs on its own here &mdash;
                  the judgment is always human, and always yours.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Where we draw the line — interactive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel text="Where we draw the line" color="verdant" />
              <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy tracking-[-0.5px] mt-3">
                Hard limits, and the honest work on the other side of them.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <RedLinesToggle />
          </ScrollReveal>
        </div>
      </section>

      {/* The commitment columns */}
      <section className="py-16 md:py-20 bg-dawn-frost">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-extrabold text-3xl text-regal-navy tracking-[-0.5px] mb-10 text-center">
              What that looks like in practice.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ethicsColumns.map(({ title, icon: Icon, description }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white ring-1 ring-black/5 p-6 md:p-8">
                  <div className="w-10 h-10 rounded-lg bg-verdant/12 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-verdant" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-regal-navy mb-2">{title}</h3>
                  <p className="text-granite text-base leading-relaxed">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Likenesses, avatars, deepfakes — the consent policy + satire note */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="rounded-2xl bg-dawn-frost ring-1 ring-black/5 p-7 md:p-10">
              <div className="w-11 h-11 rounded-lg bg-regal-navy/5 flex items-center justify-center mb-4">
                <PenLine className="w-5 h-5 text-regal-navy" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy tracking-[-0.5px] mb-3">
                On likenesses, avatars, and deepfakes.
              </h2>
              <p className="text-granite text-lg leading-relaxed mb-4">
                We will never impersonate a real person. When a video calls for a real
                person&apos;s likeness, voice, or an AI avatar of them, we require their{" "}
                <strong className="text-regal-navy">written consent first</strong> &mdash; no exceptions.
              </p>
              <p className="text-granite text-base leading-relaxed">
                The technology to fake a face is already here. Using it honestly is a
                choice, and we&apos;ve made ours.
              </p>

              {/* Satire / parody note */}
              <div className="mt-6 rounded-xl border-l-4 border-l-verdant bg-white p-5">
                <p className="font-heading font-bold text-regal-navy mb-1.5">On satire and parody.</p>
                <p className="text-granite text-base leading-relaxed">
                  Our consent rule isn&apos;t a limit on satire. A real person performing an
                  impression or a parody is protected speech, made with their own voice and
                  face. Generating a synthetic version of a real person &mdash; from their
                  likeness, voice, or data, without their consent &mdash; is something else
                  entirely. The difference is consent, and that&apos;s the line we hold.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Where compliance stands */}
      <section className="py-16 md:py-20 bg-dawn-frost">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="rounded-2xl border border-freedom-blue/25 bg-white p-7 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-freedom-blue/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-freedom-blue" />
                </div>
                <div>
                  <h2 className="font-heading font-extrabold text-2xl text-regal-navy tracking-[-0.5px] mb-3">
                    Where compliance stands.
                  </h2>
                  <p className="text-granite text-base leading-relaxed">
                    We track the rules so you&apos;re never starting from zero, and every
                    video ships with the disclosure labels we monitor for your state. But the
                    creative choices &mdash; and the final call &mdash; are yours. {ethicsDisclaimer}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Build it in the open — feedback & engagement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-verdant/12 mx-auto mb-4">
              <MessagesSquare className="h-6 w-6 text-verdant" />
            </div>
            <h2 className="font-heading font-extrabold text-3xl text-regal-navy tracking-[-0.5px] mb-4">
              We&apos;d rather be challenged than assumed right.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-[680px] mx-auto mb-6">
              These commitments only hold if people hold us to them. We build this in
              the open &mdash; through surveys, roundtables, community discussions, and
              events &mdash; and we change our minds in public when the argument is
              better. Tell us where we&apos;re getting it right, and where we&apos;re not.
            </p>
            <Button variant="verdant-outline" href="/community">
              Join the conversation &rarr;
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Close */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="verdant-outline" href="/compliance">
                See how we handle compliance &rarr;
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
