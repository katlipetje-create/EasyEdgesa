import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { ArrowRight } from "@/components/ui/Icons";

export function ServiceCard({ service, showImage = true }: { service: Service; showImage?: boolean }) {
  return (
    <Link href={service.href} className="card card-hover group flex h-full flex-col overflow-hidden">
      {showImage && (
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-light">
          <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="img-zoom object-cover" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-[0.15em] text-ink backdrop-blur">
            {service.number}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-pool">{service.category}</p>
        <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-ink">{service.title}</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">{service.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink">
          <span className="link-underline">Learn More</span>
          <ArrowRight className="h-4 w-4 text-pool transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
