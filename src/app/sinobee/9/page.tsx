import { TrendingDown, Rocket, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function SinoBeeSlide9() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden flex flex-col justify-center border border-slate-200">

      {/* Info: (20260319 - Luphia) Background Graphic */}
      <div className="absolute right-[-5%] bottom-[-10%] opacity-5 text-slate-400 pointer-events-none transform -rotate-12">
        <Rocket size={600} strokeWidth={0.5} />
      </div>

      <div className="relative z-10 px-24 h-full flex flex-col justify-center">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
          <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm">Competitive Advantage</span>
        </div>

        <h2 className="text-5xl font-extrabold text-slate-800 leading-tight mb-16">
          競爭優勢 <span className="text-3xl text-slate-400 font-light ml-3">Why SinoBee?</span>
        </h2>

        <div className="space-y-8 max-w-5xl">

          {/* Info: (20260319 - Luphia) Point 1 */}
          <div className="flex items-center gap-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-emerald-50 rounded-[1.25rem] flex items-center justify-center shrink-0 border border-emerald-100">
              <TrendingDown size={40} className="text-emerald-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">極致的成本效益</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                「邊緣常駐 + 雲端按需」模型打破了傳統算力租賃的僵局。<strong className="text-emerald-600">大幅降低整體 AI 營運與推論成本達 60% 以上</strong>，讓資源刀口精準花在刀刃上。
              </p>
            </div>
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-4">
              <CheckCircle2 size={32} className="text-emerald-500" />
            </div>
          </div>

          {/* Info: (20260319 - Luphia) Point 2 */}
          <div className="flex items-center gap-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-cyan-50 rounded-[1.25rem] flex items-center justify-center shrink-0 border border-cyan-100">
              <Rocket size={40} className="text-cyan-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">無上限的擴展力 <span className="text-base text-cyan-600 font-bold bg-cyan-50 px-2 py-1 rounded ml-2">Infinite Scalability</span></h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                架構不受實體機房限制。從 <strong className="text-slate-700">10 台 ASUS GX10</strong> 的輕量初始網格，到瞬間連線調用 <strong className="text-cyan-600">10,000 個雲端 GPU</strong>，實現平滑過渡無縫擴容。
              </p>
            </div>
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-4">
              <CheckCircle2 size={32} className="text-cyan-500" />
            </div>
          </div>

          {/* Info: (20260319 - Luphia) Point 3 */}
          <div className="flex items-center gap-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-amber-50 rounded-[1.25rem] flex items-center justify-center shrink-0 border border-amber-100">
              <ShieldAlert size={40} className="text-amber-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">絕對的系統穩定性</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                去中心化架構自帶極高容錯率（Fault Tolerance）。即使數十台邊緣節點離線，<strong className="text-amber-600">Queen 將瞬間把任務熱轉移至其他健康節點</strong>，使用者毫無體感中斷。
              </p>
            </div>
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-4">
              <CheckCircle2 size={32} className="text-amber-500" />
            </div>
          </div>

        </div>

      </div>

      {/* Info: (20260319 - Luphia) Footer */}
      <div className="absolute bottom-8 left-24 right-24 flex justify-between items-center text-slate-400 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
          Why SinoBee
        </div>
        <div>SinoBee Pitch Deck</div>
      </div>
    </div>
  );
}
