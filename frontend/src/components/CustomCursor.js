import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Custom cursor: small cyan dot that grows into a ring when hovering
 * interactive elements. Smooth lerp lag (~100ms feel). Disabled on touch /
 * reduced-motion.
 */
export const CustomCursor = () => {
  const reduced = useReducedMotion();
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (reduced) return undefined;
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHover = false;
    let isDown = false;
    let rafId = 0;

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label[for], [data-cursor="hover"]';

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onOver = (e) => {
      const t = e.target;
      if (t && t.closest && t.closest(interactiveSelector)) isHover = true;
    };
    const onOut = (e) => {
      const t = e.target;
      if (t && t.closest && t.closest(interactiveSelector)) isHover = false;
    };
    const onDown = () => {
      isDown = true;
    };
    const onUp = () => {
      isDown = false;
    };
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = isHover ? "0" : "1";
      if (ringRef.current) ringRef.current.style.opacity = isHover ? "1" : "0.55";
    };

    const tick = () => {
      // Dot follows fast, ring follows with subtle lag
      dotX += (mouseX - dotX) * 0.55;
      dotY += (mouseY - dotY) * 0.55;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%) scale(${
          isDown ? 0.5 : 1
        })`;
        dotRef.current.style.opacity = isHover ? "0" : "1";
      }
      if (ringRef.current) {
        const scale = isHover ? (isDown ? 0.85 : 1) : 0.32;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.opacity = isHover ? "1" : "0.55";
        ringRef.current.style.borderColor = isHover
          ? "rgba(125, 220, 240, 0.85)"
          : "rgba(125, 220, 240, 0.45)";
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("blur", onLeave);
    window.addEventListener("focus", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("focus", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [reduced]);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden />
    </>
  );
};

export default CustomCursor;
