import PageLayout from "@/components/layout/page-layout.tsx";
import HeroSection from "./home/_components/hero-section.tsx";
import AIFirstSection from "./home/_components/ai-first-section.tsx";
import ServicesSection from "./home/_components/services-section.tsx";
import AIUseCasesSection from "./home/_components/ai-use-cases-section.tsx";
import ResultsSection from "./home/_components/results-section.tsx";
import SecuritySection from "./home/_components/security-section.tsx";
import AIAssessmentSection from "./home/_components/ai-assessment-section.tsx";
import ProductsSection from "./home/_components/products-section.tsx";
import IndustriesSection from "./home/_components/industries-section.tsx";
import AIWorkforceSection from "./home/_components/ai-workforce-section.tsx";
import HowWeWorkSection from "./home/_components/how-we-work-section.tsx";
import TechnologySection from "./home/_components/technology-section.tsx";
import WhyUsSection from "./home/_components/why-us-section.tsx";
import CTASection from "./home/_components/cta-section.tsx";

export default function Index() {
  return (
    <PageLayout>
      <HeroSection />
      <AIFirstSection />
      <ServicesSection />
      <AIUseCasesSection />
      <ProductsSection />
      <AIWorkforceSection />
      <IndustriesSection />
      <HowWeWorkSection />
      <TechnologySection />
      <ResultsSection />
      <WhyUsSection />
      <SecuritySection />
      {/* <TestimonialsSection /> — hidden until we have verified client feedback to show */}
      <AIAssessmentSection />
      <CTASection />
    </PageLayout>
  );
}
