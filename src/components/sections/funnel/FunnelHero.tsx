import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FunnelHeroProps {
  h1: string;
  subtitle: string;
  /**
   * Candidate hero photo drop-in slot. When true, renders a duotone
   * navy-overlay placeholder frame styled to the established hero pattern;
   * real photography drops in at public/assets/funnels/candidates-hero.jpg
   * (E.3) without layout work.
   */
  photoPlaceholder?: boolean;
}

/**
 * Shared funnel hero (7.0). Poster discipline (E.1/E.5): headline, subtitle,
 * one visual, one implied next action. data-hero drives the Patriot sticky
 * crossfade via usePatriotViewport.
 */
export function FunnelHero({ h1, subtitle, photoPlaceholder = false }: FunnelHeroProps) {
  return (
    <section
      data-hero
      className="relative pt-40 pb-16 md:pb-20 bg-regal-navy overflow-hidden"
    >
      {/* Ambient tri-color wash, low opacity under the navy (C.4) */}
      <div
        className="absolute inset-0 opacity-[0.16] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 15% 0%, #FF3366 0%, transparent 55%), radial-gradient(60% 80% at 85% 100%, #4D9FFF 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />
      {photoPlaceholder && (
        // Duotone photo placeholder frame; navy overlay per E.3. Drop-in:
        // public/assets/funnels/candidates-hero.jpg
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,27,62,0.55) 0%, rgba(13,27,62,0.92) 100%), repeating-linear-gradient(115deg, rgba(122,184,255,0.06) 0px, rgba(122,184,255,0.06) 2px, transparent 2px, transparent 9px)",
          }}
        />
      )}

      <div className="relative max-w-[820px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h1 className="font-heading font-extrabold text-4xl md:text-[52px] md:leading-[1.08] text-beacon-white tracking-[-1px] mb-5">
            {h1}
          </h1>
          <p className="text-beacon-white/85 text-lg md:text-xl leading-relaxed max-w-[680px] mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
