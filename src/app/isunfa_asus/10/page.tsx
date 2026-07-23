'use client';

import { Fingerprint, LayoutGrid, KeyRound, MailCheck, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function IsunfaAsusSlide10() {
  const caps = [
    { icon: LayoutGrid, title: 'App Launcher 應用啟動器', desc: '將 EIP 轉化為企業應用入口，一處啟動財會、碳會計與各式系統。' },
    { icon: KeyRound, title: 'SSO 單一登入', desc: '達成財會系統單一登入，一次認證即可全域通行，免重複帳密。' },
    { icon: MailCheck, title: '免密碼啟動連結', desc: 'Email 夾帶免密碼啟動連結，降低登入摩擦、提升存取效率。' },
    { icon: CreditCard, title: '晶片卡靠卡認證', desc: '實體員工識別證靠卡即完成身分驗證，串接取件、扣款與報到。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-cyan-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-20 w-full px-16 pt-11 pb-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-orange-500 tracking-widest">05</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Integration Highlight</span>
          </div>
          <span className="text-xs font-bold text-slate-300">整合亮點 1 / 2</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight mt-3">身分認證整合與 SSO / App Launcher</h2>
        <p className="text-sm text-slate-500 mt-1.5 font-medium">以 CAFECA 數位身分證為信任核心，讓「認證一次、全域通行」</p>
      </div>

      <div className="z-20 flex-1 grid grid-cols-12 gap-6 px-16 pb-10">
        {/* Left concept */}
        <div className="col-span-5 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-lg flex flex-col">
          <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-4 backdrop-blur-sm">
            <Fingerprint className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black mb-1">CAFECA 數位身分證</h3>
          <p className="text-[13px] text-blue-50 leading-relaxed mb-5">Web3 去中心化身分，為每位人員簽發不可偽造的專屬憑證。</p>

          <div className="space-y-2.5 mt-auto">
            {['認證一次', 'EIP 全域通行', '存取行為上鏈可稽核'].map((t, i) => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">{i + 1}</div>
                <span className="text-sm font-semibold">{t}</span>
                {i < 2 && <ArrowRight className="w-3.5 h-3.5 text-blue-200 ml-auto" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right capabilities */}
        <div className="col-span-7 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3 flex-1">
            {caps.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5 border border-blue-100">
                  <c.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1.5">{c.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <p className="text-[13px] font-medium text-slate-600">效益：提升系統存取效率與整合體驗，同時以區塊鏈存證強化資安可稽核性。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
