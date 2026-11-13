import { motion } from "motion/react";
import { Bot, Megaphone, Headphones, Search, Settings, ShieldCheck } from "lucide-react";

const agents = [
  { icon: Bot, label: "AI Sales Agent", color: "text-primary" },
  { icon: Megaphone, label: "AI Marketing Agent", color: "text-accent" },
  { icon: Headphones, label: "AI Receptionist", color: "text-chart-3" },
  { icon: ShieldCheck, label: "AI Support Agent", color: "text-chart-4" },
  { icon: Search, label: "AI Research Agent", color: "text-chart-5" },
  { icon: Settings, label: "AI Operations Agent", color: "text-primary" },
];

export default function AIWorkforceSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-mono text-primary tracking-wide uppercase">
              The AI Workforce
            </span>
            <h2 className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {"Your next employee doesn't need a desk."}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We help businesses identify repetitive processes and turn them
              into intelligent AI-powered workflows that run around the clock.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Build Your AI Strategy →
            </a>
          </motion.div>

          {/* Right: Agent ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative p-5 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300 text-center"
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-secondary/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <agent.icon className={`w-5 h-5 ${agent.color}`} />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {agent.label}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* Connection lines visual */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-primary/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
