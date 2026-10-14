export function Tag({ children, tone = "stone" }: { children: React.ReactNode; tone?: "stone" | "pool" | "white" }) {
  const t =
    tone === "pool" ? "bg-pool-soft text-pool" : tone === "white" ? "bg-white/90 text-ink backdrop-blur" : "bg-stone-light text-ink-2";
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${t}`}>
      {children}
    </span>
  );
}
