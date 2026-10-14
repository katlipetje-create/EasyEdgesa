import type { Metadata } from "next";
import { site } from "@/data/site";
import { img } from "@/lib/images";

type MetaInput = { title: string; description: string; path: string; image?: string; type?: "website" | "article" };

/** Builds unique title, description, canonical URL, OpenGraph and Twitter tags for a page. */
export function pageMeta({ title, description, path, image, type = "website" }: MetaInput): Metadata {
  const url = new URL(path, site.url).toString();
  const ogImage = image ?? img.og;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_ZA",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}
