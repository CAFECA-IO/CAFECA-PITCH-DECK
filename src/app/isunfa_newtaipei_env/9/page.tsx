'use client';

// No lucide-react imports needed

export default function iSunFASlide9() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Info: (20260212 - Luphia) Background: Subtle Tech Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-[20%] w-[60%] h-[60%] bg-orange-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-[20%] w-[50%] h-[50%] bg-amber-900/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-16">

          {/* Info: (20260212 - Luphia) Title Section */}
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
              新北智慧碳治理導入規劃
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mt-6" />
          </div>

          {/* Implementation Phases Grid */}
          <div className="grid grid-cols-4 gap-6 flex-1 items-stretch w-full">
            
            {/* Phase 1 */}
            <div className="group relative bg-neutral-900/60 border border-neutral-700 hover:border-orange-500/50 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-400 font-black text-2xl border border-orange-500/30 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">第一階段：PoC</h3>
              <div className="w-8 h-1 bg-orange-500 rounded-full mb-6" />
              <p className="text-neutral-300 leading-relaxed">
                挑選 10 家示範企業進行 AI 審計驗證
              </p>
            </div>

            {/* Phase 2 */}
            <div className="group relative bg-neutral-900/60 border border-neutral-700 hover:border-orange-500/50 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-400 font-black text-2xl border border-orange-500/30 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">第二階段：整合</h3>
              <div className="w-8 h-1 bg-orange-500 rounded-full mb-6" />
              <p className="text-neutral-300 leading-relaxed">
                納入碳健檢中心數位工具清單
              </p>
            </div>

            {/* Phase 3 */}
            <div className="group relative bg-neutral-900/60 border border-neutral-700 hover:border-orange-500/50 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-400 font-black text-2xl border border-orange-500/30 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">第三階段：擴散</h3>
              <div className="w-8 h-1 bg-orange-500 rounded-full mb-6" />
              <p className="text-neutral-300 leading-relaxed">
                啟動新北全境工業區 AI 輔導專案
              </p>
            </div>

            {/* Phase 4 */}
            <div className="group relative bg-orange-950/30 border border-orange-500/50 p-8 rounded-3xl backdrop-blur-xl shadow-[0_0_20px_rgba(249,115,22,0.15)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-2xl rounded-full" />
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6 text-orange-400 font-black text-2xl border border-orange-500/50 group-hover:scale-110 transition-transform z-10">
                04
              </div>
              <h3 className="text-2xl font-bold text-orange-200 mb-2 z-10">第四階段：治理</h3>
              <div className="w-8 h-1 bg-orange-400 rounded-full mb-6 z-10" />
              <p className="text-orange-100/90 leading-relaxed z-10 font-medium">
                建立新北城市級智慧碳監控儀表板
              </p>
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
