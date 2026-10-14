type Props = {
  eyebrow?: string;
  title: string;
  accent?: string;
  intro?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  tone?: "light" | "dark";
  size?: "display" | "h2";
  className?: string;
};

export function Eyebrow({ children, tone = "light", className = "", color }: { children: React.ReactNode; tone?: "light" | "dark"; className?: string; color?: string }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.32em] sm:text-xs ${color ?? (tone === "dark" ? "text-stone" : "text-pool")} ${className}`}>
      {children}
    </p>
  );
}

/**
 * Signature heading: bold first line, light italic accent line in pool blue.
 * Mirrors the editorial two-tone treatment of the design reference.
 */
export function Heading({ eyebrow, title, accent, intro, as = "h2", align = "left", tone = "light", size, className = "" }: Props) {
  const Tag = as;
  const sz = size ?? (as === "h1" ? "display" : "h2");
  const center = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-3xl ${center} ${className}`}>
      {eyebrow && <Eyebrow tone={tone} className="mb-5">{eyebrow}</Eyebrow>}
      <Tag className={`${sz === "display" ? "text-display" : "text-h2"} text-balance font-bold ${tone === "dark" ? "text-white" : "text-ink"}`}>
        {title}
        {accent && (
          <>
            {" "}
            <span className={`block pb-1 font-light italic ${tone === "dark" ? "text-[#8FC3D8]" : "text-pool"}`}>{accent}</span>
          </>
        )}
      </Tag>
      {intro && (
        <p className={`mt-6 max-w-2xl text-[17px] leading-[1.75] sm:text-lg ${center ? "mx-auto" : ""} ${tone === "dark" ? "text-white/70" : "text-ink-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
