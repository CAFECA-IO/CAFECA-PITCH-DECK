'use client';

export default function UrbanMiningSlide3() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260508 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 py-4 z-10 ">

          <div className="mb-4">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Urban Mining</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-950 mt-5 tracking-wide leading-tight">城市採礦漏斗模型</h2>

          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="bg-slate-50 p-4 rounded-2xl shadow-sm border border-slate-100 mb-3">
              <h4 className="text-xl font-bold text-sky-950 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                新北市循環經濟潛力：
              </h4>
              <p className="text-slate-700 leading-relaxed text-lg">透過新北市 2025 年產業公開產值與廢棄物量數據，新北市的城市採礦每年礦脈</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <div className="bg-white p-4 rounded-xl border-t-4 border-slate-300 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-4xl font-black">01</div>
                <h5 className="text-lg font-bold text-slate-500 mb-2">第一層（總量盤查）</h5>
                <p className="text-2xl font-black text-sky-950 mb-1">56.5 <span className="text-lg">萬噸</span></p>
                <p className="text-slate-600 text-sm font-medium">新北製造業總廢棄物</p>
              </div>
              <div className="bg-white p-4 rounded-xl border-t-4 border-emerald-300 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-4xl font-black">02</div>
                <h5 className="text-lg font-bold text-emerald-600 mb-2">第二層（高價值篩選）</h5>
                <p className="text-2xl font-black text-sky-950 mb-1">11.3 <span className="text-lg">萬噸</span></p>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">扣除無價值污泥與低效焚化物，精確鎖定具備回收潛力的固體廢料。</p>
              </div>
              <div className="bg-white p-4 rounded-xl border-t-4 border-emerald-500 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-4xl font-black">03</div>
                <h5 className="text-lg font-bold text-emerald-700 mb-2">第三層（實務良率導入）</h5>
                <p className="text-2xl font-black text-sky-950 mb-1">8.9 <span className="text-lg">萬噸</span></p>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">扣除 21% 精煉損耗（79% 實務良率），真實淨產出高純度再生原料。</p>
              </div>
            </div>
            <div className="bg-sky-950 text-white p-4 rounded-xl shadow-lg border-l-8 border-emerald-500 flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-emerald-400 mb-1">戰略價值</h4>
                <p className="text-sky-100">這 8.9 萬噸黃金資源，每年可為新北創造高達：</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-black text-white">13.2 <span className="text-xl text-emerald-400">億元</span></p>
                <p className="text-emerald-200 text-xs tracking-widest mt-1">實質循環產值</p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Urban Mining</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#03</span>
          </div>
        </div>
      </div>
    </div>
  );
}
