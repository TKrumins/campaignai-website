import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const candidateTiers = [
  {
    title: "Local Candidates",
    description:
      "City council, school board, county races. The campaigns closest to your community, with the tightest budgets and the most at stake for the people you serve.",
  },
  {
    title: "State Legislative",
    description:
      "State house and senate campaigns. Big districts, real budget constraints, and opponents who already have the tools you're looking for.",
  },
  {
    title: "Statewide & Federal",
    description:
      "Governor, AG, congressional, and Senate races. Campaigns that need to scale fast, stay compliant across jurisdictions, and produce content at a pace that matches the stakes.",
  },
];

const teamTiers = [
  {
    title: "Party Committees",
    description:
      "State and local parties supporting full slates. One platform, consistent quality, compliance handled across every district.",
  },
  {
    title: "PACs",
    description:
      "Independent committees producing content at scale. Professional video for the campaigns and causes you support.",
  },
  {
    title: "Consultancies",
    description:
      "Produce more ads, at higher quality, for less. Deliver more for every client.",
  },
];

const everyoneTags = [
  "Advocacy Organizations",
  "Ballot Initiatives",
  "Nonprofits",
  "Grassroots Movements",
  "Social Impact Businesses",
];

export function AudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="Who We Serve" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              Every campaign matters. Tell your story today.
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
          {candidateTiers.map(({ title, description }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="card-hover rounded-xl p-[3px] patriot-gradient shadow-sm h-full">
                <div className="bg-white rounded-[10px] p-7 h-full flex flex-col">
                  <h4 className="font-heading font-bold text-lg text-regal-navy mb-2">
                    {title}
                  </h4>
                  <p className="text-granite text-sm leading-relaxed flex-1">
                    {description}
                  </p>
                  <Button
                    variant="navy"
                    href="/get-started"
                    className="mt-5 text-xs px-4 py-2"
                  >
                    Learn more &rarr;
                  </Button>
                </div>
              </div>
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
          {teamTiers.map(({ title, description }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="card-hover rounded-xl p-[3px] patriot-gradient shadow-sm h-full">
                <div className="bg-white rounded-[10px] p-7 h-full flex flex-col">
                  <h4 className="font-heading font-bold text-lg text-regal-navy mb-2">
                    {title}
                  </h4>
                  <p className="text-granite text-sm leading-relaxed flex-1">
                    {description}
                  </p>
                  <Button
                    variant="navy"
                    href="/get-started"
                    className="mt-5 text-xs px-4 py-2"
                  >
                    Learn more &rarr;
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tier 3: For Everyone with a Story to Tell */}
        <ScrollReveal>
          <h3 className="font-heading font-bold text-xl text-regal-navy mb-4">
            For Everyone with a Story to Tell
          </h3>
          <div className="flex flex-wrap gap-3">
            {everyoneTags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-granite text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
