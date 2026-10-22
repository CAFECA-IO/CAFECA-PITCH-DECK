'use client';

import React from 'react';

/**
 * Info: (20260830 - Luphia) kiku_scenes.tsx
 * - 《菊與刀》說書簡報的敘事插畫：以橘白色系繪製的場景剪影，用來輔助理解與共情
 */

export interface IKikuSceneProps {
  className?: string;
}

const INK = '#1c1917';
const STONE = '#44403c';
const ORANGE = '#ea580c';
const AMBER = '#f59e0b';
const SAND = '#fed7aa';

/* Info: (20260830 - Luphia) 塞班島斷崖：平民抱著孩子站在崖邊 */
export function CliffScene({ className = '' }: IKikuSceneProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="kikuSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff7ed" />
          <stop offset="55%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#kikuSky)" />
      <circle cx="300" cy="78" r="34" fill={AMBER} opacity="0.55" />
      <circle cx="300" cy="78" r="22" fill={ORANGE} opacity="0.75" />

      {/* Info: (20260830 - Luphia) 海面 */}
      <path d="M0 176 H400 V250 H0 Z" fill="#c2410c" opacity="0.22" />
      {[188, 202, 216, 230].map((y, i) => (
        <path
          key={`wave-${y}`}
          d={`M${-10 + i * 12} ${y} q 22 -7 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0`}
          stroke={ORANGE}
          strokeOpacity="0.35"
          strokeWidth="2"
          fill="none"
        />
      ))}

      {/* Info: (20260830 - Luphia) 斷崖 */}
      <path d="M0 118 L58 110 L96 122 L132 116 L156 130 L164 250 H0 Z" fill={INK} />
      <path d="M132 116 L156 130 L164 250 H120 Z" fill={STONE} opacity="0.55" />

      {/* Info: (20260830 - Luphia) 崖邊人影：抱著孩子的大人、獨自站著的人 */}
      <g fill={INK}>
        <circle cx="62" cy="92" r="6.5" />
        <path d="M55 100 q7 -5 14 0 l3 22 h-20 Z" />
        <circle cx="72" cy="100" r="4.5" />
        <path d="M67 106 q5 -3 10 0 l1 10 h-12 Z" />

        <circle cx="102" cy="104" r="6" />
        <path d="M96 112 q6 -4 12 0 l2 20 h-16 Z" />

        <circle cx="126" cy="100" r="5" />
        <path d="M121 107 q5 -3 10 0 l2 17 h-14 Z" />
      </g>

      {/* Info: (20260830 - Luphia) 遠處的軍艦與海鳥 */}
      <path d="M320 168 h44 l-6 10 h-32 Z" fill={STONE} opacity="0.5" />
      <rect x="336" y="158" width="8" height="10" fill={STONE} opacity="0.5" />
      {[[210, 60], [232, 50], [252, 66]].map(([x, y]) => (
        <path key={`bird-${x}`} d={`M${x} ${y} q6 -6 12 0 q6 -6 12 0`} stroke={STONE} strokeOpacity="0.45" strokeWidth="2" fill="none" />
      ))}
    </svg>
  );
}

