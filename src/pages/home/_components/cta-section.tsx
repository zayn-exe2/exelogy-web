import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 20, -25, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-accent/8 blur-[100px]"
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
            {"Ready to build what's next?"}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Whether you're looking to build a new product, automate your business or scale your marketing, let's turn the idea into something real."}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              {"Let's Talk"}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm text-foreground font-medium text-base hover:bg-secondary/50 hover:border-border transition-all duration-300"
            >
              Explore Our Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
