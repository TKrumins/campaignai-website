import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-beacon-white tracking-[-1px] mb-6">
            Democracy shouldn&apos;t have a paywall.
          </h2>
          <p className="text-beacon-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The tools, talent, and technology that win modern campaigns are
            financially inaccessible to the vast majority of people who run.
            CampaignAI exists to change that. Not with charity, but with
            genuinely excellent tools designed from day one for the campaigns
            that need them most.
          </p>
          <Button variant="crimson" href="/get-started">
            Tell your story &rarr;
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
