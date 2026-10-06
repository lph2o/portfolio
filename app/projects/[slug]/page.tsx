import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import { ProjectDetailContent } from "@/components/pages/page-content";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject(slug);
  return project ? pageMetadata(project.title, project.description, `/projects/${slug}`) : { title: "Project not found" };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  return <ProjectDetailContent slug={slug as "hikma" | "content-factory" | "msda"} />;
}
