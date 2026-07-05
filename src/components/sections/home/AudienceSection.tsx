import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

// Every tile resolves to a Who We Serve route (7.7); intent phrasing per E.6.
const candidateTiers = [
  {
    title: "Local Candidates",
    description:
      "City council, school board, county races. The campaigns closest to your community, with the tightest budgets and the most at stake for the people you serve.",
    href: "/for/candidates",
    intent: "I'm running for office",
  },
  {
    title: "State Legislative",
    description:
      "State house and senate campaigns. Big districts, real budget constraints, and opponents who already have the tools you're looking for.",
    href: "/for/candidates",
    intent: "I'm running for office",
  },
  {
    title: "Statewide & Federal",
    description:
      "Governor, AG, congressional, and Senate races. Campaigns that need to scale fast, stay compliant across jurisdictions, and produce content at a pace that matches the stakes.",
    href: "/for/candidates",
    intent: "I'm running for office",
  },
];

const teamTiers = [
  {
    title: "Party Committees",
    description:
      "State and local parties supporting full slates. One platform, consistent quality, state-specific AI disclosure labels handled across every district.",
    href: "/for/parties-and-pacs",
    intent: "I support a slate",
  },
  {
    title: "PACs",
    description:
      "Independent committees producing content at scale. Professional video for the campaigns and causes you support.",
    href: "/for/parties-and-pacs",
    intent: "I support a slate",
  },
  {
    title: "Consultancies",
    description:
      "Produce more ads, at higher quality, for less. Deliver more for every client.",
    href: "/for/consultants",
    intent: "I advise campaigns",
  },
];

const everyoneTags = [
  { label: "Advocacy Organizations", href: "/for/nonprofits" },
  { label: "Ballot Initiatives", href: "/for/nonprofits" },
  { label: "Nonprofits", href: "/for/nonprofits" },
  { label: "Grassroots Movements", href: "/for/grassroots" },
  // Renamed per 7-8 doc Section 0.3; links to /get-started
  { label: "Other Businesses or Organizations", href: "/get-started" },
];

export function AudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="Who We Serve" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              Tactical content for campaigns of all shapes and sizes.
            </h2>
          </div>
        </ScrollReveal>

        {/* Tier 1: For Candidates */}
        <ScrollReveal>
          <h3 className="font-heading font-bold text-2xl text-regal-navy mb-6">
            For Candidates
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {candidateTiers.map(({ title, description, href, intent }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <Link href={href} className="card-hover block rounded-xl p-[3px] patriot-gradient shadow-sm h-full">
                <div className="bg-white rounded-[10px] p-7 h-full flex flex-col">
                  <h4 className="font-heading font-bold text-lg text-regal-navy mb-2">
                    {title}
                  </h4>
                  <p className="text-granite text-sm leading-relaxed flex-1">
                    {description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-freedom-blue text-sm font-semibold">
                    {intent} &rarr;
                  </span>
                </div>
              </Link>
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
          {teamTiers.map(({ title, description, href, intent }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <Link href={href} className="card-hover block rounded-xl p-[3px] patriot-gradient shadow-sm h-full">
                <div className="bg-white rounded-[10px] p-7 h-full flex flex-col">
                  <h4 className="font-heading font-bold text-lg text-regal-navy mb-2">
                    {title}
                  </h4>
                  <p className="text-granite text-sm leading-relaxed flex-1">
                    {description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-freedom-blue text-sm font-semibold">
                    {intent} &rarr;
                  </span>
                </div>
              </Link>
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
                className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-granite text-sm font-medium hover:border-freedom-blue hover:text-regal-navy transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-14">
            <Button
              variant="crimson"
              href="https://calendly.com/campaignai/campaignai-purchase-call"
              external
              className="px-8 py-3 text-base"
            >
              Buy your first video &rarr;
            </Button>
            <p className="text-slate text-sm mt-2">
              Book a 30-minute call to get started.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
