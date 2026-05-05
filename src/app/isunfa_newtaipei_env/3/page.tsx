'use client';

import { ShieldCheck, Cpu } from 'lucide-react';

export default function iSunFASlide3() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Info: (20260212 - Luphia) 背景光暈優化：更深邃的極光綠 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] bg-orange-900/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-amber-900/10 blur-[100px] rounded-full" />
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-16 justify-center items-center text-center">

          {/* Info: (20260212 - Luphia) 標題區 */}
          <div className="mb-12 space-y-4">
            <h2 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-500">
              陽光智能會計的強大核心
            </h2>
            <div className="h-1 w-32 bg-orange-500 rounded-full mx-auto" />
            <p className="text-neutral-300 text-3xl mt-8 font-light leading-relaxed">
              透過<span className="text-orange-400 font-bold mx-2">「臺灣杉二號」超級電腦</span>訓練的<br />
              <span className="text-5xl font-bold text-white mt-4 inline-block drop-shadow-[0_0_20px_rgba(251,146,60,0.5)]">主權 AI</span>
            </p>
          </div>

          <div className="flex gap-12 mt-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30 mb-4 shadow-[0_0_30px_rgba(251,146,60,0.15)]">
                <Cpu className="text-orange-400 w-10 h-10" />
              </div>
              <p className="text-white font-medium text-lg">頂尖算力支持</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30 mb-4 shadow-[0_0_30px_rgba(251,146,60,0.15)]">
                <ShieldCheck className="text-orange-400 w-10 h-10" />
              </div>
              <p className="text-white font-medium text-lg">數據主權安全</p>
            </div>
          </div>
        </div>

        {/* Info: (20260212 - Luphia) Footer */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-500 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>領航淨零，智算未來</div>
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
            2026 CAFECA Fintech
          </div>
        </div>

      </div>
    </div>
  );
}
