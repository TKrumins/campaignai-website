import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PartyPill } from "@/components/ui/PartyPill";

const founders = [
  {
    photo: "/assets/profile-pictures/Tom-Krumins.png",
    name: "Tom Krumins",
    title: "SC Forward Party Founding Member.",
    description: "Campaign Operative. Movement-Builder. Stand-up Comedian.",
    party: "Forward",
  },
  {
    photo: "/assets/profile-pictures/Jermaine-Johnson.png",
    name: "Jermaine Johnson",
    title: "SC State Representative. Gubernatorial Candidate.",
    description: "Deacon. Educator. A true grassroots leader.",
    party: "Democrat",
  },
  {
    photo: "/assets/profile-pictures/Brandon-Guffey.png",
    name: "Brandon Guffey",
    title: "SC State Representative",
    description: "Child safety advocate. Business owner. Father on a mission.",
    party: "Republican",
  },
];

const advisor = {
  photo: "/assets/profile-pictures/Andrew-Yang.png",
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
          {founders.map(({ photo, name, title, description, party }, i) => (
            <ScrollReveal key={name} delay={i * 100}>
              <div className="card-hover text-center rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 h-full">
                <div className="relative w-[168px] h-[168px] mx-auto mb-5">
                  <div className="w-full h-full rounded-full p-[3px] bg-regal-navy shadow-sm">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={photo}
                        alt={name}
                        width={168}
                        height={168}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <PartyPill
                    party={party}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-regal-navy">
                  {name}
                </h3>
                <p className="text-regal-navy text-sm font-semibold mb-2">
                  {title}
                </p>
                <p className="text-slate text-sm leading-relaxed">
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
            <div className="shrink-0 w-[176px] h-[176px] rounded-full bg-regal-navy p-[3px] shadow-sm">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src={advisor.photo}
                  alt={advisor.name}
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
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
            <Button variant="navy-outline" href="/about">
              Meet the team &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
