import { motion } from "motion/react";
import { Brain, Target, Layers, Handshake } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "AI-Native Thinking",
    description:
      "We look for opportunities to use AI before defaulting to manual processes.",
  },
  {
    icon: Target,
    title: "Business First",
    description:
      "Technology exists to solve business problems, not simply to showcase technology.",
  },
  {
    icon: Layers,
    title: "Product Mindset",
    description:
      "We build systems that are scalable, maintainable and designed for real users.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. We continuously improve and evolve the technology.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Why businesses choose us
          </h2>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl border border-border/50 bg-card/30 group hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
