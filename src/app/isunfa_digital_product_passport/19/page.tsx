'use client';

export default function DPPSlide19() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        {/* Info: (20260508 - Luphia) Subtle Background Glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-12">
            <span className="text-emerald-400 font-bold tracking-[0.2em] text-sm uppercase">iSunFA Framework</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide leading-tight">密碼學防護：零知識證明 (ZKP) 守護機密</h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 p-10 rounded-2xl shadow-xl max-w-5xl">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">結合區塊鏈與同態加密技術，引入「零知識證明 (Zero-Knowledge Proofs)」。讓企業能在「絕對不揭露獨家配方與供應商真實身分」的前提下，以數學模型向歐盟海關完美證明其碳排總量是正確且合規的。</p>\n
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#19</span>
          </div>
        </div>
      </div>
    </div>
  );
}
