'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { SnowNightScene } from '@/components/slide/kiku_scenes';

/* Info: (20260830 - Luphia) 故事案例：忠臣藏四十七浪人 */
export default function ChrysanthemumSlide7() {
  const beats = [
    { year: '1701', title: '拔刀', body: '大名淺野長矩在江戶城內，被幕府儀典官吉良義央羞辱多次。他拔刀砍了對方一刀。當天，幕府命他切腹，家產抄沒，家臣全部失業。' },
    { year: '1701—1703', title: '裝廢', body: '四十七名家臣沒有立刻復仇。他們散入市井，酗酒、賭博、拋妻棄子。首領大石內藏助在京都花街醉倒街頭，被路人吐口水。' },
    { year: '1703 冬', title: '結帳', body: '一個下雪的夜裡，四十七人攻進吉良宅邸，取下首級，一路走到主君墓前供上。然後向幕府自首。' },
    { year: '結局', title: '全體切腹', body: '幕府判他們死罪，但允許以切腹執行——這是對武士的最高敬意。至今泉岳寺仍有四十七座墓，香火不斷。' },
  ];

  return (
    <KikuSlideShell
      chapter="插曲 ・ 說個故事"
      chapterNote="THE FORTY-SEVEN RONIN"
      title={<>忠臣藏：<span className="text-orange-600">日本人最愛的那個故事</span></>}
      lead="潘乃德發現，這個故事在日本被拍成無數電影、寫成無數版本，每個人都會講。她想弄清楚：他們到底愛它什麼？"
      pageLabel="07 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[400px_1fr] gap-5 flex-1 min-h-0">

          <div className="rounded-2xl overflow-hidden border border-stone-800 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)] relative">
            <SnowNightScene className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-transparent px-6 pt-10 pb-5">
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-orange-400">EDO ・ 14 DEC 1703</div>
              <p className="text-[16px] leading-relaxed text-white font-bold mt-1">
                下雪的深夜，四十七盞燈籠停在吉良家門口。他們敲門前，先把寫好的訴狀貼在牆上。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {beats.map((b, i) => (
              <div key={b.title} className="rounded-2xl bg-white/85 border border-orange-100 p-5 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)] relative overflow-hidden">
                <div className="absolute -right-2 -top-3 text-[56px] font-black text-orange-100 leading-none select-none">{i + 1}</div>
                <div className="relative">
                  <div className="text-[11.5px] font-mono font-bold tracking-[0.14em] text-orange-500 mb-1">{b.year}</div>
                  <div className="text-[20px] font-black text-stone-900 mb-2">{b.title}</div>
                  <p className="text-[13.5px] leading-[1.8] text-stone-600">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-stone-900 text-white px-8 py-4">
          <p className="text-[17px] leading-relaxed">
            <span className="text-orange-400 font-black">潘乃德的解讀：</span>
            日本人愛的不是復仇的痛快。他們愛的是：這四十七個人，同時欠了「對主君的義理」和「對幕府的義務」兩筆互相衝突的債，
            <span className="text-orange-300 font-bold">而他們用一次行動，把兩筆都還清了</span>
            ——先報仇，再自裁。在這套帳本裡，這是完美的結案。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
