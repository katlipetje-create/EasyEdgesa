import Image from "next/image";
import { img } from "@/lib/images";
import { site, whatsappHref } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Phone, WhatsApp } from "@/components/ui/Icons";

/** Mid-page CTA strip: "Discuss Your Project" */
export function MidCTA({ text = "Have photos of your pool or garden? Send them through and we'll talk you through the options." }: { text?: string }) {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 rounded-card border border-pool/20 bg-pool-soft px-7 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-2xl font-bold tracking-tight">Discuss Your <span className="font-light italic text-pool">Project.</span></p>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-muted">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappHref} external variant="dark" icon={<WhatsApp className="h-4 w-4 text-[#25D366]" />}>WhatsApp Us</Button>
          <Button href="/contact#book" variant="outline" arrow>Book a Site Visit</Button>
        </div>
      </div>
    </div>
  );
}

/** Final page CTA */
export function FinalCTA({ title = "Let's Transform", accent = "Your Outdoor Space." }: { title?: string; accent?: string }) {
  return (
    <section className="section bg-paper">
      <div className="container">
        <div className="relative overflow-hidden rounded-[28px] bg-ink">
          <Image src={img.pool5.src} alt="" fill sizes="100vw" aria-hidden="true" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden="true" />
          <div className="relative grid gap-10 px-7 py-16 sm:px-12 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:px-16 lg:py-24">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.32em] text-stone sm:text-xs">Start with a site visit</p>
              <h2 className="text-h2 font-bold text-white">
                {title}
                <span className="block pb-1 font-light italic text-[#8FC3D8]">{accent}</span>
              </h2>
              <p className="mt-6 max-w-lg text-[17px] leading-[1.75] text-white/70">
                Tell us about your pool or garden. We&apos;ll visit, measure, and give you a clear quotation with no guesswork.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="/contact#book" variant="light" arrow>Book a Site Visit</Button>
              <Button href={whatsappHref} external variant="ghost-light" icon={<WhatsApp className="h-4 w-4 text-[#25D366]" />}>WhatsApp Us</Button>
              <a href={site.phoneHref} className="mt-2 inline-flex min-h-[44px] items-center justify-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
                <Phone /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
