import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

const faqs = [
  {
    question: "How much does a video cost?",
    answer:
      "We work with every campaign individually to find a price point that matches your scale, your type of race, and your budget. A statewide race producing a full season of content has different needs and resources than a first-time school board candidate producing a single announcement video. We believe both deserve professional tools, and we price accordingly. Our commitment is to lower the barrier to professional campaign video for every campaign that needs it. Join the waitlist and our team will work with you to build pricing before you produce your first video.",
  },
  {
    question: "How long does it take to get my video?",
    answer:
      "We offer a 48-hour turnaround time to ensure our human editors can meet demand and guarantee quality. This process will speed up over the coming 2-3 months.",
  },
  {
    question: "Do I need any production experience?",
    answer:
      "None. What matters most is your story. We interview you to produce a script and develop a storyboard. If you have footage or graphics you want to use, great! We'll let you know when to bring those in. If you want to record part of the script on camera, great! We'll provide guidance to film exactly what you need. If you want to use stock footage or clearly marked b-roll, great! We'll help you find or produce what you need. We meet you where you are to tell your story.",
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
      "Yes. Every video is delivered in multiple formats (15-, 30-, or 60-seconds, 1080p, vertical/square/landscape) optimized for social media (Facebook, Instagram, X, TikTok, YouTube), email campaigns, your website, and digital ad platforms.",
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