/* Info: (20260830 - Luphia) 拘留營的鐵絲網與研究材料 */
export function DistantFieldScene({ className = '' }: IKikuSceneProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="250" fill="#fff7ed" />
      <path d="M0 128 L70 96 L128 126 L196 88 L262 124 L330 98 L400 130 V160 H0 Z" fill={SAND} opacity="0.9" />
      <rect y="158" width="400" height="92" fill="#fef3c7" opacity="0.7" />

      {/* Info: (20260830 - Luphia) 遠處營房 */}
      {[[34, 140], [110, 144], [186, 141], [262, 145], [330, 142]].map(([x, y]) => (
        <g key={`hut-${x}`} opacity="0.55">
          <rect x={x} y={y} width="46" height="18" fill={STONE} />
          <path d={`M${x - 3} ${y} L${x + 23} ${y - 9} L${x + 49} ${y} Z`} fill={INK} />
        </g>
      ))}

      {/* Info: (20260830 - Luphia) 鐵絲網 */}
      {[24, 122, 220, 318].map((x) => (
        <rect key={`post-${x}`} x={x} y="96" width="7" height="140" fill={INK} />
      ))}
      {[112, 138, 164, 190].map((y) => (
        <line key={`wire-${y}`} x1="0" y1={y} x2="400" y2={y + 6} stroke={INK} strokeWidth="2" opacity="0.8" />
      ))}
      {[40, 90, 140, 190, 240, 290, 340].map((x, i) => (
        <g key={`barb-${x}`} stroke={INK} strokeWidth="2" opacity="0.8">
          <line x1={x - 6} y1={114 + i * 0.6 + (i % 4) * 26} x2={x + 6} y2={126 + i * 0.6 + (i % 4) * 26} />
          <line x1={x + 6} y1={114 + i * 0.6 + (i % 4) * 26} x2={x - 6} y2={126 + i * 0.6 + (i % 4) * 26} />
        </g>
      ))}

      {/* Info: (20260830 - Luphia) 前景：一疊被翻閱的材料 */}
      <g transform="translate(266 176) rotate(-6)">
        <rect width="112" height="66" rx="3" fill="#ffffff" stroke={ORANGE} strokeWidth="2" />
        <rect x="6" y="-7" width="112" height="66" rx="3" fill="#ffffff" stroke={ORANGE} strokeWidth="2" />
        <rect x="12" y="-14" width="112" height="66" rx="3" fill="#ffffff" stroke={ORANGE} strokeWidth="2.5" />
        {[0, 1, 2, 3].map((i) => (
          <line key={`ln-${i}`} x1="22" y1={-1 + i * 12} x2={i === 3 ? 86 : 112} y2={-1 + i * 12} stroke={SAND} strokeWidth="4" strokeLinecap="round" />
        ))}
      </g>
    </svg>
  );
}

/* Info: (20260830 - Luphia) 恩：一張永遠還不完的帳單 */
export function DebtScrollScene({ className = '' }: IKikuSceneProps) {
  return (
    <svg viewBox="0 0 320 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="320" height="250" fill="none" />
      <g transform="translate(60 16)">
        <path d="M0 0 h200 v206 l-16 -10 l-16 10 l-16 -10 l-16 10 l-16 -10 l-16 10 l-16 -10 l-16 10 l-16 -10 l-16 10 l-16 -10 l-16 10 Z" fill="#ffffff" stroke={ORANGE} strokeWidth="2.5" />
        {[36, 62, 88, 114, 140].map((y, i) => (
          <line key={`row-${y}`} x1="24" y1={y} x2={i % 2 === 0 ? 176 : 138} y2={y} stroke={SAND} strokeWidth="7" strokeLinecap="round" />
        ))}
        <text x="24" y="26" fontSize="15" fontWeight="700" fill={STONE}>BALANCE</text>
        <text x="176" y="26" fontSize="15" fontWeight="700" fill={ORANGE} textAnchor="end">∞</text>
        <circle cx="152" cy="168" r="30" fill={ORANGE} opacity="0.92" />
        <text x="152" y="180" fontSize="34" fontWeight="900" fill="#ffffff" textAnchor="middle">恩</text>
      </g>
    </svg>
  );
}

