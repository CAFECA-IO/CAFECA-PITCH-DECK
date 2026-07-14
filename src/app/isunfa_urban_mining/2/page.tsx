'use client';

export default function UrbanMiningSlide2() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260508 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 py-8 z-10 ">

          <div className="mb-6">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Urban Mining</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-950 mt-5 tracking-wide leading-tight">新北領航：化法規壓力為產業競爭力</h2>

          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="grid grid-cols-1 gap-6 mt-2">
              <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold text-sky-950 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                  國際局勢：
                </h4>
                <p className="text-slate-700 leading-relaxed text-lg">面對歐盟 CBAM 與 ESPR 法規，新北市 19,091 家工廠正面臨前所未有的轉型挑戰，這同時也是產業<strong className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded mx-1">「擴大國際版圖」</strong>的絕佳契機。</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-emerald-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 text-8xl font-black">CORE</div>
                <h4 className="text-2xl font-bold text-sky-950 mb-6 flex items-center gap-3">
                  <span className="text-emerald-500 text-2xl">🎯</span> 提案核心
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 mt-1 font-bold text-xl shadow-sm border border-emerald-200">1</div>
                    <div>
                      <h5 className="text-xl font-bold text-sky-900 mb-2">搶佔全球綠色供應鏈</h5>
                      <p className="text-slate-600 leading-relaxed text-lg">率先掌握數位產品護照的企業，將成為國際大廠首選的綠色供應商。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 mt-1 font-bold text-xl shadow-sm border border-emerald-200">2</div>
                    <div>
                      <h5 className="text-xl font-bold text-sky-900 mb-2">六都政策標竿</h5>
                      <p className="text-slate-600 leading-relaxed text-lg">透過建立臺灣首個數位產品護照標準，新北市將在六都的永續環境競爭中脫穎而出，展現最強大的<strong className="text-emerald-700 mx-1">「數位與綠色雙軌賦能」</strong>施政成效。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Urban Mining</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#02</span>
          </div>
        </div>
      </div>
    </div>
  );
}
