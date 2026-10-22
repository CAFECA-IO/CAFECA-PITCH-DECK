'use client';

import TwinSlideShell from '@/components/slide/twin_slide_shell';
import VoxelScene from '@/components/slide/voxel_store';
import { buildMarketBase } from '@/components/slide/voxel_market_layout';

export default function IsunfaRetailTwinSlide6() {
  const boxes = buildMarketBase();

  const zoneTag = (text: string, tone: string) => (
    <div className={`px-2 py-[3px] rounded-md text-[10px] font-bold tracking-wider whitespace-nowrap border backdrop-blur-sm ${tone}`}>
      {text}
    </div>
  );

  const overlays = [
    { key: 'z1', x: 14, y: 1.3, z: 2.6, dy: -14, node: zoneTag('冷藏冷凍牆', 'bg-cyan-500/25 border-cyan-400/50 text-cyan-200') },
    { key: 'z2', x: 8, y: 7.0, z: 2.2, dy: -12, node: zoneTag('乾貨 × 4 走道', 'bg-amber-500/25 border-amber-400/50 text-amber-200') },
    { key: 'z3', x: 21.5, y: 6.2, z: 2.3, dy: -12, node: zoneTag('飲料 / 家用 / 嬰幼兒', 'bg-indigo-500/25 border-indigo-400/50 text-indigo-200') },
    { key: 'z4', x: 4.4, y: 16.4, z: 0.9, dy: -12, node: zoneTag('生鮮', 'bg-emerald-500/25 border-emerald-400/50 text-emerald-200') },
    { key: 'z5', x: 11.8, y: 16.2, z: 1.6, dy: -12, node: zoneTag('季節 / 文具', 'bg-fuchsia-500/25 border-fuchsia-400/50 text-fuchsia-200') },
    { key: 'z6', x: 25.5, y: 15.9, z: 1.7, dy: -12, node: zoneTag('銀髮保健', 'bg-violet-500/25 border-violet-400/50 text-violet-200') },
    { key: 'z7', x: 15, y: 19.4, z: 1.0, dy: -10, node: zoneTag('收銀線 × 6', 'bg-slate-400/25 border-slate-300/50 text-slate-200') },
    { key: 'z8', x: 16.3, y: 21.3, z: 0, dy: 6, node: zoneTag('主要出入口', 'bg-teal-500/30 border-teal-300/50 text-teal-100') },
  ];

  const steps = [
    {
      no: '01',
      title: '品項 → 座標',
      desc: '把 POS 逐筆明細的 SKU，對映到貨架配置圖（Planogram）的格位座標。',
    },
    {
      no: '02',
      title: '同筆發票 → 動線約束',
      desc: '同一張發票裡的品項，必然被同一個人在數分鐘內依序走過，形成路徑約束條件。',
    },
    {
      no: '03',
      title: '千萬筆 → 機率動線',
      desc: '以掃描時序 + 最短路徑求解，估出每種購物任務最可能的行走軌跡。',
    },
    {
      no: '04',
      title: '重建 → 三維場域',
      desc: '輸出熱門走道、死角、每一格貨架的坪效與交叉貢獻度。',
    },
  ];

  return (
    <TwinSlideShell
      chapter="LAYER 1 · 帳本孿生"
      chapterColor="text-emerald-400"
      chapterDot="bg-emerald-400"
      pageLabel="06 / 22"
      compact
      title={<>第一層：<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">用交易明細，長出一座賣場</span></>}
      subtitle="示範門市約 200 坪、6 條收銀線。不裝任何一支攝影機，只要 POS 逐筆明細、商品主檔、貨架配置圖三份檔案，就能把二維帳本還原成三維場域。"
    >
      <div className="flex gap-7 h-full">

        <div className="flex-[62] relative h-full">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-2 h-full flex items-center justify-center">
            <VoxelScene boxes={boxes} overlays={overlays} scale={0.72} pad={12} className="mx-auto" />
          </div>
          <div className="absolute bottom-1 left-4 flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            RECONSTRUCTED FROM LEDGER · 0 CAMERA
          </div>
        </div>

        <div className="flex-[38] flex flex-col justify-between pt-1 h-full">
          {steps.map((step) => (
            <div key={step.no} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 flex gap-3">
              <span className="text-[15px] font-black font-mono text-emerald-400 leading-none pt-[3px]">{step.no}</span>
              <div>
                <div className="text-[15px] font-black text-white leading-tight">{step.title}</div>
                <p className="text-[12.5px] text-slate-400 leading-snug mt-1">{step.desc}</p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-2">
            {[
              { v: '3 份', k: '輸入檔案' },
              { v: '±1.4', k: '重建誤差(格)' },
              { v: '24 hr', k: '首次建模' },
            ].map((item) => (
              <div key={item.k} className="rounded-xl border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-2.5 text-center">
                <div className="text-[19px] font-black text-emerald-300 leading-none">{item.v}</div>
                <div className="text-[10.5px] text-slate-400 mt-1.5">{item.k}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
