"use client";

import { useEffect, useState } from "react";

/**
 * Mobile Patriot viewport discipline (5.1): exactly one Patriot purchase
 * button on screen at all times. The sticky bar activates when the page hero
 * (`[data-hero]`) exits the viewport; the nav CTA crossfades out while the
 * sticky bar is active and hands back on scroll to top. The sticky bar also
 * yields while an America 250 module (`[data-patriot-module]`) is on screen.
 */
export function usePatriotViewport() {
  const [heroExited, setHeroExited] = useState(false);
  const [moduleInView, setModuleInView] = useState(false);

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

  return { heroExited, moduleInView };
}
