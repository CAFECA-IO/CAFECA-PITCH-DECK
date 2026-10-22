'use client';

import { ClipboardList, Cpu, AppWindow, Network, TrendingUp, Wallet } from 'lucide-react';

export default function IsunfaPwpSlide2() {
  const sections = [
    {
      id: 'plan',
      weight: '20%',
      title: '專案整體規劃與重要性',
      icon: ClipboardList,
      color: 'orange',
      points: ['CBAM / 歐盟 DPP 法遵壓力之產業痛點分析', '公益型產業生態系推動模式', '團隊十年政府級專案與碳盤查實績', '8 個月四階段推動與里程碑驗收'],
    },
    {
      id: 'tech',
      weight: '25%',
      title: '核心技術規劃與技術可行性',
      icon: Cpu,
      color: 'blue',
      points: ['金屬材料與永續法規領域型 LLM + RAG', 'Agentic AI 多代理中介平台架構', 'Model Card / SBOM 與 Apache 2.0 開源', '核心物件著作財產權移轉數位產業署'],
    },
    {
      id: 'app',
      weight: '20%',
      title: 'AI 應用系統開發與產品化能力',
      icon: AppWindow,
      color: 'indigo',
      points: ['No-Code DPP 生成器（Web / API）', '零廢副產物智慧媒合系統', '模組化架構與 API / MCP 標準介面', '第三方資安檢測與 OWASP Top 10 涵蓋'],
    },
    {
      id: 'field',
      weight: '20%',
      title: 'AI 場域規劃與生態系擴散能力',
      icon: Network,
      color: 'emerald',
      points: ['金屬中心與螺絲公會輔導網絡導入 300+ 工廠', '北中南聚落、多元製程、非特定關係企業', '國內循環優先，並規劃東亞精密製造輸出', '多家資服業者共同推動場域導入（加分）'],
    },
    {
      id: 'ops',
      weight: '15%',
      title: '營運規劃與預期效益',
      icon: TrendingUp,
      color: 'teal',
      points: ['計畫結束後 SaaS 自主營運與常態輔導', '年轉化 50,000 噸廢料為再生資材', '強化我國 AI 與循環經濟軟體基盤', '公益普及：基礎版永久免費供中小廠使用'],
    },
  ];

  const colorMap: { [key: string]: { bg: string; text: string; ring: string; bar: string } } = {
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', ring: 'border-orange-200', bar: 'bg-orange-400' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', ring: 'border-blue-200', bar: 'bg-blue-400' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', ring: 'border-indigo-200', bar: 'bg-indigo-400' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', ring: 'border-emerald-200', bar: 'bg-emerald-400' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', ring: 'border-teal-200', bar: 'bg-teal-400' },
  };

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Executive Summary</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <h2 className="text-4xl font-black leading-tight text-slate-800">
          一頁看懂本提案：{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">五大審查構面全覆蓋</span>
        </h2>
        <p className="text-base text-slate-500 mt-2 font-medium">
          以「雲端服務型」提案，一次滿足領域型 AI 模型開源、AI 應用服務落地與 300 個以上場域擴散之關鍵指標。
        </p>
      </div>

      {/* Info: (20260819 - Luphia) 5 Review Dimensions */}
      <div className="z-10 px-16 grid grid-cols-5 gap-4 flex-1">
        {sections.map((s) => {
          const c = colorMap[s.color];
          const Icon = s.icon;
          return (
            <div key={s.id} className={`bg-white border ${c.ring} rounded-2xl shadow-sm p-5 flex flex-col relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-full h-1 ${c.bar}`}></div>
              <div className="flex items-center justify-between mb-3 mt-1">
                <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <span className={`text-xs font-mono font-black ${c.text}`}>{s.weight}</span>
              </div>
              <h3 className="text-[15px] font-bold text-slate-800 leading-snug mb-3 min-h-[48px]">{s.title}</h3>
              <div className="w-full h-px bg-slate-100 mb-3"></div>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="text-[11px] text-slate-500 leading-relaxed flex gap-1.5">
                    <span className={`${c.text} font-bold flex-shrink-0`}>·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Info: (20260819 - Luphia) Bottom KPI Strip */}
      <div className="z-10 px-16 py-6">
        <div className="bg-slate-800 rounded-2xl px-8 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <Wallet className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-bold text-white tracking-wider">關鍵績效指標（KPI）</span>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-center">
              <div className="text-2xl font-black text-orange-400">300+</div>
              <div className="text-[10px] text-slate-400 tracking-wider">場域擴散數（工廠）</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-black text-emerald-400 leading-8">多家共推</div>
              <div className="text-[10px] text-slate-400 tracking-wider">導入資服業者家數</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-blue-400">2</div>
              <div className="text-[10px] text-slate-400 tracking-wider">開源模型 / 中介平台</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">5</div>
              <div className="text-[10px] text-slate-400 tracking-wider">AI 應用服務模組</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
