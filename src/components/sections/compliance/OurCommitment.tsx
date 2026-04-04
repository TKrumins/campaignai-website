import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
                served in office. We know that compliance failures don&apos;t
                just create legal risk. They create political risk. An opponent
                pointing to a missing disclosure label can turn a production
                mistake into a news cycle.
              </p>
              <p>
                We take on the regulatory complexity because we believe the
                campaigns that can least afford a compliance failure are the same
                campaigns that can least afford a consultant to prevent one.
                That&apos;s the gap we fill.
              </p>
              <p>
                Our team tracks proposed legislation, regulatory updates, FEC
                guidance, and enforcement actions continuously. When the
                landscape changes, we update our systems. You keep telling your
                story.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="font-heading font-bold text-2xl text-freedom-blue text-center mt-10">
            &ldquo;We take on the hard stuff so you can focus on the work only
            you can do.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
