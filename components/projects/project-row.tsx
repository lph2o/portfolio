import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectArt } from "./project-art";

export function ProjectRow({ project }: { project: Project }) {
  return <article className="project-card">
    <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}><ProjectArt slug={project.slug} /></Link>
    <div className="project-card-body">
      <div className="project-eyebrow"><span>{project.index} / {project.category}</span><span className="project-status">{project.status}</span></div>
      <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
      <p>{project.description}</p>
      <div className="project-card-footer"><ul className="tech-list" aria-label={`${project.title} technologies`}>{project.stack.slice(0, 3).map((tech) => <li key={tech}>{tech}</li>)}</ul><Link className="card-arrow" href={`/projects/${project.slug}`} aria-label={`Open ${project.title}`}><ArrowUpRight size={17} aria-hidden="true" /></Link></div>
    </div>
  </article>;
}
