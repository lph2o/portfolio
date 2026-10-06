"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { useDictionary } from "@/components/i18n/use-dictionary";
export function Footer() {
  const { dictionary } = useDictionary();
  return <footer className="site-footer"><div className="container footer-inner"><Link href="/" className="footer-name">{profile.name}<span>{dictionary.footer.tagline}</span></Link><div className="footer-links"><Link href="/contact">{dictionary.footer.contact}</Link><a href={profile.github} target="_blank" rel="noreferrer noopener">{dictionary.nav.github} <ArrowUpRight size={14} aria-hidden="true" /></a></div><span className="footer-credit">{dictionary.footer.credit} · {new Date().getFullYear()}</span></div></footer>;
}
