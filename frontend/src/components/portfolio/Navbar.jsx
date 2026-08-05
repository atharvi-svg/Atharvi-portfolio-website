import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "bg-[#090A0F]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight" data-testid="logo">
          Atharvi<span className="text-[#F5A524]">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-testid={`nav-${l.label.toLowerCase()}`}
                className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.resume}
            download
            data-testid="resume-download-btn"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#F5A524]/40 bg-[#F5A524]/10 px-5 py-2.5 text-sm font-medium text-[#F5A524] hover:bg-[#F5A524] hover:text-[#090A0F] transition-colors duration-300"
          >
            <ArrowDownToLine size={16} /> Résumé
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            data-testid="hamburger-btn"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-[#090A0F]/95 backdrop-blur-xl border-b border-white/10"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[#94A3B8] hover:text-[#F5A524] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={PROFILE.resume}
                download
                className="mt-2 w-fit rounded-full border border-[#F5A524]/40 bg-[#F5A524]/10 px-5 py-2.5 text-sm text-[#F5A524]"
              >
                Download Résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
