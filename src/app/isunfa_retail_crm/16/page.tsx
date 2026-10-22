'use client';

import { TrainFront, TrendingUp, TrendingDown } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';
import VoxelScene from '@/components/slide/voxel_store';
import type { IVoxelBox } from '@/components/slide/voxel_store';
import { buildMarketBase, voxelPerson, voxelTram, heatTile } from '@/components/slide/voxel_market_layout';

export default function RetailCrmSlide16() {
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
    heatTile(32.4, 19.6, 1.5, 3.4, '#64748b', 0.7, 'wk-0'),
    heatTile(16.4, 22.3, 17.5, 1.3, '#64748b', 0.7, 'wk-1'),
    heatTile(16.4, 21.4, 3.6, 1.0, '#64748b', 0.65, 'wk-2'),
  ];

  const proposals: IVoxelBox[] = [
    heatTile(17.6, 16.9, 10.2, 1.5, '#fb923c', 0.55, 'pp-1'),
    { key: 'self-checkout-1', x: 22.9, y: 18.6, w: 1.5, d: 1.6, h: 1.1, color: '#fb923c' },
    { key: 'self-checkout-2', x: 24.7, y: 18.6, w: 1.5, d: 1.6, h: 1.1, color: '#fb923c' },
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
    <div className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold whitespace-nowrap border shadow-sm ${tone}`}>{text}</div>
  );

  const overlays = [
    { key: 'v1', x: 39, y: 13.8, z: 3.0, dy: -16, node: tag('新設輕軌站（400 m）', 'bg-white border-slate-300 text-slate-700') },
    { key: 'v2', x: 25, y: 22.9, z: 0, dy: 12, node: tag('新增步行動線 · +2,900 人次/日', 'bg-orange-50 border-orange-300 text-orange-700') },
    { key: 'v3', x: 17.8, y: 17.6, z: 0, dx: -46, dy: -18, node: tag('建議：入口即食輕量帶', 'bg-white border-orange-300 text-orange-700') },
    { key: 'v4', x: 25.4, y: 18.6, z: 1.1, dx: 44, dy: -26, node: tag('＋2 台自助結帳', 'bg-white border-orange-300 text-orange-700') },
  ];

  const results = [
    { k: '進店人次', v: '+23%', sub: '平日 +18% · 假日 +31%', up: true },
    { k: '平均客單價', v: '−22%', sub: 'NT$412 → NT$321', up: false },
    { k: '總營收', v: '−4.2%', sub: '人次 × 客單價，95% CI：−9.1% ~ +0.8%', up: false },
    { k: '家庭週末客占比', v: '−9pp', sub: '被輕量即食客群稀釋', up: false },
    { k: '新客佔比', v: '+31%', sub: '大量首購、未入會的通勤客', up: true },
    { k: '會員辨識率', v: '−11pp', sub: '匆忙通勤客不願掏會員卡', up: false },
  ];

  return (
    <CrmSlideShell
      chapter="LAYER 3 · 情境模擬"
      pageLabel="16 / 20"
      compact
      title={<>如果 400 公尺外，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">多了一座輕軌站？</span></>}
      subtitle="第三層讓 CRM 從「記錄過去的客人」變成「預測明天的客群結構」。灰色是新生成的步行動線，橘色是模擬建議的改造區。"
    >
      <div className="flex gap-5 h-full">

        <div className="flex-[66] h-full">
          <div className="rounded-2xl border border-slate-200 bg-white p-2 h-full flex items-center justify-center shadow-sm">
            <VoxelScene boxes={boxes} overlays={overlays} scale={0.6} pad={12} className="mx-auto" />
          </div>
        </div>

        <div className="flex-[34] flex flex-col gap-3.5 h-full">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 flex-1 flex flex-col shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <TrainFront className="w-4 h-4 text-slate-500" />
              <span className="text-[13.5px] font-black text-slate-900">客群結構模擬（12 個月）</span>
            </div>
            <div className="space-y-[9px] flex-1 flex flex-col justify-center">
              {results.map((row) => (
                <div key={row.k} className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-bold text-slate-700 leading-tight">{row.k}</div>
                    <div className="text-[9.5px] text-slate-400 leading-tight mt-[2px]">{row.sub}</div>
                  </div>
                  <div className={`flex items-center gap-1 flex-shrink-0 ${row.up ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {row.up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    <span className="text-[15px] font-black font-mono">{row.v}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/50 px-4 py-3.5">
            <p className="text-[15px] font-black text-slate-900 leading-snug">
              車站帶來的不是「更多營收」，<br />
              是<span className="text-orange-600">「更多人、更小的籃子」。</span>
            </p>
            <p className="text-[11.5px] text-slate-500 mt-2 leading-relaxed">
              上表是門市<span className="text-slate-900 font-bold">完全不調整</span>的結果。若依模擬建議改造入口即食帶、增設自助結帳、
              並針對通勤新客設計一鍵入會，營收會從 <span className="font-mono font-bold text-rose-600">−4.2%</span> 翻成
              <span className="font-mono font-bold text-emerald-600"> +9.5%</span>。
            </p>
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
