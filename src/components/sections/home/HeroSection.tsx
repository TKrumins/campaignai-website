import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background: American flag image with navy overlay */}
      <div className="absolute inset-[-5%] animate-flag-wave">
        <Image
          src="/assets/images/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-regal-navy/50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
        {/* Eyebrow */}
        <p className="font-body text-sm md:text-base text-beacon-white/80 uppercase tracking-widest mb-4">
          Campaign-Ready Video Production at the Speed of AI
        </p>

        {/* America 250 badge */}
        <div
          className="inline-block rounded-xl px-5 py-3 mb-8 mx-auto"
          style={{
            border: "1.5px solid #FF3366",
            backgroundColor: "rgba(255,51,102,.08)",
          }}
        >
          <p className="font-heading font-bold text-[15px] md:text-base" style={{ color: "#FF3366" }}>
            America 250 Special: buy two videos, get your first for just $250!
          </p>
          <p className="text-beacon-white/80 text-sm mt-1">
            Available for first 250 customers. Offer ends Nov 3, 2026.
          </p>
        </div>

        <h1 className="font-heading font-extrabold text-[36px] sm:text-[48px] md:text-[72px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6 max-w-[18ch] mx-auto">
          Every campaign has a story. Tell yours today.
        </h1>

        {/* Subheadline */}
        <p className="font-body font-medium text-lg md:text-2xl text-beacon-white/90 leading-relaxed max-w-[720px] mx-auto mb-8">
          Create professional campaign videos in days, not weeks. AI-powered. Human-centered. Built for local and underfunded campaigns.
        </p>

        {/* Primary CTA */}
        <div className="mb-4">
          <Button
            variant="crimson"
            href="https://calendly.com/campaignai/campaignai-purchase-call"
            external
            className="px-8 py-3 text-base"
          >
            Buy your first video &rarr;
          </Button>
          <p className="text-beacon-white/70 text-sm mt-2">
            Book a 30-minute call to get started.
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="mb-8">
          <Button
            variant="blue-outline"
            href="/get-started#waitlist"
            className="!border-freedom-blue/60 !text-beacon-white/80 hover:!bg-freedom-blue hover:!text-white"
          >
            Join the waitlist
          </Button>
          <p className="text-beacon-white/50 text-xs mt-2 max-w-sm mx-auto">
            Be first in line when it launches.
          </p>
        </div>

        {/* Founders' credibility line */}
        <p className="text-beacon-white/60 text-sm max-w-lg mx-auto">
          <span className="font-semibold">Built by a Republican, a Democrat, and an Independent.</span>{" "}
          Because every campaign deserves a fair shot.
        </p>

        <a
          href="#pricing"
          className="inline-flex items-center gap-2 mt-6 text-freedom-blue hover:underline transition-colors text-base font-medium"
        >
          See pricing
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
