'use client';

import { Leaf, Recycle, Gem, CircleDollarSign, Sparkles } from 'lucide-react';

export default function CafecaIsunfaSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-gray-100 text-gray-900 font-sans">

      {/* Info: (20260615 - Luphia) Background Gradients from isunfa.com light theme */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8c00] to-[#ffda44] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff8c00] to-[#ffda44] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>

      <div className="z-10 w-full flex-grow flex flex-col justify-center px-20 relative">

        {/* Info: (20260615 - Luphia) Header Section */}
        <div className="flex justify-between items-end mb-12 border-b border-orange-100 pb-8 mt-2">
          <div className="space-y-5">
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
                <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Case Study • 2025</span>
              </div>
              <div className="inline-flex items-center gap-x-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600 ring-1 ring-orange-200">
                <Sparkles className="w-4 h-4" />
                <span>導入案例</span>
              </div>
            </div>

            <h2 className="text-5xl font-black leading-tight text-gray-900 tracking-tight">
              中國砂輪（KINIK）<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-700 via-orange-500 to-amber-400">再生晶圓服務</span>
            </h2>
          </div>

          <div className="text-right">
            <p className="text-gray-500 text-sm font-medium mb-1">產業類別</p>
            <p className="text-xl font-bold text-gray-800">半導體耗材與精密製造</p>
          </div>
        </div>

        {/* Info: (20260615 - Luphia) Metrics Grid */}
        <div className="grid grid-cols-4 gap-6 w-full">

          {/* Info: (20260615 - Luphia) Metric 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-gray-500 text-sm font-semibold mb-2">ESG 報告減碳量</p>
            <div className="flex flex-col mb-4">
              <span className="text-5xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-700 group-hover:from-green-600 group-hover:to-green-500 transition-all">-2,500</span>
              <span className="text-sm font-bold text-gray-400 mt-2">噸 CO₂e</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              依據自動產出的 ESG 報告分析，精準辨識高碳排熱點並實施改善，全年成功減少巨量碳排放。
            </p>
          </div>

          {/* Info: (20260615 - Luphia) Metric 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
              <Gem className="w-6 h-6 text-amber-600" />
            </div>
            <p className="text-gray-500 text-sm font-semibold mb-2">高價值金屬回收</p>
            <div className="flex flex-col mb-4">
              <span className="text-5xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-700 group-hover:from-amber-600 group-hover:to-amber-500 transition-all">鈷 / 鎢</span>
              <span className="text-sm font-bold text-transparent mt-2 select-none" aria-hidden="true">Spacer</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              從製程污泥中精準辨識並分離富含鈷與鎢的戰略金屬資源，減少原礦開採需求。
            </p>
          </div>

          {/* Info: (20260615 - Luphia) Metric 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
              <Recycle className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-500 text-sm font-semibold mb-2">矽資源再生循環</p>
            <div className="flex flex-col mb-4">
              <span className="text-4xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-700 group-hover:from-blue-600 group-hover:to-blue-500 transition-all tracking-tight mt-1 mb-[3px]">高純度矽</span>
              <span className="text-sm font-bold text-transparent mt-2 select-none" aria-hidden="true">Spacer</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              透過 AI 製程數據溯源，大幅提升高純度矽污泥的回收轉化率，將廢棄物重塑為高科技產業原料。
            </p>
          </div>

          {/* Info: (20260615 - Luphia) Metric 4 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
              <CircleDollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-gray-500 text-sm font-semibold mb-2">循環經濟創造價值</p>
            <div className="flex flex-col mb-4">
              <span className="text-5xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-700 group-hover:from-orange-600 group-hover:to-orange-500 transition-all">4000萬+</span>
              <span className="text-sm font-bold text-gray-400 mt-2">NTD</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              透過城市採礦技術分析其潛在價值，將污泥廢棄物轉化為鈷、鎢提煉、矽碇與人造螢石，為企業創造突破性的經濟價值。
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
