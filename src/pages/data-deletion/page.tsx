import { motion } from "motion/react";
import PageLayout from "@/components/layout/page-layout.tsx";

const lastUpdated = "September 2, 2026";

const sections = [
  {
    title: "1. Overview",
    body: [
      `Exelogy ("we," "our," or "us") allows you to request the deletion of your personal data from our systems at any time. This page explains what data we hold, how to request deletion, and how we process that request, in compliance with Meta Platform Terms and applicable data protection law.`,
      "This applies to data collected through our website, products (including GrowthOS and Callifier), and any integrations connected via Meta Platforms (such as Facebook or Instagram Login), where applicable.",
    ],
  },
  {
    title: "2. What Data We Delete",
    body: [
      "Upon a verified deletion request, we permanently delete or irreversibly anonymize the personal data associated with your account, including your name, email address, phone number, account credentials, and any content or usage data tied to your identity.",
      "Data we are required to retain for legal, tax, accounting, security, or fraud-prevention purposes will be securely retained only for as long as legally required, and deleted thereafter.",
    ],
  },
  {
    title: "3. How to Request Deletion",
    body: [
      "You can request deletion of your data through any of the following methods:",
    ],
    list: [
      "Email us at privacy@exelogy.com with the subject line \"Data Deletion Request\" from the email address associated with your account.",
      "If you signed in or connected via Facebook or Instagram Login, go to your Facebook Settings → Apps and Websites, remove Exelogy from your list of connected apps, and additionally email privacy@exelogy.com to confirm full deletion from our systems.",
      "Use the account deletion option within GrowthOS or Callifier settings, if you have an active account.",
    ],
  },
  {
    title: "4. Verification & Processing Time",
    body: [
      "To protect your data from unauthorized deletion requests, we may ask you to verify your identity (for example, by confirming the email address on file) before processing your request.",
      "We will confirm receipt of your request within 5 business days and complete deletion within 30 days, except where we are legally required to retain certain records for a longer period.",
    ],
  },
  {
    title: "5. Confirmation",
    body: [
      "Once deletion is complete, we will send a confirmation email to the address associated with your request.",
    ],
  },
  {
    title: "6. Contact Us",
    body: [
      "If you have questions about this Data Deletion Policy or the status of your request, contact us at privacy@exelogy.com.",
    ],
  },
];

export default function DataDeletionPage() {
  return (
    <PageLayout>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[130px]" />
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
              User Data Deletion
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
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
