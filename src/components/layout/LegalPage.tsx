import fs from "fs";
import path from "path";
import { type ReactNode } from "react";
import { EMAIL } from "@/lib/constants";

interface LegalPageProps {
  title: string;
  /** Slug of the Markdown file in src/content/legal/ (e.g. "privacy").
      When the file is missing at build time an honest interim page renders,
      never a 404. */
  slug: string;
}

interface ParsedLegal {
  summary: string[];
  effectiveDate: string | null;
  body: string;
}

function loadLegalMarkdown(slug: string): ParsedLegal | null {
  const filePath = path.join(process.cwd(), "src", "content", "legal", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");

  // Optional conventions in the supplied files:
  //   "Effective date: <date>" line anywhere near the top
  //   "## Summary" section rendered into the plain-English box
  const dateMatch = raw.match(/^effective date:\s*(.+)$/im);
  const summaryMatch = raw.match(/^##\s*(?:plain-english\s+)?summary\s*$([\s\S]*?)(?=^##\s|\s*$(?![\s\S]))/im);

  let body = raw;
  if (summaryMatch) body = body.replace(summaryMatch[0], "");
  if (dateMatch) body = body.replace(dateMatch[0], "");
  // Drop a leading H1 (the template renders the title)
  body = body.replace(/^#\s+.+$/m, "").trim();

  const summary = summaryMatch
    ? summaryMatch[1]
        .split(/\n+/)
        .map((line) => line.replace(/^[-*]\s*/, "").trim())
        .filter(Boolean)
    : [];

  return { summary, effectiveDate: dateMatch ? dateMatch[1].trim() : null, body };
}

/** Minimal Markdown rendering: headings, paragraphs, lists, bold, links. */
function renderMarkdown(md: string): ReactNode[] {
  const blocks = md.split(/\n{2,}/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    const heading = trimmed.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];
      if (level === 2)
        return (
          <h2 key={i} className="font-heading font-bold text-2xl text-regal-navy mt-10 mb-3">
            {renderInline(text)}
          </h2>
        );
      return (
        <h3 key={i} className="font-heading font-bold text-lg text-regal-navy mt-8 mb-2">
          {renderInline(text)}
        </h3>
      );
    }

    if (/^[-*]\s+/m.test(trimmed)) {
      const items = trimmed.split(/\n/).map((l) => l.replace(/^[-*]\s+/, ""));
      return (
        <ul key={i} className="list-disc pl-6 space-y-1.5 text-granite text-base leading-relaxed mb-4">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="text-granite text-base leading-relaxed mb-4">
        {renderInline(trimmed.replace(/\n/g, " "))}
      </p>
    );
  });
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    return <span key={i}>{part}</span>;
  });
}

export function LegalPage({ title, slug }: LegalPageProps) {
  const content = loadLegalMarkdown(slug);

  return (
    <div className="bg-white">
      <section className="pt-40 pb-16">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-3">
            {title}
          </h1>
          {content?.effectiveDate && (
            <p className="text-slate text-sm mb-8">
              Effective date: {content.effectiveDate}
            </p>
          )}

          {content ? (
            <>
              {content.summary.length > 0 && (
                <div className="rounded-xl bg-dawn-frost border border-freedom-blue/20 p-6 mb-10">
                  <h2 className="font-heading font-bold text-base text-regal-navy mb-3">
                    The plain-English version
                  </h2>
                  <ul className="list-disc pl-5 space-y-1.5 text-granite text-base leading-relaxed">
                    {content.summary.map((line, i) => (
                      <li key={i}>{renderInline(line)}</li>
                    ))}
                  </ul>
                </div>
              )}
              {renderMarkdown(content.body)}
            </>
          ) : (
            /* Honest interim page: the drafted policy has not landed yet */
            <div className="rounded-xl bg-dawn-frost border border-freedom-blue/20 p-8 mt-6">
              <p className="text-granite text-lg leading-relaxed mb-3">
                This policy is being finalized.
              </p>
              <p className="text-granite text-base leading-relaxed">
                Questions now:{" "}
                <a href={`mailto:${EMAIL}`} className="text-freedom-blue font-semibold hover:underline">
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          )}

          <p className="text-slate text-base leading-relaxed mt-12 pt-8 border-t border-gray-200">
            Questions about this policy? Write to{" "}
            <a href={`mailto:${EMAIL}`} className="text-freedom-blue font-semibold hover:underline">
              {EMAIL}
            </a>{" "}
            and a human will answer.
          </p>
        </div>
      </section>
    </div>
  );
}
