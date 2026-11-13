import { motion } from "motion/react";
import { Brain, Workflow, Code2, TrendingUp } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI Strategy",
    description:
      "Identify where AI can create measurable value inside a business.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Replace repetitive manual processes with intelligent workflows.",
  },
  {
    icon: Code2,
    title: "AI Software",
    description:
      "Build AI-powered web, mobile and enterprise applications.",
  },
  {
    icon: TrendingUp,
    title: "AI Growth",
    description:
      "Use AI to improve marketing, lead generation, customer engagement and conversion.",
  },
];

export default function AIFirstSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {"AI isn't the future of our business."}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {"It's how we build today."}
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We use AI across strategy, software development, marketing,
            automation, customer communication and business operations.
          </p>
        </motion.div>

        {/* Capability blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans text-lg font-semibold mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
