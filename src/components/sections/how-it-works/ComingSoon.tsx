import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DollarSign, FileSearch, PenLine } from "lucide-react";

const agents = [
  {
    icon: DollarSign,
    title: "Fundraising Strategist",
    description:
      "Data-informed fundraising guidance tailored to your race, your donors, and your timeline. Optimize your outreach cadence and make every dollar of donor communication work harder.",
  },
  {
    icon: FileSearch,
    title: "Regulations Analyst",
    description:
      "Tracks the regulatory landscape across every state, translates it into plain language, and flags what matters for your race.",
  },
  {
    icon: PenLine,
    title: "Content Marketer",
    description:
      "Messaging strategy, content calendars, and audience insights. Turns a collection of posts into a coherent campaign narrative that adapts as your race unfolds.",
  },
];

export function ComingSoon() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-5 py-2 rounded-full bg-pioneer-gold/20 text-pioneer-gold text-sm font-bold uppercase tracking-widest mb-6">
              Coming Soon
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-beacon-white tracking-[-1px] mb-5">
              Expert CampaignAI Agents,
              <br />
              built for the realities of your race.
            </h2>
            <p className="text-beacon-white/70 text-lg leading-relaxed">
              Throughout the year, we are building a team of CampaignAI Agents,
              trained on the strategies, regulations, ethics, and day-to-day
              demands of running a campaign.
              <br />
              Spend less time planning and more time in your community.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {agents.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pioneer-gold/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-pioneer-gold" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-pioneer-gold/10 text-pioneer-gold text-xs font-semibold uppercase tracking-wide">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-beacon-white mb-2">
                  {title}
                </h3>
                <p className="text-beacon-white/60 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-beacon-white/50 text-sm">
            Agents launching later in 2026. Join the waitlist for early access
            and updates.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
