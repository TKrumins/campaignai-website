"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader2, Lock } from "lucide-react";
import { decryptDisclosure } from "@/lib/disclosureCrypto";
import {
  DisclosureContent,
  type DisclosureData,
} from "@/components/disclosure/DisclosureContent";
import encrypted from "@/data/disclosure-encrypted.json";

const STORAGE_KEY = "campaignai-disclosure-key";

/**
 * Branded gate for the hidden Meaningful Disclosure page (6.5). The page
 * content ships AES-encrypted; the password decrypts it in the browser.
 * The browser remembers via localStorage, and a `#password` URL fragment
 * unlocks in one click for sharing.
 */
export function DisclosureGate({ clips }: { clips: boolean[] }) {
  const [data, setData] = useState<DisclosureData | null>(null);
  const [checkingStored, setCheckingStored] = useState(true);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function tryUnlock(candidate: string, remember: boolean): Promise<boolean> {
    const plaintext = await decryptDisclosure(encrypted, candidate);
    if (plaintext === null) return false;
    if (remember) {
      try {
        localStorage.setItem(STORAGE_KEY, candidate);
      } catch {
        // private mode; still unlock for this view
      }
    }
    setData(JSON.parse(plaintext) as DisclosureData);
    return true;
  }

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // 1) #password fragment unlock for one-click sharing
      const fragment = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (fragment) {
        const ok = await tryUnlock(fragment, true);
        if (ok) {
          // Scrub the fragment so the password doesn't linger in the URL bar
          history.replaceState(null, "", window.location.pathname);
          if (!cancelled) setCheckingStored(false);
          return;
        }
      }
      // 2) Remembered unlock
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {
        stored = null;
      }
      if (stored) await tryUnlock(stored, false);
      if (!cancelled) setCheckingStored(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const ok = await tryUnlock(password, true);
    setStatus(ok ? "idle" : "error");
  }

  if (data) {
    return <DisclosureContent data={data} clips={clips} />;
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-regal-navy px-4 py-20">
      <div className="w-full max-w-sm text-center">
        <Image
          src="/assets/logos/logo-dark-background.svg"
          alt="CampaignAI"
          width={160}
          height={36}
          className="mx-auto mb-8"
        />
        {checkingStored ? (
          <Loader2 className="w-6 h-6 text-beacon-white/60 animate-spin mx-auto" aria-label="Checking access" />
        ) : (
          <>
            <div className="w-12 h-12 rounded-full bg-beacon-white/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-5 h-5 text-verdant" aria-hidden="true" />
            </div>
            <h1 className="font-heading font-bold text-2xl text-beacon-white mb-2">
              This page is invite-only.
            </h1>
            <p className="text-beacon-white/70 text-sm mb-6">
              Enter the password you were given to continue.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <label htmlFor="disclosure-password" className="sr-only">
                Password
              </label>
              <input
                id="disclosure-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                placeholder="Password"
                className="w-full px-5 py-3 rounded-full bg-white text-granite text-sm text-center focus:outline-none focus:ring-2 focus:ring-freedom-blue"
              />
              {status === "error" && (
                <p className="text-victory-rose text-sm" role="alert">
                  That password didn&apos;t unlock the page. Check it and try again.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-hover w-full inline-flex items-center justify-center text-center bg-liberty-crimson px-6 py-3 rounded-full text-white text-sm font-semibold disabled:opacity-60"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Unlock →"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
