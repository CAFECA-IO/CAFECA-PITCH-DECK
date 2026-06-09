'use client';

import Image from 'next/image';
import { Cpu, Server, Database, Library, Workflow } from 'lucide-react';

export default function CafecaIsunfaSlide10() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 top-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-10 bottom-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-10 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Technical Barrier / Moat</span>
          </div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 leading-tight">
            專業壁壘：人工智能碳會計師－ 費思（FAITH）
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="opacity-80">
            <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
          </div>
          <div className="bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-xl text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-inner">
            <Server size={12} /> Taipei-1 Supercomputer Pre-trained
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex flex-col justify-center relative z-10 w-full max-w-5xl mx-auto pb-4 gap-4 mt-2">

        {/* Top: Description Banner */}
        <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-2xl flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500 text-slate-950 rounded-xl">
              <Cpu size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base">NVIDIA H100 算力集群預訓練</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                利用國家級 Taipei-1 超級電腦算力完成核心預訓練，融合 1990 至 2025 年全球企業公開數據。
              </p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block">Core Moat</span>
            <span className="text-xl font-bold text-emerald-400">製程級推理專家</span>
          </div>
        </div>

        {/* Stacked Architecture */}
        <div className="space-y-4">

          {/* Layer 1: Specialist Modules */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3">
                <Workflow className="text-emerald-400" size={18} />
                <span className="text-sm font-bold text-slate-200">跨表單自動勾稽引擎</span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Dynamic Check</span>
            </div>
            <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3">
                <Library className="text-sky-400" size={18} />
                <span className="text-sm font-bold text-slate-200">物理量化與化學方程式守恆</span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Physics Reasoning</span>
            </div>
          </div>

          {/* Layer 2: RAG DB */}
          <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <Database className="text-emerald-400" size={16} />
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">多模態 RAG 專業知識庫與訓練領域</h4>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {[
                "財務會計 (Financial)", "化學工程 (Chemical)",
                "環境工程 (Environmental)", "IFRS / GAAP 準則",
                "土木工程 (Civil)", "材料工程 (Materials)",
                "水利工程 (Hydraulic)", "製程最佳化路徑 (Path)"
              ].map((topic, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg py-2 px-1 text-center border border-slate-800 text-slate-300 text-xs font-medium hover:border-emerald-500/30 hover:bg-slate-900 transition-colors shadow-inner flex items-center justify-center">
                  <span className="truncate">{topic}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10 pointer-events-none">
        <div>Slide 10 / 13</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
