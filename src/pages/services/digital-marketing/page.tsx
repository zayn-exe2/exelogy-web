import {
  Search,
  Share2,
  BarChart3,
  Target,
  Pencil,
  TrendingUp,
  Megaphone,
  Mail,
  Sparkles,
} from "lucide-react";
import PageLayout from "@/components/layout/page-layout.tsx";
import ServiceHero from "../_components/service-hero.tsx";
import ServiceFeatures from "../_components/service-features.tsx";
import ServiceProcess from "../_components/service-process.tsx";
import ServiceCTA from "../_components/service-cta.tsx";

const features = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Technical SEO, content strategy, and link building that drives qualified organic traffic to your business.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Strategy, content creation, community management, and paid social campaigns across all major platforms.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description:
      "Google Ads, Meta Ads, LinkedIn Ads, and programmatic campaigns optimized for cost-per-acquisition.",
  },
  {
    icon: Pencil,
    title: "Content Marketing",
    description:
      "Strategic content creation including blogs, whitepapers, video, and email sequences that build authority and generate leads.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Campaigns",
    description:
      "Use AI for content generation, audience targeting, creative optimization, and campaign performance prediction.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Automated email sequences, newsletter strategy, lead nurturing, and lifecycle marketing campaigns.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Attribution",
    description:
      "Full-funnel analytics, multi-touch attribution, and custom dashboards that show exactly what drives revenue.",
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description:
      "Positioning, messaging, visual identity, and go-to-market strategies that differentiate your business.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description:
      "A/B testing, landing page optimization, and funnel analysis to maximize the value of existing traffic.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit & Research",
    description:
      "Analyze your current marketing, competitors, audience, and market to identify gaps and opportunities.",
  },
  {
    num: "02",
    title: "Strategy & Planning",
    description:
      "Develop a data-driven marketing plan with clear KPIs, channel mix, and budget allocation.",
  },
  {
    num: "03",
    title: "Execute & Create",
    description:
      "Launch campaigns, create content, and manage channels with consistent quality and messaging.",
  },
  {
    num: "04",
    title: "Optimize & Scale",
    description:
      "Continuously test, analyze results, and scale what works while cutting what doesn't.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <PageLayout>
      <ServiceHero
        eyebrow="Digital Marketing"
        title="Connect your marketing. Automate your growth."
        description="AI-powered digital marketing that generates leads, builds brand authority, and delivers measurable ROI across every channel."
        features={[
          "SEO",
          "Paid Ads",
          "Social Media",
          "Content",
          "Email",
          "AI-Powered",
        ]}
      />

      <ServiceFeatures
        heading="Marketing that compounds over time."
        subheading="We build marketing systems, not one-off campaigns. Every action compounds into long-term growth."
        features={features}
      />

      <ServiceProcess
        heading="From scattered efforts to growth engine."
        steps={processSteps}
      />

      <ServiceCTA
        heading="Ready to grow with precision?"
        description="Let's build a marketing strategy that uses AI and data to generate leads and revenue predictably."
        primaryCta="Get a Marketing Strategy"
        secondaryCta="Explore GrowthOS"
        secondaryHref="/products/growthos"
      />
    </PageLayout>
  );
}
