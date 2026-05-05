import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animates a numeric (or numeric-like) value from 0 to `value` when scrolled
 * into view. Supports decimals + suffix (e.g. "s", "ms", "%").
 */
export const CountUp = ({
  value,
  duration = 1100,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
  ...rest
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      setDisplay(value);
      return undefined;
    }

    let raf = 0;
    const start = performance.now();
    const from = 0;
    const to = Number(value);

    const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = ease(t);
      const next = from + (to - from) * eased;
      setDisplay(next);
      if (t < 1) raf = window.requestAnimationFrame(step);
    };
    raf = window.requestAnimationFrame(step);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [inView, value, duration, reduced]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref} className={className} {...rest}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default CountUp;
