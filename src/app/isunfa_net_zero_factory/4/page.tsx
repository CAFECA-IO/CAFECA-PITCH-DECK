'use client';

import { ArrowRight, Box, Cpu, Recycle, BarChart3 } from 'lucide-react';

export default function NetZeroFactorySlide4() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260527 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-6 pb-16 z-10 justify-between">

          <div className="mb-2">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Net-Zero Factory</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-950 mt-3 tracking-wide leading-tight">Process Identification: Deep Learning</h2>
          </div>

          {/* Info: (20260527 - Luphia) Intro Card */}
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-1">
            <h4 className="text-base font-bold text-sky-950 mb-0.5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-sky-800 rounded-full inline-block"></span>
              Net-Zero Factory Closed-Loop Operation Blueprint
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              How the AI Tech Brain coordinates real-time multi-modal scans to guide incoming resources through production to predictive recovery.
            </p>
          </div>

          {/* Info: (20260527 - Luphia) Horizontal Process Diagram */}
          <div className="flex-1 flex items-center justify-between my-2 relative">
            
            {/* Info: (20260527 - Luphia) Step 1 */}
            <div className="w-[230px] bg-white p-3.5 rounded-2xl border border-slate-150 shadow-sm relative group hover:border-emerald-200 transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform">
                <Box size={22} className="stroke-[2.2]" />
              </div>
              <span className="text-[10px] font-bold text-sky-600 tracking-wider bg-sky-50 px-2 py-0.5 rounded-full mb-1">STEP 01</span>
              <h5 className="text-sm font-bold text-slate-800 mb-1">Raw Input Scan</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                AI verifies raw compositions and material attributes upon arrival.
              </p>
            </div>

            {/* Info: (20260527 - Luphia) Connecting Line & Arrow 1 */}
            <div className="flex-1 flex items-center justify-center px-2">
              <div className="h-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 flex-1 relative max-w-[60px]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center">
                  <ArrowRight size={10} className="text-white shrink-0" />
                </div>
              </div>
            </div>

            {/* Info: (20260527 - Luphia) Step 2 */}
            <div className="w-[230px] bg-white p-3.5 rounded-2xl border border-slate-150 shadow-sm relative group hover:border-emerald-200 transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform">
                <Cpu size={22} className="stroke-[2.2]" />
              </div>
              <span className="text-[10px] font-bold text-emerald-600 tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full mb-1">STEP 02</span>
              <h5 className="text-sm font-bold text-slate-800 mb-1">Process Mapping</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Machine vision maps workflows in real time to optimize energy and yield.
              </p>
            </div>

            {/* Info: (20260527 - Luphia) Connecting Line & Arrow 2 */}
            <div className="flex-1 flex items-center justify-center px-2">
              <div className="h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 flex-1 relative max-w-[60px]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full flex items-center justify-center">
                  <ArrowRight size={10} className="text-white shrink-0" />
                </div>
              </div>
            </div>

            {/* Info: (20260527 - Luphia) Step 3 */}
            <div className="w-[230px] bg-white p-3.5 rounded-2xl border border-slate-150 shadow-sm relative group hover:border-emerald-200 transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform">
                <BarChart3 size={22} className="stroke-[2.2]" />
              </div>
              <span className="text-[10px] font-bold text-teal-600 tracking-wider bg-teal-50 px-2 py-0.5 rounded-full mb-1">STEP 03</span>
              <h5 className="text-sm font-bold text-slate-800 mb-1">Waste Profiling</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                AI categorizes generated waste and estimates chemical component fractions.
              </p>
            </div>

            {/* Info: (20260527 - Luphia) Connecting Line & Arrow 3 */}
            <div className="flex-1 flex items-center justify-center px-2">
              <div className="h-0.5 bg-gradient-to-r from-teal-400 to-indigo-400 flex-1 relative max-w-[60px]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-4 h-4 bg-indigo-400 rounded-full flex items-center justify-center">
                  <ArrowRight size={10} className="text-white shrink-0" />
                </div>
              </div>
            </div>

            {/* Info: (20260527 - Luphia) Step 4 */}
            <div className="w-[230px] bg-sky-950 p-3.5 rounded-2xl border border-sky-900 shadow-md relative group hover:shadow-lg transition-all flex flex-col items-center text-center text-white">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                <Recycle size={22} className="stroke-[2.2]" />
              </div>
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider bg-sky-900/60 px-2 py-0.5 rounded-full mb-1">STEP 04</span>
              <h5 className="text-sm font-bold text-white mb-1">Smart Recovery</h5>
              <p className="text-[11px] text-sky-200 leading-relaxed">
                Matches analyzed byproducts with global buyers or local recycling loops.
              </p>
            </div>

          </div>

          {/* Info: (20260527 - Luphia) Bottom Alert/Value */}
          <div className="bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-250 flex items-center gap-3">
            <span className="text-xl shrink-0">💡</span>
            <div className="flex-1">
              <p className="text-xs leading-relaxed font-medium">
                <strong>Seamless Circular Integration:</strong> By tracking the entire lifecycle of materials in real time, the AI Tech Brain eliminates guesswork, turning potential waste into certified, high-value resources.
              </p>
            </div>
          </div>

        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#04</span>
          </div>
        </div>
      </div>
    </div>
  );
}
