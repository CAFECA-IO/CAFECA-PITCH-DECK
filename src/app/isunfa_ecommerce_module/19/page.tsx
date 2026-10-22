'use client';

import { Ban, Split, History } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';

export default function EcModuleSlide19() {
  const lines = [
    {
      icon: Ban,
      no: '紅線一',
      title: '銷售平台只做前台',
      desc: '所有複雜結算、分潤、成本、佣金一律由 iSunFA 計算（需求 #28）。Shopify 或任何平台再方便，也不把帳務邏輯外包給它。',
      why: '平台功能一改版，你的結算規則就被綁架。',
    },
    {
      icon: Split,
      no: '紅線二',
      title: '不使用 Shopify 內建達人分帳',
      desc: '全部結算以 iSunFA 帳本為唯一標準（需求 #29）。主播佣金 + 運費規則因人而異，內建分帳裝不下這種複雜度。',
      why: '兩套分帳邏輯並存，等於沒有標準。',
    },
    {
      icon: History,
      no: '紅線三',
      title: '跨平台同步必須留痕',
      desc: '可查、可對帳、可回溯（需求 #30）。每一次同步的請求、回應、時間戳完整保存。',
      why: '沒有留痕的同步，出錯時就是各說各話。',
    },
  ];

  return (
    <FaSlideShell
      chapter="CH 10 · 特別事項"
      title={<span>三條紅線：<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">寫進系統，不寫進備忘錄</span></span>}
      subtitle="這三條不是建議，是約束。全部由系統機制強制執行，而不是依賴同仁「記得」。"
      pageLabel="19 / 21"
    >
      <div className="h-full grid grid-cols-3 gap-5">
        {lines.map((l) => (
          <div key={l.no} className="rounded-2xl border border-red-300 bg-red-50 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <l.icon className="w-9 h-9 text-red-600" />
              <span className="text-[12px] font-black tracking-[0.25em] text-red-600">{l.no}</span>
            </div>
            <h3 className="text-[21px] font-black text-slate-900 leading-snug mb-3">{l.title}</h3>
            <p className="text-[13.5px] text-slate-600 leading-relaxed">{l.desc}</p>
            <div className="mt-auto pt-4 border-t border-red-300 text-[12px] text-red-700 leading-relaxed">
              <span className="font-bold">否則：</span>{l.why}
            </div>
          </div>
        ))}
      </div>
    </FaSlideShell>
  );
}
