import type { Metadata } from "next";
import { HeroGalleryWall } from "@/components/sections/home/hero-trials/HeroGalleryWall";
import { HeroTrialLabel } from "@/components/sections/home/hero-trials/HeroTrialLabel";
import { TrustBarSection } from "@/components/sections/home/TrustBarSection";
import { PricingSection } from "@/components/sections/home/PricingSection";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";

/**
 * Mirror of the homepage that swaps the scrolling proof reel for the one-screen
 * "gallery wall" hero, so Tom can compare the two side by side without touching
 * the live home page. Excluded from nav, footer, and sitemap; noindex below.
 *
 * Only a couple of the real sections follow the hero (the navy trust seal that
 * closes it, the pricing that pays off the $1,999 anchor, and the booking
 * banner) — enough to feel like the real page while scrolling, unchanged.
 */
export const metadata: Metadata = {
  title: "Home Hero Preview — Gallery Wall",
  robots: { index: false, follow: false },
};

export default function HomeHeroPreviewPage() {
  return (
    <>
      <HeroGalleryWall />
      <HeroTrialLabel
        n={2}
        title="Gallery Wall (one screen, no scroll)"
        note="All seven stills at once · framed as film, not a player · $1,999 anchored · America 250 lives in the top bar"
      />
      <div className="relative z-10 bg-white">
        <TrustBarSection />
        <PricingSection />
        <BookingBanner showDemo />
      </div>
    </>
  );
}
