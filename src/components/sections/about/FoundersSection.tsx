import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const founders = [
  {
    photo: "/Profile Pictures/Tom-Krumins.png",
    name: "Tom Krumins",
    title: "SC Forward Party Advisory Board.",
    tag: "CEO",
    party: "Forward",
    partyColor: "bg-purple-600",
    tagline: "Campaign Operative. Movement-Builder. Stand-up Comedian.",
    bio: "Tom is a social impact entrepreneur, movement-builder, and founding advisory board member of the South Carolina Forward Party. He has spent his career building and scaling nonprofits, darkhorse candidate campaigns, and advocacy movements. He serves as CEO, leading the company\u2019s strategy and vision with a product that truly grows alongside our customers.\n\nTom spends his days asking the hard questions so you don\u2019t have to. He builds in public and in community, showing that there are better ways to harness these technologies.",
    quote: "[Tom quote to be added]",
  },
  {
    photo: "/Profile Pictures/Jermaine-Johnson.png",
    name: "Jermaine Johnson",
    title: "SC State Representative. Gubernatorial Candidate.",
    party: "Democrat",
    partyColor: "bg-blue-600",
    tagline: "Deacon. Educator. A true grassroots leader.",
    bio: "Jermaine grew up surrounded by poverty, gun violence, and homelessness. But soon, he used basketball to earn a scholarship to the College of Charleston and play professionally overseas. He returned to South Carolina to earn a doctorate in organizational leadership, found a nonprofit for his local community, and defeat a 22-year incumbent to serve his local district.\n\nJermaine is now running for governor. He knows what it\u2019s like to run a campaign without the resources your opponents take for granted. He brings to CampaignAI the voice of someone who has found his way to victory time and again.",
    quote: "[Jermaine quote to be added]",
  },
  {
    photo: "/Profile Pictures/Brandon-Guffey.png",
    name: "Brandon Guffey",
    title: "SC State Representative",
    party: "Republican",
    partyColor: "bg-red-600",
    tagline: "Child safety advocate. Business owner. Father on a mission.",
    bio: "Brandon built a career as an entrepreneur and small business owner before entering politics. After a personal loss, Brandon channeled his energy into legislative action, passing Gavin\u2019s Law in his first session as a freshman legislator. He has since testified before the U.S. Senate Judiciary Committee and become a nationally recognized voice on children\u2019s online safety.\n\nBrandon is a true thought leader who recognizes the power of technology, both good and bad. He brings a clear vision for how technology can be built effectively and with some care.",
    quote: "[Brandon quote to be added]",
  },
];

export function FoundersSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mb-12">
            The Founding Team
          </h2>
        </ScrollReveal>
        <div className="space-y-16">
          {founders.map(({ photo, name, title, tag, party, partyColor, tagline, bio, quote }, i) => (
            <ScrollReveal key={name} delay={i * 100}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Photo */}
                <div className="shrink-0 mx-auto md:mx-0 relative">
                  <div className="w-[180px] h-[180px] rounded-full overflow-hidden">
                    <Image
                      src={photo}
                      alt={name}
                      width={180}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {party && (
                    <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full ${partyColor} text-white text-xs font-semibold shadow-sm`}>
                      {party}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                    <h3 className="font-heading font-bold text-2xl text-regal-navy">
                      {name}
                    </h3>
                    {tag && (
                      <span className="px-3 py-0.5 rounded-full bg-regal-navy text-beacon-white text-xs font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    )}
                  </div>
                  <p className="text-freedom-blue text-sm font-semibold mb-1">
                    {title}
                  </p>
                  <p className="text-granite font-semibold mb-4">
                    {tagline}
                  </p>
                  <p className="text-granite leading-relaxed mb-4 whitespace-pre-line">{bio}</p>
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
