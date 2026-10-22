'use client';

import { TrainFront, TrendingUp, TrendingDown } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';
import VoxelScene from '@/components/slide/voxel_store';
import type { IVoxelBox } from '@/components/slide/voxel_store';
import { buildMarketBase, voxelPerson, voxelTram, heatTile } from '@/components/slide/voxel_market_layout';

export default function IsunfaRetailTwinSlide17() {
  const station: IVoxelBox[] = [
    { key: 'st-slab', x: 32.6, y: 11.6, z: -0.5, w: 12.4, d: 8.4, h: 0.5, color: '#aeb8c2', sortBias: -900 },
    { key: 'st-platform', x: 33.8, y: 12.8, w: 10.2, d: 2.2, h: 0.7, color: '#93a1ad' },
    { key: 'st-pillar-1', x: 34.0, y: 13.0, z: 0.7, w: 0.35, d: 0.35, h: 2.0, color: '#78909c', pixelate: false },
    { key: 'st-pillar-2', x: 43.4, y: 13.0, z: 0.7, w: 0.35, d: 0.35, h: 2.0, color: '#78909c', pixelate: false },
    { key: 'st-pillar-3', x: 34.0, y: 14.6, z: 0.7, w: 0.35, d: 0.35, h: 2.0, color: '#78909c', pixelate: false },
    { key: 'st-pillar-4', x: 43.4, y: 14.6, z: 0.7, w: 0.35, d: 0.35, h: 2.0, color: '#78909c', pixelate: false },
    { key: 'st-roof', x: 33.5, y: 12.5, z: 2.7, w: 10.9, d: 3.0, h: 0.3, color: '#6b7c8c' },
    { key: 'st-rail-1', x: 33.6, y: 16.3, w: 10.8, d: 0.28, h: 0.14, color: '#5d6d7a', pixelate: false },
    { key: 'st-rail-2', x: 33.6, y: 17.6, w: 10.8, d: 0.28, h: 0.14, color: '#5d6d7a', pixelate: false },
    ...voxelTram(35.2, 16.2, 7.2),
  ];

  const walkway: IVoxelBox[] = [
    heatTile(32.4, 19.6, 1.5, 3.4, '#22d3ee', 0.78, 'wk-0'),
    heatTile(16.4, 22.3, 17.5, 1.3, '#22d3ee', 0.78, 'wk-1'),
    heatTile(16.4, 21.4, 3.6, 1.0, '#22d3ee', 0.72, 'wk-2'),
  ];

  const proposals: IVoxelBox[] = [
    heatTile(17.6, 16.9, 10.2, 1.5, '#34d399', 0.72, 'pp-1'),
    { key: 'self-checkout-1', x: 22.9, y: 18.6, w: 1.5, d: 1.6, h: 1.1, color: '#34d399' },
    { key: 'self-checkout-2', x: 24.7, y: 18.6, w: 1.5, d: 1.6, h: 1.1, color: '#34d399' },
  ];

  const crowd = [
    ...voxelPerson(33.3, 20.6, { shirt: '#4dd0e1', key: 'w1' }),
    ...voxelPerson(30.4, 22.6, { shirt: '#f4a63a', key: 'w2' }),
    ...voxelPerson(26.8, 22.7, { shirt: '#ef7fa5', key: 'w3' }),
    ...voxelPerson(23.2, 22.6, { shirt: '#9575cd', key: 'w4' }),
    ...voxelPerson(19.6, 22.7, { shirt: '#7cb342', key: 'w5' }),
    ...voxelPerson(17.2, 21.6, { shirt: '#e05c5c', key: 'w6' }),
    ...voxelPerson(37.4, 13.6, { shirt: '#26a69a', key: 'w7' }),
    ...voxelPerson(40.2, 13.5, { shirt: '#5c6bc0', key: 'w8' }),
    ...voxelPerson(15.2, 20.9, { shirt: '#4dd0e1', key: 'w9' }),
    ...voxelPerson(21.4, 17.6, { shirt: '#f4a63a', key: 'w10' }),
    ...voxelPerson(24.8, 17.5, { shirt: '#ef7fa5', key: 'w11' }),
    ...voxelPerson(16.5, 14.1, { shirt: '#9575cd', key: 'w12' }),
    ...voxelPerson(23.6, 20.4, { shirt: '#7cb342', key: 'w13' }),
  ];

  const boxes = [...buildMarketBase(), ...station, ...walkway, ...proposals, ...crowd];

  const tag = (text: string, tone: string) => (
    <div className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold whitespace-nowrap border backdrop-blur-sm shadow-lg ${tone}`}>{text}</div>
  );

  const overlays = [
    { key: 'v1', x: 39, y: 13.8, z: 3.0, dy: -16, node: tag('新設輕軌站（400 m）', 'bg-cyan-500/30 border-cyan-400/60 text-cyan-100') },
    { key: 'v2', x: 25, y: 22.9, z: 0, dy: 12, node: tag('新增步行動線 · +2,900 人次/日', 'bg-cyan-500/25 border-cyan-400/50 text-cyan-100') },
    { key: 'v3', x: 17.8, y: 17.6, z: 0, dx: -46, dy: -18, node: tag('建議：入口即食輕量帶', 'bg-emerald-500/30 border-emerald-400/60 text-emerald-100') },
    { key: 'v4', x: 25.4, y: 18.6, z: 1.1, dx: 44, dy: -26, node: tag('＋2 台自助結帳', 'bg-emerald-500/25 border-emerald-400/50 text-emerald-100') },
  ];

  const results = [
    { k: '進店人次', v: '+23%', sub: '平日 +18% · 假日 +31%', up: true },
    { k: '平均客單價', v: '−22%', sub: 'NT$412 → NT$321', up: false },
    { k: '總營收', v: '−4.2%', sub: '人次 × 客單價，95% CI：−9.1% ~ +0.8%', up: false },
    { k: '大包裝品類', v: '−24%', sub: '米、衛生紙、飲料箱購', up: false },
    { k: '即食與單人份', v: '+38%', sub: '御飯糰、鮮食、小包裝', up: true },
    { k: '步行到店比', v: '+19%', sub: '機車停車需求同步 −16%', up: true },
  ];

  return (
    <TwinSlideShell
      chapter="情境 A · 車站"
      chapterColor="text-cyan-400"
      chapterDot="bg-cyan-400"
      pageLabel="17 / 22"
      compact
      title={<>如果 400 公尺外，<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">多了一座輕軌站？</span></>}
      subtitle="以示範門市模擬 12 個月。青色是新生成的步行動線，綠色是模擬建議的改造區——這兩者都不是人畫的，是跑出來的。"
    >
      <div className="flex gap-5 h-full">

        <div className="flex-[66] h-full">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-2 h-full flex items-center justify-center">
            <VoxelScene boxes={boxes} overlays={overlays} scale={0.6} pad={12} className="mx-auto" />
          </div>
        </div>

        <div className="flex-[34] flex flex-col gap-3.5 h-full">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <TrainFront className="w-4 h-4 text-cyan-400" />
              <span className="text-[13.5px] font-black text-white">模擬結果（12 個月）</span>
            </div>
            <div className="space-y-[9px] flex-1 flex flex-col justify-center">
              {results.map((row) => (
                <div key={row.k} className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-bold text-slate-200 leading-tight">{row.k}</div>
                    <div className="text-[9.5px] text-slate-500 leading-tight mt-[2px]">{row.sub}</div>
                  </div>
                  <div className={`flex items-center gap-1 flex-shrink-0 ${row.up ? 'text-emerald-300' : 'text-rose-300'}`}>
                    {row.up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    <span className="text-[15px] font-black font-mono">{row.v}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/[0.12] to-transparent px-4 py-3.5">
            <p className="text-[15px] font-black text-white leading-snug">
              車站帶來的不是「更多營收」，<br />
              是<span className="text-amber-300">「更多人、更小的籃子」。</span>
            </p>
            <p className="text-[11.5px] text-slate-400 mt-2 leading-relaxed">
              上表是門市<span className="text-white font-bold">完全不調整</span>的結果：人變多、隊變長、大包裝賣不動，卻沒有東西接住新客群。
              若依模擬建議改造入口即食帶、增設 2 台自助結帳、開通箱購宅配，同一批代理人跑出來的營收會從
              <span className="font-mono font-bold text-rose-300"> −4.2% </span>翻成
              <span className="font-mono font-bold text-emerald-300"> +9.5%</span>。
            </p>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
