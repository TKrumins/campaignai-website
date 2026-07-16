import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const items = [
  "Polished, finished video ads, not templates",
  "Human editorial review on every video",
  "15-, 30-, and 60-second versions in every format",
  "Optimized for social, email, web, and digital ads",
  "State-specific AI disclosure labels",
  "3 revisions in production + 1 in post",
  "48-hour post-production delivery once you submit",
  "Full ownership. No watermark. No licensing fees.",
];

function LogoMarkBullet() {
  return (
    <Image
      src="/assets/logos/favicon-dark-circle.svg"
      alt=""
      width={16}
      height={16}
      className="w-4 h-4 shrink-0 mt-0.5"
    />
  );
}

export function GetStartedIncludes() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h3 className="font-heading font-bold text-2xl text-regal-navy mb-8 text-center">
            Every video includes:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <LogoMarkBullet />
                <span className="text-granite text-sm">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
