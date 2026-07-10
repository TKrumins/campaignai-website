"use client";

import {
  ShieldCheck,
  UserCheck,
  Sparkles,
  Scale,
  Lock,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BadgeWithTooltip } from "@/components/ui/BadgeWithTooltip";
import { ETHICS_LINE } from "@/lib/constants";

const allBadges = [
  {
    icon: ShieldCheck,
    label: "Meaningful Disclosure Framework",
    tooltip:
      "We tell your voters what is created and what is captured, so they always know what they are seeing.",
  },
  {
    icon: UserCheck,
    label: "Human-Reviewed",
    tooltip:
      "Every video is reviewed and finished by a real person before it reaches you.",
  },
  {
    icon: Sparkles,
    label: "AI Only Where It Helps",
    tooltip:
      "We design our process to use AI only where it genuinely helps, which keeps our energy footprint lower and our work faster.",
  },
  {
    icon: Scale,
    label: "FEC & State Compliance Aware",
    tooltip:
      "We track the rules that apply to campaign advertising so your video starts on the right side of them.",
  },
  {
    icon: Lock,
    label: "Privacy-First",
    tooltip:
      "Your campaign's information stays with your campaign. We never share it across campaigns.",
  },
];

export function TrustBarSection() {
  return (
    <section className="bg-regal-navy">
      {/* gradient seal: closes out the scrolling hero */}
      <div className="h-1.5 multipartisan-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <ScrollReveal>
          <p className="text-center text-beacon-white/50 text-xs font-semibold uppercase tracking-[3px] mb-7">
            The standards behind every video
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {allBadges.map((badge) => (
              <BadgeWithTooltip key={badge.label} tone="navy" {...badge} />
            ))}
          </div>

          {/* Ethics-as-feature line (2.3) */}
          <p className="text-center text-beacon-white font-medium text-base mt-7">
            <span className="text-verdant mr-1.5">&#x2713;</span>
            {ETHICS_LINE}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
