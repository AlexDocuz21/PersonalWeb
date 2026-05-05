import { motion, useReducedMotion } from "framer-motion";

/**
 * Slow-moving radial gradient blobs that sit UNDER the constellation particles.
 * Provides ambient visual depth without competing with content. Fully GPU
 * (transform/opacity only). Disabled when prefers-reduced-motion.
 */
export const GradientMesh = ({ className = "" }) => {
  const reduced = useReducedMotion();

  const blobs = [
    {
      bg: "radial-gradient(closest-side, rgba(34,211,238,0.22), rgba(34,211,238,0) 70%)",
      size: 720,
      from: { x: "-10%", y: "-15%" },
      to: { x: "6%", y: "4%" },
      duration: 22,
    },
    {
      bg: "radial-gradient(closest-side, rgba(59,130,246,0.16), rgba(59,130,246,0) 70%)",
      size: 640,
      from: { x: "60%", y: "-20%" },
      to: { x: "40%", y: "10%" },
      duration: 28,
    },
    {
      bg: "radial-gradient(closest-side, rgba(125,107,255,0.13), rgba(125,107,255,0) 70%)",
      size: 560,
      from: { x: "70%", y: "55%" },
      to: { x: "55%", y: "75%" },
      duration: 32,
    },
    {
      bg: "radial-gradient(closest-side, rgba(16,185,129,0.10), rgba(16,185,129,0) 70%)",
      size: 600,
      from: { x: "-5%", y: "70%" },
      to: { x: "15%", y: "55%" },
      duration: 26,
    },
  ];

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 -z-20 overflow-hidden ${className}`}
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ x: b.from.x, y: b.from.y, opacity: 0 }}
          animate={
            reduced
              ? { x: b.from.x, y: b.from.y, opacity: 1 }
              : {
                  x: [b.from.x, b.to.x, b.from.x],
                  y: [b.from.y, b.to.y, b.from.y],
                  opacity: 1,
                }
          }
          transition={
            reduced
              ? { duration: 0.5 }
              : {
                  x: { duration: b.duration, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: b.duration * 1.05, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 1.4, ease: "easeOut" },
                }
          }
          style={{
            position: "absolute",
            width: b.size,
            height: b.size,
            background: b.bg,
            filter: "blur(20px)",
            willChange: "transform",
            mixBlendMode: "screen",
          }}
        />
      ))}
    </div>
  );
};

export default GradientMesh;
