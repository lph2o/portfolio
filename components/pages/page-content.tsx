"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { useDictionary } from "@/components/i18n/use-dictionary";
import { ProductMap } from "@/components/home/product-map";
import { ContactSection } from "@/components/home/contact-section";
import { ProjectRow } from "@/components/projects/project-row";
import { ProjectArt } from "@/components/projects/project-art";
import { ButtonLink } from "@/components/ui/button";

export function AboutContent() {
  const { dictionary, locale } = useDictionary(); const t = dictionary.about;
  return <><section className="container page-intro"><span className="eyebrow">{t.eyebrow}</span><h1>{t.title}<br /><em>{t.emphasis}</em></h1></section><section className="container about-grid"><div className="about-copy"><h2>{t.heading}</h2><p>{t.intro}</p><p>{t.paragraph2}</p><p>{t.paragraph3}</p><div className="about-ai"><span className="eyebrow">{t.aiEyebrow}</span><p>{locale === "fr" ? "J’utilise le développement assisté par IA pour avancer plus vite, tout en restant responsable de l’architecture, de la qualité du code, des tests et du déploiement." : locale === "it" ? "Uso lo sviluppo assistito dall’IA per lavorare più velocemente, mantenendo la responsabilità di architettura, qualità del codice, test e deploy." : profile.approach}</p></div></div><ProductMap /></section><section className="container about-skills"><div className="section-heading"><div><span className="eyebrow">{t.toolsEyebrow}</span><h2>{t.toolsTitle}</h2></div><p>{t.toolsDescription}</p></div><div className="practice-grid">{skillGroups.map((group, index) => <article key={group.title}><span className="practice-number">0{index + 1}</span><h3>{dictionary.skills[index].title}</h3><p>{dictionary.skills[index].description}</p><ul>{group.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></article>)}</div></section><ContactSection /></>;
}

export function ProjectsContent() {
  const { dictionary } = useDictionary(); const t = dictionary.projectsPage;
  return <><section className="container page-intro"><span className="eyebrow">{t.eyebrow}</span><h1>{t.title}<br /><em>{t.emphasis}</em></h1><p>{t.description}</p></section><section className="container work-index" aria-label={t.aria}>{projects.map((project) => <ProjectRow key={project.slug} project={project} />)}</section><ContactSection /></>;
}

export function ContactContent() {
  const { dictionary } = useDictionary(); const t = dictionary.contactPage;
  return <section className="container contact-page"><span className="eyebrow">{t.eyebrow}</span><h1>{t.title}<br /><em>{t.emphasis}</em></h1><div className="contact-page-grid"><p className="contact-lead">{t.lead.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</p><div className="contact-options"><div className="contact-channel"><span className="tiny-label">{t.findWork}</span><a href={profile.github} target="_blank" rel="noreferrer noopener">GitHub / lph2o<ArrowUpRight size={24} aria-hidden="true" /></a><p>{t.githubDescription}</p></div><div className="contact-pending"><span className="tiny-label">{t.direct}</span><p>{t.pending}</p></div><ButtonLink href="/projects" variant="quiet">{t.projects}</ButtonLink></div></div></section>;
}

export function NotFoundContent() {
  const { dictionary } = useDictionary(); const t = dictionary.notFound;
  return <section className="container not-found"><span className="eyebrow">{t.eyebrow}</span><h1>{t.title}<br /><em>{t.emphasis}</em></h1><p>{t.description}</p><ButtonLink href="/projects">{t.cta}</ButtonLink></section>;
}

export function ProjectDetailContent({ slug }: { slug: "hikma" | "content-factory" | "msda" }) {
  const { dictionary, locale, project: getCopy } = useDictionary(); const base = projects.find((item) => item.slug === slug)!; const project = getCopy(slug); const t = dictionary.case; const next = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];
  return <><div className="container"><Link href="/projects" className="back-link"><ArrowLeft size={16} aria-hidden="true" />{t.back}</Link></div><section className="container case-hero"><span className="eyebrow">{base.index} / {project.category}</span><h1>{base.title}<span className="accent-period">.</span></h1><p className="case-subtitle">{project.description}</p><dl className="case-meta"><div><dt>{t.focus}</dt><dd>{project.role}</dd></div><div><dt>{t.status}</dt><dd>{project.status}</dd></div><div><dt>{t.source}</dt><dd>{locale === "fr" ? "Source privée" : locale === "it" ? "Fonte privata" : "Private source"}</dd></div><div><dt>{t.stack}</dt><dd>{base.stack.join(" · ")}</dd></div></dl></section><div className="container"><ProjectArt slug={base.slug} large /></div><div className="container case-body"><aside className="case-aside"><span className="tiny-label">{t.inside}</span><nav aria-label={t.inside}><a href="#overview">{t.overview}</a><a href="#challenge">{t.challenge}</a><a href="#architecture">{t.architecture}</a><a href="#decisions">{t.decisions}</a><a href="#current-state">{t.currentState}</a></nav>{base.live && <ButtonLink href={base.live} variant="quiet" external>{t.visit}</ButtonLink>}</aside><div className="case-content"><section id="overview"><span className="eyebrow">01 / {t.overviewLabel}</span><h2>{project.summary}</h2></section><section id="challenge"><span className="eyebrow">02 / {t.challenge}</span><h2>{t.challengeTitle}</h2><p>{project.challenge}</p><h3>{t.approach}</h3><p>{project.approach}</p></section><section id="architecture"><span className="eyebrow">03 / {t.architecture}</span><h2>{t.architectureTitle}</h2><div className="architecture-flow">{project.architecture.map((stage: string, index: number) => <div key={stage}><span>{stage}</span>{index < project.architecture.length - 1 && <ArrowRight size={17} aria-hidden="true" />}</div>)}</div><h3>{t.present}</h3><ul className="feature-list">{project.features.map((feature: string) => <li key={feature}>{feature}</li>)}</ul></section><section id="decisions"><span className="eyebrow">04 / {t.decisions}</span><h2>{t.details}</h2><div className="decision-list">{project.decisions.map((decision: { title: string; text: string }, index: number) => <article key={decision.title}><span>0{index + 1}</span><div><h3>{decision.title}</h3><p>{decision.text}</p></div></article>)}</div></section><section id="current-state"><span className="eyebrow">05 / {t.currentLabel}</span><h2>{t.stateTitle}</h2><p>{project.currentState}</p><div className="evidence-note"><span className="tiny-label">{t.scope}</span><ul>{project.limitations.map((limit: string) => <li key={limit}>{limit}</li>)}</ul><p>{t.evidence}</p></div></section></div></div><section className="container next-project"><span className="eyebrow">{t.next}</span><Link href={`/projects/${next.slug}`}><span>{next.title}</span><ArrowUpRight size={38} strokeWidth={1.4} aria-hidden="true" /></Link></section></>;
}
