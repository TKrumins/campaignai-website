import { SubstackCapture } from "@/components/forms/SubstackCapture";

export function AboutHero() {
  return (
    <section className="relative bg-regal-navy min-h-[70vh] flex items-center justify-center pt-24">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <span className="inline-block text-freedom-blue text-sm font-semibold uppercase tracking-[1.5px] mb-6">
          About
        </span>
        <h1 className="font-heading font-extrabold text-[32px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6">
          Built by people who&apos;ve been in the arena.
        </h1>
        <p className="text-beacon-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          CampaignAI was founded by a multi-partisan team who recognize that
          building better AI is more important than any one partisan victory.
        </p>
        <div className="max-w-lg mx-auto mb-4">
          <SubstackCapture variant="dark" buttonText="Subscribe" />
        </div>
        <p className="text-beacon-white/50 text-xs">
          Follow us on Substack to learn about the team and our approach to building.
        </p>
      </div>
    </section>
  );
}
