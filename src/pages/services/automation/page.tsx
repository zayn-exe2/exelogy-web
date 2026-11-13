import {
  Workflow,
  Repeat,
  Link2,
  Mail,
  FileText,
  BellRing,
  Database,
  BarChart3,
  Clock,
} from "lucide-react";
import PageLayout from "@/components/layout/page-layout.tsx";
import ServiceHero from "../_components/service-hero.tsx";
import ServiceFeatures from "../_components/service-features.tsx";
import ServiceProcess from "../_components/service-process.tsx";
import ServiceCTA from "../_components/service-cta.tsx";

const features = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Transform multi-step manual processes into automated workflows that run reliably without human intervention.",
  },
  {
    icon: Link2,
    title: "System Integration",
    description:
      "Connect your CRM, ERP, accounting, marketing, and communication tools into a unified, automated ecosystem.",
  },
  {
    icon: Mail,
    title: "Email & Communication Automation",
    description:
      "Automated customer communications, internal notifications, and follow-up sequences triggered by business events.",
  },
  {
    icon: FileText,
    title: "Document Processing",
    description:
      "Automate invoice processing, contract generation, report creation, and data extraction from documents.",
  },
  {
    icon: Repeat,
    title: "Repetitive Task Elimination",
    description:
      "Identify and automate repetitive data entry, file management, and operational tasks that consume team hours.",
  },
  {
    icon: BellRing,
    title: "Smart Notifications & Alerts",
    description:
      "Intelligent alerting systems that notify the right people at the right time based on business conditions.",
  },
  {
    icon: Database,
    title: "Data Synchronization",
    description:
      "Keep data consistent across all systems automatically with real-time sync and conflict resolution.",
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description:
      "Generate and distribute business reports, dashboards, and KPI updates on schedule without manual effort.",
  },
  {
    icon: Clock,
    title: "Scheduling & Orchestration",
    description:
      "Time-based triggers, event-driven workflows, and complex process orchestration across multiple systems.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Process Audit",
    description:
      "Map your current workflows and identify automation opportunities ranked by time savings and business impact.",
  },
  {
    num: "02",
    title: "Solution Design",
    description:
      "Architect the automation solution, select tools, and define integration points between systems.",
  },
  {
    num: "03",
    title: "Build & Test",
    description:
      "Develop the automations with comprehensive error handling, fallbacks, and testing.",
  },
  {
    num: "04",
    title: "Monitor & Expand",
    description:
      "Deploy with monitoring, track time saved, and continuously identify new automation opportunities.",
  },
];

export default function AutomationPage() {
  return (
    <PageLayout>
      <ServiceHero
        eyebrow="Automation"
        title="Turn repetitive work into intelligent workflows."
        description="Connect systems, eliminate manual processes, and build automated operations that scale your business without proportionally scaling your team."
        features={[
          "Workflow Automation",
          "System Integration",
          "Process Optimization",
          "AI-Powered",
          "24/7 Operations",
        ]}
      />

      <ServiceFeatures
        heading="Automation that creates capacity."
        subheading="Every hour your team spends on repetitive tasks is an hour not spent on growth. We fix that."
        features={features}
      />

      <ServiceProcess
        heading="From manual process to automated system."
        steps={processSteps}
      />

      <ServiceCTA
        heading="How much time is your team wasting?"
        description="Let's audit your operations and show you exactly where automation can free up capacity and reduce errors."
        primaryCta="Request a Process Audit"
      />
    </PageLayout>
  );
}
