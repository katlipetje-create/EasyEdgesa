import Image from "next/image";
import { img } from "@/lib/images";
import { Heading } from "@/components/ui/Heading";

const pillars = [
  { k: "Planning", v: "Layout, access, drainage, levels and finishes considered before installation." },
  { k: "Workmanship", v: "Neat finishes and careful execution throughout the project." },
  { k: "Supervision", v: "Projects managed and monitored throughout installation." },
  { k: "Practicality", v: "Materials and layouts selected for appearance, maintenance and long-term usability." },
];

export function Pillars() {
  return (
    <section className="section bg-paper">
      <div className="container">
        <div className="relative overflow-hidden rounded-[28px] bg-ink text-white">
          <Image src={img.pool3.src} alt="" fill sizes="100vw" className="object-cover opacity-[0.18]" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-pool-deep/80" aria-hidden="true" />
          <div className="relative px-7 py-16 sm:px-12 lg:px-16 lg:py-24">
            <Heading eyebrow="Why Choose Us" title="Designed Properly." accent="Built Carefully." tone="dark"
              intro="Credibility comes from how a project is run. Every job follows the same disciplined approach, from the first measurement to the final walk-through." />
            <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p) => (
                <div key={p.k} className="border-t border-white/15 pt-6">
                  <dt className="text-[13px] font-bold uppercase tracking-[0.28em] text-[#8FC3D8]">{p.k}</dt>
                  <dd className="mt-4 text-[16px] leading-[1.7] text-white/75">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
