import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import ComingSoonGraphic from "@/components/ui/graphics/ComingSoonGraphic";

// Reusable "Coming Soon" page for features that are built but deliberately held
// back (e.g. Verified Human). The full page for each lives on as a dark preview
// route; this is what the public sees at the live URL until launch. Fable's
// campaign-trail ComingSoonGraphic carries the visual weight.
interface ComingSoonProps {
  /** Small uppercase label above the headline, e.g. "Verified Human". */
  eyebrow: string;
  /** The headline. Keep it short and human. */
  title: string;
  /** One or two sentences on what's coming and why it matters. */
  description: string;
  /** Optional extra content below the copy (a teaser list, a note, etc.). */
  children?: ReactNode;
}

export function ComingSoon({ eyebrow, title, description, children }: ComingSoonProps) {
  return (
    <section className="min-h-[86vh] flex items-center justify-center bg-white pt-32 pb-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <ComingSoonGraphic className="mx-auto mb-8 max-w-[540px]" />

        <SectionLabel text={eyebrow} />
        <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-[-1px] text-regal-navy md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-granite">
          {description}
        </p>

        {children}

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="patriot" href="/get-started">
            Get started &rarr;
          </Button>
          <Button variant="navy-outline" href="/">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
