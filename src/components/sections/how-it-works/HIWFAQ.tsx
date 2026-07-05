import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

const faqs = [
  {
    question: "How much does a video cost?",
    answer:
      "Professional video starts at $1,999, and candidate campaigns start at $599 this cycle, from school board to U.S. Senate. Nonprofits and advocacy groups get mission pricing, case by case. Every rate is a flat starting price with add-ons quoted upfront, so you know the full cost before you book.",
  },
  {
    question: "How long does it take to get my video?",
    answer:
      "Most videos come back within 48 hours of the moment you finish the guided process and submit. Complex projects with custom footage can take a little longer.",
  },
  {
    question: "Do I need any production experience?",
    answer:
      "None. What matters is your story. We interview you, build the script and storyboard, and guide every step. Have footage to include, or want to film part yourself? We'll tell you exactly what to shoot and when to send it.",
  },
  {
    question: "What if I'm not satisfied with my video?",
    answer:
      "We offer 3 revisions during the video development process and 1 back-and-forth with our video editors in post-production. If we can't meet your needs by then, we'll offer a refund and connect you to a video production agency that charges more for dedicated and ongoing support.",
  },
  {
    question: "Is disclosure labeling required?",
    answer:
      "Requirements vary by state, but we include disclosure labels on every video regardless. Transparency builds voter trust. All campaigns should confirm compliance with their own state and local regulations.",
  },
  {
    question: "Can I use the video on any platform?",
    answer:
      "Our videos are optimized for social media, email campaigns, your website, and digital ad platforms. You can select the social media platform you prefer, and we will deliver that sizing.",
  },
  {
    question: "Do I own the video?",
    answer:
      "Yes. Every video you produce with CampaignAI belongs to you. Full rights, no licensing restrictions. CampaignAI does not add a company watermark. Our process ensures the videos you produce are legally yours, because you make every creative decision along the way.",
  },
  {
    question: "I'm not a political candidate. Can I still use CampaignAI?",
    answer:
      "Absolutely. We serve nonprofits, advocacy organizations, ballot initiative campaigns, party committees, PACs, consultancies, and any organization with a story to tell.",
  },
  {
    question:
      "I'm a consultant. How does CampaignAI work for my clients?",
    answer:
      "CampaignAI is built to supercharge what you already do. Produce more ads, at higher quality, for less. Your clients get better output and you deliver more effectively. Volume pricing is available for consultancies and organizations supporting multiple campaigns.",
  },
  {
    question: "What do you do with my data?",
    answer:
      "Your campaign data is your property. We don't sell it, and no data is sent to language models for their training. We offer opt-in data collection only to improve our services and speed up video production for your campaign. Your strategy stays your strategy.",
  },
];

export function HIWFAQ() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <SectionLabel text="Questions We Hear" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-regal-navy mt-3">
              This is new and powerful technology. Every campaign has questions!
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <FAQAccordion items={faqs} />
        </ScrollReveal>
      </div>
    </section>
  );
}
