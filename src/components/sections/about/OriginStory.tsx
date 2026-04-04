import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function OriginStory() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-6">
            A Republican, a Democrat, and an Independent walk into a startup.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="text-granite text-lg leading-[1.7] space-y-5">
            <p className="font-semibold text-xl text-regal-navy">
              It sounds like the setup for a joke. Instead, we built a company.
            </p>
            <p>
              Brandon Guffey is a Republican state representative, a small
              business owner, and a father who turned personal tragedy into a
              national movement for children&apos;s online safety. Jermaine
              Johnson is a Democratic state representative, a former professional
              basketball player, and a gubernatorial candidate who lives in the
              rural South and knows what it means to fight for every opportunity.
              Tom Krumins is an Independent campaign operative and social impact
              entrepreneur who believes the tools of democracy shouldn&apos;t
              have a paywall.
            </p>
            <p>
              We disagree on a lot. But we all agree that the best campaign tools
              in America are locked behind budgets that most campaigns will never
              have. And that&apos;s not a partisan problem. It&apos;s a
              structural one.
            </p>
            <p className="text-slate">
              The CampaignAI team is based in South Carolina and operates
              nationwide.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
