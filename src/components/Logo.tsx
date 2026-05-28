import React from "react";

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Logo({ className, width = "100%", height = "100%" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="10 20 85 75"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        {/* Corporate Blue Gradient */}
        <linearGradient id="logo-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        {/* Amber/Gold Gradient */}
        <linearGradient id="logo-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#de952a" />
          <stop offset="100%" stopColor="#c98322" />
        </linearGradient>
      </defs>

      {/* Monogram OR */}
      <g>
        {/* Letter O (Italic Serif) */}
        <text
          x="12"
          y="76"
          fill="url(#logo-blue-grad)"
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "66px",
            fontWeight: 900,
            fontStyle: "italic",
          }}
        >
          O
        </text>
        {/* Letter R (Italic Serif) */}
        <text
          x="44"
          y="76"
          fill="url(#logo-gold-grad)"
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "66px",
            fontWeight: 900,
            fontStyle: "italic",
          }}
        >
          R
        </text>

        {/* Modern Cursive Sweeping Tail (puch/flourish) extending from R and curving under O */}
        <path
          d="M 64,74 C 54,86 31,88 19,81 C 17,80 18,78 20,78 C 30,84 52,83 61,72 Z"
          fill="url(#logo-gold-grad)"
        />
      </g>
    </svg>
  );
}
