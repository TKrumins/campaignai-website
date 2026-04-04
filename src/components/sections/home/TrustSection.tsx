import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const founders = [
  {
    photo: "/Profile Pictures/Tom-Krumins.png",
    name: "Tom Krumins",
    title: "(I) SC Forward Party Advisory Board.",
    description: "Campaign Operative. Movement-Builder. Stand-up Comedian.",
    quote: "[Tom quote to be added]",
  },
  {
    photo: "/Profile Pictures/Jermaine-Johnson.png",
    name: "Jermaine Johnson",
    title: "(D) SC State Representative. Gubernatorial Candidate.",
    description: "Deacon. Educator. A true grassroots leader.",
    quote: "[Jermaine quote to be added]",
  },
  {
    photo: "/Profile Pictures/Brandon-Guffey.png",
    name: "Brandon Guffey",
    title: "(R) SC State Representative",
    description: "Child safety advocate. Business owner. Father on a mission.",
    quote: "[Brandon quote to be added]",
  },
];

const advisor = {
  photo: "/Profile Pictures/Andrew-Yang.png",
  name: "Andrew Yang",
  title: "Former Presidential Candidate \u00B7 Tech Entrepreneur",
  quote: "[Andrew Yang quote to be added]",
};

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <SectionLabel text="Who We Are" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[44px] md:leading-tight text-regal-navy tracking-[-1px] mt-3 mb-5">
              Built by a Republican, a Democrat, and an Independent. Because
              getting this right is more important than any one partisan victory.
            </h2>
            <p className="text-granite text-lg leading-[1.7] max-w-[760px] mx-auto">
              CampaignAI was founded by a team of candidates, legislators, and
              campaign operatives. We disagree on a lot, but we all agree that
              the tools that shape modern campaigns should be accessible to
              everyone who runs, regardless of party, budget, or connections.
            </p>
          </div>
        </ScrollReveal>

        {/* Founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {founders.map(({ photo, name, title, description, quote }, i) => (
            <ScrollReveal key={name} delay={i * 100}>
              <div className="text-center">
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden mx-auto mb-4 shadow-lg bg-white">
                  <Image
                    src={photo}
                    alt={name}
                    width={140}
                    height={140}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-regal-navy">
                  {name}
                </h3>
                <p className="text-freedom-blue text-sm font-semibold mb-2">
                  {title}
                </p>
                <p className="text-granite text-sm leading-relaxed mb-3">
                  {description}
                </p>
                <p className="text-slate text-sm font-medium">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Advisor */}
        <ScrollReveal>
          <div className="bg-dawn-frost rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden shrink-0 shadow-lg bg-white">
              <Image
                src={advisor.photo}
                alt={advisor.name}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-heading font-bold text-lg text-regal-navy">
                {advisor.name}
              </h3>
              <p className="text-freedom-blue text-sm font-semibold mb-2">
                {advisor.title}
              </p>
              <p className="text-slate text-sm font-medium mb-2">
                &ldquo;{advisor.quote}&rdquo;
              </p>
              <p className="text-slate text-sm">
                Advisors expanding. More announcements coming soon.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Button variant="blue" href="/about">
              Meet the full team &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
