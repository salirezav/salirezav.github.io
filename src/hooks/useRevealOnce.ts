import { useLayoutEffect, useRef } from 'react';

const reduceMotionQuery = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion(): boolean {
  if (typeof window.matchMedia !== 'function') return false;
  return window.matchMedia(reduceMotionQuery).matches;
}

/** Fade a section in once. Without JS the node has no reveal attribute and stays visible. */
export function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) return;

    el.setAttribute('data-reveal', 'pending');
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      requestAnimationFrame(() => {
        el.setAttribute('data-reveal', 'shown');
      });
    }, { threshold: 0 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
