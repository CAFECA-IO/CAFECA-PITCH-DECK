'use client';

import { TrendingUp, Recycle, Globe2, HeartHandshake, Server, GitBranch } from 'lucide-react';

// Info: (20260819 - Luphia) Before/after dumbbell, indexed to 現況 = 100 so two different units share one axis
const BEFORE_HEX = '#14b8a6';
const AFTER_HEX = '#0f766e';
const DUMBBELL = [
  { id: 'd1', name: '單批次 DPP 履歷產出工時', beforeLabel: '14 人日', afterLabel: '1 人日', after: 7 },
  { id: 'd2', name: '單次碳盤查／履歷建置成本', beforeLabel: '30～80 萬元', afterLabel: '約 4 萬元', after: 8 },
];

export default function IsunfaPwpSlide13() {
  const kpis = [
    { id: 'k1', value: '300+', unit: '家', label: '工廠完成 AI DPP 建置', color: 'text-orange-500' },
    { id: 'k2', value: '50,000', unit: '噸／年', label: '金屬廢料與廢液資源化', color: 'text-emerald-600' },
    { id: 'k3', value: '15%', unit: '以上', label: '廢料轉化為循環再利用資材', color: 'text-blue-600' },
    { id: 'k4', value: '15~30%', unit: '', label: '降低中小企業廢棄物清理費用', color: 'text-indigo-600' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">Operation &amp; Impact</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-[66px] pb-4">
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          營運規劃與{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-orange-500">預期效益</span>
        </h2>
      </div>

      {/* Info: (20260819 - Luphia) KPI Row */}
      <div className="z-10 px-16 grid grid-cols-4 gap-5 mb-5">
        {kpis.map((k) => (
          <div key={k.id} className="bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className={`text-3xl font-black ${k.color}`}>{k.value}</span>
              <span className="text-xs font-bold text-slate-400">{k.unit}</span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Info: (20260819 - Luphia) Before/after chart */}
      <div className="z-10 px-16 pb-4">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-3 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[13px] font-bold text-slate-700">導入前後量化效益</span>
              <span className="text-[11px] text-slate-400 ml-2">以現況為 100 之相對指數，兩項單位不同故同軸指數化</span>
            </div>
            {/* Info: (20260819 - Luphia) Legend — identity never by colour alone */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: BEFORE_HEX }}></span>
                <span className="text-[11px] font-bold text-slate-600">現況（人工作業）</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: AFTER_HEX }}></span>
                <span className="text-[11px] font-bold text-slate-600">導入 AI DPP 後</span>
              </div>
            </div>
          </div>

          {DUMBBELL.map((d) => (
            <div key={d.id} className="flex items-center h-[34px]">
              <div className="w-[230px] flex-shrink-0 text-[12px] text-slate-600 pr-4">{d.name}</div>
              <div className="w-[86px] flex-shrink-0 text-right pr-3 text-[12px] font-black text-teal-800 tabular-nums">{d.afterLabel}</div>
              <div className="flex-1 relative h-full">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-slate-100"></div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-[3px] rounded-full"
                  style={{ left: `${d.after}%`, right: '0%', background: BEFORE_HEX, opacity: 0.35 }}
                ></div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-[13px] h-[13px] rounded-full ring-2 ring-white"
                  style={{ left: `${d.after}%`, transform: 'translate(-50%, -50%)', background: AFTER_HEX }}
                ></div>
                <div
                  className="absolute top-1/2 left-full w-[13px] h-[13px] rounded-full ring-2 ring-white"
                  style={{ transform: 'translate(-50%, -50%)', background: BEFORE_HEX }}
                ></div>
              </div>
              <div className="w-[110px] flex-shrink-0 text-left pl-4 text-[12px] font-bold text-slate-500 tabular-nums">{d.beforeLabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info: (20260819 - Luphia) Benefit Cards */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 flex-1 items-start">

        <div className="bg-white border border-orange-200 rounded-3xl p-5 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-400"></div>
          <div className="flex items-center gap-3 mb-2.5 mt-1">
            <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-base font-bold text-slate-800">產業效益</h3>
          </div>
          <ul className="space-y-2 text-[12px] text-slate-600 leading-relaxed">
            <li className="flex gap-2"><span className="text-orange-500 font-bold">▸</span><span>300+ 家工廠取得可驗證 DPP，提升國際接單競爭力，順利通過 Apple、Tesla 與歐盟車廠之綠色供應鏈審查。</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">▸</span><span>再生資材售價高於廢棄物清運價格，直接創造中小廠新營收來源。</span></li>
          </ul>
        </div>

        <div className="bg-white border border-emerald-200 rounded-3xl p-5 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-400"></div>
          <div className="flex items-center gap-3 mb-2.5 mt-1">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-base font-bold text-slate-800">社會與公益影響</h3>
          </div>
          <ul className="space-y-2 text-[12px] text-slate-600 leading-relaxed">
            <li className="flex gap-2"><span className="text-emerald-600 font-bold">▸</span><span>資源弱勢之在地中小工廠免費取得 AI 綠色轉型能力，弭平數位與永續雙重落差。</span></li>
            <li className="flex gap-2"><span className="text-emerald-600 font-bold">▸</span><span>減少廢棄物掩埋與跨區運輸，降低鄰近社區環境負荷與二次碳排。</span></li>
            <li className="flex gap-2"><span className="text-emerald-600 font-bold">▸</span><span>建立產業級零廢製造示範案例，可複製至其他傳統製造領域。</span></li>
          </ul>
        </div>

        <div className="bg-white border border-blue-200 rounded-3xl p-5 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-400"></div>
          <div className="flex items-center gap-3 mb-2.5 mt-1">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="text-base font-bold text-slate-800">對我國 AI 產業之貢獻</h3>
          </div>
          <ul className="space-y-2 text-[12px] text-slate-600 leading-relaxed">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">▸</span><span>釋出「金屬廢資材與再生原料分類模型」及「DPP 數據封裝標準」，成為臺灣工業循環經濟之軟體基盤。</span></li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">▸</span><span>提供 MCP 工具介面，使國內 Agentic AI 生態系可直接調用製造業永續資料能力。</span></li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">▸</span><span>培育跨領域 AI × 永續人才，擴大資服業者在製造業之服務縱深。</span></li>
          </ul>
        </div>

      </div>

      {/* Info: (20260819 - Luphia) Sustainability Bar */}
      <div className="z-10 px-16 py-4">
        <div className="bg-slate-800 rounded-2xl px-6 py-3.5 flex items-center gap-6 shadow-lg">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Server className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-bold text-white">營運持續性</span>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-6">
            <div className="flex gap-2">
              <TrendingUp className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-300 leading-relaxed">計畫結束後由本公司維運雲端 SaaS，基礎版永久免費、進階版訂閱制自負盈虧。</p>
            </div>
            <div className="flex gap-2">
              <Recycle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-300 leading-relaxed">金屬中心與螺絲公會持續納入常態性輔導與會員服務，維持場域端服務與新廠導入。</p>
            </div>
            <div className="flex gap-2">
              <GitBranch className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-300 leading-relaxed">開源社群治理：公開 Roadmap 與 Issue 追蹤，配合成效追蹤至少 3 年。</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
