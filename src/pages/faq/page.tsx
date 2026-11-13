import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/page-layout.tsx";
import JsonLd from "@/components/JsonLd.tsx";
import { faqSchema } from "@/lib/seo-schema.ts";

const faqs = [
  {
    q: "What does Exelogy do?",
    a: "Exelogy is an AI-first technology company. We build custom AI solutions and software for enterprises, and we also build our own SaaS products — GrowthOS, Callifier and CounselAI.",
  },
  {
    q: "What products does Exelogy offer?",
    a: "GrowthOS for social media and marketing management, Callifier for global business calling, SMS and email, and CounselAI for AI-powered client intake for law firms.",
  },
  {
    q: "Do your products offer a free trial?",
    a: "Yes. GrowthOS, Callifier and CounselAI all offer a 7-day free trial so you can try the product before you pay.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel anytime from your dashboard. We don't offer refunds once a billing period has started — see our Refund Policy for details.",
  },
  {
    q: "Do you build custom AI or software solutions too?",
    a: "Yes. Alongside our products, our services team builds custom AI solutions, software and automation for businesses. Use the contact form to start that conversation.",
  },
  {
    q: "How quickly will I hear back?",
    a: "We typically respond to enquiries within one business day.",
  },
];

export default function FAQPage() {
  return (
    <PageLayout>
      <JsonLd id="faq-jsonld" data={faqSchema(faqs)} />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[130px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/30 text-xs font-mono tracking-widest text-primary uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              FAQ
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
              Frequently asked questions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Common questions about Exelogy and our products. Can't find
              what you're looking for?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Get in touch
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
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
