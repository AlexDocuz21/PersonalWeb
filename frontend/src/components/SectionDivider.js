import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle gradient sweep separator between major sections.
 * - Renders a thin line that fades in + draws across when entering viewport.
 */
export const SectionDivider = ({ className = "" }) => {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className={`relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 ${className}`}
    >
      <motion.div
        initial={reduced ? false : { scaleX: 0, opacity: 0 }}
        whileInView={reduced ? undefined : { scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent"
      />
    </div>
  );
};

export default SectionDivider;
