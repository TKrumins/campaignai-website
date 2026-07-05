import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Eye, Lock, Copyright } from "lucide-react";

export const ethicsColumns = [
  {
    title: "Automatic Compliance",
    icon: ShieldCheck,
    description:
      "Every video includes the correct disclosure labels for your state. We track the rules across all 50 states and update as regulations change.",
  },
  {
    title: "Active Regulatory Monitoring",
    icon: Eye,
    description:
      "We track AI disclosure legislation, FEC guidance, and state-level rules in real time. When new rules pass, we update before your next video.",
  },
  {
    title: "Your Data Stays Yours",
    icon: Lock,
    description:
      "We don’t sell your data. No campaign data is sent to language models for training. Opt-in collection only. Your strategy stays yours.",
  },
  {
    title: "You Own Your Content",
    icon: Copyright,
    description:
      "Every video belongs to you. Full rights, no licensing restrictions, no watermarks. You make every creative decision along the way.",
  },
];

// P2 (approved): three plain commitments, rendered under the columns
export const ethicsRefusals = [
  "We will never impersonate a real person.",
  "We will never help deceive voters about how, when, or where to vote.",
  "We will never train major AI models on your campaign's data.",
];

export const ethicsDisclaimer =
  "All campaigns should confirm compliance with applicable federal, state, and local rules. We work to stay ahead of evolving regulations and provide tools and guidance, not legal advice. When in doubt, consult your campaign's legal counsel.";

export function EthicsSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="border-l-[6px] border-l-verdant pl-6 md:pl-8 mb-12">
            <SectionLabel text="Ethics-First" color="verdant" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy mt-3 mb-5">
              We do the hard ethical work.
            </h2>
            {/* P1 (approved) */}
            <p className="text-granite text-lg leading-[1.7] max-w-[760px]">
              So you can focus on the work only you can do. We built the guardrails before we built the features.
            </p>
          </div>
        </ScrollReveal>

        {/* Four columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ethicsColumns.map(({ title, icon: Icon, description }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="h-full">
                <div className="w-10 h-10 rounded-lg patriot-gradient-soft flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-regal-navy" />
                </div>
                <h3 className="font-heading font-bold text-lg text-regal-navy mb-2">
                  {title}
                </h3>
                <p className="text-granite text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* P2 (approved): the refusals block */}
        <ScrollReveal>
          <div className="rounded-2xl border-2 border-verdant/40 bg-white p-6 md:p-8 mb-12">
            <ul className="space-y-3">
              {ethicsRefusals.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-verdant font-bold mt-0.5">&#x2713;</span>
                  <span className="font-heading font-bold text-regal-navy text-base md:text-lg">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Disclaimer */}
        <ScrollReveal>
          <p className="text-slate/80 text-sm text-center max-w-[700px] mx-auto mb-8">
            {ethicsDisclaimer}
          </p>

          <div className="flex flex-col items-center justify-center gap-3">
            <Button variant="verdant-outline" href="/ethics">
              Read our full ethics commitment &rarr;
            </Button>
            <a href="/compliance" className="text-freedom-blue text-sm font-semibold hover:underline">
              How we handle 50-state compliance &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
