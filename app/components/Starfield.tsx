"use client";

import { useEffect, useState } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  opacity: number;
  color: string;
  delay: number;
  duration: number;
  isBright: boolean;
};

function generateStars(
  count: number,
  width: number,
  height: number,
  largerStars = false
): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random();
    // Grotere sterren voor hero
    const r = largerStars
      ? size < 0.5
        ? 1.5
        : size < 0.75
        ? 2.5
        : size < 0.9
        ? 3.5
        : 4.5
      : size < 0.6
      ? 1
      : size < 0.85
      ? 1.5
      : 2;
    const opacity = size < 0.6 ? 0.5 : size < 0.85 ? 0.8 : 1;
    // Meer witte sterren - 85% wit, 10% cyan, 5% violet
    const color = size < 0.85 ? "#FFFFFF" : size < 0.95 ? "#40C4FF" : "#9169FF";
    const delay = Math.random() * 3;
    const duration = 2 + Math.random() * 3;

    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r,
      opacity,
      color,
      delay,
      duration,
      isBright: size > 0.85,
    });
  }
  return stars;
}

export default function Starfield({
  width = 520,
  height = 520,
  starCount = 150,
  opacity = 0.85,
  largerStars = false,
}: {
  width?: number;
  height?: number;
  starCount?: number;
  opacity?: number;
  largerStars?: boolean;
}) {
  // Eerst geen sterren renderen op server (en initial client),
  // daarna in de browser genereren -> geen hydration mismatch.
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = generateStars(starCount, width, height, largerStars);
    setStars(generated);
  }, [starCount, width, height, largerStars]);

  return (
    <div className="absolute inset-0" style={{ opacity }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stars */}
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill={star.color}
            opacity={star.opacity}
            className="animate-pulse"
            style={{
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          >
            {star.isBright && (
              <animate
                attributeName="opacity"
                values={`${star.opacity};${star.opacity * 0.3};${star.opacity}`}
                dur={`${star.duration}s`}
                repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
      </svg>
    </div>
  );
}
