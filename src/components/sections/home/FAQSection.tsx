"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

const faqs = [
  {
    question: "How fast do I get my video?",
    answer:
      "Most videos are delivered within 48 hours of completing the guided production process. Complex projects with custom footage may take slightly longer.",
  },
  {
    question: "Do I need any video or design experience?",
    answer:
      "None at all. Our guided process walks you through every step, from scripting to visuals to narration. You make the creative decisions; we handle the production.",
  },
  {
    question: "What if I\u2019m not happy with the result?",
    answer:
      "Every video includes one revision during production and one back-and-forth with our editors in post-production. We work with you until the final product represents your campaign.",
  },
  {
    question: "Is my campaign data safe?",
    answer:
      "Yes. We don\u2019t sell your data, and no campaign data is sent to language models for training. Collection is opt-in only. Your strategy stays yours.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
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
  );
}
