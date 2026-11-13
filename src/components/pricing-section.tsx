import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, Minus } from "lucide-react";
import { useState } from "react";

export type PricingFeature = { text: string; included?: boolean };

export type PricingPlan = {
  name: string;
  /** Monthly USD price; omit for "Custom" (contact sales). */
  price?: number;
  description: string;
  features: PricingFeature[];
  cta: string;
  /** Absolute URL (product app / booking link) or internal route. */
  href: string;
  featured?: boolean;
};

type PricingSectionProps = {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  footnote?: string;
};

const isExternal = (href: string) => /^https?:\/\//.test(href);

type BillingCycle = "monthly" | "yearly";

/** First 2 months at 10% off, remaining 10 months at full price. */
function yearlyPrice(monthlyPrice: number) {
  return monthlyPrice * 2 * 0.9 + monthlyPrice * 10;
}

function formatPrice(n: number) {
  const rounded = Math.round(n * 100) / 100;
  return rounded.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(rounded) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

export default function PricingSection({
  title,
  subtitle,
  plans,
  footnote,
}: PricingSectionProps) {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1 rounded-full border border-border/50 bg-secondary/30">
            {(["monthly", "yearly"] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCycle(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  cycle === c
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
                {c === "yearly" && (
                  <span className="ml-1.5 text-[10px] font-semibold opacity-80">
                    10% off first 2 months
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.featured
                  ? "border-primary/50 bg-card/60 shadow-xl shadow-primary/10"
                  : "border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-[11px] font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-sans text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground min-h-10">
                {plan.description}
              </p>
              <div className="mt-6 mb-1 flex items-baseline gap-2">
                {plan.price !== undefined ? (
                  <>
                    <span className="font-sans text-4xl font-bold tracking-tight">
                      $
                      {cycle === "yearly"
                        ? formatPrice(yearlyPrice(plan.price))
                        : formatPrice(plan.price)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      / user / {cycle === "yearly" ? "year" : "month"}
                    </span>
                  </>
                ) : (
                  <span className="font-sans text-4xl font-bold tracking-tight">
                    Custom
                  </span>
                )}
              </div>
              <p className="mb-5 text-xs text-muted-foreground min-h-4">
                {plan.price !== undefined && cycle === "yearly"
                  ? "10% off your first 2 months, then full price."
                  : ""}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-start gap-3 text-sm ${
                      f.included === false
                        ? "text-muted-foreground/60"
                        : "text-muted-foreground"
                    }`}
                  >
                    {f.included === false ? (
                      <Minus className="w-4 h-4 mt-0.5 shrink-0" />
                    ) : (
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>

              <PlanButton plan={plan} />
            </motion.div>
          ))}
        </div>

        {footnote && (
          <p className="mt-10 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}

function PlanButton({ plan }: { plan: PricingPlan }) {
  const className = `inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-medium transition-all duration-300 ${
    plan.featured
      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      : "border border-border/50 bg-secondary/30 hover:bg-secondary/50"
  }`;
  return isExternal(plan.href) ? (
    <a
      href={plan.href}
      className={className}
      target={plan.price === undefined ? "_blank" : undefined}
      rel={plan.price === undefined ? "noopener noreferrer" : undefined}
    >
      {plan.cta}
    </a>
  ) : (
    <Link to={plan.href} className={className}>
      {plan.cta}
    </Link>
  );
}
