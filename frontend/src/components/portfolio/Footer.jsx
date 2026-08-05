import { PROFILE } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0D13]" data-testid="footer">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg">
            Atharvi<span className="text-[#F5A524]">.</span>
          </p>
          <p className="text-sm text-[#94A3B8] mt-1">
            © 2026 Atharvi Desurkar — Designed & built with care.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="grid place-items-center h-10 w-10 rounded-full border border-white/10 text-[#94A3B8] hover:text-[#F5A524] hover:border-[#F5A524]/40 transition-colors" data-testid="footer-github"><Github size={18} /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="grid place-items-center h-10 w-10 rounded-full border border-white/10 text-[#94A3B8] hover:text-[#F5A524] hover:border-[#F5A524]/40 transition-colors" data-testid="footer-linkedin"><Linkedin size={18} /></a>
          <a href={`mailto:${PROFILE.email}`} className="grid place-items-center h-10 w-10 rounded-full border border-white/10 text-[#94A3B8] hover:text-[#F5A524] hover:border-[#F5A524]/40 transition-colors" data-testid="footer-email"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
