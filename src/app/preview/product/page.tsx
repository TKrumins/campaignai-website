import type { Metadata } from "next";
import { ProductDemoPreview } from "@/components/sections/home/ProductDemoPreview";

/**
 * Hidden preview of the "ultimate" Product section: the interactive four-type
 * demo toggle with placeholder players. Excluded from nav, footer, and
 * sitemap; noindex below. Swap the live ProductSection for this once real
 * sample films exist for each type.
 */
export const metadata: Metadata = {
  title: "Product Preview",
  robots: { index: false, follow: false },
};

export default function ProductPreviewPage() {
  return (
    <main className="pt-24">
      <ProductDemoPreview />
    </main>
  );
}
