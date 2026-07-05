"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const hidden = pathname === "/get-started";

  useEffect(() => {
    if (hidden) return;

    function handleScroll() {
      setVisible(window.scrollY > 500);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hidden]);

  if (hidden || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-regal-navy/90 backdrop-blur-sm p-3 shadow-lg">
      <a
        href="https://calendly.com/campaignai/campaignai-purchase-call"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-hover block w-full rounded-full bg-liberty-crimson text-center px-5 py-3 text-white text-sm font-semibold"
      >
        Buy your first video &rarr;
      </a>
    </div>
  );
}
