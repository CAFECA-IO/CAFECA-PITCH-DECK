'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { RadioScene } from '@/components/slide/kiku_scenes';

/* Info: (20260830 - Luphia) 玉音放送與佔領的落地 */
export default function ChrysanthemumSlide15() {
  const facts = [
    { k: '皇居前廣場', v: '有人跪在礫石上痛哭。然後，站起來，回家，第二天去上班。' },
    { k: '盟軍最高司令部', v: '麥克阿瑟保留天皇，讓他以「人間宣言」退為象徵，而不是被告。' },
    { k: '佔領現場', v: '原本擬定的大規模鎮壓與反游擊計畫，幾乎沒有派上用場。' },
  ];

  return (
    <KikuSlideShell
      chapter="第二幕 ・ 應驗"
      chapterNote="AUGUST 15, 1945"
      title={<>玉音放送：<span className="text-orange-600">一個國家，一天之內換了位置</span></>}
      lead="1945 年 8 月 15 日正午，收音機第一次播出天皇的聲音。很多日本人聽不懂那種宮廷用語，要靠播報員解釋。"
      pageLabel="15 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[460px_1fr] gap-5 flex-1 min-h-0">

          <div className="rounded-2xl overflow-hidden border border-orange-100 bg-white shadow-[0_18px_40px_-28px_rgba(234,88,12,0.6)] flex flex-col">
            <RadioScene className="w-full h-[286px]" />
            <div className="px-6 py-4 flex-1 flex flex-col justify-center border-t border-orange-100">
              <div className="text-[11px] font-mono font-bold tracking-[0.18em] text-orange-500 mb-1">15 AUG 1945 ・ NOON</div>
              <p className="text-[15px] leading-[1.85] text-stone-600">
                全國的工廠、學校、車站都停下來，把收音機搬到院子裡。訊號很差，天皇的用語又是宮廷文言，
                <span className="text-stone-800 font-bold">很多人聽完之後，還要等播報員解釋一次，才知道戰爭結束了。</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 min-h-0">
            <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-7 py-5 shadow-[0_20px_50px_-25px_rgba(234,88,12,0.9)]">
              <div className="text-[12px] font-bold tracking-[0.3em] opacity-90 mb-1.5">終戰詔書</div>
              <p className="text-[26px] font-black leading-snug">「堪其難堪，忍其難忍。」</p>
              <p className="mt-2 text-[15px] leading-relaxed opacity-95">
                詔書從頭到尾沒有出現「投降」和「戰敗」。它把停戰包裝成天皇對臣民的一次體恤——也就是說，包裝成一份新的恩。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 flex-1 min-h-0">
              {facts.map((f) => (
                <div key={f.k} className="rounded-xl bg-white/85 border border-orange-100 px-6 py-3.5 flex flex-col justify-center shadow-[0_16px_36px_-30px_rgba(234,88,12,0.6)]">
                  <div className="text-[12.5px] font-bold tracking-[0.16em] text-orange-600 mb-1">{f.k}</div>
                  <p className="text-[15.5px] leading-relaxed text-stone-700">{f.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-stone-900 text-white px-8 py-4">
          <p className="text-[18px] leading-relaxed">
            <span className="text-orange-400 font-black">預測命中了。</span>
            一個被判斷為會戰到最後一人的民族，在一段廣播之後停手，然後開始配合。潘乃德在華盛頓的那份報告，成了整場戰爭裡最漂亮的一次社會科學押注。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
