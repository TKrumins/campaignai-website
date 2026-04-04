import {
  ShieldCheck,
  Scale,
  Users,
  Lock,
  UserCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const trustItems = [
  { icon: ShieldCheck, label: "Mandatory AI Disclosure", color: "text-liberty-crimson" },
  { icon: Scale, label: "FEC & State Compliance Aware", color: "text-freedom-blue" },
  { icon: Users, label: "Nonpartisan by Design", color: "text-liberty-crimson" },
  { icon: Lock, label: "Privacy-First Architecture", color: "text-freedom-blue" },
  { icon: UserCheck, label: "Human-in-the-Loop", color: "text-liberty-crimson" },
];

export function TrustBarSection() {
  return (
    <section className="bg-regal-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {trustItems.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-beacon-white"
              >
                <Icon className={`w-5 h-5 ${color}`} />
                <span className="text-sm font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-beacon-white/60 text-sm mt-4 max-w-2xl mx-auto">
            Founded by a multi-partisan team: A Republican state legislator, a
            Democratic gubernatorial candidate, and an Independent campaign
            operative.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
