import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FunnelProblemProps {
  /** Verbatim problem-framing copy. */
  body: string;
  /** Optional explainer SVG path (e.g. screen-to-street). */
  svg?: string;
  svgAlt?: string;
}

/**
 * Problem-framing section (7.0 step 2). When an explainer SVG is provided it
 * sits beside the copy (E.2/C.4 visual support); otherwise the copy centers.
 */
export function FunnelProblem({ body, svg, svgAlt = "" }: FunnelProblemProps) {
  if (!svg) {
    return (
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-granite text-lg md:text-xl leading-relaxed">{body}</p>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <ScrollReveal>
            <p className="text-granite text-lg leading-relaxed">{body}</p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="rounded-2xl bg-dawn-frost p-6 md:p-8">
              <Image
                src={svg}
                alt={svgAlt}
                width={480}
                height={220}
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
