import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { easeOutPremium } from "@/lib/motion";

const LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = ["hero", ...LINKS.map((l) => l.id)];
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: easeOutPremium }}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(100%,72rem)] px-4"
      data-testid="site-navbar"
    >
      <div
        className={`mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-[padding,background-color,box-shadow] duration-300 ${
          scrolled
            ? "py-2 px-4 bg-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            : "py-3 px-5 shadow-[0_6px_22px_rgba(0,0,0,0.25)]"
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "hero")}
          className="flex items-center gap-2 text-white/90 hover:text-white"
          data-testid="navbar-brand"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/15 bg-white/[0.06] font-mono-tag text-[11px] text-cyan-200">
            DA
          </span>
          <span className="hidden sm:inline text-[13px] tracking-tight text-white/80">
            Docuz Alexandru-Cristian
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                data-testid={`navbar-link-${link.id}`}
                className="relative px-3 py-2 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className="hidden md:inline-flex items-center gap-1.5 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-1.5 text-[12.5px] font-medium text-cyan-100 hover:border-cyan-300/40 hover:bg-cyan-300/15 transition-colors"
            data-testid="navbar-cta-contact"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            data-testid="navbar-mobile-menu-button"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] text-white/80 hover:text-white"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: easeOutPremium }}
            className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[#0A0F18]/85 backdrop-blur-xl p-2"
            data-testid="navbar-mobile-menu"
          >
            <ul className="flex flex-col">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    data-testid={`navbar-mobile-link-${link.id}`}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] text-white/80 hover:text-white hover:bg-white/[0.05] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono-tag text-[10px] text-white/40">/0{LINKS.indexOf(link) + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
