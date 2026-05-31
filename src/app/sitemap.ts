import type { MetadataRoute } from "next";
import { cases } from "@/lib/data";
import { seoPages } from "@/lib/seo-landing-pages";

const base = "https://webamo.be";
const LAST_UPDATED = "2026-05-29";

export default function sitemap(): MetadataRoute.Sitemap {
  const seo_routes = Object.values(seoPages).map((page) => ({
    url: `${base}${page.path}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: LAST_UPDATED,
  }));

  const static_routes = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/diensten`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/cases`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/tarieven`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${base}/webdesign-brugge`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/cookies`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((r) => ({ ...r, lastModified: LAST_UPDATED }));

  const case_routes = cases.map((c) => ({
    url: `${base}/cases/${c.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...static_routes, ...seo_routes, ...case_routes];
}
