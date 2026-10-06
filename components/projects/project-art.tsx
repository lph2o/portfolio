import type { ProjectSlug } from "@/data/projects";

const visualCopy: Record<ProjectSlug, { label: string; title: string; detail: string }> = {
  hikma: { label: "Learning experience", title: "حكمة", detail: "Word · context · review" },
  "content-factory": { label: "Production system", title: "01 → 02 → 03", detail: "Script · render · artefact" },
  msda: { label: "Lead qualification", title: "Signal / action", detail: "Capture · qualify · connect" },
};

export function ProjectArt({ slug, large = false }: { slug: ProjectSlug; large?: boolean }) {
  const copy = visualCopy[slug];
  return <div className={`project-art clean-art art-${slug} ${large ? "art-large" : ""}`}>
    <div className="clean-art-top"><span>{copy.label}</span><span className="clean-art-index">{slug === "hikma" ? "01" : slug === "content-factory" ? "02" : "03"}</span></div>
    <div className="clean-art-center"><span className="clean-art-title" lang={slug === "hikma" ? "ar" : undefined}>{copy.title}</span><span className="clean-art-detail">{copy.detail}</span></div>
    <span className="clean-art-grid" aria-hidden="true" />
  </div>;
}
