"use client";
import { useState } from "react";

/**
 * Finish options explorer: pill selector + detail panel (adapted from the reference's partner selector).
 * CONFIRM: edit to the finishes you actually supply. Avoid brand names unless you're an approved installer.
 */
const finishes = [
  { name: "Plaster / Marbelite-type", group: "Interior finish", color: "#DCE6E8", text: "A classic cementitious interior finish. Smooth when new and available in a range of tones that change the water colour.", points: ["Wide colour range", "Familiar to maintain", "Refinish when it becomes rough or stained"] },
  { name: "Pebble aggregate", group: "Interior finish", color: "#9AA6A4", text: "Exposed aggregate finishes give a textured, natural look and are typically chosen for durability.", points: ["Textured underfoot", "Natural, varied appearance", "Good at hiding minor marks"] },
  { name: "Fibreglass lining", group: "Interior finish", color: "#BFD9E2", text: "A smooth lining applied over a prepared shell. Discussed where the existing shell and budget suit it.", points: ["Very smooth surface", "Suitability depends on shell condition", "[CONFIRM IF OFFERED]"] },
  { name: "Mosaic / tile", group: "Waterline & feature", color: "#5E8FA3", text: "Tiles are often used along the waterline, on steps or as a full interior for a crisp, contemporary finish.", points: ["Clean waterline", "Easy to wipe", "Many colours and sizes"] },
  { name: "Natural stone coping", group: "Coping", color: "#C9BCA6", text: "Stone coping brings texture and warmth. Finish and colour affect how hot it gets in summer.", points: ["Natural variation", "Premium look", "May need sealing"] },
  { name: "Precast coping", group: "Coping", color: "#D9D4CA", text: "Consistent profiles and colours with predictable sizing, from rounded bullnose to slim square edges.", points: ["Consistent appearance", "Many profiles", "Cost-effective"] },
  { name: "Porcelain-type paving", group: "Paving", color: "#A7A39B", text: "Large-format, low-porosity surfaces for a sleek contemporary surround. Choose a textured, outdoor-rated finish around water.", points: ["Low staining", "Contemporary look", "Specify slip-resistant grades"] },
  { name: "Concrete pavers", group: "Paving", color: "#B9AE9B", text: "Versatile and practical, with many shapes and colours for pool surrounds, patios and bomas.", points: ["Flexible layouts", "Easy to repair", "Wide colour range"] },
];

export function FinishExplorer() {
  const [active, setActive] = useState(0);
  const f = finishes[active];
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <ul className="flex flex-wrap content-start gap-3" aria-label="Finish options">
        {finishes.map((x, i) => (
          <li key={x.name}>
            <button type="button" onClick={() => setActive(i)} aria-pressed={active === i}
              className={`inline-flex min-h-[56px] items-center gap-3 rounded-full border py-2 pl-2 pr-5 text-[15px] font-semibold transition-all duration-200 ${
                active === i ? "border-pool bg-pool-soft text-pool shadow-glow" : "border-line bg-white text-ink-2 hover:border-stone"
              }`}>
              <span className="h-10 w-10 rounded-full border border-black/5" style={{ background: x.color }} aria-hidden="true" />
              {x.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="rounded-card border border-pool/15 bg-gradient-to-br from-pool-soft to-white p-8 sm:p-10" aria-live="polite">
        <div className="h-16 w-28 rounded-2xl border border-black/5 shadow-inner" style={{ background: f.color }} aria-hidden="true" />
        <h3 className="mt-6 text-3xl font-bold tracking-tight">{f.name}</h3>
        <span className="mt-3 inline-flex rounded-full border border-pool/25 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-pool">{f.group}</span>
        <p className="mt-5 text-[16px] leading-[1.75] text-ink-muted">{f.text}</p>
        <ul className="mt-6 space-y-2">
          {f.points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-[15px] text-ink-2"><span className="h-1.5 w-1.5 rounded-full bg-pool" aria-hidden="true" />{p}</li>
          ))}
        </ul>
        <p className="mt-6 text-[13px] text-ink-soft">Samples are shown during the site visit so you can see them in daylight.</p>
      </div>
    </div>
  );
}
