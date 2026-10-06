import { pageMetadata } from "@/lib/seo";
import { FeltPortfolio } from "@/components/home/felt-portfolio";
export const metadata = pageMetadata("Portfolio", "Abdourahmane Thiam — Product Engineer / Full-Stack Developer building thoughtful products.", "/");
export default function Home() { return <FeltPortfolio />; }
