import { MARQUEE } from "@/data/portfolio";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div
      className="relative py-8 border-y border-white/10 bg-[#0B0D13] overflow-hidden"
      data-testid="marquee"
    >
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-16 pr-16 shrink-0">
            <span className="font-mono-tech text-3xl md:text-4xl tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(148,163,184,0.35)]">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-[#F5A524]" />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0D13] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0D13] to-transparent" />
    </div>
  );
}
