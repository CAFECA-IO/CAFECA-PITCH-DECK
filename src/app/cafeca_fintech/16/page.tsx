'use client';

export default function CafecaFintechSlide16() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-900 text-white relative flex items-center justify-center overflow-hidden">

      {/* Info: (20260123 - Luphia) CAFECA Philosophy */}
      <div className="relative w-full h-full py-20 px-16 overflow-hidden bg-gradient-to-br from-[#040d0a] via-[#081510] to-[#020504] border border-emerald-900/30 group flex flex-col justify-center">

        {/* Info: (20260310 - Luphia) 背景：動態流動的積分曲線預覽 (SVG Overlay) */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path d="M0,400 Q250,350 500,200 T1000,50" fill="none" stroke="#10b981" strokeWidth="2" className="animate-[dash_10s_linear_infinite]" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">

          {/* Info: (20260310 - Luphia) 核心標籤 */}
          <div className="flex items-center justify-center w-full gap-4 mb-12">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
            <span className="text-xs font-black tracking-[0.6em] text-emerald-500 uppercase text-center block">
              The Negentropy Law
            </span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
          </div>

          {/* Info: (20260310 - Luphia) 積分公式主體 */}
          <div className="flex items-center justify-center gap-x-8 gap-y-10 font-serif text-white w-full">

            {/* Info: (20260310 - Luphia) 結果變數 */}
            <div className="flex flex-col items-center">
              <span className="text-emerald-400 font-bold drop-shadow-[0_0_25px_rgba(16,185,129,0.4)] text-[80px] leading-none">Ω</span>
              <span className="text-xs font-mono text-slate-500 mt-4 tracking-tighter uppercase font-normal text-center">Total Net-Zero Value</span>
            </div>

            <span className="text-slate-700 not-italic font-light text-6xl">=</span>

            {/* Info: (20260310 - Luphia) 積分符號系統 */}
            <div className="flex items-center shrink-0">
              <div className="relative flex flex-col items-center shrink-0">
                <span className="text-base font-mono text-emerald-600 absolute -top-8 italic">t_future</span>
                <span className="text-[120px] font-light text-emerald-500/80 leading-none">∫</span>
                <span className="text-base font-mono text-emerald-900 absolute -bottom-6 italic">t_0</span>
              </div>

              {/* Info: (20260310 - Luphia) 積分函數內容 */}
              <div className="flex flex-col items-center mx-8 shrink-0">
                <div className="flex items-center gap-4 px-8 pb-4 border-b border-white/10 shrink-0">
                  <span className="text-white text-5xl tracking-wide">Tech(t)</span>
                  <span className="text-emerald-500/50 not-italic text-5xl mx-2">·</span>
                  <span className="text-emerald-400 text-6xl font-italic leading-none">η</span>
                  <span className="text-base text-emerald-700 italic translate-y-3 ml-1">green</span>
                </div>
                <div className="pt-4 text-3xl text-slate-500 font-mono italic shrink-0">
                  <span className="inline">ln( Energy Consumption )</span>
                </div>
              </div>

              <span className="text-emerald-500 font-bold ml-4 text-5xl shrink-0">dt</span>
            </div>
          </div>

          {/* Info: (20260310 - Luphia) 願景宣言 */}
          <div className="mt-20 max-w-3xl text-center px-4 w-full">
            <p className="text-2xl text-slate-300 font-light leading-relaxed">
              「讓科技與環境共同創造
              <span className="inline">
                <span className="text-emerald-400 font-semibold mx-3 italic">秩序的累積</span>
                」
              </span>
            </p>
            <p className="mt-6 text-sm text-slate-500 font-mono tracking-widest uppercase opacity-60 leading-relaxed">
              Reversing climate entropy through time-weighted intelligence.
            </p>
          </div>

          {/* Info: (20260310 - Luphia) 底部數據點 */}
          <div className="mt-16 flex justify-center gap-x-24 border-t border-white/5 pt-10 w-full px-4">
            <div className="text-center group/stat shrink-0">
              <p className="text-emerald-500 font-mono text-sm group-hover:scale-110 transition-transform">dE/dt ↓</p>
              <p className="text-[10px] text-slate-600 uppercase mt-2 font-bold tracking-widest">Entropy Rate</p>
            </div>
            <div className="text-center group/stat shrink-0">
              <p className="text-emerald-500 font-mono text-sm group-hover:scale-110 transition-transform">Σ Intelligence ↑</p>
              <p className="text-[10px] text-slate-600 uppercase mt-2 font-bold tracking-widest">Tech Accumulation</p>
            </div>
            <div className="text-center group/stat shrink-0">
              <p className="text-emerald-500 font-mono text-sm group-hover:scale-110 transition-transform">100% Green</p>
              <p className="text-[10px] text-slate-600 uppercase mt-2 font-bold tracking-widest">Energy Source</p>
            </div>
          </div>

        </div>

        {/* Info: (20260310 - Luphia) 四角裝飾 */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-emerald-500/30"></div>
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-emerald-500/30"></div>
      </div>

    </div>
  );
}
