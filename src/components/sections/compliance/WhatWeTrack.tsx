import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Map, Landmark, Monitor } from "lucide-react";

const cards = [
  {
    title: "50-State Tracking",
    icon: Map,
    top: "We monitor AI disclosure legislation, campaign advertising rules, and political communication regulations across all 50 states, D.C., and territories.",
    bottom: "Our team reviews pending bills, newly signed laws, attorney general guidance, and enforcement actions. When rules change, your next video reflects it automatically.",
  },
  {
    title: "Federal Compliance",
    icon: Landmark,
    top: "We track FEC advisories, proposed rulemaking, and federal guidance on AI in political advertising as the regulatory framework takes shape.",
    bottom: "We monitor congressional hearings, agency comment periods, and enforcement guidance so our platform reflects federal expectations before they become priorities.",
  },
  {
    title: "Digital Platforms",
    icon: Monitor,
    top: "Social media platforms are rolling out their own AI content policies, from Meta\u2019s labeling requirements to YouTube\u2019s disclosure mandates and TikTok\u2019s synthetic media rules.",
    bottom: "We track platform-specific policies so every video you produce meets the requirements of the channels where it runs, without extra work on your end.",
  },
];

export function WhatWeTrack() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <SectionLabel text="What We Monitor" color="verdant" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy tracking-[-1px] mt-3">
              Automated AND Crowdsourced Regulatory Tracking
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ title, icon: Icon, top, bottom }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div className="bg-white rounded-xl border-t-4 border-t-verdant shadow-sm p-7 h-full">
                <div className="w-11 h-11 rounded-lg bg-verdant/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-verdant" />
                </div>
                <h3 className="font-heading font-bold text-xl text-regal-navy mb-3">
                  {title}
                </h3>
                <p className="text-granite text-sm leading-relaxed mb-3">{top}</p>
                <p className="text-granite text-sm leading-relaxed">{bottom}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
