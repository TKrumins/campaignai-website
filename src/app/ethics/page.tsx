import type { Metadata } from "next";
import { PenLine, Scale } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import {
  ethicsColumns,
  ethicsRefusals,
  ethicsDisclaimer,
} from "@/components/sections/home/EthicsSection";
import { TEASER_DISCLOSURE_PAGE } from "@/lib/constants";

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
              exactly why we won&apos;t let it be weaponized. We built the
              guardrails before we built the features, so you can focus on the
              work only you can do.
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
                  push back on the ways they can deceive and lean into the ways
                  they can help.
                </p>
                <p className="text-regal-navy font-semibold">
                  And the AI never runs on its own here. You make every creative
                  decision along the way. The technology does the heavy lifting;
                  the judgment is always yours.
                </p>
              </div>
            </div>
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
                  <div className="w-10 h-10 rounded-lg patriot-gradient-soft flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-regal-navy" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-regal-navy mb-2">
                    {title}
                  </h3>
                  <p className="text-granite text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The lines we won't cross */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="font-heading font-extrabold text-3xl text-regal-navy tracking-[-0.5px] mb-6 text-center">
              Lines we won&apos;t cross.
            </h2>
            <div className="rounded-2xl border-2 border-verdant/40 bg-dawn-frost p-6 md:p-8">
              <ul className="space-y-4">
                {ethicsRefusals.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="text-verdant font-bold mt-0.5">&#x2713;</span>
                    <span className="font-heading font-bold text-regal-navy text-lg">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Likenesses, avatars, deepfakes — the consent policy */}
      <section className="py-16 md:py-20 bg-dawn-frost">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="rounded-2xl bg-white ring-1 ring-black/5 p-7 md:p-10">
              <div className="w-11 h-11 rounded-lg bg-regal-navy/5 flex items-center justify-center mb-4">
                <PenLine className="w-5 h-5 text-regal-navy" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy tracking-[-0.5px] mb-3">
                On likenesses, avatars, and deepfakes.
              </h2>
              <p className="text-granite text-lg leading-relaxed mb-4">
                We will never impersonate a real person. When a video calls for a
                real person&apos;s likeness, voice, or an AI avatar of them, we
                require their <strong className="text-regal-navy">written consent first</strong> &mdash; no exceptions.
              </p>
              <p className="text-granite text-base leading-relaxed">
                The technology to fake a face is already here. Using it honestly
                is a choice, and we&apos;ve made ours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Where compliance stands */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="rounded-2xl border border-freedom-blue/25 bg-dawn-frost p-7 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-freedom-blue/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-freedom-blue" />
                </div>
                <div>
                  <h2 className="font-heading font-extrabold text-2xl text-regal-navy tracking-[-0.5px] mb-3">
                    Where compliance stands.
                  </h2>
                  <p className="text-granite text-base leading-relaxed">
                    We track the rules so you&apos;re never starting from zero, and
                    every video ships with the disclosure labels we monitor for
                    your state. But the final call is yours. {ethicsDisclaimer}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature-flagged (OFF) teaser for the hidden disclosure page */}
      {TEASER_DISCLOSURE_PAGE && (
        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <p className="text-granite text-lg">
              There is more to meaningful disclosure than a label. More soon.
            </p>
          </div>
        </section>
      )}

      {/* Close */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="verdant-outline" href="/ai-disclosure">
                Read our AI Disclosure &rarr;
              </Button>
              <Button variant="verdant-outline" href="/privacy">
                Read our Privacy Policy &rarr;
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
