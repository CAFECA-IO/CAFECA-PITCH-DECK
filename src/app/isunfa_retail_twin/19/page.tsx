'use client';

import { CloudLightning, Swords, Layers } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide19() {
  const typhoon = [
    { item: '碗裝／包裝泡麵', delta: '+310%', up: true },
    { item: '瓶裝飲用水（箱）', delta: '+260%', up: true },
    { item: '電池與行動電源', delta: '+180%', up: true },
    { item: '貓砂與寵物尿墊', delta: '+95%', up: true, star: true },
    { item: '生鮮蔬果', delta: '−40%', up: false },
    { item: '冷凍調理食品', delta: '+72%', up: true },
  ];

  const rival = [
    { seg: '全日客流', delta: '−14%', tone: 'text-rose-300' },
    { seg: '週末家庭大採購', delta: '−22%', tone: 'text-rose-300' },
    { seg: '平日上午銀髮客', delta: '−6%', tone: 'text-emerald-300', star: true },
    { seg: '打烊前輪班客（22:00–23:00）', delta: '−4%', tone: 'text-emerald-300', star: true },
    { seg: '模擬 12 個月後營收留存', delta: '78%', tone: 'text-white' },
  ];

  const library = [
    '電價與油價調漲 8%',
    '基本工資調升',
    '亞灣區新建案交屋潮',
    '學校行事曆調整',
    '週邊道路封閉施工',
    '線上生鮮宅配降價',
    '缺工導致縮短營業時間',
    '同商圈超市改裝重開',
  ];

  return (
    <TwinSlideShell
      chapter="情境 C · 壓力測試"
      chapterColor="text-rose-400"
      chapterDot="bg-rose-400"
      pageLabel="19 / 22"
      compact
      title={<>颱風週與對街競業：<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">把最壞的情況先跑一遍</span></>}
      subtitle="孿生模型最實用的地方，其實不是找成長機會，而是在事情發生之前，先把應變方案算完、把單下好。以高雄 12 家門市模擬。"
    >
      <div className="flex gap-4 h-full items-start">

        <div className="flex-[36] rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-1">
            <CloudLightning className="w-4 h-4 text-amber-400" />
            <span className="text-[14.5px] font-black text-white">颱風警報後 48 小時</span>
          </div>
          <p className="text-[10.5px] text-slate-500 mb-3">以近 6 年高雄陸警個案校準的需求脈衝模型</p>

          <div className="space-y-2 flex-1 flex flex-col justify-center">
            {typhoon.map((row) => (
              <div key={row.item} className={`flex justify-between items-center px-2.5 py-[7px] rounded-lg ${row.star ? 'bg-amber-400/10 border border-amber-400/25' : ''}`}>
                <span className={`text-[12px] ${row.star ? 'text-amber-200 font-bold' : 'text-slate-300'}`}>{row.item}</span>
                <span className={`text-[13px] font-mono font-black ${row.up ? 'text-emerald-300' : 'text-rose-300'}`}>{row.delta}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-[11px] text-slate-400 leading-snug">
              <span className="text-white font-bold">建議行動：</span>警報發布前 60 小時下加急單、冷鏈排程改為兩班、生鮮改小量高頻。
              12 家門市合計可避免的缺貨損失 <span className="font-mono font-bold text-emerald-300">NT$310 萬</span>。
            </p>
          </div>
        </div>

        <div className="flex-[36] rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-1">
            <Swords className="w-4 h-4 text-rose-400" />
            <span className="text-[14.5px] font-black text-white">對街開了一家連鎖超市</span>
          </div>
          <p className="text-[10.5px] text-slate-500 mb-3">模擬 12 個月，含蜜月期與回流期兩階段</p>

          <div className="space-y-2.5 flex-1 flex flex-col justify-center">
            {rival.map((row) => (
              <div key={row.seg} className={`flex justify-between items-center px-2.5 py-[7px] rounded-lg ${row.star ? 'bg-emerald-400/10 border border-emerald-400/25' : ''}`}>
                <span className={`text-[12px] ${row.star ? 'text-emerald-200 font-bold' : 'text-slate-300'}`}>{row.seg}</span>
                <span className={`text-[13px] font-mono font-black ${row.tone}`}>{row.delta}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-[11px] text-slate-400 leading-snug">
              <span className="text-white font-bold">策略結論：守早晚，不守週末。</span>
              上午的銀髮客與打烊前的輪班族黏著度幾乎不受影響，該兩段擴充鮮食、箱購宅配與大字陳列，把資源從打不贏的週末價格戰移出來。
            </p>
          </div>
        </div>

        <div className="flex-[28] flex flex-col gap-3 h-full">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex-1">
            <div className="flex items-center gap-2 mb-2.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span className="text-[13px] font-black text-white">情境庫（可隨時加跑）</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {library.map((item) => (
                <span key={item} className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[10.5px] text-slate-300">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-[10.5px] text-slate-500 leading-snug mt-3">
              每個情境約 4 分鐘算完，可在季度決策會議上當場加問、當場回答。
            </p>
          </div>

          <div className="rounded-2xl border border-rose-400/30 bg-gradient-to-br from-rose-400/[0.12] to-transparent px-4 py-3.5">
            <p className="text-[14.5px] font-black text-white leading-snug">
              孿生模型真正的價值：<br />
              <span className="text-rose-300">把補救成本，換成準備成本。</span>
            </p>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
