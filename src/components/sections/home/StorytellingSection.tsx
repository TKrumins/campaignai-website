import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function StorytellingSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <ScrollReveal>
            <div>
              <SectionLabel text="Why It Matters" />
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
                Every campaign is a story being told in real time.
              </h2>
              <p className="text-granite text-xl font-semibold leading-relaxed mb-4 lg:whitespace-nowrap">
                Your announcement introduces you to the world.
                <br />
                Your fundraising appeal shows what&apos;s at stake.
                <br />
                Your policy explainers offer a plan.
                <br />
                Your GOTV spot rallies the people.
              </p>
              <p className="text-slate leading-relaxed mb-8">
                With each video, your voice gets sharper, your brand gets
                clearer, and your voters understand you better. Story by story.
                Chapter by chapter. With you at the center.
              </p>
              <p className="font-heading font-bold text-2xl text-regal-navy text-center">
                &ldquo;We&apos;ll handle the production. You tell the story.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Video preview placeholder */}
          <ScrollReveal delay={200}>
            <div className="bg-regal-navy/5 rounded-2xl aspect-video flex items-center justify-center border border-regal-navy/10">
              <div className="text-center text-slate">
                <div className="w-16 h-16 rounded-full bg-regal-navy/10 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-regal-navy/40"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-sm">Video preview coming soon</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
