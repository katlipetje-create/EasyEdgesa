import Image from "next/image";
import Link from "next/link";
import type { Img } from "@/lib/images";
import { Tag } from "@/components/ui/Tag";
import { ArrowRight } from "@/components/ui/Icons";

type Props = {
  href: string;
  image: Img;
  label: string;
  tags: string[];
  heading: string;
  description: string;
  cta: string;
  meta?: string;
  initials?: string;
  priority?: boolean;
};

/** Large editorial card (16:10 image, tag row, headline, meta footer). */
export function FeaturedCard({ href, image, label, tags, heading, description, cta, meta, initials, priority }: Props) {
  return (
    <Link href={href} className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-light">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="img-zoom object-cover" priority={priority} />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <p className="text-sm font-semibold text-pool">{label}</p>
        <h3 className="mt-2 text-[clamp(1.6rem,2.6vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-ink">{heading}</h3>
        <p className="mt-4 mb-8 max-w-xl text-[16px] leading-[1.75] text-ink-muted">{description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-6">
          <div className="flex items-center gap-3">
            {initials && (
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pool to-pool-bright text-xs font-bold text-white">{initials}</span>
            )}
            {meta && <span className="text-sm text-ink-soft">{meta}</span>}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
            <span className="link-underline">{cta}</span>
            <ArrowRight className="h-4 w-4 text-pool transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
