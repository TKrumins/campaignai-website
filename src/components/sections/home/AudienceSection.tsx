import Link from "next/link";
import { Landmark, Building2, Flag, Users, Megaphone, Briefcase, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

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

function TierCard({ title, icon: Icon, description, href, intent }: Tier) {
  return (
    <Link href={href} className="card-hover group block rounded-xl p-[2px] patriot-gradient shadow-sm h-full">
      <div className="bg-white rounded-[10px] p-7 h-full flex flex-col">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-regal-navy/5">
          <Icon className="h-5 w-5 text-regal-navy" />
        </div>
        <h4 className="font-heading font-bold text-lg text-regal-navy mb-2">{title}</h4>
        <p className="text-granite text-sm leading-relaxed flex-1">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-freedom-blue text-sm font-semibold">
          {intent}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function AudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="Who We Serve" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
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
          <h3 className="font-heading font-bold text-2xl text-regal-navy mb-6">For Candidates</h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {candidateTiers.map((tier, i) => (
            <ScrollReveal key={tier.title} delay={i * 80}>
              <TierCard {...tier} />
            </ScrollReveal>
          ))}
        </div>

        {/* Tier 2: For the Teams Behind the Candidates */}
        <ScrollReveal>
          <h3 className="font-heading font-bold text-2xl text-regal-navy mb-6">
            For the Teams Behind the Candidates
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {teamTiers.map((tier, i) => (
            <ScrollReveal key={tier.title} delay={i * 80}>
              <TierCard {...tier} />
            </ScrollReveal>
          ))}
        </div>

        {/* Tier 3: For Everyone with a Story to Tell */}
        <ScrollReveal>
          <h3 className="font-heading font-bold text-xl text-regal-navy mb-4">
            For Everyone with a Story to Tell
          </h3>
          <div className="flex flex-wrap gap-3">
            {everyoneTags.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-granite text-sm font-medium hover:border-freedom-blue hover:text-regal-navy transition-colors"
              >
                {label}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-14">
            <Button variant="crimson" href={PURCHASE_URL} className="px-8 py-3 text-base">
              {CTA_PRIMARY}
            </Button>
            <p className="text-slate text-sm mt-2">{CTA_MICROCOPY}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
