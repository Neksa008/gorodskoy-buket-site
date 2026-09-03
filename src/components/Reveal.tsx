import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
