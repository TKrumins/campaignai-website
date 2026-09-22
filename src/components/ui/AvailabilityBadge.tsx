"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";

interface AvailabilityBadgeProps {
  label: string;
  /** The disclaimer behind the badge. Hover, tap or keyboard opens it. */
  tooltip: string;
  /** Where the panel opens. Use "below" inside cards that clip at the top. */
  placement?: "above" | "below";
  className?: string;
}

/**
 * A status pill that carries its own explanation — used where we have to say
 * plainly that something isn't offered (broadcast television) without leaving
 * the visitor to guess why.
 *
 * Amber, not crimson: this is a boundary, not an error. The panel opens on
 * hover, on tap (touch has no hover), and on keyboard focus; Escape and an
 * outside click close it; the text is always in the accessible tree via
 * aria-describedby, so a screen reader gets the disclaimer whether or not the
 * panel is open.
 */
export function AvailabilityBadge({
  label,
  tooltip,
  placement = "above",
  className = "",
}: AvailabilityBadgeProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const id = `availability-${label.replace(/\W+/g, "-").toLowerCase()}`;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      aria-describedby={id}
      className={`group relative inline-flex items-center gap-1.5 rounded-full bg-alert-amber/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#8A4B00] ring-1 ring-alert-amber/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${className}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-alert-amber" />
      {label}
      <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span className="sr-only">. What this means:</span>

      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute left-1/2 z-30 w-[min(19rem,78vw)] -translate-x-1/2 rounded-xl bg-white p-3.5 text-left text-xs font-normal normal-case leading-relaxed tracking-normal text-granite shadow-xl ring-1 ring-gray-200 transition-opacity duration-200 ${
          placement === "below" ? "top-full mt-2" : "bottom-full mb-2"
        } ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"}`}
      >
        {tooltip}
      </span>
    </button>
  );
}
