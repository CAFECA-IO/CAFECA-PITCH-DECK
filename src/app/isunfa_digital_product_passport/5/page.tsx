'use client';

export default function DPPSlide5() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        {/* Info: (20260508 - Luphia) Subtle Background Glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-12">
            <span className="text-blue-400 font-bold tracking-[0.2em] text-sm uppercase">Taiwan&apos;s Advantage</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide leading-tight">臺灣製造業的核心優勢：高韌性與精密代工的隱形冠軍</h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-neutral-800/30 backdrop-blur-md border border-blue-900/50 p-10 rounded-2xl shadow-xl max-w-5xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-2xl text-white font-semibold mb-2">完整的聚落效應</h3>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">臺灣擁有從上游精密零組件到下游組裝的高度垂直整合聚落，反應速度極快。</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-2xl text-white font-semibold mb-2">極致的製程良率</h3>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">多年來為全球一線大廠代工所鍛鍊出的高良率與低能耗製程，本身就具備隱性的<span className="text-emerald-400 font-medium">「低碳基因」</span>。</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-neutral-700/50">
                  <div className="w-12 h-12 rounded-lg bg-red-900/40 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-1">!</div>
                  <div>
                    <h3 className="text-2xl text-red-300 font-semibold mb-2">面臨挑戰</h3>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">這些優勢長期隱藏於機台與廠房中，缺乏數據化與透明化的工具向國際買主證明。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#05</span>
          </div>
        </div>
      </div>
    </div>
  );
}
