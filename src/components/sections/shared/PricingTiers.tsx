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
 * PricingSection, /pricing, and /get-started so all three always match:
 * three side-by-side cards — the $1,999 flat rate, the $599 candidate card
 * (deliberately the visual center), and Nonprofit Organizations framed by the
 * work rather than a floor price. Navy + Multi-Partisan accents only (no
 * red-vs-blue coding, no verdant); see reference_brand_color_rules.
 */
export function PricingTiers({ showAmerica250 = false }: PricingTiersProps) {
  return (
    <>
      {showAmerica250 && (
        <ScrollReveal delay={60}>
          <America250Module className="mb-10" />
        </ScrollReveal>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-[1100px] mx-auto">
        {/* ── Professional video · $1,999 flat rate ─────────────────── */}
        <ScrollReveal delay={100}>
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
              <LogoMarkBulletList className="mb-6 flex-1" items={sharedBullets} />
              <Button variant="patriot" href={PURCHASE_URL} className="w-full">
                {CTA_PRIMARY}
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Candidate Campaigns · $599 (the visual center) ─────────── */}
        <ScrollReveal delay={160}>
          <div className="relative rounded-2xl bg-white shadow-2xl h-full flex flex-col overflow-hidden ring-2 ring-bridge-violet/30 md:-translate-y-3">
            <div className="h-2 multipartisan-gradient" />
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
                  <span className="font-heading font-bold text-xl text-slate line-through">
                    $1,999
                  </span>
                  <span className="font-heading font-extrabold text-[54px] text-regal-navy leading-none">
                    $599
                  </span>
                </div>
              </div>
              <span className="inline-block rounded-full bg-bridge-violet/10 text-regal-navy text-xs font-semibold px-3 py-1 my-4 w-fit">
                Mission rate &middot; discounted from $1,999
              </span>
              <p className="text-granite text-sm leading-relaxed mb-5 min-h-[72px]">
                School board to U.S. Senate. A reduced rate for the 2026 cycle,
                because every campaign deserves a fair shot at professional
                video &mdash; not just the ones with an agency budget.
              </p>
              <LogoMarkBulletList className="mb-6 flex-1" items={sharedBullets} />
              <Button variant="patriot" href={PURCHASE_URL} className="w-full">
                {CTA_PRIMARY}
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Nonprofit Organizations · framed by the work ──────────── */}
        <ScrollReveal delay={220}>
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
              <LogoMarkBulletList
                className="mb-6 flex-1"
                items={[
                  "Priced case by case, never by list rate",
                  "The same production and human review",
                  "15-, 30-, and 60-second versions in every format",
                  "Full ownership. No watermark.",
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
        <div className="mt-10 max-w-[1100px] mx-auto rounded-2xl bg-dawn-frost ring-1 ring-black/5 p-6 md:p-8">
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
