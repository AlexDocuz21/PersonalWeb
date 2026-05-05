import { motion, useReducedMotion } from "framer-motion";
import {
  Code,
  Server,
  Wrench,
  Database,
  Boxes,
  Layers,
  Globe,
  Github,
  Terminal,
  GitBranch,
  Figma,
  Cpu,
} from "lucide-react";
import Section from "@/components/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";

const CATEGORIES = [
  {
    title: "Frontend",
    icon: Code,
    accent: "cyan",
    skills: [
      { name: "React", icon: Boxes },
      { name: "JavaScript / TypeScript", icon: Code },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Framer Motion", icon: Cpu },
      { name: "HTML / CSS", icon: Globe },
      { name: "UI / UX details", icon: Layers },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "violet",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python / FastAPI", icon: Terminal },
      { name: "REST APIs", icon: Globe },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Auth & Sessions", icon: Server },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    accent: "emerald",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Linux / CLI", icon: Terminal },
      { name: "Figma", icon: Figma },
      { name: "Performance tooling", icon: Cpu },
      { name: "CI / Deploy", icon: Wrench },
    ],
  },
];

const accentRing = {
  cyan: "hover:border-cyan-300/40 hover:bg-cyan-300/5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.22),0_0_28px_rgba(34,211,238,0.12)]",
  violet: "hover:border-violet-300/40 hover:bg-violet-300/5 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.22),0_0_28px_rgba(167,139,250,0.12)]",
  emerald: "hover:border-emerald-300/40 hover:bg-emerald-300/5 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.22),0_0_28px_rgba(52,211,153,0.12)]",
};

const accentText = {
  cyan: "text-cyan-200",
  violet: "text-violet-200",
  emerald: "text-emerald-200",
};

export const Skills = () => {
  const reduced = useReducedMotion();

  return (
    <Section
      id="skills"
      testId="section-skills"
      eyebrow="03 — SKILLS"
      title="Tools I rely on, refined over real projects."
      description="Not a checklist — these are the things I actually reach for when building."
    >
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
        {CATEGORIES.map((cat, ci) => {
          const HeadIcon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={reduced ? false : "hidden"}
              whileInView={reduced ? undefined : "show"}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              variants={staggerContainer(0.06, 0.05 + ci * 0.06)}
              className="glass relative overflow-hidden p-6 sm:p-7"
              data-testid={`skills-category-${cat.title.toLowerCase()}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/[0.04] ${accentText[cat.accent]}`}
                  >
                    <HeadIcon size={15} />
                  </span>
                  <h3 className="text-[15.5px] font-semibold text-white">{cat.title}</h3>
                </div>
                <span className="font-mono-tag text-[10px] text-white/40">0{ci + 1}</span>
              </div>

              <motion.ul
                variants={staggerContainer(0.05, 0.1)}
                className="mt-5 flex flex-wrap gap-2"
              >
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.li
                      key={skill.name}
                      variants={fadeUp}
                      className={`skill-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12.5px] text-white/80 ${accentRing[cat.accent]}`}
                    >
                      <Icon
                        size={12}
                        className={`skill-pill-icon ${accentText[cat.accent]}`}
                      />
                      <span>{skill.name}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
