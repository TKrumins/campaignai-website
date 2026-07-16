import { Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PURCHASE_URL, CALENDLY_DEMO, CTA_PRIMARY, CTA_TEAM } from "@/lib/constants";

/**
 * Single source of truth for the pricing cards, shared by the homepage
 * PricingSection, /pricing, and /get-started so all three always match:
 * three side-by-side cards — the $1,999 flat rate, the $599 candidate card
 * (deliberately the visual center, carrying the mission emphasis), and
 * Nonprofit Organizations framed by the work rather than a floor price. Navy +
 * Multi-Partisan accents only (no red-vs-blue coding, no verdant); see
 * reference_brand_color_rules. The America 250 offer is no longer shown here —
 * it lives in the hero popup and the announcement ticker only.
 */
export function PricingTiers() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-[1100px] mx-auto">
        {/* ── Professional video · $1,999 flat rate ─────────────────── */}
        {/* Card order: on mobile Candidate leads (order-1); at md+ the natural
            DOM order stands, so Candidate sits centered between the other two. */}
        <ScrollReveal delay={100} className="order-2 md:order-none">
          <div className="rounded-2xl bg-white shadow-md ring-1 ring-black/5 h-full flex flex-col overflow-hidden">
            <div className="h-1.5 multipartisan-gradient" />
            <div className="p-6 md:p-7 flex flex-col flex-1">
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-4">
                Professional Video
              </p>
              <div className="min-h-[92px]">
                <p className="text-slate text-sm mb-1">A flat rate, starting at</p>
                <span className="font-heading font-extrabold text-[44px] leading-none text-regal-navy">
                  $1,999
                </span>
              </div>
              <span className="inline-block rounded-full bg-regal-navy/5 text-regal-navy text-xs font-semibold px-3 py-1 my-4 w-fit">
                One finished video
              </span>
              <p className="text-granite text-sm leading-relaxed mb-5 min-h-[72px]">
                Full production for the teams producing at scale &mdash;
                consultancies, party committees, PACs, and organizations. One
                flat rate for a finished video, with any add-ons priced on your
                onboarding call.
              </p>
              <div className="mb-6 flex-1" />
              <Button variant="patriot" href={PURCHASE_URL} className="w-full">
                {CTA_PRIMARY}
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Candidate Campaigns · $599 (mission center + heart) ── */}
        <ScrollReveal delay={160} className="order-1 md:order-none">
          <div className="relative rounded-2xl bg-white shadow-2xl h-full flex flex-col overflow-hidden ring-2 ring-liberty-crimson/25 md:-translate-y-3">
            <div className="h-2 multipartisan-gradient" />
            {/* Mission banner — this is the work we care about most. */}
            <div className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-liberty-crimson/10 via-bridge-violet/10 to-freedom-blue/10 py-2 text-[11px] font-bold uppercase tracking-wider text-regal-navy">
              <Heart className="h-3.5 w-3.5 fill-liberty-crimson text-liberty-crimson" />
              Our mission rate
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider">
                  Candidate Campaigns
                </p>
                <span className="rounded-full bg-bridge-violet/10 text-bridge-violet text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                  2026 cycle
                </span>
              </div>
              <div className="min-h-[92px]">
                <p className="text-slate text-sm mb-1">Starting at</p>
                <div className="flex items-baseline gap-3">
                  <span className="font-heading font-bold text-xl text-slate line-through decoration-2 decoration-liberty-crimson">
                    $1,999
                  </span>
                  <span className="font-heading font-extrabold text-[54px] text-regal-navy leading-none">
                    $599
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 my-4">
                <span className="inline-block rounded-full bg-liberty-crimson/10 text-liberty-crimson text-xs font-bold px-3 py-1">
                  You save $1,400
                </span>
                <span className="inline-block rounded-full bg-bridge-violet/10 text-regal-navy text-xs font-semibold px-3 py-1">
                  70% off the standard rate
                </span>
              </div>
              <p className="text-granite text-sm leading-relaxed mb-5 min-h-[72px]">
                School board to U.S. Senate. We cut the rate for the 2026 cycle
                because every campaign deserves a fair shot at professional
                video &mdash; not just the ones with an agency budget. This is
                the work we care about most.
              </p>
              <div className="mb-6 flex-1" />
              <Button variant="patriot" href={PURCHASE_URL} className="w-full">
                {CTA_PRIMARY}
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Nonprofit Organizations · framed by the work ──────────── */}
        <ScrollReveal delay={220} className="order-3 md:order-none">
          <div className="rounded-2xl bg-white shadow-md ring-1 ring-black/5 h-full flex flex-col overflow-hidden">
            <div className="h-1.5 multipartisan-gradient" />
            <div className="p-6 md:p-7 flex flex-col flex-1">
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-4">
                Nonprofit Organizations
              </p>
              <div className="min-h-[92px]">
                <p className="text-slate text-sm mb-1">Priced with your mission in mind</p>
                <span className="font-heading font-extrabold text-[40px] leading-none text-regal-navy">
                  Let&rsquo;s talk
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-bridge-violet/50 text-regal-navy text-xs font-semibold px-3 py-1 my-4 w-fit">
                <span className="text-bridge-violet">&#9670;</span> Mission pricing
              </span>
              <p className="text-granite text-sm leading-relaxed mb-5 min-h-[72px]">
                A community you serve, an issue you can&rsquo;t stay quiet on, a
                movement that needs to be seen. We price mission work case by
                case, so your budget never decides whether your story gets told.
              </p>
              <div className="mb-6 flex-1" />
              <Button variant="navy-outline" href={CALENDLY_DEMO} external className="w-full">
                {CTA_TEAM}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Starting-rate + add-ons clarity */}
      <ScrollReveal delay={280}>
        <div className="mt-10 max-w-[1100px] mx-auto rounded-2xl bg-dawn-frost ring-1 ring-black/5 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-2">
                What the starting rate covers
              </p>
              <p className="text-granite text-sm leading-relaxed">
                One finished video in a 15-, 30-, or 60-second cut. Human
                post-production and review. State-specific disclosure labels and
                full ownership. No watermark. No per-use fees.
              </p>
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-2">
                Add-ons, priced on your call
              </p>
              <p className="text-granite text-sm leading-relaxed">
                Need custom footage, extra concepts, more videos, additional
                languages, or rush delivery? We walk through the options and
                price them on your onboarding call, so you approve the full cost
                before anything goes into production.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
