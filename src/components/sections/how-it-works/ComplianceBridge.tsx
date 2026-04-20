import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function ComplianceBridge() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="border-l-[6px] border-l-verdant pl-6 md:pl-8 mb-8">
            <SectionLabel text="Compliance" color="verdant" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy mt-3 mb-5">
              Regulations are complicated. That&apos;s our problem, not yours.
            </h2>
            <p className="text-granite text-lg leading-[1.7] max-w-[760px] mb-4">
              AI in campaigns is new territory, and the rules are different in
              every state. We monitor disclosure requirements, track pending
              legislation, and build the right safeguards into every video you
              produce. Every ad includes clear disclosure label, tailored to
              meet state-specific laws. Every production reflects the most
              current compliance requirements we can identify.
            </p>
            <p className="text-granite text-lg leading-[1.7] max-w-[760px]">
              We do this work so you don&apos;t have to.
            </p>
          </div>

          <div className="pl-6 md:pl-8">
            <Button variant="verdant-outline" href="/compliance">
              See how we track regulations across all 50 states &rarr;
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-slate/80 text-sm text-center max-w-[700px] mx-auto mt-10">
            CampaignAI provides compliance tools and guidance, not legal
            advice. When in doubt, consult with your campaign&apos;s legal
            counsel.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
