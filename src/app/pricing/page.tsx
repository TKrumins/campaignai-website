import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CondensedPricingDisplay } from "@/components/sections/shared/CondensedPricingDisplay";

export const metadata: Metadata = {
  title: "Pricing - CampaignAI",
  description:
    "Professional campaign video starting at $1,999. Candidate campaigns starting at $599. Flat starting rates with add-ons priced upfront.",
};

const faqs = [
  {
    question: "How much does a video cost?",
    answer:
      "Professional video starts at $1,999. Candidate campaigns start at $599 as our 2026 midterm cycle mission rate, from school board to U.S. Senate. Nonprofits and advocacy organizations receive mission pricing on a case-by-case basis. All pricing is a flat starting rate with add-ons priced upfront, so you always know the cost before you commit. Agency production costs range significantly with the size and competitiveness of the race.",
  },
  {
    question: "How fast do I get my video?",
    answer:
      "Most videos are delivered within 48 hours of completing the guided production process and submitting to our editors. Complex projects with custom footage may take slightly longer.",
  },
  {
    question: "Do I need any video or design experience?",
    answer:
      "None at all. Our guided process walks you through every step, from scripting to visuals to narration. You make the creative decisions; we handle the production.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "Every video includes 3 revisions during production and 1 back-and-forth with our editors in post-production. We work with you until the final product represents your campaign.",
  },
  {
    question: "Is my campaign data safe?",
    answer:
      "Yes. We don't sell your data, and no campaign data is sent to language models for training. Collection is opt-in only. Your strategy stays yours.",
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
            <p className="text-granite text-lg leading-relaxed max-w-[600px] mx-auto">
              Flat starting rates with add-ons priced upfront, so you always know the cost before you commit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Condensed pricing display + America 250 module */}
      <CondensedPricingDisplay showCtas />

      {/* Transparency note */}
      <section className="py-10 bg-white">
        <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-granite text-sm leading-relaxed">
              All pricing is a flat starting rate with add-ons priced upfront. You will always know the full cost before you commit to production.
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
