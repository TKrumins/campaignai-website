"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MultiPartyPrinciples } from "@/components/ui/MultiPartyPrinciples";
import { ShieldCheck, Scale, Eye, Handshake } from "lucide-react";

const trustSignals = [
  {
    icon: Handshake,
    title: "No single party controls the product",
    description: "Every decision is shaped by people with different political perspectives.",
  },
  {
    icon: Eye,
    title: "Transparency by design",
    description: "AI disclosure on every video. No hidden agendas. No partisan favoritism.",
  },
  {
    icon: Scale,
    title: "Accountability in every direction",
    description: "Our founders hold each other to a higher standard because they don't always agree.",
  },
  {
    icon: ShieldCheck,
    title: "Your trust is the product",
    description: "If campaigns across the spectrum trust us, we're doing something right.",
  },
];

export function IntersectionGraphic() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      {/* Convergence visual — three streams weaving into common ground */}
      <ScrollReveal>
        <div className="mb-10">
          <MultiPartyPrinciples className="max-w-[640px]" />

          <div className="mx-auto mt-2 max-w-[460px] text-center">
            <p className="font-heading text-lg font-extrabold text-regal-navy sm:text-xl">Principles we can all agree on</p>
            <p className="mt-1 text-sm text-slate">
              We don&apos;t agree on much in politics. We do agree that every campaign deserves
              professional tools &mdash; and that&apos;s the whole idea.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Trust signals grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {trustSignals.map(({ icon: Icon, title, description }, i) => (
          <ScrollReveal key={title} delay={100 + i * 100}>
            <div className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm ring-1 ring-black/5">
              <div className="w-12 h-12 rounded-lg bg-regal-navy/5 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-regal-navy" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-regal-navy mb-1">{title}</h4>
                <p className="text-slate text-sm leading-snug">{description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
