import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Users, Globe, ShieldAlert, Bot, Handshake } from "lucide-react";

const timeline = [
  {
    icon: Bot,
    year: "2019",
    title: "Raising the alarm on AI.",
    body: "Jermaine Johnson and Tom Krumins served as grassroots and political leads for Andrew Yang\u2019s 2020 presidential campaign, one of the first national efforts to raise public awareness about the coming AI wave and its impact on jobs, the economy, and democracy. That experience shaped their understanding of what AI could do and what guardrails it would need.",
  },
  {
    icon: ShieldAlert,
    year: "2022 \u2013 Present",
    title: "Holding Big Tech accountable.",
    body: "Brandon Guffey has led national efforts to hold Big Tech platforms accountable for child safety, passing landmark legislation as a freshman legislator and testifying before the U.S. Senate Judiciary Committee. Tom Krumins worked in the same space, scaling national and global movements, and coordinating advocates to address online sexual exploitation and abuse of children. Their shared conviction that technology must protect people, not exploit them, is foundational to how CampaignAI is built.",
  },
  {
    icon: Users,
    year: "2022 \u2013 Present",
    title: "Crossing the aisle before it was the mission.",
    body: "Before CampaignAI existed, Jermaine Johnson and Brandon Guffey were already proving that bipartisanship works. As colleagues in the South Carolina State House, a Democrat and a Republican found common ground on legislation that mattered to their communities. That working relationship became the foundation for a company built on the belief that the best ideas come from people willing to disagree and still build together.",
  },
  {
    icon: Globe,
    year: "2025",
    title: "A research effort revealed a national crisis.",
    body: "Tom launched a research effort to understand how local and underfunded campaigns were experiencing the hyperpolarized, modern digital era. The findings were shockingly common. Candidates across the country faced the same impossible choice: overspend on professional production, or go without it entirely. The need wasn\u2019t unique to South Carolina. It was everywhere.",
  },
  {
    icon: Handshake,
    year: "2026",
    title: "CampaignAI is founded.",
    body: "A Republican state legislator, a Democratic gubernatorial candidate, and an Independent campaign operative came together not despite their differences, but because of them. If they could agree that every campaign deserves professional tools, the product would earn trust from everyone.",
  },
];

export function OriginStory() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <SectionLabel text="Our Story" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[44px] md:leading-tight text-regal-navy tracking-[-1px] mt-3 mb-5">
              Three local leaders. One shared mission.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-[680px] mx-auto">
              CampaignAI wasn&apos;t born in Silicon Valley. It started with a
              simple question in South Carolina: why do the candidates closest
              to their communities have the fewest tools to reach them?
            </p>
          </div>
        </ScrollReveal>

        {/* Visual timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-regal-navy/10" />

          <div className="space-y-10">
            {timeline.map(({ icon: Icon, year, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 100}>
                <div className="flex gap-5 md:gap-7">
                  {/* Icon node */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-regal-navy/10 shadow-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-regal-navy" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl shadow-sm p-6 flex-1">
                    <span className="text-xs font-bold text-freedom-blue uppercase tracking-wider">
                      {year}
                    </span>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-regal-navy mt-1 mb-2">
                      {title}
                    </h3>
                    <p className="text-granite text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
