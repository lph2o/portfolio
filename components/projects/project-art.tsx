import { ArrowDown, ArrowRight, AudioLines, BookOpen, Check, FileText, Play, Workflow } from "lucide-react";
import type { ProjectSlug } from "@/data/projects";

export function ProjectArt({ slug, large = false }: { slug: ProjectSlug; large?: boolean }) {
  return <div className={`project-art art-${slug} ${large ? "art-large" : ""}`}>
    <div className="art-top"><span className="tiny-label">{slug === "hikma" ? "Hikma / learning loop" : slug === "content-factory" ? "Factory / production flow" : "MSDA / lead intake"}</span><span className="art-symbol">↗</span></div>
    {slug === "hikma" ? <div className="hikma-sketch">
      <span className="sketch-arabic" lang="ar" dir="rtl">حكمة</span>
      <div className="sketch-rule" />
      <div className="hikma-word-flow"><span><BookOpen size={17} aria-hidden="true" />Word & context</span><ArrowRight size={17} aria-hidden="true" /><span><AudioLines size={17} aria-hidden="true" />Lesson & audio</span></div>
      <div className="review-loop"><span className="loop-dot" />Learn<span className="loop-line" />Save<span className="loop-line" />Review</div>
    </div> : slug === "content-factory" ? <div className="factory-sketch">
      <div className="factory-script"><FileText size={19} aria-hidden="true" /><span>Script / idea</span><span className="code-dot">{"{ }"}</span></div>
      <div className="factory-path"><span /><span /><span /><span /><span /><ArrowDown size={16} aria-hidden="true" /></div>
      <div className="factory-middle"><span><Workflow size={19} aria-hidden="true" />n8n · jobs</span><ArrowRight size={15} aria-hidden="true" /><span><AudioLines size={19} aria-hidden="true" />TTS · render</span></div>
      <div className="factory-output"><Play size={18} aria-hidden="true" /><span>Video artefact<small>Remotion + storage</small></span><Check size={16} aria-hidden="true" /></div>
    </div> : <div className="msda-sketch">
      <div className="lead-input"><span className="tiny-label">The enquiry</span><div className="input-rule"><span>Timeline</span><span className="input-dash" /></div><div className="input-rule"><span>Budget</span><span className="input-dash short" /></div><div className="input-rule"><span>Contact</span><span className="input-dash" /></div></div>
      <div className="lead-route"><ArrowRight size={24} aria-hidden="true" /></div>
      <div className="lead-outcomes"><div className="outcome highlight"><span />Qualified</div><div className="outcome"><span />Needs information</div><div className="outcome"><span />Low intent</div></div>
    </div>}
    <div className="art-caption">Architecture illustration · not a product screenshot</div>
  </div>;
}
