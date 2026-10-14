import Image from "next/image";
import { img } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Heading";
import { site } from "@/data/site";
import { Phone } from "@/components/ui/Icons";

export function HomeHero() {
  return (
    <section className="grid-bg">
      <div className="container pb-10 pt-10 sm:pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div className="animate-fade-up">
            <Eyebrow className="mb-6">Gauteng · Pools · Outdoor Living</Eyebrow>
            <h1 className="text-display font-bold text-ink">
              Pools Built Around
              <span className="block pb-1 font-light italic text-pool">How You Live.</span>
            </h1>
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <p className="max-w-md text-[17px] leading-[1.75] text-ink-muted sm:text-lg">
              Design, renovation and finishing of swimming pools and outdoor entertainment spaces across Gauteng, with practical
              planning, neat workmanship and a clear installation process.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact#book" arrow>Book a Site Visit</Button>
              <Button href="/projects" variant="outline">View Projects</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-16 sm:pb-24">
        <div className="relative overflow-hidden rounded-card border border-line bg-stone-light">
          <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
            <Image src={img.hero.src} alt={img.hero.alt} fill priority sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
          </div>
          {/* Info strip anchored to the image: what, where, next step */}
          <div className="absolute inset-x-3 bottom-3 grid gap-px overflow-hidden rounded-2xl bg-white/20 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:grid-cols-3">
            {[
              ["What we do", "New pools, renovations, paving & outdoor living"],
              ["Where", "Sandton to Pretoria, across Gauteng"],
              ["Next step", "A site visit and a clear, itemised quote"],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink/75 px-5 py-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-stone">{k}</p>
                <p className="mt-1 text-[15px] font-medium leading-snug">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <a href={site.phoneHref} className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-ink-muted hover:text-ink">
          <Phone /> Prefer to talk? Call {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
