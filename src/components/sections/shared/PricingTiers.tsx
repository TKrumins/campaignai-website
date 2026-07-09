import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { LogoMarkBulletList } from "@/components/ui/LogoMarkBulletList";
import { America250Module } from "@/components/sections/shared/America250Module";
import { PURCHASE_URL, CALENDLY_DEMO, CTA_PRIMARY, CTA_TEAM } from "@/lib/constants";

const sharedBullets = [
  "The same production and human editorial review",
  "15-, 30-, and 60-second versions in every format",
  "State-specific AI disclosure labels",
  "Full ownership. No watermark.",
];

interface PricingTiersProps {
  /** Render the America 250 module above the anchor (one per page max). */
  showAmerica250?: boolean;
}

/**
 * Single source of truth for the pricing cards, shared by the homepage
 * PricingSection and the /pricing page so the two always match: the $1,999
 * standard-rate anchor, the two leveled mission cards, and a starting-rate /
 * add-ons clarity note. Navy + Patriot accents only (no red-vs-blue coding,
 * no verdant); see reference_brand_color_rules.
 */
export function PricingTiers({ showAmerica250 = false }: PricingTiersProps) {
  return (
    <>
      {showAmerica250 && (
        <ScrollReveal delay={60}>
          <America250Module className="mb-10" />
        </ScrollReveal>
      )}

      {/* Standard rate anchor — frames $1,999 as the true starting rate */}
      <ScrollReveal delay={100}>
        <div className="rounded-2xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden mb-8 max-w-[1100px] mx-auto">
          <div className="h-1.5 patriot-gradient" />
          <div className="p-6 md:p-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-slate mb-2">
              The standard rate
            </p>
            <p className="text-granite text-sm mb-1">Professional video starts at</p>
            <p className="font-heading font-extrabold text-[52px] md:text-[60px] leading-none text-regal-navy mb-3">
              $1,999
            </p>
            <p className="text-granite text-sm max-w-[560px] mx-auto mb-6">
              Full production for the teams producing at scale: consultancies,
              party committees, PACs, and organizations. A flat starting rate for
              one finished video, with any add-ons priced on your onboarding call.
            </p>
            <Button variant="crimson" href={PURCHASE_URL} className="px-8 py-3">
              {CTA_PRIMARY}
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={140}>
        <p className="text-center text-sm font-semibold text-regal-navy mb-6">
          Two ways we bring that rate down for the mission &darr;
        </p>
      </ScrollReveal>

      {/* Two mission cards, leveled row-for-row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
        {/* Candidate Campaigns */}
        <ScrollReveal delay={180}>
          <div className="rounded-2xl bg-white shadow-xl h-full flex flex-col overflow-hidden ring-2 ring-regal-navy/10">
            <div className="h-1.5 patriot-gradient" />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-4">
                Candidate Campaigns
              </p>
              <div className="min-h-[80px]">
                <p className="text-slate text-sm mb-1">Starting at</p>
                <div className="flex items-baseline gap-3">
                  <span className="font-heading font-bold text-xl text-slate line-through">$1,999</span>
                  <span className="font-heading font-extrabold text-[44px] text-regal-navy leading-none">$599</span>
                </div>
              </div>
              <span className="inline-block rounded-full bg-regal-navy/5 text-regal-navy text-xs font-semibold px-3 py-1 my-4 w-fit">
                2026 cycle mission rate &middot; discounted from $1,999
              </span>
              <p className="text-granite text-sm leading-relaxed mb-5 min-h-[48px]">
                School board to U.S. Senate. A discounted rate for the 2026
                cycle, because every campaign deserves a fair shot.
              </p>
              <LogoMarkBulletList className="mb-6 flex-1" items={sharedBullets} />
              <Button variant="crimson" href={PURCHASE_URL} className="w-full">
                {CTA_PRIMARY}
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Nonprofits & Advocacy */}
        <ScrollReveal delay={240}>
          <div className="rounded-2xl bg-white shadow-md h-full flex flex-col overflow-hidden ring-1 ring-black/5">
            <div className="h-1.5 patriot-gradient" />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-4">
                Nonprofits &amp; Advocacy
              </p>
              <div className="min-h-[80px]">
                <p className="text-slate text-sm mb-1">Priced</p>
                <span className="font-heading font-extrabold text-[44px] text-regal-navy leading-none">Custom</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-bridge-violet/50 text-regal-navy text-xs font-semibold px-3 py-1 my-4 w-fit">
                <span className="text-bridge-violet">&#9670;</span> Mission pricing
              </span>
              <p className="text-granite text-sm leading-relaxed mb-5 min-h-[48px]">
                Telling a story for a cause instead of a candidate? We price it
                case by case.
              </p>
              <LogoMarkBulletList
                className="mb-6 flex-1"
                items={[
                  "Priced case by case, never by list rate",
                  "Your budget never decides if your story gets told",
                  "The same production and human review",
                  "State-specific AI disclosure labels",
                ]}
              />
              <Button variant="navy-outline" href={CALENDLY_DEMO} external className="w-full">
                {CTA_TEAM}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Starting-rate + add-ons clarity */}
      <ScrollReveal delay={280}>
        <div className="mt-8 max-w-[860px] mx-auto rounded-2xl bg-dawn-frost ring-1 ring-black/5 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-2">
                What the starting rate covers
              </p>
              <p className="text-granite text-sm leading-relaxed">
                One finished, human-reviewed video in 15-, 30-, and 60-second
                cuts, in every format, with state-specific disclosure labels and
                full ownership. No watermark, no per-use fees.
              </p>
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-regal-navy uppercase tracking-wider mb-2">
                Add-ons, priced on your call
              </p>
              <p className="text-granite text-sm leading-relaxed">
                Need custom footage, extra concepts, more videos, additional
                languages, or rush delivery? We walk through the options and
                price them on your 30-minute onboarding call, so you approve the
                full cost before anything goes into production.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
