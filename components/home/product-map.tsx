"use client";

import { ArrowDown, ArrowUpRight, Braces, Layers3, Workflow } from "lucide-react";
import { useDictionary } from "@/components/i18n/use-dictionary";
export function ProductMap() {
  const { dictionary } = useDictionary();
  const text = dictionary.map;
  return <div className="product-map" aria-label={text.label}><div className="map-head"><span className="tiny-label">{text.eyebrow}</span><span className="map-cross">+</span></div><div className="map-stage"><Layers3 size={19} strokeWidth={1.5} aria-hidden="true" /><span>{text.stage1}<small>{text.stage1Detail}</small></span><span className="stage-number">01</span></div><div className="map-connector"><ArrowDown size={14} aria-hidden="true" /></div><div className="map-stage"><Braces size={19} strokeWidth={1.5} aria-hidden="true" /><span>{text.stage2}<small>{text.stage2Detail}</small></span><span className="stage-number">02</span></div><div className="map-connector"><ArrowDown size={14} aria-hidden="true" /></div><div className="map-stage"><Workflow size={19} strokeWidth={1.5} aria-hidden="true" /><span>{text.stage3}<small>{text.stage3Detail}</small></span><span className="stage-number">03</span></div><div className="map-bottom"><span>{text.bottom}</span><ArrowUpRight size={24} strokeWidth={1.25} aria-hidden="true" /></div></div>;
}
