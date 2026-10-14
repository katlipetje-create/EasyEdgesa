import Link from "next/link";
import { ArrowRight } from "./Icons";

type Variant = "primary" | "dark" | "outline" | "light" | "ghost-light";

const styles: Record<Variant, string> = {
  primary: "bg-pool text-white hover:bg-pool-deep shadow-glow",
  dark: "bg-ink text-white hover:bg-ink-2",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-white",
  light: "bg-white text-ink hover:bg-stone-light",
  "ghost-light": "border border-white/35 text-white hover:bg-white/10",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

export function Button({ href, children, variant = "primary", arrow, external, className = "", icon }: Props) {
  const cls = `group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.18em] transition-all duration-200 ease-soft ${styles[variant]} ${className}`;
  const inner = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Text link with arrow and moving underline, e.g. "Learn More →" */
export function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group/link inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-ink ${className}`}>
      <span className="link-underline">{children}</span>
      <ArrowRight className="h-4 w-4 text-pool transition-transform duration-200 group-hover/link:translate-x-1" />
    </Link>
  );
}
