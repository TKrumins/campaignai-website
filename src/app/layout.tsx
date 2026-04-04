import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { MobileCTA } from "@/components/layout/MobileCTA";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CampaignAI - Professional Campaign Video for Political Campaigns",
    template: "%s | CampaignAI",
  },
  description:
    "Create professional campaign videos at a fraction of the cost. CampaignAI helps political campaigns and organizations tell their stories with AI-powered video production.",
  icons: {
    icon: "/Logos/favicon-dark-background.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CampaignAI",
    title: "CampaignAI - Professional Campaign Video for Political Campaigns",
    description:
      "Agencies charge $10,000+ per ad. Make one for a 10th the cost. Professional campaign video with human-edited quality, built-in compliance, and 48-hour delivery.",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "CampaignAI - Campaign-ready video production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CampaignAI - Professional Campaign Video for Political Campaigns",
    description:
      "Agencies charge $10,000+ per ad. Make one for a 10th the cost. Professional campaign video with built-in compliance.",
    images: ["/hero-bg.png"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://campaignai.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* Preload hero background for homepage LCP */}
        <link rel="preload" href="/hero-bg.png" as="image" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-regal-navy focus:text-beacon-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
