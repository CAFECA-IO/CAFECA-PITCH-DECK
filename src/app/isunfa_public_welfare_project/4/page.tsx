'use client';

import { Target, FileCheck2, Repeat2, HandHeart, ArrowRight } from 'lucide-react';

export default function IsunfaPwpSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -bottom-1/4 w-[800px] h-[800px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -top-1/4 w-[800px] h-[800px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">Goal &amp; Model</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-sm mb-4">
          <Target className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-semibold text-emerald-700">計畫目標與推動模式</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight text-slate-800">
          雙軸並進：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">法遵護照</span> ×
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500"> 零廢循環</span>
        </h2>
      </div>

      {/* Info: (20260819 - Luphia) Two Axis */}
      <div className="z-10 px-16 grid grid-cols-2 gap-6">
        <div className="bg-white border border-orange-200 rounded-3xl p-7 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-orange-300"></div>
          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center">
              <FileCheck2 className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <div className="text-[10px] font-black text-orange-500 tracking-widest uppercase">Axis A · 合規賦能</div>
              <h3 className="text-xl font-bold text-slate-800">AI 數位產品護照（DPP）</h3>
            </div>
          </div>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            工廠上傳材質單、BOM 表、能源單據與檢測數據，AI 自動解析並生成符合國際標準之 DPP 與碳足跡履歷，
            以 QR-Code 形式交付國際買方，直接通過綠色供應鏈審查。
          </p>
        </div>

        <div className="bg-white border border-emerald-200 rounded-3xl p-7 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-300"></div>
          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Repeat2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">Axis B · 零廢製造</div>
              <h3 className="text-xl font-bold text-slate-800">跨廠副產物循環媒合</h3>
            </div>
          </div>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            AI 依成分、品質等級、地理位置與產出頻率，自動媒合「A 廠廢料 → B 廠再生原料」，
            形成跨廠區的零廢製造聯網，將廢棄物處置成本轉為變現收益。
          </p>
        </div>
      </div>

      {/* Info: (20260819 - Luphia) Ecosystem Flow */}
      <div className="z-10 px-16 mt-6 flex-1">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm h-full flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            <HandHeart className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-bold text-slate-700 tracking-wide">公益型生態系推動模式（四段式）</span>
          </div>

          <div className="flex items-center justify-between flex-1">
            {[
              { id: 'step1', no: '01', title: '法人與公會動員', desc: '由金屬中心與螺絲公會發函、辦理宣導會，鏈結北中南金屬產業聚落之會員廠。', color: 'orange' },
              { id: 'step2', no: '02', title: '免費 / 低門檻導入', desc: '資源弱勢在地中小廠零費用取得雲端 DPP 服務，公益輔導完成首本護照。', color: 'emerald' },
              { id: 'step3', no: '03', title: '資料回流訓練模型', desc: '去識別化後之材質與廢料數據回饋領域型模型，形成正向循環。', color: 'blue' },
              { id: 'step4', no: '04', title: '開源釋出與擴散', desc: '核心模型與中介平台開源，供其他資服業者接續開發應用服務。', color: 'indigo' },
            ].map((s, i, arr) => (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center text-center px-3 flex-1">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-sm mb-3 ${
                    s.color === 'orange' ? 'border-orange-400 text-orange-500 bg-orange-50' :
                    s.color === 'emerald' ? 'border-emerald-400 text-emerald-600 bg-emerald-50' :
                    s.color === 'blue' ? 'border-blue-400 text-blue-500 bg-blue-50' :
                    'border-indigo-400 text-indigo-500 bg-indigo-50'
                  }`}>{s.no}</div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1.5">{s.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 px-16 py-5">
        <p className="text-center text-[13px] text-slate-500 font-medium">
          目標：計畫期間內完成 <span className="font-black text-orange-500">300+ 家工廠</span> DPP 建置，
          並促成 <span className="font-black text-emerald-600">15% 以上</span> 金屬廢料轉化為循環再利用資材。
        </p>
      </div>

    </div>
  );
}
