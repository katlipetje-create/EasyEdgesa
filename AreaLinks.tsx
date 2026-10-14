import Link from "next/link";
import { areas } from "@/data/areas";
import { Pin } from "@/components/ui/Icons";

export function AreaLinks({ exclude }: { exclude?: string }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {areas.filter((a) => a.slug !== exclude).map((a) => (
        <li key={a.slug}>
          <Link href={`/areas/${a.slug}`} className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-line bg-white px-5 text-[12px] font-bold uppercase tracking-[0.2em] text-ink-2 transition-colors hover:border-pool/40 hover:text-pool">
            <Pin className="h-4 w-4 text-pool" /> {a.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
