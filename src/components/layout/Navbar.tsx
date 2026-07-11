"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { PatriotPurchaseButton } from "@/components/ui/PatriotPurchaseButton";
import { usePatriotViewport } from "@/lib/usePatriotViewport";
import { navItems } from "@/lib/nav";

// Pages with a DARK hero: the nav is transparent over the hero (light logo),
// then solidifies to navy on scroll. Light-hero pages (e.g. /pricing) are left
// off, so their nav stays solid navy — light logo, always legible, no swap.
const darkHeroPages = ["/", "/how-it-works", "/about", "/compliance", "/community", "/regulations", "/ethics", "/ai-in-campaigns", "/CampaignAIDisclosure"];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Mobile-only: solidify the homepage nav on scroll instead of waiting for the
  // whole hero to exit. On a phone the hero isn't a pinned film stage, so a
  // transparent bar just lets the reel and copy bleed through it — an opaque
  // navy bar reads far cleaner, and it still slides to the bottom at hero exit.
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const pathname = usePathname();
  const { heroExited, moduleInView } = usePatriotViewport();

  const hasDarkHero = darkHeroPages.includes(pathname);
  // On the homepage the hero runs a pinned film sequence; keep the nav
  // transparent (darken + border deferred) until that whole sequence has
  // scrolled past — `heroExited` — instead of solidifying on the first few px.
  // Other dark-hero pages keep the simple scroll threshold.
  const solidified = pathname === "/" ? heroExited || mobileScrolled : scrolled;
  const isTransparent = !solidified && !mobileOpen && hasDarkHero;

  // Mobile viewport discipline (5.1): the nav CTA renders until the sticky
  // bar activates (hero exits viewport), then crossfades out; scroll to top
  // hands back. Desktop keeps the nav CTA always.
  const stickyOwnsPatriot = heroExited || moduleInView;

  // When the bottom nav takes over (hero exited), slide the whole top nav up
  // out of frame on mobile so the two move in one coordinated pass. Matches
  // MobileBottomNav's `active`, so they animate together.
  const bottomNavActive = heroExited && !moduleInView && pathname !== "/get-started";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
      setMobileScrolled(window.scrollY > 10 && window.innerWidth < 768);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent over a dark hero. On the homepage the films scroll up behind the
  // nav during the pinned sequence, so a soft top-down scrim (no hard bottom
  // border) keeps the links legible without firing the full darken+border — that
  // still waits for the hero to exit. Other dark-hero pages stay fully clear.
  const navBg = isTransparent
    ? pathname === "/"
      ? "bg-gradient-to-b from-regal-navy/90 via-regal-navy/45 to-transparent"
      : "bg-transparent"
    : "bg-regal-navy border-b-2 border-b-freedom-blue";

  function getLinkClasses(href: string) {
    const isActive = pathname === href;
    return isActive
      ? "text-beacon-white border-b-2 border-freedom-blue pb-0.5"
      : "text-beacon-white/70 hover:text-beacon-white";
  }

  function getMobileLinkClasses(href: string) {
    const isActive = pathname === href;
    return isActive
      ? "text-beacon-white font-bold"
      : "text-beacon-white/70 hover:text-beacon-white";
  }

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-[transform,background-color,border-color] duration-700 ease-in-out ${
        bottomNavActive ? "max-md:-translate-y-full" : ""
      } ${navBg}`}
      style={{ top: "var(--announce-h, 0px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            {/* Light logo — the bar is always dark (transparent over a dark hero,
                or solid navy), so one logo serves every page. */}
            <Image
              src="/assets/logos/logo-dark-background.svg"
              alt="CampaignAI"
              width={160}
              height={36}
              priority
              className="w-[110px] sm:w-[160px] h-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href ?? "#"}
                    className={`inline-flex items-center gap-1 transition-colors text-sm font-semibold uppercase tracking-[0.5px] ${getLinkClasses(item.href ?? "")}`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" aria-hidden />
                  </Link>
                  {/* Dropdown panel — revealed on hover or keyboard focus. The
                      pt-4 keeps a hover bridge between trigger and panel. */}
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-72 rounded-2xl border border-white/10 bg-regal-navy p-2 shadow-2xl">
                      {item.children.map((c) =>
                        c.soon ? (
                          <span
                            key={c.label}
                            aria-disabled="true"
                            className="flex cursor-default flex-col gap-0.5 rounded-xl px-3 py-2.5 opacity-55"
                          >
                            <span className="flex items-center gap-2 text-sm font-bold text-beacon-white/80">
                              {c.label}
                              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-beacon-white/60">
                                Soon
                              </span>
                            </span>
                            {c.description && <span className="text-xs text-beacon-white/45">{c.description}</span>}
                          </span>
                        ) : (
                          <Link
                            key={c.label}
                            href={c.href}
                            className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/10"
                          >
                            <span className="text-sm font-bold text-beacon-white">{c.label}</span>
                            {c.description && <span className="text-xs text-beacon-white/55">{c.description}</span>}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  className={`transition-colors text-sm font-semibold uppercase tracking-[0.5px] ${getLinkClasses(item.href ?? "")}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <PatriotPurchaseButton />
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <div
              className={`transition-opacity duration-200 ${
                stickyOwnsPatriot ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              aria-hidden={stickyOwnsPatriot}
            >
              <PatriotPurchaseButton size="sm" />
            </div>
            <button
              className="text-beacon-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-regal-navy border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <Link
                  href={item.href ?? "#"}
                  className={`transition-colors text-sm font-semibold uppercase tracking-[0.5px] ${getMobileLinkClasses(item.href ?? "")}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-1 flex flex-col gap-2 border-l border-white/10 pl-3">
                    {item.children.map((c) =>
                      c.soon ? (
                        <span
                          key={c.label}
                          aria-disabled="true"
                          className="flex items-center gap-2 text-xs font-semibold text-beacon-white/40"
                        >
                          {c.label}
                          <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider">
                            Soon
                          </span>
                        </span>
                      ) : (
                        <Link
                          key={c.label}
                          href={c.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs font-semibold text-beacon-white/70 hover:text-beacon-white"
                        >
                          {c.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
