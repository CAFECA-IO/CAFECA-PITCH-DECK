'use client';

import { AlertTriangle, Factory, FileWarning, TrendingDown } from 'lucide-react';

export default function TITASlide2() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="px-16 pt-16 z-10">
          <span className="text-sky-600 font-bold tracking-[0.2em] text-sm uppercase">The Challenge</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-12">
            挑戰與痛點：CBAM 與國內碳費的雙重夾擊
          </h2>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-2 gap-12 pb-12">
          {/* Info: (20260519 - Luphia) Left Column: The Context */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Factory className="text-slate-400" /> 企業面臨的生存危機
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              歐盟碳邊境調整機制 (CBAM) 與台灣碳費徵收正式上路，企業若無法精準交代碳足跡，將面臨高昂的碳關稅，甚至失去國際供應鏈的訂單。
            </p>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-rose-800 flex items-center gap-2 mb-2">
                <AlertTriangle size={20} /> 核心困境
              </h4>
              <p className="text-rose-700">「記帳與記碳分離」，導致財務數據與碳盤查數據脫鉤，無法應對高頻率、高標準的國際稽核要求。</p>
            </div>
          </div>

          {/* Info: (20260519 - Luphia) Right Column: Pain Points */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
                <FileWarning size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">人工處理成本極高</h4>
                <p className="text-slate-600">傳統碳盤查依賴人工蒐集電費單、採購單，耗時且極易出錯，無法做到即時追蹤。</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                <TrendingDown size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">碳係數匹配困難</h4>
                <p className="text-slate-600">數千種原物料與活動數據，缺乏標準化系統對應環保署或國際碳係數庫，導致盤查結果不被認可。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA 國際貿易署</div>
          <div className="font-mono">#02</div>
        </div>
      </div>
    </div>
  );
}
