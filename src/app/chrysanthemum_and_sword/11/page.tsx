'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { ChrysanthemumMark, SwordMark } from '@/components/slide/kiku_katana_art';

/* Info: (20260830 - Luphia) 第一幕結果卡：六個維度合起來的日本型人格 */
export default function ChrysanthemumSlide11() {
  const axes = [
    { left: '追求自由', right: '追求位置', l: '各得其所' },
    { left: '受恩是禮物', right: '受恩是負債', l: '恩' },
    { left: '對等償還', right: '永遠還不完', l: '義務與義理' },
    { left: '怕天知道', right: '怕人知道', l: '恥感' },
    { left: '修煉是犧牲', right: '修煉是保養', l: '無我' },
    { left: '一路變自由', right: 'U 型人生', l: '養成' },
  ];

  return (
    <KikuSlideShell
      chapter="第一幕 ・ 結果卡"
      chapterNote="TYPE: KIKU—KATANA"
      title={<>六個維度合起來，<span className="text-orange-600">就是這本書給世界的那個日本人</span></>}
      lead="像 MBTI 一樣，把六根滑桿的位置連起來，你會得到一個完整、自洽、可以拿去預測行為的人格輪廓。"
      pageLabel="11 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[1fr_340px] gap-6 flex-1 min-h-0">

          <div className="rounded-2xl bg-white/85 border border-orange-100 px-7 py-5 flex flex-col justify-center gap-3 shadow-[0_18px_40px_-28px_rgba(234,88,12,0.6)]">
            {axes.map((a) => (
              <div key={a.l} className="flex items-center gap-4">
                <span className="w-[104px] text-[13px] font-bold text-stone-400 text-right leading-tight">{a.left}</span>
                <div className="flex-1 h-[10px] rounded-full bg-stone-100 relative">
                  <div className="absolute inset-y-0 left-0 w-[82%] rounded-full bg-gradient-to-r from-orange-200 to-orange-500" />
                  <div className="absolute top-1/2 left-[82%] -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-orange-600 border-[3px] border-white shadow" />
                </div>
                <span className="w-[122px] text-[15px] font-black text-orange-600 leading-tight">{a.right}</span>
                <span className="w-[96px] text-[12px] font-mono text-stone-400 text-right">{a.l}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-stone-900 text-white p-6 flex flex-col relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-[0.14]">
              <ChrysanthemumMark size={190} className="text-orange-400" />
            </div>
            <SwordMark size={52} className="text-orange-400 mb-3 relative" />
            <div className="text-[12px] font-bold tracking-[0.24em] text-orange-400 relative">診斷結果</div>
            <div className="text-[38px] font-black leading-tight mt-1 relative">菊 ・ 刀 型</div>
            <p className="text-[14.5px] leading-[1.9] text-stone-300 mt-4 relative">
              他不追求自由，他追求正確的位置。
              他不覺得受人幫助是溫暖的，那是一筆到期日不明的債。
              他做錯事不怕天知道，怕人知道。
              他吃苦不覺得是犧牲，覺得是把自己擦亮。
              他被無限寵愛過，也被嚴厲嘲笑過——
              <span className="block mt-2 text-orange-300 font-bold">所以他既溫柔，又殘忍。</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-5">
          <p className="text-[18px] leading-relaxed">
            <span className="font-black">這份報告最厲害的地方，不是它細膩，是它「可以拿來用」。</span>
            六個維度一填，你就能預測這個人下一步會做什麼。
            <span className="block mt-1.5 text-[16px] opacity-95">
              而現在，我們該來談談：誰會需要「預測一個民族的下一步」？
            </span>
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
