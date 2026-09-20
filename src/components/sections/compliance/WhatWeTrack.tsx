import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { Map, Landmark, Monitor } from "lucide-react";
import {
  MarkStates,
  MarkFederal,
  MarkPlatforms,
} from "@/components/ui/graphics/ComplianceMarks";

// COPY RULE, alongside the one in ComplianceClearance: these cards describe how
// we work, not a coverage guarantee. "We monitor all 50 states" is a promise we
// would have to keep in every state on every day. "Our research reaches across"
// says the same thing about our approach without asserting completeness we
// cannot verify. Keep the distinction — it is the whole point of the Sept 2026
// language pass.
// Trimmed hard in the Sept 2026 pass, and each card now leads with a mark that
// carries its idea. Naming specific platforms or specific rules would date the
// page and commit us to keeping those examples current \u2014 so the copy stays at
// the level of what we do, and the marks do the illustrating.
const cards = [
  {
    title: "50-State Research",
    icon: Map,
    mark: MarkStates,
    top: "Our research reaches across all 50 states, D.C. and the territories, following the rules that govern AI in campaign advertising.",
    bottom: "Depth varies by state, and no research programme catches everything the moment it happens.",
  },
  {
    title: "Federal Guidance",
    icon: Landmark,
    mark: MarkFederal,
    top: "We follow federal guidance on AI in political advertising as the framework takes shape.",
    bottom: "Much of this is genuinely unsettled. We say so rather than paper over it.",
  },
  {
    title: "Digital Platforms",
    icon: Monitor,
    mark: MarkPlatforms,
    top: "Platforms are writing their own AI content policies, and they enforce them themselves.",
    bottom: "We follow them so we can format for the channels you run on. They change on their own schedule, often without notice.",
  },
];

export function WhatWeTrack() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-dawn-frost">
      <AISparkle
        size={16}
        gradient="verdant"
        className="sparkle-twinkle absolute right-[6%] top-14 hidden md:block"
        style={{ ["--dur" as string]: "4.8s" } as CSSProperties}
      />
      <AISparkle
        size={11}
        gradient="verdant-deep"
        className="sparkle-twinkle absolute left-[4%] bottom-16 hidden lg:block"
        style={{ ["--dur" as string]: "3.9s" } as CSSProperties}
      />
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <SectionLabel text="What We Monitor" color="verdant" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy tracking-[-1px] mt-3">
              We watch the rules so your video doesn&apos;t have to guess.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ title, mark: Mark, top, bottom }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div className="bg-white rounded-xl border-t-4 border-t-verdant shadow-sm p-7 h-full">
                {/* The animated mark replaces the static lucide icon — it says
                    the card's idea before the copy has to. */}
                <div className="w-14 h-14 rounded-xl bg-regal-navy flex items-center justify-center mb-5">
                  <Mark />
                </div>
                <h3 className="font-heading font-bold text-xl text-regal-navy mb-3">
                  {title}
                </h3>
                <p className="text-granite text-sm leading-relaxed mb-3">{top}</p>
                <p className="text-slate text-sm leading-relaxed">{bottom}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="text-slate text-sm leading-relaxed mt-8 max-w-[760px]">
            Monitoring is research, not a legal opinion. We share what we find and how we
            read it; your counsel decides how it applies to your race.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
