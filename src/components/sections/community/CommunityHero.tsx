export function CommunityHero() {
  return (
    <section
      data-hero
      className="relative bg-regal-navy pt-40 pb-16"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block text-freedom-blue text-sm font-semibold uppercase tracking-[1.5px] mb-6">
          Substack Community
        </span>

        <h1 className="font-heading font-extrabold text-[36px] sm:text-[40px] md:text-[56px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6">
          Building this in public.
        </h1>

        {/* P3 (approved) */}
        <p className="text-beacon-white/90 text-lg md:text-xl leading-relaxed max-w-[720px] mx-auto mb-10">
          The conversation about AI and campaigns is already happening. This is
          where it happens with you in the room.
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
