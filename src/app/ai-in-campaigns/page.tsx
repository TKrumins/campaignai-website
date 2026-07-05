import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlossaryGrid } from "@/components/sections/glossary/GlossaryGrid";
import { SuggestEntry } from "@/components/sections/glossary/SuggestEntry";
import { ExperiencesRow } from "@/components/sections/experiences/ExperiencesRow";
import { EXPERIENCE_ROUTES } from "@/lib/constants";

// This page is the site's organic search asset: real attention on title/meta.
export const metadata: Metadata = {
  title: "AI in Campaigns: The Living Glossary of Political AI Terms",
  description:
    "Plain-language definitions of every AI term used in political campaigns: deepfakes, voice cloning, microtargeting, voter files, disclosure labels, and more. What each one is, why it matters to voters, and how to spot it. Party-neutral and reviewed by humans.",
  openGraph: {
    title: "AI in Campaigns: The Living Glossary",
    description:
      "What voice cloning, microtargeting, and algorithmic feeds actually are, why they matter, and how to spot them. Plain language, party-neutral, human-reviewed.",
  },
};

export default function AiInCampaignsPage() {
  return (
    <>
      {/* Hero */}
      <section data-hero className="pt-40 pb-14 bg-regal-navy">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-freedom-blue text-sm font-semibold uppercase tracking-[1.5px] mb-5">
            The Living Glossary
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-[52px] md:leading-[1.1] text-beacon-white tracking-[-1px] mb-5">
            AI is already in every campaign. Learn its vocabulary.
          </h1>
          <p className="text-beacon-white/85 text-lg leading-relaxed max-w-[640px] mx-auto">
            Plain-language answers for every term: what it is, why it matters, and how to spot it. No hype, no fear, no party lines.
          </p>
        </div>
      </section>

      {/* Glossary database */}
      <section className="py-14 md:py-20 bg-dawn-frost">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <GlossaryGrid />
        </div>
      </section>

      {/* Go deeper: the interactive experiences (soft CTA row) */}
      <ExperiencesRow
        routes={EXPERIENCE_ROUTES}
        heading="Go deeper. See it, don't just read it."
        subhead="Five short interactive experiences that show how AI actually shows up in campaigns, and where the human stays in charge."
        tone="white"
      />

      {/* Suggest an entry */}
      <section className="py-14 md:py-20 bg-dawn-frost">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SuggestEntry />
          </ScrollReveal>
        </div>
      </section>

      {/* Soft CTA only (no purchase hard-sell on this page) */}
      <section className="py-14 bg-white">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl text-regal-navy mb-3">
              Want the conversation, not just the vocabulary?
            </h2>
            <p className="text-granite text-base leading-relaxed mb-5">
              Our Substack Community digs into these questions with candidates,
              operatives, researchers, and voters across the spectrum.
            </p>
            <Link
              href="/community"
              className="btn-hover inline-flex items-center justify-center text-center rounded-full border-2 border-freedom-blue px-6 py-3 text-freedom-blue text-sm font-semibold hover:bg-freedom-blue hover:text-white transition-colors"
            >
              Visit the Substack Community &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
