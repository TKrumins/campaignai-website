import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PricingTiers } from "@/components/sections/shared/PricingTiers";
import { ETHICS_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing - CampaignAI",
  description:
    "Professional campaign video starting at $1,999. Candidate campaigns starting at $599. A flat starting rate for one finished video, with add-ons priced on your onboarding call.",
};

const faqs = [
  {
    question: "How much does a video cost?",
    answer:
      "Professional video starts at $1,999. Candidate campaigns start at $599 as our 2026 midterm cycle mission rate, from school board to U.S. Senate. Nonprofits and advocacy organizations receive mission pricing on a case-by-case basis. Every price is a flat starting rate for one finished video, and any add-ons are priced on your onboarding call, so you always know the full cost before you commit.",
  },
  {
    question: "What does the starting rate include, and what is an add-on?",
    answer:
      "The starting rate covers one finished, human-reviewed video in 15-, 30-, and 60-second cuts, in every format, with state-specific disclosure labels and full ownership. No watermark and no per-use fees. Add-ons are anything beyond that single finished video: custom footage, additional concepts, more videos, extra languages, or rush delivery. We walk through the options and price them on your 30-minute onboarding call, before anything goes into production.",
  },
  {
    question: "How fast do I get my video?",
    answer:
      "Move through the planning process at your own pace. Once you feel ready, submit for post-production and receive a video for review within 48 hours.",
  },
  {
    question: "Do I need any video or design experience?",
    answer:
      "None at all. Our guided process walks you through every step, from scripting to visuals to narration. You make the creative decisions; we handle the production.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "Every video comes with a free round of revisions and extras available for purchase. Even better, you set the direction from the start: our intake process makes sure you're confident in exactly where your video is headed before it ever reaches production.",
  },
  {
    question: "Is my campaign data safe?",
    answer:
      "We do not sell your data. No campaign data is sent to language models for training. Collection is opt-in only, and each campaign is fully gated.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-12 bg-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <SectionLabel text="Pricing" />
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-4">
              Professional campaign video. No agency required.
            </h1>
            <p className="text-granite text-lg leading-relaxed max-w-[620px] mx-auto">
              A flat starting rate for one finished video, with any add-ons
              priced on your onboarding call, so you always know the full cost
              before you commit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing cards — shared with the homepage so the two always match */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTiers />

          <ScrollReveal delay={320}>
            <p className="text-center text-granite text-base mt-10">
              <span className="text-verdant mr-1.5">&#x2713;</span>
              {ETHICS_LINE}
            </p>
            <p className="text-center text-slate text-xs mt-4">
              Agency production costs range significantly with the size and competitiveness of the race.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-dawn-frost">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <SectionLabel text="FAQ" />
              <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy tracking-[-1px] mt-3">
                Common questions
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQAccordion items={faqs} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
