'use client';

import { Database, Store, KeyRound } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';

export default function MallLiveSlide2() {
  const principles = [
    {
      icon: Database,
      color: 'text-rose-300',
      border: 'border-rose-400/40',
      bg: 'bg-rose-500/10',
      title: '財務系統是唯一數據主源頭',
      en: 'SINGLE SOURCE OF TRUTH',
      desc: '所有商品成本、供應商結算、主播佣金、分潤與財務帳務，一律以本系統為準。任何平台顯示的數字都只是「投影」，不是「真相」。',
    },
    {
      icon: Store,
      color: 'text-fuchsia-300',
      border: 'border-fuchsia-400/40',
      bg: 'bg-fuchsia-500/10',
      title: 'Shopify 只做前台銷售',
      en: 'FRONTEND ONLY',
      desc: '對接 Shopify 的 iSUN TVmall 官網商城與第三方電商平台，負責曝光與收單；所有複雜結算、分潤、成本、佣金一律回到系統計算。',
    },
    {
      icon: KeyRound,
      color: 'text-violet-300',
      border: 'border-violet-400/40',
      bg: 'bg-violet-500/10',
      title: 'SKU 是全域唯一匹配鍵',
      en: 'GLOBAL SKU KEY',
      desc: '商城、直播間、第三方平台的每一筆商品與訂單，都以 SKU 對回系統。跨平台資料一致、不混亂，結算才拆得開。',
    },
  ];

  return (
    <MallSlideShell
      chapter="CH 01 · 設計總綱"
      title={<span>三條設計公理：<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">先定秩序，再談功能</span></span>}
      subtitle="直播電商的錢流最容易亂：多平台、多供應商、多主播、多幣別。系統設計從三條不可妥協的公理出發，其餘功能都是推論。"
      pageLabel="02 / 20"
    >
      <div className="h-full grid grid-cols-3 gap-5">
        {principles.map((p) => (
          <div key={p.title} className={`rounded-2xl border ${p.border} ${p.bg} p-6 flex flex-col`}>
            <div className="flex items-center justify-between mb-4">
              <p.icon className={`w-9 h-9 ${p.color}`} />
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500">{p.en}</span>
            </div>
            <h3 className="text-[21px] font-black text-white leading-snug mb-3">{p.title}</h3>
            <p className="text-[14px] text-slate-300 leading-relaxed">{p.desc}</p>
            <div className="mt-auto pt-4 border-t border-white/10 text-[11px] text-slate-500">
              {p.title === '財務系統是唯一數據主源頭' && '需求 #1：皆以本系統為準'}
              {p.title === 'Shopify 只做前台銷售' && '需求 #2、#28：複雜計算一律系統執行'}
              {p.title === 'SKU 是全域唯一匹配鍵' && '需求 #3：確保跨平台資料一致'}
            </div>
          </div>
        ))}
      </div>
    </MallSlideShell>
  );
}
