import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { America250Module } from "@/components/sections/shared/America250Module";
import {
  CALENDLY_PURCHASE,
  CTA_PRIMARY,
  CTA_MICROCOPY,
  WAITLIST_SHORT,
} from "@/lib/constants";

interface CondensedPricingDisplayProps {
  /** Render the America 250 module beneath the prices (one per page max) */
  showAmerica250?: boolean;
  /** Render the purchase + waitlist CTA pair */
  showCtas?: boolean;
  /** Render the founders trust line */
  showTrustLine?: boolean;
}

/**
 * Shared condensed pricing display (5.14): single source for /get-started
 * and /pricing. Funnel-page variants arrive with Commit 7.
 */
export function CondensedPricingDisplay({
  showAmerica250 = true,
  showCtas = false,
  showTrustLine = true,
}: CondensedPricingDisplayProps) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          {/* Professional price */}
          <p className="text-granite text-sm mb-1">
            Professional video &middot; Starting at
          </p>
          <p className="font-heading font-extrabold text-[48px] text-liberty-crimson leading-none mb-4">
            $1,999
          </p>

          {/* Candidate price */}
          <p className="text-freedom-blue font-bold text-lg mb-1">
            Candidate campaigns:{" "}
            <span className="text-slate line-through text-base">$1,999</span>{" "}
            starting at{" "}
            <span className="font-heading font-extrabold text-2xl text-freedom-blue">$599</span>
          </p>
          <span className="inline-block rounded-full bg-freedom-blue/10 text-freedom-blue text-xs font-semibold px-4 py-1.5 mb-4">
            2026 midterm cycle mission rate &middot; school board to U.S. Senate
          </span>

          {/* Nonprofit line */}
          <p className="text-verdant font-semibold text-base mb-6">
            Nonprofit or advocacy organization? Mission pricing available. Ask us.
          </p>
        </ScrollReveal>

        {showAmerica250 && (
          <ScrollReveal delay={80}>
            <America250Module className="mb-6" />
          </ScrollReveal>
        )}

        {showCtas && (
          <ScrollReveal delay={120}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <div className="text-center">
                <Button variant="crimson" href={CALENDLY_PURCHASE} external>
                  {CTA_PRIMARY}
                </Button>
                <p className="text-slate text-sm mt-2">{CTA_MICROCOPY}</p>
              </div>
              <div className="text-center">
                <Button variant="blue-outline" href="/get-started#waitlist">
                  Join the waitlist
                </Button>
                <p className="text-slate text-xs mt-2 max-w-[240px]">{WAITLIST_SHORT}</p>
              </div>
            </div>
          </ScrollReveal>
        )}

        {showTrustLine && (
          <ScrollReveal delay={160}>
            <p className="text-slate text-sm">
              Built by a Republican, a Democrat, and an Independent. Because every campaign deserves a fair shot.
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
