import { ImageResponse } from "next/og";
export const alt = "Abdourahmane Thiam — Product Engineer and Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ background: "#f5f3ee", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", color: "#262822", fontFamily: "sans-serif" }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23 }}><span>ABDOURAHMANE THIAM</span><span style={{ color: "#b94b29" }}>DESIGN → CODE → CONNECTION</span></div>
    <div style={{ display: "flex", flexDirection: "column", fontSize: 89, letterSpacing: "-4px", lineHeight: 1.08 }}><span>Good products.</span><span>Thoughtfully built<span style={{ color: "#b94b29" }}>.</span></span></div>
    <div style={{ display: "flex", borderTop: "1px solid #d1d0c6", paddingTop: 27, fontSize: 24 }}>Product Engineer & Full-Stack Developer</div>
  </div>, { ...size });
}
