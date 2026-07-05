export function CommunityHero() {
  return (
    <section
      data-hero
      className="relative min-h-[70vh] flex items-center justify-center pt-24 bg-regal-navy"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
        <span className="inline-block text-freedom-blue text-sm font-semibold uppercase tracking-[1.5px] mb-6">
          Substack Community
        </span>

        <h1 className="font-heading font-extrabold text-[36px] sm:text-[40px] md:text-[56px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6">
          We&apos;re building this in public. And we want you in the room.
        </h1>

        {/* P3 (approved) */}
        <p className="text-beacon-white/90 text-lg md:text-xl leading-relaxed max-w-[720px] mx-auto mb-10">
          CampaignAI is more than a product. The conversation about AI and
          campaigns is happening with or without you; this is where it happens
          with you in it. Join us today.
        </p>

        <a
          href="#subscribe"
          className="btn-hover inline-flex items-center justify-center text-center rounded-full bg-liberty-crimson px-8 py-3 text-white text-base font-semibold"
        >
          Join the conversation &rarr;
        </a>
      </div>
    </section>
  );
}
