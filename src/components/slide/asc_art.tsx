'use client';

/**
 * Info: (20261005 - Luphia) 愛智扶（AI SocialCare）提案簡報專用 SVG 插圖庫
 * 統一採橘（#f97316）／玫瑰（#e11d48）／靛（#6366f1）／翠（#10b981）四色系，
 * 線條為主、填色為輔，於白底與 slate-50 底皆可閱讀。
 */

// Info: (20261005 - Luphia) 封面：由節點連成的照護網絡，中心為心形
export function AscCareNetwork({ className = '' }: { className?: string }) {
  const nodes = [
    { id: 'n1', x: 40, y: 60 }, { id: 'n2', x: 118, y: 28 }, { id: 'n3', x: 196, y: 62 },
    { id: 'n4', x: 32, y: 148 }, { id: 'n5', x: 204, y: 150 },
    { id: 'n6', x: 84, y: 206 }, { id: 'n7', x: 160, y: 208 },
  ];
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" aria-hidden="true">
      <g stroke="#fdba74" strokeWidth="1.5" opacity="0.9">
        {nodes.map((n) => <line key={n.id} x1="118" y1="118" x2={n.x} y2={n.y} />)}
        <path d="M40 60 L118 28 L196 62 L204 150 L160 208 L84 206 L32 148 Z" strokeDasharray="4 5" opacity="0.55" />
      </g>
      {nodes.map((n) => (
        <circle key={n.id} cx={n.x} cy={n.y} r="7" fill="#fff" stroke="#fb923c" strokeWidth="2" />
      ))}
      <circle cx="118" cy="118" r="34" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
      <path
        d="M118 133c-9-7-16-12-16-19a8 8 0 0 1 16-4 8 8 0 0 1 16 4c0 7-7 12-16 19z"
        fill="#f97316"
      />
    </svg>
  );
}

// Info: (20261005 - Luphia) 第 2 頁：三道牆（人力／文書／資源）
export function AscWall({ color = '#f97316', className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 44" className={className} fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth="1.6" opacity="0.5">
        <rect x="2" y="4" width="26" height="11" rx="2" />
        <rect x="32" y="4" width="30" height="11" rx="2" />
        <rect x="2" y="18" width="36" height="11" rx="2" />
        <rect x="42" y="18" width="20" height="11" rx="2" />
        <rect x="2" y="32" width="20" height="10" rx="2" />
        <rect x="26" y="32" width="36" height="10" rx="2" />
      </g>
    </svg>
  );
}

