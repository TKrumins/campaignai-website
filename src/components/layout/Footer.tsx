import Link from "next/link";
import Image from "next/image";

const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://campaignai.substack.com";

export function Footer() {
  return (
    <footer className="bg-regal-navy text-beacon-white border-t-4 border-t-freedom-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/Logos/logo-dark-background.svg"
                alt="CampaignAI"
                width={140}
                height={32}
              />
            </Link>
            <p className="mt-3 text-beacon-white/60 text-sm leading-relaxed max-w-xs">
              Your story. Told right.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-beacon-white/40 hover:text-beacon-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-beacon-white/40 hover:text-beacon-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-beacon-white/40 hover:text-beacon-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Substack"
                className="text-beacon-white/40 hover:text-beacon-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Site */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Site
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href={substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
                >
                  Substack
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-beacon-white/40 text-sm">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-beacon-white/40 text-sm">
                  Terms of Service
                </span>
              </li>
            </ul>
            <div className="mt-6 space-y-1">
              <a
                href="mailto:info@campaignai.com"
                className="block text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
              >
                info@campaignai.com
              </a>
              <a
                href="mailto:hello@campaignai.com"
                className="block text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
              >
                hello@campaignai.com
              </a>
              <a
                href="mailto:press@campaignai.com"
                className="block text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
              >
                press@campaignai.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-beacon-white/40 text-sm">
          &copy; {new Date().getFullYear()} CampaignAI, Inc. &middot; The
          CampaignAI team is based in South Carolina. &middot; Multi-partisan by
          design.
        </div>
      </div>
    </footer>
  );
}
