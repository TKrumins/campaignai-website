import { HeroEmailCapture } from "@/components/forms/HeroEmailCapture";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background: American flag image with navy overlay */}
      <div
        className="absolute inset-[-5%] bg-cover bg-center bg-no-repeat animate-flag-wave"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-regal-navy/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <span className="inline-block text-freedom-blue text-sm font-semibold uppercase tracking-[1.5px] mb-6">
          Campaign-ready video production
        </span>

        <h1 className="font-heading font-extrabold text-[48px] md:text-[72px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6">
          Every campaign has a story. It&apos;s time to tell yours.
        </h1>

        <p className="text-beacon-white/90 text-lg md:text-2xl font-medium leading-relaxed max-w-[720px] mx-auto mb-8">
          Agencies and consultants charge $10,000 or more to produce a single
          campaign ad. We help you produce professional video at a fraction of
          that cost, without the middlemen. Human-edited quality. Built-in
          compliance. 48-hour delivery.
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
