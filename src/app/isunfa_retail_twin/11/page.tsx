'use client';

import { Users, Flame, Snowflake, Clock } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';
import VoxelScene from '@/components/slide/voxel_store';
import { buildMarketBase, voxelPerson, corridorHeat, MARKET_CORRIDORS } from '@/components/slide/voxel_market_layout';

export default function IsunfaRetailTwinSlide11() {
  const shoppers: [number, number, string][] = [
    [3.2, 2.6, '#f4a63a'], [7.4, 2.5, '#4dd0e1'], [11.8, 2.7, '#ef7fa5'],
    [4.4, 5.3, '#7cb342'], [9.2, 5.2, '#9575cd'], [12.9, 5.4, '#e05c5c'],
    [5.8, 8.1, '#26a69a'], [11.4, 8.0, '#5c6bc0'], [3.4, 10.9, '#f4a63a'],
    [9.8, 11.0, '#4dd0e1'], [16.4, 4.2, '#ef7fa5'], [16.5, 8.6, '#7cb342'],
    [16.4, 12.2, '#f4a63a'], [19.6, 5.4, '#9575cd'], [19.7, 10.2, '#e05c5c'],
    [22.4, 7.0, '#26a69a'], [25.6, 6.2, '#5c6bc0'], [25.5, 11.4, '#4dd0e1'],
    [3.0, 13.9, '#f4a63a'], [8.6, 14.0, '#ef7fa5'], [14.6, 13.8, '#7cb342'],
    [20.4, 14.0, '#9575cd'], [25.8, 13.9, '#e05c5c'], [10.4, 20.7, '#26a69a'],
    [14.8, 20.8, '#5c6bc0'], [19.2, 20.6, '#f4a63a'], [16.2, 21.6, '#4dd0e1'],
  ];

  const boxes = [
    ...buildMarketBase(),
    corridorHeat(MARKET_CORRIDORS.front, '#ef4444', 0.8, 'h-front'),
    corridorHeat(MARKET_CORRIDORS.spine, '#f97316', 0.7, 'h-spine'),
    corridorHeat(MARKET_CORRIDORS.back, '#f59e0b', 0.58, 'h-back'),
    corridorHeat(MARKET_CORRIDORS.row1, '#fbbf24', 0.5, 'h-row1'),
    corridorHeat(MARKET_CORRIDORS.row2, '#38bdf8', 0.46, 'h-row2'),
    corridorHeat(MARKET_CORRIDORS.row3, '#3b82f6', 0.5, 'h-row3'),
    corridorHeat(MARKET_CORRIDORS.right1, '#fbbf24', 0.5, 'h-right1'),
    corridorHeat(MARKET_CORRIDORS.right2, '#3b82f6', 0.46, 'h-right2'),
    corridorHeat(MARKET_CORRIDORS.right3, '#38bdf8', 0.42, 'h-right3'),
    corridorHeat(MARKET_CORRIDORS.checkout, '#ef4444', 0.66, 'h-checkout'),
    ...shoppers.flatMap(([x, y, shirt], index) => voxelPerson(x, y, { shirt, key: `s${index}` })),
  ];

  const callout = (text: string, tone: string) => (
    <div className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold whitespace-nowrap border backdrop-blur-sm shadow-lg ${tone}`}>
      {text}
    </div>
  );

  const overlays = [
    { key: 'o1', x: 12.5, y: 14.2, z: 0, dy: -16, node: callout('熱區 #1 前主通道 · 28 人/時', 'bg-rose-500/30 border-rose-400/60 text-rose-100') },
    { key: 'o2', x: 7.5, y: 8.4, z: 0, dy: -12, node: callout('冷區 沖泡走道 · 4 人/時', 'bg-sky-500/30 border-sky-400/60 text-sky-100') },
    { key: 'o3', x: 14.5, y: 21.4, z: 0, dy: 10, node: callout('平均排隊 3.4 分', 'bg-amber-500/30 border-amber-400/60 text-amber-100') },
    { key: 'o4', x: 24.2, y: 8.2, z: 2.4, dy: -14, node: callout('停留 96 秒 · 未購買', 'bg-fuchsia-500/30 border-fuchsia-400/60 text-fuchsia-100') },
  ];

  const dims = [
    '進店人次與滯留時間',
    '走道覆蓋率（走過幾條）',
    '貨架前停留秒數',
    '拿起 / 放回 / 帶走',
    '排隊長度與放棄結帳',
    '無效走動距離',
  ];

  return (
    <TwinSlideShell
      chapter="LAYER 2 · 感知孿生"
      chapterColor="text-cyan-400"
      chapterDot="bg-cyan-400"
      pageLabel="11 / 22"
      compact
      title={<>同一座賣場，<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-400">這一次有人</span></>}
      subtitle="地板上的顏色不是裝飾，是實測熱區。紅色代表人流密度前 10%，藍色代表後 20%——第一層完全推估不出這張圖。"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-[70] relative h-full">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-2 h-full flex items-center justify-center">
            <VoxelScene boxes={boxes} overlays={overlays} scale={0.8} pad={12} className="mx-auto" />
          </div>
          <div className="absolute bottom-1 left-4 flex items-center gap-4 text-[10px] font-mono tracking-widest text-slate-500">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />HIGH</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />MID</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-blue-500" />LOW</span>
            <span className="text-slate-600">· 週六 16:00 快照</span>
          </div>
        </div>

        <div className="flex-[30] flex flex-col gap-3.5 h-full">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-2.5">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-[13.5px] font-black text-white">新增的六個可觀測維度</span>
            </div>
            <ul className="space-y-3 flex-1 flex flex-col justify-center">
              {dims.map((dim) => (
                <li key={dim} className="flex gap-2 text-[12px] text-slate-300 leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-[6px] flex-shrink-0" />
                  <span>{dim}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {[
              { icon: Clock, v: '14.2 分', k: '平均滯留' },
              { icon: Flame, v: '58%', k: '走道覆蓋率' },
              { icon: Snowflake, v: '3 條', k: '長期冷走道' },
              { icon: Users, v: '21%', k: '空手離店' },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.k} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
                  <Icon className="w-3.5 h-3.5 text-cyan-400 mb-1.5" />
                  <div className="text-[17px] font-black text-white leading-none font-mono">{stat.v}</div>
                  <div className="text-[10px] text-slate-500 mt-1.5">{stat.k}</div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-rose-400/30 bg-gradient-to-br from-rose-400/[0.12] to-transparent px-4 py-3.5">
            <p className="text-[13.5px] text-white leading-snug font-bold">
              最貴的發現：全店 <span className="text-rose-300 font-mono">41%</span> 的貨架，一整天沒有任何人在它面前停超過 3 秒。
            </p>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
