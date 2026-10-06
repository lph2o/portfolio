import { skillGroups } from "@/data/skills";
import { profile } from "@/data/profile";
import { ContactSection } from "@/components/home/contact-section";
import { ProductMap } from "@/components/home/product-map";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("About", "Abdourahmane Thiam: a design-minded product engineer connecting interfaces, application systems and automation.", "/about");
export default function AboutPage() {
  return <><section className="container page-intro"><span className="eyebrow">About / The person behind the work</span><h1>Design is how I think.<br /><em>Building is what I do.</em></h1></section>
    <section className="container about-grid"><div className="about-copy"><h2>I&apos;m Abdourahmane Thiam.</h2><p>{profile.introduction}</p><p>My background in design shapes the way I approach development: start with the experience, make the important decisions clear and pay attention to the details that people actually use.</p><p>The selected work spans a vocabulary-learning product, a video-production pipeline and a property-enquiry application. The common thread is connecting the interface to the data and workflows behind it.</p><div className="about-ai"><span className="eyebrow">AI, with intention</span><p>{profile.approach}</p></div></div><ProductMap /></section>
    <section className="container about-skills"><div className="section-heading"><div><span className="eyebrow">Tools in context</span><h2>Skills, shown through work.</h2></div><p>These technologies appear in the reviewed projects. No arbitrary scores or claims of expertise.</p></div><div className="practice-grid">{skillGroups.map((group, index) => <article key={group.title}><span className="practice-number">0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p><ul>{group.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></article>)}</div></section><ContactSection />
  </>;
}
