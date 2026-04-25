import React from 'react';
import { Target, Cpu, TrendingUp, CheckCircle2, ChevronRight, BarChart3, Receipt, Database } from 'lucide-react';

export default function GreenAccountingSlide13() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col items-center border border-slate-200 text-slate-900">

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-emerald-100 blur-[100px] rounded-full opacity-60" />
          <div className="absolute bottom-[20%] right-[20%] w-[50%] h-[50%] bg-blue-50 blur-[120px] rounded-full opacity-60" />
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-12">

          {/* Title Section */}
          <div className="mb-8 text-center bg-white/50 backdrop-blur-sm py-4 rounded-3xl">
            <div className="flex items-center justify-center gap-3 text-emerald-600 mb-2">
              <div className="px-3 py-1 border border-emerald-200 rounded-full text-[10px] font-bold tracking-[0.2em] bg-emerald-50 uppercase">Success Story</div>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
              KINIK 中國砂輪導入 AI 碳盤查案例
            </h2>
            <p className="text-slate-500 text-sm font-light">
              半導體高階耗材領導廠商，如何藉助人工智能突破 ESG 數據管理瓶頸
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-3 gap-6 flex-1 drop-shadow-sm">

            {/* Column 1: Challenges */}
            <div className="bg-white border border-red-100 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col relative z-20">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4 border border-red-100">
                <Target className="text-red-500 w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">導入背景與挑戰</h3>
              <p className="text-slate-500 text-xs mb-4">面對台積電等客戶嚴格 ESG 要求，傳統碳盤查面臨痛點：</p>

              <ul className="space-y-3 text-xs text-slate-600 mt-2 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-red-300 mt-0.5">•</span>
                  <div>
                    <span className="text-slate-800 font-semibold">資料破碎且蒐集耗時：</span>
                    <span className="text-slate-500 block mt-1">廠區橫跨多地，跨部門人工蒐集水電帳單、原物料單據耗費大量時間。</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300 mt-0.5">•</span>
                  <div>
                    <span className="text-slate-800 font-semibold">排放係數比對與管理困難：</span>
                    <span className="text-slate-500 block mt-1">原物料種類繁雜，人工逐一比對排放係數門檻高且極易出錯。</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300 mt-0.5">•</span>
                  <div>
                    <span className="text-slate-800 font-semibold">報告產出與稽核成本極高：</span>
                    <span className="text-slate-500 block mt-1">缺乏清晰的數位數據軌跡，應付第三方機構的溝通與時間成本居高不下。</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div className="bg-white border border-blue-100 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col relative z-20">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-slate-300 z-30">
                <ChevronRight size={28} />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-slate-300 z-30">
                <ChevronRight size={28} />
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-100">
                <Cpu className="text-blue-600 w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">iSunFA AI 解決方案</h3>
              <p className="text-slate-500 text-xs mb-4">一站式智能賦能碳管理平台</p>

              <ul className="space-y-4 text-xs text-slate-600 mt-2 flex-1">
                <li className="flex items-start gap-2">
                  <Receipt className="text-blue-500 w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-blue-900 font-semibold block mb-0.5">單據智能辨識與數據擷取</span>
                    <span className="text-slate-500 block leading-relaxed">透過 AI 自動判讀各類表單數據，非結構化資料轉為結構化數據。</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Database className="text-blue-500 w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-blue-900 font-semibold block mb-0.5">AI 智能匹配排放係數</span>
                    <span className="text-slate-500 block leading-relaxed">內建機器學習演算法，自動從龐大資料庫精準匹配溫室氣體排放係數。</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="text-blue-500 w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-blue-900 font-semibold block mb-0.5">碳管理儀表板與報告生成</span>
                    <span className="text-slate-500 block leading-relaxed">建置動態儀表板，支援一鍵生成符合法規標準的碳盤查報告與清冊。</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Values */}
            <div className="bg-white border border-emerald-100 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col group hover:border-emerald-300 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all z-20">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-100">
                <TrendingUp className="text-emerald-600 w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">實施商業價值</h3>
              <p className="text-slate-500 text-xs mb-4">營運效率與綠色競爭力顯著提升</p>

              <ul className="space-y-3 text-xs text-slate-600 flex-1">
                <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-emerald-50/50 group-hover:border-emerald-100 transition-colors">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                  <div className="flex-1">
                    <span className="text-slate-800 font-semibold block">作業效率大幅躍升</span>
                    <span className="text-slate-500 block text-[10px] mt-0.5">釋放行政人力，作業效率提升 60%+</span>
                  </div>
                </li>
                <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-emerald-50/50 group-hover:border-emerald-100 transition-colors">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                  <div className="flex-1">
                    <span className="text-slate-800 font-semibold block">稽核流程極致簡化</span>
                    <span className="text-slate-500 block text-[10px] mt-0.5">完整數位軌跡，降低 90%+ 查證溝通成本</span>
                  </div>
                </li>
                <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-emerald-50/50 group-hover:border-emerald-100 transition-colors">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                  <div className="flex-1">
                    <span className="text-slate-800 font-semibold block">開創綠色新商機</span>
                    <span className="text-slate-500 block text-[10px] mt-0.5">Urban Mining 策略發掘 20%+ 潛在獲利</span>
                  </div>
                </li>
                <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-emerald-50/50 group-hover:border-emerald-100 transition-colors">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                  <div className="flex-1">
                    <span className="text-slate-800 font-semibold block">落實 ESG 永續承諾</span>
                    <span className="text-slate-500 block text-[10px] mt-0.5">科學化數據與即時掌控碳排目標達成率</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
