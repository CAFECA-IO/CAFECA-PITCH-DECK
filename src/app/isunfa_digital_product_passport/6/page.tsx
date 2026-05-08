'use client';

export default function DPPSlide6() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-12">
            <span className="text-emerald-400 font-bold tracking-[0.2em] text-sm uppercase">AI Empowerment</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide leading-tight">AI 賦能：讓「隱性製程優勢」轉化為「顯性綠色溢價」</h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-neutral-800/40 border border-neutral-700 p-10 rounded-2xl shadow-xl hover:border-emerald-500/50 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-500" />
                <h3 className="text-3xl text-emerald-400 font-bold mb-6">精準揭露低碳價值</h3>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                  透過 AI 自動解析產線數據，臺灣製造業能精準量化其製程中的能源效率，證明產品碳足跡遠低於國際預設值。
                </p>
                <div className="mt-8 pt-6 border-t border-neutral-700/50">
                  <span className="inline-block bg-emerald-900/40 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wider border border-emerald-500/30">
                    AI 量化分析
                  </span>
                </div>
              </div>

              <div className="bg-neutral-800/40 border border-neutral-700 p-10 rounded-2xl shadow-xl hover:border-amber-500/50 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
                <h3 className="text-3xl text-amber-400 font-bold mb-6">數據驅動的議價權</h3>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                  將高良率與低耗能的優勢化為數位產品護照 (DPP) 上的鐵證，讓臺灣企業在面對國際買主時，從「被動接受砍價」轉為「主動爭取綠色溢價 (Green Premium)」。
                </p>
                <div className="mt-8 pt-6 border-t border-neutral-700/50">
                  <span className="inline-block bg-amber-900/40 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wider border border-amber-500/30">
                    爭取 Green Premium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#06</span>
          </div>
        </div>
      </div>
    </div>
  );
}
