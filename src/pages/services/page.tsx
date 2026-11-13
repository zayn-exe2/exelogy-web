import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Code2,
  Brain,
  Workflow,
  BarChart3,
  Cloud,
  Users,
  RefreshCw,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import PageLayout from "@/components/layout/page-layout.tsx";
import ServiceCTA from "./_components/service-cta.tsx";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description:
      "AI agents, AI assistants, intelligent workflows, LLM integrations, document intelligence and AI-powered applications that transform how businesses operate.",
    href: "/services/ai-solutions",
    tag: "Most Popular",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Web applications, mobile applications, enterprise software and scalable backend systems built for performance and growth.",
    href: "/services/software-development",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Connect systems, eliminate repetitive work and create automated business processes that scale without adding headcount.",
    href: "/services/automation",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "SEO, social media marketing, paid advertising, content strategy and AI-powered growth campaigns that generate measurable results.",
    href: "/services/digital-marketing",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description:
      "Modernize legacy processes and turn disconnected tools into unified digital systems that increase efficiency.",
    href: "/services",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Marketing",
    description:
      "Use AI to create, optimize and scale marketing campaigns and customer acquisition at a fraction of traditional cost.",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud & Integrations",
    description:
      "Cloud architecture, APIs, third-party integrations and scalable infrastructure designed for reliability.",
    href: "/services",
  },
  {
    icon: Users,
    title: "Dedicated Technology Teams",
    description:
      "Experienced engineers and specialists embedded in your business to accelerate product development.",
    href: "/services",
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/30 text-xs font-mono tracking-widest text-primary uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Services
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Technology built around{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                your business.
              </span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              From AI strategy to full-scale digital transformation, we build
              the intelligent systems businesses need to compete and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={service.href}
                  className="group flex flex-col h-full p-8 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    {service.tag && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-sans text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  {service.href !== "/services" && <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work (brief) */}
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
              Every engagement follows a clear path.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We move fast, communicate clearly, and deliver measurable
              outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "Understand your business, challenges, and goals.",
              },
              {
                num: "02",
                title: "Strategy",
                desc: "Identify the highest-impact technology approach.",
              },
              {
                num: "03",
                title: "Delivery",
                desc: "Design, build, test, and deploy the solution.",
              },
              {
                num: "04",
                title: "Growth",
                desc: "Measure, optimize, and scale what works.",
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

      <ServiceCTA
        heading="Have a project in mind?"
        description="Tell us about your challenge. We'll show you how technology and AI can solve it."
      />
    </PageLayout>
  );
}
