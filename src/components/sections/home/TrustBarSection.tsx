import {
  ShieldCheck,
  Scale,
  Users,
  Lock,
  UserCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const trustItems = [
  { icon: ShieldCheck, label: "Mandatory AI Disclosure" },
  { icon: Scale, label: "FEC & State Compliance Aware" },
  { icon: Users, label: "Nonpartisan by Design" },
  { icon: Lock, label: "Privacy-First Architecture" },
  { icon: UserCheck, label: "Human-in-the-Loop" },
];

export function TrustBarSection() {
  return (
    <section className="bg-regal-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
        <ScrollReveal>
          <p className="text-center text-beacon-white font-semibold text-base mb-5">
            We do the hard ethical work, so you can focus on the work only you can do.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-beacon-white"
              >
                <span className="patriot-icon"><Icon className="w-5 h-5" /></span>
                <span className="text-sm font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-beacon-white/60 text-sm mt-4 max-w-2xl mx-auto">
            Built by a Republican, a Democrat, and an Independent. Advised
            by Andrew Yang.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
