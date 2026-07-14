import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Hub } from "@/components/ui/DistributionHub";
import { TelevisionReach } from "@/components/ui/TelevisionReach";

interface FunnelReachProps {
  label: string;
  labelColor?: "blue" | "crimson" | "verdant" | "gold" | "horizon";
  heading: string;
  /** Recolour the hub's travelling lights (e.g. verdant for nonprofits). */
  lightColors?: string[];
  ringColors?: [string, string, string];
  tone?: "white" | "frost";
}

/**
 * Reach/distribution beat for the /for/* funnels: the shared channels hub +
 * the television references (TelevisionReach), recoloured per audience. Copy is
 * deliberately light — the graphic's own channel labels carry the detail, so
 * this reinforces value (one video, everywhere) without stalling the funnel.
 */
export function FunnelReach({
  label,
  labelColor = "blue",
  heading,
  lightColors,
  ringColors,
  tone = "frost",
}: FunnelReachProps) {
  const bg = tone === "white" ? "bg-white" : "bg-dawn-frost";
  return (
    <section className={`border-t border-black/[0.04] py-16 md:py-20 ${bg}`}>
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-8 max-w-[640px] text-center">
            <SectionLabel text={label} color={labelColor} />
            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-[-0.5px] text-regal-navy md:text-[34px]">
              {heading}
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Hub
            cx={450}
            cy={450}
            spokeLen={290}
            rectW={190}
            rectH={90}
            hubR={72}
            viewBox="60 60 780 780"
            idp="fr-d-"
            className="mx-auto hidden w-full max-w-[820px] md:block"
            lightColors={lightColors}
            ringColors={ringColors}
          />
          <Hub
            cx={300}
            cy={300}
            spokeLen={185}
            rectW={160}
            rectH={76}
            hubR={52}
            viewBox="30 30 540 540"
            idp="fr-m-"
            className="w-full md:hidden"
            lightColors={lightColors}
            ringColors={ringColors}
          />
        </ScrollReveal>
        <TelevisionReach />
      </div>
    </section>
  );
}
