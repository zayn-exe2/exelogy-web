import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

type ServiceFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ServiceFeaturesProps = {
  heading: string;
  subheading?: string;
  features: ServiceFeature[];
  columns?: 2 | 3;
};

export default function ServiceFeatures({
  heading,
  subheading,
  features,
  columns = 3,
}: ServiceFeaturesProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-lg text-muted-foreground">{subheading}</p>
          )}
        </motion.div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            columns === 3 ? "lg:grid-cols-3" : ""
          } gap-6`}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-sans text-lg font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
