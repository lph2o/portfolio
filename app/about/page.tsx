import { pageMetadata } from "@/lib/seo";
import { AboutContent } from "@/components/pages/page-content";
export const metadata = pageMetadata("About", "Abdourahmane Thiam connects product design, application systems and automation.", "/about");
export default function AboutPage() { return <AboutContent />; }
