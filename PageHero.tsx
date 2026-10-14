import Image from "next/image";
import Link from "next/link";
import type { Img } from "@/lib/images";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { WhatsApp } from "@/components/ui/Icons";
import { whatsappHref } from "@/data/site";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  image?: Img;
  crumbs?: { name: string; path: string }[];
  ctas?: boolean;
  children?: React.ReactNode;
};

/** Inner-page hero: faint architectural grid, two-tone heading, top CTA, optional image. */
export function PageHero({ eyebrow, title, accent, intro, image, crumbs, ctas = true, children }: Props) {
  return (
    <section className="grid-bg border-b border-line">
      <div className="container pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-ink-soft">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.path} className="hover:text-ink">{c.name}</Link>
                  ) : (
                    <span aria-current="page" className="text-ink-2">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className={image ? "grid items-end gap-12 lg:grid-cols-[1.15fr_1fr]" : ""}>
          <div>
            <Heading as="h1" eyebrow={eyebrow} title={title} accent={accent} intro={intro} />
            {ctas && (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact#book" arrow>Book a Site Visit</Button>
                <Button href={whatsappHref} external variant="outline" icon={<WhatsApp className="h-4 w-4 text-[#1DA851]" />}>
                  WhatsApp Us
                </Button>
              </div>
            )}
            {children}
          </div>
          {image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-stone-light">
              <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
