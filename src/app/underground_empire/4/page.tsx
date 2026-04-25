'use client';

import { CircleDollarSign, Unlink, Activity } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col">
        
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-indigo-950/30 to-transparent pointer-events-none rounded-tl-full"></div>

        <div className="z-10 flex flex-col h-full">
          <div className="mb-12">
            <span className="text-indigo-400 font-mono text-sm tracking-widest mb-2 block">CURRENT EVENTS 2026</span>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-4">
              2026: 數位貨幣與金融脫鉤
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-600 to-transparent"></div>
          </div>

          <div className="flex-1 flex gap-16 mt-4">
            <div className="w-1/2 space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                美元的霸權不僅建立在經濟實力上，更建立在對 SWIFT 與全球結算網路 (CHIPS) 的絕對控制。美國將美元網路武器化（如凍結俄羅斯央行資產），促使對手加速尋求替代方案。
              </p>
              
              <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
                <h4 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <Activity className="text-indigo-400" /> 2026 年的金融板塊分裂
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Unlink className="text-red-400 shrink-0 mt-1" size={18} />
                    <p className="text-slate-300">
                      <strong className="text-indigo-300">mBridge (多邊央行數位貨幣橋) 擴容：</strong> 由中國牽頭，結合中東產油國與金磚國家，在 2026 年實現了兆級美元規模的去中心化即時跨境結算，完全繞過美國的金融監控網路。
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleDollarSign className="text-green-400 shrink-0 mt-1" size={18} />
                    <p className="text-slate-300">
                      <strong className="text-indigo-300">防禦性制裁：</strong> 面對去美元化挑戰，美國財政部利用 AI 大數據，實現對次級制裁 (Secondary Sanctions) 的自動化精準打擊，任何接觸受制裁實體的加密錢包或帳戶都將被瞬間凍結。
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-1/2 relative flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-900/30 rounded-full border-2 border-blue-500 flex items-center justify-center mb-2 mx-auto">
                      <span className="text-2xl font-bold text-blue-400">$</span>
                    </div>
                    <span className="text-slate-400 font-mono text-sm">SWIFT / CHIPS</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="h-0.5 w-full bg-slate-700 absolute"></div>
                    <Unlink className="text-red-500 relative z-10 bg-slate-900 px-2" size={32} />
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-indigo-900/30 rounded-full border-2 border-indigo-500 flex items-center justify-center mb-2 mx-auto">
                      <span className="text-2xl font-bold text-indigo-400">CBDC</span>
                    </div>
                    <span className="text-slate-400 font-mono text-sm">mBridge / BRICS Pay</span>
                  </div>
                </div>

                <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-sm font-mono">
                  <div className="flex justify-between text-slate-500 mb-2">
                    <span>Transaction</span>
                    <span>Status</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-red-400">
                      <span>USD 1.5B (SWIFT)</span>
                      <span>[ BLOCKED - OFAC ]</span>
                    </div>
                    <div className="flex justify-between text-green-400">
                      <span>e-CNY 10B (mBridge)</span>
                      <span>[ SETTLED - PEER ]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          04 // DIGITAL CURRENCY
        </div>
      </div>
    </div>
  );
}
