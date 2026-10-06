import { ArrowDown, ArrowUpRight, Braces, Layers3, Workflow } from "lucide-react";
export function ProductMap() {
  return <div className="product-map" aria-label="Product approach: design, build, connect and ship">
    <div className="map-head"><span className="tiny-label">A product-minded approach</span><span className="map-cross">+</span></div>
    <div className="map-stage"><Layers3 size={19} strokeWidth={1.5} aria-hidden="true" /><span>Start with the experience<small>Design & product thinking</small></span><span className="stage-number">01</span></div>
    <div className="map-connector"><ArrowDown size={14} aria-hidden="true" /></div>
    <div className="map-stage"><Braces size={19} strokeWidth={1.5} aria-hidden="true" /><span>Build the right system<small>Full-stack development</small></span><span className="stage-number">02</span></div>
    <div className="map-connector"><ArrowDown size={14} aria-hidden="true" /></div>
    <div className="map-stage"><Workflow size={19} strokeWidth={1.5} aria-hidden="true" /><span>Connect the moving parts<small>AI & automation</small></span><span className="stage-number">03</span></div>
    <div className="map-bottom"><span>Idea → interface → system</span><ArrowUpRight size={24} strokeWidth={1.25} aria-hidden="true" /></div>
  </div>;
}
