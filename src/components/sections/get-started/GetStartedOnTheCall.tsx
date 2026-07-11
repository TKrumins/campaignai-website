import { MessageSquare, ClipboardCheck, KeyRound } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    icon: MessageSquare,
    title: "We scope it together",
    body: "You tell us what this video needs to do. We shape the plan around it and answer every question — no scripts to write yet, no pressure.",
  },
  {
    icon: ClipboardCheck,
    title: "You approve the full cost",
    body: "We price the video and any add-ons, and you sign off before anything goes into production. Nothing is charged upfront.",
  },
  {
    icon: KeyRound,
    title: "You're set up to start",
    body: "You get access to the platform and our guided process. From there you build your video at your pace, and submit when you're confident.",
  },
];

export function GetStartedOnTheCall() {
  return (
    <section className="bg-dawn-frost py-16 md:py-24">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel text="What happens on the call" />
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-4xl">
              It&apos;s a scoping call, not a sales pitch.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-granite">
              Thirty minutes to figure out your video together. Here&apos;s exactly
              how it goes &mdash; so there are no surprises.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-freedom-blue/12">
                    <Icon className="h-5 w-5 text-freedom-blue" />
                  </span>
                  <span className="font-heading text-sm font-extrabold text-slate">0{i + 1}</span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-regal-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-granite">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
