import { Reveal, SectionLabel } from "@/components/portfolio/Reveal";
import { MANIFESTO, PROFILE } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32" data-testid="about-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Reveal>
              <SectionLabel>/ About</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-5 leading-tight">
                Engineering meets curiosity.
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-[#94A3B8] max-w-md">
                {PROFILE.summary}
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {MANIFESTO.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.08}>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#12161D] p-8 md:p-10 hover:border-[#F5A524]/30 transition-colors duration-300">
                  <span className="pointer-events-none absolute -top-6 right-4 font-display text-[9rem] leading-none text-white/[0.04] select-none">
                    {m.n}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight relative z-10">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-[#94A3B8] leading-relaxed relative z-10 max-w-xl">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
