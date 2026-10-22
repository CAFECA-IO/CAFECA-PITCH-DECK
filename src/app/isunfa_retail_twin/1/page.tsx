'use client';

import Image from 'next/image';
import { Boxes, ArrowRight } from 'lucide-react';
import VoxelScene from '@/components/slide/voxel_store';
import { buildMarketBase, voxelPerson } from '@/components/slide/voxel_market_layout';

export default function IsunfaRetailTwinSlide1() {
  const boxes = [
    ...buildMarketBase(),
    ...voxelPerson(6.2, 5.4, { shirt: '#f4a63a', key: 'c1' }),
    ...voxelPerson(10.4, 8.2, { shirt: '#4dd0e1', key: 'c2' }),
    ...voxelPerson(19.7, 6.4, { shirt: '#ef7fa5', key: 'c3' }),
    ...voxelPerson(16.5, 11.1, { shirt: '#7cb342', key: 'c4' }),
    ...voxelPerson(12.6, 14.1, { shirt: '#9575cd', key: 'c5' }),
    ...voxelPerson(15.9, 20.9, { shirt: '#e05c5c', key: 'c6' }),
  ];

  const chain = ['會計帳本', '三維場域', '感知孿生', '情境推理'];

  return (
    <div className="w-[1280px] h-[720px] bg-[#070b14] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">

      {/* Info: (20260826 - Luphia) 藍圖格線底紋 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 -top-48 w-[760px] h-[760px] rounded-full bg-emerald-500/12 blur-[160px]" />
        <div className="absolute right-[-160px] top-10 w-[760px] h-[760px] rounded-full bg-cyan-500/12 blur-[170px]" />
        <div className="absolute left-1/2 -bottom-72 w-[700px] h-[700px] rounded-full bg-indigo-500/12 blur-[160px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500" />

      <div className="z-10 flex items-center justify-between px-14 pt-9">
        <Image src="/cafeca_logo.svg" alt="CAFECA" width={150} height={44} className="object-contain brightness-0 invert opacity-90" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/30">
          <Boxes className="w-4 h-4 text-emerald-300" />
          <span className="text-[13px] font-bold text-emerald-300 tracking-wide">技術簡報 Technical Briefing</span>
        </div>
      </div>

      <div className="z-10 flex-1 flex items-center px-14 gap-8">

        <div className="flex-[54]">
          <div className="text-[15px] font-bold tracking-[0.3em] text-cyan-400 mb-5">RETAIL DIGITAL TWIN</div>
          <div className="text-[13px] text-slate-500 mb-4">分析樣本標的：國內某全國性連鎖超市 · 高雄門市群 12 家（去識別化 · 模擬推估）</div>

          <h1 className="text-[66px] font-black leading-[1.08] tracking-tight text-white">
            大型賣場<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">
              數位孿生
            </span>
          </h1>

          <p className="mt-6 text-[21px] text-slate-300 font-medium leading-relaxed border-l-[3px] border-emerald-400 pl-5">
            從一張會計報表，<br />長出一座會呼吸的賣場。
          </p>

          <div className="mt-8 flex items-center gap-2.5">
            {chain.map((item, index) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="px-3.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/12 text-[13px] font-bold text-slate-200">
                  {item}
                </span>
                {index < chain.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-slate-600" />}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[46] flex justify-center">
          <VoxelScene boxes={boxes} scale={0.52} pad={8} />
        </div>

      </div>

      <div className="z-10 px-14 pb-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 flex items-center justify-between backdrop-blur-sm">
          <div className="text-[14px] text-slate-400">
            <span className="font-bold text-white">CAFECA 卡菲卡金融科技</span>
            <span className="mx-2.5 text-slate-700">·</span>
            <span className="font-bold text-white">iSunFA 陽光智能碳會計</span>
          </div>
          <div className="text-[12px] text-slate-500 font-mono tracking-widest">2026.08</div>
        </div>
      </div>

    </div>
  );
}
