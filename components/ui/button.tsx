import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "quiet"; external?: boolean; };
export function ButtonLink({ href, children, variant = "primary", external = false }: Props) {
  const className = `button button-${variant}`;
  return external ? (
    <a href={href} className={className} target="_blank" rel="noreferrer noopener">{children}<ArrowUpRight size={17} aria-hidden="true" /></a>
  ) : (
    <Link href={href} className={className}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>
  );
}
