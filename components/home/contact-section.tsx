"use client";
import { ButtonLink } from "@/components/ui/button";
import { useDictionary } from "@/components/i18n/use-dictionary";
export function ContactSection() {
  const { dictionary } = useDictionary();
  const text = dictionary.contact;
  return <section className="contact-section"><div className="container contact-inner"><div><span className="eyebrow">{text.eyebrow}</span><h2>{text.title}<br /><em>{text.emphasis}</em></h2></div><div className="contact-side"><p>{text.description}</p><ButtonLink href="/contact">{text.cta}</ButtonLink></div></div></section>;
}
