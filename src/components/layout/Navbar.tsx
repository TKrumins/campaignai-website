"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { PatriotPurchaseButton } from "@/components/ui/PatriotPurchaseButton";
import { usePatriotViewport } from "@/lib/usePatriotViewport";

// Pages with a DARK hero: the nav is transparent over the hero (light logo),
// then solidifies to navy on scroll. Light-hero pages (e.g. /pricing) are left
// off, so their nav stays solid navy — light logo, always legible, no swap.
const darkHeroPages = ["/", "/how-it-works", "/about", "/compliance", "/community", "/regulations", "/ethics", "/ai-in-campaigns", "/CampaignAIDisclosure"];

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/ethics", label: "Ethics" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { heroExited, moduleInView } = usePatriotViewport();

  const hasDarkHero = darkHeroPages.includes(pathname);
  // On the homepage the hero runs a pinned film sequence; keep the nav
  // transparent (darken + border deferred) until that whole sequence has
  // scrolled past — `heroExited` — instead of solidifying on the first few px.
  // Other dark-hero pages keep the simple scroll threshold.
  const solidified = pathname === "/" ? heroExited : scrolled;
  const isTransparent = !solidified && !mobileOpen && hasDarkHero;

  // Mobile viewport discipline (5.1): the nav CTA renders until the sticky
  // bar activates (hero exits viewport), then crossfades out; scroll to top
  // hands back. Desktop keeps the nav CTA always.
  const stickyOwnsPatriot = heroExited || moduleInView;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
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
      className={`fixed left-0 right-0 z-50 transition-colors duration-500 ease-in-out ${navBg}`}
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
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors text-sm font-semibold uppercase tracking-[0.5px] ${getLinkClasses(href)}`}
              >
                {label}
              </Link>
            ))}
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
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors text-sm font-semibold uppercase tracking-[0.5px] ${getMobileLinkClasses(href)}`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
