import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/page-layout.tsx";

const products = [
  {
    name: "GrowthOS",
    tagline: "Your entire marketing operation. One intelligent platform.",
    description:
      "Connect social media accounts, manage multiple brands, publish content, analyze performance, and manage paid advertising — all from one AI-powered dashboard.",
    href: "/products/growthos",
    color: "primary" as const,
    capabilities: [
      "Social Media Management",
      "Content Calendar",
      "AI Content Generation",
      "Google & Meta Ads",
      "Analytics & Reporting",
      "Team Collaboration",
    ],
  },
  {
    name: "Callifier",
    tagline: "Call, text, and email — from anywhere.",
    description:
      "Get virtual phone numbers in countries around the world, reach customers by call, text, or email, and keep every conversation recorded and tracked automatically.",
    href: "/products/callifier",
    color: "accent" as const,
    capabilities: [
      "Global Virtual Numbers",
      "Click-to-Call",
      "SMS & Email",
      "Call Recording",
      "Analytics & Reporting",
    ],
  },
  {
    name: "CounselAI",
    tagline: "AI intake that turns visitors into booked consultations.",
    description:
      "An AI assistant for law firms that talks to prospective clients on your website, qualifies their matter, books consultations with the right attorney and follows up automatically.",
    href: "/products/counselai",
    color: "primary" as const,
    capabilities: [
      "24/7 Client Intake",
      "Matter Qualification",
      "Consultation Booking",
      "Automatic Follow-Ups",
      "Human Handover",
      "Firm Dashboard",
    ],
  },
];

export default function ProductsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/30 text-xs font-mono tracking-widest text-primary uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Products
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              AI-powered products for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                modern businesses.
              </span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Powerful software built from the problems we solve for businesses
              every day. Ready to use. Designed to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link
                to={product.href}
                className="group block rounded-3xl border border-border/50 bg-gradient-to-br from-card/60 to-card/30 hover:border-primary/20 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${
                        product.color === "primary"
                          ? "bg-primary/10 border-primary/20"
                          : "bg-accent/10 border-accent/20"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          product.color === "primary"
                            ? "bg-primary"
                            : "bg-accent"
                        }`}
                      />
                      <span
                        className={`text-xs font-mono tracking-wide ${
                          product.color === "primary"
                            ? "text-primary"
                            : "text-accent"
                        }`}
                      >
                        {product.name}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-sans text-2xl lg:text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                    {product.tagline}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1.5 text-xs rounded-full bg-secondary/40 border border-border/30 text-muted-foreground"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Explore {product.name}{" "}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/6" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Need something custom?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              {"If our products don't fit your exact needs, we build custom AI solutions tailored to your business."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                {"Let's Talk"}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 bg-secondary/30 font-medium hover:bg-secondary/50 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
