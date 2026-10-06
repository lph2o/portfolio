"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { useLocale } from "@/components/i18n/locale-context";
import { Mascot } from "./mascot";

const copy = {
  en: { eyebrow: "Product Engineer / Full-Stack Developer", title: <>Good products.<br /><em>Thoughtfully</em><br className="hero-mobile-break" /> built<span className="accent-period">.</span></>, description: "I bring design, development and automation together — turning ideas into useful digital products.", primary: "Explore my work", secondary: "A little about me", baseline: "Design-minded. Systems-driven.", closer: "A closer look at the work" },
  fr: { eyebrow: "Product Engineer / Développeur Full-Stack", title: <>Des produits utiles.<br /><em>Pensés avec soin</em><span className="accent-period">.</span></>, description: "Je relie design, développement et automatisation pour transformer des idées en produits numériques utiles.", primary: "Voir mes projets", secondary: "À propos de moi", baseline: "Design en tête. Systèmes en main.", closer: "Voir les projets" },
  it: { eyebrow: "Product Engineer / Sviluppatore Full-Stack", title: <>Prodotti migliori.<br /><em>Pensati bene</em><span className="accent-period">.</span></>, description: "Unisco design, sviluppo e automazione per trasformare le idee in prodotti digitali utili.", primary: "Scopri i progetti", secondary: "Chi sono", baseline: "Design-minded. Systems-driven.", closer: "Guarda i progetti" },
} as const;

export function HeroCopy() {
  const { locale } = useLocale();
  const text = copy[locale];
  return <>
    <div className="hero-copy"><div className="eyebrow"><span className="accent-dot" />{text.eyebrow}</div><h1>{text.title}</h1><p className="hero-description">{text.description}</p><div className="hero-actions"><ButtonLink href="/projects">{text.primary}</ButtonLink><ButtonLink href="/about" variant="quiet">{text.secondary}</ButtonLink></div></div>
    <div className="hero-baseline"><span>{text.baseline}</span><Link href="#selected-work">{text.closer}<ArrowDownRight size={18} aria-hidden="true" /></Link></div>
    <Mascot />
  </>;
}
