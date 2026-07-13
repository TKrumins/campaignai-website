"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export interface FunnelFAQItem {
  q: string;
  a: string;
}

interface FunnelFAQProps {
  /** Section eyebrow; defaults to a neutral objection-handling label. */
  label?: string;
  labelColor?: "blue" | "crimson" | "verdant" | "gold" | "horizon";
  heading?: string;
  items: FunnelFAQItem[];
  tone?: "white" | "frost";
}

/**
 * Objection-handling accordion (funnel step just before the booking CTA). Every
 * /for/* page carries the two or three doubts that actually stall its buyer at
 * the click — this catches them in the buyer's own voice right before they act.
 *
 * One row open at a time; the panel eases open via a max-height transition, and
 * the "+" rotates to an "×". Reduced-motion users still get instant open/close
 * (the transition simply collapses to 0ms under the media query in globals).
 */
export function FunnelFAQ({
  label = "Before you book",
  labelColor = "blue",
  heading = "The questions everyone asks first.",
  items,
  tone = "white",
}: FunnelFAQProps) {
  const [open, setOpen] = useState<number | null>(null);
  const bg = tone === "white" ? "bg-white" : "bg-dawn-frost";

  return (
    <section className={`py-16 md:py-20 ${bg}`}>
      <div className="mx-auto max-w-[760px] px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <SectionLabel text={label} color={labelColor} />
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-4xl">
              {heading}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ul className="flex flex-col gap-3">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue md:px-6 md:py-5"
                  >
                    <span className="font-heading text-base font-bold text-regal-navy md:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-regal-navy/5 text-regal-navy transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-granite md:px-6 md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
