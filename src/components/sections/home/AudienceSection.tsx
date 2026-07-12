import Link from "next/link";
import type { CSSProperties } from "react";
import { Landmark, Briefcase, Users, Megaphone, Flag, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { Button } from "@/components/ui/Button";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

// A compact router: one card per Who-We-Serve destination. The depth for each
// audience lives on its own /for page, so the home page just points the way.
const roles = [
  { title: "Candidates", icon: Landmark, intent: "I'm running for office", href: "/for/candidates", accent: "#FF3366" },
  { title: "Consultants", icon: Briefcase, intent: "I advise campaigns", href: "/for/consultants", accent: "#8E5CF7" },
  { title: "Parties & PACs", icon: Users, intent: "I support a slate", href: "/for/parties-and-pacs", accent: "#4D9FFF" },
  { title: "Nonprofits & Advocacy", icon: Megaphone, intent: "I'm advancing a cause", href: "/for/nonprofits", accent: "#FF3366" },
  { title: "Grassroots", icon: Flag, intent: "I'm organizing people", href: "/for/grassroots", accent: "#8E5CF7" },
];

function RoleCard({
  title,
  icon: Icon,
  intent,
  href,
  accent,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  intent: string;
  href: string;
  accent: string;
}) {
  return (
    <Link href={href} className="card-hover group relative block overflow-hidden rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5">
      <span className="absolute inset-x-0 top-0 h-1.5 multipartisan-gradient" />
      <div className="mb-3 mt-1 h-10 w-10 rounded-full patriot-gradient p-[2px]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-regal-navy">
          <Icon className="h-4 w-4 text-beacon-white" />
        </div>
      </div>
      <h4 className="font-heading text-base font-bold leading-tight text-regal-navy">{title}</h4>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: accent }}>
        {intent}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-dawn-frost">
      <AISparkle size={16} color="#FF3366" glow className="sparkle-twinkle absolute left-[6%] top-24" style={{ ["--dur"]: "3.4s" } as CSSProperties} />
      <AISparkle size={13} color="#4D9FFF" glow className="sparkle-twinkle absolute right-[8%] top-40" style={{ ["--dur"]: "2.8s", animationDelay: "0.5s" } as CSSProperties} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel text="Who We Serve" />
            <span className="mx-auto mt-3 mb-2 block h-1 w-20 rounded-full multipartisan-gradient" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
              Video built for your race.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              Find your role for the videos, pricing, and playbook built around it.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {roles.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 70}>
              <RoleCard {...r} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="mt-6 text-center text-sm text-slate">
            Something else — a ballot initiative, a business, a movement of your own?{" "}
            <Link href="/get-started" className="font-semibold text-freedom-blue hover:underline">
              Tell us what you&apos;re working on &rarr;
            </Link>
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3 text-base">
              {CTA_PRIMARY}
            </Button>
            <p className="text-slate text-sm mt-2">{CTA_MICROCOPY}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
