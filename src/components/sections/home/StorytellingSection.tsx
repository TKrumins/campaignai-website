import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChannelExplorer } from "@/components/sections/home/ChannelExplorer";

/**
 * "Take your message everywhere": the interactive channels hub. Eight clickable
 * destinations — the six digital channels plus Connected TV and Broadcast TV —
 * each opening a detail card with a quick branded animation.
 */
export function StorytellingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-8">
            <div className="mb-4">
              <SectionLabel text="Take Your Message Everywhere" favicon />
            </div>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
              Made to be shared, in real life.
            </h2>
            <p className="text-granite text-lg leading-relaxed mb-6">
              Town halls and door knocks. Group chats and living rooms. Once your
              video is produced, it does its best work in the hands of the people
              who believe in you.
            </p>
            <p className="font-heading font-bold text-xl text-regal-navy">
              Post it. Share it. Run it. Repeat.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <ChannelExplorer />
        </ScrollReveal>
      </div>
    </section>
  );
}
