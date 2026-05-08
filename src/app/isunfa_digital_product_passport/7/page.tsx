'use client';

export default function DPPSlide7() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-16">
            <span className="text-emerald-400 font-bold tracking-[0.2em] text-sm uppercase">Core Architecture</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide">解構產品護照：雙核驅動的本質</h2>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center space-y-16">
            <div className="flex items-center justify-center space-x-8 w-full max-w-5xl">
              <div className="flex-1 bg-neutral-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-10 text-center transform transition-all hover:scale-105 hover:bg-neutral-800/80 shadow-lg shadow-emerald-900/20">
                <div className="text-4xl font-bold text-emerald-400 mb-4">生產履歷</div>
                <div className="text-gray-400 text-lg uppercase tracking-widest">Cradle-to-Gate</div>
              </div>
              
              <div className="text-6xl text-gray-500 font-light">+</div>
              
              <div className="flex-1 bg-neutral-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-10 text-center transform transition-all hover:scale-105 hover:bg-neutral-800/80 shadow-lg shadow-cyan-900/20">
                <div className="text-4xl font-bold text-cyan-400 mb-4">回收方法</div>
                <div className="text-gray-400 text-lg uppercase tracking-widest">End-of-Life</div>
              </div>
              
              <div className="text-6xl text-gray-500 font-light">=</div>
              
              <div className="flex-1 bg-gradient-to-br from-emerald-900/80 to-cyan-900/80 backdrop-blur-md border border-emerald-400/50 rounded-2xl p-10 text-center transform transition-all hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <div className="text-4xl font-bold text-white mb-4">數位產品護照</div>
                <div className="text-emerald-200 text-lg uppercase tracking-widest">DPP</div>
              </div>
            </div>
            
            <p className="text-2xl text-gray-300 font-light tracking-wide mt-12 bg-neutral-800/50 px-8 py-4 rounded-full border border-neutral-700">
              這是結合 <span className="text-emerald-400 font-medium">碳盤查</span> 與 <span className="text-cyan-400 font-medium">環境工程</span> 的兩大支柱。
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#07</span>
          </div>
        </div>
      </div>
    </div>
  );
}
