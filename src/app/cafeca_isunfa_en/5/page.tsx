'use client';

import Image from 'next/image';
import { Eye, FileText, Cpu, ArrowRight } from 'lucide-react';

export default function CafecaIsunfaSlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Info: (20260609 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-10 top-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[130px]"></div>
        <div className="absolute right-10 bottom-10 w-[500px] h-[500px] bg-sky-500 rounded-full filter blur-[130px]"></div>
      </div>

      {/* Info: (20260609 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">iSunFA Solution</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 leading-tight">
            The Green Eyes of Enterprises: AI Carbon Accountant — FAITH
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Info: (20260609 - Luphia) Content */}
      <div className="flex-1 px-16 flex flex-col justify-center relative z-10 w-full max-w-5xl mx-auto py-4">

        <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-8 rounded-3xl mb-8">
          <p className="text-lg text-slate-200 font-medium leading-relaxed text-justify">
            Centered on <strong className="text-emerald-400 mx-1 font-extrabold">Comprehensive Activity Vouchers</strong>, automatically reconciling purchase orders, shipping bills, transport sheets, and invoices. Integrated with an <strong className="text-sky-400 mx-1 font-extrabold">AI Auto-Prompting Mechanism</strong>, it guides precise manual document replenishment, balancing <strong className="text-emerald-300 mx-1 font-extrabold">automation efficiency</strong> and <strong className="text-sky-300 mx-1 font-extrabold">audit rigor</strong>.
          </p>
        </div>

        {/* Info: (20260609 - Luphia) Process Flow Diagram */}
        <div className="flex items-center justify-between gap-4 w-full">

          {/* Info: (20260609 - Luphia) Step 1: Inputs */}
          <div className="flex-1 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl flex flex-col items-center text-center relative group hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mb-3">
              <FileText size={24} />
            </div>
            <h4 className="font-bold text-slate-200 text-sm mb-1">Comprehensive Activity Vouchers</h4>
            <p className="text-[10px] text-slate-500 leading-normal">
              Auto-reconciles purchase orders, shipping bills, transport sheets, and invoices.
            </p>
          </div>

          <ArrowRight className="text-slate-600 flex-shrink-0" size={20} />

          {/* Info: (20260609 - Luphia) Step 2: AI Processor */}
          <div className="flex-1 bg-gradient-to-br from-emerald-950 to-emerald-900 border border-emerald-500/30 p-5 rounded-2xl flex flex-col items-center text-center relative group hover:border-emerald-500/50 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <Cpu size={24} />
            </div>
            <h4 className="font-bold text-emerald-300 text-sm mb-1">AI Reconciliation & Auto-Prompting</h4>
            <p className="text-[10px] text-emerald-100/70 leading-normal">
              Guides precise manual document replenishment, balancing efficiency and audit rigor.
            </p>
          </div>

          <ArrowRight className="text-slate-600 flex-shrink-0" size={20} />

          {/* Info: (20260609 - Luphia) Step 3: Outputs */}
          <div className="flex-1 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl flex flex-col items-center text-center relative group hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 mb-3">
              <Eye size={24} />
            </div>
            <h4 className="font-bold text-slate-200 text-sm mb-1">Audit Compliance & Verification</h4>
            <p className="text-[10px] text-slate-500 leading-normal">
              Generates highly trusted carbon footprint reports matching international standards.
            </p>
          </div>

        </div>

      </div>

      {/* Info: (20260609 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 05 / 13</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
