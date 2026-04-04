"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    } else {
      setShowBanner(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
    setShowBanner(false);
  }

  function handleDecline() {
    localStorage.setItem("cookie-consent", "declined");
    setConsent("declined");
    setShowBanner(false);
  }

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {/* GA4 loads only after consent */}
      {consent === "accepted" && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {/* Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-regal-navy text-beacon-white p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-beacon-white/80">
              We use cookies to analyze site traffic and improve your experience.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm rounded-full border border-beacon-white/30 hover:border-beacon-white/60 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm rounded-full bg-freedom-blue text-white font-semibold btn-hover"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
