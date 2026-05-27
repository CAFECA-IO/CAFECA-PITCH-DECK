'use client';

import { CheckSquare, AlertOctagon, GitBranchPlus, Lightbulb } from 'lucide-react';

export default function TaitraSlide23() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="px-16 pt-16 z-10">
          <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase">Step 2 Verification</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-4">
            步驟二檢核：碳係數配對信心度評估與人機協同 (HITL)
          </h2>
          <p className="text-slate-500 text-lg">系統對配對結果給予嚴密自評，低於信心門檻時自動觸發專家介入流程。</p>
        </div>

        <div className="flex-1 px-16 z-10 flex items-center gap-10 mt-4 pb-12">
          
          <div className="w-5/12 bg-slate-800 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div>
              <h3 className="text-xl font-bold flex items-center gap-3 mb-6 text-emerald-400">
                <CheckSquare /> AI 配對自我評估機制
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li>
                  <div className="font-bold text-slate-100 mb-1">材質與規格一致性檢驗</div>
                  <p className="text-xs text-slate-400">核對解析出的活動數據品類材質，是否與碳係數對應的物理形態一致。</p>
                </li>
                <li>
                  <div className="font-bold text-slate-100 mb-1">係數時效與地理位置檢驗</div>
                  <p className="text-xs text-slate-400">審查該係數的發布年份是否適用於當期，且地理來源是否符合出口申報規則。</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-7/12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Lightbulb className="text-amber-500" /> CFV AI AGENT 的人機協同 (HITL) 覆核
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-lg h-fit">
                  <AlertOctagon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">信心分數攔截閾值 (85%)</h4>
                  <p className="text-slate-600 text-sm mt-1">當 AI 評估的配對信心分數低於 85%（例如物料規格極度模糊）時，系統會自動暫停自動化寫入，將該筆物料打上「待確認」標籤。</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg h-fit">
                  <GitBranchPlus size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Expert UI 專家快速審查</h4>
                  <p className="text-slate-600 text-sm mt-1">系統將低信心項目呈現在「專家審核儀表板」中，列出推薦的前三名高關聯碳係數，供碳盤查專家一鍵三選一快速點擊覆核，兼顧效率與 100% 精準度。</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#23</div>
        </div>
      </div>
    </div>
  );
}
