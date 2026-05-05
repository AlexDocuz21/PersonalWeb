import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Wraps an element with a subtle magnetic hover effect (cursor pulls the
 * element up to ~10px on desktop). Disabled on touch / reduced-motion.
 */
export const MagneticButton = ({ children, strength = 14, className = "", ...rest }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const handleMove = (e) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ display: "inline-block", transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.span>
  );
};

export default MagneticButton;
