"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [{ href: "/projects", label: "Work" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" aria-label={`${profile.name}, home`}>
          <span className="monogram">at<span>.</span></span>
          <span className="wordmark-name">Abdourahmane<br /><strong>Thiam</strong></span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname.startsWith(href) ? "page" : undefined}>{label}</Link>)}
          <a className="github-nav" href={profile.github} target="_blank" rel="noreferrer noopener">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
        <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation">
        {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname.startsWith(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}
        <a href={profile.github} target="_blank" rel="noreferrer noopener" onClick={() => setOpen(false)}>GitHub<ArrowUpRight size={18} aria-hidden="true" /></a>
      </nav>}
    </header>
  );
}
