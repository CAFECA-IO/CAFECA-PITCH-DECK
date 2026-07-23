'use client';

import { AlertTriangle, Database, ShieldAlert, FileWarning, Bot, ScanSearch, FileCheck2, LockKeyhole } from 'lucide-react';

export default function IsunfaAsusSlide5() {
  const pains = [
    { icon: Database, title: '海量異質數據難整合', desc: '設備、ERP、憑證與供應商資料格式分歧，人工彙整耗時且易錯。' },
    { icon: FileWarning, title: '合規與審計壓力大', desc: 'ISO 14064／IFRS／CBAM 與供應鏈要求並存，報告需可被稽核。' },
    { icon: ShieldAlert, title: '機密與協作的兩難', desc: '敏感財會與製程數據須雲端協作，卻擔憂外洩與資安風險。' },
  ];

  const features = [
    { icon: Bot, title: 'AI 自動蒐集與匹配', desc: '語意匹配百萬級排放係數，自動歸集海量異質數據。' },
    { icon: FileCheck2, title: '可審計報告生成', desc: '一鍵產出符合 IFRS／ISO 的報告，區塊鏈存證不可篡改。' },
    { icon: ScanSearch, title: '異常偵測與預測', desc: '自動偵測異常單據，預測減碳與成本優化路徑。' },
    { icon: LockKeyhole, title: '同態加密安全協作', desc: '密文運算下協作，保障最高層級商業機密與隱私。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-20 w-full px-16 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-orange-500 tracking-widest">04</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">AI Solution & Technology</span>
          </div>
          <span className="text-xs font-bold text-slate-300">1 / 3</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight mt-4">服務對象、痛點與核心功能</h2>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs font-bold text-slate-400">服務對象：</span>
          {['ESG／永續主管', '廠長／製造管理', 'CFO／財會', '資安長'].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold border border-orange-100">{t}</span>
          ))}
        </div>
      </div>

      <div className="z-20 flex-1 grid grid-cols-12 gap-6 px-16 pb-10 mt-2">
        {/* Pains */}
        <div className="col-span-5 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-slate-400" />
            <p className="text-sm font-bold text-slate-700">企業痛點</p>
          </div>
          {pains.map((p) => (
            <div key={p.title} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-start gap-3 flex-1">
              <div className="w-9 h-9 rounded-lg bg-white text-slate-500 flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-200">
                <p.icon className="w-4 h-4" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">{p.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="col-span-7 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-orange-500" />
            <p className="text-sm font-bold text-slate-700">核心功能與 AI 技術應用</p>
          </div>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col hover:-translate-y-0.5 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-2.5 border border-orange-100">
                  <f.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{f.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
