import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowRight, Pin } from "@/components/ui/Icons";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className={`relative overflow-hidden bg-stone-light ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="img-zoom object-cover" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur">
          <Pin className="h-3.5 w-3.5 text-pool" /> {project.area}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-pool">{project.type}</p>
        <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Services delivered">
          {project.services.map((s) => (
            <li key={s} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-2">{s}</li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold">
          <span className="link-underline">View Project</span>
          <ArrowRight className="h-4 w-4 text-pool transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
