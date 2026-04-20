import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CommunityVision() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <SectionLabel text="The Community Vision" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-6">
              AI has arrived. It&apos;s here. The question is whether we shape it
              together.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-granite text-lg leading-[1.7] max-w-[760px] mx-auto space-y-6">
            <p>
              Campaigns are only scratching the surface of what is possible with
              AI, both good....and bad.
            </p>
            <p>
              Responsible and effective use requires conversations with candidates,
              campaign operatives, researchers, ethicists, technologists, and
              everyday voters who care about how this technology is designed and
              deployed.
            </p>
            <p>
              This community is a multi-partisan space to discuss the hard
              questions about AI, democracy, and campaigning. This issue is bigger
              than any one partisan victory.
            </p>
            <p>
              CampaignAI was founded by a Republican, a Democrat, and an
              Independent who disagree on plenty but agree on this: these
              conversations need to happen in the open, with the people they affect
              most.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
