import type { Metadata } from "next";
import { HeroTrialShell } from "@/components/sections/home/hero-trials/HeroTrialShell";
import { HeroOurWork } from "@/components/sections/home/hero-trials/HeroOurWork";
import { HeroFloatingFrames } from "@/components/sections/home/hero-trials/HeroFloatingFrames";
import { HeroWeb } from "@/components/sections/home/hero-trials/HeroWeb";
import { HeroSpotlight } from "@/components/sections/home/hero-trials/HeroSpotlight";
import { HeroTrialLabel } from "@/components/sections/home/hero-trials/HeroTrialLabel";
import { ShowcaseSection } from "@/components/sections/home/ShowcaseSection";
import { PricingSection } from "@/components/sections/home/PricingSection";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";

/**
 * Hero comparison page. Four candidate heroes stacked, each with the original
 * eyebrow + rotating headline + "nothing charged upfront" copy and the same
 * pricing transition ($1,999 → $599 candidate, visualized); only the visual
 * differs. The real Our Work + Pricing sections follow, so the transition pays
 * off. Excluded from nav, footer, sitemap; noindex below.
 */
export const metadata: Metadata = {
  title: "Home Hero Trials",
  robots: { index: false, follow: false },
};

export default function HomeHeroPreviewPage() {
  return (
    <>
      <HeroTrialShell visual={<HeroOurWork />} dim={80} />
      <HeroTrialLabel
        n={1}
        title="Our Work, up top"
        note="Lead with the films our own team ships — two real, playable videos · original headline + pricing transition"
      />

      <HeroTrialShell visual={<HeroFloatingFrames />} />
      <HeroTrialLabel
        n={2}
        title="Floating frames + AI sparkles"
        note="Film frames from our work drifting in a field of sparkles"
      />

      <HeroTrialShell visual={<HeroWeb />} />
      <HeroTrialLabel
        n={3}
        title="Constellation web + gradient ribbon"
        note="Frames wired into a network, a Multi-Partisan ribbon winding through"
      />

      <HeroTrialShell visual={<HeroSpotlight />} dim={80} />
      <HeroTrialLabel
        n={4}
        title="Spotlight reel"
        note="One featured film under a spotlight, a filmstrip of the rest beneath"
      />

      <div className="relative z-10 bg-white">
        <ShowcaseSection />
        <PricingSection />
        <BookingBanner showDemo />
      </div>
    </>
  );
}
