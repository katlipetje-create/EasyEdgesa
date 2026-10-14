import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { areas } from "@/data/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => new URL(p, site.url).toString();
  const now = new Date();
  const core = ["/", "/pools", "/pool-renovations", "/outdoor-living", "/projects", "/about", "/insights", "/contact"];
  return [
    ...core.map((p) => ({ url: u(p), lastModified: now, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.8 })),
    ...services.filter((s) => s.detail).map((s) => ({ url: u(`/services/${s.slug}`), lastModified: now, priority: 0.7 })),
    ...projects.map((p) => ({ url: u(`/projects/${p.slug}`), lastModified: now, priority: 0.6 })),
    ...areas.map((a) => ({ url: u(`/areas/${a.slug}`), lastModified: now, priority: 0.7 })),
    ...articles.map((a) => ({ url: u(`/insights/${a.slug}`), lastModified: new Date(a.date), priority: 0.5 })),
  ];
}
