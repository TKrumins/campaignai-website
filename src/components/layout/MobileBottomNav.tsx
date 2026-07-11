"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { PatriotPurchaseButton } from "@/components/ui/PatriotPurchaseButton";
import { usePatriotViewport } from "@/lib/usePatriotViewport";
import { navItems } from "@/lib/nav";

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
          {navItems.map((item) => (
            <div key={item.label} className="flex flex-col">
              <Link
                href={item.href ?? "#"}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.5px] ${
                  pathname === item.href ? "bg-white/10 text-beacon-white" : "text-beacon-white/70 hover:text-beacon-white"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mb-1 ml-4 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {item.children.map((c) =>
                    c.soon ? (
                      <span
                        key={c.label}
                        aria-disabled="true"
                        className="flex items-center gap-2 px-1 py-1 text-xs font-semibold text-beacon-white/40"
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
                        onClick={() => setMenuOpen(false)}
                        className="px-1 py-1 text-xs font-semibold text-beacon-white/70 hover:text-beacon-white"
                      >
                        {c.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
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
