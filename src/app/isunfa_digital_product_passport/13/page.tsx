'use client';

export default function DPPSlide13() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-16">
            <span className="text-red-400 font-bold tracking-[0.2em] text-sm uppercase">Traditional Challenge</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide">傳統痛點三：商業機密的裸奔風險</h2>
          </div>
          
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-4xl bg-neutral-800/40 border border-red-900/30 p-12 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-orange-500" />
              
              <div className="space-y-8 pl-8">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">歐盟要求高度透明的供應鏈追溯，這意味著企業必須交出最核心的 BOM 表與供應商名單。傳統申報方式讓企業陷入「不申報被退關，申報了底牌被看光」的兩難。</p>\n
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#13</span>
          </div>
        </div>
      </div>
    </div>
  );
}
