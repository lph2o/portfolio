import type { Metadata } from "next";
import { profile } from "@/data/profile";

export function configuredSiteUrl(value = process.env.NEXT_PUBLIC_SITE_URL): URL | undefined {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value);
    if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) return undefined;
    return new URL(url.origin);
  } catch { return undefined; }
}
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const origin = configuredSiteUrl();
  return {
    title, description,
    ...(origin ? { alternates: { canonical: new URL(path, origin).href } } : {}),
    openGraph: { title: `${title} — ${profile.name}`, description, type: "website" },
    twitter: { card: "summary_large_image", title: `${title} — ${profile.name}`, description },
  };
}
