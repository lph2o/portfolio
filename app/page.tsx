import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductMap } from "@/components/home/product-map";
import { ContactSection } from "@/components/home/contact-section";
import { ProjectRow } from "@/components/projects/project-row";
import { HeroCopy } from "@/components/home/hero-copy";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const method = [
  ["Understand", "Start with the problem, the people and what a useful outcome looks like."],
  ["Design", "Turn the intent into a clear flow and an interface that makes sense."],
  ["Build", "Connect the interface, data and APIs with an appropriate architecture."],
  ["Automate", "Connect repetitive work. Use AI where it adds something useful."],
  ["Ship & improve", "Test the experience, deploy carefully and keep refining."],
];
export default function Home() {
  return <>
    <section className="hero container">
      <HeroCopy />
      <div className="hero-right"><ProductMap /><div className="hero-note"><span>DESIGN → CODE → CONNECTION</span><span>One connected practice.</span></div></div>
    </section>
    <section className="work-section container" id="selected-work" aria-labelledby="selected-title">
      <div className="section-heading"><div><span className="eyebrow">01 / Selected work</span><h2 id="selected-title">Different problems.<br />The same product mindset.</h2></div><p>Learning, media production and lead acquisition. Three ways of connecting an experience to the system behind it.</p></div>
      <div className="project-list">{projects.map((project) => <ProjectRow key={project.slug} project={project} />)}</div>
    </section>
    <section className="practice-section"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">02 / The practice</span><h2>Not just the interface.<br /><em>The whole picture.</em></h2></div><p>A design background shapes how I build. I think about the user&apos;s experience and the technical decisions that make it possible.</p></div>
      <div className="practice-grid">{skillGroups.map((group, index) => <article key={group.title}><span className="practice-number">0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p><ul>{group.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></article>)}</div>
      <div className="practice-bottom"><span>Technologies shown are supported by the reviewed projects.</span><Link className="text-link" href="/about">More about my approach<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    </div></section>
    <section className="method-section container"><div className="method-intro"><span className="eyebrow">03 / How I work</span><h2>From the first question<br />to the last detail.</h2><p>AI can accelerate the process. Responsibility for the architecture, code, testing and deployment stays with me.</p></div><ol className="method-list">{method.map(([title, text], index) => <li key={title}><span className="method-index">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <ContactSection />
  </>;
}
