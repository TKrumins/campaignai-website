"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { GlossaryIcon } from "@/components/sections/glossary/GlossaryIcon";
import glossaryData from "@/data/glossary.json";

interface GlossaryEntry {
  term: string;
  plainDefinition: string;
  whyItMatters: string;
  howToSpot: string;
  category: string;
  iconKey: string;
  contributor?: string;
}

const entries = glossaryData as GlossaryEntry[];

const CATEGORIES = ["All", "Video", "Outreach", "Fundraising", "Data"];

const categoryTint: Record<string, string> = {
  Video: "text-liberty-crimson",
  Outreach: "text-freedom-blue",
  Fundraising: "text-pioneer-gold",
  Data: "text-regal-navy",
};

const categoryPill: Record<string, string> = {
  Video: "bg-liberty-crimson/10 text-liberty-crimson",
  Outreach: "bg-freedom-blue/10 text-freedom-blue",
  Fundraising: "bg-pioneer-gold/15 text-pioneer-gold",
  Data: "bg-regal-navy/10 text-regal-navy",
};

function EntryModal({ entry, onClose }: { entry: GlossaryEntry; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-regal-navy/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={entry.term}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-[560px] w-full max-h-[85vh] overflow-y-auto p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className={categoryTint[entry.category] || "text-regal-navy"}>
              <GlossaryIcon iconKey={entry.iconKey} className="w-9 h-9" />
            </span>
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-regal-navy leading-tight">
                {entry.term}
              </h3>
              <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryPill[entry.category]}`}>
                {entry.category}
              </span>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close entry"
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-slate hover:text-regal-navy hover:bg-dawn-frost focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate mb-1.5">
              What it is
            </h4>
            <p className="text-granite leading-relaxed">{entry.plainDefinition}</p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate mb-1.5">
              Why it matters
            </h4>
            <p className="text-granite leading-relaxed">{entry.whyItMatters}</p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate mb-1.5">
              How to spot it
            </h4>
            <p className="text-granite leading-relaxed">{entry.howToSpot}</p>
          </div>
          {entry.contributor && (
            <p className="text-slate text-sm pt-2 border-t border-gray-100">
              Suggested by {entry.contributor}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function GlossaryGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<GlossaryEntry | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((entry) => {
      if (category !== "All" && entry.category !== category) return false;
      if (!q) return true;
      return (
        entry.term.toLowerCase().includes(q) ||
        entry.plainDefinition.toLowerCase().includes(q) ||
        entry.whyItMatters.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center mb-10">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate" aria-hidden="true" />
          <label htmlFor="glossary-search" className="sr-only">
            Search the glossary
          </label>
          <input
            id="glossary-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-granite text-sm focus:outline-none focus:ring-2 focus:ring-freedom-blue"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                category === cat
                  ? "bg-regal-navy text-beacon-white"
                  : "bg-white border border-gray-200 text-granite hover:border-freedom-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-slate text-center py-16">
          No entries match that search. Try another term, or suggest it below.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none">
          {filtered.map((entry) => (
            <li key={entry.term}>
              <button
                type="button"
                onClick={() => setOpen(entry)}
                className="group w-full h-full text-left bg-white rounded-2xl border border-gray-200 p-6 card-hover hover:border-freedom-blue/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={categoryTint[entry.category] || "text-regal-navy"}>
                    <GlossaryIcon iconKey={entry.iconKey} />
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryPill[entry.category]}`}>
                    {entry.category}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-regal-navy mb-1">
                  {entry.term}
                </h3>
                {/* Hover peek line */}
                <p className="text-slate text-sm leading-snug line-clamp-2 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 md:transition-opacity md:duration-200">
                  {entry.plainDefinition}
                </p>
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && <EntryModal entry={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