// Info: (20261005 - Luphia) 第 4 頁：FAITH 模型訓練管線（整頁寬帶狀圖）
export function AscDataPipeline({ className = '' }: { className?: string }) {
  const gates = [
    { id: 'g1', x: 236, label: '欄位遮罩' },
    { id: 'g2', x: 288, label: 'NER 移除' },
    { id: 'g3', x: 340, label: '人工複核' },
  ];
  const arrows = [128, 390, 566, 742];
  return (
    <svg viewBox="0 0 900 96" className={className} fill="none" aria-hidden="true">
      {arrows.map((x) => (
        <path key={x} d={`M${x} 46 h22 m-7 -6 l7 6 l-7 6`}
          stroke="#cbd5e1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      ))}

      {/* Info: (20261005 - Luphia) ① 語料蒐集 */}
      <rect x="4" y="28" width="122" height="36" rx="9" fill="#fff7ed" stroke="#f97316" strokeWidth="2.2" />
      <text x="65" y="44" textAnchor="middle" fontSize="15" fill="#c2410c" fontWeight="800">① 語料蒐集</text>
      <text x="65" y="58" textAnchor="middle" fontSize="11" fill="#ea580c">四類來源・書面授權</text>

      {/* Info: (20261005 - Luphia) ② 去識別化三道關卡 */}
      <rect x="158" y="18" width="230" height="56" rx="9" fill="#fef2f2" stroke="#e11d48" strokeWidth="2.2" />
      <text x="192" y="40" textAnchor="middle" fontSize="13" fill="#be123c" fontWeight="800">② 去識</text>
      <text x="192" y="56" textAnchor="middle" fontSize="13" fill="#be123c" fontWeight="800">別化</text>
      {gates.map((g) => (
        <g key={g.id}>
          <line x1={g.x} y1="26" x2={g.x} y2="54" stroke="#e11d48" strokeWidth="3.4" strokeLinecap="round" />
          <text x={g.x} y="68" textAnchor="middle" fontSize="10.5" fill="#be123c" fontWeight="700">{g.label}</text>
        </g>
      ))}

      {/* Info: (20261005 - Luphia) ③ 標註與品質檢核 */}
      <rect x="420" y="28" width="144" height="36" rx="9" fill="#f8fafc" stroke="#64748b" strokeWidth="2.2" />
      <text x="492" y="44" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="800">③ 雙人標註</text>
      <text x="492" y="58" textAnchor="middle" fontSize="11" fill="#64748b">交叉驗證・DVC 版控</text>

      {/* Info: (20261005 - Luphia) ④ 微調（基底模型由上方匯入） */}
      <rect x="520" y="-4" width="200" height="20" rx="6" fill="#fff" stroke="#6366f1" strokeWidth="1.8" strokeDasharray="5 3" />
      <text x="620" y="10" textAnchor="middle" fontSize="11.5" fill="#4338ca" fontWeight="800">基底模型　Muse Glimmer 30B（Apache 2.0）</text>
      <path d="M620 16 v12" stroke="#6366f1" strokeWidth="2" strokeDasharray="3 3" />
      <rect x="596" y="28" width="144" height="36" rx="9" fill="#eef2ff" stroke="#6366f1" strokeWidth="2.2" />
      <text x="668" y="44" textAnchor="middle" fontSize="14" fill="#4338ca" fontWeight="800">④ Fine-tuning</text>
      <text x="668" y="58" textAnchor="middle" fontSize="11" fill="#6366f1">租用 H100 雲端算力</text>

      {/* Info: (20261005 - Luphia) ⑤ FAITH 模型產出 */}
      <rect x="772" y="24" width="124" height="44" rx="10" fill="#f97316" />
      <text x="834" y="44" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="900">⑤ FAITH</text>
      <text x="834" y="59" textAnchor="middle" fontSize="11" fill="#ffedd5" fontWeight="700">地端部署・MIT 開源</text>

      {/* Info: (20261005 - Luphia) 場域回流再訓練 */}
      <path d="M834 68 v18 H65 v-18" stroke="#fdba74" strokeWidth="2" strokeDasharray="6 4" />
      <path d="M65 68 l-5 7 h10 z" fill="#fdba74" />
      <text x="450" y="93" textAnchor="middle" fontSize="11.5" fill="#f97316" fontWeight="800">
        M8　以全部推廣場域回流之去識別化資料再訓練，發佈 FAITH v2.0.0
      </text>
    </svg>
  );
}

// Info: (20261005 - Luphia) 第 5 頁：說一句話 → AI 執行 → 回報 之循環
export function AscAgentLoop({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="42" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M60 18 A42 42 0 0 1 96 81" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
      <path d="M96 81 l-9 -2 l5 8 z" fill="#f97316" />
      <circle cx="60" cy="18" r="11" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
      <circle cx="96" cy="81" r="11" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
      <circle cx="24" cy="81" r="11" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
      <text x="60" y="22" textAnchor="middle" fontSize="10" fill="#c2410c" fontWeight="800">1</text>
      <text x="96" y="85" textAnchor="middle" fontSize="10" fill="#4338ca" fontWeight="800">2</text>
      <text x="24" y="85" textAnchor="middle" fontSize="10" fill="#047857" fontWeight="800">3</text>
      <path d="M24 81 A42 42 0 0 1 60 18" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <path d="M96 81 A42 42 0 0 1 24 81" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <text x="60" y="58" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="800">一次</text>
      <text x="60" y="72" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="800">對話</text>
    </svg>
  );
}

// Info: (20261005 - Luphia) 第 6 頁：臺灣本島輪廓與三波擴散漣漪
export function AscTaiwanRipple({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 170" className={className} fill="none" aria-hidden="true">
      <g opacity="0.9">
        <circle cx="58" cy="78" r="52" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="4 5" />
        <circle cx="58" cy="78" r="36" stroke="#fda4af" strokeWidth="1.5" strokeDasharray="4 5" />
        <circle cx="58" cy="78" r="20" stroke="#fdba74" strokeWidth="1.5" strokeDasharray="4 5" />
      </g>
      {/* Info: (20261005 - Luphia) 臺灣本島簡化輪廓 */}
      <path
        d="M62 14c7 6 11 15 13 26 3 14 6 28 4 42-2 15-9 29-17 40-5 7-12 13-20 13-6 0-10-6-11-12-2-12 2-24 5-36 4-16 7-32 12-47 3-10 7-20 14-26z"
        fill="#fff" stroke="#64748b" strokeWidth="1.8" strokeLinejoin="round"
      />
      {/* Info: (20261005 - Luphia) 據點 */}
      {[
        { id: 'p1', x: 66, y: 32, c: '#f97316' }, { id: 'p2', x: 60, y: 52, c: '#f97316' },
        { id: 'p3', x: 70, y: 70, c: '#e11d48' }, { id: 'p4', x: 54, y: 86, c: '#e11d48' },
        { id: 'p5', x: 62, y: 104, c: '#2563eb' }, { id: 'p6', x: 46, y: 118, c: '#2563eb' },
      ].map((p) => (
        <circle key={p.id} cx={p.x} cy={p.y} r="3.4" fill={p.c} />
      ))}
      {/* Info: (20261005 - Luphia) 離島（連江縣馬祖） */}
      <circle cx="16" cy="26" r="3.4" fill="#f97316" />
      <text x="16" y="42" textAnchor="middle" fontSize="7.5" fill="#64748b" fontWeight="700">馬祖</text>
    </svg>
  );
}

// Info: (20261005 - Luphia) 第 7 頁：雙軌（買斷／訂閱）並行鐵軌
export function AscDualTrack({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 56" className={className} fill="none" aria-hidden="true">
      <g stroke="#f97316" strokeWidth="2.4" strokeLinecap="round">
        <line x1="8" y1="16" x2="142" y2="16" />
      </g>
      <g stroke="#10b981" strokeWidth="2.4" strokeLinecap="round">
        <line x1="8" y1="40" x2="142" y2="40" />
      </g>
      {[20, 46, 72, 98, 124].map((x) => (
        <g key={x}>
          <line x1={x} y1="10" x2={x} y2="22" stroke="#fdba74" strokeWidth="1.6" strokeLinecap="round" />
          <line x1={x} y1="34" x2={x} y2="46" stroke="#6ee7b7" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}
      <circle cx="8" cy="16" r="4" fill="#f97316" />
      <circle cx="8" cy="40" r="4" fill="#10b981" />
    </svg>
  );
}

// Info: (20261005 - Luphia) 第 8 頁：40／20／40 預算環圈
export function AscBudgetDonut({ className = '' }: { className?: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const segs = [
    { id: 's1', pct: 40, color: '#f97316', offset: 0 },
    { id: 's2', pct: 20, color: '#6366f1', offset: 40 },
    { id: 's3', pct: 40, color: '#10b981', offset: 60 },
  ];
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <g transform="rotate(-90 48 48)">
        {segs.map((s) => (
          <circle
            key={s.id}
            cx="48" cy="48" r={r}
            fill="none" stroke={s.color} strokeWidth="14"
            strokeDasharray={`${(c * s.pct) / 100} ${c}`}
            strokeDashoffset={-(c * s.offset) / 100}
          />
        ))}
      </g>
      <text x="48" y="45" textAnchor="middle" fontSize="15" fill="#0f172a" fontWeight="900">3,000</text>
      <text x="48" y="58" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="700">萬元</text>
    </svg>
  );
}

// Info: (20261005 - Luphia) 第 10 頁：社工與服務對象（時間回到人身上）
export function AscHandoverTime({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 110" className={className} fill="none" aria-hidden="true">
      {/* Info: (20261005 - Luphia) 社工 */}
      <circle cx="42" cy="34" r="13" fill="#fff7ed" stroke="#f97316" strokeWidth="2.2" />
      <path d="M20 86c0-14 10-24 22-24s22 10 22 24" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
      {/* Info: (20261005 - Luphia) 服務對象 */}
      <circle cx="158" cy="34" r="13" fill="#fef2f2" stroke="#e11d48" strokeWidth="2.2" />
      <path d="M136 86c0-14 10-24 22-24s22 10 22 24" stroke="#e11d48" strokeWidth="2.2" strokeLinecap="round" />
      {/* Info: (20261005 - Luphia) 時間移轉 */}
      <path d="M72 50 q28 -20 56 0" stroke="#fb923c" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="5 4" />
      <path d="M128 50 l-10 -3 l4 9 z" fill="#fb923c" />
      <g transform="translate(90 20)">
        <circle cx="10" cy="10" r="9.5" fill="#fff" stroke="#f97316" strokeWidth="2" />
        <path d="M10 5v5.5l3.5 2.5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Info: (20261005 - Luphia) 第 3 頁：四種能力各異的代理人機器人
type TRobotKind = 'hr' | 'admin' | 'ledger' | 'impact';
const ROBOT_THEME: Record<TRobotKind, { line: string; fill: string; accent: string }> = {
  hr: { line: '#ea580c', fill: '#fff7ed', accent: '#f97316' },
  admin: { line: '#e11d48', fill: '#fef2f2', accent: '#f43f5e' },
  ledger: { line: '#2563eb', fill: '#eff6ff', accent: '#3b82f6' },
  impact: { line: '#059669', fill: '#ecfdf5', accent: '#10b981' },
};

export function AscRobot({ kind, className = '' }: { kind: TRobotKind; className?: string }) {
  const t = ROBOT_THEME[kind];
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden="true">
      {/* Info: (20261005 - Luphia) 天線：各代理人造型不同 */}
      {kind === 'hr' && (
        <g stroke={t.line} strokeWidth="1.8" strokeLinecap="round">
          <line x1="28" y1="10" x2="28" y2="4" />
          <circle cx="28" cy="3" r="2.2" fill={t.accent} stroke="none" />
        </g>
      )}
      {kind === 'admin' && (
        <g stroke={t.line} strokeWidth="1.8" strokeLinecap="round">
          <line x1="20" y1="10" x2="17" y2="4" />
          <line x1="36" y1="10" x2="39" y2="4" />
          <circle cx="17" cy="3" r="2" fill={t.accent} stroke="none" />
          <circle cx="39" cy="3" r="2" fill={t.accent} stroke="none" />
        </g>
      )}
      {kind === 'ledger' && (
        <g stroke={t.line} strokeWidth="1.8" strokeLinecap="round">
          <path d="M28 10 V6 a4 4 0 0 1 6 -2" />
          <circle cx="35" cy="3.5" r="2.2" fill={t.accent} stroke="none" />
        </g>
      )}
      {kind === 'impact' && (
        <g stroke={t.line} strokeWidth="1.6" strokeLinecap="round">
          <line x1="28" y1="10" x2="28" y2="5" />
          <path d="M22 4 l3 3 M34 4 l-3 3" />
          <circle cx="28" cy="3" r="2.2" fill={t.accent} stroke="none" />
        </g>
      )}

      {/* Info: (20261005 - Luphia) 頭部與眼睛 */}
      <rect x="12" y="10" width="32" height="24" rx="8" fill={t.fill} stroke={t.line} strokeWidth="2" />
      <circle cx="21" cy="21" r="3" fill={t.line} />
      <circle cx="35" cy="21" r="3" fill={t.line} />
      {/* Info: (20261005 - Luphia) 嘴部：以不同表情區分能力性格 */}
      {kind === 'hr' && <path d="M22 28 h12" stroke={t.line} strokeWidth="1.8" strokeLinecap="round" />}
      {kind === 'admin' && <path d="M22 27 q6 4 12 0" stroke={t.line} strokeWidth="1.8" strokeLinecap="round" />}
      {kind === 'ledger' && <rect x="23" y="26" width="10" height="3.5" rx="1.2" stroke={t.line} strokeWidth="1.6" />}
      {kind === 'impact' && <path d="M23 27 q5 5 10 0" stroke={t.line} strokeWidth="1.8" strokeLinecap="round" />}

      {/* Info: (20261005 - Luphia) 軀幹與該代理人持有之工具 */}
      <rect x="16" y="37" width="24" height="15" rx="5" fill="#fff" stroke={t.line} strokeWidth="2" />
      {kind === 'hr' && (
        <g stroke={t.line} strokeWidth="1.5" strokeLinecap="round">
          <rect x="21" y="41" width="14" height="8" rx="1.6" fill={t.fill} />
          <line x1="21" y1="44" x2="35" y2="44" />
          <line x1="25" y1="41" x2="25" y2="39.5" />
          <line x1="31" y1="41" x2="31" y2="39.5" />
        </g>
      )}
      {kind === 'admin' && (
        <g stroke={t.line} strokeWidth="1.5" strokeLinecap="round">
          <path d="M22 41 h9 l3 3 v5 h-12 z" fill={t.fill} />
          <line x1="24" y1="45" x2="31" y2="45" />
          <line x1="24" y1="47.5" x2="29" y2="47.5" />
        </g>
      )}
      {kind === 'ledger' && (
        <g stroke={t.line} strokeWidth="1.5" strokeLinecap="round">
          <rect x="22" y="41" width="12" height="8" rx="1.6" fill={t.fill} />
          <circle cx="25.5" cy="44" r="1" fill={t.line} stroke="none" />
          <circle cx="30.5" cy="44" r="1" fill={t.line} stroke="none" />
          <line x1="24" y1="47" x2="32" y2="47" />
        </g>
      )}
      {kind === 'impact' && (
        <g stroke={t.line} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 48 l4 -4 l3 2.5 l5 -5.5" fill="none" />
          <path d="M31 41 h3.5 v3.5" fill="none" />
        </g>
      )}
    </svg>
  );
}

// Info: (20261005 - Luphia) 第 6 頁：導入場域類型（社福機構／學校／醫院）線稿
export function AscFacilities({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 92" className={className} fill="none" aria-hidden="true">
      <g stroke="#64748b" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        {/* Info: (20261005 - Luphia) 社福機構 */}
        <path d="M14 76 V40 l24 -16 l24 16 v36 z" fill="#fff7ed" />
        <path d="M30 76 V58 h16 v18" fill="#fff" />
        <path d="M38 34 v8 M34 38 h8" stroke="#f97316" strokeWidth="2.2" />
        <text x="38" y="88" textAnchor="middle" fontSize="9" fill="#475569" fontWeight="700" stroke="none">社福機構</text>

        {/* Info: (20261005 - Luphia) 學校 */}
        <path d="M110 76 V44 h60 v32 z" fill="#eff6ff" />
        <path d="M104 44 l36 -16 l36 16" fill="#fff" />
        <rect x="120" y="54" width="12" height="10" rx="1.5" fill="#fff" />
        <rect x="148" y="54" width="12" height="10" rx="1.5" fill="#fff" />
        <path d="M134 76 V66 h12 v10" fill="#fff" />
        <path d="M140 28 v-8 h10 v5 h-10" stroke="#2563eb" strokeWidth="2" fill="none" />
        <text x="140" y="88" textAnchor="middle" fontSize="9" fill="#475569" fontWeight="700" stroke="none">學校</text>

        {/* Info: (20261005 - Luphia) 醫院 */}
        <path d="M220 76 V36 h56 v40 z" fill="#ecfdf5" />
        <path d="M244 24 v8 M240 28 h8" stroke="#059669" strokeWidth="2.6" />
        <rect x="230" y="46" width="11" height="9" rx="1.5" fill="#fff" />
        <rect x="255" y="46" width="11" height="9" rx="1.5" fill="#fff" />
        <path d="M242 76 V62 h12 v14" fill="#fff" />
        <text x="248" y="88" textAnchor="middle" fontSize="9" fill="#475569" fontWeight="700" stroke="none">醫院</text>
      </g>
    </svg>
  );
}

// Info: (20261005 - Luphia) 計畫效益頁：iSunCloud 地端算力共享網路（區塊鏈調度）
export function AscComputeMesh({ className = '' }: { className?: string }) {
  const nodes = [
    { id: 'a', x: 40, y: 30, label: 'A 場域', busy: true },
    { id: 'b', x: 160, y: 22, label: 'B 場域', busy: false },
    { id: 'c', x: 36, y: 118, label: 'C 場域', busy: false },
    { id: 'd', x: 164, y: 124, label: 'D 場域', busy: false },
  ];
  return (
    <svg viewBox="0 0 210 162" className={className} fill="none" aria-hidden="true">
      {/* Info: (20261005 - Luphia) 區塊鏈調度核心 */}
      <circle cx="102" cy="74" r="27" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
      <g stroke="#6366f1" strokeWidth="1.7" strokeLinejoin="round">
        <rect x="92" y="64" width="9" height="9" rx="1.6" fill="#fff" />
        <rect x="103" y="64" width="9" height="9" rx="1.6" fill="#fff" />
        <rect x="97.5" y="76" width="9" height="9" rx="1.6" fill="#fff" />
      </g>
      <text x="102" y="110" textAnchor="middle" fontSize="8" fill="#4338ca" fontWeight="800">區塊鏈調度</text>

      {/* Info: (20261005 - Luphia) 各場域地端節點 */}
      {nodes.map((n) => (
        <g key={n.id}>
          <line
            x1={n.x} y1={n.y} x2="102" y2="74"
            stroke={n.busy ? '#f97316' : '#cbd5e1'}
            strokeWidth={n.busy ? 2.2 : 1.5}
            strokeDasharray={n.busy ? '0' : '4 4'}
          />
          <rect
            x={n.x - 21} y={n.y - 13} width="42" height="26" rx="6"
            fill={n.busy ? '#fff7ed' : '#f8fafc'}
            stroke={n.busy ? '#f97316' : '#94a3b8'} strokeWidth="1.8"
          />
          <text x={n.x} y={n.y + 3} textAnchor="middle" fontSize="8.5"
            fill={n.busy ? '#c2410c' : '#475569'} fontWeight="700">{n.label}</text>
        </g>
      ))}

      {/* Info: (20261005 - Luphia) 算力不足時向網路借用 */}
      <text x="40" y="8" textAnchor="middle" fontSize="7.5" fill="#f97316" fontWeight="800">算力不足</text>
      <text x="102" y="152" textAnchor="middle" fontSize="8" fill="#64748b" fontWeight="700">閒置算力互借　用量上鏈可稽核</text>
    </svg>
  );
}
