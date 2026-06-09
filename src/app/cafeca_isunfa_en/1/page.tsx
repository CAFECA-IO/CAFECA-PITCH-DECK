'use client';

import Image from 'next/image';
import { Leaf } from 'lucide-react';

export default function CafecaIsunfaSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-900 text-white font-sans">

      {/* Background Gradients representing Sunshine (Gold/Amber) and Green (Emerald) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-10 -top-10 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute left-1/3 top-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 z-0" />

      {/* Content Container */}
      <div className="z-10 text-center space-y-8 max-w-4xl px-8">

        {/* Brand Area with Official Logo */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/isunfa_logo.svg"
            alt="iSunFA Logo"
            width={280}
            height={80}
            style={{ width: '280px', height: 'auto' }}
            priority
          />
          <span className="text-emerald-400 font-extrabold tracking-[0.25em] text-xs border border-emerald-500/20 px-5 py-2 rounded-full uppercase bg-emerald-950/30 backdrop-blur-sm">
            CAFECA Fintech Co., Ltd.
          </span>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-7xl font-black tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 drop-shadow-md">
              iSunFA: AI-Powered Carbon Accounting
            </span>
          </h1>
          <p className="text-2xl text-slate-300 font-light tracking-wider mt-4">
            Leading East Asian Manufacturing Towards Ultimate Green Compliance
          </p>
        </div>

        {/* Divider Deco */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-emerald-500/50" />
          <Leaf className="w-5 h-5 text-emerald-400 animate-bounce" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-emerald-500/50" />
        </div>



      </div>

      {/* Footer / Deco */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Confidential Presentation</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          2026 CAFECA FINTECH
        </div>
      </div>

    </div>
  );
}
