import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { BadgeWithTooltip } from "@/components/ui/BadgeWithTooltip";
import {
  PURCHASE_URL,
  CALENDLY_DEMO,
  CTA_PRIMARY,
  CTA_MICROCOPY,
  ETHICS_LINE,
  A250_HEADLINE,
  A250_SCARCITY,
} from "@/lib/constants";

interface BookingBannerProps {
  headline?: string;
  subline?: string;
  showBadges?: boolean;
  showEthicsLine?: boolean;
  /** CTA overrides (used by later funnel pages via props) */
  ctaLabel?: string;
  ctaHref?: string;
  ctaMicrocopy?: string;
  ctaVariant?: "crimson" | "verdant-outline";
  showScarcity?: boolean;
  /** Render a quiet "Book a demo" secondary action beside the primary CTA. */
  showDemo?: boolean;
  /** Show the small reassurance line under the CTA buttons. */
  showMicrocopy?: boolean;
}

const badges = [
  {
    label: "FEC & State Compliance Aware",
    tooltip:
      "We track the rules that apply to campaign advertising so your video starts on the right side of them.",
  },
  {
    label: "Privacy-First",
    tooltip:
      "Your campaign's information stays with your campaign. We never share it across campaigns.",
  },
  {
    label: "48-Hour Post-Production Delivery",
    tooltip:
      "Once you submit your finished plan, our human editors return your polished video within 48 hours.",
  },
  {
    label: "Full Ownership, No Watermark",
    tooltip:
      "Every video is yours. Full rights, no licensing fees, no company watermark.",
  },
];

export function BookingBanner({
  headline = "Campaigns move quickly. Start your next video today.",
  subline = "Choose your plan and book your onboarding call. Plan your video at your pace, submit when you're ready, and our editors send it back polished within 48 hours, excluding weekends.",
  showBadges = true,
  showEthicsLine = true,
  ctaLabel = CTA_PRIMARY,
  ctaHref = PURCHASE_URL,
  ctaMicrocopy = CTA_MICROCOPY,
  ctaVariant = "crimson",
  showScarcity = true,
  showDemo = true,
  showMicrocopy = true,
}: BookingBannerProps) {
  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          {/* Break a multi-sentence headline so each sentence sits on its own line
              (Tom's centered-header rule). Single-sentence headlines render as one line. */}
          <h2 className="font-heading font-extrabold text-4xl md:text-[48px] md:leading-tight text-white tracking-[-1px] mb-5">
            {headline.split(/(?<=\.)\s+/).map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-[640px] mx-auto mb-8">
            {subline}
          </p>

          {showScarcity && (
            <p className="text-victory-rose font-semibold text-sm mb-4">
              {A250_HEADLINE}: {A250_SCARCITY.charAt(0).toLowerCase() + A250_SCARCITY.slice(1)}
            </p>
          )}

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant={ctaVariant}
                href={ctaHref}
                external={!ctaHref.startsWith("/")}
                className={`px-8 py-3 text-base ${
                  ctaVariant === "verdant-outline" ? "!text-white hover:!text-white" : ""
                }`}
              >
                {ctaLabel}
              </Button>
              {showDemo && (
                <a
                  href={CALENDLY_DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-base font-semibold text-white/90 transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  Book a demo &rarr;
                </a>
              )}
            </div>
            {showMicrocopy && <p className="text-white/60 text-sm mt-3">{ctaMicrocopy}</p>}
          </div>
        </ScrollReveal>

        {showBadges && (
          <ScrollReveal delay={120}>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {badges.map((badge) => (
                <BadgeWithTooltip key={badge.label} tone="navy" size="sm" {...badge} />
              ))}
            </div>
          </ScrollReveal>
        )}

        {showEthicsLine && (
          <ScrollReveal delay={180}>
            <p className="text-beacon-white font-medium text-base">
              <span className="text-verdant mr-1.5">&#x2713;</span>
              {ETHICS_LINE}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
