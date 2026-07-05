"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

/* ── Badge with tooltip (reused from TrustBarSection pattern) ── */
function BadgeWithTooltip({ label, tooltip }: { label: string; tooltip: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const tooltipId = `pricing-tooltip-${label.replace(/\s+/g, "-").toLowerCase()}`;

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

  return (
    <button
      ref={ref}
      type="button"
      className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-regal-navy text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue/50 bg-white"
      style={{
        border: "2px solid transparent",
        backgroundClip: "padding-box",
      }}
      onClick={() => setOpen((prev) => !prev)}
      aria-describedby={tooltipId}
    >
      <span
        className="absolute inset-0 rounded-full -z-10"
        style={{
          padding: "2px",
          background: "linear-gradient(135deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "inherit",
        }}
      />
      <span>{label}</span>
      <span
        id={tooltipId}
        role="tooltip"
        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 rounded-lg bg-white text-granite text-xs leading-relaxed p-3 shadow-lg pointer-events-none transition-opacity duration-200 z-20 ${
          open ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
      >
        {tooltip}
      </span>
    </button>
  );
}

/* ── Logo mark bullet ── */
function LogoMarkBullet() {
  return (
    <Image
      src="/assets/logos/favicon-dark-circle.svg"
      alt=""
      width={16}
      height={16}
      className="w-4 h-4 shrink-0 mt-0.5"
    />
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <SectionLabel text="Pricing" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-[40px] md:text-[48px] md:leading-tight text-regal-navy tracking-[-1.5px] mt-3 mb-5">
              Professional video, priced for campaigns like yours.
            </h2>
            <p className="font-body font-semibold text-lg text-granite max-w-[660px] mx-auto leading-relaxed">
              We make professional video starting at $1,999. Candidates start at $599. Agencies can charge $10,000+ for a 60-sec spot.*
            </p>
          </div>
        </ScrollReveal>

        {/* America 250 ribbon */}
        <ScrollReveal delay={60}>
          <div
            className="rounded-xl p-[2px] mb-10"
            style={{
              background: "linear-gradient(135deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)",
            }}
          >
            <div className="bg-white rounded-[10px] px-6 py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-2xl shrink-0" role="img" aria-label="US flag">&#127482;&#127480;</span>
              <div className="text-center sm:text-left">
                <p className="font-heading font-bold text-regal-navy">
                  America 250 Special: buy two videos, get your first for just $250!
                </p>
                <p className="text-slate text-sm">
                  Available for first 250 customers. Offer ends Nov 3, 2026.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Three pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.2fr_1fr] gap-6 mb-12">
          {/* Card A: Professional Video */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl bg-white shadow-md h-full flex flex-col overflow-hidden">
              <div className="h-1 bg-liberty-crimson" />
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <p className="font-heading font-bold text-sm text-liberty-crimson uppercase tracking-wider mb-3">
                  Professional Video
                </p>
                <p className="text-slate text-sm mb-1">Starting at</p>
                <p className="font-heading font-extrabold text-[42px] text-liberty-crimson leading-none mb-2">
                  $1,999
                </p>
                <p className="text-slate text-sm mb-5">
                  per video &middot; flat starting rate + add-ons priced upfront
                </p>
                <p className="text-granite text-sm leading-relaxed mb-5">
                  Full production for the teams behind the campaigns: consultancies, party committees, PACs, and organizations producing at scale.
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "Polished, finished video ads, not templates",
                    "Human editorial review on every video",
                    "15-, 30-, and 60-second versions in every format",
                    "State-specific AI disclosure labels",
                    "Full ownership. No watermark.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-granite">
                      <LogoMarkBullet />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="crimson"
                  href="https://calendly.com/campaignai/campaignai-purchase-call"
                  external
                  className="w-full"
                >
                  Buy your first video &rarr;
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Card B: Candidate Campaigns (emotional center) */}
          <ScrollReveal delay={180}>
            <div className="rounded-2xl bg-white shadow-xl h-full flex flex-col overflow-hidden ring-1 ring-freedom-blue/20">
              <div className="h-1 bg-freedom-blue" />
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <p className="font-heading font-bold text-sm text-freedom-blue uppercase tracking-wider mb-3">
                  Candidate Campaigns
                </p>
                <p className="text-slate text-sm mb-1">Starting at</p>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-heading font-bold text-xl text-slate line-through">$1,999</span>
                  <span className="font-heading font-extrabold text-[42px] text-freedom-blue leading-none">$599</span>
                </div>
                <span className="inline-block rounded-full bg-freedom-blue/10 text-freedom-blue text-xs font-semibold px-3 py-1 mb-3 w-fit">
                  2026 midterm cycle mission rate
                </span>
                <p className="text-granite text-sm leading-relaxed mb-5">
                  School board to U.S. Senate. Because every campaign deserves a fair shot.
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "The exact same production and editors",
                    "Human editorial review on every video",
                    "15-, 30-, and 60-second versions in every format",
                    "State-specific AI disclosure labels",
                    "Full ownership. No watermark.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-granite">
                      <LogoMarkBullet />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="crimson"
                  href="https://calendly.com/campaignai/campaignai-purchase-call"
                  external
                  className="w-full"
                >
                  Buy your first video &rarr;
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Card C: Nonprofits & Advocacy */}
          <ScrollReveal delay={260}>
            <div className="rounded-2xl bg-dawn-frost h-full flex flex-col overflow-hidden shadow-md order-first md:order-none">
              <div className="h-1 bg-verdant" />
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <p className="font-heading font-bold text-sm text-verdant uppercase tracking-wider mb-3">
                  Nonprofits &amp; Advocacy
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-verdant text-regal-navy text-xs font-semibold px-3 py-1 mb-5 w-fit">
                  <span className="text-verdant">&#x2713;</span> Mission pricing
                </span>
                <p className="text-granite text-sm leading-relaxed mb-6 flex-1">
                  Telling a story for a cause instead of a candidate? We price nonprofit work case by case, so your budget never decides whether your story gets told. Book a call and we&apos;ll find the fit.
                </p>
                <Button
                  variant="verdant-outline"
                  href="https://calendly.com/campaignai/demo"
                  external
                  className="w-full"
                >
                  Talk to our team &rarr;
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA block */}
        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <Button
                variant="crimson"
                href="https://calendly.com/campaignai/campaignai-purchase-call"
                external
              >
                Buy your first video &rarr;
              </Button>
              <p className="text-slate text-sm mt-2">
                Book a 30-minute call to get started.
              </p>
            </div>
            <div className="text-center">
              <Button variant="blue-outline" href="/get-started#waitlist">
                Join the waitlist
              </Button>
              <p className="text-slate text-xs mt-2 max-w-[280px]">
                Be first in line when you can create videos end to end, on your own.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal delay={340}>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <BadgeWithTooltip
              label="FEC & State Compliance Aware"
              tooltip="We track the rules that apply to campaign advertising so your video starts on the right side of them."
            />
            <BadgeWithTooltip
              label="Privacy-First"
              tooltip="Your campaign's information stays with your campaign. We never share it across campaigns."
            />
          </div>
        </ScrollReveal>

        {/* Ethics line */}
        <ScrollReveal delay={380}>
          <p className="text-center text-granite text-base">
            <span className="text-verdant mr-1.5">&#x2713;</span>
            We do the hard ethical work, so you can focus on the work only you can do.
          </p>
        </ScrollReveal>

        {/* Footnote */}
        <ScrollReveal delay={400}>
          <p className="text-center text-slate text-xs mt-8">
            *Agency production costs range significantly with the size and competitiveness of the race.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
