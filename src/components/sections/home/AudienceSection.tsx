import Link from "next/link";
import type { CSSProperties } from "react";
import { Landmark, Building2, Flag, Users, Megaphone, Briefcase, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { Button } from "@/components/ui/Button";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

// Multi-Partisan accent cycled across the tiles so the grid reads with energy.
const ACCENTS = ["#FF3366", "#8E5CF7", "#4D9FFF"];

// Every tile is a funnel entry to a Who We Serve route (7.7); intent per E.6.
const candidateTiers = [
  {
    title: "Local Candidates",
    icon: Landmark,
    description:
      "Mayor, council, sheriff, school board, county. The races closest to your community, with the tightest budgets and the most at stake.",
    href: "/for/candidates",
    intent: "I'm running for office",
  },
  {
    title: "State Legislative",
    icon: Building2,
    description:
      "State house and senate campaigns. Big districts, real budget limits, and opponents who already have the tools you want.",
    href: "/for/candidates",
    intent: "I'm running for office",
  },
  {
    title: "Statewide & Federal",
    icon: Flag,
    description:
      "Governor, AG, congressional, and Senate races. Scale fast, stay compliant across jurisdictions, and produce at the pace the stakes demand.",
    href: "/for/candidates",
    intent: "I'm running for office",
  },
];

const teamTiers = [
  {
    title: "Party Committees",
    icon: Users,
    description:
      "State and local parties backing full slates. One platform, consistent quality, disclosure labels handled across every district.",
    href: "/for/parties-and-pacs",
    intent: "I support a slate",
  },
  {
    title: "PACs",
    icon: Megaphone,
    description:
      "Independent committees producing at scale. Professional video for every campaign and cause you support.",
    href: "/for/parties-and-pacs",
    intent: "I support a slate",
  },
  {
    title: "Consultancies",
    icon: Briefcase,
    description:
      "Produce more ads, at higher quality, for less. Deliver more for every client you advise.",
    href: "/for/consultants",
    intent: "I advise campaigns",
  },
];

const everyoneTags = [
  { label: "Advocacy Organizations", href: "/for/nonprofits" },
  { label: "Ballot Initiatives", href: "/for/nonprofits" },
  { label: "Nonprofits", href: "/for/nonprofits" },
  { label: "Grassroots Movements", href: "/for/grassroots" },
  { label: "Other Businesses or Organizations", href: "/get-started" },
];

type Tier = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  href: string;
  intent: string;
};

function TierCard({ title, icon: Icon, description, href, intent, accent }: Tier & { accent: string }) {
  return (
    <Link href={href} className="card-hover group relative block h-full overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
      {/* animated Multi-Partisan topper */}
      <span className="absolute inset-x-0 top-0 h-1.5 multipartisan-gradient" />
      <AISparkle
        size={14}
        color={accent}
        glow
        className="sparkle-twinkle absolute right-5 top-6"
        style={{ ["--dur"]: "3s" } as CSSProperties}
      />
      <div className="flex h-full flex-col p-7 pt-8">
        {/* gradient-ring emblem over navy, matching the site's node treatment */}
        <div className="mb-4 h-12 w-12 rounded-full patriot-gradient p-[2px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-regal-navy">
            <Icon className="h-5 w-5 text-beacon-white" />
          </div>
        </div>
        <h4 className="mb-2 font-heading text-lg font-bold text-regal-navy">{title}</h4>
        <p className="flex-1 text-sm leading-relaxed text-granite">{description}</p>
        <span
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: accent }}
        >
          {intent}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-dawn-frost">
      {/* ambient sparkles — matches the new site's motion language */}
      <AISparkle size={16} color="#FF3366" glow className="sparkle-twinkle absolute left-[6%] top-24" style={{ ["--dur"]: "3.4s" } as CSSProperties} />
      <AISparkle size={13} color="#4D9FFF" glow className="sparkle-twinkle absolute right-[8%] top-40" style={{ ["--dur"]: "2.8s", animationDelay: "0.5s" } as CSSProperties} />
      <AISparkle size={12} color="#8E5CF7" glow className="sparkle-twinkle absolute right-[14%] bottom-32" style={{ ["--dur"]: "3.1s", animationDelay: "0.9s" } as CSSProperties} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="Who We Serve" />
            <span className="mx-auto mt-3 mb-2 block h-1 w-20 rounded-full multipartisan-gradient" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
              Video built for your race.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              Find your role below for the videos, pricing, and playbook built
              around it.
            </p>
          </div>
        </ScrollReveal>

        {/* Tier 1: For Candidates */}
        <ScrollReveal>
          <h3 className="mb-6 flex items-center gap-3 font-heading text-2xl font-bold text-regal-navy">
            <span className="h-6 w-1.5 rounded-full bg-liberty-crimson" />
            For Candidates
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {candidateTiers.map((tier, i) => (
            <ScrollReveal key={tier.title} delay={i * 80}>
              <TierCard {...tier} accent={ACCENTS[i % ACCENTS.length]} />
            </ScrollReveal>
          ))}
        </div>

        {/* Tier 2: For the Teams Behind the Candidates */}
        <ScrollReveal>
          <h3 className="mb-6 flex items-center gap-3 font-heading text-2xl font-bold text-regal-navy">
            <span className="h-6 w-1.5 rounded-full bg-bridge-violet" />
            For the Teams Behind the Candidates
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {teamTiers.map((tier, i) => (
            <ScrollReveal key={tier.title} delay={i * 80}>
              <TierCard {...tier} accent={ACCENTS[i % ACCENTS.length]} />
            </ScrollReveal>
          ))}
        </div>

        {/* Tier 3: For Everyone with a Story to Tell */}
        <ScrollReveal>
          <h3 className="mb-4 flex items-center gap-3 font-heading text-xl font-bold text-regal-navy">
            <span className="h-6 w-1.5 rounded-full bg-freedom-blue" />
            For Everyone with a Story to Tell
          </h3>
          <div className="flex flex-wrap gap-3">
            {everyoneTags.map(({ label, href }, i) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-granite transition-colors hover:border-freedom-blue hover:text-regal-navy"
              >
                <span className="h-2 w-2 rounded-full" style={{ background: ACCENTS[i % ACCENTS.length] }} />
                {label}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-14">
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
