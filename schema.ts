import { site } from "@/data/site";
import type { FAQ } from "@/data/faqs";

const abs = (p: string) => new URL(p, site.url).toString();

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": abs("/#business"),
  name: site.name,
  description: site.tagline,
  url: site.url,
  telephone: site.phoneDisplay,
  email: site.email,
  image: abs("/images/og.jpg"),
  address: { "@type": "PostalAddress", streetAddress: site.address, addressRegion: "Gauteng", addressCountry: "ZA" },
  areaServed: site.areasServed.map((name) => ({ "@type": "City", name })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: abs(path),
  serviceType: name,
  provider: { "@id": abs("/#business") },
  areaServed: { "@type": "State", name: "Gauteng" },
});

export const faqSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});

export const articleSchema = (a: { title: string; excerpt: string; date: string; slug: string; image: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.excerpt,
  datePublished: a.date,
  image: abs(a.image),
  mainEntityOfPage: abs(`/insights/${a.slug}`),
  author: { "@type": "Organization", name: site.name },
  publisher: { "@id": abs("/#business") },
});
