'use client';

import { Rocket, Target, Zap } from 'lucide-react';

export default function TaitraSlide30() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-100 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-100 to-transparent rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />

        <div className="px-16 pt-16 z-10 text-center">
          <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100 shadow-sm">Vision & Conclusion</span>
          <h2 className="text-5xl font-extrabold text-slate-900 mt-8">
            願景與結語：AI 賦能，化碳焦慮為綠色競爭力
          </h2>
        </div>

        <div className="flex-1 px-16 z-10 flex flex-col justify-center items-center mt-12 pb-12">

          <div className="grid grid-cols-3 gap-8 w-full max-w-5xl mb-12">
            <div className="bg-white/80 backdrop-blur border border-slate-200 p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">大幅降本增效</h3>
              <p className="text-slate-500 text-sm">
                減少 80% 碳盤查與記帳的人工比對時間，將企業資源重新聚焦於減碳與核心業務發展。
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur border border-slate-200 p-8 rounded-2xl shadow-sm text-center transform -translate-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">精準合規抗險</h3>
              <p className="text-slate-500 text-sm">
                以區塊鏈與 RAG 技術徹底消滅 AI 幻覺，確保所有碳足跡與財務數據禁得起第三方嚴格檢驗。
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur border border-slate-200 p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">直通國際市場</h3>
              <p className="text-slate-500 text-sm">
                一鍵產出 DPP 與碳報告，將法規阻力化為助力，在綠色供應鏈中搶佔不可取代的戰略地位。
              </p>
            </div>
          </div>

          <div className="w-full max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-sky-900 mb-4">「記帳即記碳」不再是口號，而是現在進行式。</h3>
            <p className="text-slate-600">
              透過 CFV AI AGENT 操作技巧，讓台灣企業以最輕盈的姿態，躍上國際永續的巔峰舞台。
            </p>
          </div>

        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#30</div>
        </div>
      </div>
    </div>
  );
}
