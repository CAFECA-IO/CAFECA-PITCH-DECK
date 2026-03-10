import { Sprout, TrendingUp, FlaskConical, Clock, Sparkles } from 'lucide-react';

export default function CafecaFintechSlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative flex overflow-hidden">
      {/* Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Left Column / Title */}
      <div className="w-[35%] h-full bg-slate-900 p-12 flex flex-col justify-center relative shadow-2xl z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/50 border border-sky-700/50 text-sky-400 text-xs font-bold tracking-wider mb-8">
            <Sparkles size={14} />
            VALUE CREATION
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-white">
            導入陽光智能會計
            <span className="text-sky-400">最大化變現</span>企業礦脈
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg mt-6">
            以綠色金融與自動化智能模型驅動，將 ESG 轉型阻力化為具體可見的財務收益與市場溢價。
          </p>
        </div>
      </div>

      {/* Right Column / Content */}
      <div className="flex-1 h-full p-12 bg-white flex flex-col justify-center relative">

        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-6">
            <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shadow-sm border border-sky-100/50">
              <TrendingUp size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-800">以中國砂輪 2026 年為例</h3>
              <p className="text-slate-500 text-base mt-1 font-medium">KINIK - 將永續合規轉置為企業護城河</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 relative">

            {/* Card 1: Carbon Tax */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col gap-4 group hover:shadow-xl hover:border-emerald-200 transition-all duration-500 relative overflow-hidden hover:-translate-y-1 bg-gradient-to-br hover:from-white hover:to-emerald-50/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 transition-transform group-hover:scale-110 duration-500"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 border border-slate-100 text-slate-600 group-hover:scale-110 transition-transform duration-500">
                  <Sprout size={28} className="group-hover:text-emerald-500 transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Cost Reduction</div>
                  <h4 className="text-xl font-bold text-slate-800">降低碳費支出</h4>
                </div>
              </div>

              <div className="mt-2 relative z-10">
                <div className="text-4xl font-black text-emerald-600 flex items-baseline gap-1" style={{ textShadow: '0 2px 10px rgba(16,185,129,0.2)' }}>
                  - 250 <span className="text-xl font-bold text-slate-500">萬 TWD</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-4">精準計算與優化製程碳排，直接減少法定碳費繳納金額，提升綠色韌性。</p>
              </div>
            </div>

            {/* Card 2: Green Premium */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col gap-4 group hover:shadow-xl hover:border-sky-200 transition-all duration-500 relative overflow-hidden hover:-translate-y-1 bg-gradient-to-br hover:from-white hover:to-sky-50/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 transition-transform group-hover:scale-110 duration-500"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 border border-slate-100 text-slate-600 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp size={28} className="group-hover:text-sky-500 transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Revenue Boost</div>
                  <h4 className="text-xl font-bold text-slate-800">綠色溢價收入</h4>
                </div>
              </div>

              <div className="mt-2 relative z-10">
                <div className="text-4xl font-black text-sky-600 flex items-baseline gap-1" style={{ textShadow: '0 2px 10px rgba(14,165,233,0.2)' }}>
                  + 4000 <span className="text-xl font-bold text-slate-500">萬 TWD</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-4">透過低碳產品認證與合規優勢，爭取供應鏈綠色採購溢價，擴大市場利潤空間。</p>
              </div>
            </div>

            {/* Card 3: R&D Cost */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col gap-4 group hover:shadow-xl hover:border-indigo-200 transition-all duration-500 relative overflow-hidden hover:-translate-y-1 bg-gradient-to-br hover:from-white hover:to-indigo-50/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 transition-transform group-hover:scale-110 duration-500"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 border border-slate-100 text-slate-600 group-hover:scale-110 transition-transform duration-500">
                  <FlaskConical size={28} className="group-hover:text-indigo-500 transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Efficiency</div>
                  <h4 className="text-xl font-bold text-slate-800">研發成本降低</h4>
                </div>
              </div>

              <div className="mt-2 relative z-10">
                <div className="text-4xl font-black text-indigo-600 flex items-baseline gap-1" style={{ textShadow: '0 2px 10px rgba(99,102,241,0.2)' }}>
                  - 8000 <span className="text-xl font-bold text-slate-500">萬 TWD</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-4">利用 AI 加速材料分析與製程模擬，大幅縮短研發週期，降低開發階段耗損。</p>
              </div>
            </div>

            {/* Card 4: Time Premium */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col gap-4 group hover:shadow-xl hover:border-orange-200 transition-all duration-500 relative overflow-hidden hover:-translate-y-1 bg-gradient-to-br hover:from-white hover:to-orange-50/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 transition-transform group-hover:scale-110 duration-500"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 border border-slate-100 text-slate-600 group-hover:scale-110 transition-transform duration-500">
                  <Clock size={28} className="group-hover:text-orange-500 transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Time to Market</div>
                  <h4 className="text-xl font-bold text-slate-800">時間溢價收入</h4>
                </div>
              </div>

              <div className="mt-2 relative z-10">
                <div className="text-4xl font-black text-orange-600 flex items-baseline gap-1" style={{ textShadow: '0 2px 10px rgba(249,115,22,0.2)' }}>
                  + 5 <span className="text-xl font-bold text-slate-500">億 TWD</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-4">使 2 奈米鑽石碟提前 7 個月推出鎖定市場份額，以單月貢獻營收 1 億元，毛利率 50% 估算。</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
