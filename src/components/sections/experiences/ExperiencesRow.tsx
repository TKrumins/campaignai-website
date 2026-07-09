import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXPERIENCE_EYEBROW } from "@/lib/constants";

const EXPERIENCES: Record<string, { title: string; blurb: string }> = {
  "#script-step": {
    title: "Test the Script Step",
    blurb: "Watch a blank chatbox become a structured script you approve.",
  },
  "/voters-eyes": {
    title: "Through the Voter's Eyes",
    blurb: "See a cycle through one voter's eyes, and what stayed human.",
  },
  "/day-on-the-trail": {
    title: "A Day on the Trail",
    blurb: "Count the hours a screen takes from one candidate's day.",
  },
  "/campaign-machine": {
    title: "The Campaign Machine",
    blurb: "Flip the switch. See what AI changes, and what it never can.",
  },
  "/story-arc-builder": {
    title: "The Story Arc Builder",
    blurb: "Sketch the arc of videos that tells your whole story.",
  },
  "/disclosure-labels": {
    title: "The Disclosure Label Generator",
    blurb: "Make a plain-language AI disclosure label in a minute.",
  },
};

interface ExperiencesRowProps {
  routes: string[];
  heading: string;
  subhead?: string;
  tone?: "white" | "frost";
}

/**
 * Soft-CTA card row linking to the interactive experiences (Section 4 site
 * links): the full set on /ai-in-campaigns, the top two on /community.
 */
export function ExperiencesRow({ routes, heading, subhead, tone = "frost" }: ExperiencesRowProps) {
  const bg = tone === "white" ? "bg-white" : "bg-dawn-frost";
  return (
    <section className={`py-14 md:py-20 ${bg}`}>
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-[620px] mx-auto mb-10">
            <span className="inline-block text-freedom-blue text-xs font-semibold uppercase tracking-[1.5px] mb-3">
              {EXPERIENCE_EYEBROW}
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy tracking-[-0.5px]">
              {heading}
            </h2>
            {subhead && <p className="text-granite text-base mt-3">{subhead}</p>}
          </div>
        </ScrollReveal>

        <div
          className={`grid gap-5 ${
            routes.length <= 2 ? "sm:grid-cols-2 max-w-[720px] mx-auto" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {routes.map((route, i) => {
            const exp = EXPERIENCES[route];
            if (!exp) return null;
            return (
              <ScrollReveal key={route} delay={(i % 3) * 80}>
                <Link
                  href={route}
                  className="card-hover block h-full rounded-2xl bg-white border border-gray-200 p-6 hover:border-freedom-blue transition-colors"
                >
                  <h3 className="font-heading font-bold text-lg text-regal-navy mb-2">{exp.title}</h3>
                  <p className="text-granite text-sm leading-relaxed mb-4">{exp.blurb}</p>
                  <span className="inline-flex items-center gap-1 text-freedom-blue text-sm font-semibold">
                    Try it &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
