"use client";

import { useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DRAG_THRESHOLD = 10;

export default function CasesSwipeRow({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const pointerId = useRef<number | null>(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const didDrag = useRef(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || e.pointerType !== "mouse") return;

    pointerId.current = e.pointerId;
    startX.current = e.clientX;
    startY.current = e.clientY;
    scrollLeft.current = ref.current?.scrollLeft ?? 0;
    didDrag.current = false;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || pointerId.current !== e.pointerId) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    if (!didDrag.current) {
      if (Math.abs(dx) < DRAG_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
      didDrag.current = true;
      setDragging(true);
      el.setPointerCapture(e.pointerId);
    }

    el.scrollLeft = scrollLeft.current - dx;
  };

  const endPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || pointerId.current !== e.pointerId) return;

    if (didDrag.current) {
      el.releasePointerCapture(e.pointerId);
      const blockClick = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopImmediatePropagation();
      };
      el.addEventListener("click", blockClick, { capture: true, once: true });
    }

    pointerId.current = null;
    didDrag.current = false;
    setDragging(false);
  };

  return (
    <div className="relative -mx-5 overflow-visible">
      <div
        ref={ref}
        className={`mobile-swipe flex gap-5 overflow-x-auto snap-x snap-mandatory overscroll-x-contain px-5 pb-3 touch-pan-x ${
          dragging ? "cursor-grabbing" : ""
        }`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        role="list"
      >
        {children}
      </div>
    </div>
  );
}
