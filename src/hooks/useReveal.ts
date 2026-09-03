import { useEffect, useRef, useState } from "react";

/** Adds a fade/rise-in class once the element scrolls into view. No-ops for prefers-reduced-motion. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Double rAF: guarantees the browser has painted the initial
          // (invisible) state at least once before we flip the class, so the
          // transition always has something to animate from — without this,
          // an element that's already near-visible when the observer attaches
          // can jump straight to its end state with no visible fade.
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, className: visible ? "reveal reveal-visible" : "reveal" };
}
