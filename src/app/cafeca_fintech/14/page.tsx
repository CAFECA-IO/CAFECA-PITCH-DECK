'use client';

import { Users, Briefcase, Cpu, Factory, LineChart } from 'lucide-react';

export default function CafecaFintechSlide14() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden flex flex-col justify-center">

      {/* Info: (20260510 - Luphia) Background Elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full px-16 pt-10 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-1 bg-sky-600 rounded-full"></div>
              <span className="text-sky-700 font-bold tracking-[0.2em] uppercase text-sm">Core Team</span>
            </div>
            <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
              核心團隊
            </h1>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="bg-sky-100 p-2.5 rounded-xl text-sky-600">
              <Users size={28} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Founders</div>
              <div className="text-xl font-extrabold text-slate-800">跨領域專業團隊</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex-1 px-16 pb-12">
        <div className="grid grid-cols-2 gap-8 h-full">

          {/* Info: (20260510 - Luphia) Member 1: 張智崴 */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">張智崴 <span className="text-sky-600 ml-2">Co-founder & CEO</span></h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">環境工程 / 資訊科技背景</span>
              </div>
              <div className="bg-sky-50 p-3 rounded-2xl text-sky-600 shadow-inner">
                <Cpu size={24} />
              </div>
            </div>
            <p className="text-slate-600 text-base leading-relaxed flex-1 text-justify">
              將金融合規與物理碳排代碼化的系統架構師，具備豐富的金融科技實戰經驗與邊緣運算核心技術，參與臺灣、阿曼、中國國家級大型運算平台建設。受成功大學環境工程學系前系主任蔡俊鴻教授指導與號召，致力於推動綠色產業生態技術。超過十年以上的開源社群深耕，致力於以有趣的方式揭露政府資料，促進民眾與政府的溝通。
            </p>
          </div>

          {/* Info: (20260510 - Luphia) Member 2: 梁紫涵 */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">梁紫涵 <span className="text-emerald-600 ml-2">Co-founder & PE</span></h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">化學工程背景</span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600 shadow-inner">
                <Briefcase size={24} />
              </div>
            </div>
            <p className="text-slate-600 text-base leading-relaxed flex-1 text-justify">
              參與臺灣杉二號開發，提出關鍵區塊鏈技術架構規劃，專長於數據分析。專注於系統底層邏輯與架構設計，並致力於將複雜技術落地應用。期望透過資訊科技打造具備信任與韌性的數位基礎設施，解決真實世界的挑戰，讓社會運作更加透明與永續。
            </p>
          </div>

          {/* Info: (20260510 - Luphia) Member 3: 張銀玲 */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">張銀玲 <span className="text-indigo-600 ml-2">Co-founder</span></h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">20 年深厚銀行資歷</span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600 shadow-inner">
                <LineChart size={24} />
              </div>
            </div>
            <p className="text-slate-600 text-base leading-relaxed flex-1 text-justify">
              精通企業財會語言，具備權威性的金融實務經驗。因深刻體會到傳統企業在財務報表產出、審計流程上的耗時與低效，以及全球綠色金融來的龐大合規壓力，成為創立公司的核心動機。
            </p>
          </div>

          {/* Info: (20260510 - Luphia) Member 4: 張智傑 */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">張智傑 <span className="text-amber-600 ml-2">Co-founder</span></h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">重工業與結構工程背景</span>
              </div>
              <div className="bg-amber-50 p-3 rounded-2xl text-amber-600 shadow-inner">
                <Factory size={24} />
              </div>
            </div>
            <p className="text-slate-600 text-base leading-relaxed flex-1 text-justify">
              擁有深厚的鋼鐵結構工程底蘊，熟稔重型機械運作、政府工安環保法規與永續工程科學。在重工業與製造業的最前線，親自參與過高碳排產業的運作與合規流程，以及多項重要地標建築建設工程。
            </p>
          </div>

        </div>
      </div>

      {/* Info: (20260510 - Luphia) Footer */}
      <div className="absolute bottom-4 left-0 w-full px-16 flex justify-between text-slate-400 text-xs tracking-widest uppercase font-medium">
        <div>Confidential</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-sky-400"></div>
          2026 CAFECA FINTECH
        </div>
      </div>

    </div>
  );
}
