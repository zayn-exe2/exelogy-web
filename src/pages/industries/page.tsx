import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, HeartPulse, Landmark, ShoppingBag, BriefcaseBusiness, Factory, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/layout/page-layout.tsx";

const industries = [
  { icon: ShoppingBag, title: "Retail & E-commerce", description: "Create connected commerce experiences, automate customer journeys and turn customer data into smarter growth decisions.", capabilities: ["Commerce platforms", "AI customer support", "Marketing automation", "Analytics & personalization"] },
  { icon: HeartPulse, title: "Healthcare", description: "Build secure, user-friendly digital experiences that simplify scheduling, communication and operational workflows.", capabilities: ["Patient portals", "Scheduling workflows", "AI assistants", "Operational automation"] },
  { icon: Landmark, title: "Financial Services", description: "Modernize customer and internal workflows with secure applications, intelligent automation and data-driven experiences.", capabilities: ["Workflow automation", "Customer portals", "Data dashboards", "Secure integrations"] },
  { icon: Building2, title: "Real Estate", description: "Move leads from enquiry to appointment faster with AI-assisted qualification, follow-up and integrated sales workflows.", capabilities: ["AI lead qualification", "Voice follow-up", "CRM automation", "Property platforms"] },
  { icon: BriefcaseBusiness, title: "Professional Services", description: "Give teams better tools to manage clients, knowledge, reporting and repetitive operational work.", capabilities: ["Client portals", "Knowledge assistants", "CRM workflows", "Reporting automation"] },
  { icon: Factory, title: "Operations & Enterprise", description: "Replace fragmented processes with scalable software, connected systems and automation built around how your teams work.", capabilities: ["Custom enterprise software", "System integrations", "Process automation", "Operational intelligence"] },
];

export default function IndustriesPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute top-44 -left-28 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}} className="max-w-4xl">
            <span className="eyebrow">Industries</span>
            <h1 className="mt-5 font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
              Technology built around <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">how your industry works.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg lg:text-xl leading-relaxed text-muted-foreground">
              We combine software engineering, AI and automation with an understanding of real operating workflows — then design the solution around the business problem, not a generic template.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Discuss your use case <ArrowRight className="size-4" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow">Where we help</span>
            <h2 className="dark-heading mt-4">Industry context. Product thinking. Measurable outcomes.</h2>
            <p className="mt-5 text-lg text-muted-foreground">Our teams focus on the workflows, customers and constraints that make each sector different while using a consistent engineering standard underneath.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(({icon: Icon,title,description,capabilities},i) => (
              <motion.article key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="group rounded-2xl border border-border bg-background p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" /></div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                <div className="mt-6 space-y-2.5 border-t border-border/70 pt-5">
                  {capabilities.map(item => <div key={item} className="flex items-center gap-2.5 text-sm"><CheckCircle2 className="size-4 text-primary" /><span>{item}</span></div>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <span className="eyebrow">Our approach</span>
              <h2 className="dark-heading mt-4">We don't force the same solution onto every business.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">We start by mapping the workflow and identifying the highest-value opportunity. From there, we choose the right mix of software, AI, integrations and automation.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[['01','Understand','Map users, processes, constraints and business goals.'],['02','Prioritize','Identify where technology can create the most useful impact.'],['03','Build','Design and engineer a solution that fits the operating model.'],['04','Improve','Measure adoption and outcomes, then continuously optimize.']].map(([n,t,d]) => <div key={n} className="rounded-2xl border border-border bg-card p-6"><span className="text-xs font-mono text-primary">{n}</span><h3 className="mt-3 font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="eyebrow">Your industry isn't listed?</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">If there is a workflow to improve, we can explore it with you.</h2>
              <p className="mt-5 text-muted-foreground text-lg">Tell us how your business operates and where the friction is. We'll help identify whether custom software, AI or automation is the right answer.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Start a conversation <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
