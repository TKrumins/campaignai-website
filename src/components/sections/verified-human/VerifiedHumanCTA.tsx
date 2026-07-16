import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

export function VerifiedHumanCTA() {
  return (
    <section className="bg-regal-navy pb-24 pt-4 md:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <h2 className="mb-5 font-heading text-3xl font-extrabold tracking-[-1px] text-beacon-white md:text-[40px] md:leading-tight">
              Make something you can put your name on.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-beacon-white/80">
              Verified Human ships with every video CampaignAI makes &mdash; because
              our process already puts you in charge of every creative call. Start
              your video, and the proof comes built in.
            </p>
            <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3">
              {CTA_PRIMARY}
            </Button>
            <p className="mt-3 text-sm text-beacon-white/60">{CTA_MICROCOPY}</p>
            <p className="mt-6 text-sm text-beacon-white/60">
              Curious how the videos get made?{" "}
              <a href="/video-production-process" className="font-semibold text-freedom-blue hover:underline">
                See the production process &rarr;
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
