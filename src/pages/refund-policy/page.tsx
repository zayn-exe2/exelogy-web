import { motion } from "motion/react";
import PageLayout from "@/components/layout/page-layout.tsx";

const lastUpdated = "October 9, 2026";

const sections = [
  {
    title: "1. Overview",
    body: [
      `This Refund Policy applies to all paid subscriptions to Exelogy LLC ("Exelogy," "we," "our," or "us") products, including GrowthOS, Callifier, and CounselAI (collectively, the "Services"). By purchasing a subscription, you agree to the terms below.`,
    ],
  },
  {
    title: "2. No Refunds Once a Billing Period Has Started",
    body: [
      "Subscription fees are billed in advance for each billing period (monthly or annual, as selected at checkout) and are non-refundable once that billing period has started, except where required by applicable law.",
      "This includes the first payment on a new subscription, renewal payments, and any upgrade to a higher-priced plan taken during an active billing period.",
    ],
  },
  {
    title: "3. Cancel Anytime",
    body: [
      "You may cancel your subscription at any time from your account dashboard or by contacting us. Cancelling stops future renewals, but does not refund the current billing period — you will continue to have access to the Services through the end of the period you have already paid for.",
    ],
  },
  {
    title: "4. Free Trials",
    body: [
      "Where a free trial is offered, no payment is collected until the trial ends and you choose to continue on a paid plan. Once a paid billing period begins, Section 2 above applies.",
    ],
  },
  {
    title: "5. Billing Errors & Exceptions",
    body: [
      "If you believe you were charged in error (for example, a duplicate charge or a charge after you cancelled), contact us at billing@exelogy.com and we will investigate and correct genuine billing errors.",
      "Refunds required by applicable consumer protection law in your jurisdiction will be honored regardless of the policy above.",
    ],
  },
  {
    title: "6. Payment Processing",
    body: [
      "Payments are processed securely by Paddle, our merchant of record. Paddle handles billing, tax, and payment disputes on our behalf in accordance with their own terms.",
    ],
  },
  {
    title: "7. Enterprise & Custom Agreements",
    body: [
      "Custom Enterprise agreements are governed by the refund and cancellation terms set out in the applicable order form or contract, which take precedence over this policy where they conflict.",
    ],
  },
  {
    title: "8. Contact Us",
    body: [
      "If you have questions about this Refund Policy, contact us at billing@exelogy.com.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <PageLayout>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[130px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/30 text-xs font-mono tracking-widest text-primary uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Legal
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
              Refund Policy
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-12 rounded-3xl border border-border/50 bg-card/30 space-y-10"
          >
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-sans text-xl font-semibold tracking-tight mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
