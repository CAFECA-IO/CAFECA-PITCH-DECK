'use client';

import { Users, Database, Coins } from 'lucide-react';

export default function iSunFASlide4() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Info: (20260212 - Luphia) Background Gloomier for Problem Statement */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-red-900/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-900/10 blur-[100px] rounded-full" />
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-16">

          {/* Info: (20260212 - Luphia) Title Section */}
          <div className="mb-16 space-y-2 text-center">
            <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-amber-200">
              iSunFA 的三大淨零管理特色
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full mx-auto" />
          </div>

          {/* Info: (20260212 - Luphia) 3 Columns Grid */}
          <div className="grid grid-cols-3 gap-8 flex-1">

            {/* Feature 1 */}
            <div className="group relative bg-neutral-900/40 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:border-orange-500/50 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                <Database className="text-orange-400 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">全憑證掃描</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">
                自動化辨識所有單據、發票，精準擷取碳排數據，免除繁瑣的人工輸入與核對。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-neutral-900/40 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:border-orange-500/50 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                <Users className="text-orange-400 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">24H 即時服務</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">
                全天候待命的 AI 碳會計師，隨時隨地提供碳盤查諮詢與即時數據分析。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-neutral-900/40 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:border-orange-500/50 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                <Coins className="text-orange-400 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">超低盤查費用</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">
                顛覆傳統高昂顧問費，碳盤查費用最低只要
              </p>
              <div className="mt-4 bg-orange-500/20 border border-orange-500/30 px-6 py-2 rounded-full">
                <span className="text-orange-400 font-bold text-2xl">NT$ 2,399</span>
              </div>
            </div>

          </div>
        </div>

        {/* Info: (20260212 - Luphia) Footer */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-500 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>領航淨零，智算未來</div>
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
            2026 CAFECA Fintech
          </div>
        </div>

      </div>
    </div>
  );
}
