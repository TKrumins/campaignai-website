import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import {
  CALENDLY_PURCHASE,
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
            $10,000 agency budget to share it with voters.
            <br />
            <br />
            CampaignAI gives you professional video, built-in compliance through
            state-specific AI disclosure labels updated as rules change, and
            48-hour post-production delivery once you submit, so you can focus
            on what matters: your community, your message, your race.
          </p>
          <div className="mb-6">
            <Button
              variant="crimson"
              href={CALENDLY_PURCHASE}
              external
              className="px-8 py-3 text-base"
            >
              {CTA_PRIMARY}
            </Button>
            <p className="text-beacon-white/60 text-sm mt-2">{CTA_MICROCOPY}</p>
          </div>
          <div className="mb-10">
            <Button
              variant="blue-outline"
              href="/get-started#waitlist"
              className="!border-freedom-blue/60 !text-beacon-white/90 hover:!bg-freedom-blue hover:!text-white"
            >
              Join the waitlist
            </Button>
            <p className="text-beacon-white/50 text-xs mt-2">{WAITLIST_SHORT}</p>
          </div>
          {/* P8 (approved) */}
          <p className="text-beacon-white/80 text-base font-medium">
            We&apos;re building this in the open, in South Carolina, across the
            aisle. Come see for yourself.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
