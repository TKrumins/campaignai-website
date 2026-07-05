"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { PatriotPurchaseButton } from "@/components/ui/PatriotPurchaseButton";
import { usePatriotViewport } from "@/lib/usePatriotViewport";

const darkHeroPages = ["/", "/how-it-works", "/about", "/compliance", "/community", "/regulations", "/pricing", "/ethics"];

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
  const isTransparent = !scrolled && !mobileOpen;

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

  const navBg = isTransparent && hasDarkHero ? "bg-transparent" : "bg-regal-navy border-b-2 border-b-freedom-blue";

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
              className="text-beacon-white transition-colors"
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