/* Info: (20260830 - Luphia) 忠臣藏：雪夜列隊 */
export function SnowNightScene({ className = '' }: IKikuSceneProps) {
  const snow = Array.from({ length: 46 }, (_, i) => ({
    x: (i * 61) % 400,
    y: (i * 37) % 200,
    r: 1 + (i % 3),
  }));

  return (
    <svg viewBox="0 0 400 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="kikuNight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1917" />
          <stop offset="100%" stopColor="#44403c" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#kikuNight)" />
      {snow.map((s, i) => (
        <circle key={`snow-${i}`} cx={s.x} cy={s.y} r={s.r} fill="#ffffff" opacity="0.5" />
      ))}

      {/* Info: (20260830 - Luphia) 宅邸大門 */}
      <g>
        <rect x="230" y="72" width="150" height="128" fill="#0c0a09" />
        <path d="M216 76 L305 40 L394 76 Z" fill="#0c0a09" />
        <path d="M216 76 L305 40 L394 76 Z" fill={STONE} opacity="0.35" />
        <rect x="272" y="112" width="66" height="88" fill={STONE} opacity="0.5" />
        <line x1="305" y1="112" x2="305" y2="200" stroke="#0c0a09" strokeWidth="4" />
      </g>

      {/* Info: (20260830 - Luphia) 列隊的浪人與提燈 */}
      {[24, 62, 100, 138, 176].map((x, i) => (
        <g key={`ronin-${x}`}>
          <circle cx={x} cy={148 - i * 3} r="7" fill="#0c0a09" />
          <path d={`M${x - 8} ${157 - i * 3} q8 -6 16 0 l3 44 h-22 Z`} fill="#0c0a09" />
          <circle cx={x + 15} cy={162 - i * 3} r="8" fill={AMBER} opacity="0.9" />
          <circle cx={x + 15} cy={162 - i * 3} r="13" fill={AMBER} opacity="0.22" />
        </g>
      ))}

      {/* Info: (20260830 - Luphia) 雪地 */}
      <path d="M0 200 q60 -12 120 0 t 120 0 t 160 0 V250 H0 Z" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}

/* Info: (20260830 - Luphia) 恥感：一整圈注視的眼睛 */
export function WatchingEyesScene({ className = '' }: IKikuSceneProps) {
  const eyes = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    return {
      x: 160 + Math.cos(angle) * 112,
      y: 125 + Math.sin(angle) * 92,
      pupilX: 160 + Math.cos(angle) * 104,
      pupilY: 125 + Math.sin(angle) * 85,
    };
  });

  return (
    <svg viewBox="0 0 320 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {eyes.map((e, i) => (
        <g key={`eye-${i}`}>
          <path
            d={`M${e.x - 20} ${e.y} q20 -15 40 0 q-20 15 -40 0 Z`}
            fill="#ffffff"
            stroke={ORANGE}
            strokeWidth="2.4"
          />
          <circle cx={e.pupilX} cy={e.pupilY} r="5.4" fill={INK} />
        </g>
      ))}
      <g>
        <circle cx="160" cy="106" r="14" fill={INK} />
        <path d="M144 124 q16 -11 32 0 l6 46 h-44 Z" fill={INK} />
      </g>
      <ellipse cx="160" cy="180" rx="34" ry="7" fill={ORANGE} opacity="0.18" />
    </svg>
  );
}

/* Info: (20260830 - Luphia) 玉音放送：收音機前跪下的人 */
export function RadioScene({ className = '' }: IKikuSceneProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="250" fill="#fff7ed" />
      <circle cx="200" cy="96" r="86" fill={AMBER} opacity="0.14" />
      <circle cx="200" cy="96" r="60" fill={AMBER} opacity="0.16" />

      {/* Info: (20260830 - Luphia) 收音機 */}
      <g transform="translate(140 40)">
        <rect width="120" height="94" rx="10" fill={STONE} />
        <rect x="10" y="12" width="66" height="52" rx="5" fill="#0c0a09" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`grill-${i}`} x1="16" y1={20 + i * 8} x2="70" y2={20 + i * 8} stroke={SAND} strokeWidth="3" opacity="0.55" />
        ))}
        <circle cx="98" cy="30" r="12" fill={ORANGE} />
        <circle cx="98" cy="62" r="9" fill={SAND} />
        <rect x="10" y="72" width="100" height="10" rx="4" fill="#0c0a09" opacity="0.6" />
      </g>

      {/* Info: (20260830 - Luphia) 廣播波紋 */}
      {[26, 42, 58].map((r) => (
        <g key={`wave-${r}`} stroke={ORANGE} strokeWidth="2.4" fill="none" opacity={0.55 - r / 200}>
          <path d={`M${132 - r * 0.5} ${86 - r * 0.35} a${r} ${r} 0 0 0 0 ${r * 0.7}`} />
          <path d={`M${268 + r * 0.5} ${86 - r * 0.35} a${r} ${r} 0 0 1 0 ${r * 0.7}`} />
        </g>
      ))}

      {/* Info: (20260830 - Luphia) 跪坐的人影背影 */}
      {[[92, 1], [150, 0.92], [250, 0.92], [308, 1]].map(([x, s], i) => (
        <g key={`kneel-${i}`} transform={`translate(${x} 152) scale(${s})`} fill={INK}>
          <circle cx="0" cy="0" r="13" />
          <path d="M-18 16 q18 -13 36 0 l6 40 h-48 Z" />
          <path d="M-26 56 h52 l4 12 h-60 Z" opacity="0.85" />
        </g>
      ))}
      <g transform="translate(200 158)" fill={INK}>
        <circle cx="0" cy="0" r="14" />
        <path d="M-19 18 q19 -14 38 0 l7 42 h-52 Z" />
        <path d="M-28 60 h56 l4 12 h-64 Z" opacity="0.85" />
      </g>
      <rect y="230" width="400" height="20" fill={SAND} opacity="0.7" />
    </svg>
  );
}

