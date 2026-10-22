'use client';

import { HardDrive, ListChecks, ArrowRight } from 'lucide-react';

export default function NasSlide15() {
  const takeaways = [
    { no: '01', text: '我們的問題不是沒地方存，是檔案住在六個地方、沒有一個是「公司的」。' },
    { no: '02', text: 'NAS 用內建的集中、權限、快照、備份，各對應一個痛點；不是加購，是出廠就有。' },
    { no: '03', text: '效果分三層：同事感謝速度、管理層感謝權限與交接、財務感謝月費變資產。' },
    { no: '04', text: '它不取代雲端硬碟的共編，取代的是隨身碟、個人電腦與通訊軟體傳檔。' },
    { no: '05', text: '價位分三級：入門 1 ~ 10 人、中階 10 ~ 50 人、企業級 50 人以上；我們落在中階。' },
    { no: '06', text: 'RAID 不是備份、遠端不快、要有人顧——同一個辦公室、常搬大檔的團隊做；全遠端小團隊先別。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-900">

      <div
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 top-[-200px] w-[720px] h-[720px] rounded-full bg-orange-200/40 blur-[170px]" />
        <div className="absolute -right-44 bottom-[-240px] w-[720px] h-[720px] rounded-full bg-amber-100/60 blur-[180px]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-orange-500 via-amber-400 to-sky-400" />

      <div className="z-10 px-16 pt-11 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span className="text-[13px] font-bold tracking-[0.28em] text-orange-600">SUMMARY</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight tracking-tight text-slate-900">
          六句話帶走這場分享
        </h2>
      </div>

      <div className="z-10 flex-1 px-16 grid grid-cols-2 gap-x-8 gap-y-4 content-evenly">
        {takeaways.map((t) => (
          <div key={t.no} className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4">
            <span className="text-[15px] font-mono font-black text-orange-500 flex-shrink-0 pt-0.5">{t.no}</span>
            <span className="text-[14.5px] text-slate-700 leading-snug">{t.text}</span>
          </div>
        ))}
      </div>

      <div className="z-10 px-16 pb-10 pt-5 grid grid-cols-5 gap-5 items-stretch">
        <div className="col-span-3 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-300 rounded-2xl px-6 py-5 flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
            <HardDrive className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-widest text-orange-600 mb-1">最後一句</div>
            <p className="text-[16px] text-slate-900 leading-snug font-bold">
              NAS 買的不是一台機器，是「公司的檔案終於有一個地址」。
            </p>
            <p className="text-[13px] text-slate-600 leading-snug mt-1">
              地址要有人收信——沒有管理員與異地備份的 NAS，只是一顆比較貴的外接硬碟。
            </p>
          </div>
        </div>

        <div className="col-span-2 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
          <div className="flex items-center gap-2 mb-2.5">
            <ListChecks className="w-4 h-4 text-slate-500" />
            <span className="text-[11px] font-bold tracking-widest text-slate-500">下一步，三個決定</span>
          </div>
          <div className="text-[13px] text-slate-700 leading-relaxed space-y-0.5">
            <div><span className="text-orange-600 font-bold">1.</span> 要不要做？先盤點現在有多少 GB 在哪裡。</div>
            <div><span className="text-orange-600 font-bold">2.</span> 誰來當管理員與代理人？</div>
            <div><span className="text-orange-600 font-bold">3.</span> 異地備份的預算，一起編還是先不編？</div>
          </div>
          <div className="flex items-center gap-1.5 mt-2.5 text-[12px] text-slate-500">
            <ArrowRight className="w-3.5 h-3.5" />
            <span>三個都有答案，再開始看機型</span>
          </div>
        </div>
      </div>
    </div>
  );
}
