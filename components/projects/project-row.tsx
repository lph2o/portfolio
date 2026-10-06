import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectArt } from "./project-art";

export function ProjectRow({ project }: { project: Project }) {
  return <article className="project-row">
    <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}><ProjectArt slug={project.slug} /></Link>
    <div className="project-info">
      <div className="project-eyebrow"><span>{project.index} / {project.category}</span><span className="private-label">Private source</span></div>
      <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
      <p>{project.description}</p>
      <ul className="tech-list" aria-label={`${project.title} technologies`}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      <Link className="text-link" href={`/projects/${project.slug}`}>Explore case study<ArrowUpRight size={18} aria-hidden="true" /></Link>
    </div>
  </article>;
}
