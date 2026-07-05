"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Scale, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ctaBadges = [
  {
    icon: Scale,
    label: "FEC & State Compliance Aware",
    tooltip:
      "We track the rules that apply to campaign advertising so your video starts on the right side of them.",
    draft: true,
  },
  {
    icon: Lock,
    label: "Privacy-First",
    tooltip:
      "Your campaign's information stays with your campaign. We never share it across campaigns.",
    draft: true,
  },
];

function CTABadge({
  icon: Icon,
  label,
  tooltip,
}: {
  icon: typeof Scale;
  label: string;
  tooltip: string;
  draft?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const tooltipId = `tooltip-cta-${label.replace(/\s+/g, "-").toLowerCase()}`;

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

export function FinalCTASection() {
  const [prefillEmail, setPrefillEmail] = useState<string | undefined>();

  useEffect(() => {
    function handlePrefill(e: CustomEvent<string>) {
      setPrefillEmail(e.detail);
    }

    window.addEventListener("prefill-waitlist-email", handlePrefill as EventListener);
    return () => window.removeEventListener("prefill-waitlist-email", handlePrefill as EventListener);
  }, []);

  return (
    <section id="waitlist-form" className="py-20 md:py-28 bg-regal-navy relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Moved trust badges */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {ctaBadges.map((badge) => (
              <CTABadge key={badge.label} {...badge} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="font-heading font-extrabold text-4xl md:text-[56px] md:leading-tight text-white tracking-[-1px] mb-5 drop-shadow-md">
              Your story. Told right.
            </h2>
            <p className="text-white/95 text-xl font-medium leading-relaxed max-w-[600px] mx-auto mb-6">
              Ready to produce your first campaign video?
            </p>
            <Button
              variant="crimson"
              href="https://calendly.com/campaignai/campaignai-purchase-call"
              external
              className="px-8 py-3 text-base"
            >
              Buy your first video &rarr;
            </Button>
            <p className="text-white/60 text-sm mt-2">
              Book a 30-minute call to get started.
            </p>
          </div>
        </ScrollReveal>

        {/* Waitlist form — secondary */}
        <ScrollReveal delay={150}>
          <div className="text-center mb-4">
            <p className="text-white/80 text-base font-medium mb-2">
              Or join the waitlist for our self-serve platform
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="rounded-2xl p-[3px] patriot-gradient shadow-lg">
            <div className="bg-white rounded-[14px] p-6 md:p-8">
              <WaitlistForm prefillEmail={prefillEmail} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
