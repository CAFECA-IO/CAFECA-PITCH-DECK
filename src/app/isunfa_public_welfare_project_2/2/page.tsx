'use client';

import { HeartHandshake, Gift, Clock3, Sparkles, Crown, FileSignature, DoorOpen, MessagesSquare, Share2, ShieldCheck } from 'lucide-react';

export default function IsunfaPwp2Slide2() {
  const benefits = [
    {
      id: 'b1',
      icon: Gift,
      title: '零成本數位升級',
      desc: '開發由政府補助支應、地端設備由 CAFECA 自籌——基金會不出資、不寫程式，即獲得涵蓋人事、行政、會計與 ESG 報告的專屬 AI 系統，計畫導入場域可永久使用。',
      tint: 'bg-orange-50',
      ink: 'text-orange-600',
      ring: 'border-orange-200',
      bar: 'bg-orange-400',
    },
    {
      id: 'b2',
      icon: Clock3,
      title: '把時間還給服務',
      desc: '核銷、徵信報表、公文與人事排班由 AI 代勞，行政文書工時預期減半；同仁把時間留給服務對象，志工排班與時數統計不再靠紙本與群組接力。',
      tint: 'bg-emerald-50',
      ink: 'text-emerald-600',
      ring: 'border-emerald-200',
      bar: 'bg-emerald-400',
    },
    {
      id: 'b3',
      icon: ShieldCheck,
      title: '隱私與專業不妥協',
      desc: '人事薪資與財務資料地端保存、永不出機構；AI 只產草稿，帳務由會計、對外報告由主管簽核。善款帳務自動勾稽，勸募法遵與透明度同步升級。',
      tint: 'bg-blue-50',
      ink: 'text-blue-600',
      ring: 'border-blue-200',
      bar: 'bg-blue-400',
    },
    {
      id: 'b4',
      icon: Crown,
      title: '成為社福 AI 的定義者',
      desc: '基金會的營運知識將寫入全國第一個開源社福模型 FAITH；AI 更把服務成效轉為 ESG 影響力報告，讓社會大眾看見貴會創造的正面影響力。',
      tint: 'bg-rose-50',
      ink: 'text-rose-600',
      ring: 'border-rose-200',
      bar: 'bg-rose-400',
    },
  ];

  const asks = [
    {
      id: 'a1',
      icon: FileSignature,
      title: '擔任聯合提案單位',
      desc: '簽署合作意向書（115/9/18 送件前），提供基本資料，並視需要出席審查會議',
      effort: '一次性',
    },
    {
      id: 'a2',
      icon: DoorOpen,
      title: '開放示範場域',
      desc: '提供全台服務據點作為首波實證場域，開放行政與帳務流程供需求訪談',
      effort: 'M1–M4',
    },
    {
      id: 'a3',
      icon: MessagesSquare,
      title: '領域知識共建',
      desc: '人事、行政與會計同仁參與訪談、試用與回饋（每據點每月約數小時，不影響服務）',
      effort: '全程',
    },
    {
      id: 'a4',
      icon: Share2,
      title: '社福網絡動員',
      desc: '協助向姊妹組織與合作聯盟推薦，共同達成 100 個場域的公益擴散',
      effort: 'M4–M8',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
        <span className="text-xs font-mono text-rose-500 uppercase tracking-widest">Partnership Value</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-[72px] pb-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-3">
          <HeartHandshake className="w-4 h-4 text-rose-500" />
          <span className="text-sm font-semibold text-rose-600">給唐氏症基金會的合作邀請</span>
        </div>
        <h2 className="text-[36px] font-black leading-tight text-slate-800">
          這個計畫能為基金會帶來什麼、<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">需要基金會做什麼</span>
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) Benefits Row */}
      <div className="z-10 px-16">
        <div className="text-[11px] font-black text-slate-400 tracking-widest uppercase mb-2.5">計畫帶來的四大價值</div>
        <div className="grid grid-cols-4 gap-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.id} className={`bg-white border ${b.ring} rounded-2xl shadow-sm p-4 relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-full h-1 ${b.bar}`}></div>
                <div className={`w-9 h-9 ${b.tint} rounded-xl flex items-center justify-center mb-2.5 mt-0.5`}>
                  <Icon className={`w-4.5 h-4.5 ${b.ink}`} />
                </div>
                <h3 className="text-[14px] font-bold text-slate-800 mb-1.5">{b.title}</h3>
                <p className="text-[10.5px] text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Asks Row */}
      <div className="z-10 px-16 pt-4 flex-1">
        <div className="text-[11px] font-black text-slate-400 tracking-widest uppercase mb-2.5">需要基金會投入的四件事</div>
        <div className="grid grid-cols-4 gap-4">
          {asks.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 bg-white border border-slate-200 rounded-xl flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-slate-500" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-white border border-slate-200 rounded-full px-2.5 py-0.5">{a.effort}</span>
                </div>
                <h3 className="text-[14px] font-bold text-slate-800 mb-1">{a.title}</h3>
                <p className="text-[10.5px] text-slate-500 leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 py-5">
        <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl px-8 py-4 shadow-lg">
          <Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            <span className="font-black text-rose-400">一句話總結</span>：基金會不需出資、不需養工程師，只需要把真實的需求帶進來
            —— 換來的是行政減半的據點、被寫進國家級開源模型的專業，以及整個社福圈的感謝。
          </p>
        </div>
      </div>

    </div>
  );
}
