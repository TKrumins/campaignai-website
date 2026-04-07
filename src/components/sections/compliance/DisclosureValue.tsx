import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Shield, TrendingUp, Newspaper, Users, Scale, CheckCircle } from "lucide-react";

const threats = [
  {
    icon: Scale,
    label: "Regulatory changes",
    description: "New laws can take effect mid-cycle. Disclosure-ready campaigns don't scramble.",
  },
  {
    icon: Users,
    label: "Public backlash",
    description: "Voters punish campaigns that hide AI use. Transparency earns trust.",
  },
  {
    icon: Newspaper,
    label: "Negative media cycles",
    description: "One undisclosed ad can become the story. Disclosure takes that risk off the table.",
  },
  {
    icon: TrendingUp,
    label: "Platform enforcement",
    description: "Social platforms are flagging and removing unlabeled AI content. Stay ahead of takedowns.",
  },
];

const benefits = [
  "Builds voter trust before it becomes a requirement",
  "Eliminates the risk of mid-campaign compliance surprises",
  "Protects your reputation from opposition research",
  "Future-proofs every ad against incoming regulations",
];

export function DisclosureValue() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="Built-In Disclosure" color="verdant" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy tracking-[-1px] mt-3 mb-5">
              Disclosure isn&apos;t a burden. It&apos;s your strongest shield.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              Every CampaignAI video ships with clear, jurisdiction-specific
              disclosure labels built in. Not because every state requires it
              yet, but because the campaigns that lead on transparency today
              are the ones that win trust tomorrow.
            </p>
          </div>
        </ScrollReveal>

        {/* Threat landscape */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {threats.map(({ icon: Icon, label, description }, i) => (
            <ScrollReveal key={label} delay={i * 100}>
              <div className="bg-dawn-frost rounded-xl p-6 h-full border border-gray-100">
                <div className="w-11 h-11 rounded-lg bg-liberty-crimson/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-liberty-crimson" />
                </div>
                <h4 className="font-heading font-bold text-sm text-regal-navy mb-1">
                  {label}
                </h4>
                <p className="text-slate text-sm leading-snug">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Shield graphic + benefits */}
        <ScrollReveal delay={400}>
          <div className="bg-regal-navy rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            {/* Shield graphic */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full patriot-gradient p-[3px]">
                <div className="w-full h-full rounded-full bg-regal-navy flex items-center justify-center">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-verdant" />
                </div>
              </div>
              <p className="font-heading font-bold text-beacon-white text-sm mt-4 uppercase tracking-wider">
                Protected
              </p>
            </div>

            {/* Benefits list */}
            <div className="flex-1">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-beacon-white mb-5">
                With CampaignAI, disclosure works for you.
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-verdant shrink-0 mt-0.5" />
                    <span className="text-beacon-white/80 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-beacon-white/50 text-xs mt-6">
                Every video includes the correct labels for your state. When
                requirements change, we update automatically. You never have
                to think about it.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
