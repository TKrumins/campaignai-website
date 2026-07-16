"use client";

import { usePathname } from "next/navigation";
import { PatriotPurchaseButton } from "@/components/ui/PatriotPurchaseButton";
import { usePatriotViewport } from "@/lib/usePatriotViewport";

export function MobileCTA() {
  const pathname = usePathname();
  const { heroExited, moduleInView } = usePatriotViewport();

  // Hidden entirely on /get-started; yields to the America 250 module so
  // exactly one Patriot purchase button is ever on a mobile screen.
  const hidden = pathname === "/get-started";
  const active = heroExited && !moduleInView;

  if (hidden) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[999] md:hidden bg-regal-navy/95 backdrop-blur-[8px] motion-safe:transition-transform motion-safe:duration-200 ${
        active ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!active}
      inert={!active}
    >
      <div className="h-16 flex items-center px-4">
        <PatriotPurchaseButton
          className="w-full"
          innerClassName="w-full min-h-[44px] text-sm"
        />
      </div>
    </div>
  );
}
