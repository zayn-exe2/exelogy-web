import {
  Brain,
  Bot,
  FileSearch,
  MessageSquare,
  Workflow,
  Database,
  Cpu,
  Lightbulb,
  Layers,
} from "lucide-react";
import PageLayout from "@/components/layout/page-layout.tsx";
import ServiceHero from "../_components/service-hero.tsx";
import ServiceFeatures from "../_components/service-features.tsx";
import ServiceProcess from "../_components/service-process.tsx";
import ServiceCTA from "../_components/service-cta.tsx";

const features = [
  {
    icon: Bot,
    title: "AI Agents & Assistants",
    description:
      "Autonomous AI agents that handle complex tasks, make decisions, and interact with your customers and systems 24/7.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Natural language interfaces for customer support, sales qualification, and internal knowledge retrieval.",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    description:
      "Extract, classify, and process information from documents, contracts, and unstructured data at scale.",
  },
  {
    icon: Workflow,
    title: "Intelligent Workflows",
    description:
      "AI-powered business processes that learn, adapt, and improve over time without manual intervention.",
  },
  {
    icon: Database,
    title: "RAG & Knowledge Systems",
    description:
      "Retrieval-augmented generation systems that give AI access to your proprietary data for accurate, contextual responses.",
  },
  {
    icon: Cpu,
    title: "LLM Integration",
    description:
      "Integrate large language models into existing applications with fine-tuning, prompt engineering, and guardrails.",
  },
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description:
      "Identify where AI creates measurable business value. Prioritize initiatives by impact and feasibility.",
  },
  {
    icon: Lightbulb,
    title: "Custom Model Development",
    description:
      "Train and deploy custom AI models tailored to your specific industry, data, and business requirements.",
  },
  {
    icon: Layers,
    title: "AI Infrastructure",
    description:
      "Scalable AI infrastructure with monitoring, versioning, and cost optimization built in from the start.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "AI Opportunity Assessment",
    description:
      "We analyze your business processes to identify where AI will generate the highest ROI.",
  },
  {
    num: "02",
    title: "Proof of Concept",
    description:
      "Build a working prototype quickly to validate the approach and demonstrate value.",
  },
  {
    num: "03",
    title: "Production Development",
    description:
      "Engineer a robust, scalable solution with proper testing, monitoring, and guardrails.",
  },
  {
    num: "04",
    title: "Deploy & Optimize",
    description:
      "Launch into production, monitor performance, and continuously improve accuracy and efficiency.",
  },
];

export default function AIServicesPage() {
  return (
    <PageLayout>
      <ServiceHero
        eyebrow="AI Solutions"
        title="Turn intelligence into your competitive advantage."
        description="From AI agents and document intelligence to custom LLM integrations, we build AI systems that solve real business problems and create measurable value."
        features={[
          "AI Agents",
          "LLM Integration",
          "Document AI",
          "RAG Systems",
          "Voice AI",
          "Custom Models",
        ]}
      />

      <ServiceFeatures
        heading="AI capabilities that drive business outcomes."
        subheading="We don't build AI for the sake of it. Every solution is designed around a clear business problem and measurable KPI."
        features={features}
      />

      <ServiceProcess
        heading="From concept to production AI."
        steps={processSteps}
      />

      <ServiceCTA
        heading="Ready to explore AI for your business?"
        description="We'll help you identify the highest-impact AI opportunity and build a working proof of concept."
        primaryCta="Start Your AI Strategy"
      />
    </PageLayout>
  );
}
