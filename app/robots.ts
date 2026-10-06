import type { MetadataRoute } from "next";
import { configuredSiteUrl } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  const origin = configuredSiteUrl();
  return origin
    ? { rules: { userAgent: "*", allow: "/", disallow: "/readyz" }, sitemap: new URL("/sitemap.xml", origin).href }
    : { rules: { userAgent: "*", disallow: "/" } };
}
