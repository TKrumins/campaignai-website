import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GrowthExplorer } from "@/components/ui/GrowthExplorer";

export function GrowthSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="Built to Grow With You" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[44px] md:leading-tight text-regal-navy tracking-[-1px] mt-3 mb-5">
              Storytelling that gets better with every video.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              Every video, every conversation, every piece of context you share
              helps us understand your campaign more deeply: your voice, your
              values, your policies, your brand. You are not just producing a
              single ad. You are building something that grows with your
              campaign.
            </p>
          </div>
        </ScrollReveal>

        <GrowthExplorer />

        <ScrollReveal delay={700}>
          <div className="max-w-2xl mx-auto mt-14 text-center">
            <p className="text-granite text-lg leading-relaxed">
              This is how you build a consistent, professional presence across
              an entire race. Not by hiring a different freelancer every month.
              Not by learning five different tools. By telling your story, again
              and again, and turning every chapter into content that connects.
            </p>
          </div>
        </ScrollReveal>

        {/* The commitment underneath it all: this only works if the data you
            share is safe. So it is — a promise, not a setting. */}
        <ScrollReveal delay={200}>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-verdant" aria-hidden="true">
                  <path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4z" />
                </svg>
                <h3 className="font-heading font-bold text-lg text-regal-navy">
                  You own everything
                </h3>
              </div>
              <p className="text-granite text-sm leading-relaxed">
                Your story, your footage, your finished videos, your account.
                What you build here is yours &mdash; to keep, download, and use
                anywhere, with no watermark and no licensing fees.
              </p>
            </div>

            <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-verdant" aria-hidden="true">
                  <path d="M12 1 3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm-1 15-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z" />
                </svg>
                <h3 className="font-heading font-bold text-lg text-regal-navy">
                  We never sell your data
                </h3>
              </div>
              <p className="text-granite text-sm leading-relaxed">
                Not to advertisers, not to anyone. What you share is used to make
                your videos better &mdash; full stop. That&apos;s a standing
                commitment, not a checkbox buried in settings.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-slate text-sm text-center max-w-[620px] mx-auto mt-8">
            The more videos we make together, the better our team understands
            your campaign.{" "}
            <span className="font-semibold text-regal-navy">
              Every next one is sharper than the last.
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
