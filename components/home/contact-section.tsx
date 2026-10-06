import { ButtonLink } from "@/components/ui/button";
export function ContactSection() {
  return <section className="contact-section"><div className="container contact-inner">
    <div><span className="eyebrow">The next conversation</span><h2>Good ideas deserve<br /><em>good execution.</em></h2></div>
    <div className="contact-side"><p>A product to build, a system to connect, or a useful problem to solve.</p><ButtonLink href="/contact">Get in touch</ButtonLink></div>
  </div></section>;
}
