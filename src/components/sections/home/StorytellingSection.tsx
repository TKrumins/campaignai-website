import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Hub } from "@/components/ui/DistributionHub";
import { TelevisionReach } from "@/components/ui/TelevisionReach";

/**
 * "Take your message everywhere": the channels hub (Hub) plus the television
 * beat (TelevisionReach). Both graphics are now shared components, reused —
 * recoloured — on the /for/* funnels via FunnelReach.
 */
export function StorytellingSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <SectionLabel text="Take Your Message Everywhere" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              Made to be shared, in real life.
            </h2>
            <p className="text-granite text-lg leading-relaxed mb-6">
              Town halls and door knocks. Group chats and living rooms. Once your
              video is produced, it does its best work in the hands of the people
              who believe in you — passed along, wherever your audience already is.
            </p>
            <p className="font-heading font-bold text-xl text-regal-navy">
              Post it. Share it. Run it. Repeat.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Hub cx={450} cy={450} spokeLen={290} rectW={190} rectH={90} hubR={72} viewBox="60 60 780 780" idp="d-" className="w-full max-w-[900px] mx-auto hidden md:block" />
          <Hub cx={300} cy={300} spokeLen={185} rectW={160} rectH={76} hubR={52} viewBox="30 30 540 540" idp="m-" className="w-full md:hidden" />
        </ScrollReveal>

        <TelevisionReach />
      </div>
    </section>
  );
}
