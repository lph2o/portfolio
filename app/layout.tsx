import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/noto-naskh-arabic";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LocaleProvider } from "@/components/i18n/locale-context";
import { MetadataSync } from "@/components/i18n/metadata-sync";
import { profile } from "@/data/profile";
import { configuredSiteUrl } from "@/lib/seo";

const origin = configuredSiteUrl();
export const metadata: Metadata = {
  metadataBase: origin ?? new URL("http://localhost:3000"),
  title: { default: `${profile.name} — Product Engineer & Full-Stack Developer`, template: `%s — ${profile.name}` },
  description: "Design-minded product engineer and full-stack developer building web products, AI-powered workflows and automation systems.",
  openGraph: { type: "website", locale: "en_US", siteName: `${profile.name} — Portfolio`, title: `${profile.name} — Product Engineer`, description: "Design, development and automation. Connected." },
  twitter: { card: "summary_large_image" },
  robots: origin ? { index: true, follow: true } : { index: false, follow: false },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f5f3ee" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><LocaleProvider><MetadataSync /><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" tabIndex={-1}>{children}</main><Footer /></LocaleProvider></body></html>;
}
