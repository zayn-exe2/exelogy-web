import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import SeoManager from "./components/SeoManager.tsx";
import ExelogyChatbot from "./components/ExelogyChatbot.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesPage from "./pages/services/page.tsx";
import AIServicesPage from "./pages/services/ai-solutions/page.tsx";
import SoftwareDevelopmentPage from "./pages/services/software-development/page.tsx";
import AutomationPage from "./pages/services/automation/page.tsx";
import DigitalMarketingPage from "./pages/services/digital-marketing/page.tsx";
import ProductsPage from "./pages/products/page.tsx";
import GrowthOSPage from "./pages/products/growthos/page.tsx";
import CallAIPage from "./pages/products/callifier/page.tsx";
import CounselAIPage from "./pages/products/counselai/page.tsx";
import AboutPage from "./pages/about/page.tsx";
import IndustriesPage from "./pages/industries/page.tsx";
import ContactPage from "./pages/contact/page.tsx";
import FAQPage from "./pages/faq/page.tsx";
import PrivacyPolicyPage from "./pages/privacy/page.tsx";
import TermsOfServicePage from "./pages/terms/page.tsx";
import RefundPolicyPage from "./pages/refund-policy/page.tsx";
import DataDeletionPage from "./pages/data-deletion/page.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <ScrollToTop />
        <SeoManager />
        <ExelogyChatbot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/ai-solutions" element={<AIServicesPage />} />
          <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/services/automation" element={<AutomationPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/growthos" element={<GrowthOSPage />} />
          <Route path="/products/callifier" element={<CallAIPage />} />
          <Route path="/products/counselai" element={<CounselAIPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/data-deletion" element={<DataDeletionPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
