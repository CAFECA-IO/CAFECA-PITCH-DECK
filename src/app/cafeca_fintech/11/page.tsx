import { Brain, Leaf, Briefcase, MonitorSmartphone, TrendingUp } from 'lucide-react';

export default function CafecaFintechSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative flex overflow-hidden">

      {/* Info: (20260315 - Luphia) Background Pattern */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-[80px] -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4"></div>

      {/* Info: (20260315 - Luphia) Left Axis - Title */}
      <div className="w-[35%] h-full bg-slate-900 p-12 flex flex-col justify-center relative shadow-2xl z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/50 border border-sky-700/50 text-sky-400 text-xs font-bold tracking-wider mb-8">
            <TrendingUp size={14} />
            REVENUE MODEL
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-white">
            CAFECA<br />
            <span className="text-sky-400">未來營收</span> 結構
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg mt-6">
            以高毛利、經常性收入為導向的多元商業模式，建立穩定且具備規模化成長潛力的永續收入生態系。
          </p>
        </div>
      </div>

      {/* Info: (20260315 - Luphia) Right Axis - 2x2 Grid */}
      <div className="flex-1 h-full p-12 bg-transparent flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-2 gap-6 h-[500px]">

          {/* Info: (20260315 - Luphia) 50% AI Model */}
          <div className="col-span-2 md:col-span-1 bg-white rounded-3xl p-8 border border-sky-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-sky-500"></div>
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <Brain size={160} />
            </div>

            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shadow-sm border border-sky-100 group-hover:scale-110 transition-transform">
                <Brain size={28} />
              </div>
              <div className="text-4xl font-black text-sky-600">40<span className="text-2xl ml-1">%</span></div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">人工智能模型訂閱費</h3>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">AI Model Subscription</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              提供費思，Green AI 串接與訂閱服務。
            </p>
          </div>

          {/* Info: (20260315 - Luphia) 30% Green Accounting */}
          <div className="col-span-2 md:col-span-1 bg-white rounded-3xl p-8 border border-emerald-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <Leaf size={160} />
            </div>

            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform">
                <Leaf size={28} />
              </div>
              <div className="text-4xl font-black text-emerald-600">10<span className="text-2xl ml-1">%</span></div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">綠色會計與持續審計</h3>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Green Audit Services</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              即時追蹤碳足跡與自動化核銷系統，協助企業應對日益嚴格的法規要求。
            </p>
          </div>

          {/* Info: (20260315 - Luphia) 10% Service Subscription */}
          <div className="col-span-2 md:col-span-1 bg-white rounded-3xl p-8 border border-indigo-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <MonitorSmartphone size={160} />
            </div>

            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100 group-hover:scale-110 transition-transform">
                <MonitorSmartphone size={28} />
              </div>
              <div className="text-4xl font-black text-indigo-600">40<span className="text-2xl ml-1">%</span></div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">金融科技服務訂閱費</h3>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Platform Subscription</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              面對金融機構，提供易用且高安全性的金融服務平台軟體訂閱。
            </p>
          </div>

          {/* Info: (20260315 - Luphia) 10% Tech Consulting */}
          <div className="col-span-2 md:col-span-1 bg-white rounded-3xl p-8 border border-orange-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <Briefcase size={160} />
            </div>

            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm border border-orange-100 group-hover:scale-110 transition-transform">
                <Briefcase size={28} />
              </div>
              <div className="text-4xl font-black text-orange-600">10<span className="text-2xl ml-1">%</span></div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">技術顧問</h3>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Technical Consulting</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              針對特大型企業或金融機構提供客製化 AI 技術導入架構建議。
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
