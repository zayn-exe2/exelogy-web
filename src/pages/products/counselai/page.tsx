import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Scale,
  MessagesSquare,
  CalendarCheck,
  UserCheck,
  RefreshCw,
  Code,
  Handshake,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/page-layout.tsx";
import PricingSection, {
  type PricingPlan,
} from "@/components/pricing-section.tsx";
import JsonLd from "@/components/JsonLd.tsx";
import { faqSchema, productSchema } from "@/lib/seo-schema.ts";

const appUrl = (
  import.meta.env.VITE_COUNSELAI_APP_URL ?? "https://counsel-ai.exelogy.com"
).replace(/\/$/, "");
// Enterprise "Book a call" — falls back to the contact page until a booking link is set.
const salesBookingUrl =
  import.meta.env.VITE_COUNSELAI_SALES_BOOKING_URL || "/contact";

// Keep in sync with the plan limits in the CounselAI app (domain/Plan.java).
const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: 4.99,
    description: "For solo practitioners getting started with AI intake.",
    features: [
      { text: "1,000 AI messages / month" },
      { text: "1 attorney" },
      { text: "Consultation booking & follow-ups" },
      { text: "CounselAI built-in AI" },
      { text: "Connect your own AI model", included: false },
      { text: "Custom widget colour", included: false },
    ],
    cta: "Start Free Trial",
    href: `${appUrl}/signup?plan=starter`,
  },
  {
    name: "Growth",
    price: 19.99,
    description: "For growing firms with multiple attorneys.",
    features: [
      { text: "3,000 AI messages / month" },
      { text: "5 attorneys included, then $5/month each" },
      { text: "Consultation booking & follow-ups" },
      { text: "CounselAI built-in AI" },
      { text: "Connect your own AI model" },
      { text: "Custom widget colour" },
    ],
    cta: "Start Free Trial",
    href: `${appUrl}/signup?plan=growth`,
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For larger firms with custom volume and support needs.",
    features: [
      { text: "Unlimited AI messages" },
      { text: "Unlimited attorneys" },
      { text: "Connect your own AI model" },
      { text: "Custom widget colour" },
      { text: "Dedicated onboarding & support" },
    ],
    cta: "Contact Sales",
    href: salesBookingUrl,
  },
];

const features = [
  {
    icon: MessagesSquare,
    title: "24/7 Client Intake",
    description:
      "Greet every website visitor, understand their legal issue in plain language, and capture the details your team needs — day or night.",
  },
  {
    icon: UserCheck,
    title: "Matter Qualification",
    description:
      "Ask the right questions for each practice area and turn conversations into structured, qualified matters.",
  },
  {
    icon: CalendarCheck,
    title: "Consultation Booking",
    description:
      "Offer real availability from your attorneys' working hours and book consultations directly.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Follow-Ups",
    description:
      "When a qualified prospect hasn't booked, CounselAI follows up within 24 hours so matters don't slip away.",
  },
  {
    icon: Handshake,
    title: "Human Handover",
    description:
      "Visitors can ask to talk to a person, and your staff can join the conversation live from the dashboard.",
  },
  {
    icon: Code,
    title: "One-Line Website Widget",
    description:
      "Add CounselAI to any law firm website with a single script tag, branded in your firm's colours.",
  },
];

const faqs = [
  {
    q: "Does CounselAI give legal advice?",
    a: "No. CounselAI handles intake: it gathers information, qualifies the matter and books a consultation. Legal advice always comes from your attorneys.",
  },
  {
    q: "Can our staff take over a conversation?",
    a: "Yes. Visitors can ask to talk to a person, and your team can reply directly from the dashboard.",
  },
  {
    q: "How does the free trial work?",
    a: "Every firm starts with a 7-day trial for one attorney, with Growth features and 500 AI messages. No card is needed.",
  },
  {
    q: "Can we add more attorneys?",
    a: "Starter includes one attorney. Growth includes five, and you can add more at $5 per attorney per month.",
  },
];

