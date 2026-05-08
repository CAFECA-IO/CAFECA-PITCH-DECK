'use client';

export default function UrbanMiningSlide7() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 py-4 z-10 ">

          <div className="mb-4">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Urban Mining</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-950 mt-5 tracking-wide leading-tight">建立規則 —— 新北市 DPP 100 點驗證規範</h2>

          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="bg-slate-50 p-4 rounded-2xl shadow-sm border border-slate-100 mb-3">
              <h4 className="text-xl font-bold text-sky-950 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                以城市採礦為基礎，建立客觀產業評鑒制度：
              </h4>
              <p className="text-slate-700 leading-relaxed text-lg">為市府提供一套防堵「漂綠（Greenwashing）」的嚴格標準工具。</p>
            </div>

            <h4 className="text-xl font-bold text-emerald-700 mb-3 flex items-center gap-3">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">📋</span>
              重點內容（單據驅動評分）：
            </h4>

            <div className="space-y-3 mb-3">
              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-5 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-600"></div>
                <div className="w-20 text-center shrink-0">
                  <div className="text-3xl font-black text-amber-600">60</div>
                  <div className="text-xs font-bold text-slate-500 mt-1">分</div>
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-sky-950 mb-1 flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-800 px-3 py-0.5 rounded-full text-xs">銅級</span>
                    基礎合規
                  </h5>
                  <p className="text-slate-600 text-base">完成數位 BOM 表、ISO 14067 確信。達成基本合規門檻，確保海關放行。</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-5 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-slate-400"></div>
                <div className="w-20 text-center shrink-0">
                  <div className="text-3xl font-black text-slate-500">20</div>
                  <div className="text-xs font-bold text-slate-500 mt-1">分</div>
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-sky-950 mb-1 flex items-center gap-2">
                    <span className="bg-slate-100 text-slate-600 px-3 py-0.5 rounded-full text-xs">銀/金級</span>
                    實質減碳
                  </h5>
                  <p className="text-slate-600 text-base">實質導入再生原料（如咖啡紗）、綠電憑證註銷。</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-5 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-sky-300"></div>
                <div className="w-20 text-center shrink-0">
                  <div className="text-3xl font-black text-sky-500">20</div>
                  <div className="text-xs font-bold text-slate-500 mt-1">分</div>
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-sky-950 mb-1 flex items-center gap-2">
                    <span className="bg-sky-50 text-sky-700 px-3 py-0.5 rounded-full text-xs">白金級</span>
                    戰略循環
                  </h5>
                  <p className="text-slate-600 text-base">產品具備封閉循環設計或戰略物資提煉履歷。</p>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 text-rose-900 p-4 rounded-xl border border-rose-200 flex items-center gap-4">
              <span className="text-xl text-rose-600 shrink-0">🚨</span>
              <div>
                <h4 className="text-sm font-bold mb-1">防弊機制</h4>
                <p className="text-sm">AI 自動驗證，無具體第三方報告與單據，系統<strong className="text-rose-700">不予給分</strong>。</p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Urban Mining</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#07</span>
          </div>
        </div>
      </div>
    </div>
  );
}
