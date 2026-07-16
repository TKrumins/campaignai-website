import { EXPERIENCE_EYEBROW } from "@/lib/constants";

interface ExperienceHeroProps {
  h1: string;
  subtitle: string;
  /** Set false when the page renders its own animated hero band. */
  band?: boolean;
  children?: React.ReactNode;
}

/**
 * Shared experience hero (Section 4). Carries EXPERIENCE_EYEBROW on every
 * experience page and data-hero for the Patriot sticky crossfade. Static
 * markup so it is safe in a Server Component; interactive pages layer their
 * own client islands beneath.
 */
export function ExperienceHero({ h1, subtitle, band = true, children }: ExperienceHeroProps) {
  return (
    <section
      data-hero
      className={`relative pt-40 pb-14 overflow-hidden ${band ? "bg-regal-navy" : ""}`}
    >
      <div className="relative max-w-[820px] mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block text-verdant text-sm font-semibold uppercase tracking-[1.5px] mb-4">
          {EXPERIENCE_EYEBROW}
        </span>
        <h1 className="font-heading font-extrabold text-4xl md:text-[52px] md:leading-[1.08] text-beacon-white tracking-[-1px] mb-5">
          {h1}
        </h1>
        <p className="text-beacon-white/85 text-lg leading-relaxed max-w-[680px] mx-auto">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
