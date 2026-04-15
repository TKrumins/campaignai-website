"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const darkHeroPages = ["/", "/how-it-works", "/about", "/compliance", "/community"];

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = darkHeroPages.includes(pathname);
  const isTransparent = !scrolled && !mobileOpen;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isTransparent && hasDarkHero ? "bg-transparent" : "bg-regal-navy border-b-2 border-b-freedom-blue";
  const useLightText = true;

  function getLinkClasses(href: string) {
    const isActive = pathname === href;
    if (useLightText) {
      return isActive
        ? "text-beacon-white border-b-2 border-freedom-blue pb-0.5"
        : "text-beacon-white/70 hover:text-beacon-white";
    }
    return isActive
      ? "text-regal-navy border-b-2 border-freedom-blue pb-0.5"
      : "text-regal-navy/70 hover:text-regal-navy";
  }

  function getMobileLinkClasses(href: string) {
    const isActive = pathname === href;
    return isActive
      ? "text-beacon-white font-bold"
      : "text-beacon-white/70 hover:text-beacon-white";
  }

  const menuIconColor = useLightText ? "text-beacon-white" : "text-regal-navy";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logos/logo-dark-background.svg"
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
            <Link
              href="/get-started"
              className="btn-hover inline-flex items-center rounded-full patriot-gradient p-[3px] shadow-md"
            >
              <span className="inline-flex items-center px-6 py-2.5 rounded-full bg-dawn-frost text-regal-navy text-sm font-semibold">
                Join the waitlist <span className="ml-1 text-regal-navy">&rarr;</span>
              </span>
            </Link>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/get-started"
              className="btn-hover inline-flex items-center rounded-full patriot-gradient p-[3px] shadow-md"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-dawn-frost text-regal-navy text-xs font-semibold">
                Join the waitlist <span className="ml-1">&rarr;</span>
              </span>
            </Link>
            <button
              className={`transition-colors ${menuIconColor}`}
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
