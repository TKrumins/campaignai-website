"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { PatriotPurchaseButton } from "@/components/ui/PatriotPurchaseButton";
import { usePatriotViewport } from "@/lib/usePatriotViewport";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/ethics", label: "Ethics" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
];

/**
 * Mobile bottom nav (5.1, revised). Once the page hero exits, the top Navbar
 * slides up out of frame and this bar slides up from the bottom at the same
 * time — a full nav relocated to the thumb zone: logo, a shrunk Get Started,
 * and a menu that opens as a bottom sheet. Still exactly one Patriot purchase
 * button on screen at any moment (the top nav's is gone while this is active).
 */
export function MobileBottomNav() {
  const pathname = usePathname();
  const { heroExited, moduleInView } = usePatriotViewport();
  const [menuOpen, setMenuOpen] = useState(false);

  const hidden = pathname === "/get-started";
  const active = heroExited && !moduleInView;

  if (hidden) return null;

  // The sheet only shows while the bar is active, so a stale-open menu stays
  // hidden until the bar returns — no effect needed to force it closed.
  const sheetShown = menuOpen && active;

  return (
    <div className="md:hidden">
      {/* dim scrim behind the sheet */}
      {sheetShown && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[998] bg-regal-navy/50"
        />
      )}

      {/* bottom-sheet menu — slides up from behind the bar */}
      <div
        className={`fixed bottom-16 left-0 right-0 z-[999] border-t border-white/10 bg-regal-navy transition-transform duration-300 ${
          sheetShown ? "translate-y-0" : "pointer-events-none translate-y-[calc(100%+5rem)]"
        }`}
        aria-hidden={!sheetShown}
        inert={!sheetShown}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.5px] ${
                  isActive ? "bg-white/10 text-beacon-white" : "text-beacon-white/70 hover:text-beacon-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* the bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[1000] border-t border-white/10 bg-regal-navy/95 backdrop-blur-[8px] transition-transform duration-700 ${
          active ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-hidden={!active}
        inert={!active}
      >
        <div className="flex h-16 items-center gap-3 px-4">
          <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)} aria-label="CampaignAI home">
            <Image
              src="/assets/logos/logo-dark-background.svg"
              alt="CampaignAI"
              width={120}
              height={27}
              className="h-auto w-[104px]"
            />
          </Link>
          <div className="min-w-0 flex-1">
            <PatriotPurchaseButton className="w-full" innerClassName="w-full min-h-[40px] text-sm" />
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-beacon-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}
