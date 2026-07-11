import { BadgeCheck, Fingerprint, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const mechanisms = [
  {
    icon: BadgeCheck,
    title: "A verification badge",
    body: "A clear, visible signal that real, accountable people stood behind the ad — human-approved, not anonymous AI slop. Voters see it at a glance.",
  },
  {
    icon: Fingerprint,
    title: "An embedded watermark",
    body: "Provenance sealed inside the file itself, so it travels with the video wherever it's shared or re-uploaded — not just printed on the surface where it can be cropped away.",
  },
  {
    icon: Globe,
    title: "A public provenance page",
    body: "Anyone — a voter, a journalist, a fact-checker — can look up a CampaignAI video and confirm it's authentic, right here on our site.",
  },
];

export function ProvenanceTravels() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel text="How the proof travels" color="crimson" />
            <h2 className="mt-3 mb-5 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
              Proof that travels with the file.
            </h2>
            <p className="text-lg leading-relaxed text-granite">
              New industry standards can prove a file wasn&apos;t tampered with. We add
              the layer that matters most in politics &mdash; proof that real,
              accountable people stood behind it &mdash; and carry it three ways.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {mechanisms.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={i * 90}>
              <div className="card-hover h-full rounded-2xl border border-gray-200 bg-dawn-frost/50 p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-freedom-blue/12">
                  <Icon className="h-6 w-6 text-freedom-blue" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-regal-navy">{title}</h3>
                <p className="text-granite leading-relaxed">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
