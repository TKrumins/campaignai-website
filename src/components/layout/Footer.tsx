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
                src="/logos/logo-dark-background.svg"
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
                href="https://www.linkedin.com/company/campaignai-us"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-beacon-white/70 hover:text-victory-rose transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/CampaignAI.US/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-beacon-white/70 hover:text-victory-rose transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.reddit.com/user/campaignai-us/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reddit"
                className="text-beacon-white/70 hover:text-victory-rose transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 0-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </a>
              <a
                href="https://bsky.app/profile/campaignai-us.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
                className="text-beacon-white/70 hover:text-victory-rose transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.476 6.158 3.226-4.476.752-8.428 2.559-4.466 8.207 4.614 5.226 6.673-1.487 7.684-4.381.092-.262.166-.479.166-.479s.074.217.166.479c1.011 2.894 3.07 9.607 7.684 4.381 3.962-5.648.01-7.455-4.466-8.207 2.558.25 5.373-.599 6.158-3.226.246-.828.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C12.046 4.747 9.087 8.686 12 10.8z" />
                </svg>
              </a>
              <a
                href="https://campaignai.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Substack"
                className="text-beacon-white/70 hover:text-victory-rose transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Site */}
          <div className="md:pt-1">
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
                  href="https://campaignai.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beacon-white/60 hover:text-beacon-white transition-colors text-sm"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="md:pt-1">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-beacon-white/40 text-sm">
                  Privacy Policy (Coming soon)
                </span>
              </li>
              <li>
                <span className="text-beacon-white/40 text-sm">
                  Terms of Service (Coming soon)
                </span>
              </li>
            </ul>
            <a
              href="mailto:info@campaignai.us"
              className="block text-beacon-white/60 hover:text-beacon-white transition-colors text-sm mt-4"
            >
              info@campaignai.us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-beacon-white/40 text-sm">
          &copy; {new Date().getFullYear()} CampaignAI, Inc. All Rights Reserved. &middot; The
          CampaignAI team is based in South Carolina. &middot; Multi-partisan by
          design.
        </div>
      </div>
    </footer>
  );
}
