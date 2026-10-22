'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { Store } from 'lucide-react';

export default function PaySlide13() {
  const countries = [
    {
      flag: '🇯🇵',
      c: '日本',
      why: '全盈 2026 年初已上線 PayPay 跨境支付',
      fm: '約 1.6 萬家 FamilyMart',
      fmNote: '全家品牌的發源地；自有錢包 FamiPay 累計 2,600 萬下載',
      role: '台灣人出國消費的延伸',
      mv: '58.0%', mk: '無現金比率，八成以上是信用卡',
    },
    {
      flag: '🇲🇾',
      c: '馬來西亞',
      why: '全盈外籍會員占比第一的國籍',
      fm: 'FamilyMart 目標 2027 年 600 家',
      fmNote: '由 QL Resources 經營；另有 150 台以上 FM Mini 無人販售機',
      role: '僑生與白領的雙向生活圈',
      mv: '+21%', mk: '電商年增率，東南亞最快',
    },
    {
      flag: '🇮🇩',
      c: '印尼',
      why: '外籍會員第二大，也是在台移工最多的國籍',
      fm: 'FamilyMart 逾 270 家',
      fmNote: '集中於大雅加達地區（2024.06）',
      role: '約 33.5 萬名在台移工的匯款走廊',
      mv: '6,700 萬', mk: 'QRIS 用戶，代理支付尚無人卡位',
    },
  ];

  return (
    <PaySlideShell
      act="ACT II · 誰會輸"
      scene="第二幕 · 三個國家"
      pageLabel="13 / 26"
      title={<>全盈在意的三個國家，<span className="text-plus-500">都掛著同一塊招牌</span></>}
      subtitle={<>這三國不是從地圖上挑的，是從全盈自己的會員名單與上線服務裡長出來的。巧合的是，每一國的街角都有一家 FamilyMart——代理人跨國辦事時，最需要的就是一個認得的實體據點。</>}
      footer="全盈外籍會員國籍結構、日本跨境上線引自經濟日報、聯合新聞網 2026 年報導；日本 FamilyMart 店數為國內概數；馬來西亞引自 QL Resources 與當地媒體；印尼引自 FamilyMart Indonesia；在台印尼移工數為勞動部 2026 年 6 月統計（經二手整理，定稿前請再核對）。"
    >
      <div className="flex-1 min-h-0 grid grid-cols-3 gap-5 pb-2">
        {countries.map((k) => (
          <div key={k.c} className="rounded-[28px] bg-white border border-plus-100 shadow-sm p-6 flex flex-col relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-[140px] h-[140px] rounded-full bg-plus-50" />
            <div className="relative flex items-center gap-3 mb-4">
              <span className="text-[40px] leading-none">{k.flag}</span>
              <span className="text-[30px] font-black text-ink-900">{k.c}</span>
            </div>
            <div className="relative rounded-full bg-plus-500 text-white px-4 py-2 text-[13px] font-bold mb-5 self-start">{k.why}</div>
            <div className="relative flex items-center gap-2 mb-1">
              <Store className="w-4 h-4 text-bird-600" />
              <span className="text-[18px] font-black text-ink-900">{k.fm}</span>
            </div>
            <div className="relative text-[13px] text-ink-500 leading-snug mb-4">{k.fmNote}</div>
            <div className="relative rounded-[20px] bg-bird-50 px-4 py-3">
              <div className="text-[32px] font-black text-ink-900 leading-none">{k.mv}</div>
              <div className="text-[12.5px] text-ink-500 mt-1">{k.mk}</div>
            </div>
            <div className="relative mt-auto pt-4 border-t border-dashed border-plus-200">
              <div className="text-[11px] font-bold tracking-widest text-ink-400 mb-1">對全盈的意義</div>
              <div className="text-[16px] font-black text-plus-500">{k.role}</div>
            </div>
          </div>
        ))}
      </div>
    </PaySlideShell>
  );
}
