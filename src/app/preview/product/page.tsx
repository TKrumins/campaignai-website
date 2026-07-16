import type { Metadata } from "next";
import { ProductDemoPreview } from "@/components/sections/home/ProductDemoPreview";

/**
 * Isolated view of the homepage Product section. Kept as a sandbox for reviewing
 * the section without scrolling the whole homepage. Excluded from nav, footer,
 * and sitemap; noindex below.
 *
 * As of 2026-07-10 this is no longer a "preview of what's coming" — the section
 * is live on the homepage. Only the banner differs.
 */
export const metadata: Metadata = {
  title: "Product Preview",
  robots: { index: false, follow: false },
};

export default function ProductPreviewPage() {
  return (
    <main className="pt-24">
      <ProductDemoPreview internal />
    </main>
  );
}
