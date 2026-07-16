"use client";

import { useMemo, useState } from "react";
import { Search, Play, Clapperboard } from "lucide-react";
import { showcaseVideos, type ShowcaseVideo } from "@/data/showcase-videos";

const TYPES = ["All", "Announcement", "Fundraising", "Policy Explainer", "GOTV", "Rapid Response"] as const;

function VideoCard({ v }: { v: ShowcaseVideo }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
      <div className="relative aspect-video overflow-hidden" style={{ background: `linear-gradient(135deg, #0D1B3E, ${v.accent}55)` }}>
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur-sm">
            <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
          </div>
        </div>
        {v.comingSoon && (
          <span className="absolute right-3 top-3 rounded-full bg-pioneer-gold/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-regal-navy">
            Coming soon
          </span>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {v.type}
        </span>
      </div>
      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate">{v.theme}</p>
        <h3 className="mt-1 font-heading text-lg font-bold leading-snug text-regal-navy">{v.title}</h3>
        <p className="mt-1.5 text-sm text-granite">{v.blurb}</p>
      </div>
    </article>
  );
}

export function ShowcaseLibrary() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return showcaseVideos.filter((v) => {
      const matchesType = type === "All" || v.type === type;
      const matchesQuery = q === "" || `${v.title} ${v.type} ${v.theme} ${v.blurb}`.toLowerCase().includes(q);
      return matchesType && matchesQuery;
    });
  }, [query, type]);

  return (
    <section className="bg-dawn-frost py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* Search + filter */}
        <div className="mb-8 flex flex-col gap-4">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the library — by issue, race, or video type"
              className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-granite shadow-sm focus:border-freedom-blue focus:outline-none focus:ring-2 focus:ring-freedom-blue/30"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => {
              const on = t === type;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  aria-pressed={on}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                    on ? "border-transparent bg-regal-navy text-white" : "border-gray-300 text-granite hover:border-regal-navy/50"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((v) => (
              <VideoCard key={v.id} v={v} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white/60 p-12 text-center">
            <p className="font-heading text-lg font-bold text-regal-navy">No matches — yet.</p>
            <p className="mt-1 text-sm text-slate">This library is growing. Try another search, or check back soon.</p>
          </div>
        )}

        {/* Growing-library note */}
        <div className="mt-10 flex items-center justify-center gap-2.5 text-sm text-slate">
          <Clapperboard className="h-4 w-4 text-freedom-blue" />
          New client work is added here as it&apos;s cleared to share.
        </div>
      </div>
    </section>
  );
}
