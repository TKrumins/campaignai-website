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
            <SectionLabel text="From the Substack Community" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mt-3">
              Read what we&apos;re reading. Then argue with us.
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
          <div className="mt-10 rounded-2xl border-2 border-freedom-blue/20 bg-white p-7 md:p-8 text-center">
            <h3 className="font-heading font-bold text-xl text-regal-navy mb-2">
              New to the vocabulary?
            </h3>
            <p className="text-granite text-base leading-relaxed mb-4 max-w-[560px] mx-auto">
              Our Living Glossary explains every AI-in-campaigns term in plain
              language: what it is, why it matters, and how to spot it.
            </p>
            <Link
              href="/ai-in-campaigns"
              className="text-freedom-blue font-semibold hover:underline"
            >
              Explore the Living Glossary &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
