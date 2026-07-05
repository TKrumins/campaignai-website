import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import {
  ethicsColumns,
  ethicsRefusals,
  ethicsDisclaimer,
} from "@/components/sections/home/EthicsSection";
import { ETHICS_LINE, TEASER_DISCLOSURE_PAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ethics - CampaignAI",
  description:
    "Our full ethics commitment: automatic compliance, active regulatory monitoring, your data stays yours, and you own your content. We built guardrails before we built features.",
};

export default function EthicsPage() {
  return (
    <>
      {/* Hero */}
      <section data-hero className="pt-40 pb-16 bg-regal-navy">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <SectionLabel text="Ethics-First" color="verdant" />
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-beacon-white tracking-[-1px] mt-3 mb-5">
              We do the work. So you don&apos;t have to.
            </h1>
            <p className="text-beacon-white/85 text-lg leading-relaxed max-w-[640px] mx-auto">
              We built guardrails before we built features. Here&apos;s what that means in practice.
            </p>
            <p className="text-beacon-white font-medium text-base mt-6">
              <span className="text-verdant mr-1.5">&#x2713;</span>
              {ETHICS_LINE}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The commitment columns */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ethicsColumns.map(({ title, icon: Icon, description }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-dawn-frost p-6 md:p-8">
                  <div className="w-10 h-10 rounded-lg patriot-gradient-soft flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-regal-navy" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-regal-navy mb-2">
                    {title}
                  </h2>
                  <p className="text-granite text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The refusals */}
      <section className="py-16 md:py-20 bg-dawn-frost">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="font-heading font-extrabold text-3xl text-regal-navy tracking-[-0.5px] mb-6 text-center">
              Three things we will never do.
            </h2>
            <div className="rounded-2xl border-2 border-verdant/40 bg-white p-6 md:p-8">
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

      {/* Disclaimer + close */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-slate/80 text-sm leading-relaxed mb-10">
              {ethicsDisclaimer}
            </p>
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
