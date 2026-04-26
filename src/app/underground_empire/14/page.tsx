'use client';

import { ShieldCheck, Eye, Scale } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 flex flex-col items-center justify-center p-16">
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div>
        
        <div className="z-10 text-center w-full max-w-5xl">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-6">
            夾縫中的生存之道
          </h2>
          <p className="text-xl text-slate-400 mb-16 font-light max-w-3xl mx-auto">
            在「地下帝國」時代，全球經濟網絡已成為相互保證毀滅的武器。2026年，企業與國家不再追求「效率最大化」，而是轉向「韌性與安全最大化」。
          </p>

          <div className="grid grid-cols-3 gap-8 text-left">
            <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
              <ShieldCheck className="text-emerald-500 mb-6" size={40} />
              <h3 className="text-xl font-bold text-slate-100 mb-4">地緣政治合規</h3>
              <p className="text-slate-400">
                企業必須建立專屬的地緣政治風險部門。了解自身在供應鏈「咽喉點」的位置，遵守多重司法管轄區（如美國 FDPR、中國反外國制裁法）的衝突法規。
              </p>
            </div>

            <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
              <Eye className="text-amber-500 mb-6" size={40} />
              <h3 className="text-xl font-bold text-slate-100 mb-4">去風險化 (De-risking)</h3>
              <p className="text-slate-400">
                跨國企業實施「中國加一」或「美國加一」策略。在資料儲存、支付網路與晶片採購上，必須建立兩套完全隔離、不互通的備援系統。
              </p>
            </div>

            <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
              <Scale className="text-indigo-500 mb-6" size={40} />
              <h3 className="text-xl font-bold text-slate-100 mb-4">科技中立國的崛起</h3>
              <p className="text-slate-400">
                掌握不可取代技術（如台灣半導體、特定原物料國）的「微型咽喉點」，以此作為談判籌碼，在兩大經濟體系的對抗中尋求動態平衡。
              </p>
            </div>
          </div>
          
          <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 bg-slate-950 rounded-full border border-slate-800 text-slate-300 font-mono text-sm">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            END OF PRESENTATION
          </div>
        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          06 // CONCLUSION
        </div>
      </div>
    </div>
  );
}
