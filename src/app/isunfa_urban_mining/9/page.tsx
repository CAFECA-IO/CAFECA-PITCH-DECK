'use client';

export default function UrbanMiningSlide9() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260508 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 z-10 justify-center">

          <div className="mt-16 text-center z-10 relative">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100 shadow-sm">iSunFA Urban Mining</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-sky-950 leading-[1.2] mt-8">
              領航臺灣數位產品護照的標準
            </h1>

          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="bg-sky-950 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden mt-8 max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <p className="text-sky-100 leading-relaxed text-xl font-light mb-8 pb-8 border-b border-sky-800/50">
                  我們準備好最強的技術，期盼成為新北市環保局推動綠色轉型最堅實的後盾。
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-800/50 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-emerald-400 font-bold">1</span>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      透過這套結合了實務數據、金融級 AI 科技與國家主權雲端的 DPP 平台，我們將全力助攻新北市環保局，從「末端廢棄物處理機關」成功轉型為<strong className="text-emerald-400 mx-2 text-xl">「前端戰略資源的領航者」</strong>。
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-emerald-400 font-bold">2</span>
                    </div>
                    <p className="text-white text-xl leading-relaxed font-medium">
                      讓<strong className="text-emerald-400">新北標準</strong>成為<strong className="text-sky-300">臺灣標準</strong>，帶領在地產業跨越綠色貿易壁壘，在全球市場中搶下最具價值的綠色訂單！
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Urban Mining</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#09</span>
          </div>
        </div>
      </div>
    </div>
  );
}
