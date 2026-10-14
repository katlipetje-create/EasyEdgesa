"use client";
import Image from "next/image";
import { useState } from "react";
import type { Img } from "@/lib/images";

/** Accessible before/after comparison using a native range input. */
export function BeforeAfter({ before, after }: { before: Img; after: Img }) {
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[16/10] select-none overflow-hidden rounded-card border border-line bg-stone-light focus-within:ring-2 focus-within:ring-pool focus-within:ring-offset-2">
        <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }} aria-hidden="true">
          <span className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xs font-bold text-ink shadow-lift">⇆</span>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Before</span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">After</span>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Drag to compare before and after"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <figcaption className="mt-3 text-sm text-ink-soft">Drag or use arrow keys to compare.</figcaption>
    </figure>
  );
}
