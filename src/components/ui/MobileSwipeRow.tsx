import { Children, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Tailwind grid classes from md breakpoint, e.g. "md:grid-cols-3" */
  desktopCols: string;
  /** Card width on mobile */
  itemWidth?: string;
  hintClassName?: string;
};

export default function MobileSwipeRow({
  children,
  desktopCols,
  itemWidth = "w-[min(88vw,300px)]",
  hintClassName = "text-[#9CA3AF]",
}: Props) {
  const items = Children.toArray(children);

  return (
    <div className="md:static relative">
      <div
        className={`mobile-swipe flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:gap-6 md:overflow-visible md:snap-none md:pb-0 ${desktopCols}`}
      >
        {items.map((child, i) => (
          <div
            key={i}
            className={`snap-start shrink-0 ${itemWidth} md:w-auto md:shrink md:snap-align-none`}
          >
            {child}
          </div>
        ))}
      </div>
      <p className={`md:hidden text-center text-[11px] mt-3 tracking-wide ${hintClassName}`}>
        ← swipe om meer te zien →
      </p>
    </div>
  );
}
