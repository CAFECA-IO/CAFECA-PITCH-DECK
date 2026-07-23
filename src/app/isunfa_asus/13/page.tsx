'use client';

import Image from 'next/image';
import { MonitorPlay, LogIn, ScanSearch, FileCheck2, Network, Mail, Globe } from 'lucide-react';

export default function IsunfaAsusSlide13() {
  const demo = [
    { icon: LogIn, title: 'SSO 登入體驗', desc: '數位身分免密碼登入 EIP 與 App Launcher。' },
    { icon: ScanSearch, title: 'AI 自動盤查', desc: 'FAITH 自動歸集數據並判定異常單據。' },
    { icon: FileCheck2, title: '可審計報告', desc: '一鍵產出報告並上鏈存證，即時驗證。' },
    { icon: Network, title: 'EIP 整合模擬', desc: '依組織架構自動判定簽核與代理權限。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex border border-slate-800 text-white font-sans">

      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] bg-orange-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full mix-blend-screen filter blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]"></div>

      {/* Left: Demo */}
      <div className="z-10 w-[58%] h-full flex flex-col justify-center px-16">
        <div className="inline-flex items-center gap-2 self-start mb-6 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-400/30 text-orange-300 text-sm font-bold tracking-wider">
          <MonitorPlay className="w-4 h-4" />
          07 · 現場 Demo（3–5 分鐘）
        </div>
        <h2 className="text-4xl font-black tracking-tight mb-6">Demo：現有解決方案</h2>
        <div className="grid grid-cols-2 gap-3">
          {demo.map((d, i) => (
            <div key={d.title} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                  <d.icon className="w-4 h-4" strokeWidth={1.8} />
                </div>
                <span className="text-xs font-black text-slate-500">0{i + 1}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{d.title}</h3>
              <p className="text-[12px] text-slate-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: thanks + contact */}
      <div className="z-10 w-[42%] h-full flex flex-col justify-center px-14 border-l border-white/10 bg-white/[0.02]">
        <Image src="/isunfa_logo.svg" alt="iSunFA" width={150} height={42} className="object-contain mb-8 opacity-90" />
        <h3 className="text-3xl font-black tracking-tight mb-3">攜手 ASUS<br />共創智慧製造標竿</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          期待以 iSunFA × EIP 的深度整合，成為 ASUS ExpertHub 生態的長期夥伴。
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-slate-300">
            <Mail className="w-4 h-4 text-orange-400" />
            <span>luphia.chang@cafeca.com.tw</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Globe className="w-4 h-4 text-orange-400" />
            <span>卡菲卡金融科技股份有限公司 · CAFECA</span>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-500 tracking-widest uppercase">Thank You · 2026</p>
      </div>
    </div>
  );
}
