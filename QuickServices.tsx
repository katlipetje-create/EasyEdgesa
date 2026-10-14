import Link from "next/link";
import { quickServices } from "@/data/services";
import { Heading } from "@/components/ui/Heading";

const dots = ["#0F4C68", "#6B775C", "#8F8573", "#1E6E92", "#B08D5B", "#3F5F73", "#7A6A58", "#5C7F6E", "#C29A4B"];

export function QuickServices() {
  return (
    <section className="section grid-bg border-y border-line" aria-labelledby="quick-heading">
      <div className="container">
        <div id="quick-heading">
          <Heading eyebrow="Quick Services" title="Know what you need?" accent="Go straight there." />
        </div>
        <ul className="mt-12 flex flex-wrap gap-3">
          {quickServices.map((s, i) => (
            <li key={s.label}>
              <Link
                href={s.href}
                className="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-line bg-white px-6 text-[12px] font-bold uppercase tracking-[0.2em] text-ink-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-pool/40 hover:text-pool hover:shadow-lift"
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: dots[i % dots.length] }} aria-hidden="true" />
                {s.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact#book" className="inline-flex min-h-[52px] items-center gap-3 rounded-full bg-pool px-6 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-pool-deep">
              Book a Site Visit
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
