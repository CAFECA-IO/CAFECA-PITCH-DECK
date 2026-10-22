'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';

/* Info: (20260830 - Luphia) 本書與二戰的關係：從情報報告到世界名著 */
export default function ChrysanthemumSlide16() {
  const timeline = [
    { date: '1944.06', title: '受聘', body: '美國戰時情報局海外情報處，設立對日研究工作。潘乃德接下「日本組」。這是一份戰時公職，不是學術計畫。' },
    { date: '1945 前半', title: '內部報告', body: '她提交關於日本人行為模式與天皇地位的分析，送進決策圈。當時屬於機密文件，不對外發表。' },
    { date: '1945.08—1946', title: '佔領期', body: '天皇獲得保留、間接統治體制成形。這是多方角力的結果，潘乃德的報告是其中一份參考，而不是唯一原因。' },
    { date: '1946.11', title: '成書出版', body: '報告經改寫、擴充，以《The Chrysanthemum and the Sword》之名出版。副標題直接寫著：日本文化的諸模式。' },
    { date: '1948', title: '日譯本上市', body: '《菊と刀》在日本出版，立刻成為現象級暢銷書。同年，潘乃德去世，享年 61 歲。' },
    { date: '1950s', title: '成為典範', body: '冷戰期間，「國民性研究」成為美國區域研究的主流方法，這本書是它的樣板與招牌。' },
  ];

  return (
    <KikuSlideShell
      chapter="第二幕 ・ 身世"
      chapterNote="A WAR REPORT THAT BECAME A CLASSIC"
      title={<>它不是先有學術，才被拿去用——<span className="text-orange-600">它是先有戰爭，才長出學術</span></>}
      lead="這條時間軸是理解這本書的關鍵。它的出資者是交戰國政府，它的第一批讀者是決策官員，它的成功標準是「預測準不準」。"
      pageLabel="16 / 23"
      compact
    >
      <div className="h-full flex flex-col">
        <div className="relative flex-1 min-h-0 pt-4">
          <div className="absolute left-0 right-0 top-[46px] h-[3px] bg-gradient-to-r from-orange-600 via-orange-400 to-amber-300 rounded-full" />
          <div className="grid grid-cols-6 gap-4 h-full">
            {timeline.map((t) => (
              <div key={t.date} className="flex flex-col">
                <div className="text-[13px] font-mono font-black text-orange-600 h-[24px]">{t.date}</div>
                <div className="h-[26px] flex items-center">
                  <span className="w-4 h-4 rounded-full bg-orange-600 ring-4 ring-orange-100" />
                </div>
                <div className="mt-3 rounded-xl bg-white/85 border border-orange-100 p-4 flex-1 shadow-[0_16px_36px_-30px_rgba(234,88,12,0.6)]">
                  <div className="text-[18px] font-black text-stone-900 mb-2">{t.title}</div>
                  <p className="text-[13.5px] leading-[1.85] text-stone-600">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-stone-900 text-white px-8 py-5">
          <p className="text-[18px] leading-relaxed">
            <span className="text-orange-400 font-black">從機密報告到世界名著，只花了兩年。</span>
            它的說服力來自一件很難反駁的事——它預測對了。
            <span className="font-bold">而當一個判斷被證明有用，它就不再只是一個意見；它變成了知識。</span>
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
