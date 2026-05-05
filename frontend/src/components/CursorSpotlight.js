import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Tracks the cursor and writes --mx / --my CSS variables on the document root.
 * Powers the .cursor-spotlight overlay used in Hero. Disabled for touch /
 * reduced-motion users.
 */
export const CursorSpotlight = () => {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return undefined;

    let frame = 0;
    const handle = (e) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
        document.documentElement.style.setProperty("--my", `${e.clientY + window.scrollY}px`);
        frame = 0;
      });
    };

    window.addEventListener("mousemove", handle, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handle);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return null;
};

export default CursorSpotlight;
