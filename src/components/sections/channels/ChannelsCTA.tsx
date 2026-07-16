import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

export function ChannelsCTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="mb-5 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
            First, make something worth sharing.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-granite">
            Every channel here rewards the same thing: a video that actually connects.
            That&apos;s the part we handle with you &mdash; then it&apos;s yours to take
            everywhere.
          </p>
          <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3">
            {CTA_PRIMARY}
          </Button>
          <p className="mt-3 text-sm text-slate">{CTA_MICROCOPY}</p>
          <p className="mt-6 text-sm text-slate">
            Want to see how the video gets made?{" "}
            <a href="/video-production-process" className="font-semibold text-freedom-blue hover:underline">
              See the production process &rarr;
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
