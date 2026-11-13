import { motion } from "motion/react";
import { Link } from "react-router-dom";

type ServiceCTAProps = {
  heading?: string;
  description?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
};

export default function ServiceCTA({
  heading = "Ready to get started?",
  description = "Let's discuss how we can help your business grow with the right technology.",
  primaryCta = "Let's Talk",
  primaryHref = "/contact",
  secondaryCta = "Explore Products",
  secondaryHref = "/products",
}: ServiceCTAProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/6" />
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {heading}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryHref}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              {primaryCta}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              to={secondaryHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border/50 bg-secondary/30 text-foreground font-medium text-base hover:bg-secondary/50 transition-all"
            >
              {secondaryCta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
