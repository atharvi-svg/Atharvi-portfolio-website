import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { SectionLabel } from "@/components/portfolio/Reveal";
import { PROJECTS } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32" data-testid="projects-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>/ Selected Work</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-5 leading-tight">
              Projects & research.
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-sm md:text-right">
            Hover a card for the spotlight — click to open the repository.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              data-testid={`project-card-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group block"
            >
              <GlowCard customSize glowColor="gold" className="h-full min-h-[300px] p-7">
                <div className="relative z-10 flex h-full flex-col">
                  <span className="font-mono-tech text-xs text-[#F5A524]">{p.meta}</span>
                  <h3 className="font-display text-2xl tracking-tight mt-3 text-white group-hover:text-[#F5A524] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#94A3B8] flex-1">
                    {p.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-[#94A3B8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                    View on GitHub
                    <ArrowUpRight
                      size={16}
                      className="text-[#F5A524] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </GlowCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
