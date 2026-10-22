'use client';

// Info: (20261001 - Luphia) Ink-wash adventure art for the RedInk deck
// Palette: ink #0B0404 / vermilion #D61313 / paper #FDF9EB / crimson #6E1A1A / charcoal #2C2C2C / amber #FFD54F

// Info: (20261001 - Luphia) Town skyline band: walls, gate, pagoda, towers and mountains
export function TownSkyline({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1280 200" className={className} preserveAspectRatio="xMidYMax slice" aria-hidden>
      {/* Info: (20261001 - Luphia) Distant mountains */}
      <path d="M0 160 L120 70 L210 140 L300 60 L400 160 Z" fill="#9E2B20" opacity="0.28" />
      <path d="M840 160 L960 55 L1060 130 L1160 75 L1280 160 Z" fill="#9E2B20" opacity="0.28" />
      <path d="M60 170 L180 100 L290 170 Z" fill="#6E1A1A" opacity="0.35" />
      <path d="M980 170 L1090 95 L1200 170 Z" fill="#6E1A1A" opacity="0.35" />
      {/* Info: (20261001 - Luphia) Pagoda */}
      <g opacity="0.85">
        <rect x="415" y="128" width="50" height="72" fill="#6E1A1A" />
        <path d="M400 132 L440 104 L480 132 Z" fill="#9E2B20" />
        <rect x="423" y="96" width="34" height="26" fill="#6E1A1A" />
        <path d="M412 100 L440 78 L468 100 Z" fill="#9E2B20" />
        <rect x="431" y="72" width="18" height="18" fill="#6E1A1A" />
        <path d="M424 76 L440 58 L456 76 Z" fill="#9E2B20" />
        <rect x="438" y="40" width="4" height="20" fill="#2C2C2C" />
        <path d="M442 42 L464 48 L442 56 Z" fill="#D61313" />
        <rect x="432" y="150" width="16" height="24" fill="#FDF9EB" opacity="0.5" />
      </g>
      {/* Info: (20261001 - Luphia) City wall with gate */}
      <g opacity="0.9">
        <rect x="490" y="140" width="300" height="60" fill="#6E1A1A" />
        <path d="M490 140 h20 v-12 h20 v12 h20 v-12 h20 v12 h20 v-12 h20 v12 h20 v-12 h20 v12 h20 v-12 h20 v12 h20 v-12 h20 v12 h20 v-12 h20 v12 h20 v-12 h20 v12 h20 v-12 h-0 v12" fill="#6E1A1A" />
        <path d="M600 200 v-34 a40 40 0 0 1 80 0 v34 Z" fill="#FDF9EB" opacity="0.65" />
        <rect x="540" y="158" width="12" height="16" fill="#FDF9EB" opacity="0.4" />
        <rect x="724" y="158" width="12" height="16" fill="#FDF9EB" opacity="0.4" />
      </g>
      {/* Info: (20261001 - Luphia) Gate towers with flags */}
      <g opacity="0.9">
        <rect x="560" y="96" width="44" height="48" fill="#6E1A1A" />
        <path d="M550 100 L582 76 L614 100 Z" fill="#9E2B20" />
        <rect x="580" y="52" width="4" height="26" fill="#2C2C2C" />
        <path d="M584 54 L608 61 L584 69 Z" fill="#D61313" />
        <rect x="676" y="96" width="44" height="48" fill="#6E1A1A" />
        <path d="M666 100 L698 76 L730 100 Z" fill="#9E2B20" />
        <rect x="696" y="52" width="4" height="26" fill="#2C2C2C" />
        <path d="M700 54 L724 61 L700 69 Z" fill="#FFD54F" />
      </g>
      {/* Info: (20261001 - Luphia) Townhouses */}
      <g opacity="0.8">
        <rect x="820" y="150" width="58" height="50" fill="#6E1A1A" />
        <path d="M812 152 L849 126 L886 152 Z" fill="#9E2B20" />
        <rect x="838" y="168" width="14" height="20" fill="#FDF9EB" opacity="0.5" />
        <rect x="894" y="158" width="48" height="42" fill="#6E1A1A" />
        <path d="M887 160 L918 138 L949 160 Z" fill="#9E2B20" />
        <rect x="320" y="156" width="52" height="44" fill="#6E1A1A" />
        <path d="M312 158 L346 134 L380 158 Z" fill="#9E2B20" />
        <rect x="338" y="172" width="13" height="18" fill="#FDF9EB" opacity="0.5" />
        <rect x="248" y="164" width="44" height="36" fill="#6E1A1A" />
        <path d="M241 166 L270 146 L299 166 Z" fill="#9E2B20" />
      </g>
      {/* Info: (20261001 - Luphia) Ink clouds */}
      <path d="M90 60 q18 -16 36 0 q22 -12 38 4 q-20 10 -40 4 q-18 8 -34 -8 Z" fill="#9E2B20" opacity="0.22" />
      <path d="M1080 44 q16 -14 32 0 q20 -10 34 4 q-18 9 -36 3 q-16 7 -30 -7 Z" fill="#9E2B20" opacity="0.22" />
    </svg>
  );
}

