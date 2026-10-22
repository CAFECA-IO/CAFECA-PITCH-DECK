'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { PalaceNightScene } from '@/components/slide/kiku_scenes';

/* Info: (20260830 - Luphia) 故事二：宮城事件，那個不整齊的夜晚 */
export default function ChrysanthemumSlide20() {
  const night = [
    { time: '8/14 深夜', t: '殺掉師團長', b: '陸軍省與近衛師團的少壯派軍官闖進司令部，射殺近衛第一師團長森赳中將，再偽造他的命令，讓部隊佔領皇居。' },
    { time: '8/15 凌晨', t: '翻找那張唱片', b: '他們切斷宮內省的對外通訊，把房間一間一間翻過去，要找出已經錄好的玉音盤。找了整夜，沒有找到。' },
    { time: '8/15 天亮', t: '政變瓦解', b: '東部軍趕到，部隊撤出。畑中健二等人在皇居前自殺。陸軍大臣阿南惟幾在同一個清晨切腹。' },
    { time: '8/15 之後', t: '還有人不肯停', b: '厚木航空隊的小園安名拒絕接受停戰，率隊在關東上空撒下傳單，主張繼續打下去，數日後才被制伏。' },
  ];

  return (
    <KikuSlideShell
      chapter="第四幕 ・ 故事二"
      chapterNote="THE KYUJO INCIDENT, 14—15 AUG 1945"
      title={<>那個「一天之內換了位置」的國家，<span className="text-orange-600">那一夜差點播不出來</span></>}
      lead="我們在第 15 頁看到的畫面是：廣播、下跪、然後去上班。但廣播前的十二個小時，皇居裡發生的是另一回事。"
      pageLabel="20 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[400px_1fr] gap-5 flex-1 min-h-0">

          <div className="rounded-2xl overflow-hidden border border-stone-800 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)] relative">
            <PalaceNightScene className="w-full h-full" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-transparent px-6 pt-10 pb-5">
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-orange-400">THE RECORD THEY NEVER FOUND</div>
              <p className="text-[15.5px] leading-relaxed text-white font-bold mt-1">
                錄好的玉音盤，就藏在他們搜過的那棟樓裡。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {night.map((n) => (
              <div key={n.t} className="rounded-2xl bg-white/85 border border-orange-100 p-5 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
                <div className="text-[11.5px] font-mono font-bold tracking-[0.14em] text-orange-500 mb-1">{n.time}</div>
                <div className="text-[19px] font-black text-stone-900 mb-2">{n.t}</div>
                <p className="text-[13.5px] leading-[1.8] text-stone-600">{n.b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-stone-900 text-white px-8 py-5">
          <p className="text-[18px] leading-relaxed">
            <span className="text-orange-400 font-black">這一夜，不在《菊與刀》裡。</span>
            書裡的日本只有一種日本人：聽見天皇的聲音，就整齊地轉向。
            但真實的那一夜，有人聽命、有人抗命、有人殺人、有人自殺、有人躲起來藏唱片。
            <span className="block mt-2 font-bold">整齊的畫面，是事後才剪出來的——而她的模型，剛好只能容納整齊的那一版。</span>
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
