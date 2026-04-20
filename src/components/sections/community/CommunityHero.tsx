import { SubstackCapture } from "@/components/forms/SubstackCapture";

export function CommunityHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-24 bg-regal-navy">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <span className="inline-block text-freedom-blue text-sm font-semibold uppercase tracking-[1.5px] mb-6">
          Our Community
        </span>

        <h1 className="font-heading font-extrabold text-[36px] sm:text-[40px] md:text-[56px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6">
          We&apos;re building this in public. And we want you in the room.
        </h1>

        <p className="text-beacon-white/90 text-lg md:text-xl leading-relaxed max-w-[720px] mx-auto mb-10">
          CampaignAI is more than a product. We&apos;re opening up a multi-partisan
          conversation about what happens when AI meets democracy. Join the
          conversation today.
        </p>

        <div className="max-w-md mx-auto">
          <SubstackCapture variant="dark" buttonText="Subscribe" />
        </div>
      </div>
    </section>
  );
}
