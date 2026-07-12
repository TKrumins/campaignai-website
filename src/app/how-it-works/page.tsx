"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// The Video Production Process moved to /video-production-process. This stub
// keeps the old /how-it-works URL working on the static export (no server
// redirects) by bouncing visitors to the new address.
export default function HowItWorksMoved() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/video-production-process");
  }, [router]);

  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/video-production-process" />
      <main className="grid min-h-screen place-items-center bg-regal-navy px-6 text-center">
        <div>
          <p className="text-beacon-white/80">This page has moved.</p>
          <Link
            href="/video-production-process"
            className="mt-3 inline-block font-semibold text-freedom-blue hover:underline"
          >
            Go to the Video Production Process &rarr;
          </Link>
        </div>
      </main>
    </>
  );
}
