'use client';

import { QrCode, Shuffle, BarChart3, Plug, ShieldCheck, MousePointerClick } from 'lucide-react';

export default function IsunfaPwpSlide7() {
  const modules = [
    {
      id: 'gen',
      icon: QrCode,
      color: 'orange',
      title: 'AI 數位產品護照生成器',
      tag: 'No-Code / API',
      desc: '工廠以拖拉方式上傳材質單、BOM 表與能源單據，AI 自動解析並輸出符合國際標準之 DPP 文件與可驗證 QR-Code。',
      bullets: ['再生資材比例（Recycled Content %）', '物料可追溯性（Traceability）', '批次碳足跡與減碳履歷', '中英文雙語輸出與買方稽核專區'],
    },
    {
      id: 'match',
      icon: Shuffle,
      color: 'emerald',
      title: '零廢製造資源媒合系統',
      tag: 'Matching Engine',
      desc: 'AI 分析廢金屬、餘料、廢液之規格與品質等級，自動匹配周邊需求廠商並試算運輸碳排，促成跨廠循環利用。',
      bullets: ['成分 / 雜質率智慧分級（A、B、C 級）', '地理鄰近性與產出頻率最佳化', '媒合成交與物料流向追蹤', '運輸路徑二次碳排試算與最佳化'],
    },
    {
      id: 'carbon',
      icon: BarChart3,
      color: 'blue',
      title: '碳足跡與合規儀表板',
      tag: 'CFP / CBAM',
      desc: '自動計算再生原料相較原生礦料所節省之 Scope 3 排放，並輸出 CBAM 申報與買方稽核所需之合規報表。',
      bullets: ['ISO 14067 產品碳足跡計算', 'CBAM 內含碳排放申報格式', '逐筆憑證稽核軌跡（Audit Trail）', '減碳成效儀表板與年度趨勢分析'],
    },
  ];

  const colorMap: { [key: string]: { bg: string; text: string; border: string; bar: string } } = {
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', bar: 'bg-orange-400' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', bar: 'bg-emerald-400' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', bar: 'bg-blue-400' },
  };

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 top-0 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Application &amp; Productization</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          AI 應用系統開發規劃與{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">產品化能力</span>
        </h2>
        <p className="text-sm text-slate-500 mt-2 font-medium">
          採模組化架構與標準化介面設計，三大應用模組可獨立訂閱、亦可透過 MCP 供其他 AI Agent 直接調用。
        </p>
      </div>

      {/* Info: (20260819 - Luphia) 3 Modules */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5">
        {modules.map((m) => {
          const c = colorMap[m.color];
          const Icon = m.icon;
          return (
            <div key={m.id} className={`bg-white border ${c.border} rounded-3xl p-6 shadow-sm relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-full h-1.5 ${c.bar}`}></div>
              <div className="flex items-center justify-between mb-3 mt-1">
                <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 ${c.bg} ${c.text} rounded-full`}>{m.tag}</span>
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">{m.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed mb-3">{m.desc}</p>
              <div className="border-t border-slate-100 pt-3 space-y-1.5">
                {m.bullets.map((b) => (
                  <div key={b} className="flex gap-2 text-[11px] text-slate-600">
                    <span className={`${c.text} font-bold`}>▸</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20260819 - Luphia) Bottom Capability Row */}
      <div className="z-10 px-16 mt-6 grid grid-cols-3 gap-5 flex-1 items-start">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
          <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
            <MousePointerClick className="w-5 h-5 text-indigo-500" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">產品化與商業模式</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              基礎版永久免費（公益普及）、進階版依批次計費、企業版提供 API 額度與客製報表；
              計畫結束後即具備自負盈虧之訂閱營收結構。
            </p>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
          <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
            <Plug className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">系統整合與服務化</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              提供 RESTful API 與 <span className="font-bold">MCP Server</span>，可介接工廠既有 ERP / MES，
              並支援 Agentic AI 生態系直接調用工具，降低其他資服業者串接門檻。
            </p>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
          <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">資訊安全檢測</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              委由數位產業署認可之第三方資安檢測機構執行源碼掃描、弱點掃描與滲透測試，
              涵蓋 OWASP Top 10，中高風險弱點全數修正完畢並提出報告。
            </p>
          </div>
        </div>
      </div>

      <div className="h-10"></div>

    </div>
  );
}
