'use client';

import { Sparkles, FileSignature, Wallet, Code2, PackageCheck, Coins, Server, BadgeCheck, HandCoins } from 'lucide-react';

export default function Pmis20060723Slide11() {
  const steps = [
    { n: 1, icon: FileSignature, title: '簽約', desc: '確認範圍與需求，完成合約簽署', pay: false },
    { n: 2, icon: Wallet, title: '收取第一期款', desc: '啟動開發之簽約款', pay: '第一期款' },
    { n: 3, icon: Code2, title: '客製化開發', desc: '依現場流程調整與擴充模組', pay: false },
    { n: 4, icon: PackageCheck, title: '軟體交付與驗收', desc: '交付系統並完成軟體驗收', pay: false },
    { n: 5, icon: Coins, title: '收取第二期款', desc: '軟體驗收通過之交付款', pay: '第二期款' },
    { n: 6, icon: Server, title: '採購硬體與現場安裝', desc: '採購伺服器並完成地端部署', pay: false },
    { n: 7, icon: BadgeCheck, title: '最終驗收', desc: '軟硬體整體上線與最終驗收', pay: false },
    { n: 8, icon: HandCoins, title: '交付第三期款', desc: '最終驗收通過之尾款', pay: '第三期款' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="z-10 px-20 pt-12 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          Service Flow
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-800 leading-tight">
          服務流程，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">八步驟・分三期收款</span>
        </h2>
      </div>

      <div className="z-10 flex-1 px-16 pb-6 grid grid-cols-4 grid-rows-2 gap-5">
        {steps.map((s) => {
          const Icon = s.icon;
          const pay = Boolean(s.pay);
          return (
            <div
              key={s.n}
              className={`relative rounded-2xl border shadow-sm p-5 flex flex-col ${pay ? 'bg-orange-50/60 border-orange-300' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${pay ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon size={22} />
                </div>
                <span className={`text-2xl font-black tabular-nums ${pay ? 'text-orange-300' : 'text-slate-200'}`}>
                  {s.n.toString().padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-[17px] font-black text-slate-800 leading-tight">{s.title}</h3>
              <p className="text-[12.5px] text-slate-500 leading-snug mt-1.5 flex-1">{s.desc}</p>
              {pay && (
                <span className="mt-2 self-start inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500 text-white text-[11px] font-bold">
                  <Coins size={12} />
                  {s.pay}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="z-10 px-20 py-4 flex items-center justify-center gap-6 text-sm text-slate-500">
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-orange-500"></span>收款節點（三期）</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-slate-200"></span>交付／執行節點</span>
      </div>
    </div>
  );
}
