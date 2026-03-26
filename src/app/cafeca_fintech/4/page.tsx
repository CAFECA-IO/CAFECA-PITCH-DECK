export default function CafecaFintechSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-gray-200">
      
      {/* Background Gradients */}
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
          <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm">Carbon Cost Analysis</span>
        </div>
        <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
          一噸鋼筋的代價
        </h1>
      </div>

      <div className="flex-1 px-16 flex flex-col items-center justify-center relative z-10 mt-8 mb-16">
        <div className="w-full max-w-5xl bg-slate-50/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-lg overflow-hidden relative">
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-600/10 text-emerald-800 border-b-2 border-emerald-500/20 text-xl">
                <th className="py-6 px-8 font-bold text-center w-1/5">鋼廠名稱</th>
                <th className="py-6 px-8 font-bold text-center w-1/5">碳排量 (tCO₂e)</th>
                <th className="py-6 px-8 font-bold text-center w-1/5">價格</th>
                <th className="py-6 px-8 font-bold text-center w-1/5 text-emerald-600">碳價基準(EUR)</th>
                <th className="py-6 px-8 font-bold text-center w-1/5 text-emerald-700 bg-emerald-50/50">碳費</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 text-lg">
              <tr className="border-b border-slate-200/60 hover:bg-white/50 transition-colors">
                <td className="py-6 px-8 font-semibold text-center text-slate-800">東和鋼鐵</td>
                <td className="py-6 px-8 text-center font-mono">0.41</td>
                <td className="py-6 px-8 text-center font-mono">18,000</td>
                <td className="py-6 px-8 text-center font-mono text-emerald-600">8.2</td>
                <td className="py-6 px-8 text-center font-mono font-bold text-emerald-700 bg-emerald-50/30">123</td>
              </tr>
              <tr className="border-b border-slate-200/60 hover:bg-white/50 transition-colors">
                <td className="py-6 px-8 font-semibold text-center text-slate-800">豐興鋼鐵</td>
                <td className="py-6 px-8 text-center font-mono">0.40</td>
                <td className="py-6 px-8 text-center font-mono">16,600</td>
                <td className="py-6 px-8 text-center font-mono text-emerald-600">8.0</td>
                <td className="py-6 px-8 text-center font-mono font-bold text-emerald-700 bg-emerald-50/30">120</td>
              </tr>
              <tr className="border-b border-slate-200/60 hover:bg-white/50 transition-colors">
                <td className="py-6 px-8 font-semibold text-center text-slate-800">海光企業</td>
                <td className="py-6 px-8 text-center font-mono">0.40</td>
                <td className="py-6 px-8 text-center font-mono">16,800</td>
                <td className="py-6 px-8 text-center font-mono text-emerald-600">8.0</td>
                <td className="py-6 px-8 text-center font-mono font-bold text-emerald-700 bg-emerald-50/30">120</td>
              </tr>
              <tr className="hover:bg-white/50 transition-colors">
                <td className="py-6 px-8 font-semibold text-center text-slate-800">威致鋼鐵</td>
                <td className="py-6 px-8 text-center font-mono">0.46</td>
                <td className="py-6 px-8 text-center font-mono">18,100</td>
                <td className="py-6 px-8 text-center font-mono text-emerald-600">9.2</td>
                <td className="py-6 px-8 text-center font-mono font-bold text-emerald-700 bg-emerald-50/30">138</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

      <div className="absolute bottom-4 w-full px-16 flex justify-between text-gray-400 text-xs tracking-widest uppercase font-medium z-10">
        <div>CARBON COST IMPACT</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 CAFECA FINTECH
        </div>
      </div>

    </div>
  );
}
