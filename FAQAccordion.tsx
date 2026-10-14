import type { FAQ } from "@/data/faqs";
import { Heading } from "@/components/ui/Heading";
import { Plus } from "@/components/ui/Icons";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";
import { Button } from "@/components/ui/Button";

/** Native <details> accordion: keyboard accessible with zero JavaScript. Emits FAQPage schema. */
export function FAQAccordion({ faqs, title = "Questions Before", accent = "You Book." }: { faqs: FAQ[]; title?: string; accent?: string }) {
  return (
    <section className="section bg-white" aria-label="Frequently asked questions">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading eyebrow="FAQ" title={title} accent={accent} intro="Pricing and timeframes depend on your site. A site visit is the quickest way to an accurate answer." />
          <div className="mt-8">
            <Button href="/contact#book" variant="dark" arrow>Book a Site Visit</Button>
          </div>
        </div>
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex min-h-[72px] cursor-pointer items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold text-ink transition-colors hover:text-pool">
                {f.q}
                <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-pool transition-transform duration-300">
                  <Plus />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 pr-12 text-[16px] leading-[1.75] text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
