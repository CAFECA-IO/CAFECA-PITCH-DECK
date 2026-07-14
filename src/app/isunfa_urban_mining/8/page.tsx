'use client';

export default function UrbanMiningSlide8() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260508 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 py-8 z-10 ">

          <div className="mb-6">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Urban Mining</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-950 mt-5 tracking-wide leading-tight">公私協力 (PPP) —— 國家級主權雲端與 AI 智庫雙引擎</h2>

          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
              <h4 className="text-xl font-bold text-sky-950 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                雙引擎優勢：
              </h4>
              <p className="text-slate-700 leading-relaxed text-lg">引入民間最前沿的國家級人工智慧技術，提供高效、多面向的數據治理。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-sky-800 relative">
                <h4 className="text-2xl font-bold text-sky-950 mb-4 mt-2">台灣智慧雲端 (TWSC)</h4>
                <h5 className="text-lg font-bold text-sky-700 mb-4 pb-4 border-b border-slate-100">數據主權保障</h5>
                <p className="text-slate-600 leading-relaxed text-lg">
                  提供國家級算力平台，確保新北 1.9 萬家工廠的機密數據 <strong className="text-sky-900">100% 落地臺灣</strong>，不外流至境外伺服器，守護國土數據安全。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-emerald-500 relative">
                <h4 className="text-2xl font-bold text-sky-950 mb-4 mt-2">卡菲卡金融科技</h4>
                <h5 className="text-lg font-bold text-emerald-700 mb-4 pb-4 border-b border-slate-100">高效率 AI 分析</h5>
                <p className="text-slate-600 leading-relaxed text-lg">
                  提供金融級 <strong className="text-emerald-700">人工智能暨與零知識證明存證技術</strong>。在絕對不洩露企業商業機密的前提下，高效執行龐大數據的普查與驗證，為市府提供跳脫傳統框架的多維度戰略觀點。
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Urban Mining</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#08</span>
          </div>
        </div>
      </div>
    </div>
  );
}
