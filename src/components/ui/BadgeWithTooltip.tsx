"use client";

import { useState, useRef, useEffect, useCallback, type ComponentType } from "react";

interface BadgeWithTooltipProps {
  label: string;
  tooltip?: string;
  size?: "sm" | "md";
  /** Optional leading icon (Lucide component) */
  icon?: ComponentType<{ className?: string }>;
  /** 'light' = white fill, Regal Navy label (default). 'navy' = navy fill for dark sections; zero visual change for migrated hero badges. */
  tone?: "light" | "navy";
}

/**
 * Bridge-gradient outline pill (2px, #FF3366 → #8E5CF7 → #4D9FFF, border-box
 * technique). Hover tooltip; tap toggle on touch; keyboard focusable with a
 * visible ring; Escape dismisses; aria-describedby.
 */
export function BadgeWithTooltip({
  label,
  tooltip,
  size = "md",
  icon: Icon,
  tone = "light",
}: BadgeWithTooltipProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const tooltipId = `badge-tooltip-${label.replace(/\s+/g, "-").toLowerCase()}`;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, close]);

  const sizing = size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm";
  const toneClasses =
    tone === "navy" ? "bg-regal-navy text-beacon-white" : "bg-white text-regal-navy";

  if (!tooltip) {
    return (
      <span className={`relative inline-flex items-center gap-2 rounded-full font-medium ${sizing} ${toneClasses}`}>
        <BridgeBorder />
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{label}</span>
      </span>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      className={`group relative inline-flex items-center gap-2 rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue/60 ${sizing} ${toneClasses}`}
      onClick={() => setOpen((prev) => !prev)}
      aria-describedby={tooltipId}
    >
      <BridgeBorder />
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{label}</span>

      <span
        id={tooltipId}
        role="tooltip"
        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 rounded-lg bg-white text-granite text-xs leading-relaxed p-3 shadow-lg pointer-events-none transition-opacity duration-200 z-20 ${
          open
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
      >
        {tooltip}
      </span>
    </button>
  );
}

function BridgeBorder() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{
        padding: "2px",
        background: "linear-gradient(90deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        borderRadius: "inherit",
      }}
    />
  );
}
