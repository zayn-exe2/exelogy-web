import { motion } from "motion/react";
import PageLayout from "@/components/layout/page-layout.tsx";

const lastUpdated = "October 9, 2026";

const sections = [
  {
    title: "1. Agreement to Terms",
    body: [
      `These Terms of Service ("Terms") govern your access to and use of the Exelogy website, products (including GrowthOS, Callifier, and CounselAI), and related services (collectively, the "Services"), operated by Exelogy LLC ("Exelogy," "we," "our," or "us"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.`,
    ],
  },
  {
    title: "2. Eligibility & Accounts",
    body: [
      "You must be at least 18 years old, or the age of majority in your jurisdiction, to use the Services. If you create an account, you are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account. Notify us immediately of any unauthorized use.",
    ],
  },
  {
    title: "3. Use of the Services",
    body: [
      "You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not: reverse engineer, decompile, or attempt to extract the source code of our software, except as permitted by law; interfere with or disrupt the integrity or performance of the Services; use the Services to build a competing product; or use automated means to access the Services except through interfaces we provide.",
    ],
  },
  {
    title: "4. Subscriptions & Payment",
    body: [
      "Certain Services, including GrowthOS, Callifier, and CounselAI, are offered on a subscription basis with pricing described on the applicable product page. Fees are billed in advance on a recurring basis (monthly or annual, as selected at checkout) and are non-refundable once a billing period has started, except as required by law or expressly stated in your agreement with us. You may cancel your subscription at any time; cancellation stops future renewals but does not refund the current billing period. See our Refund Policy for full details. We may change our pricing with reasonable prior notice. Payments are processed securely by Paddle, our merchant of record.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      "The Services, including all software, text, graphics, logos, and other content (excluding content you provide), are owned by Exelogy or our licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to access and use the Services in accordance with these Terms.",
      `You retain ownership of any data or content you submit to the Services ("Customer Data"). You grant us a license to host, process, and use Customer Data solely to provide and improve the Services.`,
    ],
  },
  {
    title: "6. Confidentiality",
    body: [
      "Each party agrees to protect the other party's confidential information with the same degree of care it uses for its own confidential information, and not to disclose it to third parties except as necessary to perform its obligations or as required by law.",
    ],
  },
  {
    title: "7. Disclaimers",
    body: [
      `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.`,
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, Exelogy SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.",
    ],
  },
  {
    title: "9. Indemnification",
    body: [
      "You agree to indemnify and hold harmless Exelogy and its officers, employees, and agents from any claims, damages, or expenses arising from your use of the Services or violation of these Terms.",
    ],
  },
  {
    title: "10. Termination",
    body: [
      "We may suspend or terminate your access to the Services at any time if you violate these Terms. You may cancel your subscription at any time in accordance with your service plan. Upon termination, your right to use the Services will immediately cease.",
    ],
  },
  {
    title: "11. Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Delaware, without regard to its conflict of law principles, unless otherwise required by applicable local law.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    body: [
      `We may modify these Terms from time to time. If we make material changes, we will provide notice by updating the "Last updated" date below or through other reasonable means. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms.`,
    ],
  },
  {
    title: "13. Contact Us",
    body: [
      "If you have questions about these Terms, please contact us at legal@exelogy.com.",
    ],
  },
];

export default function TermsOfServicePage() {
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
              Terms of Service
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
