'use client';

export default function Slide3() {
  const points = [
    { num: '01', title: '庫存盤點到深夜', desc: '商品數量對不上，耗時加班找原因' },
    { num: '02', title: '不懂客人真實需求', desc: '憑感覺進貨與推薦，導致滯銷積壓' },
    { num: '03', title: '產品故事說不清', desc: '無法清楚傳達產地、材質與碳足跡' },
    { num: '04', title: '店內氛圍難以維持', desc: '燈光與音樂一成不變，缺乏品牌質感' },
    { num: '05', title: '對帳與營收算錯', desc: '多元支付與現金結算混亂，利潤抓不準' }
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col border border-neutral-800">

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>

        {/* Content Container */}
        <div className="z-10 w-full h-full flex flex-row items-center justify-between px-20 pt-8 pb-12">

          {/* Left: Header */}
          <div className="w-[42%] flex flex-col justify-center pr-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 text-red-400 text-sm tracking-widest mb-8 bg-red-500/10 backdrop-blur-sm self-start">
              01 | 零售業痛點
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-[0.1em] text-white leading-[1.4]">
              惡夢<br />讓人夜不能寐
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-red-500 to-red-300 mt-8 mb-8 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            <p className="text-2xl text-neutral-400 tracking-widest font-light leading-relaxed">
              這些關店後的痛苦，<br />您是否也深有同感？
            </p>
          </div>

          {/* Right: List */}
          <div className="w-[58%] flex flex-col gap-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-6 bg-neutral-900/60 hover:bg-neutral-800/90 border border-neutral-800 hover:border-amber-500/40 transition-all duration-500 p-5 rounded-2xl cursor-default shadow-lg"
              >
                <div className="text-4xl font-black text-neutral-800 group-hover:text-red-500/40 transition-colors duration-500 w-16 text-center italic">
                  {point.num}
                </div>
                <div className="h-12 w-[2px] bg-neutral-800 group-hover:bg-red-500/40 transition-colors duration-500 rounded-full"></div>
                <div className="flex-1 pl-2">
                  <h3 className="text-2xl font-bold text-neutral-200 group-hover:text-white transition-colors duration-300 tracking-wider mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-base text-neutral-400 group-hover:text-red-400/80 font-light tracking-widest transition-colors duration-300">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-600 text-xs tracking-[0.2em] uppercase z-10 pointer-events-none">
          <div>卡菲卡金融科技股份有限公司 (52650861)</div>
          <div>contact@isunfa.com</div>
        </div>

      </div>
    </div>
  );
}
