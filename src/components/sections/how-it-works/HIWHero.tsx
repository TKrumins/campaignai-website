import { Button } from "@/components/ui/Button";

export function HIWHero() {
  return (
    <section className="relative bg-regal-navy min-h-[70vh] flex items-center justify-center pt-24">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <span className="inline-block text-freedom-blue text-sm font-semibold uppercase tracking-[1.5px] mb-6">
          How It Works
        </span>
        <h1 className="font-heading font-extrabold text-[48px] md:text-[64px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6">
          Bring your story to life.
        </h1>
        <p className="text-beacon-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Our CampaignAI agents will help you produce a video that shares your
          content, your voice, your story. Craft professional-quality campaign
          ads faster, more affordably, and with compliance in mind.
        </p>
        <Button variant="crimson" href="/get-started">
          Tell your story &rarr;
        </Button>
      </div>
    </section>
  );
}
