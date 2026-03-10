import { Recycle, Cpu, TestTube, Gem, Factory } from 'lucide-react';

export default function CafecaFintechSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative flex overflow-hidden">
      {/* Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Left Column / Title */}
      <div className="w-[35%] h-full bg-slate-900 p-12 flex flex-col justify-center relative shadow-2xl z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-400 text-xs font-bold tracking-wider mb-8">
            <Recycle size={14} />
            URBAN MINING
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white min-w-max">
            城市<span className="text-emerald-400">採礦</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            深挖工業製造副產品的殘餘價值。<br /><br />透過先進技術重新精煉，將企業廢棄物轉化為高價值的「綠色礦脈」。
          </p>
        </div>
      </div>

      {/* Right Column / Content */}
      <div className="flex-1 h-full p-12 bg-white flex flex-col justify-center relative">

        <div className="max-w-3xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-6">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100/50">
              <Factory size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-800">以台積電為例</h3>
              <p className="text-slate-500 text-base mt-1 font-medium">TSMC - 隱藏在製程背後的巨額循環經濟產值</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Card 1: Wafers */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center gap-8 group hover:shadow-xl hover:border-sky-200 transition-all duration-500 relative overflow-hidden hover:-translate-y-1 bg-gradient-to-br hover:from-white hover:to-sky-50/50">
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-sky-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

              <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 border border-slate-100 text-slate-600 group-hover:scale-110 transition-transform duration-500">
                <Cpu size={36} className="group-hover:text-sky-500 transition-colors duration-500" />
              </div>

              <div className="flex-1">
                <h4 className="text-2xl font-bold text-slate-800 mb-2">廢棄晶圓</h4>
                <p className="text-slate-500 text-sm leading-relaxed">報廢矽晶圓、切割廢料回收再製，提煉出高純度材料，重返高價值供應鏈，顯著降低原物料採購成本與碳排放。</p>
              </div>

              <div className="text-right pl-6 border-l border-slate-200/60">
                <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">潛在產值</div>
                <div className="text-4xl font-black text-sky-600 flex items-baseline gap-1" style={{ textShadow: '0 2px 10px rgba(14,165,233,0.2)' }}>
                  35 <span className="text-xl font-bold text-slate-500">億 TWD</span>
                </div>
              </div>
            </div>

            {/* Card 2: Sludge */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center gap-8 group hover:shadow-xl hover:border-emerald-200 transition-all duration-500 relative overflow-hidden hover:-translate-y-1 bg-gradient-to-br hover:from-white hover:to-emerald-50/50">
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-emerald-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

              <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 border border-slate-100 text-slate-600 group-hover:scale-110 transition-transform duration-500">
                <TestTube size={36} className="group-hover:text-emerald-500 transition-colors duration-500" />
              </div>

              <div className="flex-1">
                <h4 className="text-2xl font-bold text-slate-800 mb-2">廢棄污泥</h4>
                <p className="text-slate-500 text-sm leading-relaxed">含銅、鈷、鎢金屬離子之製程廢液與污泥，透過化學還原技術回收稀有金屬與工業酸鹼，徹底解決有害廢棄物處理難題。</p>
              </div>

              <div className="text-right pl-6 border-l border-slate-200/60">
                <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">潛在產值</div>
                <div className="text-4xl font-black text-emerald-600 flex items-baseline gap-1" style={{ textShadow: '0 2px 10px rgba(16,185,129,0.2)' }}>
                  15 <span className="text-xl font-bold text-slate-500">億 TWD</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-6 lg:p-8 border border-emerald-100/60 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-emerald-100/50">
                <Gem className="text-emerald-600" size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Valuation</span>
                <span className="font-extrabold text-slate-800 text-xl">年度單兵循環經濟總產值</span>
              </div>
            </div>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600 drop-shadow-sm">
              50 <span className="text-2xl font-bold text-slate-500 mix-blend-multiply">億+ TWD</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
