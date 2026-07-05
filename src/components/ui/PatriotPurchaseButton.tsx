"use client";

import { useEffect, useState } from "react";
import { CALENDLY_PURCHASE, CTA_PRIMARY } from "@/lib/constants";

interface PatriotPurchaseButtonProps {
  /** Sanctioned uses ONLY: nav CTA, America 250 module button, sticky mobile CTA. */
  href?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  innerClassName?: string;
}

const sizeStyles: Record<NonNullable<PatriotPurchaseButtonProps["size"]>, string> = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export function PatriotPurchaseButton({
  href = CALENDLY_PURCHASE,
  label = CTA_PRIMARY,
  size = "md",
  className = "",
  innerClassName = "",
}: PatriotPurchaseButtonProps) {
  // SSR renders the linear fallback; upgrade to the conic rotation on mount
  // where @property is supported (CSS.registerProperty is its JS companion).
  const [conic, setConic] = useState(false);
  const [loadSweep, setLoadSweep] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (typeof CSS !== "undefined" && "registerProperty" in CSS) {
        setConic(true);
      }
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => cancelAnimationFrame(raf);
    }

    // Once per page load, ~5s after load: border sweep + gentle pulse (~1.1s)
    const start = window.setTimeout(() => setLoadSweep(true), 5000);
    const stop = window.setTimeout(() => setLoadSweep(false), 6300);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(start);
      window.clearTimeout(stop);
    };
  }, []);

  return (
    <span
      className={`patriot-purchase ${conic ? "pp-conic" : "pp-linear"} ${
        loadSweep ? "pp-load-sweep" : ""
      } ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`pp-inner focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${sizeStyles[size]} ${innerClassName}`}
      >
        {label}
      </a>
    </span>
  );
}
