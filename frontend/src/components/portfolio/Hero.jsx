import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { PROFILE } from "@/data/portfolio";

const LINE1 = "Atharvi";
const LINE2 = "Desurkar";

function MaskedLine({ text, delayBase }) {
  return (
    <span className="block overflow-hidden">
      <span className="flex">
        {text.split("").map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              delay: delayBase + i * 0.04,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {ch}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPaths = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      data-testid="hero-section"
    >
      <motion.div style={{ y: yPaths }} className="absolute inset-0">
        <BackgroundPaths />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#090A0F]/20 via-transparent to-[#090A0F]" />

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full grid lg:grid-cols-[1.4fr_0.6fr] gap-12 items-center pt-28 pb-16"
      >
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs uppercase tracking-[0.3em] text-[#F5A524] font-mono-tech mb-6"
          >
            AI / ML Engineer · PES University
          </motion.p>

          <h1 className="font-display font-medium tracking-tighter leading-[0.92] text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <MaskedLine text={LINE1} delayBase={0.4} />
            <span className="text-[#F5A524]">
              <MaskedLine text={LINE2} delayBase={0.55} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-[#94A3B8]"
          >
            Curious engineer working across FinTech, information retrieval,
            computer vision and Generative AI — designing efficient systems that
            apply emerging technology to real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              data-testid="hero-work-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-[#F5A524] px-7 py-3.5 text-sm font-semibold text-[#090A0F] hover:bg-[#E59513] transition-colors duration-300"
            >
              Explore My Work
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              data-testid="hero-contact-btn"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white hover:border-[#F5A524]/60 hover:text-[#F5A524] transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="justify-self-center lg:justify-self-end w-full max-w-sm"
        >
          <div className="rounded-3xl border border-white/10 bg-[#12161D]/60 backdrop-blur-xl p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] border border-white/10">
              <img
                src={PROFILE.photo}
                alt="Atharvi Desurkar"
                className="h-full w-full object-cover grayscale-[0.15]"
                data-testid="hero-profile-img"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#F5A524]/20 rounded-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="font-display text-2xl">{PROFILE.name}</h3>
              <p className="text-sm text-[#94A3B8] mt-1">{PROFILE.role}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="hero-linkedin"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm text-[#94A3B8] hover:text-[#F5A524] hover:border-[#F5A524]/40 transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="hero-github"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm text-[#94A3B8] hover:text-[#F5A524] hover:border-[#F5A524]/40 transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
