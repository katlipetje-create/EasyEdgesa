import Link from "next/link";
import { site, whatsappHref } from "@/data/site";
import { Phone, WhatsApp } from "@/components/ui/Icons";

/** Desktop: floating WhatsApp button. Mobile: a slim bottom bar so nothing covers page content. */
export function ContactActions() {
  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-3 rounded-full bg-[#1F2A24] pl-4 pr-5 text-white shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-ink md:inline-flex"
      >
        <WhatsApp className="h-6 w-6 text-[#25D366] transition-colors group-hover:text-ink" />
        <span className="text-[12px] font-bold uppercase tracking-[0.16em]">WhatsApp Us</span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),10px)] pt-2.5 backdrop-blur md:hidden">
        <div className="grid grid-cols-[1fr_52px_52px] gap-2">
          <Link href="/contact#book" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-pool text-[12px] font-bold uppercase tracking-[0.16em] text-white">
            Book a Site Visit
          </Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us" className="grid min-h-[48px] place-items-center rounded-full bg-[#25D366]/15 text-[#128C4B]">
            <WhatsApp className="h-6 w-6" />
          </a>
          <a href={site.phoneHref} aria-label="Call us" className="grid min-h-[48px] place-items-center rounded-full border border-line text-ink">
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
