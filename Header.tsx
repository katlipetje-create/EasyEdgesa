"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site, whatsappHref } from "@/data/site";
import { Logo } from "./Logo";
import { Close, Menu, Phone, WhatsApp } from "@/components/ui/Icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ease-soft ${
        scrolled ? "border-line bg-white/90 shadow-[0_10px_30px_-24px_rgba(17,19,21,0.4)] backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div className={`container flex items-center justify-between gap-6 transition-all duration-300 ${scrolled ? "h-[68px]" : "h-[84px]"}`}>
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative inline-flex min-h-[44px] items-center px-3 text-[14px] font-semibold transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-pool after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 ${
                    isActive(item.href) ? "text-ink after:scale-x-100" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden min-h-[44px] items-center gap-2 px-3 text-sm font-semibold text-ink-muted hover:text-ink lg:inline-flex">
            <Phone /> <span className="hidden 2xl:inline">{site.phoneDisplay}</span>
          </a>
          <Link
            href="/contact#book"
            className="hidden min-h-[46px] items-center rounded-full bg-pool px-5 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-pool-deep sm:inline-flex"
          >
            Book a Site Visit
          </Link>
          <button
            ref={btnRef}
            type="button"
            className="inline-grid h-12 w-12 place-items-center rounded-full text-ink hover:bg-stone-light xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu: full-height panel with large centred links and hairline dividers */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto bg-paper xl:hidden"
        style={{ top: scrolled ? 68 : 84 }}
      >
        <nav aria-label="Mobile" className="container animate-fade-up pb-10 pt-4">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-[72px] items-center justify-center text-[26px] font-bold tracking-tight ${
                    isActive(item.href) ? "text-pool" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href="/contact#book" className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-pool text-[12px] font-bold uppercase tracking-[0.18em] text-white">
              Book a Site Visit
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-ink/15 text-sm font-semibold">
                <WhatsApp className="h-5 w-5 text-[#25D366]" /> WhatsApp
              </a>
              <a href={site.phoneHref} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-ink/15 text-sm font-semibold">
                <Phone /> Call us
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
