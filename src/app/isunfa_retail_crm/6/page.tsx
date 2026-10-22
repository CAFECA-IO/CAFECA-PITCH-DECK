'use client';

import CrmSlideShell from '@/components/slide/crm_slide_shell';
import VoxelScene from '@/components/slide/voxel_store';
import { buildMarketBase } from '@/components/slide/voxel_market_layout';

export default function RetailCrmSlide6() {
  const boxes = buildMarketBase();

  const zoneTag = (text: string, tone: string) => (
    <div className={`px-2 py-[3px] rounded-md text-[10px] font-bold tracking-wider whitespace-nowrap border shadow-sm ${tone}`}>
      {text}
    </div>
  );

  const overlays = [
    { key: 'z1', x: 14, y: 1.3, z: 2.6, dy: -14, node: zoneTag('冷藏冷凍牆', 'bg-white border-slate-300 text-slate-700') },
    { key: 'z2', x: 8, y: 7.0, z: 2.2, dy: -12, node: zoneTag('乾貨 × 4 走道', 'bg-white border-slate-300 text-slate-700') },
    { key: 'z3', x: 21.5, y: 6.2, z: 2.3, dy: -12, node: zoneTag('飲料 / 家用 / 嬰幼兒', 'bg-white border-slate-300 text-slate-700') },
    { key: 'z4', x: 4.4, y: 16.4, z: 0.9, dy: -12, node: zoneTag('生鮮', 'bg-white border-slate-300 text-slate-700') },
    { key: 'z5', x: 11.8, y: 16.2, z: 1.6, dy: -12, node: zoneTag('季節 / 文具', 'bg-white border-slate-300 text-slate-700') },
    { key: 'z6', x: 25.5, y: 15.9, z: 1.7, dy: -12, node: zoneTag('銀髮保健', 'bg-white border-slate-300 text-slate-700') },
    { key: 'z7', x: 15, y: 19.4, z: 1.0, dy: -10, node: zoneTag('收銀線 × 6', 'bg-white border-slate-300 text-slate-700') },
    { key: 'z8', x: 16.3, y: 21.3, z: 0, dy: 6, node: zoneTag('主要出入口', 'bg-orange-50 border-orange-300 text-orange-700') },
  ];

  const steps = [
    { no: '01', title: '品項 → 座標', desc: '把 POS 明細的每個 SKU，對映到貨架配置圖上的格位座標。' },
    { no: '02', title: '同筆發票 → 動線約束', desc: '同一張發票的品項，必然被同一個人在數分鐘內依序走過。' },
    { no: '03', title: '千萬筆 → 機率動線', desc: '以掃描時序加上最短路徑求解，估出每種購物任務的行走軌跡。' },
    { no: '04', title: '重建 → 客戶足跡', desc: '輸出每個客群走過哪些區、漏掉哪些區、在哪裡結束購物。' },
  ];

  return (
    <CrmSlideShell
      chapter="LAYER 1 · 交易層"
      pageLabel="06 / 20"
      compact
      title={<>第一層：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">用交易明細，還原客戶走過的路</span></>}
      subtitle="示範門市約 200 坪、6 條收銀線。不裝任何一支攝影機，只要 POS 明細、商品主檔、貨架配置圖，就能把二維帳本還原成三維場域。"
    >
      <div className="flex gap-7 h-full">

        <div className="flex-[62] relative h-full">
          <div className="rounded-2xl border border-slate-200 bg-white p-2 h-full flex items-center justify-center shadow-sm">
            <VoxelScene boxes={boxes} overlays={overlays} scale={0.72} pad={12} className="mx-auto" />
          </div>
          <div className="absolute bottom-1 left-4 flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            RECONSTRUCTED FROM LEDGER · 0 CAMERA
          </div>
        </div>

        <div className="flex-[38] flex flex-col justify-between pt-1 h-full">
          {steps.map((step) => (
            <div key={step.no} className="rounded-xl border border-slate-200 bg-white px-4 py-3 flex gap-3 shadow-sm">
              <span className="text-[15px] font-black font-mono text-orange-600 leading-none pt-[3px]">{step.no}</span>
              <div>
                <div className="text-[15px] font-black text-slate-900 leading-tight">{step.title}</div>
                <p className="text-[12.5px] text-slate-500 leading-snug mt-1">{step.desc}</p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-2">
            {[
              { v: '3 份', k: '輸入檔案' },
              { v: '±1.4', k: '重建誤差(格)' },
              { v: '24 hr', k: '首次建模' },
            ].map((item) => (
              <div key={item.k} className="rounded-xl border border-orange-200 bg-orange-50 px-3 py-2.5 text-center">
                <div className="text-[19px] font-black text-orange-600 leading-none">{item.v}</div>
                <div className="text-[10.5px] text-slate-500 mt-1.5">{item.k}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
