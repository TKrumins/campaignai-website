import { Button } from "@/components/ui/Button";
import {
  PURCHASE_URL,
  CALENDLY_DEMO,
  CTA_PRIMARY,
  CTA_MICROCOPY,
} from "@/lib/constants";

export function HIWHero() {
  return (
    <section
      data-hero
      className="relative bg-regal-navy pt-40 pb-16"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block text-freedom-blue text-sm font-semibold uppercase tracking-[1.5px] mb-6">
          Video Production Process
        </span>
        <h1 className="font-heading font-extrabold text-[32px] sm:text-[48px] md:text-[64px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6">
          Bring your story to life.
        </h1>
        <p className="text-beacon-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          You bring the story only you can tell. Our guided process helps you and
          your team shape it into something authentically yours &mdash; you make
          every creative decision, verified by CampaignAI. This isn&apos;t handing
          your story to a black box. It&apos;s AI built to put you in charge.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3 text-base">
            {CTA_PRIMARY}
          </Button>
          <a
            href={CALENDLY_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-base font-semibold text-white/90 transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Schedule a demo &rarr;
          </a>
        </div>
        <p className="text-beacon-white/60 text-sm mt-3">{CTA_MICROCOPY}</p>
      </div>
    </section>
  );
}
