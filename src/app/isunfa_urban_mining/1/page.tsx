'use client';

export default function UrbanMiningSlide1() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260508 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 z-10 justify-center">

          <div className="mt-20 mb-8 text-center z-10 relative">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100 shadow-sm">iSunFA Urban Mining</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-sky-950 leading-[1.2] mt-8">
              新北市城市採礦暨<br />數位產品護照戰略提案

            </h1>
            <p className="text-xl text-slate-600 mt-6 font-medium max-w-4xl mx-auto">助攻新北擴大國際版圖：建立六都最強環境友善政策成效</p>
          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="space-y-4 text-center mt-16">
              <p className="text-xl text-sky-900 font-medium tracking-widest">呈報單位： 新北市政府環境保護局</p>
              <p className="text-lg text-emerald-700 font-medium tracking-wide">提案智庫： 陽光智能會計 / 卡菲卡金融科技股份有限公司</p>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Urban Mining</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#01</span>
          </div>
        </div>
      </div>
    </div>
  );
}
