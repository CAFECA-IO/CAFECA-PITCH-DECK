'use client';

import { HelpCircle } from 'lucide-react';

const QA = [
  { id: 'q1', q: '真的完全免費嗎？有沒有隱藏費用？', a: '計畫期間的建置、教育訓練與輔導全由政府補助支應，會員廠不需付費。計畫結束後基礎功能仍永久免費，進階功能才另有訂閱方案，你可以選擇不用。' },
  { id: 'q2', q: '我們廠沒有數位化，連 ERP 都沒有，可以參加嗎？', a: '可以。系統支援直接上傳檔案，不需要串接 ERP。材質單、電費單掃描或拍照上傳都行，這正是設計給中小廠用的。' },
  { id: 'q3', q: '我沒有做過碳盤查，看得懂嗎？', a: '不需要碳盤查背景。系統會自動判讀與計算，你只要確認產出的數字對不對。公會辦的半天工作坊會實機帶你走一遍。' },
  { id: 'q4', q: '產出的護照，歐洲客戶會認嗎？', a: '格式對接歐盟 ESPR／CBAM 規範設計，並附完整資料軌跡供查證。實際採認仍取決於個別買方要求，我們會依買方回饋持續調整欄位。' },
  { id: 'q5', q: '廢料媒合要抽成嗎？', a: '計畫期間的媒合服務不抽成。實際交易由買賣雙方自行議價與簽約，平台只做分級與配對。' },
  { id: 'q6', q: '參加了以後可以退出嗎？', a: '可以。資料授權隨時可撤回，撤回後我們會停止使用你的資料。已產出的護照仍屬於你。' },
];

export default function IsunfaPwbSlide12() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-sm font-bold text-orange-500 tracking-widest">常見問題</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-7">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">現場最常被問的六題</h2>
      </div>

      <div className="z-10 px-16 grid grid-cols-2 gap-x-7 gap-y-5 flex-1">
        {QA.map((x) => (
          <div key={x.id} className="bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-sm">
            <div className="flex gap-3 mb-2.5">
              <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <h3 className="text-[17px] font-bold text-slate-800 leading-snug">{x.q}</h3>
            </div>
            <p className="text-[14.5px] text-slate-500 leading-relaxed pl-8">{x.a}</p>
          </div>
        ))}
      </div>

      <div className="h-10"></div>

    </div>
  );
}
