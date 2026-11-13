import { motion } from "motion/react";

const techCategories = [
  {
    label: "AI",
    items: ["OpenAI", "Gemini", "Claude", "LLMs", "AI Agents", "RAG", "Voice AI", "Ai Agent Swarm", "Glide"],
  },
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "PHP", "Node.js", "Laravel", "Python"],
  },
  {
    label: "Frontend",
    items: ["React", "Angular", "Next.js", "Nest.js", "Vue.js"],
  },
  {
    label: "Mobile",
    items: ["Kotlin", "Swift", "React Native", "Flutter"],
  },
  {
    label: "CMS",
    items: ["Shopify", "WordPress", "Wix", "Craft CMS"],
  },
  {
    label: "Cloud",
    items: ["AWS", "Azure", "Google Cloud"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Kubernetes", "CI/CD"],
  },
];

export default function TechnologySection() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Built with modern technology.
          </h2>
        </motion.div>

        {/* Tech constellation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`p-6 rounded-2xl border border-border/30 bg-card/20 ${i === 0
                ? "md:col-span-2 lg:col-span-2"
                : ""
                }`}
            >
              <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                {cat.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary/50 border border-border/30 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
