'use client';

import { Users, CreditCard, Smartphone, LayoutGrid, KeyRound, Network, Fingerprint, LockKeyhole, Link as LinkIcon, Bot, ChevronDown } from 'lucide-react';

export default function IsunfaAsusSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-20 w-full px-16 pt-10 pb-3">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-orange-500 tracking-widest">05</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">EIP Integration</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-[11px] font-bold tracking-wide">本簡報核心</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight mt-3">整合總覽：CAFECA 信任層 × ASUS EIP × iSunFA AI</h2>
        <p className="text-sm text-slate-500 mt-1.5 font-medium">以數位身分為橋樑，讓 EIP 成為「登入即簽核、感應即啟動」的智慧製造中樞</p>
      </div>

      <div className="z-20 flex-1 flex flex-col justify-center px-16 pb-8 gap-2">

        {/* Layer 1: users / touchpoints */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-48 flex-shrink-0">
              <Users className="w-5 h-5 text-slate-500" />
              <p className="text-sm font-bold text-slate-700">使用者觸點</p>
            </div>
            <div className="flex gap-3 flex-1 justify-end">
              {[{ i: CreditCard, t: '晶片員工識別證' }, { i: Smartphone, t: '行動裝置 / GPS' }, { i: LayoutGrid, t: 'EIP 登入' }].map((x) => (
                <div key={x.t} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2">
                  <x.i className="w-4 h-4 text-slate-500" />
                  <span className="text-xs font-semibold text-slate-600">{x.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-slate-300" /></div>

        {/* Layer 2: ASUS EIP */}
        <div className="bg-slate-800 rounded-2xl shadow-md px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="w-48 flex-shrink-0">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Platform</p>
              <p className="text-sm font-black">ASUS EIP 企業入口網</p>
            </div>
            <div className="flex gap-3 flex-1 justify-end">
              {[{ i: LayoutGrid, t: 'App Launcher' }, { i: KeyRound, t: 'SSO 單一登入' }, { i: Network, t: '組織架構' }].map((x) => (
                <div key={x.t} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <x.i className="w-4 h-4 text-orange-300" />
                  <span className="text-xs font-semibold text-slate-100">{x.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-slate-300" /></div>

        {/* Layer 3: CAFECA trust layer */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-md px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="w-48 flex-shrink-0">
              <p className="text-[11px] font-bold text-blue-100 uppercase tracking-wider">Trust Layer</p>
              <p className="text-sm font-black">CAFECA 數位信任層</p>
            </div>
            <div className="flex gap-3 flex-1 justify-end">
              {[{ i: Fingerprint, t: 'DID 身分認證' }, { i: LockKeyhole, t: '同態加密' }, { i: LinkIcon, t: '區塊鏈存證' }].map((x) => (
                <div key={x.t} className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <x.i className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white">{x.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-slate-300" /></div>

        {/* Layer 4: iSunFA app */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-md px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="w-48 flex-shrink-0 flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <div>
                <p className="text-[11px] font-bold text-orange-100 uppercase tracking-wider">AI App</p>
                <p className="text-sm font-black">iSunFA · FAITH 模型</p>
              </div>
            </div>
            <div className="flex gap-3 flex-1 justify-end">
              {['AI 自動判定異常單據', '組織架構自動簽核', '碳會計 EIP 模組'].map((t) => (
                <div key={t} className="bg-white/15 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
