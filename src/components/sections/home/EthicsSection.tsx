import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Eye, Lock, Copyright } from "lucide-react";

const columns = [
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
      "We don\u2019t sell your data. No campaign data is sent to language models for training. Opt-in collection only. Your strategy stays yours.",
  },
  {
    title: "You Own Your Content",
    icon: Copyright,
    description:
      "Every video belongs to you. Full rights, no licensing restrictions, no watermarks. You make every creative decision along the way.",
  },
];

export function EthicsSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="border-l-[6px] border-l-verdant pl-6 md:pl-8 mb-12">
            <SectionLabel text="Ethics-First" color="verdant" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy mt-3 mb-5">
              We do the work. So you don&apos;t have to.
            </h2>
            <p className="text-granite text-lg leading-[1.7] max-w-[760px]">
              AI rules for campaigns are different in every state and changing
              fast. Keeping up with all of that shouldn&apos;t be your job.
              It&apos;s ours.
            </p>
            <p className="text-granite text-lg leading-[1.7] max-w-[760px] mt-4">
              We monitor compliance across the FEC, all 50 states, and major
              platforms. Every video ships with the right safeguards built in.
            </p>
          </div>
        </ScrollReveal>

        {/* Four columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {columns.map(({ title, icon: Icon, description }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="h-full">
                <div className="w-10 h-10 rounded-lg patriot-gradient-soft flex items-center justify-center mb-3 patriot-icon">
                  <Icon className="w-5 h-5" />
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

        {/* Disclaimer */}
        <ScrollReveal>
          <p className="text-slate/80 text-sm text-center max-w-[700px] mx-auto mb-8">
            All campaigns should confirm compliance with applicable federal,
            state, and local regulations. CampaignAI works diligently to stay
            ahead of evolving rules, but we are one company and there may be
            gaps or delays. We provide tools and guidance, not legal advice.
            When in doubt, consult with your campaign&apos;s legal counsel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="blue-outline" href="/compliance">
              Read our full ethics commitment &rarr;
            </Button>
            <Button variant="blue-outline" href="/compliance">
              Learn how we track regulations across all 50 states &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
