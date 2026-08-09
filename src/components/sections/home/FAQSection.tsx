"use client";

import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

const faqs = [
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
    question: "What if I\u2019m not happy with the result?",
    answer:
      "Every video comes with a free round of revisions and extras available for purchase. Even better, you set the direction from the start: our intake process makes sure you're confident in exactly where your video is headed before it ever reaches production.",
  },
  {
    question: "Is my campaign data safe?",
    answer:
      "We do not sell your data. No campaign data is sent to language models for training. Collection is opt-in only, and each campaign is fully gated.",
  },
];

export function FAQSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white">
      <AISparkle
        size={18}
        color="#8E5CF7"
        glow
        className="sparkle-twinkle absolute left-[8%] top-24 hidden md:block"
        style={{ ["--dur"]: "4.1s" } as CSSProperties}
      />
      <AISparkle
        size={12}
        color="#B8B8B8"
        className="sparkle-twinkle absolute right-[9%] bottom-24 hidden lg:block"
        style={{ ["--dur"]: "5.6s" } as CSSProperties}
      />
      <div className="relative max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="mb-4">
              <SectionLabel text="FAQ" favicon />
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy tracking-[-1px]">
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
