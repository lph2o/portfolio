"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductMap } from "@/components/home/product-map";
import { ContactSection } from "@/components/home/contact-section";
import { ProjectRow } from "@/components/projects/project-row";
import { HeroCopy } from "@/components/home/hero-copy";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { useDictionary } from "@/components/i18n/use-dictionary";
export default function Home() {
  const { dictionary } = useDictionary(); const t = dictionary.home;
  return <><section className="hero container"><HeroCopy /><div className="hero-right"><ProductMap /><div className="hero-note"><span>DESIGN → CODE → CONNECTION</span><span>{dictionary.hero.mapNote}</span></div></div></section><section className="work-section container" id="selected-work" aria-labelledby="selected-title"><div className="section-heading"><div><span className="eyebrow">{t.selectedEyebrow}</span><h2 id="selected-title">{t.selectedTitle}<br /><em>{t.selectedEmphasis}</em></h2></div><p>{t.selectedDescription}</p></div><div className="project-list">{projects.map((project) => <ProjectRow key={project.slug} project={project} />)}</div></section><section className="practice-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">{t.practiceEyebrow}</span><h2>{t.practiceTitle}<br /><em>{t.practiceEmphasis}</em></h2></div><p>{t.practiceDescription}</p></div><div className="practice-grid">{skillGroups.map((group, index) => <article key={group.title}><span className="practice-number">0{index + 1}</span><h3>{dictionary.skills[index].title}</h3><p>{dictionary.skills[index].description}</p><ul>{group.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></article>)}</div><div className="practice-bottom"><span>{t.practiceNote}</span><Link className="text-link" href="/about">{t.practiceLink}<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></section><section className="method-section container"><div className="method-intro"><span className="eyebrow">{t.methodEyebrow}</span><h2>{t.methodTitle}<br /><em>{t.methodEmphasis}</em></h2><p>{t.methodDescription}</p></div><ol className="method-list">{dictionary.method.map((item, index) => <li key={item.title}><span className="method-index">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol></section><ContactSection /></>;
}
