import fs from "fs";
import path from "path";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PartyPill } from "@/components/ui/PartyPill";
import { FounderCollage } from "@/components/sections/about/FounderCollage";

const founders = [
  {
    firstName: "tom",
    fallbackPhoto: "/assets/profile-pictures/Tom-Krumins.png",
    name: "Tom Krumins",
    title: "SC Forward Party Founding Member.",
    tag: "CEO",
    party: "Forward",
    tagline: "Campaign Operative. Movement-Builder. Stand-up Comedian.",
    bio: "Tom is a social impact entrepreneur, movement-builder, and founding member of the South Carolina Forward Party. He has spent his career building and scaling nonprofits, darkhorse candidate campaigns, and advocacy movements. He serves as CEO, leading the company’s strategy and vision with a product that truly grows alongside our customers.\n\nTom spends his days asking the hard questions so you don’t have to. He builds in public and in community, showing that there are better ways to harness these technologies.",
  },
  {
    firstName: "jermaine",
    fallbackPhoto: "/assets/profile-pictures/Jermaine-Johnson.png",
    name: "Jermaine Johnson",
    title: "SC State Representative. Gubernatorial Candidate.",
    party: "Democrat",
    tagline: "Deacon. Educator. A true grassroots leader.",
    bio: "Jermaine grew up surrounded by poverty, gun violence, and homelessness. But soon, he used basketball to earn a scholarship to the College of Charleston and play professionally overseas. He returned to South Carolina to earn a doctorate in organizational leadership, found a nonprofit for his local community, and defeat a 22-year incumbent to serve his local district.\n\nJermaine is now running for governor. He knows what it’s like to run a campaign without the resources your opponents take for granted. He brings to CampaignAI the voice of someone who has found his way to victory time and again.",
  },
  {
    firstName: "brandon",
    fallbackPhoto: "/assets/profile-pictures/Brandon-Guffey.png",
    name: "Brandon Guffey",
    title: "SC State Representative",
    party: "Republican",
    tagline: "Child safety advocate. Business owner. Father on a mission.",
    bio: "Brandon built a career as an entrepreneur and small business owner before entering politics. After a personal loss, Brandon channeled his energy into legislative action, passing Gavin’s Law in his first session as a freshman legislator. He has since testified before the U.S. Senate Judiciary Committee and become a nationally recognized voice on children’s online safety.\n\nBrandon is a true thought leader who recognizes the power of technology, both good and bad. He brings a clear vision for how technology can be built effectively and with some care.",
  },
];

// Candid folders (6.4): public/assets/founders/{first-name}/01.jpg... The
// collage cycles whatever lands there; until then the portrait renders.
function founderPhotos(firstName: string, fallback: string): string[] {
  const dir = path.join(process.cwd(), "public", "assets", "founders", firstName);
  if (fs.existsSync(dir)) {
    const files = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort();
    if (files.length > 0) {
      return files.map((f) => `/assets/founders/${firstName}/${f}`);
    }
  }
  return [fallback];
}

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
          {founders.map(({ firstName, fallbackPhoto, name, title, tag, party, tagline, bio }, i) => (
            <ScrollReveal key={name} delay={i * 100}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Collage */}
                <div className="shrink-0 mx-auto md:mx-0 relative pb-4">
                  <FounderCollage photos={founderPhotos(firstName, fallbackPhoto)} alt={name} />
                  <PartyPill
                    party={party}
                    className="absolute -bottom-0 left-1/2 -translate-x-1/2"
                  />
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
                  <p className="text-bridge-violet text-sm font-semibold mb-1">{title}</p>
                  <p className="text-granite font-semibold mb-4">{tagline}</p>
                  <p className="text-granite leading-relaxed whitespace-pre-line">{bio}</p>
                  {/* Founder quote slot: drop-in ready */}
                  {/* <blockquote className="mt-4 border-l-4 border-freedom-blue/40 pl-4 italic text-granite">Quote TBD</blockquote> */}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
