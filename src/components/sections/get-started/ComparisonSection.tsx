import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { feature: "Professional quality video", campaignai: true, agency: true, diy: false },
  { feature: "Built-in compliance & disclosure", campaignai: true, agency: "varies", diy: false },
  { feature: "48-hour turnaround", campaignai: true, agency: false, diy: "varies" },
  { feature: "Multi-format delivery", campaignai: true, agency: true, diy: false },
  { feature: "Human-edited by real producers", campaignai: true, agency: true, diy: false },
  { feature: "No production experience needed", campaignai: true, agency: true, diy: false },
  { feature: "Affordable for local races", campaignai: true, agency: false, diy: true },
  { feature: "Scales with your campaign", campaignai: true, agency: "varies", diy: false },
  { feature: "You own all content", campaignai: true, agency: "varies", diy: true },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-verdant" />;
  if (value === false) return <X className="w-5 h-5 text-liberty-crimson/60" />;
  return <Minus className="w-5 h-5 text-slate/40" />;
}

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionLabel text="Compare Your Options" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mt-3 mb-4">
              The old way costs more and delivers less.
            </h2>
            <p className="text-granite text-lg max-w-[600px] mx-auto">
              See how CampaignAI stacks up against traditional agencies and
              doing it all yourself.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison table */}
        <ScrollReveal delay={100}>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_90px_90px_90px] sm:grid-cols-[1fr_120px_120px_120px] border-b border-gray-100">
              <div className="p-4 sm:p-5" />
              <div className="p-4 sm:p-5 text-center bg-regal-navy rounded-tl-none">
                <p className="font-heading font-bold text-xs sm:text-sm text-beacon-white leading-tight">
                  CampaignAI
                </p>
              </div>
              <div className="p-4 sm:p-5 text-center">
                <p className="font-heading font-bold text-xs sm:text-sm text-slate leading-tight">
                  Agency / Consultant
                </p>
              </div>
              <div className="p-4 sm:p-5 text-center">
                <p className="font-heading font-bold text-xs sm:text-sm text-slate leading-tight">
                  DIY
                </p>
              </div>
            </div>

            {/* Rows */}
            {rows.map(({ feature, campaignai, agency, diy }, i) => (
              <div
                key={feature}
                className={`grid grid-cols-[1fr_90px_90px_90px] sm:grid-cols-[1fr_120px_120px_120px] ${
                  i < rows.length - 1 ? "border-b border-gray-50" : ""
                }`}
              >
                <div className="p-4 sm:p-5 flex items-center">
                  <span className="text-sm text-granite">{feature}</span>
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center bg-regal-navy/[0.02]">
                  <StatusIcon value={campaignai} />
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center">
                  <StatusIcon value={agency} />
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center">
                  <StatusIcon value={diy} />
                </div>
              </div>
            ))}

            {/* Cost row */}
            <div className="grid grid-cols-[1fr_90px_90px_90px] sm:grid-cols-[1fr_120px_120px_120px] border-t-2 border-gray-100 bg-dawn-frost/50">
              <div className="p-4 sm:p-5 flex items-center">
                <span className="text-sm font-bold text-regal-navy">Typical cost per video</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center bg-regal-navy/[0.03]">
                <span className="font-heading font-bold text-sm text-verdant">Fraction</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center">
                <span className="font-heading font-bold text-sm text-liberty-crimson">$10,000+</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center">
                <span className="font-heading font-bold text-sm text-slate">Free*</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-slate text-xs text-center mt-4">
            *DIY is free in dollars, but costs hundreds of hours and rarely
            produces broadcast-quality results.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
