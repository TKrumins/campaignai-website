import Image from "next/image";
import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { PartyPill } from "@/components/ui/PartyPill";
import { SectionLabel } from "@/components/ui/SectionLabel";

const founders = [
  {
    photo: "/assets/profile-pictures/Tom-Krumins.png",
    name: "Tom Krumins",
    title: "SC Forward Party Founding Member",
    description: "Campaign Operative. Movement-Builder. Stand-up Comedian.",
    party: "Forward",
  },
  {
    photo: "/assets/profile-pictures/Jermaine-Johnson.png",
    name: "Jermaine Johnson",
    title: "SC Candidate for Governor",
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
    <section className="relative overflow-hidden py-20 md:py-28 bg-dawn-frost">
      <AISparkle size={16} color="#FF3366" glow className="sparkle-twinkle absolute left-[6%] top-24" style={{ ["--dur"]: "3.4s" } as CSSProperties} />
      <AISparkle size={13} color="#4D9FFF" glow className="sparkle-twinkle absolute right-[8%] top-32" style={{ ["--dur"]: "2.8s", animationDelay: "0.6s" } as CSSProperties} />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="mb-4">
              <SectionLabel text="Who We Are" favicon />
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-[44px] md:leading-tight text-regal-navy tracking-[-1px] mb-5">
              Republican. Democrat. Forwardist.
            </h2>
            <p className="text-granite text-lg leading-[1.7] max-w-[760px] mx-auto">
              CampaignAI was founded by candidates, legislators, and campaign
              operatives. We built this company because we&apos;re in the arena and
              we understand the struggles. We believe the tools that shape modern
              campaigns should be within reach of everyone who runs, regardless of
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
              <div className="card-hover flex flex-col text-center rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 h-full">
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
                {/* min-height aligns the description start across all three
                    cards on laptop, even when titles run different lengths */}
                <p className="text-regal-navy text-sm font-semibold mb-2 md:min-h-[2.75rem]">
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
            {/* No added ring — the profile image already carries its own
                gradient border. */}
            <div className="shrink-0 w-[176px] h-[176px] rounded-full overflow-hidden shadow-sm">
              <Image
                src={advisor.photo}
                alt={advisor.name}
                width={176}
                height={176}
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
            <Button variant="navy-outline" href="/about">
              Meet the team &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
