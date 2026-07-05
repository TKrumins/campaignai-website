import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface ProofItem {
  title: string;
  body: string;
  /** Optional explainer SVG; item renders as a full-width feature card. */
  svg?: string;
  svgAlt?: string;
  /** Optional quiet text link (e.g. Watch the work → /#our-work). */
  link?: { href: string; label: string };
}

interface FunnelProofProps {
  heading: string;
  items: ProofItem[];
  /** Alternate background for rhythm between sections. */
  tone?: "white" | "frost";
}

/**
 * Proof block (7.0 step 6). Poster-style cards (E.1): a short headline and a
 * tight supporting line each. Items carrying an explainer SVG render as a
 * full-width feature with the media beside the copy.
 */
export function FunnelProof({ heading, items, tone = "frost" }: FunnelProofProps) {
  const bg = tone === "white" ? "bg-white" : "bg-dawn-frost";
  return (
    <section className={`py-16 md:py-20 ${bg}`}>
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] text-center max-w-[720px] mx-auto mb-12">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const isFeature = Boolean(item.svg);
            return (
              <ScrollReveal key={item.title} delay={(i % 2) * 100} className={isFeature ? "md:col-span-2" : ""}>
                <div
                  className={`rounded-2xl bg-white border border-gray-200 p-7 h-full ${
                    isFeature ? "md:flex md:items-center md:gap-8" : "flex flex-col"
                  }`}
                >
                  <div className={isFeature ? "md:flex-1" : ""}>
                    <h3 className="font-heading font-bold text-lg text-regal-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-granite text-sm leading-relaxed">{item.body}</p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 mt-3 text-freedom-blue font-semibold text-sm hover:underline"
                      >
                        {item.link.label}
                      </Link>
                    )}
                  </div>
                  {isFeature && (
                    <div className="mt-5 md:mt-0 md:w-[46%] rounded-xl bg-dawn-frost p-4">
                      <Image
                        src={item.svg as string}
                        alt={item.svgAlt ?? ""}
                        width={520}
                        height={220}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
