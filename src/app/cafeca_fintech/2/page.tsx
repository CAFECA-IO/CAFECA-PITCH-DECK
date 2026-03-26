export default function CafecaFintechSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-gray-200">

      {/* Info: (20260315 - Luphia) Background Gradients - Keeping consistent with Slide 1 & 2 */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[70rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#10b981] to-[#34d399] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="px-16 pt-12 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
          <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm">Core Principles</span>
        </div>
        <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
          碳會計人工智能核心原則
        </h1>
      </div>

      <div className="flex-1 px-16 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-5xl bg-slate-50/80 backdrop-blur-sm rounded-2xl p-12 border border-slate-100 shadow-lg text-center relative overflow-hidden group hover:shadow-xl transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 transition-transform group-hover:scale-110 duration-500"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-50 rounded-tr-[120px] -ml-10 -mb-10 opacity-50 transition-transform group-hover:scale-110 duration-500"></div>

          <div className="flex flex-col items-center justify-center gap-6 text-slate-600 relative z-10 font-serif">

            {/* Info: (20260315 - Luphia) Main Equation */}
            <div className="flex items-center gap-4 text-3xl md:text-4xl text-slate-700">
              <span className="font-bold text-emerald-700 italic border-b-4 border-emerald-500 pb-1">P</span>
              <span className="text-slate-400">=</span>
              <span className="italic">C<sub>Econ</sub></span>
              <span className="text-slate-400">+</span>
              <span className="italic font-bold text-emerald-600">C<sub>Eco</sub></span>
              <span className="text-slate-400">+</span>
              <span className="italic">C<sub>Soc</sub></span>
              <span className="text-slate-400">+</span>
              <span className="italic">V<sub>Brand</sub></span>
              <span className="text-slate-400">+</span>
              <span className="italic">&pi;</span>
            </div>

            {/* Info: (20260315 - Luphia) Legend / Breakdown */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm md:text-base font-sans w-full max-w-4xl">
              <div className="bg-white px-4 py-3 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                <span className="font-serif italic text-slate-500 mb-1">C<sub>Econ</sub></span>
                <span className="font-medium">經濟成本</span>
              </div>

              <div className="relative group/eco">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl blur opacity-25 group-hover/eco:opacity-50 transition duration-500"></div>
                <div className="relative bg-emerald-50 text-emerald-800 border-emerald-300 border-2 px-4 py-3 rounded-xl shadow-md flex flex-col items-center transform scale-110">
                  <span className="font-serif italic font-bold mb-1">C<sub>Eco</sub></span>
                  <span className="font-bold">生態成本</span>
                </div>
              </div>

              <div className="bg-white px-4 py-3 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                <span className="font-serif italic text-slate-500 mb-1">C<sub>Soc</sub></span>
                <span className="font-medium">社會成本</span>
              </div>

              <div className="bg-white px-4 py-3 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                <span className="font-serif italic text-slate-500 mb-1">V<sub>Brand</sub></span>
                <span className="font-medium">品牌價值</span>
              </div>

              <div className="bg-white px-4 py-3 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                <span className="font-serif italic text-slate-500 mb-1">&pi;</span>
                <span className="font-medium">利潤</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-4 w-full px-16 flex justify-between text-gray-400 text-xs tracking-widest uppercase font-medium z-10">
        <div>Pricing Model</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 CAFECA FINTECH
        </div>
      </div>
    </div>
  );
}

