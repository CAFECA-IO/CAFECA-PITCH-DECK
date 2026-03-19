export default function CafecaFintechSlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-gray-200">

      {/* Info: (20260315 - Luphia) Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 transform -skew-x-12 translate-x-32" />

      {/* Info: (20260315 - Luphia) Main Content Area */}
      <div className="flex-1 w-full h-full pt-12 px-16 pb-16 flex flex-col relative z-10">

        {/* Info: (20260315 - Luphia) Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-sky-500 rounded-full"></div>
            <span className="text-sky-600 font-bold tracking-[0.2em] uppercase text-sm">Use Case: Tung Ho Steel</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
            淨零碳排的關鍵輔助
            <span className="block text-3xl text-slate-500 font-light mt-2">中國鋼鐵減碳分析案例</span>
          </h1>
        </div>

        {/* Info: (20260315 - Luphia) Dashboard/Data Area */}
        <div className="flex-1 flex gap-8">

          {/* Info: (20260315 - Luphia) Left Column: Scope Breakdown */}
          <div className="flex-1 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-slate-600 mb-1 border-b-2 border-slate-200 pb-2">碳排放範疇 (噸 CO₂e)</h3>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-base group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors">1</div>
                <div>
                  <div className="text-sm text-slate-500 font-bold tracking-wider">範疇一</div>
                  <div className="text-xs text-slate-400">直接溫室氣體排放</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-800 font-mono tracking-tight">17,587,000</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-base group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors">2</div>
                <div>
                  <div className="text-sm text-slate-500 font-bold tracking-wider">範疇二</div>
                  <div className="text-xs text-slate-400">能源間接排放</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-800 font-mono tracking-tight">1,162,000</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-sky-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-base group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors">3</div>
                <div>
                  <div className="text-sm text-slate-500 font-bold tracking-wider">範疇三</div>
                  <div className="text-xs text-slate-400">其他間接排放</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-800 font-mono tracking-tight">11,036,000</div>
            </div>
          </div>

          {/* Info: (20260315 - Luphia) Right Column: Totals & Ranking */}
          <div className="flex-[1.2] flex flex-col gap-4">

            {/* Info: (20260315 - Luphia) Total Emissions */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/20 rounded-full -ml-10 -mb-10 blur-xl"></div>

              <div className="relative z-10">
                <div className="text-sky-400 font-bold tracking-widest text-sm mb-1 uppercase">總排放量</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold font-mono tracking-tighter">29,789,000</span>
                  <span className="text-lg text-slate-400 font-light">噸</span>
                </div>
                
                {/* Info: (20260318 - Luphia) Density Comparison */}
                <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-200 text-sm">
                  <span className="font-bold tracking-wider">⚠️ 碳排密度達</span>
                  <span className="mx-1.5 px-2 py-0.5 bg-rose-500/30 rounded text-rose-100 font-black">東和鋼鐵</span>
                  <span className="font-bold tracking-wider">的</span>
                  <span className="mx-1.5 text-rose-400 font-mono text-xl font-bold">4.5</span>
                  <span className="font-bold tracking-wider">倍</span>
                </div>
              </div>
            </div>

            {/* Info: (20260315 - Luphia) Total Carbon Fee */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="text-emerald-200 font-bold tracking-widest text-sm mb-1 uppercase">預估總碳費</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl text-emerald-400 mr-1">$NTD</span>
                    <span className="text-4xl font-extrabold font-mono tracking-tighter shadow-sm">893,670,000</span>
                  </div>
                </div>

                {/* Info: (20260315 - Luphia) Ranking Badge */}
                <div className="bg-white text-emerald-800 px-5 py-3 rounded-xl shadow-lg border-2 border-emerald-400/30 transform rotate-3 flex flex-col items-center">
                  <span className="text-xs font-bold opacity-80 mb-1">排放規模</span>
                  <div className="text-2xl font-black">全臺第 3</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Info: (20260315 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-gray-400 text-xs tracking-widest uppercase font-medium z-10">
        <div>CONFIDENTIAL • Carbon Management</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 CAFECA FINTECH
        </div>
      </div>
    </div>
  );
}
