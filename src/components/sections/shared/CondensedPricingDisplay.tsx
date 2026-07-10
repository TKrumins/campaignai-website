import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { America250Module } from "@/components/sections/shared/America250Module";
import {
  CALENDLY_PURCHASE,
  CTA_PRIMARY,
  CTA_MICROCOPY,
  WAITLIST_SHORT,
} from "@/lib/constants";

type PricingVariant = "default" | "candidate" | "mission";

interface CondensedPricingDisplayProps {
  /** Visual treatment (Commit 7, 7.0). */
  variant?: PricingVariant;
  /** Render the America 250 module beneath the prices (one per page max) */
  showAmerica250?: boolean;
  /** Render the purchase + waitlist CTA pair */
  showCtas?: boolean;
  /** Render the founders trust line */
  showTrustLine?: boolean;
  /** Optional footnote rendered beneath the display (e.g. "Bring it to the call.") */
  footnote?: string;
}

const TRUST_LINE =
  "Built by a Republican, a Democrat, and an Independent. Because every campaign deserves a fair shot.";

/**
 * Shared condensed pricing display (5.14): single source for /get-started,
 * /pricing, and the Commit 7 funnel pages. `candidate` centers the $599
 * knockdown card; `mission` renders the Verdant mission-pricing treatment.
 */
export function CondensedPricingDisplay({
  variant = "default",
  showAmerica250 = true,
  showCtas = false,
  showTrustLine = true,
  footnote,
}: CondensedPricingDisplayProps) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        {variant === "candidate" ? (
          <ScrollReveal>
            {/* Candidate knockdown card is the visual center */}
            <div className="rounded-2xl border-2 border-freedom-blue/40 bg-dawn-frost px-6 py-8 md:px-10">
              <p className="text-slate text-sm mb-1">Candidate campaigns</p>
              <p className="mb-1">
                <span className="text-slate line-through text-2xl align-middle">
                  $1,999
                </span>
              </p>
              <p className="text-slate text-sm mb-1">Starting at</p>
              <p className="font-heading font-extrabold text-[56px] leading-none text-liberty-crimson mb-4">
                $599
              </p>
              <span className="inline-block rounded-full bg-freedom-blue/10 text-freedom-blue text-xs font-semibold px-4 py-1.5">
                2026 midterm cycle mission rate &middot; school board to U.S. Senate
              </span>
            </div>
            <p className="text-regal-navy font-semibold text-base mt-6">
              Nonprofit organization?{" "}
              <Link href="/for/nonprofits" className="text-bridge-violet underline underline-offset-2 hover:text-bridge-violet/80">
                Mission pricing available &rarr;
              </Link>
            </p>
          </ScrollReveal>
        ) : variant === "mission" ? (
          <ScrollReveal>
            {/* Multi-Partisan mission-pricing treatment (Batch 2) */}
            <div className="rounded-2xl border-2 border-bridge-violet/50 bg-bridge-violet/5 px-6 py-8 md:px-10">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy mb-3">
                Mission pricing for mission work
              </h2>
              <p className="text-granite text-base leading-relaxed max-w-[520px] mx-auto mb-5">
                We price advocacy and nonprofit work case by case, so your budget
                never decides whether your message gets heard.
              </p>
              <p className="text-slate text-sm">
                Video production starts at{" "}
                <span className="font-heading font-bold text-regal-navy">$1,999</span>.
                Mission pricing brings that within reach.
              </p>
            </div>
          </ScrollReveal>
        ) : (
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
              <span className="font-heading font-extrabold text-2xl text-freedom-blue">
                $599
              </span>
            </p>
            <span className="inline-block rounded-full bg-freedom-blue/10 text-freedom-blue text-xs font-semibold px-4 py-1.5 mb-4">
              2026 midterm cycle mission rate &middot; school board to U.S. Senate
            </span>

            {/* Nonprofit line */}
            <p className="text-regal-navy font-semibold text-base mb-6">
              Nonprofit organization?{" "}
              <Link href="/for/nonprofits" className="text-bridge-violet underline underline-offset-2 hover:text-bridge-violet/80">
                Mission pricing available &rarr;
              </Link>
            </p>
          </ScrollReveal>
        )}

        {footnote && (
          <ScrollReveal delay={60}>
            <p className="text-slate text-sm mt-5">{footnote}</p>
          </ScrollReveal>
        )}

        {showAmerica250 && (
          <ScrollReveal delay={80}>
            <America250Module className="mb-6 mt-6" />
          </ScrollReveal>
        )}

        {showCtas && (
          <ScrollReveal delay={120}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 mt-6">
              <div className="text-center">
                <Button variant="patriot" href={CALENDLY_PURCHASE} external>
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
            <p className="text-slate text-sm mt-6">{TRUST_LINE}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
