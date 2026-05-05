import { motion, useReducedMotion } from "framer-motion";
import { revealVariant, easeOutPremium } from "@/lib/motion";

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  testId,
}) => {
  const reduced = useReducedMotion();

  return (
    <section
      id={id}
      data-testid={testId || `section-${id}`}
      className={`section-anchor relative py-20 sm:py-24 lg:py-32 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <motion.div
            initial={reduced ? false : "hidden"}
            whileInView={reduced ? undefined : "show"}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            variants={revealVariant}
            transition={{ duration: 0.7, ease: easeOutPremium }}
            className="mb-10 sm:mb-14"
          >
            {eyebrow && (
              <div className="font-mono-tag text-[11px] text-cyan-300/70 mb-3">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white max-w-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
