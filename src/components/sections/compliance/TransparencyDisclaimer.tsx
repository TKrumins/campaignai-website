import { Info } from "lucide-react";

export function TransparencyDisclaimer() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-liberty-crimson/10 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-liberty-crimson" />
              </div>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-regal-navy">
                A note on what we provide and what we don&apos;t.
              </h2>
            </div>
            <div className="text-granite text-sm leading-relaxed space-y-4">
              <p>
                CampaignAI provides compliance tools, research, and formatting
                &mdash; not legal advice. We do not approve, certify, or clear any
                video for release, and nothing we produce is a legal opinion or a
                guarantee that a video complies with the law in your jurisdiction.
              </p>
              <p>
                We work diligently to stay ahead of evolving rules across all 50
                states and at the federal level, but the law moves fast and there
                may be gaps or delays between when a rule changes and when our
                systems reflect it. Responsibility for what a campaign publishes
                stays with the campaign.
              </p>
              <p>
                Have your campaign&apos;s legal counsel review your video and confirm
                compliance with applicable federal, state, and local regulations
                before you publish. Our work is designed to make that review faster
                and better documented &mdash; not to stand in for it.
              </p>
              <p>
                If you become aware of a regulatory change that we haven&apos;t
                yet reflected, we want to hear about it. Contact us at{" "}
                <a
                  href="mailto:info@campaignai.us"
                  className="text-liberty-crimson font-semibold hover:underline"
                >
                  info@campaignai.us
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
