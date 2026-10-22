'use client';

import { Building2, Landmark, Wrench, FileSignature, CircleDot, Circle, Minus } from 'lucide-react';

const ORGS = [
  {
    id: 'cafeca',
    name: '卡菲卡金融科技股份有限公司',
    brand: 'iSunFA',
    role: '主提案單位 · 簽約主體',
    tag: '資訊服務業者（J62）',
    icon: Building2,
    hex: '#6366f1',
    tint: 'bg-indigo-50',
    ink: 'text-indigo-600',
    ring: 'border-indigo-200',
    duties: [
      'AI 領域型模型訓練與 Agentic 中介平台開發',
      'DPP 生成器、零廢媒合引擎與前後端介面設計',
      'API／MCP 介接、資料治理與 Model Card／SBOM 開源',
      '第三方資安檢測委辦與弱點修補',
      '計畫結束後雲端 SaaS 維運與成效追蹤',
    ],
  },
  {
    id: 'mirdc',
    name: '財團法人金屬工業研究發展中心',
    brand: '金屬中心',
    role: '聯合提案單位 1',
    tag: '財團法人（非營利）',
    icon: Landmark,
    hex: '#14b8a6',
    tint: 'bg-teal-50',
    ink: 'text-teal-600',
    ring: 'border-teal-200',
    duties: [
      '金屬材料與廢料檢測數據標準、標註準則制定',
      '中北部聚落與跨製程會員廠動員招募',
      '場域端輔導、資料盤點與導入陪跑',
      '跨廠循環媒合之技術驗證與品質背書',
      '計畫結束後納入常態性綠色輔導計畫',
    ],
  },
  {
    id: 'tifi',
    name: '台灣螺絲工業同業公會',
    brand: '螺絲公會',
    role: '聯合提案單位 2',
    tag: '社團法人（同業公會）',
    icon: Wrench,
    hex: '#f97316',
    tint: 'bg-orange-50',
    ink: 'text-orange-600',
    ring: 'border-orange-200',
    duties: [
      '岡山扣件聚落會員廠動員與南部場域招募',
      '扣件製程廢料（切削屑、酸洗廢液、廢模具）產出盤點',
      '國際買方 DPP 與再生料比例要求之需求彙整',
      '南部宣導會、實機工作坊與教育訓練協辦',
      '計畫結束後納入會員常態性服務與推廣',
    ],
  },
];

// Info: (20260819 - Luphia) Responsibility matrix — 'lead' 主責 / 'support' 協力 / null 不參與
const MATRIX = [
  { id: 'r1', area: 'AI 模型訓練與中介平台（預算項目一）', cafeca: ['lead', ''], mirdc: ['support', '檢測數據與標註準則'], tifi: [null, ''] },
  { id: 'r2', area: 'AI 應用系統開發（預算項目二）', cafeca: ['lead', ''], mirdc: ['support', '實務驗證'], tifi: ['support', '扣件業需求彙整'] },
  { id: 'r3', area: 'AI 生態系場域擴散（預算項目三）', cafeca: ['support', ''], mirdc: ['lead', '中北部・跨製程'], tifi: ['lead', '南部扣件聚落'] },
  { id: 'r4', area: '開源釋出與成效追蹤', cafeca: ['lead', ''], mirdc: ['support', ''], tifi: ['support', ''] },
];

function Mark({ cell }: { cell: (string | null)[] }) {
  const [kind, note] = cell;
  if (kind === null) return <Minus className="w-3.5 h-3.5 text-slate-300 inline-block" />;
  const isLead = kind === 'lead';
  return (
    <span className="inline-flex items-center gap-1.5">
      {isLead
        ? <CircleDot className="w-3.5 h-3.5 text-slate-800 flex-shrink-0" />
        : <Circle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />}
      <span className={isLead ? 'text-[11px] font-bold text-slate-800' : 'text-[11px] text-slate-500'}>
        {isLead ? '主責' : '協力'}
      </span>
      {note ? <span className="text-[10px] text-slate-400">· {note}</span> : null}
    </span>
  );
}

export default function IsunfaPwpSlide15() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest">Consortium &amp; Responsibilities</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-[66px] pb-4">
        <h2 className="text-[36px] font-black leading-tight text-slate-800">
          三方協作架構與{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500">權責分工</span>
        </h2>
        <p className="text-[13px] text-slate-500 mt-1.5 font-medium">
          一家資服業者為簽約主體，搭配一家財團法人與一家同業公會共同聯合提案，權責界線明確且各具不可替代性。
        </p>
      </div>

      {/* Info: (20260819 - Luphia) Three organisation cards */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5">
        {ORGS.map((o) => {
          const Icon = o.icon;
          return (
            <div key={o.id} className={`bg-white border ${o.ring} rounded-3xl p-5 shadow-sm relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: o.hex }}></div>

              <div className="flex items-center gap-3 mb-3 mt-1">
                <div className={`w-11 h-11 ${o.tint} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${o.ink}`} />
                </div>
                <div className="min-w-0">
                  <div className={`text-[10px] font-black ${o.ink} tracking-widest uppercase`}>{o.role}</div>
                  <h3 className="text-[14px] font-bold text-slate-800 leading-tight truncate">{o.name}</h3>
                  <div className="text-[10px] text-slate-400">{o.tag}</div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 space-y-1.5">
                {o.duties.map((d) => (
                  <div key={d} className="flex gap-2 text-[11.5px] text-slate-600 leading-relaxed">
                    <span className={`${o.ink} font-bold flex-shrink-0`}>·</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20260819 - Luphia) Responsibility matrix */}
      <div className="z-10 px-16 pt-5 flex-1">
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-[1fr_repeat(3,215px)] bg-slate-800 text-white text-[11px] font-bold tracking-wider">
            <div className="px-5 py-2.5">工作構面（對應預算項目）</div>
            {ORGS.map((o) => (
              <div key={o.id} className="px-4 py-2.5 border-l border-slate-600 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: o.hex }}></span>
                <span>{o.brand}</span>
              </div>
            ))}
          </div>
          {MATRIX.map((r) => (
            <div key={r.id} className="grid grid-cols-[1fr_repeat(3,215px)] border-b border-slate-100 last:border-b-0">
              <div className="px-5 py-2 text-[12px] text-slate-700 font-medium">{r.area}</div>
              <div className="px-4 py-2 border-l border-slate-100"><Mark cell={r.cafeca} /></div>
              <div className="px-4 py-2 border-l border-slate-100"><Mark cell={r.mirdc} /></div>
              <div className="px-4 py-2 border-l border-slate-100"><Mark cell={r.tifi} /></div>
            </div>
          ))}
        </div>
      </div>

      {/* Info: (20260819 - Luphia) Contract structure note */}
      <div className="z-10 px-16 py-4">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-3 flex items-center gap-4 shadow-sm">
          <FileSignature className="w-5 h-5 text-slate-500 flex-shrink-0" />
          <p className="text-[11.5px] text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800">契約結構</span>：
            由卡菲卡金融科技為唯一簽約主體（每家資服業者同一年度僅能擔任 1 案主提案者），與「數位產業跨域軟體基盤系統建置案」得標廠商簽立合作契約；
            與金屬中心、螺絲公會分別檢附<span className="font-bold text-slate-700">合作意向書（MOU）或報價單</span>作為聯合提案佐證，
            對應附件一之聯合提案單位 1 與 2。如另有協作廠商，於主契約簽訂後 30 日內提報名單並檢附委外合約影本，契約內容均納入本須知規定之權利歸屬框架。
          </p>
        </div>
      </div>

    </div>
  );
}
