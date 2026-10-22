'use client';

import { Radio, ArrowRight } from 'lucide-react';
import { MockLiveRoom } from '@/components/slide/mall_mockups';

export default function MallLiveSlide1() {
  const chain = ['直播前台', '訂單歸集', '供應商結算', '主播分潤', '財務對帳'];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0c0712] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">

      {/* Info: (20260902 - Luphia) 細格線底紋 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.26] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(168,162,192,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,162,192,0.14) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 -top-48 w-[760px] h-[760px] rounded-full bg-rose-500/12 blur-[160px]" />
        <div className="absolute right-[-160px] top-10 w-[760px] h-[760px] rounded-full bg-fuchsia-500/12 blur-[170px]" />
        <div className="absolute left-1/2 -bottom-72 w-[700px] h-[700px] rounded-full bg-violet-500/12 blur-[160px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-500" />

      <div className="z-10 flex items-center justify-between px-14 pt-9">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-violet-500 flex items-center justify-center text-[14px] font-black text-white shadow-lg">iM</span>
          <span className="text-[17px] font-black text-white tracking-wide">iSunTVMall</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-400/10 border border-rose-400/30">
          <Radio className="w-4 h-4 text-rose-300" />
          <span className="text-[13px] font-bold text-rose-300 tracking-wide">功能設計簡報 Feature Design Briefing</span>
        </div>
      </div>

      <div className="z-10 flex-1 flex items-center px-14 gap-10">

        <div className="flex-[58]">
          <div className="text-[15px] font-bold tracking-[0.3em] text-fuchsia-400 mb-5">LIVE COMMERCE × FINANCE ENGINE</div>

          <h1 className="text-[62px] font-black leading-[1.1] tracking-tight text-white">
            直播電商<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400">
              × 財務結算並進
            </span>
          </h1>

          <p className="mt-6 text-[21px] text-slate-300 font-medium leading-relaxed border-l-[3px] border-rose-400 pl-5">
            前台交給 Shopify 賣得快，<br />後台由財務系統算得準。
          </p>

          <div className="mt-8 flex items-center gap-2">
            {chain.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/12 text-[13px] font-bold text-slate-200">
                  {item}
                </span>
                {index < chain.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-slate-600" />}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[42] flex justify-center items-center">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-fuchsia-500/15 blur-[60px]" />
            <div className="relative rotate-[3deg]">
              <MockLiveRoom scale={1.02} />
            </div>
          </div>
        </div>

      </div>

      <div className="z-10 px-14 pb-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 flex items-center justify-between backdrop-blur-sm">
          <div className="text-[14px] text-slate-400">
            <span className="font-bold text-white">iSunTVMall 直播電商</span>
            <span className="mx-2.5 text-slate-700">·</span>
            <span className="font-bold text-white">財務結算系統功能設計</span>
          </div>
          <div className="text-[12px] text-slate-500 font-mono tracking-widest">2026.09</div>
        </div>
      </div>

    </div>
  );
}
