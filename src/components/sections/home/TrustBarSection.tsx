"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  ShieldCheck,
  Users,
  UserCheck,
  Sparkles,
  Scale,
  Lock,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const allBadges = [
  {
    icon: ShieldCheck,
    label: "Meaningful Disclosure Framework",
    tooltip:
      "We tell your voters what is created and what is captured, so they always know what they are seeing.",
  },
  {
    icon: Users,
    label: "Multi-Partisan by Design",
    tooltip:
      "Built by a Republican, a Democrat, and an Independent. We serve campaigns across the spectrum.",
  },
  {
    icon: UserCheck,
    label: "Human-in-the-Loop",
    tooltip:
      "Every video is reviewed and finished by a real person before it reaches you.",
  },
  {
    icon: Sparkles,
    label: "AI Only Where It Helps",
    tooltip:
      "We design our process to use AI only where it genuinely helps, which keeps our energy footprint lower and our work faster.",
  },
  {
    icon: Scale,
    label: "FEC & State Compliance Aware",
    tooltip:
      "We track the rules that apply to campaign advertising so your video starts on the right side of them.",
  },
  {
    icon: Lock,
    label: "Privacy-First",
    tooltip:
      "Your campaign's information stays with your campaign. We never share it across campaigns.",
  },
];

function BadgeWithTooltip({
  icon: Icon,
  label,
  tooltip,
}: {
  icon: typeof ShieldCheck;
  label: string;
  tooltip: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const tooltipId = `tooltip-${label.replace(/\s+/g, "-").toLowerCase()}`;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open, close]);

  return (
    <button
      ref={ref}
      type="button"
      className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-beacon-white text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-beacon-white/50"
      style={{
        background: "#0D1B3E",
        border: "1.5px solid transparent",
        backgroundClip: "padding-box",
        WebkitBackgroundClip: "padding-box",
      }}
      onClick={() => setOpen((prev) => !prev)}
      aria-describedby={tooltipId}
    >
      {/* Gradient border wrapper */}
      <span
        className="absolute inset-0 rounded-full -z-10"
        style={{
          padding: "1.5px",
          background:
            "linear-gradient(90deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "inherit",
        }}
      />
      <Icon className="w-4 h-4 shrink-0" />
      <span>{label}</span>

      {/* Tooltip */}
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

export function TrustBarSection() {
  return (
    <section className="bg-regal-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {allBadges.map((badge) => (
              <BadgeWithTooltip key={badge.label} {...badge} />
            ))}
          </div>

          {/* Ethics-as-feature line (2.3) */}
          <p className="text-center text-beacon-white font-medium text-base mt-5">
            <span className="text-verdant mr-1.5">&#x2713;</span>
            We do the hard ethical work, so you can focus on the work only you can do.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
