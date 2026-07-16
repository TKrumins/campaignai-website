import type { CSSProperties } from "react";
import { DollarSign, UserX, Lock, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AISparkle } from "@/components/ui/AISparkle";

// The cost-of-campaign-video stat band, relocated here (just above the FAQ) from
// the retired Problem section.
const stats = [
  { value: "$10,000+", label: "What a single agency ad can run — and fees range from $3,000 to $100,000+ with the race.", icon: DollarSign, color: "text-liberty-crimson" },
  { value: "$10.8B", label: "Expected spend on the 2026 midterm cycle", icon: TrendingUp, color: "text-freedom-blue" },
  { value: "95%", label: "Of local candidates priced out of professional video", icon: UserX, color: "text-liberty-crimson" },
  { value: "85%", label: "Believe campaign costs keep good people from running", icon: Lock, color: "text-freedom-blue" },
];

export function CostStatBand() {
  return (
    <section className="bg-dawn-frost py-16 md:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-6 rounded-2xl bg-regal-navy px-6 py-8 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon, color }, i) => (
              <div key={value} className="relative flex flex-col items-center text-center">
                {i > 0 && <span className="absolute -left-3 top-2 hidden h-16 w-px bg-white/10 lg:block" />}
                <div className="mb-2 flex items-center gap-2">
                  <Icon className={`h-6 w-6 ${color}`} strokeWidth={1.9} />
                  <AISparkle size={13} color={i % 2 ? "#4D9FFF" : "#FF3366"} glow className="sparkle-twinkle" style={{ ["--dur"]: "3.2s", animationDelay: `${i * 0.4}s` } as CSSProperties} />
                </div>
                <p className="font-heading text-3xl font-extrabold text-beacon-white md:text-4xl">{value}</p>
                <p className="mt-2 max-w-[220px] text-sm leading-snug text-beacon-white/70">{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
