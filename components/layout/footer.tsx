import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner">
    <Link href="/" className="footer-name">{profile.name}<span>Design-minded. Systems-driven.</span></Link>
    <div className="footer-links"><Link href="/contact">Contact</Link><a href={profile.github} target="_blank" rel="noreferrer noopener">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a></div>
    <span className="footer-credit">Built with care · {new Date().getFullYear()}</span>
  </div></footer>;
}
