import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Leaf, Eye, Lock, Copyright } from "lucide-react";

export const ethicsColumns = [
  {
    title: "Lean by design",
    icon: Leaf,
    description:
      "We use the lightest models that still do the job. Less compute per video means smaller energy footprint and lower cost.",
  },
  {
    title: "Active Monitoring",
    icon: Eye,
    description:
      "We watch AI disclosure legislation, FEC guidance, and state-level rules as they move. When the rules change, we update before your next video.",
  },
  {
    title: "Your Data Stays Yours",
    icon: Lock,
    description:
      "We don’t sell your data, and no campaign data is used to train major AI models. Opt-in collection only. Your strategy stays yours.",
  },
  {
    title: "You Make Every Call",
    icon: Copyright,
    description:
      "The AI never runs on its own. You make every creative decision along the way, and every finished video is yours — full rights, no watermark.",
  },
];

// P2 (approved): plain commitments, rendered under the columns
export const ethicsRefusals = [
  "We will never impersonate a real person without their written consent.",
  "We will never help deceive voters about how, when, or where to vote.",
  "We will never train major AI models on your campaign's data.",
];

export const ethicsDisclaimer =
  "We don't guarantee compliance. Rules vary by state and change quickly, and what we provide is tooling and guidance, not legal advice. Confirm your video against the applicable federal, state, and local rules — and check with your campaign's counsel before you publish.";

export function EthicsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="border-l-[6px] border-l-verdant pl-6 md:pl-8 mb-12">
            <div className="mb-4">
              <SectionLabel text="Ethics-First" color="verdant" favicon />
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy mb-5">
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
          <div className="rounded-2xl border-2 border-verdant/40 bg-dawn-frost p-6 md:p-8 mb-12">
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
