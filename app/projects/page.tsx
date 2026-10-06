import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/projects/project-row";
import { ContactSection } from "@/components/home/contact-section";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Selected work", "Three reviewed projects: a learning product, a video-production pipeline and a lead-acquisition application.", "/projects");
export default function ProjectsPage() {
  return <><section className="container page-intro"><span className="eyebrow">Selected work / 01—03</span><h1>Products, pipelines<br />& <em>the parts between.</em></h1><p>Different domains. A consistent focus on useful experiences, clear architecture and connected systems.</p></section><section className="container work-index" aria-label="Project case studies">{projects.map((project) => <ProjectRow key={project.slug} project={project} />)}</section><ContactSection /></>;
}
