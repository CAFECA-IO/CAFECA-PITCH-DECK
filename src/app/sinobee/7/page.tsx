import { Briefcase, CreditCard, Cpu, ShieldCheck, PieChart, Activity } from 'lucide-react';

export default function SinoBeeSlide7() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden flex flex-col justify-center border border-slate-200">

      {/* Info: (20260319 - Luphia) Header */}
      <div className="absolute top-16 left-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
          <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm">Business Model</span>
        </div>

        <h2 className="text-5xl font-extrabold text-slate-800 leading-tight">
          HaaS <span className="text-3xl text-slate-400 font-light ml-3">Hive-as-a-Service 分級定價</span>
        </h2>
      </div>

      <div className="px-24 mt-32 grid grid-cols-12 gap-8 h-[450px]">

        {/* Info: (20260319 - Luphia) Left Column - Compute Leasing Concept */}
        <div className="col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg flex-1 flex flex-col relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none transition-transform group-hover:scale-110 duration-500">
              <Briefcase size={300} />
            </div>
            <div className="relative z-10 w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100">
              <Briefcase size={32} className="text-amber-500" />
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-slate-800 mb-3">算力租賃 (Compute Leasing)</h3>
            <p className="relative z-10 text-slate-600 leading-relaxed text-sm mb-6">
              企業不需自建高昂的 GPU 機房與伺服器，直接向 SinoBee 網絡按「任務數量」或「算力時數」租用動態運算資源，實現 OPEX 取代 CAPEX 的輕資產轉型。
            </p>

            <div className="relative z-10 mt-auto bg-slate-50 rounded-2xl p-5 border border-slate-200 flex items-start gap-4">
              <div className="bg-emerald-100 p-2 rounded-xl mt-0.5"><PieChart size={24} className="text-emerald-600" /></div>
              <div>
                <h4 className="font-bold text-slate-700 text-[15px] mb-1">Broker Nodes (交易蜂)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  內建的 FinOps 智控機制，將自動為客戶精算最佳的「邊緣/雲端」成本池組合，保障企業最大化資金投報率。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info: (20260319 - Luphia) Right Column - Pricing Tiers */}
        <div className="col-span-8 flex gap-6">

          {/* Info: (20260319 - Luphia) Eco Tier */}
          <div className="flex-1 bg-gradient-to-b from-white to-slate-50 rounded-3xl p-8 border-2 border-slate-200 hover:border-amber-300 shadow-md group transition-all flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center border border-amber-200 group-hover:scale-110 transition-transform">
                <Cpu size={32} className="text-amber-600" />
              </div>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-500 font-bold text-[10px] uppercase tracking-wider rounded-full border border-slate-200">
                Cost-Effective
              </span>
            </div>
            <h3 className="text-3xl font-black text-slate-800 mb-2">Eco Tier <span className="text-sm text-slate-400 font-medium ml-2">經濟層</span></h3>
            <div className="text-4xl font-mono font-extrabold text-amber-500 mb-6 drop-shadow-sm">$0.05 <span className="text-sm text-slate-400 font-sans tracking-normal">/ hr</span></div>

            <p className="text-slate-600 leading-relaxed font-medium mb-8">
              全數調用 ASUS GX10 邊緣算力，最適合對延遲容忍度較高的巨量資料清洗、批次處理與背景分析任務。
            </p>

            <ul className="space-y-4 mt-auto mb-4 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-amber-500" /> 100% 邊緣分散式架構</li>
              <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-amber-500" /> 基礎平行資料處理池</li>
              <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-amber-500" /> 最精簡的成本保障機制</li>
            </ul>
          </div>

          {/* Info: (20260319 - Luphia) Enterprise Tier */}
          <div className="flex-1 bg-gradient-to-b from-slate-900 to-neutral-950 rounded-3xl p-8 border-2 border-cyan-500/50 shadow-2xl relative overflow-hidden group transition-all flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform">
                <Activity size={32} className="text-cyan-400" />
              </div>
              <span className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 font-bold text-[10px] uppercase tracking-wider rounded-full border border-cyan-500/30">
                Mission Critical
              </span>
            </div>
            <h3 className="text-3xl font-black text-white mb-2 relative z-10">Enterprise Tier <span className="text-sm text-slate-400 font-medium ml-2">企業層</span></h3>
            <div className="text-4xl font-mono font-extrabold text-cyan-400 mb-6 drop-shadow-sm relative z-10">Pay-as-you-go</div>

            <p className="text-slate-300 leading-relaxed font-light mb-8 relative z-10">
              動態啟用 TWAI 雲端巨型模型與高端 GPU 資源，保證超低延遲與極限峰值運算能力，專為關鍵核心業務打造。
            </p>

            <ul className="space-y-4 mt-auto mb-4 text-sm text-slate-300 font-light relative z-10">
              <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-cyan-400" /> 動態 TWAI 公有雲無縫溢流</li>
              <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-cyan-400" /> 企業級即時超低延遲保障</li>
              <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-cyan-400" /> 核心系統 SLA 99.99% 承諾</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Info: (20260319 - Luphia) Footer */}
      <div className="absolute bottom-8 left-24 right-24 flex justify-between items-center text-slate-400 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <CreditCard size={14} className="text-amber-500" />
          Business Model
        </div>
        <div>SinoBee Pitch Deck</div>
      </div>
    </div>
  );
}
