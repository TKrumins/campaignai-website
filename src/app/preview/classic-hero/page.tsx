import type { Metadata } from "next";
import { HeroComboB } from "@/components/sections/home/hero-trials/HeroComboB";

/**
 * Archive of the original home-page hero — the pinned lead copy with the
 * ribbon-threaded film-still stack (ProofFilmGraphic) scrolling up the right
 * side. Preserved here, viewable, after the home page adopted the rotating
 * carousel hero on 2026-07-13. Excluded from nav/sitemap; noindex.
 */
export const metadata: Metadata = {
  title: "Classic Hero (archived)",
  robots: { index: false, follow: false },
};

export default function ClassicHeroPreviewPage() {
  return <HeroComboB />;
}
