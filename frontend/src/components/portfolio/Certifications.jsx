import { Reveal, SectionLabel } from "@/components/portfolio/Reveal";
import { CERTIFICATIONS } from "@/data/portfolio";
import { Link2, Brain, BarChart3, Code2, Sparkles, Layers, Palette, BadgeCheck } from "lucide-react";

const ICONS = { Link2, Brain, BarChart3, Code2, Sparkles, Layers, Palette };

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32" data-testid="certifications-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel>/ Credentials</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-5 leading-tight">
            Certifications.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((c, i) => {
            const Icon = ICONS[c.icon] || BadgeCheck;
            return (
              <Reveal key={i} delay={(i % 3) * 0.07}>
                <div
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#12161D] p-6 hover:border-[#F5A524]/30 hover:-translate-y-1 transition-[transform,border-color] duration-300"
                  data-testid={`cert-${i}`}
                >
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-[#F5A524]/10 border border-[#F5A524]/20 shrink-0">
                    <Icon size={20} className="text-[#F5A524]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white leading-snug group-hover:text-[#F5A524] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] mt-1">{c.org}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