// Info: (20261001 - Luphia) Adventure party: banner leader, packer, kid with red-pen sword, scroll keeper
export function AdventureParty({ className = '', tone = 'ink' }: { className?: string; tone?: 'ink' | 'light' }) {
  const body = tone === 'ink' ? '#2C2C2C' : '#FDF9EB';
  const accent = tone === 'ink' ? '#D61313' : '#FFD54F';
  const soft = tone === 'ink' ? '#9E2B20' : '#F8DCD0';
  const paper = tone === 'ink' ? '#FDF9EB' : '#1D1514';
  return (
    <svg viewBox="0 0 360 120" className={className} aria-hidden>
      {/* Info: (20261001 - Luphia) Leader with banner */}
      <g>
        <rect x="64" y="18" width="3.5" height="84" rx="1.75" fill={body} />
        <path d="M67 20 L108 30 L67 42 Z" fill={accent} />
        <circle cx="42" cy="48" r="11" fill={body} />
        <path d="M26 102 Q28 66 42 62 Q56 66 58 102 Z" fill={body} />
        <path d="M30 70 q12 -6 24 0 l-2 7 q-10 -5 -20 0 Z" fill={soft} />
      </g>
      {/* Info: (20261001 - Luphia) Packer with backpack */}
      <g>
        <rect x="118" y="52" width="22" height="30" rx="7" fill={soft} />
        <circle cx="150" cy="42" r="12" fill={body} />
        <path d="M132 102 Q134 60 150 56 Q166 60 168 102 Z" fill={body} />
      </g>
      {/* Info: (20261001 - Luphia) Kid raising a red-pen sword */}
      <g>
        <g transform="rotate(-32 228 48)">
          <rect x="224" y="8" width="8" height="52" rx="3" fill={accent} />
          <path d="M224 8 L228 -6 L232 8 Z" fill={body} />
          <rect x="220" y="58" width="16" height="6" rx="3" fill={body} />
        </g>
        <circle cx="212" cy="62" r="9.5" fill={body} />
        <path d="M200 102 Q201 74 212 71 Q223 74 224 102 Z" fill={body} />
      </g>
      {/* Info: (20261001 - Luphia) Scroll keeper */}
      <g>
        <circle cx="286" cy="46" r="11" fill={body} />
        <path d="M270 102 Q272 64 286 60 Q300 64 302 102 Z" fill={body} />
        <rect x="294" y="72" width="34" height="12" rx="6" fill={paper} stroke={soft} strokeWidth="2" />
      </g>
      {/* Info: (20261001 - Luphia) Ground stroke */}
      <path d="M14 104 Q180 96 346 104" stroke={soft} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

// Info: (20261001 - Luphia) Quest banner ornament
export function QuestFlag({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 120" className={className} aria-hidden>
      <rect x="12" y="6" width="4" height="108" rx="2" fill="#2C2C2C" />
      <path d="M16 10 L70 10 L58 34 L70 58 L16 58 Z" fill="#D61313" />
      <path d="M16 10 L70 10 L66 18 L16 18 Z" fill="#9E2B20" opacity="0.6" />
      <circle cx="38" cy="36" r="9" fill="#FDF9EB" opacity="0.9" />
      <circle cx="38" cy="36" r="5" fill="#FFD54F" />
    </svg>
  );
}
