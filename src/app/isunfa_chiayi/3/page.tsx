'use client';

export default function Slide3() {
  const points = [
    { num: '01', title: '全能數位領班', desc: '解決外場人力' },
    { num: '02', title: '客戶專屬服務生', desc: '比你更懂你' },
    { num: '03', title: '智能營養分析師', desc: '為產品的健康把關' },
    { num: '04', title: '二十四小時駐點音樂師', desc: '音樂就是你的風格' },
    { num: '05', title: '專屬智能會計師', desc: '生命不該浪費在算帳上' }
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col border border-neutral-800">

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>

        {/* Info: (20260503 - Luphia) Content Container */}
        <div className="z-10 w-full h-full flex flex-row items-center justify-between px-20 pt-8 pb-12">

          {/* Info: (20260503 - Luphia) Left: Header */}
          <div className="w-[42%] flex flex-col justify-center pr-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 text-amber-400 text-sm tracking-widest mb-8 bg-amber-500/10 backdrop-blur-sm self-start">
              01 | 核心理念
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-[0.1em] text-white leading-[1.4]">
              老闆們的痛，<br />我們懂
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-amber-300 mt-8 mb-8 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
            <p className="text-2xl text-neutral-400 tracking-widest font-light leading-relaxed">
              讓 <span className="text-amber-400 font-medium drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">人工智能</span> <br />來為大家解決問題
            </p>
          </div>

          {/* Info: (20260503 - Luphia) Right: List */}
          <div className="w-[58%] flex flex-col gap-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-6 bg-neutral-900/60 hover:bg-neutral-800/90 border border-neutral-800 hover:border-amber-500/40 transition-all duration-500 p-5 rounded-2xl cursor-default shadow-lg"
              >
                <div className="text-4xl font-black text-neutral-800 group-hover:text-amber-500/40 transition-colors duration-500 w-16 text-center italic">
                  {point.num}
                </div>
                <div className="h-12 w-[2px] bg-neutral-800 group-hover:bg-amber-500/40 transition-colors duration-500 rounded-full"></div>
                <div className="flex-1 pl-2">
                  <h3 className="text-2xl font-bold text-neutral-200 group-hover:text-white transition-colors duration-300 tracking-wider mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-base text-neutral-500 group-hover:text-amber-400/80 font-light tracking-widest transition-colors duration-300">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Info: (20260503 - Luphia) Footer Info */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-600 text-xs tracking-[0.2em] uppercase z-10 pointer-events-none">
          <div>卡菲卡金融科技股份有限公司 (52650861)</div>
          <div>contact@isunfa.com</div>
        </div>

      </div>
    </div>
  );
}
