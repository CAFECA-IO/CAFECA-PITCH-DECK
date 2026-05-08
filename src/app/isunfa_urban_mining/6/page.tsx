'use client';

export default function UrbanMiningSlide6() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 py-8 z-10 ">

          <div className="mb-6">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Urban Mining</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-950 mt-5 tracking-wide leading-tight">環境友善標竿 —— 興采實業 (Singtex) 的全球典範</h2>

          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
              <h4 className="text-xl font-bold text-sky-950 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                透過城市採礦培育更多綠色產業典範：
              </h4>
              <p className="text-slate-700 leading-relaxed text-lg">以在地隱形冠軍為典範，向全球展示新北市具備最卓越的綠色製造環境。</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-sky-800">
                <h4 className="text-2xl font-bold text-sky-950 mb-4 flex items-center gap-3">
                  <span className="text-sky-600">🌍</span> 國際領先案例
                </h4>
                <p className="text-slate-700 leading-relaxed text-xl">
                  深耕新莊的<strong className="text-sky-900 text-2xl mx-1">「興采實業」</strong>完美展示了城市採礦的最高境界。其世界級專利 <strong className="text-emerald-700">S.Café® 咖啡紗</strong>，將廢棄咖啡渣與寶特瓶轉化為頂級機能布料，供應給 Patagonia、The North Face 等國際大廠。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-emerald-500">
                <h4 className="text-2xl font-bold text-sky-950 mb-4 flex items-center gap-3">
                  <span className="text-emerald-500">🛡️</span> DPP 標準的賦能作用
                </h4>
                <p className="text-slate-700 leading-relaxed text-xl">
                  透過新北市建立的 DPP 系統，能將如興采實業這類「極度環境友善」的永續實績，進行<strong className="text-emerald-700 mx-1">數位化確信</strong>，協助企業更輕易地向歐洲買家展示其白金級的綠色競爭力。
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Urban Mining</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#06</span>
          </div>
        </div>
      </div>
    </div>
  );
}
