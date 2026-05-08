'use client';

export default function DPPSlide9() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        {/* Subtle Background Glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-12">
            <span className="text-emerald-400 font-bold tracking-[0.2em] text-sm uppercase">iSunFA Framework</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide leading-tight">深究「回收方法」 (End-of-Life)</h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 p-10 rounded-2xl shadow-xl max-w-5xl">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">• 契合歐盟循環經濟與 WEEE 指令。涵蓋：產品材質的物理/化學特性、有害物質 (RoHS/REACH) 標示、可回收比例。
• 核心指導：報廢後的安全拆解程序與循環利用路徑建議。</p>\n
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#09</span>
          </div>
        </div>
      </div>
    </div>
  );
}
