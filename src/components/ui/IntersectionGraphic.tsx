"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Scale, Eye, Handshake, CheckCircle } from "lucide-react";

const parties = [
  {
    label: "Republican",
    color: "bg-red-600",
    textColor: "text-red-600",
    borderColor: "border-red-600/20",
    bgTint: "bg-red-600/5",
  },
  {
    label: "Independent",
    color: "bg-purple-600",
    textColor: "text-purple-600",
    borderColor: "border-purple-600/20",
    bgTint: "bg-purple-600/5",
  },
  {
    label: "Democrat",
    color: "bg-blue-600",
    textColor: "text-blue-600",
    borderColor: "border-blue-600/20",
    bgTint: "bg-blue-600/5",
  },
];

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
    title: "Accountability across the aisle",
    description: "Our founders hold each other to a higher standard because they don't always agree.",
  },
  {
    icon: ShieldCheck,
    title: "Your trust is the product",
    description: "If campaigns on both sides trust us, we're doing something right.",
  },
];

export function IntersectionGraphic() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      {/* Convergence visual — three lanes merging */}
      <div className="relative flex flex-col items-center mb-14">
        {/* Party lanes */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-8">
          {parties.map(({ label, color, textColor, borderColor, bgTint }, i) => (
            <ScrollReveal key={label} delay={i * 150}>
              <div className={`flex flex-col items-center gap-3 rounded-2xl border ${borderColor} ${bgTint} backdrop-blur-sm px-6 sm:px-8 py-6 sm:py-8`}>
                <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${color}`} />
                <span className={`font-heading font-bold text-sm sm:text-base ${textColor}`}>
                  {label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Converging lines */}
        <ScrollReveal delay={450}>
          <div className="flex items-center justify-center gap-0 mb-2">
            <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-red-600/40 to-red-600/10 rotate-[20deg] origin-right" />
            <div className="w-8 sm:w-12 h-[2px] bg-purple-600/30" />
            <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-blue-600/40 to-blue-600/10 -rotate-[20deg] origin-left" />
          </div>
        </ScrollReveal>

        {/* Center convergence point */}
        <ScrollReveal delay={600}>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full patriot-gradient p-[3px] shadow-xl mb-4">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-regal-navy" />
              </div>
            </div>
            <p className="font-heading font-extrabold text-lg sm:text-xl text-regal-navy">
              Principles we can all agree on
            </p>
            <p className="text-slate text-sm mt-1 text-center max-w-[360px]">
              When your team disagrees on politics but agrees on principles,
              the product earns trust from everyone.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Trust signals grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {trustSignals.map(({ icon: Icon, title, description }, i) => (
          <ScrollReveal key={title} delay={700 + i * 100}>
            <div className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-regal-navy/5 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-regal-navy" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-regal-navy mb-1">
                  {title}
                </h4>
                <p className="text-slate text-sm leading-snug">
                  {description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
