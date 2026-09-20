import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TrendingUp, Newspaper, Users, Scale, CheckCircle } from "lucide-react";
import { MarkShield } from "@/components/ui/graphics/ComplianceMarks";

// Trimmed to one line each. These are the four ways it goes wrong, and the
// shorter they are the harder they land. Crimson stays here on purpose — it is
// the only place on this page where the colour is doing semantic work, marking
// the threat the verdant shield below answers.
const threats = [
  {
    icon: Scale,
    label: "Rules change mid-cycle",
    description: "Disclosure-ready campaigns don't scramble.",
  },
  {
    icon: Users,
    label: "It becomes their talking point",
    description: "Disclose first and the story stays yours.",
  },
  {
    icon: Newspaper,
    label: "One ad becomes the story",
    description: "Hard to write that story about a campaign that said so up front.",
  },
  {
    icon: TrendingUp,
    label: "Platforms act on their own",
    description: "Labelled content doesn't get caught in it.",
  },
];

const benefits = [
  "Trust built before anyone requires it",
  "Fewer surprises in the middle of a cycle",
  "Less for opposition research to work with",
  "Ready for rules that haven't landed yet",
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
            {/* The value pitch, kept to one idea: disclosure is leverage, not a
                tax. Deliberately does not enumerate what ships or what any
                state requires — that would be a specification, and this page is
                a direction. */}
            <p className="text-granite text-lg leading-relaxed">
              Disclosure built in from the start costs you nothing you were
              keeping. What it buys you is the harder thing to get back: the
              campaigns that lead on transparency now are the ones still trusted
              when the rules catch up.
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
            {/* The shield draws itself closed, a check forms inside, and a ring
                pulses out past it. It replaced a static icon in the patriot
                gradient — this section is the page's actual argument, and it
                should feel like cover closing over you rather than a rule being
                enforced on you. Verdant, like the rest of the compliance thread. */}
            <div className="shrink-0 flex flex-col items-center">
              <MarkShield />
              <p className="font-heading font-bold text-beacon-white text-sm mt-3 uppercase tracking-wider">
                Prepared
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
                A starting point for your counsel, not a substitute for their
                review &mdash; and never a guarantee of compliance.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
