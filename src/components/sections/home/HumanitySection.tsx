import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Users, Camera, Heart, MessageCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";

/**
 * Humanity #1 — the founding team. A collage of real founder candids in curved
 * frames of varied sizes, floating gently, with sparkle accents. Uses the photos
 * we actually have, so the warmth is real, not a placeholder.
 */
const COLLAGE = [
  // src, position + size as % of the square container, shape, float delay
  { src: "/assets/founders/tom/03.jpg", cls: "left-[3%] top-[6%] w-[52%] rounded-[2rem]", ratio: "aspect-[3/4]", delay: "0s" },
  { src: "/assets/founders/jermaine/02.jpg", cls: "right-[2%] top-[2%] w-[36%] rounded-full", ratio: "aspect-square", delay: "1.2s" },
  { src: "/assets/founders/brandon/05.jpg", cls: "left-[1%] bottom-[3%] w-[44%] rounded-[1.6rem]", ratio: "aspect-[4/3]", delay: "0.6s" },
  { src: "/assets/founders/jermaine/06.jpg", cls: "right-[4%] bottom-[6%] w-[40%] rounded-[1.6rem]", ratio: "aspect-[4/5]", delay: "1.8s" },
];

export function HumanityTeam() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* copy */}
        <ScrollReveal>
          <div>
            <SectionLabel text="The Team Behind It" />
            <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-[-1px] text-regal-navy md:text-5xl">
              We&apos;re not a faceless platform. We&apos;re on the ballot too.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-granite">
              CampaignAI was built by a small founding team, and two of us are
              running for office right now. We built the tool we wished we had,
              and we use it for our own campaigns.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-freedom-blue hover:underline"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* collage */}
        <ScrollReveal delay={150}>
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            {COLLAGE.map((f) => (
              <div
                key={f.src}
                className={`hero-float absolute overflow-hidden border-4 border-white shadow-2xl ring-1 ring-black/10 ${f.cls} ${f.ratio}`}
                style={{ animationDelay: f.delay } as CSSProperties}
              >
                <Image src={f.src} alt="A CampaignAI founder on the trail" fill sizes="240px" className="object-cover" />
              </div>
            ))}
            {/* sparkle accents */}
            <AISparkle size={22} color="#FF3366" glow className="sparkle-twinkle absolute left-[-2%] top-[38%]" style={{ ["--dur"]: "3s" } as CSSProperties} />
            <AISparkle size={16} color="#4D9FFF" glow className="sparkle-twinkle absolute right-[6%] top-[46%]" style={{ ["--dur"]: "2.6s", animationDelay: "0.5s" } as CSSProperties} />
            <AISparkle size={14} color="#8E5CF7" glow className="sparkle-twinkle absolute left-[48%] bottom-[1%]" style={{ ["--dur"]: "3.2s", animationDelay: "0.9s" } as CSSProperties} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Humanity #2 — the movement in the field. A scattered band of curved photo
 * frames (placeholders for now) showing people engaging, with the sparkle
 * language. Real client photos drop straight into these slots later.
 */
type Slot = {
  icon: typeof Users;
  caption: string;
  tint: string;
  cls: string;
  ratio: string;
  rot: string;
  delay: string;
};

const SLOTS: Slot[] = [
  { icon: Camera, caption: "On the trail", tint: "from-liberty-crimson/15 to-freedom-blue/10", cls: "w-[46%] sm:w-[26%] rounded-[1.6rem]", ratio: "aspect-[4/5]", rot: "-3deg", delay: "0s" },
  { icon: Users, caption: "At the town hall", tint: "from-freedom-blue/15 to-bridge-violet/10", cls: "w-[46%] sm:w-[30%] rounded-[1.6rem]", ratio: "aspect-[4/3]", rot: "2deg", delay: "0.5s" },
  { icon: MessageCircle, caption: "Shared, person to person", tint: "from-bridge-violet/15 to-liberty-crimson/10", cls: "w-[46%] sm:w-[24%] rounded-full", ratio: "aspect-square", rot: "-2deg", delay: "1s" },
  { icon: Heart, caption: "In the community", tint: "from-freedom-blue/12 to-freedom-blue/5", cls: "w-[46%] sm:w-[26%] rounded-[1.6rem]", ratio: "aspect-[4/5]", rot: "3deg", delay: "1.5s" },
];

function PlaceholderPhoto({ icon: Icon, caption, tint, cls, ratio, rot, delay }: Slot) {
  return (
    <div
      className={`hero-float relative overflow-hidden border-4 border-white bg-dawn-frost shadow-xl ring-1 ring-black/10 ${cls} ${ratio}`}
      style={{ transform: `rotate(${rot})`, animationDelay: delay } as CSSProperties}
    >
      <div className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br ${tint}`}>
        <Icon className="h-7 w-7 text-regal-navy/40" strokeWidth={1.6} />
        <span className="px-3 text-center text-[11px] font-semibold leading-tight text-regal-navy/50">{caption}</span>
      </div>
    </div>
  );
}

export function HumanityField() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-dawn-frost py-20 md:py-28">
      <AISparkle size={16} color="#8E5CF7" glow className="sparkle-twinkle absolute left-[8%] top-16" style={{ ["--dur"]: "3.2s" } as CSSProperties} />
      <AISparkle size={13} color="#FF3366" glow className="sparkle-twinkle absolute right-[10%] top-24" style={{ ["--dur"]: "2.7s", animationDelay: "0.6s" } as CSSProperties} />

      <div className="relative mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <SectionLabel text="In The Field" />
            <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-[-1px] text-regal-navy md:text-5xl">
              Made to be shared, in real life.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-granite">
              Town halls and door knocks. Group chats and living rooms. Your video
              does its best work in the hands of the people who believe in you,
              passed along, person to person.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {SLOTS.map((s) => (
              <PlaceholderPhoto key={s.caption} {...s} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-10 text-center">
            <Link href="/channels" className="inline-flex items-center gap-1.5 text-sm font-semibold text-freedom-blue hover:underline">
              See where to share your video
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