/* Info: (20260830 - Luphia) 兩邊都不是自己人的報導人 */
export function SplitSelfScene({ className = '' }: IKikuSceneProps) {
  return (
    <svg viewBox="0 0 360 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0" y="24" width="164" height="202" rx="10" fill="#e7e5e4" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={`stripe-${i}`} x="0" y={38 + i * 38} width="164" height="16" fill={STONE} opacity="0.28" />
      ))}
      <rect x="196" y="24" width="164" height="202" rx="10" fill="#ffffff" stroke={SAND} strokeWidth="3" />
      <circle cx="278" cy="125" r="46" fill={ORANGE} opacity="0.85" />

      <line x1="180" y1="10" x2="180" y2="240" stroke={ORANGE} strokeWidth="3" strokeDasharray="9 8" />

      <g fill={INK}>
        <circle cx="180" cy="94" r="19" />
        <path d="M158 118 q22 -15 44 0 l8 66 h-60 Z" />
      </g>
      <path d="M180 75 v128" stroke="#fff7ed" strokeWidth="2.6" strokeDasharray="6 6" />
      <ellipse cx="180" cy="192" rx="42" ry="8" fill={ORANGE} opacity="0.16" />
    </svg>
  );
}

/* Info: (20260830 - Luphia) 宮城事件：夜裡搜索錄音盤 */
export function PalaceNightScene({ className = '' }: IKikuSceneProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="250" fill="#1c1917" />
      <circle cx="330" cy="52" r="24" fill="#fef3c7" opacity="0.5" />

      {/* Info: (20260830 - Luphia) 城牆與櫓 */}
      <path d="M0 152 L60 152 L60 128 L120 128 L120 152 L400 152 V250 H0 Z" fill="#0c0a09" />
      <g>
        <rect x="140" y="86" width="110" height="66" fill="#0c0a09" />
        <path d="M126 90 L195 56 L264 90 Z" fill={STONE} opacity="0.5" />
        <path d="M136 118 L195 92 L254 118 Z" fill={STONE} opacity="0.35" />
      </g>

      {/* Info: (20260830 - Luphia) 探照燈光束 */}
      <path d="M62 160 L18 96 L86 96 Z" fill={AMBER} opacity="0.18" />
      <path d="M300 160 L264 100 L346 100 Z" fill={AMBER} opacity="0.14" />

      {/* Info: (20260830 - Luphia) 搜索的軍人剪影與手電筒 */}
      {[[70, 0], [110, 1], [286, 0], [326, 1]].map(([x, flip], i) => (
        <g key={`soldier-${i}`} fill="#000000">
          <circle cx={x} cy={176} r="9" />
          <path d={`M${x - 11} ${188} q11 -8 22 0 l4 40 h-30 Z`} />
          <line x1={x + (flip ? -12 : 12)} y1="196" x2={x + (flip ? -30 : 30)} y2="186" stroke="#000000" strokeWidth="5" strokeLinecap="round" />
          <circle cx={x + (flip ? -34 : 34)} cy="185" r="4.5" fill={AMBER} />
        </g>
      ))}

      {/* Info: (20260830 - Luphia) 沒被找到的錄音盤 */}
      <g transform="translate(200 206)">
        <circle r="26" fill="#0c0a09" stroke={ORANGE} strokeWidth="2.5" />
        <circle r="17" fill="none" stroke={ORANGE} strokeWidth="1.4" opacity="0.6" />
        <circle r="9" fill={ORANGE} opacity="0.85" />
        <circle r="2.6" fill="#0c0a09" />
      </g>
    </svg>
  );
}

