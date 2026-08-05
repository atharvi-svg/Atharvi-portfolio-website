import { Reveal, SectionLabel } from "@/components/portfolio/Reveal";
import { EXPERIENCE, ACHIEVEMENTS } from "@/data/portfolio";
import { Trophy } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#0B0D13]" data-testid="experience-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel>/ Experience</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-5 leading-tight">
            Research, roles & impact.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1.3fr_0.7fr] gap-12">
          <div className="relative border-l border-white/10 pl-8 md:pl-10 space-y-12">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[49px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#F5A524] shadow-[0_0_20px_rgba(245,165,36,0.6)]" />
                  <span className="font-mono-tech text-xs text-[#F5A524]">{e.period}</span>
                  <h3 className="font-display text-xl md:text-2xl tracking-tight mt-1.5">{e.role}</h3>
                  <p className="text-sm text-white/70 mt-1">{e.org}</p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#94A3B8] leading-relaxed">
                        <span className="text-[#F5A524] mt-1.5 h-1 w-1 rounded-full bg-[#F5A524] shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28 rounded-2xl border border-white/10 bg-[#12161D] p-8">
              <div className="flex items-center gap-2.5">
                <Trophy size={18} className="text-[#F5A524]" />
                <h3 className="font-display text-xl tracking-tight">Achievements</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {ACHIEVEMENTS.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#94A3B8] leading-relaxed">
                    <span className="font-mono-tech text-[#F5A524] text-xs pt-0.5">0{i + 1}</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
