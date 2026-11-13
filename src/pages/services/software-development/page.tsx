import {
  Globe,
  Smartphone,
  Server,
  Shield,
  Zap,
  Code2,
  GitBranch,
  Blocks,
  Monitor,
} from "lucide-react";
import PageLayout from "@/components/layout/page-layout.tsx";
import ServiceHero from "../_components/service-hero.tsx";
import ServiceFeatures from "../_components/service-features.tsx";
import ServiceProcess from "../_components/service-process.tsx";
import ServiceCTA from "../_components/service-cta.tsx";

const features = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Modern, responsive web applications built with React, Angular, or Next.js for performance and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with React Native or Flutter that deliver native-quality experiences.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Scalable APIs and microservices built with Node.js, Java Spring Boot, or Laravel for enterprise-grade reliability.",
  },
  {
    icon: Blocks,
    title: "Enterprise Software",
    description:
      "Complex business systems including ERPs, CRMs, and internal tools tailored to your exact operational needs.",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description:
      "Every system is built with authentication, authorization, encryption, and compliance from the ground up.",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Sub-second load times, optimized databases, and intelligent caching for applications that never slow down.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Automated testing, deployment pipelines, and infrastructure-as-code for fast, reliable releases.",
  },
  {
    icon: Code2,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for extensibility, third-party integrations, and developer experience.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    description:
      "Real-time performance monitoring, error tracking, and alerting so issues are caught before users notice.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Requirements & Architecture",
    description:
      "Define functional requirements, system architecture, and technical approach with your team.",
  },
  {
    num: "02",
    title: "Design & Prototype",
    description:
      "Create UI/UX designs and interactive prototypes for validation before development begins.",
  },
  {
    num: "03",
    title: "Iterative Development",
    description:
      "Build in sprints with regular demos, feedback loops, and continuous integration.",
  },
  {
    num: "04",
    title: "Launch & Support",
    description:
      "Deploy to production with monitoring, documentation, and ongoing maintenance support.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <PageLayout>
      <ServiceHero
        eyebrow="Software Development"
        title="Software that works as hard as your business does."
        description="Custom web, mobile, and enterprise applications engineered for performance, security, and scale. Built by teams who understand both technology and business."
        features={[
          "Web Apps",
          "Mobile Apps",
          "Enterprise Software",
          "APIs",
          "Cloud-Native",
          "Microservices",
        ]}
      />

      <ServiceFeatures
        heading="Full-stack engineering for modern businesses."
        subheading="From frontend interfaces to backend infrastructure, we build complete systems designed to grow with your business."
        features={features}
      />

      <ServiceProcess
        heading="How we build software."
        steps={processSteps}
      />

      <ServiceCTA
        heading="Have a product idea?"
        description="From initial concept to production-ready software, we'll help you build something that creates real value."
        primaryCta="Discuss Your Project"
      />
    </PageLayout>
  );
}
