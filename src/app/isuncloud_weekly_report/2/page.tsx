import { Building2, TrendingUp, MapPin, Briefcase } from 'lucide-react';

export default function IsuncloudWeeklyReportSlide2() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-gray-200">

      {/* Info: (20260515 - Luphia) Background Gradients */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[70rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#38bdf8] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="px-16 pt-12 relative z-10 flex-shrink-0">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-sky-500 rounded-full"></div>
          <span className="text-sky-600 font-bold tracking-[0.2em] uppercase text-sm">Weekly Update</span>
        </div>
        <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
          2026 Week 20 營運週報
        </h1>
        <p className="text-xl text-slate-500 mt-2">iSunFA 企業用戶成長與中南部業務拓展</p>
      </div>

      <div className="flex-1 px-16 pt-6 pb-14 relative z-10 flex flex-col gap-6">
        {/* Info: (20260515 - Luphia) KPI Section */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-6">
            <div className="p-4 bg-sky-50 text-sky-600 rounded-2xl">
              <Building2 size={40} />
            </div>
            <div>
              <div className="text-slate-500 text-base font-medium mb-1">iSunFA 企業總數</div>
              <div className="text-5xl font-black text-slate-800">2,774<span className="text-xl text-slate-400 font-medium ml-2">家</span></div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm flex items-center gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl relative z-10">
              <TrendingUp size={40} />
            </div>
            <div className="relative z-10">
              <div className="text-slate-500 text-base font-medium mb-1">本週新增企業用戶</div>
              <div className="text-5xl font-black text-emerald-600">+164<span className="text-xl text-emerald-400 font-medium ml-2">家</span></div>
            </div>
          </div>
        </div>

        {/* Info: (20260515 - Luphia) Action Items Section */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-indigo-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-800">南部科學園區 (STSP)</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed flex-1">
              前往南部科學園區，深入洽談<span className="font-semibold text-indigo-600">數位原料護照</span>與<span className="font-semibold text-indigo-600">數位產品護照</span>的合作機會，推動高科技產業鏈的溯源管理。
            </p>
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">科技業合作</span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">數位護照</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-amber-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-800">南部金屬扣件聚落</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed flex-1">
              實地拜訪臺南歸仁至高雄岡山一帶的傳統金屬扣件產業聚落。該區域涵蓋約 <span className="font-bold text-amber-600 text-xl">900 - 1000 家</span> 潛在企業客戶，是推廣 iSunFA 的重點戰略區域。
            </p>
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-lg text-sm font-medium">聚落拓展</span>
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-lg text-sm font-medium">供應鏈導入</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 w-full px-16 flex justify-between text-gray-400 text-xs tracking-widest uppercase font-medium z-10">
        <div>2026 Week 20 Report</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-sky-500"></div>
          2026 iSunCloud
        </div>
      </div>
    </div>
  );
}
