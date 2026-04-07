import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SubstackCapture } from "@/components/forms/SubstackCapture";

export function SubstackEmbed() {
  return (
    <section className="py-16 md:py-20 bg-dawn-frost">
      <div className="max-w-[520px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-regal-navy mb-3">
            Stay ahead of the regulations.
          </h2>
          <p className="text-granite text-sm mb-6">
            Subscribe for updates on AI compliance, campaign technology, and
            CampaignAI product news.
          </p>
          <SubstackCapture buttonText="Subscribe" />
        </ScrollReveal>
      </div>
    </section>
  );
}
