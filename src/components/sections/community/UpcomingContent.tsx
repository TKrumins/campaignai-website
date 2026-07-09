import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { communityPosts } from "@/data/community-posts";

/**
 * Section 5 previews (6.1): STATIC cards built from the Substack post URLs
 * in src/data/community-posts.ts. No iframes; each card links out.
 */
export function UpcomingContent() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel text="From Our Substack" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mt-3">
              Read what we&apos;re writing. Then argue with us.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityPosts.map(({ category, categoryColor, title, readTime, excerpt, url }, i) => (
            <ScrollReveal key={title} delay={i * 60}>
              <div className="bg-dawn-frost rounded-2xl p-7 md:p-8 h-full flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
                    {category}
                  </span>
                  <span className="text-slate text-xs">{readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-regal-navy mb-2">
                  {title}
                </h3>
                <p className="text-granite text-base leading-relaxed mb-5 flex-1">
                  {excerpt}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-freedom-blue text-sm font-semibold hover:underline w-fit"
                >
                  Read on Substack &rarr;
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Cross-link to the Living Glossary */}
        <ScrollReveal delay={200}>
          <div className="mt-12 rounded-2xl bg-regal-navy p-8 md:p-10 text-center">
            <span className="inline-block text-freedom-blue text-xs font-bold uppercase tracking-widest mb-3">
              The Living Glossary
            </span>
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-beacon-white tracking-[-0.5px] mb-3">
              AI is already in every campaign &mdash; and has been for years.
            </h3>
            <p className="text-beacon-white/80 text-base leading-relaxed mb-6 max-w-[600px] mx-auto">
              From voter modeling to synthetic media, it&apos;s already shaping how
              races are run. Our Living Glossary explains every term in plain
              language: what it is, why it matters, and how to spot it.
            </p>
            <Link
              href="/ai-in-campaigns"
              className="btn-hover inline-flex items-center justify-center rounded-full bg-freedom-blue px-6 py-3 text-white text-sm font-semibold"
            >
              Explore the Living Glossary &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
