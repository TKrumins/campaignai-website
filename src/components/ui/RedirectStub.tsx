"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Client-side redirect for retired URLs. The site is a static export served by
 * GitHub Pages, which has no server-side redirects (the rules in vercel.json
 * only apply to the Vercel preview). This bounces visitors to the new address
 * via router.replace, with a <meta refresh> fallback for no-JS. Mirrors the
 * long-standing /how-it-works stub.
 */
export function RedirectStub({ to, label }: { to: string; label: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <main className="grid min-h-screen place-items-center bg-regal-navy px-6 text-center">
        <div>
          <p className="text-beacon-white/80">This page has moved.</p>
          <Link
            href={to}
            className="mt-3 inline-block font-semibold text-freedom-blue hover:underline"
          >
            {label} &rarr;
          </Link>
        </div>
      </main>
    </>
  );
}
