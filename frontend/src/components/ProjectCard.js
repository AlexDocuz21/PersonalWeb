import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { easeOutPremium } from "@/lib/motion";

export const ProjectCard = ({
  project,
  featured = false,
  index = 0,
}) => {
  const reduced = useReducedMotion();
  const {
    title,
    description,
    tags = [],
    href = "#",
    cta = "Live Preview",
    accent = "cyan",
    note,
    available = true,
  } = project;

  const accentMap = {
    cyan: { from: "from-cyan-300/30", to: "to-blue-400/10", text: "text-cyan-200", glow: "rgba(34,211,238,0.18)" },
    violet: { from: "from-violet-400/25", to: "to-fuchsia-400/10", text: "text-violet-200", glow: "rgba(167,139,250,0.18)" },
    emerald: { from: "from-emerald-400/25", to: "to-teal-400/10", text: "text-emerald-200", glow: "rgba(52,211,153,0.18)" },
    amber: { from: "from-amber-300/25", to: "to-orange-400/10", text: "text-amber-200", glow: "rgba(252,211,77,0.18)" },
  };
  const a = accentMap[accent] || accentMap.cyan;

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 22, filter: "blur(6px)" }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: easeOutPremium, delay: index * 0.05 }}
      whileHover={reduced ? undefined : { y: -4 }}
      className={`sheen group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-7 transition-colors duration-300 hover:border-white/20 ${
        featured ? "lg:col-span-2 lg:row-span-2 sm:p-8 lg:p-10" : ""
      }`}
      data-testid={featured ? "projects-featured-card" : `project-card-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    >
      {/* Accent corner glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-50 blur-3xl bg-gradient-to-br ${a.from} ${a.to} transition-opacity duration-500 group-hover:opacity-80`}
      />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {featured && (
            <span className="font-mono-tag text-[10px] text-cyan-200/80 border border-cyan-300/20 bg-cyan-300/10 rounded-full px-2 py-[3px]">
              FEATURED · BUILT FROM SCRATCH
            </span>
          )}
          {!featured && (
            <span className="font-mono-tag text-[10px] text-white/55 border border-white/10 bg-white/[0.03] rounded-full px-2 py-[3px]">
              {available ? "PROJECT" : "COMING SOON"}
            </span>
          )}
        </div>
        <span
          aria-hidden
          className={`inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/[0.04] ${a.text}`}
        >
          <Code2 size={15} />
        </span>
      </div>

      <h3
        className={`relative mt-5 font-semibold text-white tracking-tight ${
          featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl"
        }`}
      >
        {title}
      </h3>

      <p
        className={`relative mt-3 text-white/65 leading-relaxed ${
          featured ? "text-[15px] sm:text-base max-w-xl" : "text-[13.5px]"
        }`}
      >
        {description}
      </p>

      {tags.length > 0 && (
        <div className="relative mt-5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono-tag text-[10px] text-white/65 border border-white/10 bg-white/[0.03] rounded-full px-2 py-[3px]"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="relative mt-6 flex items-center justify-between gap-3">
        {available ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            data-testid={featured ? "projects-featured-live-preview-button" : `project-cta-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="group/cta inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-2 text-[13px] text-white/85 hover:text-white hover:border-cyan-300/30 hover:bg-white/[0.06] transition-colors"
          >
            <span>{cta}</span>
            {href.startsWith("http") ? (
              <ExternalLink size={13} className="transition-transform duration-300 group-hover/cta:translate-x-0.5" />
            ) : (
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            )}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 text-[13px] text-white/45">
            In progress
          </span>
        )}
        {note && (
          <span className="font-mono-tag text-[10px] text-white/40">{note}</span>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
