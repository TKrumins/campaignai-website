import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TransparencyDisclaimer() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-2xl md:text-[28px] text-regal-navy mb-5">
            A note on what we provide and what we don&apos;t.
          </h2>
          <div className="text-granite leading-[1.7] space-y-5">
            <p>
              CampaignAI provides compliance tools and guidance, not legal
              advice. We work diligently to stay ahead of evolving rules across
              all 50 states and at the federal level, but we are one company, and
              there may be gaps or delays between when a law is enacted and when
              our systems reflect it.
            </p>
            <p>
              We strongly encourage all campaigns to confirm compliance with
              applicable federal, state, and local regulations. When in doubt,
              consult with your campaign&apos;s legal counsel.
            </p>
            <p>
              If you become aware of a regulatory change that we haven&apos;t
              yet reflected, we want to hear about it. Contact us at{" "}
              <a
                href="mailto:compliance@campaignai.com"
                className="text-freedom-blue font-semibold hover:underline"
              >
                compliance@campaignai.com
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
