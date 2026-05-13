import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/** Higher priority on conversion and money pages for crawlers. */
const routes: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.95 },
  { path: "/work", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/workflow", changeFrequency: "monthly", priority: 0.8 },
  { path: "/feedback", changeFrequency: "weekly", priority: 0.75 },
  { path: "/bookmarks", changeFrequency: "monthly", priority: 0.55 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.25 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.25 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.25 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
