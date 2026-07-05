"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const darkHeroPages = ["/", "/how-it-works", "/about", "/compliance", "/community", "/regulations"];

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "https://campaignai.substack.com/", label: "Community", external: true },
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
              src="/logos/logo-dark-background.svg"
              alt="CampaignAI"
              width={160}
              height={36}
              priority
              className="w-[110px] sm:w-[160px] h-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors text-sm font-semibold uppercase tracking-[0.5px] ${getLinkClasses(href)}`}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors text-sm font-semibold uppercase tracking-[0.5px] ${getLinkClasses(href)}`}
                >
                  {label}
                </Link>
              )
            )}
            <a
              href="https://calendly.com/campaignai/campaignai-purchase-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center rounded-full bg-liberty-crimson px-6 py-2.5 shadow-md text-white text-sm font-semibold"
            >
              Buy your first video <span className="ml-1">&rarr;</span>
            </a>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="https://calendly.com/campaignai/campaignai-purchase-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center rounded-full bg-liberty-crimson px-4 py-1.5 shadow-md text-white text-xs font-semibold"
            >
              Buy a video <span className="ml-1">&rarr;</span>
            </a>
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
            {navLinks.map(({ href, label, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors text-sm font-semibold uppercase tracking-[0.5px] ${getMobileLinkClasses(href)}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors text-sm font-semibold uppercase tracking-[0.5px] ${getMobileLinkClasses(href)}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
