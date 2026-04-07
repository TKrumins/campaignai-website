import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const founders = [
  {
    photo: "/Profile Pictures/Tom-Krumins.png",
    name: "Tom Krumins",
    title: "SC Forward Party Advisory Board.",
    description: "Campaign Operative. Movement-Builder. Stand-up Comedian.",
    party: "Forward",
    partyColor: "bg-purple-600",
  },
  {
    photo: "/Profile Pictures/Jermaine-Johnson.png",
    name: "Jermaine Johnson",
    title: "SC State Representative. Gubernatorial Candidate.",
    description: "Deacon. Educator. A true grassroots leader.",
    party: "Democrat",
    partyColor: "bg-blue-600",
  },
  {
    photo: "/Profile Pictures/Brandon-Guffey.png",
    name: "Brandon Guffey",
    title: "SC State Representative",
    description: "Child safety advocate. Business owner. Father on a mission.",
    party: "Republican",
    partyColor: "bg-red-600",
  },
];

const advisor = {
  photo: "/Profile Pictures/Andrew-Yang.png",
  name: "Andrew Yang",
  title: "Former U.S. Presidential Candidate \u00B7 Tech Entrepreneur \u00B7 AI Thought Leader",
};

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <SectionLabel text="Who We Are" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[44px] md:leading-tight text-regal-navy tracking-[-1px] mt-3 mb-5">
              Republican. Democrat. Independent.
              <br />
              Because getting AI right is more important than any one partisan victory.
            </h2>
            <p className="text-granite text-lg leading-[1.7] max-w-[760px] mx-auto">
              CampaignAI was founded by a team of candidates, legislators, and
              campaign operatives. We all agree that the tools that shape modern
              campaigns should be accessible to everyone who runs, regardless of
              party, budget, or connections.
            </p>
          </div>
        </ScrollReveal>

        {/* Founder cards */}
        <ScrollReveal>
          <h3 className="font-heading font-bold text-2xl text-regal-navy mb-6">
            Founding Team
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {founders.map(({ photo, name, title, description, party, partyColor }, i) => (
            <ScrollReveal key={name} delay={i * 100}>
              <div className="text-center">
                <div className="relative w-[180px] h-[180px] mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={photo}
                      alt={name}
                      width={180}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 ${partyColor} text-white text-xs font-semibold px-3 py-0.5 rounded-full shadow-sm`}>
                    {party}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-black">
                  {name}
                </h3>
                <p className="text-black text-sm font-semibold mb-2">
                  {title}
                </p>
                <p className="text-black/70 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Advisor */}
        <ScrollReveal>
          <h3 className="font-heading font-bold text-2xl text-regal-navy mb-6">
            Strategic Advisors
          </h3>
          <div className="bg-dawn-frost rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden shrink-0">
              <Image
                src={advisor.photo}
                alt={advisor.name}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-heading font-bold text-lg text-regal-navy">
                {advisor.name}
              </h3>
              <p className="text-freedom-blue text-sm font-semibold mb-2">
                {advisor.title}
              </p>
              <p className="text-slate text-sm">
                Launched a presidential campaign in 2017 to raise awareness about the coming AI wave.
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
