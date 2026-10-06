"use client";

import type { ProjectSlug } from "@/data/projects";
import { useDictionary } from "@/components/i18n/use-dictionary";

const visualTitle: Record<ProjectSlug, string> = { hikma: "حكمة", "content-factory": "01 → 02 → 03", msda: "Signal / action" };
export function ProjectArt({ slug, large = false }: { slug: ProjectSlug; large?: boolean }) {
  const { project } = useDictionary();
  const copy = project(slug);
  return <div className={`project-art clean-art art-${slug} ${large ? "art-large" : ""}`}><div className="clean-art-top"><span>{copy.category}</span><span className="clean-art-index">{slug === "hikma" ? "01" : slug === "content-factory" ? "02" : "03"}</span></div><div className="clean-art-center"><span className="clean-art-title" lang={slug === "hikma" ? "ar" : undefined}>{visualTitle[slug]}</span><span className="clean-art-detail">{copy.architecture.join(" · ")}</span></div><span className="clean-art-grid" aria-hidden="true" /></div>;
}
