'use client';

export default function DPPSlide23() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        {/* Subtle Background Glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-12">
            <span className="text-emerald-400 font-bold tracking-[0.2em] text-sm uppercase">iSunFA Framework</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide leading-tight">iSunFA 實戰 Step 4：不可竄改的數位憑證與確信</h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 p-10 rounded-2xl shadow-xl max-w-5xl">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">最終資料打包成符合歐盟標準的 API 或 QR Code 格式。所有歷程數據上鏈，具備完整的稽核軌跡 (Audit Trail)，讓 SGS、BSI 等第三方確信機構能快速驗證，大幅降低顧問與查驗成本。</p>\n
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#23</span>
          </div>
        </div>
      </div>
    </div>
  );
}
