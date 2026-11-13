import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Calendar,
  Sparkles,
  Globe,
  Target,
  Palette,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/page-layout.tsx";
import PricingSection, {
  type PricingPlan,
} from "@/components/pricing-section.tsx";
import JsonLd from "@/components/JsonLd.tsx";
import { faqSchema, productSchema } from "@/lib/seo-schema.ts";

const salesBookingUrl =
  import.meta.env.VITE_GROWTHOS_SALES_BOOKING_URL || "/contact";

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: 149,
    description: "For teams getting their social and content in order.",
    features: [
      { text: "Multi-platform social publishing" },
      { text: "Content calendar & scheduling" },
      { text: "AI content generation" },
      { text: "Core analytics & reporting" },
      { text: "Google & Meta Ads management", included: false },
      { text: "Multi-brand workspaces", included: false },
    ],
    cta: "Start Free Trial",
    href: "/contact",
  },
  {
    name: "Growth",
    price: 349,
    description: "For teams managing paid and organic together.",
    features: [
      { text: "Everything in Starter" },
      { text: "Google & Meta Ads management" },
      { text: "Multi-brand / multi-client workspaces" },
      { text: "Advanced analytics & attribution" },
      { text: "Team collaboration & approvals" },
      { text: "Priority support" },
    ],
    cta: "Start Free Trial",
    href: "/contact",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For agencies and larger marketing teams.",
    features: [
      { text: "Unlimited brands & seats" },
      { text: "Custom integrations & API access" },
      { text: "Dedicated onboarding & account manager" },
      { text: "SLA-backed support" },
      { text: "Custom contract & invoicing" },
    ],
    cta: "Talk to Sales",
    href: salesBookingUrl,
  },
];

const features = [
  {
    icon: Globe,
    title: "Multi-Platform Management",
    description:
      "Connect and manage all your social media accounts from a single dashboard. Facebook, Instagram, LinkedIn, X, TikTok and more.",
  },
  {
    icon: Palette,
    title: "Multi-Brand Support",
    description:
      "Manage multiple brands, clients, or business units with separate workspaces, content calendars, and reporting.",
  },
  {
    icon: Calendar,
    title: "Content Calendar & Scheduling",
    description:
      "Visual content calendar with drag-and-drop scheduling, optimal time suggestions, and bulk publishing.",
  },
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description:
      "Generate platform-specific captions, hashtags, and content ideas powered by AI trained on your brand voice.",
  },
  {
    icon: BarChart3,
    title: "Social Analytics",
    description:
      "Real-time performance tracking across all platforms with engagement, reach, follower growth, and sentiment analysis.",
  },
  {
    icon: Target,
    title: "Google & Meta Ads Management",
    description:
      "Create, manage, and optimize Google Ads and Meta Ads campaigns with AI-driven budget allocation.",
  },
];

const integrations = [
  "Google Ads",
  "Meta Ads",
  "Instagram",
  "LinkedIn",
  "Shopify",
  "HubSpot",
];

const faqs = [
  {
    q: "How many social accounts can I connect?",
    a: "GrowthOS supports unlimited social account connections. Connect as many platforms and profiles as your business needs.",
  },
  {
    q: "Does GrowthOS manage ad campaigns?",
    a: "Yes. GrowthOS includes full Google Ads and Meta Ads management with AI-powered optimization, budget allocation, and performance reporting.",
  },
  {
    q: "Can I manage multiple brands or clients?",
    a: "Absolutely. GrowthOS supports multi-brand workspaces with separate content calendars, approval workflows, and reporting per brand.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, we offer a 7-day free trial with full access to all features. No credit card required to start.",
  },
];

export default function GrowthOSPage() {
  return (
    <PageLayout>
      <JsonLd
        id="growthos-product-jsonld"
        data={productSchema({
          name: "GrowthOS",
          description:
            "Connect your social media accounts, manage multiple brands, publish content, analyze performance, and manage paid advertising from one place.",
          url: "https://www.exelogy.com/products/growthos",
          plans,
        })}
      />
      <JsonLd id="growthos-faq-jsonld" data={faqSchema(faqs)} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-mono tracking-wide text-primary">
                  GrowthOS
                </span>
              </div>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Your entire marketing operation.{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  One intelligent platform.
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Connect your social media accounts, manage multiple brands,
                publish content, analyze performance, and manage paid advertising
                from one place.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book a Demo
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border/50 bg-secondary/30 font-medium hover:bg-secondary/50 transition-all"
                >
                  Start Free Trial
                </Link>
              </div>
            </motion.div>

            {/* Dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <DashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <PricingSection
        title="Simple pricing, per user."
        subtitle="Start with a 7-day free trial. No credit card required."
        plans={plans}
        footnote="Prices in USD, per user. Change plan or cancel anytime. No refunds once a billing period has started — see our Refund Policy for details. Payments are processed securely by Paddle, our merchant of record."
      />

      {/* Features */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
              Everything your marketing team needs.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From content creation to campaign optimization, all powered by AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-sans text-base font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
              Up and running in minutes.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                num: "01",
                title: "Connect your accounts",
                desc: "Link your social media profiles and ad accounts in a few clicks.",
              },
              {
                num: "02",
                title: "Plan and create",
                desc: "Use AI to generate content, schedule posts, and launch ad campaigns.",
              },
              {
                num: "03",
                title: "Grow and optimize",
                desc: "Track performance, follow AI recommendations, and scale what works.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-card border border-border/50 flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-primary">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-sans font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
              Connects with your existing stack.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Integrates with the platforms you already use.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {integrations.map((name) => (
              <span
                key={name}
                className="px-5 py-2.5 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/6" />
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Take control of your marketing.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join teams that use GrowthOS to manage, optimize, and scale their
              entire marketing operation from one platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Demo
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 bg-secondary/30 font-medium hover:bg-secondary/50 transition-all"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

function DashboardMockup() {
  return (
    <div className="relative rounded-2xl border border-border/50 bg-background/90 p-5 backdrop-blur-sm shadow-2xl shadow-primary/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
        </div>
        <span className="text-xs font-mono text-muted-foreground/50">
          dashboard.growthos.io
        </span>
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {[
          { label: "Total Reach", value: "284K", change: "+18%" },
          { label: "Engagement", value: "8.4%", change: "+5%" },
          { label: "ROAS", value: "4.2x", change: "+12%" },
          { label: "Leads", value: "1,247", change: "+23%" },
        ].map((m) => (
          <div
            key={m.label}
            className="p-3 rounded-xl bg-secondary/30 border border-border/30"
          >
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider">
              {m.label}
            </p>
            <p className="text-base font-bold mt-1">{m.value}</p>
            <p className="text-[9px] text-green-400">{m.change}</p>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="h-24 rounded-xl bg-secondary/20 border border-border/20 mb-4 flex items-end justify-between px-4 pb-3">
        {[35, 45, 30, 55, 65, 50, 70, 85, 60, 75, 90, 80].map((h, i) => (
          <div
            key={i}
            className="w-3 rounded-sm bg-gradient-to-t from-primary/40 to-primary/80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      {/* AI Insight */}
      <div className="p-3 rounded-xl bg-primary/5 border border-primary/15">
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-[9px] font-medium text-primary uppercase tracking-wider">
            AI Insight
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Your Instagram Reels are generating 3x more leads than static posts.
          Recommend shifting 40% of content budget to short-form video.
        </p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-card/30 transition-colors"
      >
        <span className="font-medium text-sm">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
