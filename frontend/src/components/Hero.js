import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import BackgroundFX from "@/components/BackgroundFX";
import MagneticButton from "@/components/MagneticButton";
import { easeOutPremium, staggerContainer, fadeUp } from "@/lib/motion";

const HEADLINE_LINES = [
  "I build fast, clean,",
  "and visually refined",
  "web experiences.",
];

const handleScrollTo = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Hero = () => {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-36 lg:pt-44 lg:pb-32 noise gridlines"
    >
      {/* Decorative background layers */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 540px at 18% 12%, rgba(34,211,238,0.16), transparent 60%), radial-gradient(720px 460px at 82% 30%, rgba(99,102,241,0.10), transparent 55%), radial-gradient(620px 420px at 55% 95%, rgba(16,185,129,0.08), transparent 60%)",
        }}
      />
      <BackgroundFX density={42} className="-z-10 opacity-[0.85]" />
      <div aria-hidden className="cursor-spotlight" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left copy */}
          <motion.div
            initial={reduced ? false : "hidden"}
            animate={reduced ? undefined : "show"}
            variants={staggerContainer(0.1, 0.1)}
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur px-3 py-1 text-[11px] font-mono-tag text-white/60"
              data-testid="hero-eyebrow"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-semibold text-white"
            >
              {HEADLINE_LINES.map((line, i) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.85, ease: easeOutPremium, delay: 0.1 + i * 0.08 },
                    },
                  }}
                  className="block"
                >
                  {i === 1 ? (
                    <>
                      and{" "}
                      <span className="accent-text">visually refined</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-[15px] sm:text-base text-white/60 leading-relaxed"
            >
              I’m Docuz Alexandru-Cristian — a software engineer focused on
              performance, clean code, and interfaces that actually feel good
              to use. Built from scratch, not from templates.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton>
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, "projects")}
                  data-testid="hero-view-work-button"
                  className="group inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-[14px] font-medium text-cyan-50 hover:border-cyan-300/45 hover:bg-cyan-300/15 transition-colors focus-ring"
                >
                  View Work
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  data-testid="hero-contact-button"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-[14px] font-medium text-white/85 hover:bg-white/[0.06] hover:border-white/20 transition-colors focus-ring"
                >
                  Contact
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-5 text-[12px] text-white/45"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono-tag text-[10.5px] text-white/55">CRAFT</span>
                <span className="h-px w-7 bg-white/15" />
                <span>Performance · UI/UX · Systems</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating featured card preview */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24, scale: 0.96 }}
            animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: easeOutPremium, delay: 0.25 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-6 -z-10 opacity-60 blur-2xl" style={{
                background: "radial-gradient(280px 220px at 30% 30%, rgba(34,211,238,0.30), transparent 60%), radial-gradient(220px 180px at 80% 70%, rgba(125,107,255,0.20), transparent 60%)",
              }} />

              <div
                className="glass glass-strong relative overflow-hidden p-5 sm:p-6"
                data-testid="hero-featured-preview"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-rose-400/70" />
                    <span className="flex h-2 w-2 rounded-full bg-amber-300/70" />
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400/70" />
                  </div>
                  <span className="font-mono-tag text-[10px] text-white/40">FEATURED · LIVE</span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-indigo-400/10">
                    <Sparkles size={16} className="text-cyan-200" />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-white">Serafima.ro</div>
                    <div className="text-[11.5px] text-white/50">Custom build · Clean UI · Performance</div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    { k: "Lighthouse", v: "98" },
                    { k: "LCP", v: "1.1s" },
                    { k: "Stack", v: "Custom" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="font-mono-tag text-[9.5px] text-white/45">{s.k}</div>
                      <div className="mt-1 text-[15px] font-semibold text-white">{s.v}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://serafima.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-featured-live-link"
                  className="group mt-5 inline-flex items-center justify-between w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[13px] text-white/80 hover:text-white hover:border-cyan-300/30 transition-colors"
                >
                  <span className="font-mono-tag text-[10.5px] text-cyan-200/80">VISIT →</span>
                  <span className="flex items-center gap-1">
                    serafima.ro
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
