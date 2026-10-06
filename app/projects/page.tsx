import { pageMetadata } from "@/lib/seo";
import { ProjectsContent } from "@/components/pages/page-content";
export const metadata = pageMetadata("Selected work", "Three reviewed projects across learning, media production and lead acquisition.", "/projects");
export default function ProjectsPage() { return <ProjectsContent />; }
