import { Leaf, Recycle, Zap, Clock, TrendingUp } from 'lucide-react';

export default function CafecaFintechSlide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col text-slate-800 border border-gray-200">

      {/* Info: (20260315 - Luphia) Background Glows */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>

      {/* Info: (20260315 - Luphia) Main Container */}
      <div className="flex-1 w-full h-full pt-12 px-16 pb-16 flex flex-col relative z-10">
        
        {/* Info: (20260315 - Luphia) Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
              <Leaf size={14} />
              <span>Carbon Reduction Strategy</span>
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
            減碳 <span className="text-emerald-500">80%</span> 解決方案
            <span className="block text-2xl text-slate-500 font-light mt-2 tracking-wide">循環經濟與微型核能綜合運用</span>
          </h1>
        </div>

        {/* Info: (20260315 - Luphia) Content Layout */}
        <div className="flex-1 flex gap-8">
          
          {/* Info: (20260315 - Luphia) Left Side: Circular Economy */}
          <div className="w-1/2 flex flex-col gap-4">
            
            <h3 className="text-lg font-bold text-slate-600 uppercase tracking-widest border-b-2 border-slate-200 pb-2 mb-1">循環經濟應用</h3>
            
            {/* Info: (20260315 - Luphia) Action 1 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-emerald-300 transition-all flex items-start gap-4 shadow-sm group">
              <div className="p-3 bg-emerald-100 rounded-xl shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Recycle className="text-emerald-500 group-hover:text-white transition-colors" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1 leading-tight">台積電氟化鈣污泥</h4>
                <p className="text-emerald-600 font-semibold text-sm">重鑄人工螢石</p>
                <div className="mt-2 text-sm text-slate-500 leading-relaxed font-medium">
                  轉化半導體製程廢棄物為高價值冶煉助劑，取代天然礦產開採。
                </div>
              </div>
            </div>

            {/* Info: (20260315 - Luphia) Action 2 */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-sky-300 transition-all flex items-start gap-4 shadow-sm group">
              <div className="p-3 bg-sky-100 rounded-xl shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Recycle className="text-sky-500 group-hover:text-white transition-colors" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1 leading-tight">中國砂輪矽廢棄物</h4>
                <p className="text-sky-600 font-semibold text-sm">提煉 SiC 原料</p>
                <div className="mt-2 text-sm text-slate-500 leading-relaxed font-medium">
                  將研磨廢料純化為第三代半導體先驅物，實現跨產業廢料重生。
                </div>
              </div>
            </div>
            
          </div>

          {/* Info: (20260315 - Luphia) Right Side: MMR & Financials */}
          <div className="w-1/2 flex flex-col gap-4">
            
            <h3 className="text-lg font-bold text-slate-600 uppercase tracking-widest border-b-2 border-slate-200 pb-2 mb-1">能源轉型與佈局</h3>
            
            {/* Info: (20260315 - Luphia) Energy Source */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-5 border border-amber-200 flex items-center gap-5 shadow-sm relative overflow-hidden group">
               <div className="absolute right-0 top-0 opacity-10 mix-blend-multiply transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                 <Zap className="text-amber-500" size={140} />
               </div>
               <div className="relative z-10 flex-1">
                 <div className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-1">清潔基載電力</div>
                 <h4 className="text-xl font-black text-slate-800 mb-2">釷 MMR 微型核能發電</h4>
                 <div className="flex items-baseline gap-2 text-amber-600">
                   <span className="text-4xl font-mono font-extrabold">15</span>
                   <span className="text-base font-bold opacity-80">座規劃</span>
                 </div>
               </div>
            </div>

            {/* Info: (20260315 - Luphia) Financial Grid */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-center shadow-sm">
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                   總建設成本
                </div>
                <div className="flex items-baseline gap-1 break-words pb-1">
                  <span className="text-base font-bold text-emerald-600">NT$</span>
                  <span className="text-3xl font-extrabold font-mono text-slate-800 tracking-tighter">565 億</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex items-center gap-3 shadow-sm">
                 <div className="p-3 bg-sky-100 rounded-full shrink-0">
                   <Clock className="text-sky-600" size={20} />
                 </div>
                 <div>
                   <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">建設時間</div>
                   <div className="text-xl font-bold text-slate-700"><span className="text-sky-600 font-mono font-extrabold text-2xl pr-1">6</span>年</div>
                 </div>
              </div>

              <div className="col-span-2 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-2xl p-5 border border-emerald-200 flex items-center justify-between shadow-sm">
                <div>
                   <div className="text-emerald-700 text-xs font-extrabold uppercase tracking-widest mb-1 flex items-center gap-2">
                     <TrendingUp size={16} /> 資金回收期
                   </div>
                   <div className="text-emerald-600/80 font-semibold text-[10px]">投資回報率高效益預估</div>
                </div>
                <div className="text-3xl font-black text-emerald-700 bg-white px-5 py-2 rounded-xl border border-emerald-200 shadow-sm">
                  <span className="font-mono mr-1">6</span>年
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Info: (20260315 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-400 text-xs tracking-widest uppercase font-semibold z-10">
        <div>Sustainable Infrastructure</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 CAFECA FINTECH
        </div>
      </div>

    </div>
  );
}