export default function CounselAIPage() {
  return (
    <PageLayout>
      <JsonLd
        id="counselai-product-jsonld"
        data={productSchema({
          name: "CounselAI",
          description:
            "An AI assistant for law firms that talks to prospective clients on your website, qualifies their matter, books a consultation with the right attorney and follows up automatically.",
          url: "https://www.exelogy.com/products/counselai",
          plans,
        })}
      />
      <JsonLd id="counselai-faq-jsonld" data={faqSchema(faqs)} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px]" />
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
                  CounselAI
                </span>
              </div>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                AI intake that turns visitors into{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  booked consultations.
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                An AI assistant for law firms that talks to prospective clients
                on your website, qualifies their matter, books a consultation
                with the right attorney and follows up automatically.
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
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border/50 bg-secondary/30 font-medium hover:bg-secondary/50 transition-all"
                >
                  See Pricing
                </a>
              </div>
            </motion.div>

            {/* Intake interface */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <IntakeMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <PricingSection
        title="Simple pricing for every firm."
        subtitle="Start with a 7-day free trial. No card required."
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
              From first message to booked consultation.
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
                className="group p-7 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <feature.icon className="w-5 h-5 text-accent" />
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
              How CounselAI works.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Add the widget",
                desc: "Place one script tag on your firm's website, styled in your brand colours.",
              },
              {
                num: "02",
                title: "Set up your firm",
                desc: "Add your attorneys, practice areas and working hours.",
              },
              {
                num: "03",
                title: "AI handles intake",
                desc: "CounselAI talks to prospects, qualifies matters and books consultations.",
              },
              {
                num: "04",
                title: "Your team takes over",
                desc: "Review matters, join conversations and act on follow-ups from the dashboard.",
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

      {/* FAQ */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
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
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Never miss a potential client again.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              See how CounselAI can handle intake for your firm, then launch on
              your website.
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
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

function IntakeMockup() {
  return (
    <div className="relative rounded-2xl border border-border/50 bg-background/90 p-6 backdrop-blur-sm shadow-2xl shadow-primary/5">
      {/* Chat header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-background" />
          </div>
          <div>
            <p className="text-sm font-medium">New Client Intake</p>
            <p className="text-xs text-muted-foreground">
              Website chat — 11:42 PM
            </p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-[10px] font-mono uppercase text-primary">
          AI
        </span>
      </div>

      {/* Transcript */}
      <div className="space-y-3 p-4 rounded-xl bg-secondary/20 border border-border/30 mb-5">
        <div className="flex items-start gap-3">
          <span className="text-[10px] font-mono text-primary uppercase shrink-0 mt-0.5 w-12">
            AI
          </span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {"Hi, I can help you get started. Can you tell me briefly what happened?"}
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[10px] font-mono text-foreground/60 uppercase shrink-0 mt-0.5 w-12">
            Visitor
          </span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {"I was injured in a car accident last week and the other driver's insurer keeps calling me."}
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[10px] font-mono text-primary uppercase shrink-0 mt-0.5 w-12">
            AI
          </span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {"I'm sorry to hear that. An attorney can review this with you. Would Thursday at 10:30 AM work for a consultation?"}
          </p>
        </div>
      </div>

      {/* Matter summary */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="min-w-0 p-2 sm:p-2.5 rounded-lg bg-secondary/30 border border-border/20 text-center">
          <p className="text-[9px] text-muted-foreground uppercase">
            Practice Area
          </p>
          <p className="text-xs font-medium text-primary mt-0.5">
            Personal Injury
          </p>
        </div>
        <div className="min-w-0 p-2 sm:p-2.5 rounded-lg bg-secondary/30 border border-border/20 text-center">
          <p className="text-[9px] text-muted-foreground uppercase">Matter</p>
          <p className="text-xs font-medium text-green-400 mt-0.5">Qualified</p>
        </div>
        <div className="min-w-0 p-2 sm:p-2.5 rounded-lg bg-secondary/30 border border-border/20 text-center">
          <p className="text-[9px] text-muted-foreground uppercase">
            Consultation
          </p>
          <p className="text-xs font-medium text-accent mt-0.5">Thu 10:30</p>
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
