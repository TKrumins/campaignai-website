import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SOCIAL_SUBSTACK } from "@/lib/constants";

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
          <a
            href={SOCIAL_SUBSTACK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center justify-center text-center rounded-full bg-regal-navy px-6 py-3 text-white text-sm font-semibold"
          >
            Subscribe on Substack &rarr;
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
