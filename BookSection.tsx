import { site, whatsappHref } from "@/data/site";
import { Heading } from "@/components/ui/Heading";
import { SiteVisitForm } from "./SiteVisitForm";
import { Mail, Phone, Pin, WhatsApp } from "@/components/ui/Icons";

export function BookSection({ defaultService, title = "Book a", accent = "Site Visit." }: { defaultService?: string; title?: string; accent?: string }) {
  const rows = [
    { icon: <Phone className="h-5 w-5" />, label: "Call", value: site.phoneDisplay, href: site.phoneHref },
    { icon: <WhatsApp className="h-5 w-5" />, label: "WhatsApp", value: "Send photos and a message", href: whatsappHref, ext: true },
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: <Pin className="h-5 w-5" />, label: "Service area", value: "Johannesburg, Pretoria & greater Gauteng" },
  ];
  return (
    <section id="book" className="section grid-bg scroll-mt-24 border-t border-line">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Heading eyebrow="Get Started" title={title} accent={accent}
            intro="Tell us a little about your project. We'll confirm a time to visit, measure and assess, then follow up with a clear quotation." />
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {rows.map((r) => (
              <li key={r.label}>
                {r.href ? (
                  <a href={r.href} {...(r.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex min-h-[72px] items-center gap-4 py-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-pool shadow-sm">{r.icon}</span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-ink-soft">{r.label}</span>
                      <span className="link-underline text-[16px] font-semibold text-ink">{r.value}</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex min-h-[72px] items-center gap-4 py-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-pool shadow-sm">{r.icon}</span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-ink-soft">{r.label}</span>
                      <span className="text-[16px] font-semibold">{r.value}</span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <SiteVisitForm defaultService={defaultService} />
      </div>
    </section>
  );
}
