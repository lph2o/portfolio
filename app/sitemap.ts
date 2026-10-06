import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { configuredSiteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = configuredSiteUrl();
  if (!origin) return [];
  return ["/", "/about", "/projects", "/contact", ...projects.map((project) => `/projects/${project.slug}`)]
    .map((path) => ({ url: new URL(path, origin).href }));
}
