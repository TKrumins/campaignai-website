import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import {
  PURCHASE_URL,
  CTA_PRIMARY,
  CTA_MICROCOPY,
  WAITLIST_SHORT,
} from "@/lib/constants";

export function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-beacon-white tracking-[-1px] mb-6 md:whitespace-nowrap">
            Democracy shouldn&apos;t have a paywall.
          </h2>
          <p className="text-beacon-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            You have the story. You have the passion. You shouldn&apos;t need a
            five-figure agency budget to share it with voters &mdash; from a
            first-time sheriff&apos;s run to a statewide campaign.
          </p>
          <div className="mb-4">
            <Button
              variant="crimson"
              href={PURCHASE_URL}
              className="px-8 py-3 text-base"
            >
              {CTA_PRIMARY}
            </Button>
            <p className="text-beacon-white/60 text-sm mt-2">{CTA_MICROCOPY}</p>
          </div>
          <p className="text-sm">
            <a
              href="/get-started#waitlist"
              className="text-beacon-white/70 underline underline-offset-4 hover:text-beacon-white transition-colors"
            >
              Not ready to buy? Join the waitlist &rarr;
            </a>{" "}
            <span className="text-beacon-white/45">{WAITLIST_SHORT}</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
