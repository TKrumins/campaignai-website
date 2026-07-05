import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { DollarSign, Video, UserX, Lock } from "lucide-react";
import { CALENDLY_PURCHASE, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

const stats = [
  { value: "$10.8B", label: "Expected spend on the 2026 midterm cycle", icon: DollarSign, color: "text-liberty-crimson" },
  { value: "$10,000+", label: "Starting cost for a professionally produced campaign ad", icon: Video, color: "text-freedom-blue" },
  { value: "95%", label: "Of local candidates who can't afford professional video ads", icon: UserX, color: "text-liberty-crimson" },
  { value: "85%", label: "Believe campaign costs limit good people from running for office", icon: Lock, color: "text-freedom-blue" },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <SectionLabel text="The Problem" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-regal-navy tracking-[-1.5px] mt-3 mb-6">
              Democracy Has a Paywall.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-[700px] mx-auto">
              Traditional campaign ads can cost tens of thousands of dollars.
              Shouldn&apos;t you get more out of your campaign budget?
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map(({ value, label, icon: Icon, color }, i) => (
            <ScrollReveal key={value} delay={i * 80}>
              <div className="text-center flex flex-col items-center">
                <Icon className={`w-8 h-8 ${color} mb-3`} strokeWidth={1.75} />
                <p className={`font-heading font-extrabold text-3xl md:text-4xl ${color} drop-shadow-[0_2px_4px_rgba(13,27,62,0.15)] mb-2`}>
                  {value}
                </p>
                <p className="text-slate text-sm leading-snug">
                  {label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-lg font-semibold max-w-[700px] mx-auto mb-6">
            Our professional video starts at $1,999. For candidates, starting at $599. Agencies can charge $10,000 or more.
          </p>
          {/* P5 (approved) */}
          <p className="text-granite text-center text-lg max-w-[600px] mx-auto mb-8">
            None of this is your fault. The tools were priced for someone else. That&apos;s the part we fixed.
          </p>
          <div className="text-center">
            <Button variant="crimson" href={CALENDLY_PURCHASE} external className="px-8 py-3">
              {CTA_PRIMARY}
            </Button>
            <p className="text-slate text-sm mt-2">{CTA_MICROCOPY}</p>
            <p className="mt-4 text-sm">
              <Link href="/get-started" className="text-freedom-blue font-semibold hover:underline">
                Find the fit for your race &rarr;
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
