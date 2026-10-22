'use client';

import { XCircle, Clock, Wallet, RefreshCcw } from 'lucide-react';

export default function IsunfaPwbSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 top-0 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-sm font-bold text-orange-500 tracking-widest">現在的做法</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">
          找顧問做一次盤查？<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">三個問題</span>
        </h2>
      </div>

      <div className="z-10 px-16 grid grid-cols-3 gap-7 flex-1">
        {[
          { id: 'p1', icon: Wallet, t: '太貴', d: '委外碳盤查顧問服務動輒數十萬元起跳，對中小廠是一筆不小的支出，做一次就要考慮很久。', tag: '成本' },
          { id: 'p2', icon: Clock, t: '太慢', d: '從資料盤點、彙整到出報告，往往要好幾個月。等報告出來，客戶的訂單早就決定了。', tag: '時間' },
          { id: 'p3', icon: RefreshCcw, t: '只能做一次', d: '報告是那個時間點的快照。但買方要的是「這一批貨」的履歷，下一批就得重做。', tag: '無法常態化' },
        ].map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.id} className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-5">
                <Icon className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-xs font-black text-orange-500 tracking-widest uppercase mb-2">{p.tag}</div>
              <h3 className="text-[30px] font-black text-slate-800 mb-4">{p.t}</h3>
              <p className="text-[16px] text-slate-500 leading-relaxed">{p.d}</p>
            </div>
          );
        })}
      </div>

      <div className="z-10 px-16 py-10">
        <div className="bg-slate-800 rounded-3xl px-9 py-6 flex items-center gap-5">
          <XCircle className="w-8 h-8 text-orange-400 flex-shrink-0" />
          <p className="text-xl text-white font-medium leading-relaxed">
            問題不在顧問做得好不好，而是
            <span className="font-black text-orange-400">「一次性的人工作業」對不上「逐批次的常態需求」</span>。
          </p>
        </div>
      </div>

    </div>
  );
}
