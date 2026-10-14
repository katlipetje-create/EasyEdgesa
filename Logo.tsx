import Link from "next/link";
import { site } from "@/data/site";

/**
 * REPLACE: swap this text mark for your logo, e.g.
 * <Image src="/logo.svg" alt={site.name} width={160} height={40} priority />
 */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className="group inline-flex min-h-[44px] items-center gap-3">
      <span
        aria-hidden="true"
        className={`relative grid h-9 w-9 place-items-center overflow-hidden rounded-[10px] ${tone === "dark" ? "bg-ink" : "bg-white"}`}
      >
        <span className="absolute inset-[7px] rounded-[4px] bg-pool transition-transform duration-300 group-hover:scale-90" />
        <span className={`absolute inset-x-[7px] bottom-[7px] h-[3px] ${tone === "dark" ? "bg-stone" : "bg-stone-dark"}`} />
      </span>
      <span className={`text-[15px] font-extrabold tracking-tight ${tone === "dark" ? "text-ink" : "text-white"}`}>{site.name}</span>
    </Link>
  );
}
