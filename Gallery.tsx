import Image from "next/image";
import type { Img } from "@/lib/images";

/** Mixed-ratio gallery: one wide architectural frame, then 4:3 frames. */
export function Gallery({ images }: { images: Img[] }) {
  const [first, ...rest] = images;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {first && (
        <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-stone-light sm:col-span-2">
          <Image src={first.src} alt={first.alt} fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
        </div>
      )}
      {rest.map((im, i) => (
        <div key={im.src + i} className="relative aspect-[4/3] overflow-hidden rounded-card bg-stone-light">
          <Image src={im.src} alt={im.alt} fill loading="lazy" sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
