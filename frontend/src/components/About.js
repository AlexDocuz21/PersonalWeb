import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Gauge, Sparkles } from "lucide-react";
import Section from "@/components/Section";
import { fadeUp, staggerContainer, easeOutPremium } from "@/lib/motion";

const PRINCIPLES = [
  { icon: Cpu, label: "Clean code", hint: "Structured, readable, intentional" },
  { icon: Gauge, label: "Performance", hint: "Fast loads, smooth interactions" },
  { icon: Sparkles, label: "UI / UX awareness", hint: "Design with the user in mind" },
];

const PARAGRAPHS = [
  "I'm Docuz Alexandru-Cristian, a software engineer focused on building clean, high-performance web experiences that actually feel good to use.",
  "I didn’t get into development just to make things “work.” I care about how things behave, how fast they load, and how users interact with them — I tend to approach projects with both a developer and a product mindset.",
  "One of my core projects, Serafima.ro, was built entirely from scratch. It reflects how I think about development: structured code, modern UI decisions, and a strong focus on performance. I prefer building things myself rather than relying heavily on templates.",
  "Outside of pure development, I’m deeply interested in systems, data, and performance-driven thinking — from analyzing trading strategies to improving workflows. I gravitate toward optimizing processes and making decisions based on logic rather than guesswork.",
];

export const About = () => {
  const reduced = useReducedMotion();

  return (
    <Section id="about" testId="section-about" eyebrow="01 — ABOUT" title="Engineering with a product mindset.">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: small label column */}
        <motion.div
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={staggerContainer(0.1, 0.05)}
          className="lg:col-span-4"
        >
          <motion.div variants={fadeUp} className="font-mono-tag text-[11px] text-white/45">
            BASED IN ROMANIA · OPEN TO REMOTE
          </motion.div>
          <motion.p variants={fadeUp} className="mt-3 text-[15px] text-white/70 leading-relaxed">
            Continuously building, learning, and refining my craft — with a
            bias toward shipping things that feel intentional.
          </motion.p>

          <div className="mt-8 flex flex-col gap-3">
            {PRINCIPLES.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.label}
                  variants={fadeUp}
                  whileHover={reduced ? undefined : { y: -2 }}
                  transition={{ duration: 0.4, ease: easeOutPremium }}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur px-3.5 py-3 hover:border-cyan-300/25 hover:bg-white/[0.06] transition-colors"
                  data-testid={`about-principle-${idx}`}
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200 group-hover:text-cyan-100">
                    <Icon size={15} />
                  </span>
                  <div className="flex-1">
                    <div className="text-[13.5px] font-medium text-white">{p.label}</div>
                    <div className="text-[11.5px] text-white/50">{p.hint}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: glass panel with paragraphs */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: easeOutPremium }}
          className="lg:col-span-8 relative"
        >
          <div className="glass relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(34,211,238,0.30), transparent 60%)" }}
            />
            <div className="relative space-y-5">
              {PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className={`text-[15px] sm:text-[15.5px] leading-[1.75] ${
                    i === 0 ? "text-white" : "text-white/70"
                  }`}
                >
                  {p}
                </p>
              ))}
              <div className="divider-fade my-2" />
              <p className="text-[14px] text-white/60 leading-relaxed">
                Right now, I’m focused on improving every day, building real
                projects, and pushing toward opportunities where I can
                contribute, learn fast, and operate in high-performance
                environments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
