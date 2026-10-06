import { ButtonLink } from "@/components/ui/button";
export default function NotFound() {
  return <section className="container not-found"><span className="eyebrow">404 / A wrong turn</span><h1>This page<br /><em>isn&apos;t here.</em></h1><p>The work is still one click away.</p><ButtonLink href="/projects">Back to the projects</ButtonLink></section>;
}
