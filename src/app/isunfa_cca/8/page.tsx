'use client';

import { Network, GitBranchPlus, Lightbulb } from 'lucide-react';

export default function CCASlide8() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="px-16 pt-16 z-10">
          <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase">Step 2: Carbon Footprint Mapping</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            步驟二：碳排係數 (Emission Factor) 精準配對與國家庫接軌 (資料治理與容錯)
          </h2>
          <p className="text-slate-500 text-lg">將會計科目與商品明細，映射至國家或國際標準碳係數資料庫。</p>
        </div>

        <div className="flex-1 px-16 z-10 flex items-center gap-10 mt-4 pb-12">
          
          <div className="w-5/12 bg-slate-800 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <Network className="text-emerald-400" /> 碳配對核心實作
            </h3>
            <ul className="space-y-6">
              <li>
                <div className="text-emerald-400 font-bold mb-1">語義解析與同義詞對應</div>
                <p className="text-slate-300 text-sm">將企業俗稱的「牛皮紙箱」精準對應至資料庫中的「瓦楞紙板」。透過領域知識庫克服語言差異。</p>
              </li>
              <li>
                <div className="text-emerald-400 font-bold mb-1">動態載入最新版資料庫</div>
                <p className="text-slate-300 text-sm">系統自動同步各國與環境部的最新碳係數，確保每次配對皆使用合規的當期數據，避免版本落後。</p>
              </li>
            </ul>
          </div>

          <div className="w-7/12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Lightbulb className="text-amber-500" /> iSunFA 的解決方案
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg h-fit">
                  <Network size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">專屬 RAG 碳係數檢索庫</h4>
                  <p className="text-slate-600 mt-1">我們不依賴 LLM 的內建記憶。而是建立包含環保署、Ecoinvent 等權威資料的向量資料庫 (Vector DB)，強制 AI 僅能從檢索到的合法列表中挑選係數。</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg h-fit">
                  <GitBranchPlus size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">模糊匹配與信心分數機制</h4>
                  <p className="text-slate-600 mt-1">當系統信心分數低於 85% 時，自動暫停寫入，將資料標記為「待確認」，並提供前三名最可能係數，交由「Human-in-the-loop (專家介入)」決策。</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA 氣候變遷署</div>
          <div className="font-mono">#08</div>
        </div>
      </div>
    </div>
  );
}
