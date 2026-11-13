import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Phone,
  Globe,
  MessageCircle,
  Mail,
  Disc,
  BarChart3,
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
  import.meta.env.VITE_CALLIFIER_SALES_BOOKING_URL || "/contact";

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: 9.99,
    description: "For teams getting their first business number online.",
    features: [
      { text: "1 virtual phone number" },
      { text: "Outbound calling & click-to-call" },
      { text: "SMS messaging" },
      { text: "Call recording & tracking" },
      { text: "Basic analytics" },
      { text: "Numbers in multiple countries", included: false },
    ],
    cta: "Start Free Trial",
    href: "/contact",
  },
  {
    name: "Growth",
    price: 24.99,
    description: "For teams calling and messaging across markets.",
    features: [
      { text: "Everything in Starter" },
      { text: "Numbers in multiple countries" },
      { text: "Email messaging" },
      { text: "Advanced analytics & reporting" },
      { text: "Priority support" },
    ],
    cta: "Start Free Trial",
    href: "/contact",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For larger teams with custom volume and support needs.",
    features: [
      { text: "Unlimited numbers & countries" },
      { text: "Unlimited seats" },
      { text: "Dedicated onboarding & account manager" },
      { text: "Custom SLA & invoicing" },
    ],
    cta: "Talk to Sales",
    href: salesBookingUrl,
  },
];

const features = [
  {
    icon: Globe,
    title: "Global Virtual Numbers",
    description:
      "Get local phone numbers in countries around the world and reach customers from a number they recognize.",
  },
  {
    icon: Phone,
    title: "Click-to-Call",
    description:
      "Call leads and customers straight from your browser — no desk phone or extra hardware needed.",
  },
  {
    icon: MessageCircle,
    title: "SMS Messaging",
    description:
      "Text customers from your business number alongside your calls.",
  },
  {
    icon: Mail,
    title: "Email",
    description:
      "Reach contacts by email from the same place you call and text them.",
  },
  {
    icon: Disc,
    title: "Call Recording",
    description:
      "Every call is recorded and stored automatically so you can review or share it later.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Track call volume, duration, and outcomes across your whole team.",
  },
];

const faqs = [
  {
    q: "Can I get phone numbers in other countries?",
    a: "Yes. Callifier gives you local virtual numbers in countries around the world, so you can call and text with a local presence anywhere.",
  },
  {
    q: "Does Callifier record calls automatically?",
    a: "Yes. Every call is recorded and stored, so you can review or share it anytime from your dashboard.",
  },
  {
    q: "Can my team send texts and emails from the same number?",
    a: "Yes. SMS is available on every plan, and email messaging is included from the Growth plan up.",
  },
  {
    q: "What shows up in analytics?",
    a: "Call volume, duration, and outcomes across your team, so you always know what's happening on the phone.",
  },
];

export default function CallAIPage() {
  return (
    <PageLayout>
      <JsonLd
        id="callifier-product-jsonld"
        data={productSchema({
          name: "Callifier",
          description:
            "Get a virtual phone number in countries around the world, reach customers by call, text, or email, and keep every conversation recorded and tracked automatically.",
          url: "https://www.exelogy.com/products/callifier",
          plans,
        })}
      />
      <JsonLd id="callifier-faq-jsonld" data={faqSchema(faqs)} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-mono tracking-wide text-accent">
                  Callifier
                </span>
              </div>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Call, text, and email{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  from anywhere.
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Get a virtual phone number in countries around the world,
                reach customers by call, text, or email, and keep every
                conversation recorded and tracked automatically.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent to-primary text-primary-foreground font-medium shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book a Demo
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border/50 bg-secondary/30 font-medium hover:bg-secondary/50 transition-all"
                >
                  See Pricing
                </a>
              </div>
            </motion.div>

            {/* Call interface */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <CallInterfaceMockup />
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
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
              One number. Every channel.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-background to-primary/6" />
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-accent/8 blur-[100px]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Get your number and start reaching customers.
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-primary text-primary-foreground font-medium shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
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
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

function CallInterfaceMockup() {
  return (
    <div className="relative rounded-2xl border border-border/50 bg-background/90 p-6 backdrop-blur-sm shadow-2xl shadow-accent/5">
      {/* Call header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-background" />
          </div>
          <div>
            <p className="text-sm font-medium">Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">
              +1 (415) 555-0133 — Acme Corp
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-mono text-muted-foreground">02:34</p>
          <p className="text-[10px] text-red-400 flex items-center gap-1 justify-end">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Recording
          </p>
        </div>
      </div>

      {/* Channel actions */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { icon: Phone, label: "Call" },
          { icon: MessageCircle, label: "Text" },
          { icon: Mail, label: "Email" },
        ].map((action) => (
          <div
            key={action.label}
            className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-secondary/30 border border-border/20"
          >
            <action.icon className="w-4 h-4 text-accent" />
            <span className="text-[10px] text-muted-foreground">
              {action.label}
            </span>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="space-y-2.5 p-4 rounded-xl bg-secondary/20 border border-border/30">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
          Recent Activity
        </p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Outbound call — 2:34</span>
          <span className="text-[10px] text-muted-foreground/60">
            Just now
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">SMS sent</span>
          <span className="text-[10px] text-muted-foreground/60">
            10 min ago
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Inbound call — 1:12</span>
          <span className="text-[10px] text-muted-foreground/60">
            1 hr ago
          </span>
        </div>
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
