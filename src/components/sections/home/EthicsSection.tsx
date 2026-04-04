import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const columns = [
  {
    title: "Automatic Compliance",
    description:
      "Every video is tagged with the correct disclosure labels for your state. All AI-generated content is clearly marked to stay ahead of regulations and public sentiment. We track the rules across all 50 states and update as regulations change, so you don't have to.",
  },
  {
    title: "Active Regulatory Monitoring",
    description:
      "Our regulations team tracks AI disclosure legislation, FEC guidance, and state-level campaign technology rules in real time. When new rules pass, we update our systems before your next video. You focus on your campaign. We focus on keeping you compliant.",
  },
  {
    title: "Your Data Stays Yours",
    description:
      "We don't sell campaign data, voter data, or usage data. Your strategy, your content, and your information are your property. No data is sent to language models for their training. We offer opt-in data collection only to improve our services and speed up video production for your campaign. We will never monetize what belongs to you.",
  },
  {
    title: "You Own Your Content",
    description:
      "Every video you produce with CampaignAI belongs to you. Full rights, no licensing restrictions. CampaignAI does not add a company watermark. Your content is yours to use however you choose. Our process ensures that the videos you produce are legally yours, because you make every creative decision along the way.",
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
              The regulatory landscape around campaign technology is complex and
              changing fast. New AI bills are being introduced nearly every week.
              The rules you need to follow in Michigan or Vermont aren&apos;t the
              same rules you need in Texas or Oregon.
            </p>
            <p className="text-granite text-lg leading-[1.7] max-w-[760px] mt-4">
              Keeping up with all of that shouldn&apos;t be your job. It&apos;s ours.
            </p>
            <p className="text-granite text-lg leading-[1.7] max-w-[760px] mt-4">
              CampaignAI monitors compliance requirements across the FEC, all 50
              states, and the major social media platforms. We build the right
              safeguards into every video before it reaches you. The content you
              produce stays ahead of the curve, not behind it.
            </p>
          </div>
        </ScrollReveal>

        {/* Four columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {columns.map(({ title, description }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="h-full">
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
