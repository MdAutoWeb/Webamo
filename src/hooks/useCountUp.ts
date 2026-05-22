"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export function useCountUp(target: number, duration = 1.2) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduced) { setCount(target); return; }

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, reduced, target, duration]);

  return { ref, count };
}
