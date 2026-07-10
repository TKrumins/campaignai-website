import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PURCHASE_URL, CTA_PRIMARY } from "@/lib/constants";

export function HIWCTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
            Ready to tell your story?
          </h2>
          <p className="text-granite text-lg leading-relaxed mb-8">
            Professional campaign video without the agency price tag.
          </p>
          <Button variant="crimson" href={PURCHASE_URL}>
            {CTA_PRIMARY}
          </Button>
          <p className="mt-2 text-slate text-sm">
            Book a 30-minute call to get started.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
