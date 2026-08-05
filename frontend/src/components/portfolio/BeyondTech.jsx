import { Reveal, SectionLabel } from "@/components/portfolio/Reveal";
import { BEYOND } from "@/data/portfolio";
import { BookOpen, PenLine, Music, PawPrint, ArrowUpRight } from "lucide-react";

const ICONS = { BookOpen, PenLine, Music, PawPrint };

export default function BeyondTech() {
  return (
    <section id="beyond" className="relative py-24 md:py-32 bg-[#0B0D13]" data-testid="beyond-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel>/ Beyond Tech</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-5 max-w-xl leading-tight">
            The creative side of the story.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-4">
          {BEYOND.map((b, i) => {
            const Icon = ICONS[b.icon] || BookOpen;
            const Wrapper = b.link ? "a" : "div";
            return (
              <Reveal key={i} delay={(i % 2) * 0.08}>
                <Wrapper
                  {...(b.link ? { href: b.link, target: "_blank", rel: "noreferrer" } : {})}
                  data-testid={`beyond-${i}`}
                  className="group block h-full rounded-2xl border border-white/10 bg-[#12161D] p-8 hover:border-[#F5A524]/30 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-[#F5A524]/10 border border-[#F5A524]/20">
                      <Icon size={22} className="text-[#F5A524]" />
                    </div>
                    {b.link && (
                      <ArrowUpRight
                        size={20}
                        className="text-[#94A3B8] group-hover:text-[#F5A524] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-2xl tracking-tight mt-5">{b.title}</h3>
                  <p className="mt-3 text-[#94A3B8] leading-relaxed">{b.body}</p>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
