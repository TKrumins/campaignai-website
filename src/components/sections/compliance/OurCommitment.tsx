import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ETHICS_LINE } from "@/lib/constants";

export function OurCommitment() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="border-l-[6px] border-l-verdant pl-6 md:pl-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-regal-navy mb-6">
              Why we take this seriously.
            </h2>
            <div className="text-granite text-lg leading-[1.7] space-y-5 max-w-[760px]">
              <p>
                CampaignAI was founded by people who have run campaigns and
                served in office. A compliance failure isn&apos;t only legal
                risk &mdash; it&apos;s political risk. A missing label can turn a
                production mistake into a news cycle.
              </p>
              <p>
                We take this on because the campaigns that can least afford a
                failure are the same ones that can least afford a consultant to
                prevent it. We can&apos;t be your lawyer and won&apos;t pretend
                to be. We can make your lawyer&apos;s time go further.
              </p>
              <p>
                So we read the proposed legislation, the regulatory updates, the
                FEC guidance and the enforcement actions, and we revise what we
                hold as the landscape moves. We will not always be first to
                catch a change, and we would rather tell you that now than
                imply otherwise. What we can promise is effort and a written
                record of it &mdash; never a verdict.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="font-heading font-bold text-2xl text-regal-navy text-center mt-10">
            &ldquo;{ETHICS_LINE}&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
