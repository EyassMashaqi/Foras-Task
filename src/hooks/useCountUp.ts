import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, durationMs = 1700) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = Date.now();
      const timer = setInterval(() => {
        const t = Math.min(1, (Date.now() - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(target * eased));
        if (t >= 1) clearInterval(timer);
      }, 32);
    };

    const el = ref.current;
    let observer: IntersectionObserver | null = null;
    let fallback: number | undefined;
    if (el && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              run();
              observer?.disconnect();
            }
          }
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
    } else {
      run();
    }
    fallback = window.setTimeout(run, 700);

    return () => {
      observer?.disconnect();
      if (fallback) clearTimeout(fallback);
    };
  }, [target, durationMs]);

  return { value, ref };
}
