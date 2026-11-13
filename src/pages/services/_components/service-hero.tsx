import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  features?: string[];
};

export default function ServiceHero({
  eyebrow,
  title,
  description,
  features,
}: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm text-xs font-mono tracking-widest text-primary uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
            {title}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
          {features && (
            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 text-sm rounded-full bg-secondary/40 border border-border/30 text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
