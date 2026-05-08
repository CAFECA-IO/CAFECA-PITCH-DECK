'use client';

export default function DPPSlide14() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-16">
            <span className="text-red-400 font-bold tracking-[0.2em] text-sm uppercase">Traditional Challenge</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide">傳統痛點四：回收方法 (End-of-Life) 撰寫的專業壁壘</h2>
          </div>
          
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-4xl bg-neutral-800/40 border border-red-900/30 p-12 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-orange-500" />
              
              <div className="space-y-8 pl-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 shrink-0 mt-1 border border-red-500/30">!</div>
                  <div>
                    <h3 className="text-2xl text-white font-semibold mb-2">跨領域知識斷層</h3>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">企業通常只熟悉「如何製造」，對「如何合規報廢」毫無概念。</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 shrink-0 mt-1 border border-red-500/30">!</div>
                  <div>
                    <h3 className="text-2xl text-white font-semibold mb-2">WEEE 指令嚴苛要求</h3>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">歐盟要求詳細標示產品各部件的物理/化學特性、拆解步驟及可回收比例，這需要高度專業的環境工程與材料科學知識。</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 shrink-0 mt-1 border border-red-500/30">!</div>
                  <div>
                    <h3 className="text-2xl text-white font-semibold mb-2">缺乏精煉網絡</h3>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">大多數製造商缺乏下游回收商的對接資訊，難以提出具備可行性的循環經濟路徑。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#14</span>
          </div>
        </div>
      </div>
    </div>
  );
}
