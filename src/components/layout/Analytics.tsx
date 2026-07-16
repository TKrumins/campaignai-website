import Script from "next/script";

/**
 * Cookieless analytics slot (5.13). Driven by NEXT_PUBLIC_ANALYTICS_PROVIDER:
 * empty renders nothing; 'plausible' or 'fathom' injects that provider's
 * cookieless script. No Google tracking, no consent banner needed.
 */
export function Analytics() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;

  if (provider === "plausible") {
    return (
      <Script
        defer
        data-domain={process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN || "campaignai.us"}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  if (provider === "fathom") {
    const siteId = process.env.NEXT_PUBLIC_FATHOM_SITE_ID;
    if (!siteId) return null;
    return (
      <Script
        defer
        data-site={siteId}
        src="https://cdn.usefathom.com/script.js"
        strategy="afterInteractive"
      />
    );
  }

  return null;
}
