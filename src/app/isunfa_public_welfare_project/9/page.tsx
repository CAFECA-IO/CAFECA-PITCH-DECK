'use client';

import { Factory, Cpu, PackageCheck, ArrowRight, Microscope, Route, Leaf, QrCode } from 'lucide-react';

export default function IsunfaPwpSlide9() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/3 -top-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -left-1/4 bottom-0 w-[600px] h-[600px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">AI × DPP Fusion Mechanism</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          AI 與數位產品護照的{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-orange-500">三段融合機制</span>
        </h2>
      </div>

      {/* Info: (20260819 - Luphia) Flow Diagram */}
      <div className="z-10 px-16 mb-7">
        <div className="flex items-stretch justify-between gap-4">

          <div className="flex-1 bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <Factory className="w-4 h-4 text-slate-500" />
              <span className="text-[13px] font-bold text-slate-800">A 廠：產出金屬廢料</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">上傳 XRF 光譜 / 物料成分數據與產出批次紀錄</p>
          </div>

          <div className="flex items-center"><ArrowRight className="w-6 h-6 text-slate-300" /></div>

          <div className="flex-[1.2] bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl px-5 py-4 shadow-lg">
            <div className="flex items-center gap-2 mb-1.5">
              <Cpu className="w-4 h-4 text-orange-400" />
              <span className="text-[13px] font-bold text-white">AI DPP 驗證與媒合引擎</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">品質分級 · 最佳循環路徑推薦 · 減碳量自動計算</p>
          </div>

          <div className="flex items-center"><ArrowRight className="w-6 h-6 text-slate-300" /></div>

          <div className="flex-1 bg-white border-2 border-emerald-200 rounded-2xl px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <PackageCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-[13px] font-bold text-slate-800">B 廠：採購再生原料</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">取得可溯源綠色憑證與再生料比例證明</p>
          </div>

        </div>
      </div>

      {/* Info: (20260819 - Luphia) 3 Mechanisms */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 flex-1">

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-400"></div>
          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center">
              <Microscope className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <div className="text-[10px] font-black text-orange-500 tracking-widest uppercase">Mechanism 01</div>
              <h3 className="text-[15px] font-bold text-slate-800 leading-tight">廢料智慧鑑定與品質分級</h3>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
          <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
            結合金屬中心檢測數據庫，建立金屬屑料與廢液之成分與品質標準資料集。
          </p>
          <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
            <div className="text-[11px] font-bold text-orange-700 mb-1.5">自動等級標註</div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              工廠上傳 XRF／光譜儀數據後，AI Agent 自動比對物理／化學特性，劃分
              <span className="font-bold">循環等級 A／B／C</span>，並即時寫入該批次 DPP。
            </p>
          </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-400"></div>
          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Route className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">Mechanism 02</div>
              <h3 className="text-[15px] font-bold text-slate-800 leading-tight">跨廠區動態媒合引擎</h3>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
          <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
            依「地理位置、品質等級、產出頻率、買方需求」進行最佳化媒合，降低跨區運輸之二次碳排。
          </p>
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
            <div className="text-[11px] font-bold text-emerald-700 mb-1.5">零廢製造生態系</div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              促成 <span className="font-bold">A 廠廢切削屑 ➔ B 廠再生鋁錠 ➔ C 廠低碳產品原料</span> 之連續鏈結，
              使廢棄物在生態系內完成多段加值。
            </p>
          </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-400"></div>
          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
              <Leaf className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <div className="text-[10px] font-black text-blue-500 tracking-widest uppercase">Mechanism 03</div>
              <h3 className="text-[15px] font-bold text-slate-800 leading-tight">碳足跡與碳扣抵自動計算</h3>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
          <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
            AI 自動計算該批次再生原料相較原生礦石／原料所節省之範疇三（Scope 3）碳排放量。
          </p>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-700 mb-1.5">
              <QrCode className="w-3.5 h-3.5" />
              國際合規護照 QR-Code
            </div>
            <ul className="text-[11px] text-slate-600 leading-relaxed space-y-0.5">
              <li>· 再生資材比例（Recycled Content %）</li>
              <li>· 物料可追溯性（Traceability）</li>
              <li>· 減碳履歷與資安檢測認證</li>
            </ul>
          </div>
          </div>
        </div>

      </div>

      <div className="h-8"></div>

    </div>
  );
}
