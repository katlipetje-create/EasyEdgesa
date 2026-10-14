import { Heading } from "@/components/ui/Heading";

const steps = [
  { n: "01", t: "Book a Site Visit", d: "Send your details and a few photos. We confirm a time that suits you." },
  { n: "02", t: "Measure & Assess", d: "We measure, check levels, access and drainage, and note the condition of what's there." },
  { n: "03", t: "Design & Quotation", d: "A clear, itemised quote with finishes, layout and the expected programme." },
  { n: "04", t: "Installation", d: "Supervised teams, a tidy site and regular updates while work is under way." },
  { n: "05", t: "Final Sign-Off", d: "We walk the finished project with you and close out any snags." },
  { n: "06", t: "Care Guidance", d: "Practical advice on cleaning, sealing and looking after your new finishes." },
];

export function ProcessSteps({ tone = "white" }: { tone?: "white" | "paper" }) {
  return (
    <section className={`section ${tone === "white" ? "bg-white" : "bg-paper"}`} aria-labelledby="process-heading">
      <div className="container">
        <div id="process-heading">
          <Heading eyebrow="Our Process" title="From Site Visit" accent="to Final Sign-Off." />
        </div>
        {/* Desktop: horizontal sequence with thin rules */}
        <ol className="mt-16 hidden border-t border-ink/15 lg:grid lg:grid-cols-6">
          {steps.map((s, i) => (
            <li key={s.n} className={`relative pr-6 pt-8 ${i > 0 ? "border-l border-line pl-6" : ""}`}>
              <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-pool" style={{ left: i > 0 ? 24 : 0 }} aria-hidden="true" />
              <span className="block text-[44px] font-extralight leading-none tracking-tight text-pool">{s.n}</span>
              <h3 className="mt-5 text-[12px] font-bold uppercase tracking-[0.22em] text-ink">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-ink-muted">{s.d}</p>
            </li>
          ))}
        </ol>
        {/* Mobile/tablet: stacked timeline cards */}
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {steps.map((s) => (
            <li key={s.n} className="card p-7">
              <span className="inline-flex rounded-full bg-pool-soft px-4 py-1.5 text-[12px] font-bold tracking-[0.24em] text-pool">STEP {s.n}</span>
              <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-ink-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
