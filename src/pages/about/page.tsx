import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Brain,
  Target,
  Lightbulb,
  Rocket,
  Shield,
  Globe,
} from "lucide-react";
import PageLayout from "@/components/layout/page-layout.tsx";

const values = [
  {
    icon: Brain,
    title: "Intelligence First",
    description:
      "We believe every system should be intelligent by default. AI isn't an add-on — it's the foundation of everything we build.",
  },
  {
    icon: Target,
    title: "Results Over Output",
    description:
      "We measure success by business outcomes, not deliverables. Every engagement is tied to metrics that matter.",
  },
  {
    icon: Lightbulb,
    title: "Radical Simplicity",
    description:
      "Complex problems deserve elegant solutions. We strip away unnecessary layers to build systems that are powerful yet simple to use.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "No black boxes. We explain how our AI works, share our progress openly, and build partnerships rooted in trust.",
  },
  {
    icon: Rocket,
    title: "Speed of Execution",
    description:
      "We move fast without cutting corners. Agile delivery, rapid prototyping, and continuous iteration get results faster.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Technology should serve all markets. We build solutions designed for scale across industries, languages, and geographies.",
  },
];

const team = [
  {
    name: "Haider Rizvi",
    role: "CEO & Co-Founder",
    bio: "Leads Exelogy with a builder's obsession for quality. A decade in the trenches of QA and delivery across fintech, ERP, and telecom taught him one thing: ship fast, but never ship broken.",
  },
  {
    name: "Zain Hussain",
    role: "CTO & Co-Founder",
    bio: "Engineering leader with decade building enterprise platforms. Expert in scalable AI infrastructure.",
  },
  {
    name: "Faraz Nadeem",
    role: "VP of Product",
    bio: "Decade turning ambiguous requirements into shipped products. As VP of Product, he owns the full lifecycle — from stakeholder discovery to UAT to production — across fintech and enterprise platforms, translating business needs into roadmaps engineering can actually execute.",
  },
  // {
  //   name: "Zara Malik",
  //   role: "VP of Product",
  //   bio: "Product strategist who has shipped AI products used by millions. Obsessed with UX that drives adoption.",
  // },
  {
    name: "Salman Hasan",
    role: "Head of Engineering",
    bio: "Full-stack architect specializing in real-time systems. Enjoys solving complexities through tech and delivers ease to the users.",
  },
  // {
  //   name: "Mehdi Hussain",
  //   role: "Head of Growth",
  //   bio: "Digital marketing veteran with deep expertise in performance marketing, SEO, and growth strategy.",
  // },
];

const milestones = [
  {
    title: "Founded",
    description:
      "Exelogy started as a small AI consultancy, helping local businesses automate manual processes.",
  },
  {
    title: "First Enterprise Client",
    description:
      "Landed our first enterprise engagement building custom ML models for a logistics company.",
  },
  {
    title: "Product Launch",
    description:
      "Launched GrowthOS as our first SaaS product, born from patterns we saw across client projects.",
  },
  {
    title: "Callifier Goes Live",
    description:
      "Launched Callifier, giving businesses virtual phone numbers and calling, texting, and email from one place.",
  },
  {
    title: "Scale & Recognition",
    description:
      "Growing into a full-service AI company, with our sights set on being named a top AI startup to watch.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[130px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px]" />
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
              About Us
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {"We build intelligent systems that help businesses "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                grow.
              </span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {
                "Exelogy is an AI-first technology company. We combine deep artificial intelligence expertise with product thinking and growth strategy to help businesses compete in the age of AI."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/8 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Our story
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Exelogy was founded with a simple belief: AI should be
                  accessible to every business, not just tech giants. We saw
                  companies struggling to adopt AI — overwhelmed by complexity,
                  burned by failed implementations, and frustrated by solutions
                  that never delivered on their promise.
                </p>
                <p>
                  We started as a small team of AI researchers and engineers who
                  wanted to bridge the gap between cutting-edge AI research and
                  real business applications. Rather than building technology for
                  its own sake, we focused on solving actual problems — helping
                  businesses automate, predict, and grow.
                </p>
                <p>
                  Today, we operate as both a services company and a product
                  company. Our services arm builds custom AI solutions for
                  enterprises. Our products — GrowthOS and Callifier — package the
                  patterns we see across industries into powerful, accessible SaaS
                  platforms.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-border/40 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-sans font-semibold mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              What we stand for
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide every decision, every project, and every
              product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group p-7 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/8 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
              Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experienced builders, researchers, and operators who have shipped
              AI at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-7 rounded-2xl border border-border/50 bg-card/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                  <span className="text-lg font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-sans font-semibold">{member.name}</h3>
                <p className="text-sm text-primary/80 mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/6" />
        <motion.div
          animate={{ x: [0, 25, -15, 0], y: [0, -15, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Ready to build something intelligent?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Whether you need a custom AI solution or want to explore our products, let's start a conversation."}
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
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
