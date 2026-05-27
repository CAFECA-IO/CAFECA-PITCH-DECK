'use client';

import { BrainCircuit, SplitSquareHorizontal, Database, Braces, AlertTriangle } from 'lucide-react';

export default function TaitraSlide14() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col border border-slate-800 rounded-xl">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="px-16 pt-16 z-10 text-center">
          <span className="text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase">Harness Engineering</span>
          <h2 className="text-4xl font-extrabold text-white mt-2 mb-4">
            克服幻覺：導入駕馭工程 (Harness Engineering)
          </h2>
          <p className="text-slate-400 text-lg max-w-4xl mx-auto">
            為何 AI 面對會計與碳盤查時常會「一本正經地胡說八道」？我們如何從工程架構層面根除這個致命傷。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 flex gap-12 mt-12 items-stretch pb-16">
          
          {/* Left: The Problem */}
          <div className="w-1/3 flex flex-col gap-6">
            <div className="bg-rose-950/20 border border-rose-900/50 p-6 rounded-2xl h-full relative">
              <div className="absolute -top-5 left-6 bg-rose-500/20 p-2 rounded-xl border border-rose-500/30">
                <AlertTriangle className="text-rose-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mt-4 mb-6 text-rose-300">幻覺的兩大元兇</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="text-rose-400">1.</span> 專業知識嚴重不足
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    通用型 AI 缺乏深度的財務法規與 ISO 14064-1 盤查準則。面對模糊字眼時，往往憑藉機率進行不合規的猜測。
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="text-rose-400">2.</span> 資料量撐爆 Token 上限
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    若將所有會計科目表、數萬筆碳排係數庫一次性丟給 AI，不僅會超越上下文 (Token) 限制，更會造成「注意力渙散 (Lost in the middle)」，導致配對錯亂。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Solution */}
          <div className="w-2/3 bg-slate-800/80 border border-slate-700 p-8 rounded-2xl relative">
            <div className="absolute -top-5 left-8 bg-indigo-500 p-2 rounded-xl shadow-lg">
              <BrainCircuit className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mt-2 mb-6 text-indigo-300">
              解法：駕馭工程 (Harness Engineering)
            </h3>
            <p className="text-slate-300 mb-8 text-sm">
              不再期待單一 Prompt 解決所有問題。我們將複雜的「碳會計盤查任務」，拆解為多個相互獨立、邏輯嚴密的小型微型任務 (Micro-tasks)，並為每個任務配備專屬的知識外掛。
            </p>

            <div className="flex gap-4 items-center">
              
              <div className="flex-1 bg-slate-900 border border-slate-600 p-5 rounded-xl text-center">
                <SplitSquareHorizontal className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                <h4 className="font-bold text-white text-sm mb-2">任務精細切割</h4>
                <p className="text-xs text-slate-400">將大任務拆為：<br/>A. 憑證數據清理<br/>B. 會計科目映射<br/>C. 碳係數配對</p>
              </div>

              <div className="text-slate-500 font-bold text-xl">+</div>

              <div className="flex-1 bg-slate-900 border border-slate-600 p-5 rounded-xl text-center">
                <Database className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-bold text-white text-sm mb-2">動態注入專屬資料庫</h4>
                <p className="text-xs text-slate-400">執行任務 B 時，只給「會計準則」；執行任務 C 時，只給「精確縮小範圍後的碳係數庫」。</p>
              </div>

              <div className="text-slate-500 font-bold text-xl">=</div>

              <div className="flex-1 bg-slate-900 border border-indigo-500/50 p-5 rounded-xl text-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <Braces className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <h4 className="font-bold text-white text-sm mb-2">100% 專業且受控的產出</h4>
                <p className="text-xs text-slate-400">避開 Token 上限，AI 在小範圍內專注處理，確保輸出的每一筆數據都具備稽核等級的精準度。</p>
              </div>

            </div>
          </div>

        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#14</div>
        </div>
      </div>
    </div>
  );
}
