import type { Metadata } from "next";
import { COVERS } from "@/components/preview/SubstackCovers";

// Hidden preview gallery (direct URL only — not in nav or sitemap). Lets Tom
// review the flagship Substack cover animations on the deployed preview. These
// feed the Fable SVG pass and, later, the Community page's Substack section.
export const metadata: Metadata = {
  title: "Substack Covers (preview)",
  robots: { index: false, follow: false },
};

export default function SubstackCoversPreview() {
  return (
    <main className="min-h-screen bg-dawn-frost pt-28 pb-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-freedom-blue">Preview · not public</p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-4xl">
            Substack cover animations
          </h1>
          <p className="mt-3 text-granite">
            Branded, looping covers for the five flagship thought-leadership articles. Motion falls
            still under reduced-motion. The full 25-topic pipeline lives in the closeout CSV.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {COVERS.map(({ id, title, subtitle, topic, Component }) => (
            <article key={id} className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
              <div className="aspect-video w-full">
                <Component />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-freedom-blue">{topic}</span>
                <h2 className="mt-1.5 font-heading text-lg font-bold leading-snug text-regal-navy">{title}</h2>
                <p className="mt-1.5 text-sm text-granite">{subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
