import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectArt } from "@/components/projects/project-art";
import { ButtonLink } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? pageMetadata(project.title, project.description, `/projects/${slug}`) : { title: "Project not found" };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];
  return <>
    <div className="container"><Link href="/projects" className="back-link"><ArrowLeft size={16} aria-hidden="true" />All projects</Link></div>
    <section className="container case-hero"><span className="eyebrow">{project.index} / {project.category}</span><h1>{project.title}<span className="accent-period">.</span></h1><p className="case-subtitle">{project.description}</p>
      <dl className="case-meta"><div><dt>Focus</dt><dd>{project.role}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div><div><dt>Source</dt><dd>{project.visibility}</dd></div><div><dt>Stack</dt><dd>{project.stack.join(" · ")}</dd></div></dl>
    </section>
    <div className="container"><ProjectArt slug={project.slug} large /></div>
    <div className="container case-body">
      <aside className="case-aside"><span className="tiny-label">Inside the project</span><nav aria-label="Case study sections"><a href="#overview">Overview</a><a href="#challenge">The challenge</a><a href="#architecture">Architecture</a><a href="#decisions">Key decisions</a><a href="#current-state">Current state</a></nav>{project.live && <ButtonLink href={project.live} variant="quiet" external>Visit the site</ButtonLink>}</aside>
      <div className="case-content">
        <section id="overview"><span className="eyebrow">01 / Overview</span><h2>{project.summary}</h2></section>
        <section id="challenge"><span className="eyebrow">02 / The challenge</span><h2>The problem behind the product.</h2><p>{project.challenge}</p><h3>The approach</h3><p>{project.approach}</p></section>
        <section id="architecture"><span className="eyebrow">03 / Architecture</span><h2>Connected, with clear boundaries.</h2><div className="architecture-flow">{project.architecture.map((stage, index) => <div key={stage}><span>{stage}</span>{index < project.architecture.length - 1 && <ArrowRight size={17} aria-hidden="true" />}</div>)}</div><h3>Present in the implementation</h3><ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
        <section id="decisions"><span className="eyebrow">04 / Key decisions</span><h2>The details that matter.</h2><div className="decision-list">{project.decisions.map((decision, index) => <article key={decision.title}><span>0{index + 1}</span><div><h3>{decision.title}</h3><p>{decision.text}</p></div></article>)}</div></section>
        <section id="current-state"><span className="eyebrow">05 / Current state</span><h2>A clear view of what exists.</h2><p>{project.currentState}</p><div className="evidence-note"><span className="tiny-label">Scope of this case study</span><ul>{project.limitations.map((limit) => <li key={limit}>{limit}</li>)}</ul><p>Based on a source review on 3 October 2026. Source remains private. Diagrams illustrate architecture, not product screenshots.</p></div></section>
      </div>
    </div>
    <section className="container next-project"><span className="eyebrow">Keep exploring</span><Link href={`/projects/${next.slug}`}><span>{next.title}</span><ArrowUpRight size={38} strokeWidth={1.4} aria-hidden="true" /></Link></section>
  </>;
}
