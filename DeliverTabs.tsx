"use client";
import { useId, useState } from "react";

type Item = { title: string; text: string };

/** Segmented toggle (What we deliver / Why it matters) with accent-bar cards, adapted from the reference. */
export function DeliverTabs({ deliver, why, labels = ["What We Deliver", "Why It Matters"] }: { deliver: Item[]; why: Item[]; labels?: [string, string] }) {
  const [tab, setTab] = useState(0);
  const id = useId();
  const lists = [deliver, why];
  return (
    <div>
      <div role="tablist" aria-label="Service details" className="inline-grid w-full max-w-xl grid-cols-2 rounded-full bg-stone-light p-1.5">
        {labels.map((l, i) => (
          <button key={l} role="tab" id={`${id}-t${i}`} aria-selected={tab === i} aria-controls={`${id}-p${i}`} type="button"
            onClick={() => setTab(i)}
            onKeyDown={(e) => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") setTab(i === 0 ? 1 : 0); }}
            className={`min-h-[52px] rounded-full px-4 text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-200 sm:text-[12px] ${tab === i ? "bg-white text-ink shadow-sm" : "text-ink-muted hover:text-ink"}`}>
            {l}
          </button>
        ))}
      </div>
      {lists.map((items, i) => (
        <div key={i} role="tabpanel" id={`${id}-p${i}`} aria-labelledby={`${id}-t${i}`} hidden={tab !== i} className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="card flex gap-5 p-6 sm:p-8">
              <span className="w-1.5 shrink-0 rounded-full bg-pool" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-ink-muted">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
