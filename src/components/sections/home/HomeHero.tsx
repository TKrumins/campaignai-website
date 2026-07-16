import { HeroTrialShell } from "./hero-trials/HeroTrialShell";
import { HeroCarousel } from "./hero-trials/HeroCarousel";

/**
 * The live home-page hero: the restored lead copy + pricing on the left, and the
 * rotating film carousel on the right (the direction Tom locked in on 2026-07-13,
 * promoted here from the /preview/home-hero trials). The classic ribbon-threaded
 * film-stack hero it replaced is preserved at /preview/classic-hero.
 */
export function HomeHero() {
  return <HeroTrialShell visual={<HeroCarousel />} />;
}
