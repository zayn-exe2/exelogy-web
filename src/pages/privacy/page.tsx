import { motion } from "motion/react";
import PageLayout from "@/components/layout/page-layout.tsx";

const lastUpdated = "October 9, 2026";

const sections = [
  {
    title: "1. Introduction",
    body: [
      `Exelogy LLC ("Exelogy," "we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have, when you use our website, products (including GrowthOS, Callifier, and CounselAI), and services (collectively, the "Services").`,
      "By using our Services, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We collect information you provide directly to us, such as when you create an account, fill out a contact or demo request form, subscribe to our newsletter, or apply for a job. This may include your name, email address, phone number, company name, and any message content you submit.",
      "We also automatically collect certain information when you use our Services, including device information, IP address, browser type, pages viewed, and usage patterns, typically through cookies and similar tracking technologies.",
      "If you use GrowthOS or Callifier, we may additionally process data you input into those products in order to provide the underlying functionality, subject to any separate data processing terms in your service agreement.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "We use the information we collect to: provide, maintain, and improve our Services; respond to inquiries and provide customer support; send administrative information, product updates, and marketing communications (which you may opt out of at any time); monitor and analyze usage trends; detect, investigate, and prevent fraudulent or unauthorized activity; and comply with legal obligations.",
    ],
  },
  {
    title: "4. How We Share Your Information",
    body: [
      "We do not sell your personal information. We may share your information with: service providers who perform services on our behalf (such as hosting, analytics, and email delivery); professional advisors such as auditors and legal counsel; in connection with a merger, acquisition, or sale of assets; and where required to comply with applicable law, regulation, or legal process.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law. When we no longer need personal information, we securely delete or anonymize it.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We implement administrative, technical, and physical safeguards designed to protect the confidentiality, integrity, and availability of your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Your Rights and Choices",
    body: [
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal information, and to object to or restrict certain processing. You can exercise these rights by contacting us at privacy@exelogy.com.",
      "You may opt out of marketing emails at any time by using the unsubscribe link included in those emails. You may also control cookies through your browser settings.",
    ],
  },
  {
    title: "8. International Data Transfers",
    body: [
      "We are a global, remote-first company, and your information may be transferred to, stored, and processed in countries other than your own. Where required, we rely on appropriate legal mechanisms to safeguard such transfers.",
    ],
  },
  {
    title: "9. Children's Privacy",
    body: [
      "Our Services are not directed to individuals under the age of 16, and we do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: [
      `We may update this Privacy Policy from time to time. If we make material changes, we will notify you by posting the updated policy on this page and updating the "Last updated" date below.`,
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "If you have questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@exelogy.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[130px]" />
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
              Privacy Policy
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
