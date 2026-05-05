import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import { fadeUp, staggerContainer, easeOutPremium } from "@/lib/motion";

const MILESTONES = [
  {
    period: "NOW",
    title: "Building real projects, every day.",
    body: "Focused on improving consistently — building, learning, and pushing toward opportunities where I can contribute, learn fast, and operate in high-performance environments.",
  },
  {
    period: "PROJECT · SERAFIMA.RO",
    title: "Built a real product end-to-end, from scratch.",
    body: "Designed the structure, layout, and front-end implementation myself. Prioritized clean architecture, performance, and intentional UI decisions over assembling a template.",
  },
  {
    period: "CRAFT",
    title: "Sharpened my eye for performance and UX details.",
    body: "Studied the small things that make interfaces feel fast and trustworthy: motion timing, hierarchy, contrast, perceived performance, and how users actually interact with what I build.",
  },
  {
    period: "BEYOND CODE",
    title: "Systems, data, and performance-driven thinking.",
    body: "From analyzing trading strategies to optimizing workflows, I gravitate toward turning fuzzy problems into measurable, logical processes.",
  },
];

export const Journey = () => {
  const reduced = useReducedMotion();

  return (
    <Section
      id="journey"
      testId="section-journey"
      eyebrow="04 — JOURNEY"
      title="Continuously building, learning, and refining my craft."
      description="No flashy resume bullets — just the path so far and what I’m focused on now."
    >
      <div className="relative">
        {/* Vertical rail */}
        <div
          aria-hidden
          className="absolute left-3 sm:left-4 top-1 bottom-1 w-px bg-gradient-to-b from-cyan-300/30 via-white/10 to-transparent"
        />

        <motion.ol
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={staggerContainer(0.1, 0.05)}
          className="flex flex-col gap-6"
        >
          {MILESTONES.map((m, i) => (
            <motion.li
              key={m.title}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easeOutPremium }}
              className="relative pl-10 sm:pl-12"
              data-testid={`journey-item-${i}`}
            >
              {/* Node */}
              <motion.span
                aria-hidden
                initial={reduced ? false : { scale: 0.6, opacity: 0 }}
                whileInView={reduced ? undefined : { scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.5, ease: easeOutPremium, delay: 0.05 + i * 0.05 }}
                className="absolute left-1.5 sm:left-2.5 top-3 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-300/90 shadow-[0_0_18px_rgba(34,211,238,0.55)]"
              >
                <span className="absolute inset-0 rounded-full bg-cyan-300/40 animate-ping" />
              </motion.span>

              <motion.div
                whileHover={reduced ? undefined : { y: -2 }}
                transition={{ duration: 0.4, ease: easeOutPremium }}
                className="glass p-5 sm:p-6 transition-colors duration-300 hover:border-white/20"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono-tag text-[10.5px] text-cyan-200/80">{m.period}</span>
                  <span className="font-mono-tag text-[10px] text-white/40">/0{i + 1}</span>
                </div>
                <h3 className="mt-3 text-[16px] sm:text-[17px] font-semibold text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-[13.5px] sm:text-[14px] text-white/65 leading-relaxed">
                  {m.body}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  );
};

export default Journey;
