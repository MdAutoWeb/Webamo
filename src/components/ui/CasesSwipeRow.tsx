"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CasesSwipeRow({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [dragging, setDragging] = useState(false);
  const pointerId = useRef<number | null>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const moved = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onTouchMove = (e: TouchEvent) => {
      if (!draggingRef.current) return;
      const touch = e.touches[0];
      if (!touch) return;

      const delta = touch.clientX - startX.current;
      if (Math.abs(delta) > 6) {
        moved.current = true;
        e.preventDefault();
      }
      el.scrollLeft = scrollLeft.current - delta;
    };

    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, []);

  const beginDrag = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    draggingRef.current = true;
    setDragging(true);
    moved.current = false;
    startX.current = clientX;
    scrollLeft.current = el.scrollLeft;
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    pointerId.current = e.pointerId;
    beginDrag(e.clientX);
    if (e.pointerType === "mouse") {
      ref.current?.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !draggingRef.current || pointerId.current !== e.pointerId) return;

    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 4) moved.current = true;
    el.scrollLeft = scrollLeft.current - delta;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || pointerId.current !== e.pointerId) return;

    if (e.pointerType === "mouse") {
      el.releasePointerCapture(e.pointerId);
    }
    pointerId.current = null;
    draggingRef.current = false;
    setDragging(false);

    if (moved.current) {
      window.setTimeout(() => {
        moved.current = false;
      }, 80);
    }
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    pointerId.current = -1;
    beginDrag(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    pointerId.current = null;
    draggingRef.current = false;
    setDragging(false);
    if (moved.current) {
      window.setTimeout(() => {
        moved.current = false;
      }, 80);
    }
  };

  return (
    <div className="relative -mx-5 overflow-visible">
      <div
        ref={ref}
        className={`mobile-swipe flex gap-5 overflow-x-auto snap-x snap-mandatory overscroll-x-contain px-5 pb-3 touch-pan-x [&_a]:touch-pan-x ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        role="list"
      >
        {children}
      </div>
    </div>
  );
}
