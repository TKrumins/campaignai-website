import Image from "next/image";
import { HeroEmailCapture } from "@/components/forms/HeroEmailCapture";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background: American flag image with navy overlay */}
      <div className="absolute inset-[-5%] animate-flag-wave">
        <Image
          src="/hero-bg.png"
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

        <p className="text-beacon-white/90 text-lg md:text-xl leading-relaxed max-w-[600px] mx-auto mb-6">
          Professional video, strategic messaging, and built-in
          compliance -- finally built for local and underfunded
          campaigns, not retrofitted for them.
        </p>

        <HeroEmailCapture />

        <a
          href="#product"
          className="inline-flex items-center gap-2 mt-4 text-freedom-blue hover:underline transition-colors text-base font-medium"
        >
          See how it works
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
