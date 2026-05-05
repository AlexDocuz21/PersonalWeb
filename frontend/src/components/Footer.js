import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { easeOutPremium } from "@/lib/motion";

export const Footer = () => {
  const reduced = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="relative mt-12 border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 8 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutPremium }}
          className="flex items-center gap-3"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] font-mono-tag text-[11px] text-cyan-200">
            DA
          </span>
          <div className="flex flex-col">
            <span className="text-[13.5px] text-white">Docuz Alexandru-Cristian</span>
            <span className="font-mono-tag text-[10.5px] text-white/45">
              {year} · Built with intention
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 8 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutPremium, delay: 0.05 }}
          className="flex items-center gap-2"
        >
          {[
            { label: "GitHub", icon: Github, href: "https://github.com/" },
            { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/" },
            { label: "Email", icon: Mail, href: "mailto:hello@example.com" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                data-testid={`footer-social-${s.label.toLowerCase()}`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] text-white/65 hover:text-white hover:border-cyan-300/25 hover:bg-white/[0.06] transition-colors"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-8">
        <div className="divider-fade" />
        <p className="mt-5 font-mono-tag text-[10.5px] text-white/35">
          DESIGNED & BUILT FROM SCRATCH · NO TEMPLATES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
