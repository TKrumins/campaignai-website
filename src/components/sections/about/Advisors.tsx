import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Advisor {
  photo: string;
  name: string;
  credential: string;
  note?: string;
  link?: string;
}

// Advisor directory (6.4): grid renders gracefully from one entry.
// Add new advisors to this array; nothing else changes.
const advisors: Advisor[] = [
  {
    photo: "/assets/profile-pictures/Andrew-Yang.png",
    name: "Andrew Yang",
    credential:
      "Former U.S. Presidential Candidate · Tech Entrepreneur · AI Thought Leader",
    note: "Launched a presidential campaign in 2017 to raise awareness about the coming AI wave.",
  },
];

function AdvisorCard({ photo, name, credential, note, link }: Advisor) {
  const inner = (
    <div className="bg-dawn-frost rounded-2xl p-8 md:p-10 h-full flex flex-col sm:flex-row items-center gap-6">
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden shrink-0">
        <Image
          src={photo}
          alt={name}
          width={120}
          height={120}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="font-heading font-bold text-lg text-regal-navy">{name}</h3>
        <p className="text-freedom-blue text-sm font-semibold mb-2">{credential}</p>
        {note && <p className="text-slate text-sm">{note}</p>}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block card-hover h-full">
        {inner}
      </a>
    );
  }
  return inner;
}

export function Advisors() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mb-10 text-center">
            Strategic Advisors
          </h2>
        </ScrollReveal>

        <div className={`grid gap-6 ${advisors.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {advisors.map((advisor, i) => (
            <ScrollReveal key={advisor.name} delay={100 + i * 80}>
              <AdvisorCard {...advisor} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="text-slate text-sm text-center mt-8">
            Advisory board expanding. Announcements soon.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
