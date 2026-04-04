import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const founders = [
  {
    photo: "/Profile Pictures/Tom-Krumins.png",
    name: "Tom Krumins",
    title: "(I) SC Forward Party Advisory Board.",
    tag: "CEO",
    tagline: "Campaign Operative. Movement-Builder. Stand-up Comedian.",
    bio: "Tom is a tech entrepreneur and a founding board member of the South Carolina Forward Party who has spent his career building things that didn't exist yet. He leads CampaignAI's product strategy and vision. Wanderer, Builder, Storyteller. He spends his days and nights asking the hard questions so you don't have to. He believes that the hardest questions about technology and democracy deserve honest engagement, not easy answers, and that the best way to earn trust is to show your work.",
    quote: "[Tom quote to be added]",
  },
  {
    photo: "/Profile Pictures/Jermaine-Johnson.png",
    name: "Jermaine Johnson",
    title: "(D) SC State Representative. Gubernatorial Candidate.",
    tagline: "Deacon. Educator. A true grassroots leader.",
    bio: "Jermaine grew up in South Central Los Angeles during the crack epidemic, experienced homelessness and gun violence as a child, earned a basketball scholarship to the College of Charleston, and played professionally overseas before earning a doctorate in organizational leadership. He defeated a 22-year incumbent in his first race for the South Carolina House and is now running for governor. He knows what it's like to run a campaign without the resources your opponents take for granted. He brings to CampaignAI the voice of someone who has lived the fight, not just studied it.",
    quote: "[Jermaine quote to be added]",
  },
  {
    photo: "/Profile Pictures/Brandon-Guffey.png",
    name: "Brandon Guffey",
    title: "(R) SC State Representative",
    tagline: "Child safety advocate. Business owner. Father on a mission.",
    bio: "Brandon built a career as an entrepreneur and president of 360 HVAC before entering politics. In 2022, his 17-year-old son Gavin died by suicide after falling victim to an online sextortion scheme. Rather than retreat, Brandon channeled that loss into legislative action, passing Gavin's Law in his first session as a freshman legislator. He has since testified before the U.S. Senate Judiciary Committee and become a nationally recognized voice on children's online safety. He brings to CampaignAI the directness of a business owner, the moral clarity of a father who has been through the worst, and the conviction that technology should protect people, not exploit them.",
    quote: "[Brandon quote to be added]",
  },
];

export function FoundersSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {founders.map(({ photo, name, title, tag, tagline, bio, quote }, i) => (
            <ScrollReveal key={name} delay={i * 100}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Photo */}
                <div className="shrink-0 mx-auto md:mx-0 relative">
                  <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg bg-white">
                    <Image
                      src={photo}
                      alt={name}
                      width={180}
                      height={180}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {tag && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-regal-navy text-beacon-white text-xs font-bold uppercase tracking-wider shadow-md">
                      {tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="font-heading font-bold text-2xl text-regal-navy">
                    {name}
                  </h3>
                  <p className="text-freedom-blue text-sm font-semibold mb-1">
                    {title}
                  </p>
                  <p className="text-granite font-semibold mb-4">
                    {tagline}
                  </p>
                  <p className="text-granite leading-relaxed mb-4">{bio}</p>
                  <p className="text-slate text-sm font-medium">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
