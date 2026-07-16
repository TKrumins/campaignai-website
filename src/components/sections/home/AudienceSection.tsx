import type { CSSProperties } from "react";
import { Landmark, Briefcase, Users, Megaphone, Flag } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AISparkle } from "@/components/ui/AISparkle";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";

// A non-interactive spectrum of who we serve — candidates, consultants, parties,
// nonprofits, grassroots — strung along one multi-partisan rail. It shows the
// breadth at a glance and sends everyone to the single Get Started path (the
// dedicated per-audience pages are frozen as a future project).
const roles = [
  { title: "Candidates", icon: Landmark, intent: "Running for office" },
  { title: "Consultants", icon: Briefcase, intent: "Advising campaigns" },
  { title: "Parties & PACs", icon: Users, intent: "Backing a slate" },
  { title: "Nonprofits", icon: Megaphone, intent: "Advancing a cause" },
  { title: "Grassroots", icon: Flag, intent: "Organizing people" },
];

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-dawn-frost">
      <AISparkle size={16} color="#FF3366" glow className="sparkle-twinkle absolute left-[6%] top-24" style={{ ["--dur"]: "3.4s" } as CSSProperties} />
      <AISparkle size={13} color="#4D9FFF" glow className="sparkle-twinkle absolute right-[8%] top-40" style={{ ["--dur"]: "2.8s", animationDelay: "0.5s" } as CSSProperties} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="mb-4">
              <SectionLabel text="Who We Serve" favicon />
            </div>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
              Tactical videos. Built for your campaign.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              Whether you&apos;re running for office, pursuing a ballot measure, or
              advancing an issue or cause, we&apos;re here to help. Turn your
              campaign&apos;s story into video content today.
            </p>
          </div>
        </ScrollReveal>

        {/* Who-we-serve spectrum — one rail, five audiences, no links. */}
        <ScrollReveal>
          <div className="relative mx-auto max-w-[860px]">
            {/* connecting rail behind the emblems (desktop only) */}
            <span
              aria-hidden
              className="absolute inset-x-8 top-[38px] hidden h-1.5 rounded-full multipartisan-gradient opacity-80 sm:block"
            />
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-2">
              {roles.map(({ title, icon: Icon, intent }) => (
                <li key={title} className="relative flex flex-col items-center text-center">
                  <span className="h-[76px] w-[76px] rounded-full patriot-gradient p-[3px] shadow-md ring-4 ring-dawn-frost">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-regal-navy">
                      <Icon className="h-7 w-7 text-beacon-white" />
                    </span>
                  </span>
                  <h4 className="mt-4 font-heading text-base font-bold leading-tight text-regal-navy">
                    {title}
                  </h4>
                  <span className="mt-1 text-sm font-medium text-slate">
                    {intent}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-14">
            <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3 text-base">
              {CTA_PRIMARY}
            </Button>
            <p className="text-slate text-sm mt-2">{CTA_MICROCOPY}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
