import { motion } from "motion/react";

type ProcessStep = {
  num: string;
  title: string;
  description: string;
};

type ServiceProcessProps = {
  heading?: string;
  steps: ProcessStep[];
};

export default function ServiceProcess({
  heading = "Our approach",
  steps,
}: ServiceProcessProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-16"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {step.num}
                </span>
                <div className="h-px flex-1 bg-border/30" />
              </div>
              <h3 className="font-sans text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
