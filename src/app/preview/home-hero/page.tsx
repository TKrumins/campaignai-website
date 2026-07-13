import type { Metadata } from "next";
import { HeroTrialShell } from "@/components/sections/home/hero-trials/HeroTrialShell";
import { HeroOurWork } from "@/components/sections/home/hero-trials/HeroOurWork";
import { HeroFloatingFrames } from "@/components/sections/home/hero-trials/HeroFloatingFrames";
import { HeroCarousel } from "@/components/sections/home/hero-trials/HeroCarousel";
import { HeroTrialLabel } from "@/components/sections/home/hero-trials/HeroTrialLabel";
import { ShowcaseSection } from "@/components/sections/home/ShowcaseSection";
import { PricingSection } from "@/components/sections/home/PricingSection";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";

/**
 * Hero comparison page. Three candidate heroes stacked, each with the original
 * eyebrow + rotating headline + "nothing charged upfront" copy and the same
 * pricing transition (starting $1,999, swinging to the $599 candidate rate —
 * nonprofit/mission pricing left to the section below); only the visual differs.
 * The real Our Work + Pricing sections follow. Excluded from nav/sitemap; noindex.
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
        note="Two real, playable films — fixed opening frames, a strip of each film's other frames, sparkles all around"
      />

      <HeroTrialShell visual={<HeroFloatingFrames />} />
      <HeroTrialLabel
        n={2}
        title="Floating frames + weaving ribbon"
        note="Produced-video cues (play + timecode), both co-founders on screen, a Multi-Partisan ribbon weaving through every 6s"
      />

      <HeroTrialShell visual={<HeroCarousel />} dim={80} />
      <HeroTrialLabel
        n={3}
        title="Rotating reel carousel"
        note="The current film centered, the next peeking in and fading as it rotates every 6s — built to grow past two videos"
      />

      <div className="relative z-10 bg-white">
        <ShowcaseSection />
        <PricingSection />
        <BookingBanner showDemo />
      </div>
    </>
  );
}
