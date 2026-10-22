'use client';

import { Gift, Sparkles, Recycle } from 'lucide-react';

export default function IsunfaPwbSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center px-16">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500 shadow-lg mb-9">
          <Gift className="w-6 h-6 text-white" />
          <span className="text-xl font-black text-white tracking-wide">政府計畫補助 · 會員廠免費導入</span>
        </div>

        <h2 className="text-[58px] font-black leading-[1.2] text-slate-800 mb-10">
          我們幫你把這件事<br />
          變成<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">上傳檔案就好</span>
        </h2>

        <div className="grid grid-cols-2 gap-7 w-full max-w-[980px]">
          <div className="bg-white border-2 border-orange-200 rounded-3xl p-9 text-left shadow-sm">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-5">
              <Sparkles className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-xs font-black text-orange-500 tracking-widest uppercase mb-2">好處一</div>
            <h3 className="text-[30px] font-black text-slate-800 mb-3">自動產出產品護照</h3>
            <p className="text-[17px] text-slate-500 leading-relaxed">
              上傳材質單、BOM 表與電費單，AI 自動整理成買方看得懂的
              <span className="font-bold text-slate-700">碳足跡與再生料履歷</span>，附 QR-Code。
            </p>
          </div>

          <div className="bg-white border-2 border-emerald-200 rounded-3xl p-9 text-left shadow-sm">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-5">
              <Recycle className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-xs font-black text-emerald-600 tracking-widest uppercase mb-2">好處二</div>
            <h3 className="text-[30px] font-black text-slate-800 mb-3">廢料幫你找買家</h3>
            <p className="text-[17px] text-slate-500 leading-relaxed">
              切削屑、酸洗廢液、廢模具，AI 依成分分級後
              <span className="font-bold text-slate-700">媒合給願意收的下游廠</span>，清運成本變收入。
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
