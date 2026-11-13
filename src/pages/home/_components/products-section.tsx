import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Calendar,
  MessageSquare,
  TrendingUp,
  Phone,
  Globe,
  Mail,
  CheckCircle2,
  Scale,
  CalendarCheck,
  RefreshCw,
  UserCheck,
} from "lucide-react";

export default function ProductsSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Our AI-powered products
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Powerful software built from the problems we solve for businesses
            every day.
          </p>
        </motion.div>

        {/* GrowthOS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm overflow-hidden">
            {/* Product glow */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
              {/* Left: Info */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-mono tracking-wide text-primary">
                    GrowthOS
                  </span>
                </div>
                <h3 className="font-sans text-2xl lg:text-3xl font-bold tracking-tight mb-4">
                  Your entire marketing operation. One intelligent platform.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Connect your social media accounts, manage multiple brands,
                  publish content, analyze performance and manage paid
                  advertising from one place.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: BarChart3, label: "Social Analytics" },
                    { icon: Calendar, label: "Content Calendar" },
                    { icon: MessageSquare, label: "AI Content Gen" },
                    { icon: TrendingUp, label: "Ad Management" },
                  ].map((feat) => (
                    <div
                      key={feat.label}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <feat.icon className="w-4 h-4 text-primary" />
                      {feat.label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/products/growthos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    Explore GrowthOS →
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border/50 text-foreground font-medium text-sm hover:bg-secondary/50 transition-all"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>

              {/* Right: Dashboard mockup */}
              <div className="relative">
                <GrowthOSDashboard />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Callifier */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm overflow-hidden">
            {/* Product glow */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 blur-[100px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
              {/* Left: Call interface */}
              <div className="relative order-2 lg:order-1">
                <CallAIInterface />
              </div>

              {/* Right: Info */}
              <div className="flex flex-col justify-center order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 w-fit mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs font-mono tracking-wide text-accent">
                    Callifier
                  </span>
                </div>
                <h3 className="font-sans text-2xl lg:text-3xl font-bold tracking-tight mb-4">
                  One number. Every channel, anywhere in the world.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Get virtual phone numbers in countries around the world,
                  reach customers by call, text, or email, and keep every
                  conversation recorded and tracked.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Globe, label: "Global Numbers" },
                    { icon: Phone, label: "Click-to-Call" },
                    { icon: Mail, label: "SMS & Email" },
                    { icon: CheckCircle2, label: "Call Recording" },
                  ].map((feat) => (
                    <div
                      key={feat.label}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <feat.icon className="w-4 h-4 text-accent" />
                      {feat.label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/products/callifier"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent to-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-accent/20 transition-all"
                  >
                    Explore Callifier →
                  </Link>
                  <Link
                    to="/products/callifier#pricing"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border/50 text-foreground font-medium text-sm hover:bg-secondary/50 transition-all"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CounselAI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm overflow-hidden">
            {/* Product glow */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
              {/* Left: Info */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-mono tracking-wide text-primary">
                    CounselAI
                  </span>
                </div>
                <h3 className="font-sans text-2xl lg:text-3xl font-bold tracking-tight mb-4">
                  AI intake that turns website visitors into booked
                  consultations.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  An AI assistant for law firms that talks to prospective
                  clients, qualifies their matter, books a consultation with the
                  right attorney and follows up automatically.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: MessageSquare, label: "24/7 Client Intake" },
                    { icon: UserCheck, label: "Matter Qualification" },
                    { icon: CalendarCheck, label: "Consultation Booking" },
                    { icon: RefreshCw, label: "Automatic Follow-Ups" },
                  ].map((feat) => (
                    <div
                      key={feat.label}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <feat.icon className="w-4 h-4 text-primary" />
                      {feat.label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/products/counselai"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    Explore CounselAI →
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border/50 text-foreground font-medium text-sm hover:bg-secondary/50 transition-all"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>

              {/* Right: Intake mockup */}
              <div className="relative">
                <CounselAIIntake />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GrowthOSDashboard() {
  return (
    <div className="relative rounded-2xl border border-border/50 bg-background/80 p-4 backdrop-blur-sm shadow-2xl shadow-primary/5">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
        </div>
        <span className="text-xs font-mono text-muted-foreground/50">
          GrowthOS Dashboard
        </span>
      </div>
      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "ROAS", value: "4.2x", change: "+12%" },
          { label: "Leads", value: "1,247", change: "+23%" },
          { label: "Engagement", value: "8.4%", change: "+5%" },
        ].map((metric) => (
          <div
            key={metric.label}
            className="p-3 rounded-xl bg-secondary/30 border border-border/30"
          >
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
              {metric.label}
            </p>
            <p className="text-lg font-bold mt-1">{metric.value}</p>
            <p className="text-[10px] text-green-400">{metric.change}</p>
          </div>
        ))}
      </div>
      {/* AI insight card */}
      <div className="p-3 rounded-xl bg-primary/5 border border-primary/15">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-medium text-primary uppercase tracking-wider">
            AI Insight
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {
            "Your Facebook campaign is outperforming the average CPA by 23%. Consider increasing budget allocation."
          }
        </p>
      </div>
    </div>
  );
}

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function CallAIInterface() {
  return (
    <div className="relative rounded-2xl border border-border/50 bg-background/80 p-6 backdrop-blur-sm shadow-2xl shadow-accent/5">
      {/* Call status */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-accent" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-background" />
          </div>
          <div>
            <p className="text-sm font-medium">Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">
              +1 (415) 555-0133
            </p>
          </div>
        </div>
        <div className="text-xs font-mono text-muted-foreground">02:34</div>
      </div>

      {/* Channel actions */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {[
          { icon: Phone, label: "Call" },
          { icon: MessageSquare, label: "Text" },
          { icon: Mail, label: "Email" },
        ].map((action) => (
          <div
            key={action.label}
            className="flex flex-col items-center gap-1 p-2.5 rounded-xl bg-secondary/30 border border-border/20"
          >
            <action.icon className="w-3.5 h-3.5 text-accent" />
            <span className="text-[10px] text-muted-foreground">
              {action.label}
            </span>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="space-y-2 p-3 rounded-xl bg-secondary/20 border border-border/30 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Outbound call — 2:34</span>
          <span className="text-[10px] text-muted-foreground/60">Now</span>
        </div>
        <div className="flex items-center justify-between">
          <span>SMS sent</span>
          <span className="text-[10px] text-muted-foreground/60">
            10 min ago
          </span>
        </div>
      </div>
    </div>
  );
}

function CounselAIIntake() {
  return (
    <div className="relative rounded-2xl border border-border/50 bg-background/80 p-5 backdrop-blur-sm shadow-2xl shadow-primary/5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
          <Scale className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium">New Client Intake</p>
          <p className="text-xs text-muted-foreground">Website chat</p>
        </div>
      </div>
      <div className="space-y-2.5 mb-5">
        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-secondary/40 border border-border/30 px-3.5 py-2.5 text-xs text-muted-foreground leading-relaxed">
          Hi, I can help you get started. What happened?
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary/15 px-3.5 py-2.5 text-xs text-foreground/80 leading-relaxed">
          {"I was hurt in a car accident and need advice on my claim."}
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-secondary/40 border border-border/30 px-3.5 py-2.5 text-xs text-muted-foreground leading-relaxed">
          An attorney can review this with you. Does Thursday at 10:30 AM
          work?
        </div>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/15">
        <div className="flex items-center gap-2 text-xs">
          <CheckCircle2 className="w-4 h-4 text-green-400" />
          <span className="font-medium">Matter qualified</span>
        </div>
        <span className="text-xs font-mono text-primary">
          Consultation booked
        </span>
      </div>
    </div>
  );
}
