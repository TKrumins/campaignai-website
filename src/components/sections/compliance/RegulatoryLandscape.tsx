import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function RegulatoryLandscape() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel text="The Regulatory Landscape" color="verdant" />
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-6">
            The rules are changing faster than any campaign can track.
          </h2>
          <div className="text-granite text-lg leading-[1.7] max-w-[760px] space-y-5">
            <p>
              Legislators are writing new AI advertising rules every session.
              Some states now require disclosure labels; others are weighing
              limits on synthetic media in political ads.
            </p>
            <p>
              The rules in Michigan aren&apos;t the rules in Texas, and both have
              shifted since last cycle. Federal FEC guidance keeps evolving on
              top of that.
            </p>
            <p>
              For a campaign focused on voters, doors, and fundraising, staying
              current on every regulatory development across every jurisdiction
              is an impossible ask. That&apos;s exactly why CampaignAI does it
              for you.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
