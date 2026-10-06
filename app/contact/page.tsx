import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Contact", "Find Abdourahmane Thiam's work and start with a useful product problem.", "/contact");
export default function ContactPage() {
  return <section className="container contact-page"><span className="eyebrow">Contact / Start with a useful problem</span><h1>Let&apos;s build<br /><em>something useful.</em></h1><div className="contact-page-grid"><p className="contact-lead">A thoughtful interface.<br />A connected system.<br />A product that makes sense.</p><div className="contact-options"><div className="contact-channel"><span className="tiny-label">Find my work</span><a href={profile.github} target="_blank" rel="noreferrer noopener">GitHub / lph2o<ArrowUpRight size={24} aria-hidden="true" /></a><p>Explore the public work and repositories.</p></div><div className="contact-pending"><span className="tiny-label">Direct contact</span><p>A public email address and LinkedIn link will be added once confirmed. They aren&apos;t available here yet.</p></div><ButtonLink href="/projects" variant="quiet">Explore the case studies</ButtonLink></div></div></section>;
}
