"use client";

import { useRef, useEffect, type ReactNode, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger entre hijos directos. 0 = anima el bloque completo. */
  stagger?: number;
  /** Selector de hijos a animar en cascada (por defecto los hijos directos). */
  childSelector?: string;
  as?: ElementType;
  y?: number;
  delay?: number;
};

/**
 * Scroll-reveal con GSAP + ScrollTrigger.
 * A11y: respeta prefers-reduced-motion — si el usuario lo pide, el contenido
 * aparece instantáneamente sin animación (nunca queda oculto).
 */
export default function Reveal({
  children,
  className,
  stagger = 0,
  childSelector,
  as,
  y = 28,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // A11y: sin animación, contenido visible de inmediato.
    if (prefersReduced) {
      gsap.set(el, { clearProps: "all", opacity: 1, y: 0 });
      const kids = childSelector
        ? el.querySelectorAll(childSelector)
        : (Array.from(el.children) as Element[]);
      gsap.set(kids, { clearProps: "all", opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      if (stagger > 0) {
        const targets = childSelector
          ? el.querySelectorAll(childSelector)
          : (Array.from(el.children) as Element[]);
        gsap.from(targets, {
          opacity: 0,
          y,
          duration: 0.6,
          delay,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
      } else {
        gsap.from(el, {
          opacity: 0,
          y,
          duration: 0.7,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [stagger, childSelector, y, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
