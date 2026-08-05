import { Reveal, SectionLabel } from "@/components/portfolio/Reveal";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#0B0D13]" data-testid="skills-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel>/ Skills</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-5 max-w-2xl leading-tight">
            The toolkit behind the work.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#12161D] p-7 hover:border-[#F5A524]/30 transition-colors duration-300">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl tracking-tight text-white">{s.group}</h3>
                  <span className="font-mono-tech text-xs text-[#F5A524]">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-[#94A3B8] hover:text-white hover:border-[#F5A524]/40 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
