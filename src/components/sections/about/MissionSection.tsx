import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PURCHASE_URL } from "@/lib/constants";

/**
 * About close. Ends on the mission and an invitation to go deeper (how it works
 * / community) rather than jumping straight to the paywall — the purchase link
 * stays available, but soft, so the page reads as a story, not a checkout.
 */
export function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-beacon-white tracking-[-1px] mb-6">
            Getting this right matters more than any one election.
          </h2>
          <p className="text-beacon-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            A Republican, a Democrat, and an independent &mdash; building the
            tools that shape modern campaigns so they&apos;re within reach of
            everyone who runs, not just the campaigns with an agency budget.
            We&apos;re doing it in the open, and we&apos;re only getting started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="patriot" href="/video-production-process" className="px-8 py-3 text-base">
              See how it works &rarr;
            </Button>
            <Link
              href="/community"
              className="btn-hover inline-flex items-center justify-center rounded-full border-2 border-beacon-white/60 px-6 py-3 text-sm font-semibold text-beacon-white transition-colors hover:bg-beacon-white hover:text-regal-navy"
            >
              Explore the community &rarr;
            </Link>
          </div>
          <p className="mt-8 text-sm">
            <Link
              href={PURCHASE_URL}
              className="text-beacon-white/70 underline underline-offset-4 transition-colors hover:text-beacon-white"
            >
              Ready to make your first video? Get started &rarr;
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
