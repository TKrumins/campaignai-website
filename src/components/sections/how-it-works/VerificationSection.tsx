import { BadgeCheck, Fingerprint, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const mechanisms = [
  {
    icon: BadgeCheck,
    title: "A verification badge",
    body: "A clear signal that real, accountable people stood behind the ad — human-approved, not anonymous AI slop.",
  },
  {
    icon: Fingerprint,
    title: "An embedded watermark",
    body: "Provenance carried inside the file itself, so it travels with the video wherever it's shared — not just printed on the surface.",
  },
  {
    icon: Globe,
    title: "A public provenance page",
    body: "Anyone can look up a CampaignAI video and confirm it's authentic, right here on our site.",
  },
];

export function VerificationSection() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <ScrollReveal>
            <div>
              <SectionLabel text="Verified Human" />
              <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-beacon-white tracking-[-0.5px] mt-3 mb-5">
                Proof that your video is really yours.
              </h2>
              <p className="text-beacon-white/80 text-lg leading-relaxed mb-4">
                Because our process requires you to make and approve every
                creative decision, we can guarantee something most tools
                can&apos;t: a real person &mdash; your campaign or organization
                &mdash; shaped and signed off on this video. Not an AI running on
                its own, and not an outside actor putting words in your mouth.
              </p>
              <p className="text-beacon-white/70 text-base leading-relaxed">
                It&apos;s standard on every CampaignAI video &mdash; the work our
                agency produces today, and the self-serve platform coming soon.
                If it came through CampaignAI, a human made the calls.
              </p>
            </div>
          </ScrollReveal>

          {/* Provenance card visual */}
          <ScrollReveal delay={120}>
            <div className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-5 shadow-xl">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-[#16264f] to-[#23407E]">
                {/* verified badge */}
                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-freedom-blue px-3 py-1.5 shadow-lg">
                  <BadgeCheck className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-bold">Verified by CampaignAI</span>
                </div>
                {/* play glyph */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>
              {/* provenance readout */}
              <div className="mt-4 space-y-2.5">
                {[
                  "Human-approved by the campaign",
                  "Made through CampaignAI's guided process",
                ].map((row) => (
                  <div key={row} className="flex items-center gap-2.5">
                    <BadgeCheck className="w-4 h-4 shrink-0 text-freedom-blue" />
                    <span className="text-beacon-white/85 text-sm">{row}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-beacon-white/50 text-xs font-mono">Provenance ID · CAI-2026</span>
                  <span className="text-freedom-blue text-xs font-semibold">Verify &rarr;</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Broadcast vs. social */}
        <ScrollReveal>
          <p className="text-beacon-white/80 text-lg leading-relaxed max-w-[860px] mx-auto text-center mt-16 mb-10">
            On television, &ldquo;I&apos;m ___ and I approve this message&rdquo;
            has carried this weight for decades. On social, where AI slop spreads
            faster than anyone can check it, that&apos;s not enough. New industry
            standards can prove a file wasn&apos;t tampered with &mdash; we add the
            layer that matters most in politics: proof that real, accountable
            people stood behind it. So every video can carry more:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mechanisms.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={i * 90}>
              <div className="h-full rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6">
                <div className="w-11 h-11 rounded-lg bg-freedom-blue/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-freedom-blue" />
                </div>
                <h3 className="font-heading font-bold text-lg text-beacon-white mb-2">{title}</h3>
                <p className="text-beacon-white/70 text-sm leading-relaxed">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Subtle future-facing note */}
        <ScrollReveal>
          <p className="text-beacon-white/55 text-base leading-relaxed max-w-[780px] mx-auto text-center mt-12">
            As deepfakes blur the line between real and synthetic, proving a video
            is authentic is becoming everyone&apos;s problem. We&apos;re building a
            mark that campaigns can stand behind &mdash; a signal you&apos;re using
            AI the responsible way. We&apos;re starting with your videos, and going
            further from there.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
