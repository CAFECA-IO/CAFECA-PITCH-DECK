'use client';

import { AlertTriangle, Globe2, DatabaseZap, HeartHandshake, TrendingDown } from 'lucide-react';

export default function IsunfaPwpSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-red-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        <span className="text-xs font-mono text-red-500 uppercase tracking-widest">Problem Definition</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-4">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span className="text-sm font-semibold text-red-600">產業痛點與問題定義</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight text-slate-800">
          台灣 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">逾萬家</span> 金屬加工中小廠，
          正同時被三道牆夾擊
        </h2>
      </div>

      {/* Info: (20260819 - Luphia) 3 Pain Points */}
      <div className="z-10 px-16 grid grid-cols-3 gap-6 flex-1">

        {/* Info: (20260819 - Luphia) Pain 1 */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-7 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-red-400"></div>
          <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
            <Globe2 className="w-6 h-6 text-red-500" />
          </div>
          <span className="text-[10px] font-black text-red-500 tracking-widest uppercase mb-2">Pain 01 · 法遵之牆</span>
          <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">CBAM 與歐盟 DPP<br />壓境，買方直接斷單</h3>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            歐盟 CBAM 自 2026 年正式收費，ESPR 亦要求鋼鋁製品逐步導入數位產品護照。國際買方要求中小供應商即時提供
            <span className="font-bold text-slate-700">再生料比例、碳足跡與可追溯履歷</span>，未能提供者直接自供應鏈名單移除。
          </p>
          <div className="mt-auto pt-5">
            <div className="bg-red-50 rounded-xl px-4 py-3 border border-red-100">
              <div className="text-[11px] text-red-600 font-bold">現況：逾 8 成中小廠無任何 DPP 產出能力</div>
            </div>
          </div>
        </div>

        {/* Info: (20260819 - Luphia) Pain 2 */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-7 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-orange-400"></div>
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
            <DatabaseZap className="w-6 h-6 text-orange-500" />
          </div>
          <span className="text-[10px] font-black text-orange-500 tracking-widest uppercase mb-2">Pain 02 · 數據之牆</span>
          <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">數據孤島與碳盤查<br />門檻高，人工做不完</h3>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            材質單、BOM 表、能源單據、XRF 檢測報告散落於紙本與 Excel。委外顧問一次盤查
            <span className="font-bold text-slate-700">動輒 30～80 萬元、耗時 6 個月</span>，且無法逐批次更新，中小廠根本無力負擔常態化維運。
          </p>
          <div className="mt-auto pt-5">
            <div className="bg-orange-50 rounded-xl px-4 py-3 border border-orange-100">
              <div className="text-[11px] text-orange-600 font-bold">現況：一批次履歷平均需 14 人日人工彙整</div>
            </div>
          </div>
        </div>

        {/* Info: (20260819 - Luphia) Pain 3 */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-7 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-slate-400"></div>
          <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
            <HeartHandshake className="w-6 h-6 text-slate-500" />
          </div>
          <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-2">Pain 03 · 生態系之牆</span>
          <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">單廠無法零廢，<br />缺乏公益型媒合機制</h3>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            切削屑、廢鑄砂、電鍍污泥、廢切削油具高再生價值，但因
            <span className="font-bold text-slate-700">缺乏跨廠品質分級與媒合平台</span>，多以低價清運處理。資源弱勢的在地小廠更無議價與轉型能力，形成公益缺口。
          </p>
          <div className="mt-auto pt-5">
            <div className="bg-slate-100 rounded-xl px-4 py-3 border border-slate-200">
              <div className="text-[11px] text-slate-600 font-bold">現況：高值副產物多以廢棄物價格外運</div>
            </div>
          </div>
        </div>

      </div>

      {/* Info: (20260819 - Luphia) Bottom Insight */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl px-8 py-4 shadow-lg">
          <TrendingDown className="w-5 h-5 text-orange-400 flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            三道牆的共同解方不是「再買一套系統」，而是一個 <span className="font-black text-orange-400">公益型、低門檻、可跨廠互通的 AI 中介平台</span>
            —— 讓履歷自動生成、讓廢料自動找到買方。
          </p>
        </div>
      </div>

    </div>
  );
}
