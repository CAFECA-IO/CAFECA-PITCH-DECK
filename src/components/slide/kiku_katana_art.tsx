'use client';

import React from 'react';

/**
 * Info: (20260830 - Luphia) kiku_katana_art.tsx
 * - 《菊與刀》說書簡報的共用向量圖示：十六瓣菊紋、日本刀、紅日
 */

export interface IKikuArtProps {
  size?: number;
  className?: string;
}

/* Info: (20260830 - Luphia) 十六瓣八重表菊紋，象徵「菊」——秩序、階序、天皇 */
export function ChrysanthemumMark({ size = 200, className = '' }: IKikuArtProps) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(100 100)">
        {petals.map((deg) => (
          <path
            key={`outer-${deg}`}
            transform={`rotate(${deg})`}
            d="M0 -28 C 11 -46, 13 -68, 0 -86 C -13 -68, -11 -46, 0 -28 Z"
            fill="currentColor"
            fillOpacity="0.9"
          />
        ))}
        {petals.map((deg) => (
          <path
            key={`inner-${deg}`}
            transform={`rotate(${deg + 11.25})`}
            d="M0 -20 C 8 -34, 10 -52, 0 -66 C -10 -52, -8 -34, 0 -20 Z"
            fill="currentColor"
            fillOpacity="0.5"
          />
        ))}
        <circle r="26" fill="currentColor" fillOpacity="0.2" />
        <circle r="15" fill="currentColor" />
      </g>
    </svg>
  );
}

/* Info: (20260830 - Luphia) 日本刀，象徵「刀」——名譽、義理、自我約束 */
export function SwordMark({ size = 200, className = '' }: IKikuArtProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Info: (20260830 - Luphia) 刀身，帶反りの弧度 */}
      <path
        d="M74 128 C 100 100, 138 62, 176 26 C 182 40, 179 52, 168 63 C 136 94, 106 124, 86 142 Z"
        fill="currentColor"
        fillOpacity="0.92"
      />
      {/* Info: (20260830 - Luphia) 刃紋 */}
      <path
        d="M80 130 C 106 104, 142 68, 174 34"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Info: (20260830 - Luphia) 鍔 */}
      <path
        d="M60 122 L86 148"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
      />
      {/* Info: (20260830 - Luphia) 柄 */}
      <path
        d="M68 142 L34 176"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      {[0, 1, 2].map((i) => (
        <path
          key={`ito-${i}`}
          d={`M${62 - i * 10} ${142 + i * 10} l 10 10`}
          stroke="#ffffff"
          strokeOpacity="0.5"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/* Info: (20260830 - Luphia) 日之丸放射紋，作為背景裝飾 */
export function RisingSunRays({ className = '' }: { className?: string }) {
  const rays = Array.from({ length: 24 }, (_, i) => i * 15);

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(200 200)">
        {rays.map((deg) => (
          <path
            key={`ray-${deg}`}
            transform={`rotate(${deg})`}
            d="M0 0 L -26 -280 L 26 -280 Z"
            fill="currentColor"
            fillOpacity={deg % 30 === 0 ? 0.5 : 0.18}
          />
        ))}
      </g>
    </svg>
  );
}
