import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { Tag } from "@/components/ui/Tag";
import { ArrowRight } from "@/components/ui/Icons";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/insights/${article.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-light">
        <Image src={article.image.src} alt={article.image.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="img-zoom object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <h3 className="text-lg font-bold leading-snug tracking-tight">{article.title}</h3>
        <p className="mb-6 mt-3 line-clamp-3 text-[15px] leading-[1.7] text-ink-muted">{article.excerpt}</p>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-5 text-sm">
          <span className="text-ink-soft">{article.readTime} min read</span>
          <span className="inline-flex items-center gap-2 font-semibold">
            <span className="link-underline">Read</span>
            <ArrowRight className="h-4 w-4 text-pool transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
