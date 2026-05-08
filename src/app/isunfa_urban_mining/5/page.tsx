'use client';

export default function UrbanMiningSlide5() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">
        
        {/* Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />
        
        <div className="flex-1 flex flex-col px-16 py-4 z-10 ">
          <div className="mb-4">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Urban Mining</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-950 mt-5 tracking-wide leading-tight">新北市環保局認證再生原料憑證</h2>
          </div>
          
          <div className="flex-1 flex flex-col relative z-10 justify-center">
            <div className="bg-slate-50 p-4 rounded-2xl shadow-sm border border-slate-100 mb-4">
              <h4 className="text-xl font-bold text-sky-950 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                綠色經濟的新貨幣：再生原料憑證
              </h4>
              <p className="text-slate-700 leading-relaxed text-lg">
                類似於「綠電憑證」是企業使用再生能源的證明，這項機制將為由新北市<strong className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded mx-1">「城市採礦」</strong>產出的循環經濟原物料提供官方認證。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-emerald-500 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black">CERT</div>
                <h4 className="text-xl font-bold text-sky-950 mb-3 flex items-center gap-3">
                  <span className="text-emerald-500 text-2xl">📜</span> 官方憑證入荷機制
                </h4>
                <p className="text-slate-600 leading-relaxed text-base flex-1">
                  每個由新北轄內循環經濟產業鏈所產生之戰略原物料在入荷時，系統即會透過區塊鏈與 AI 驗證，發行專屬的<strong className="text-emerald-700">「新北市再生原料憑證」</strong>，確保來源合法、數量精確。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-sky-500 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black">DPP</div>
                <h4 className="text-xl font-bold text-sky-950 mb-3 flex items-center gap-3">
                  <span className="text-sky-500 text-2xl">🔗</span> 數位產品護照對接
                </h4>
                <p className="text-slate-600 leading-relaxed text-base flex-1">
                  採購這些再生原料的企業，可將該官方憑證直接匯入其<strong className="text-sky-700">數位產品護照 (DPP)</strong> 中。這不僅是極具公信力的實質減碳證明，更成為接軌歐盟 ESPR 與綠色供應鏈的最強武器。
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl border border-emerald-200 flex items-start gap-4">
              <span className="text-2xl mt-1 text-emerald-600">💡</span>
              <div>
                <h4 className="text-lg font-bold mb-1">戰略價值</h4>
                <p className="text-base leading-relaxed">這套憑證系統將直接賦予新北回收物資「綠色溢價 (Green Premium)」，驅動整體產業鏈主動參與城市採礦。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Urban Mining</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#05</span>
          </div>
        </div>
      </div>
    </div>
  );
}
