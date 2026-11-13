type Plan = { name: string; price?: number };
type Faq = { q: string; a: string };

export function productSchema(opts: {
  name: string;
  description: string;
  url: string;
  plans: Plan[];
}) {
  const offers = opts.plans
    .filter((p): p is Plan & { price: number } => typeof p.price === "number")
    .map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price,
      priceCurrency: "USD",
      url: opts.url,
      availability: "https://schema.org/InStock",
    }));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    brand: { "@type": "Brand", name: "Exelogy" },
    offers,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