/* Info: (20260830 - Luphia) 書裡沒有出現的那個房間 */
export function EmptyRoomScene({ className = '' }: IKikuSceneProps) {
  return (
    <svg viewBox="0 0 400 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="250" fill="#fff7ed" />
      <path d="M0 250 L118 78 H282 L400 250 Z" fill={SAND} opacity="0.35" />

      {/* Info: (20260830 - Luphia) 法庭上的席位 */}
      <g>
        <rect x="150" y="52" width="100" height="34" rx="4" fill={STONE} opacity="0.75" />
        <rect x="164" y="86" width="72" height="10" fill={STONE} opacity="0.5" />
      </g>

      {/* Info: (20260830 - Luphia) 空椅子 */}
      {[[64, 176], [150, 176], [236, 176], [322, 176], [108, 128], [194, 128], [280, 128]].map(([x, y], i) => (
        <g key={`chair-${i}`} transform={`translate(${x} ${y}) scale(${y === 128 ? 0.78 : 1})`}>
          <rect x="-20" y="-46" width="40" height="34" rx="4" fill="none" stroke={ORANGE} strokeWidth="2.6" />
          <rect x="-24" y="-12" width="48" height="8" rx="3" fill="none" stroke={ORANGE} strokeWidth="2.6" />
          <line x1="-19" y1="-4" x2="-19" y2="24" stroke={ORANGE} strokeWidth="2.6" />
          <line x1="19" y1="-4" x2="19" y2="24" stroke={ORANGE} strokeWidth="2.6" />
        </g>
      ))}

      <text x="200" y="238" fontSize="15" fontWeight="700" fill={ORANGE} textAnchor="middle" letterSpacing="4">
        NOT IN THE BOOK
      </text>
    </svg>
  );
}

/* Info: (20260830 - Luphia) 鏡子：書變成自我認識的鏡面 */
export function MirrorScene({ className = '' }: IKikuSceneProps) {
  return (
    <svg viewBox="0 0 360 250" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="360" height="250" fill="none" />

      {/* Info: (20260830 - Luphia) 鏡面（其實是一本書） */}
      <g transform="translate(196 26)">
        <rect width="132" height="196" rx="8" fill="#ffffff" stroke={ORANGE} strokeWidth="3" />
        <rect x="10" y="10" width="112" height="176" rx="4" fill={SAND} opacity="0.45" />
        <path d="M10 186 L122 10" stroke="#ffffff" strokeWidth="16" opacity="0.7" />
        <path d="M42 186 L122 62" stroke="#ffffff" strokeWidth="9" opacity="0.55" />
        <g fill={ORANGE} opacity="0.75">
          <circle cx="66" cy="82" r="15" />
          <path d="M48 106 q18 -12 36 0 l6 54 h-48 Z" />
        </g>
      </g>

      {/* Info: (20260830 - Luphia) 照鏡子的人 */}
      <g fill={INK}>
        <circle cx="86" cy="98" r="20" />
        <path d="M62 124 q24 -16 48 0 l8 74 h-64 Z" />
      </g>
      <ellipse cx="86" cy="206" rx="44" ry="8" fill={ORANGE} opacity="0.16" />

      {[0, 1, 2].map((i) => (
        <path
          key={`ray-${i}`}
          d={`M138 ${104 + i * 22} h48`}
          stroke={ORANGE}
          strokeWidth="2.6"
          strokeDasharray="8 7"
          opacity="0.7"
        />
      ))}
    </svg>
  );
}
