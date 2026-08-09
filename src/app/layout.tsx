import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Analytics } from "@/components/layout/Analytics";
import { A250_KEY } from "@/lib/constants";

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
    icon: "/assets/logos/favicon-dark-background.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CampaignAI",
    title: "CampaignAI - Professional Campaign Video for Political Campaigns",
    description:
      "Agencies charge $10,000+ per ad. Make one for a 10th the cost. Professional campaign video with human-edited quality, built-in compliance through state-specific AI disclosure labels, and 48-hour post-production delivery once you submit.",
    images: [
      {
        url: "/assets/images/hero-bg.png",
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
      "Agencies charge $10,000+ per ad. Make one for a 10th the cost. Professional campaign video with built-in compliance: state-specific AI disclosure labels, updated as rules change.",
    images: ["/assets/images/hero-bg.png"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://campaignai.us"
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
        {/* Collapse the announcement bar pre-paint when dismissed this session */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem(${JSON.stringify(
              A250_KEY
            )})==="dismissed"){document.documentElement.dataset.a250="dismissed"}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Global SVG gradient for icons */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <linearGradient id="patriot-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3366" />
              <stop offset="50%" stopColor="#E8F4F8" />
              <stop offset="100%" stopColor="#4D9FFF" />
            </linearGradient>
            {/* Sparkle fills — declared once here and referenced by <AISparkle
                gradient="..." />, the same way the icon gradient works. */}
            <linearGradient id="sparkle-patriot" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3366" />
              <stop offset="50%" stopColor="#E8F4F8" />
              <stop offset="100%" stopColor="#4D9FFF" />
            </linearGradient>
            <linearGradient id="sparkle-patriot-deep" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF3366" />
              <stop offset="50%" stopColor="#8E5CF7" />
              <stop offset="100%" stopColor="#4D9FFF" />
            </linearGradient>
            {/* Three stages of green: deep pine, brand verdant, and a pale mint
                tip — so scattered sparkles read as a family, not clones. */}
            <linearGradient id="sparkle-verdant" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B7A56" />
              <stop offset="55%" stopColor="#00D084" />
              <stop offset="100%" stopColor="#A7F3D0" />
            </linearGradient>
            <linearGradient id="sparkle-verdant-deep" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06553C" />
              <stop offset="100%" stopColor="#2FAE7E" />
            </linearGradient>
            {/* Green crossing into brand blue — the compliance-meets-campaign tint. */}
            <linearGradient id="sparkle-civic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D084" />
              <stop offset="100%" stopColor="#4D9FFF" />
            </linearGradient>
          </defs>
        </svg>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-regal-navy focus:text-beacon-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Navbar />
        <main
          id="main-content"
          className="flex-1"
          style={{ paddingTop: "var(--announce-h, 0px)" }}
        >
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
        <Analytics />
      </body>
    </html>
  );
}
