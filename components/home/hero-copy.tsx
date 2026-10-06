"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { useDictionary } from "@/components/i18n/use-dictionary";
import { Mascot } from "./mascot";

export function HeroCopy() {
  const { dictionary, locale } = useDictionary();
  const text = dictionary.hero;
  return <>
    <div className="hero-copy"><div className="eyebrow"><span className="accent-dot" />{text.eyebrow}</div><h1>{locale === "fr" ? <>Des produits utiles.<br /><em>Pensés avec soin</em><span className="accent-period">.</span></> : locale === "it" ? <>Prodotti utili.<br /><em>Pensati con cura</em><span className="accent-period">.</span></> : <>Good products.<br /><em>Thoughtfully</em><br className="hero-mobile-break" /> built<span className="accent-period">.</span></>}</h1><p className="hero-description">{text.description}</p><div className="hero-actions"><ButtonLink href="/projects">{text.primary}</ButtonLink><ButtonLink href="/about" variant="quiet">{text.secondary}</ButtonLink></div></div>
    <div className="hero-baseline"><span>{text.baseline}</span><Link href="#selected-work">{text.closer}<ArrowDownRight size={18} aria-hidden="true" /></Link></div>
    <Mascot />
  </>;
}
