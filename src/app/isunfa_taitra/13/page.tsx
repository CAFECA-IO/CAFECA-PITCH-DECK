'use client';

import { FileText, Award, CheckSquare, Users } from 'lucide-react';

export default function TaitraSlide11() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-sky-600 font-bold tracking-[0.2em] text-sm uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
            ISO 14067 Step 4
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            ISO 14067 步驟 (4/4)：碳足跡報告書撰寫與第三方查證
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            產出合規文件並通過國際查證。撰寫完整產品碳足跡研究報告書，並通過第三方公正機構稽核。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-2 gap-12 mt-4 pb-12 items-center">
          {/* Left Column: Report Structure */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <FileText className="text-sky-500" /> CFP 研究報告書核心結構
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              一份合規的產品碳足跡報告書（CFP Study Report）必須包含清晰且透明的資訊揭露，不得有任何誤導陳述，並嚴格遵循標準生命週期評估框架。
            </p>
            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-xl">
              <h4 className="font-bold text-sky-800 flex items-center gap-2 mb-1.5">
                <CheckSquare size={20} /> CFP 報告書合規必備章節
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                1. <strong>PCR 選用聲明</strong>與功能單位、系統邊界流程圖<br />
                2. <strong>數據品質評估 (DQR) 矩陣分值</strong>與活動數據清單<br />
                3. <strong>Fossil, Biogenic, LUC 碳足跡</strong>分開單獨揭露列表<br />
                4. <strong>國際運輸碳排放</strong>單獨列計，且聲明<strong>不包含外部碳抵消</strong>
              </p>
            </div>
          </div>

          {/* Right Column: Verification Flow */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg h-fit">
                <Users size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">第三方查證機構現場稽核</h4>
                <p className="text-sm text-slate-600 leading-relaxed">查證機構（如 SGS, BSI, TÜV 等）指派主導查證官，依據 ISO 14064-3 標準，對企業報告書中的原始數據流進行嚴密的反向追溯與審計。</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg h-fit">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">正式核發 ISO 14067 查證聲明書</h4>
                <p className="text-sm text-slate-600 leading-relaxed">當實質性偏差（數據誤差總和）小於 5% 且無不合規項後，查證機構簽發具備國際公信力的查證聲明書（Opinion），成為國際採購的綠色門票。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#11</div>
        </div>
      </div>
    </div>
  );
}
