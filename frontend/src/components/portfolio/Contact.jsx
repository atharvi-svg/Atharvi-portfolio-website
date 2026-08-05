import { useState } from "react";
import { toast } from "sonner";
import { Reveal, SectionLabel } from "@/components/portfolio/Reveal";
import { PROFILE } from "@/data/portfolio";
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setLoading(true);
    try {
      const res = await fetch(PROFILE.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast.success("Message sent — thank you! I'll be in touch soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please email me directly.");
      }
    } catch {
      toast.error("Network error. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-[#090A0F] px-4 py-3.5 text-white placeholder:text-[#5b6472] outline-none focus:border-[#F5A524]/60 transition-colors duration-200";

  const contacts = [
    { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}`, testid: "contact-email" },
    { icon: Phone, label: PROFILE.phone, href: `tel:${PROFILE.phone}`, testid: "contact-phone" },
    { icon: Linkedin, label: "LinkedIn Profile", href: PROFILE.linkedin, testid: "contact-linkedin" },
    { icon: Github, label: "GitHub Projects", href: PROFILE.github, testid: "contact-github" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32" data-testid="contact-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <SectionLabel>/ Contact</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mt-5 leading-[1.05]">
              Let&apos;s build
              <br />
              <span className="text-[#F5A524]">something.</span>
            </h2>
            <p className="mt-6 text-[#94A3B8] leading-relaxed max-w-md">
              Open to internships, research collaborations and interesting AI
              projects. Drop a message or reach me directly.
            </p>

            <div className="mt-10 space-y-3">
              {contacts.map((c) => (
                <a
                  key={c.testid}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-testid={c.testid}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#12161D] px-5 py-4 hover:border-[#F5A524]/40 transition-colors duration-300"
                >
                  <c.icon size={18} className="text-[#F5A524]" />
                  <span className="text-[#94A3B8] group-hover:text-white transition-colors">{c.label}</span>
                  <ArrowUpRight size={16} className="ml-auto text-[#5b6472] group-hover:text-[#F5A524] transition-colors" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-[#12161D] p-8"
              data-testid="contact-form"
            >
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#94A3B8]">Name</label>
                  <input name="name" required placeholder="Your name" className={`${inputCls} mt-2`} data-testid="input-name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#94A3B8]">Email</label>
                  <input name="email" type="email" required placeholder="you@email.com" className={`${inputCls} mt-2`} data-testid="input-email" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#94A3B8]">Message</label>
                  <textarea name="message" rows={5} required placeholder="Tell me about it…" className={`${inputCls} mt-2 resize-none`} data-testid="input-message" />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#F5A524] px-6 py-3.5 font-semibold text-[#090A0F] hover:bg-[#E59513] disabled:opacity-60 transition-colors duration-300"
                >
                  {loading ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
