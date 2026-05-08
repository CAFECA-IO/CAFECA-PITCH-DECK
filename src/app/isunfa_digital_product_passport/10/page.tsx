'use client';

export default function DPPSlide10() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-12">
            <span className="text-cyan-400 font-bold tracking-[0.2em] text-sm uppercase">Scientific Calculation</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide">環境工程視角：碳排放的科學核算底層邏輯</h2>
          </div>
          
          <div className="flex-1 flex items-center justify-center gap-12">
            <div className="w-1/2 space-y-6">
              <p className="text-2xl text-gray-300 leading-relaxed font-light bg-neutral-800/40 p-6 rounded-xl border border-neutral-700">
                碳盤查的核心在於將企業活動轉化為當量。計算公式為：
              </p>
              
              <div className="bg-neutral-950 border border-cyan-900/50 p-8 rounded-2xl shadow-inner shadow-black relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-center font-serif">
                  <span className="text-5xl text-white">E</span>
                  <span className="text-4xl text-gray-400 mx-4">=</span>
                  <span className="text-6xl text-cyan-500 font-light mr-4">Σ</span>
                  <span className="text-4xl text-gray-300">(</span>
                  <span className="text-4xl text-emerald-400">AD<sub className="text-xl">i</sub></span>
                  <span className="text-3xl text-gray-500 mx-3">×</span>
                  <span className="text-4xl text-blue-400">EF<sub className="text-xl">i</sub></span>
                  <span className="text-3xl text-gray-500 mx-3">×</span>
                  <span className="text-4xl text-purple-400">GWP<sub className="text-xl">i</sub></span>
                  <span className="text-4xl text-gray-300">)</span>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 space-y-6">
              <div className="flex items-start gap-4 bg-neutral-800/30 p-6 rounded-xl border border-neutral-800 hover:border-white/10 transition-colors">
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center text-3xl font-serif text-white shrink-0">E</div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-2">總排放量 (Emission)</h4>
                  <p className="text-gray-400 text-lg">最終呈現在護照上的數值。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-neutral-800/30 p-6 rounded-xl border border-neutral-800 hover:border-emerald-500/30 transition-colors">
                <div className="w-16 h-16 rounded-lg bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center text-3xl font-serif text-emerald-400 shrink-0">AD</div>
                <div>
                  <h4 className="text-emerald-400 text-xl font-bold mb-2">活動數據 (Activity Data)</h4>
                  <p className="text-gray-400 text-lg">耗了多少電、用了多少料。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-neutral-800/30 p-6 rounded-xl border border-neutral-800 hover:border-blue-500/30 transition-colors">
                <div className="w-16 h-16 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-3xl font-serif text-blue-400 shrink-0">EF</div>
                <div>
                  <h4 className="text-blue-400 text-xl font-bold mb-2">排放係數 (Emission Factor)</h4>
                  <p className="text-gray-400 text-lg">該物料或能源在國際資料庫中的排碳當量。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
