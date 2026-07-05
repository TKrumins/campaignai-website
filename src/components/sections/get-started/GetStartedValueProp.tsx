import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CALENDLY_PURCHASE, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

export function GetStartedValueProp() {
  return (
    <section className="pt-40 pb-12 bg-white">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-4">
            Your first video starts today.
          </h1>
          <p className="text-granite text-xl leading-relaxed">
            Professional campaign video in days, not weeks. AI-powered, human-finished, with disclosure labels built in.
          </p>
          <div className="mt-8">
            <Button variant="crimson" href={CALENDLY_PURCHASE} external className="px-8 py-3 text-base">
              {CTA_PRIMARY}
            </Button>
            <p className="text-slate text-sm mt-2">{CTA_MICROCOPY}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
