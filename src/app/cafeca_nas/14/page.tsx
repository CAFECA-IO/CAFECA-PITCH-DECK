'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';
import { Check, X } from 'lucide-react';

export default function NasSlide14() {
  const fit = [
    { who: '同一個辦公室、5 ~ 50 人的團隊', why: '內網速度的優勢完整成立；人數足夠讓「集中」比「各自為政」划算。' },
    { who: '每天在跟大檔打架的人', why: '影片、設計稿、CAD、照片、資料集——只要一個人每天要搬幾十 GB，就值得。' },
    { who: '已在為多人雲端月費付錢、卻只當硬碟用', why: '沒有在共編、只是存放，那筆月費就是最該省下來的那筆。' },
    { who: '資料不能出門的專案或客戶', why: '合約、個資、法規要求「資料在地」——NAS 是最省事的合規答案。' },
    { who: '有一位願意當管理員的同事', why: '不需要 IT 專職，需要一個每月願意花一兩小時、出事會被找到的人。' },
  ];

  const unfit = [
    { who: '全遠端、沒有共同辦公室的團隊', why: '內網優勢消失，剩下的就是一台放在某人家裡、走上傳頻寬的伺服器。雲端更適合。' },
    { who: '3 人以下、檔案都是文件與試算表', why: '雲端硬碟免費或幾百元方案就夠；多一台機器只是多一件要顧的事。' },
    { who: '核心需求是即時共編而非存放', why: '整天在 Docs / Sheets 裡協作的團隊，NAS 解決不了你真正的痛。' },
    { who: '沒有人願意負責、沒地方放', why: '沒有管理員的 NAS，會在第一顆硬碟亮紅燈時變成一台大家都不敢碰的黑盒子。' },
    { who: '期待「買了就等於有備份」', why: '如果沒有預算再做一份異地備份，那只是把雞蛋從很多個籃子搬進同一個籃子。' },
  ];

  return (
    <NasSlideShell
      chapter="ACT 4 · WHO IT IS FOR"
      accent="orange"
      pageLabel="14"
      title={<>誰適合，誰先別</>}
      subtitle={<>判斷只要一條：<span className="text-slate-900 font-bold">你的團隊是不是「同一個空間、一起處理大檔、而且資料想留在自己手上」？</span>三個都是，就做；有兩個不是，先別。</>}
      footer="不確定的話：先用一台入門級 2 槽機做「全公司備份」這一件事，跑三個月。備份做順了，再決定要不要把共享也搬上去。這是成本最低的試法。"
      compact
    >
      <div className="grid grid-cols-2 gap-5 flex-1">
        <div className="bg-orange-50 border border-orange-300 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center">
              <Check className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-[15px] font-bold tracking-wide text-orange-600">適合</span>
          </div>
          <div className="flex-1 flex flex-col justify-around pb-1">
            {fit.map((f) => (
              <div key={f.who}>
                <div className="text-[14.5px] font-bold text-slate-900 leading-tight">{f.who}</div>
                <div className="text-[12.5px] text-slate-600 leading-snug mt-0.5">{f.why}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-slate-200 flex items-center justify-center">
              <X className="w-4 h-4 text-slate-600" />
            </div>
            <span className="text-[15px] font-bold tracking-wide text-slate-700">先不需要</span>
          </div>
          <div className="flex-1 flex flex-col justify-around pb-1">
            {unfit.map((u) => (
              <div key={u.who}>
                <div className="text-[14.5px] font-bold text-slate-800 leading-tight">{u.who}</div>
                <div className="text-[12.5px] text-slate-500 leading-snug mt-0.5">{u.why}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NasSlideShell>
  );
}
