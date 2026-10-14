import Link from "next/link";
import { site, whatsappHref } from "@/data/site";
import { areas } from "@/data/areas";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, WhatsApp } from "@/components/ui/Icons";

const company = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
const serviceLinks = [
  { label: "New Pools", href: "/pools" },
  { label: "Renovations", href: "/pool-renovations" },
  { label: "Resurfacing", href: "/services/pool-resurfacing" },
  { label: "Pool Paving", href: "/services/pool-paving-coping" },
  { label: "Outdoor Living", href: "/outdoor-living" },
];
const footerAreas = ["sandton", "fourways", "midrand", "bryanston", "centurion", "pretoria"];

function Col({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">{title}</h2>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="inline-flex min-h-[36px] items-center text-[15px] text-white/80 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pb-28 pt-20 text-white md:pb-10">
      <div className="container">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/60">{site.tagline}</p>
            <ul className="mt-6 space-y-1 text-[15px]">
              <li><a href={site.phoneHref} className="inline-flex min-h-[40px] items-center gap-3 text-white/80 hover:text-white"><Phone /> {site.phoneDisplay}</a></li>
              <li><a href={`mailto:${site.email}`} className="inline-flex min-h-[40px] items-center gap-3 text-white/80 hover:text-white"><Mail /> {site.email}</a></li>
              <li><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[40px] items-center gap-3 text-white/80 hover:text-white"><WhatsApp className="h-4 w-4" /> WhatsApp</a></li>
            </ul>
          </div>
          <Col title="Company" links={company} />
          <Col title="Services" links={serviceLinks} />
          <Col
            title="Areas"
            links={footerAreas.map((s) => ({ label: areas.find((a) => a.slug === s)?.name ?? s, href: `/areas/${s}` }))}
          />
          <div className="rounded-card border border-white/10 bg-white/[0.04] p-7">
            <h2 className="text-xl font-bold leading-snug">
              Planning a pool or <span className="font-light italic text-[#8FC3D8]">outdoor space?</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">Send a few photos and we&apos;ll arrange a site visit and a clear quotation.</p>
            <div className="mt-6 grid gap-3">
              <Button href="/contact#book" variant="light">Book a Site Visit</Button>
              <Button href={whatsappHref} external variant="ghost-light" icon={<WhatsApp className="h-4 w-4 text-[#25D366]" />}>WhatsApp</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/legal/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-white">Terms</Link></li>
            <li><Link href="/legal/popia-notice" className="hover:text-white">POPIA Notice</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
