import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoConfig = { title: string; description: string; noindex?: boolean };
const SITE = "https://www.exelogy.com";
const DEFAULT_IMAGE = `${SITE}/logo.png`;

const SEO: Record<string, SeoConfig> = {
  "/": { title: "Exelogy | AI-First Technology, Software & Digital Growth", description: "Exelogy builds AI solutions, custom software, business automation and digital growth systems that help organizations build, automate and grow." },
  "/about": { title: "About Exelogy | AI-First Technology Company", description: "Learn about Exelogy, an AI-first technology company delivering intelligent software, automation and digital growth solutions for modern businesses." },
  "/services": { title: "Technology Services | AI, Software, Automation & Growth | Exelogy", description: "Explore Exelogy services across AI and automation, custom software engineering, workflow automation and digital marketing." },
  "/services/ai-solutions": { title: "AI Solutions & AI Agents | Exelogy", description: "Build practical AI solutions with Exelogy, including AI agents, voice AI, intelligent assistants, AI integrations and business automation." },
  "/services/software-development": { title: "Custom Software Development | Exelogy", description: "Design and build scalable web applications, SaaS platforms, APIs and enterprise software with Exelogy's software engineering team." },
  "/services/automation": { title: "Business Process Automation | Exelogy", description: "Automate repetitive workflows, connect business systems and improve operations with intelligent automation from Exelogy." },
  "/services/digital-marketing": { title: "Digital Growth & Performance Marketing | Exelogy", description: "Grow your digital presence with performance marketing, social media, SEO, Google Ads, Meta Ads and conversion-focused strategy." },
  "/products": { title: "AI & SaaS Products | Exelogy", description: "Explore Exelogy products for AI calling, legal client intake, marketing operations, social media management, advertising and business growth." },
  "/products/growthos": { title: "GrowthOS | Social Media & Marketing Management by Exelogy", description: "Manage brands, social channels, content, campaigns, Meta Ads and Google Ads from one unified marketing platform." },
  "/products/callifier": { title: "Callifier | Global Business Calling, SMS & Email by Exelogy", description: "Get virtual phone numbers worldwide and call, text, and email customers from one place, with call recording and analytics built in." },
  "/products/counselai": { title: "CounselAI | AI Client Intake for Law Firms by Exelogy", description: "Qualify prospective clients, book attorney consultations and automate follow-ups with CounselAI, the AI intake assistant for law firms." },
  "/industries": { title: "Industries | AI & Software Solutions | Exelogy", description: "Discover AI, software and automation solutions for e-commerce, healthcare, financial services, real estate, professional services and enterprise operations." },
  "/contact": { title: "Contact Exelogy | Start Your Technology Project", description: "Talk to Exelogy about your AI, software development, automation, SaaS or digital growth project." },
  "/faq": { title: "FAQ | Exelogy", description: "Answers to common questions about Exelogy, GrowthOS, Callifier and CounselAI — pricing, trials, cancellations and more." },
  "/privacy": { title: "Privacy Policy | Exelogy", description: "Read Exelogy's privacy policy and learn how information is handled when you use our website and services." },
  "/terms": { title: "Terms of Service | Exelogy", description: "Read the terms governing use of Exelogy's website, products and services." },
  "/refund-policy": { title: "Refund Policy | Exelogy", description: "Read Exelogy's refund policy for GrowthOS, Callifier and CounselAI subscriptions." },
  "/data-deletion": { title: "Data Deletion | Exelogy", description: "Information about requesting deletion of data associated with Exelogy services." },
  "/auth/callback": { title: "Authentication | Exelogy", description: "Exelogy authentication callback.", noindex: true },
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute("content", content);
}

function setJsonLd(id: string, data: object | null) {
  let el = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!data) { el?.remove(); return; }
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function breadcrumbJsonLd(pathname: string): object | null {
  if (pathname === "/") return null;
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", path: "/" }];
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    const cfg = SEO[acc];
    const label = cfg ? cfg.title.split("|")[0].trim() : seg;
    items.push({ name: label, path: acc });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export default function SeoManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const cfg = SEO[pathname] ?? { title: "Page Not Found | Exelogy", description: "The requested page could not be found.", noindex: true };
    const canonical = `${SITE}${pathname === "/" ? "/" : pathname}`;
    document.title = cfg.title;
    setMeta('meta[name="description"]', "name", "description", cfg.description);
    setMeta('meta[name="robots"]', "name", "robots", cfg.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setMeta('meta[property="og:title"]', "property", "og:title", cfg.title);
    setMeta('meta[property="og:description"]', "property", "og:description", cfg.description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Exelogy");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", cfg.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", cfg.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", DEFAULT_IMAGE);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = canonical;
    setJsonLd("breadcrumb-jsonld", breadcrumbJsonLd(pathname));
  }, [pathname]);
  return null;
}
