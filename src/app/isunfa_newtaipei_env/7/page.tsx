'use client';

// Info: (20260505 - Luphia) No lucide-react imports needed

export default function iSunFASlide7() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Info: (20260212 - Luphia) 背景光暈：回歸生機與科技感的綠色 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[5%] w-[60%] h-[70%] bg-orange-950/20 blur-[130px] rounded-full opacity-60" />
          <div className="absolute -bottom-[15%] -right-[10%] w-[50%] h-[60%] bg-amber-950/10 blur-[110px] rounded-full opacity-40" />
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-16 justify-center">

          {/* Info: (20260212 - Luphia) 標題區 */}
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400">
              AI 碳治理的革命性成效
            </h2>
            <div className="h-1 w-32 bg-orange-600 rounded-full mx-auto mt-6" />
          </div>

          {/* Info: (20260505 - Luphia) 3 Columns for Results */}
          <div className="grid grid-cols-3 gap-10 flex-1 w-full max-w-5xl mx-auto items-center">
            
            {/* Info: (20260505 - Luphia) Metric 1 */}
            <div className="flex flex-col items-center bg-neutral-900/60 border border-orange-500/30 p-10 rounded-3xl backdrop-blur-xl shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:scale-105 transition-transform duration-300">
              <span className="text-7xl font-black text-orange-400 drop-shadow-[0_0_20px_rgba(249,115,22,0.5)] mb-4">95%</span>
              <h3 className="text-2xl font-bold text-white mb-2">成本降幅</h3>
              <p className="text-neutral-400 text-center">大幅削減盤查顧問費與人力開銷</p>
            </div>

            {/* Info: (20260505 - Luphia) Metric 2 */}
            <div className="flex flex-col items-center bg-neutral-900/60 border border-orange-500/30 p-10 rounded-3xl backdrop-blur-xl shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:scale-105 transition-transform duration-300">
              <span className="text-7xl font-black text-orange-400 drop-shadow-[0_0_20px_rgba(249,115,22,0.5)] mb-4">100x</span>
              <h3 className="text-2xl font-bold text-white mb-2">查核速度提升</h3>
              <p className="text-neutral-400 text-center">從數月縮短至數小時產出報告</p>
            </div>

            {/* Info: (20260505 - Luphia) Metric 3 */}
            <div className="flex flex-col items-center bg-neutral-900/60 border border-orange-500/30 p-10 rounded-3xl backdrop-blur-xl shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:scale-105 transition-transform duration-300">
              <span className="text-7xl font-black text-orange-400 drop-shadow-[0_0_20px_rgba(249,115,22,0.5)] mb-4">0</span>
              <h3 className="text-2xl font-bold text-white mb-2">人工計算誤差</h3>
              <p className="text-neutral-400 text-center">AI 辨識及對接係數，確保精準度</p>
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
