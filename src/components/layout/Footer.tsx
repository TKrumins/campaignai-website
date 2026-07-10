import Link from "next/link";
import Image from "next/image";
import { EmailCapture } from "@/components/forms/EmailCapture";
import {
  EMAIL,
  SOCIAL_LINKEDIN,
  SOCIAL_FACEBOOK,
  SOCIAL_REDDIT,
  SOCIAL_BLUESKY,
  SOCIAL_SUBSTACK,
} from "@/lib/constants";

const siteLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/get-started", label: "Get Started" },
  { href: "/community", label: "Community" },
];

// Who We Serve column (Commit 7, Section 0.2 / 7.7): between Site and Trust.
const whoWeServeLinks = [
  { href: "/for/candidates", label: "Candidates" },
  { href: "/for/consultants", label: "Consultants" },
  { href: "/for/parties-and-pacs", label: "Parties & PACs" },
  { href: "/for/nonprofits", label: "Nonprofits" },
  { href: "/for/grassroots", label: "Grassroots" },
];

/**
 * The glyph stays 20x20; the *tap target* is 44x44. Bare 20px anchors fell under the
 * 24px WCAG 2.2 AA minimum (2.5.8) on every page of the site — these are the only
 * controls in the footer and they are thumb-sized on a phone now, not fingernail-sized.
 */
function SocialIcon({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-beacon-white/70 transition-colors hover:bg-white/5 hover:text-victory-rose"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  );
}

const socialIcons = [
  {
    href: SOCIAL_LINKEDIN,
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    href: SOCIAL_FACEBOOK,
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    href: SOCIAL_REDDIT,
    label: "Reddit",
    path: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 0-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z",
  },
  {
    href: SOCIAL_BLUESKY,
    label: "Bluesky",
    path: "M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.476 6.158 3.226-4.476.752-8.428 2.559-4.466 8.207 4.614 5.226 6.673-1.487 7.684-4.381.092-.262.166-.479.166-.479s.074.217.166.479c1.011 2.894 3.07 9.607 7.684 4.381 3.962-5.648.01-7.455-4.466-8.207 2.558.25 5.373-.599 6.158-3.226.246-.828.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C12.046 4.747 9.087 8.686 12 10.8z",
  },
];

export function Footer() {
  return (
    <footer className="bg-regal-navy text-beacon-white border-t-4 border-t-freedom-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Link columns: Brand · Site · Who We Serve · Trust & Legal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logos/logo-dark-background.svg"
                alt="CampaignAI"
                width={140}
                height={32}
              />
            </Link>
            <p className="mt-3 text-beacon-white/60 text-sm leading-relaxed max-w-xs">
              Your story. Told right.
            </p>
            {/* Icon row: LinkedIn, Facebook, Reddit, Bluesky (no Substack icon;
                the button in Stay in the loop is the footer's single Substack) */}
            {/* gap-0 and the negative margin keep the row's *visual* rhythm identical to
                the old 20px icons at gap-4, while each anchor now owns a 44px box. */}
            <div className="mt-2 -ml-3 flex items-center gap-0">
              {socialIcons.map((icon) => (
                <SocialIcon key={icon.label} {...icon} />
              ))}
            </div>
          </div>

          {/* Column 2: Site */}
          <div className="md:pt-1">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Site
            </h3>
            <ul className="space-y-2">
              {siteLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Who We Serve */}
          <div className="md:pt-1">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Who We Serve
            </h3>
            <ul className="space-y-2">
              {whoWeServeLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Trust & Legal */}
          <div className="md:pt-1">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Trust &amp; Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ethics"
                  className="text-verdant hover:text-verdant/80 transition-colors text-sm font-medium"
                >
                  Read our full ethics commitment &rarr;
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-beacon-white/50 text-sm">
                  Regulatory Tracker
                  <span className="rounded-full bg-pioneer-gold/15 text-pioneer-gold text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                    Coming Soon
                  </span>
                </span>
              </li>
              {/* Unlinked until src/content/legal/ai-disclosure.md exists. The page
                  currently renders only "This policy is being finalized," and sending
                  a reader there from the footer is a dead end. Matches the Regulatory
                  Tracker treatment above. Restore the <Link> when the file lands. */}
              <li>
                <span className="inline-flex items-center gap-2 text-beacon-white/50 text-sm">
                  AI Disclosure
                  <span className="rounded-full bg-pioneer-gold/15 text-pioneer-gold text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                    Coming Soon
                  </span>
                </span>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/eula"
                  className="text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
                >
                  EULA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Stay in the loop: bottom-left block beneath the columns (7-8 doc 0.2) */}
        <div className="mt-10 max-w-md">
          <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-2">
            Stay in the loop.
          </h3>
          <p className="text-beacon-white/60 text-sm leading-relaxed mb-4">
            Product updates, new essays, and first word on what we launch next. No spam, no noise.
          </p>
          <EmailCapture purpose="newsletter" buttonLabel="Subscribe →" compact />
          <a
            href={SOCIAL_SUBSTACK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center justify-center text-center mt-4 px-5 py-2.5 rounded-full border-2 border-beacon-white/60 text-beacon-white text-sm font-semibold hover:bg-beacon-white hover:text-regal-navy transition-colors"
          >
            Join us on Substack &rarr;
          </a>
        </div>

        {/* Verdant privacy glance strip */}
        <div className="mt-10 rounded-xl border border-verdant/40 bg-verdant/10 px-5 py-3 flex items-start sm:items-center gap-3">
          <svg
            className="w-4 h-4 shrink-0 text-verdant mt-0.5 sm:mt-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          <p className="text-beacon-white/85 text-sm leading-relaxed">
            <span className="font-semibold text-verdant">Privacy at a glance:</span>{" "}
            no tracking cookies, no personal data collected as you browse, nothing sold or used to train major models.
          </p>
        </div>

        {/* Contact / bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-beacon-white/40 text-sm">
          {/* inline-block + py-1.5 lifts the tap target from 17px to the 24px WCAG minimum
              without moving the text a pixel. */}
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block py-1.5 transition-colors hover:text-beacon-white"
          >
            {EMAIL}
          </a>{" "}
          &middot; &copy; 2026 CampaignAI, Inc. &middot; Based in South Carolina. &middot; Multi-partisan by design.
        </div>

        {/* Final line: inline SVG heart, currentColor, never an emoji */}
        <p className="mt-4 text-center text-beacon-white/40 text-sm flex items-center justify-center gap-1.5">
          Built with
          <svg
            className="w-3.5 h-3.5 inline-block"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="love"
            role="img"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          for humanity
        </p>
      </div>
    </footer>
  );
}
