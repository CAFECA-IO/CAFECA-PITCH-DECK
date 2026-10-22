'use client';

import { Upload, Cpu, QrCode, ArrowRight, FileText } from 'lucide-react';

export default function IsunfaPwbSlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/4 -top-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[600px] h-[600px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-sm font-bold text-blue-600 tracking-widest">怎麼運作</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-10">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">
          你只要做第一步，<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">剩下交給系統</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex items-stretch gap-5 flex-1">

        <div className="flex-1 bg-white border-2 border-orange-300 rounded-3xl p-8 flex flex-col shadow-sm relative">
          <div className="absolute -top-4 left-8 bg-orange-500 text-white text-sm font-black px-4 py-1.5 rounded-full shadow">你做這個</div>
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-5 mt-2">
            <Upload className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-[26px] font-black text-slate-800 mb-3">上傳現有文件</h3>
          <p className="text-[15px] text-slate-500 leading-relaxed mb-4">
            都是你本來就有的東西，不用另外做表。
          </p>
          <div className="space-y-2 mt-auto">
            {['材質證明單', 'BOM 表 / 出貨明細', '電費單、水費單', '檢測報告（如有）'].map((x) => (
              <div key={x} className="flex items-center gap-2 text-[15px] text-slate-600">
                <FileText className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center"><ArrowRight className="w-8 h-8 text-slate-300" /></div>

        <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 flex flex-col shadow-lg relative">
          <div className="absolute -top-4 left-8 bg-slate-600 text-white text-sm font-black px-4 py-1.5 rounded-full shadow">系統自動做</div>
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-5 mt-2">
            <Cpu className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-[26px] font-black text-white mb-3">AI 判讀與計算</h3>
          <p className="text-[15px] text-slate-300 leading-relaxed mb-4">
            自動讀懂你的文件，對照國際排放係數計算。
          </p>
          <div className="space-y-2 mt-auto">
            {['辨識材質與合金成分', '比對國際排放係數', '計算碳足跡與再生料比例', '產生可查證的資料軌跡'].map((x) => (
              <div key={x} className="flex items-center gap-2 text-[15px] text-slate-300">
                <span className="text-orange-400 font-bold flex-shrink-0">·</span>
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center"><ArrowRight className="w-8 h-8 text-slate-300" /></div>

        <div className="flex-1 bg-white border-2 border-emerald-300 rounded-3xl p-8 flex flex-col shadow-sm relative">
          <div className="absolute -top-4 left-8 bg-emerald-500 text-white text-sm font-black px-4 py-1.5 rounded-full shadow">你拿到這個</div>
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-5 mt-2">
            <QrCode className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-[26px] font-black text-slate-800 mb-3">數位產品護照</h3>
          <p className="text-[15px] text-slate-500 leading-relaxed mb-4">
            直接給客戶的檔案與 QR-Code，中英文對照。
          </p>
          <div className="space-y-2 mt-auto">
            {['PDF 履歷文件', '可掃描 QR-Code', '中英文雙語版本', '逐批次可重複產出'].map((x) => (
              <div key={x} className="flex items-center gap-2 text-[15px] text-slate-600">
                <span className="text-emerald-500 font-bold flex-shrink-0">▸</span>
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="h-12"></div>

    </div>
  );
}
