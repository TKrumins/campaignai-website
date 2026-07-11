import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PartyPill } from "@/components/ui/PartyPill";

// The "guide" beat of the hero-journey funnel: real people who have actually run,
// across the spectrum. Adds human warmth + the multi-partisan trust turn right
// before the interactive planner. Reusable across the /for/* pages.
const people = [
  {
    photo: "/assets/profile-pictures/Jermaine-Johnson.png",
    name: "Jermaine Johnson",
    party: "Democrat" as const,
    line: "State Representative running for governor — who won without the money his opponents took for granted.",
  },
  {
    photo: "/assets/profile-pictures/Brandon-Guffey.png",
    name: "Brandon Guffey",
    party: "Republican" as const,
    line: "State Representative who passed a law his first session and testified before the U.S. Senate.",
  },
  {
    photo: "/assets/profile-pictures/Tom-Krumins.png",
    name: "Tom Krumins",
    party: "Forward" as const,
    line: "Campaign operative and movement-builder who's run darkhorse races from scratch.",
  },
];

export function FounderGuideStrip({
  heading = "You don't have to be a “video person.”",
  sub = "The people who built this have actually run — a Republican, a Democrat, and an Independent who all agree the tools that win races shouldn't be locked behind a big budget.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="bg-dawn-frost py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel text="You're in good company" />
            <h2 className="mt-3 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
              {heading}
            </h2>
            <p className="text-lg leading-relaxed text-granite">{sub}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {people.map(({ photo, name, party, line }, i) => (
            <ScrollReveal key={name} delay={i * 90}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
                <div className="relative mb-4 h-24 w-24">
                  <div className="h-full w-full rounded-full bg-regal-navy p-[3px] shadow-sm">
                    <div className="h-full w-full overflow-hidden rounded-full bg-white">
                      <Image src={photo} alt={name} width={96} height={96} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <PartyPill party={party} className="absolute -bottom-1 left-1/2 -translate-x-1/2" />
                </div>
                <h3 className="font-heading text-base font-bold text-regal-navy">{name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">{line}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
