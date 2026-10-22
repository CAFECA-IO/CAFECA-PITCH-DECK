'use client';

import { BookOpenCheck, Store, KeyRound } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';

export default function EcModuleSlide2() {
  const principles = [
    {
      icon: BookOpenCheck,
      color: 'text-orange-600',
      border: 'border-orange-300',
      bg: 'bg-orange-50',
      title: '一間商店，一本獨立帳本',
      en: 'ONE STORE, ONE LEDGER',
      desc: '每串接一間商店，iSunFA 自動建立專屬帳本：科目、傳票、成本、結算、報表完全隔離。商店的數字只是投影，帳本才是真相。',
      note: '帳本間互不污染，集團層可合併檢視',
    },
    {
      icon: Store,
      color: 'text-amber-600',
      border: 'border-amber-300',
      bg: 'bg-amber-50',
      title: '平台只做前台銷售',
      en: 'FRONTEND ONLY',
      desc: 'Shopify、蝦皮、momo、TikTok Shop 負責曝光與收單；所有複雜結算、分潤、成本、佣金一律回到 iSunFA 計算。',
      note: '平台改版，不影響你的帳務規則',
    },
    {
      icon: KeyRound,
      color: 'text-sky-600',
      border: 'border-sky-300',
      bg: 'bg-sky-50',
      title: 'SKU 是全域唯一匹配鍵',
      en: 'GLOBAL SKU KEY',
      desc: '所有平台的每一筆商品與訂單，都以 SKU + 商店 ID 對回 iSunFA。跨平台資料一致、不混亂，帳本才記得準。',
      note: '一物一碼，跨店可追',
    },
  ];

  return (
    <FaSlideShell
      chapter="CH 01 · 設計總綱"
      title={<span>三條設計公理：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">先定秩序，再談功能</span></span>}
      subtitle="多平台、多商店、多供應商、多幣別，電商的錢流最容易亂。模組設計從三條不可妥協的公理出發，其餘功能都是推論。"
      pageLabel="02 / 21"
    >
      <div className="h-full grid grid-cols-3 gap-5">
        {principles.map((p) => (
          <div key={p.title} className={`rounded-2xl border ${p.border} ${p.bg} p-6 flex flex-col`}>
            <div className="flex items-center justify-between mb-4">
              <p.icon className={`w-9 h-9 ${p.color}`} />
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500">{p.en}</span>
            </div>
            <h3 className="text-[21px] font-black text-slate-900 leading-snug mb-3">{p.title}</h3>
            <p className="text-[14px] text-slate-600 leading-relaxed">{p.desc}</p>
            <div className="mt-auto pt-4 border-t border-slate-200 text-[11px] text-slate-500">{p.note}</div>
          </div>
        ))}
      </div>
    </FaSlideShell>
  );
}
