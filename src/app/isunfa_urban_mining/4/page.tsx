'use client';

export default function UrbanMiningSlide4() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260508 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 py-4 z-10 ">

          <div className="mb-4">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Urban Mining</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-950 mt-5 tracking-wide leading-tight">戰略物資提煉</h2>

          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="bg-slate-50 p-4 rounded-2xl shadow-sm border border-slate-100 mb-3">
              <h4 className="text-xl font-bold text-sky-950 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                因應地緣政治與國際供應鏈斷鏈風險：
              </h4>
              <p className="text-slate-700 leading-relaxed text-lg">環保治理可從「守護國家戰略資源」的角度出發，並與在地領先的生態鏈對接。</p>
            </div>
            <h4 className="text-xl font-bold text-emerald-700 mb-3 flex items-center gap-3">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">⟡</span>
              重點內容（實務廠商對接）：
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center text-lg font-bold mb-3">CaF₂</div>
                <h5 className="text-lg font-bold text-sky-950 mb-1">人造螢石</h5>
                <p className="text-emerald-600 font-bold mb-3">推估淨產量 5.5 萬噸</p>
                <p className="text-slate-600 leading-relaxed text-sm">透過如<strong className="text-sky-800">「立盈環保」</strong>等廠商，將半導體污泥轉化為鋼鐵業助熔劑。</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center text-lg font-bold mb-3">W/Co</div>
                <h5 className="text-lg font-bold text-sky-950 mb-1">鎢、鈷等戰略稀有金屬</h5>
                <p className="text-emerald-600 font-bold mb-3">推估淨產量 200 噸</p>
                <p className="text-slate-600 leading-relaxed text-sm">透過如<strong className="text-sky-800">「聯友金屬」</strong>提煉鎢、鈷等高科技命脈。</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center text-lg font-bold mb-3">SiO₂</div>
                <h5 className="text-lg font-bold text-sky-950 mb-1">高純度矽粉</h5>
                <p className="text-emerald-600 font-bold mb-3">推估淨產量 2.5 萬噸</p>
                <p className="text-slate-600 leading-relaxed text-sm">透過如<strong className="text-sky-800">「光洋科」</strong>將 CMP 污泥高值化回收。</p>
              </div>
            </div>
            <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl border border-emerald-200 flex items-start gap-4">
              <span className="text-2xl mt-1 text-emerald-600">💡</span>
              <div>
                <h4 className="text-lg font-bold mb-1">新北市環保局主持認證</h4>
                <p className="text-base leading-relaxed">由環保局領航建立標準，將這些<strong className="text-emerald-700 bg-emerald-200/50 px-1 rounded mx-1">產業生成的「國土戰略物資」</strong>作為政府認證關鍵再生原料。</p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Urban Mining</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#04</span>
          </div>
        </div>
      </div>
    </div>
  );
}
