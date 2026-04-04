import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function StorytellingSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-regal-navy" />
      <div className="absolute inset-0 bg-regal-navy/[0.88]" />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <ScrollReveal>
            <div>
              <SectionLabel text="Why It Matters" color="gold" />
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-beacon-white tracking-[-1px] mt-3 mb-5">
                Every campaign is a story being told in real time.
              </h2>
              <p className="text-beacon-white/95 text-xl font-semibold leading-relaxed max-w-[680px] mb-4">
                Your announcement introduces you to the world. Your fundraising
                appeal shows what&apos;s at stake. Your policy explainers offer a
                plan. Your GOTV spot rallies the people.
              </p>
              <p className="text-beacon-white/80 leading-relaxed max-w-[640px] mb-8">
                With each video, your voice gets sharper, your brand gets
                clearer, and your voters understand you better. Story by story.
                Chapter by chapter. With you at the center.
              </p>
              <p className="font-heading font-bold text-2xl text-freedom-blue text-center">
                &ldquo;We&apos;ll handle the production. You tell the story.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Video preview placeholder */}
          <ScrollReveal delay={200}>
            <div className="bg-white/5 rounded-2xl aspect-video flex items-center justify-center border border-white/10">
              <div className="text-center text-beacon-white/60">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-beacon-white/40"
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
