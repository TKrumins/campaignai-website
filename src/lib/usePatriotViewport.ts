"use client";

import { useEffect, useState } from "react";

/**
 * Mobile Patriot viewport discipline (5.1): exactly one Patriot purchase
 * button on screen at all times. The sticky bar activates when the page hero
 * (`[data-hero]`) exits the viewport; the nav CTA crossfades out while the
 * sticky bar is active and hands back on scroll to top. The sticky bar also
 * yields while an America 250 module (`[data-patriot-module]`) is on screen.
 *
 * `navSwitched` is what the MOBILE top↔bottom nav swap keys off. If the page
 * marks a switch line with `[data-nav-switch]` (the homepage puts it at the top
 * of the white Product section), the swap fires precisely when that line meets
 * the nav's bottom border — so the top bar leaves and the bottom bar arrives as
 * the white section slides up under the nav. Pages without the marker fall back
 * to `heroExited`, so nothing else changes.
 */
export function usePatriotViewport() {
  const [heroExited, setHeroExited] = useState(false);
  const [moduleInView, setModuleInView] = useState(false);
  // null until we know a page has a [data-nav-switch] marker; then a real bool.
  const [switchPoint, setSwitchPoint] = useState<boolean | null>(null);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");

    if (hero) {
      const observer = new IntersectionObserver(
        ([entry]) => setHeroExited(!entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(hero);
      return () => observer.disconnect();
    }

    // Pages without a hero: fall back to a viewport-height scroll threshold
    function handleScroll() {
      setHeroExited(window.scrollY > window.innerHeight * 0.6);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const modules = document.querySelectorAll("[data-patriot-module]");
    if (modules.length === 0) return;

    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      setModuleInView(visible.size > 0);
    });
    modules.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mobile nav-swap line: fire when the [data-nav-switch] marker reaches the
  // nav's bottom border. We measure the (stationary) announcement bar rather
  // than the sliding nav, so the trigger line stays put once the swap starts.
  useEffect(() => {
    const marker = document.querySelector("[data-nav-switch]");
    // No marker on this page → leave switchPoint at its initial null so
    // `navSwitched` falls back to heroExited. (No state write needed.)
    if (!marker) return;
    function check() {
      const announce = document.querySelector(".announcement-bar");
      const announceH = announce ? announce.getBoundingClientRect().height : 0;
      const navBottom = announceH + 96; // nav is h-24 (96px) below the announce bar
      setSwitchPoint(marker!.getBoundingClientRect().top <= navBottom);
    }
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const navSwitched = switchPoint ?? heroExited;

  return { heroExited, moduleInView, navSwitched };
}
