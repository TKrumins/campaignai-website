"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
      <Link
        href="/get-started"
        className="btn-hover block w-full rounded-full patriot-gradient p-[2px]"
      >
        <span className="block w-full text-center px-5 py-3 rounded-full bg-white text-regal-navy text-sm font-semibold">
          Tell your story &rarr;
        </span>
      </Link>
    </div>
  );
}
