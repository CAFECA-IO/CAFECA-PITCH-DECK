'use client';

import { ScanLine, HelpCircle, Megaphone, Check, X } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide3() {
  const gaps = [
    {
      icon: ScanLine,
      no: '斷點 01',
      title: '辨識斷點',
      lead: '52%',
      leadK: '會員交易占比',
      body: '另外 48% 的客人，從進門到離開完全匿名。你的 CRM 只看得到一半的生意，卻用它決定全店的策略。',
    },
    {
      icon: HelpCircle,
      no: '斷點 02',
      title: '理解斷點',
      lead: '3 欄',
      leadK: 'RFM 只有三個欄位',
      body: '會員系統知道「誰、何時、買了什麼」，卻不知道「為什麼買」、「還差一點買了什麼」。三個欄位撐不起一個人。',
    },
    {
      icon: Megaphone,
      no: '斷點 03',
      title: '行動斷點',
      lead: '3.8%',
      leadK: '全店統一券核銷率',
      body: '分不出群，行銷就只能做給「全體會員」。九成六的成本，打在本來就不需要這張券的人身上。',
    },
  ];

  const knows = ['卡號與累積點數', '買過哪些品項、花了多少', '最近一次消費是什麼時候', '生日與註冊時填的基本資料'];
  const unknowns = ['他是為了誰買的：自己、孫子，還是攤位', '他今天還走過哪些貨架、停在哪裡', '他拿起來又放回去的是什麼', '沒刷卡的那 48% 客人，到底是誰'];

  return (
    <CrmSlideShell
      chapter="破題 · WHY"
      pageLabel="03 / 20"
      compact
      title={<>零售 CRM 的<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">三個斷點</span></>}
      subtitle="幾乎每一家連鎖零售都有會員系統，也都有一套 CRM。問題不在系統不夠好，而在它拿到的資料，只有收銀機吐出來的那一小段。"
    >
      <div className="flex gap-5 h-full">

        <div className="flex-[62] grid grid-rows-3 gap-3.5">
          {gaps.map((gap) => {
            const Icon = gap.icon;
            return (
              <div key={gap.no} className="rounded-2xl border border-slate-200 bg-white px-6 py-4 flex items-center gap-5 shadow-sm">
                <Icon className="w-7 h-7 text-orange-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-[10.5px] font-mono font-bold tracking-[0.18em] text-slate-400">{gap.no}</span>
                    <span className="text-[19px] font-black text-slate-900">{gap.title}</span>
                  </div>
                  <p className="text-[13px] text-slate-600 leading-snug">{gap.body}</p>
                </div>
                <div className="flex-shrink-0 text-right pl-4 border-l border-slate-200">
                  <div className="text-[26px] font-black text-orange-600 font-mono leading-none">{gap.lead}</div>
                  <div className="text-[10px] text-slate-400 mt-1.5 whitespace-nowrap">{gap.leadK}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex-[38] flex flex-col gap-3.5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 flex-1 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-4 h-4 text-slate-500" />
              <span className="text-[14px] font-black text-slate-900">現有會員系統知道的</span>
            </div>
            <ul className="space-y-2.5">
              {knows.map((item) => (
                <li key={item} className="flex gap-2 text-[12.5px] text-slate-600 leading-snug">
                  <span className="text-slate-300 mt-[1px]">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <X className="w-4 h-4 text-orange-600" />
              <span className="text-[14px] font-black text-slate-900">但它不知道的</span>
            </div>
            <ul className="space-y-2.5">
              {unknowns.map((item) => (
                <li key={item} className="flex gap-2 text-[12.5px] text-slate-700 leading-snug">
                  <span className="text-orange-500 mt-[1px]">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
