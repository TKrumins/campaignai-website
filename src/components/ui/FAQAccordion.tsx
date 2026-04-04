"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="divide-y divide-gray-200">
      {items.map(({ question, answer }, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-heading font-bold text-regal-navy text-lg">
              {question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-freedom-blue shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-[1000px] pb-5" : "max-h-0"
            }`}
          >
            <p className="text-granite leading-relaxed">{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
