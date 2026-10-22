'use client';

import { Microscope, EyeOff, UsersRound, FlaskConical } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';
import SlideQRCode from '@/components/slide/slide_qr_code';

export default function IsunfaRetailTwinSlide22() {
  const shifts = [
    {
      no: '01',
      icon: Microscope,
      from: '記錄結果',
      to: '還原機制',
      body: '報表給你果，孿生給你因。',
      accent: 'text-emerald-300',
      ring: 'border-emerald-400/30',
      bg: 'bg-emerald-400/[0.06]',
    },
    {
      no: '02',
      icon: EyeOff,
      from: '已發生',
      to: '沒發生',
      body: '沒買、猶豫、缺貨，第一次有了金額。',
      accent: 'text-cyan-300',
      ring: 'border-cyan-400/30',
      bg: 'bg-cyan-400/[0.06]',
    },
    {
      no: '03',
      icon: UsersRound,
      from: '平均客層',
      to: '每一個人',
      body: '平均值只是六種人互相抵消後的殘影。',
      accent: 'text-violet-300',
      ring: 'border-violet-400/30',
      bg: 'bg-violet-400/[0.06]',
    },
    {
      no: '04',
      icon: FlaskConical,
      from: '事後檢討',
      to: '事前試錯',
      body: '在孿生世界跑一百次，再動現實世界一次。',
      accent: 'text-amber-300',
      ring: 'border-amber-400/30',
      bg: 'bg-amber-400/[0.06]',
    },
  ];

  return (
    <TwinSlideShell
      chapter="結語 · CLOSING"
      chapterColor="text-white"
      chapterDot="bg-white"
      pageLabel="22 / 22"
      compact
      title={<>AI 為我們<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">擴大思考的維度</span></>}
      subtitle="同一張損益表，這一次多了四個可以提問的維度。"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 gap-4 h-full">
            {shifts.map((shift) => {
              const Icon = shift.icon;
              return (
                <div key={shift.no} className={`rounded-2xl border ${shift.ring} ${shift.bg} px-7 py-6 flex flex-col justify-center`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-6 h-6 ${shift.accent}`} />
                    <span className={`text-[12px] font-mono font-bold tracking-[0.2em] ${shift.accent}`}>維度 {shift.no}</span>
                  </div>
                  <div className="text-[27px] font-black text-white leading-[1.3]">
                    從「{shift.from}」<br />
                    到<span className={shift.accent}>「{shift.to}」</span>
                  </div>
                  <p className="text-[15px] text-slate-400 leading-relaxed mt-3.5">{shift.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info: (20260826 - Luphia) iSunFA 官網 QR Code，佔畫面約四分之一 */}
        <div className="w-[430px] flex-shrink-0 rounded-2xl border border-white/12 bg-white/[0.05] flex flex-col items-center justify-center gap-6 py-6">
          <SlideQRCode url="https://isunfa.com" size={320} />
          <div className="text-center">
            <div className="text-[30px] font-black text-white font-mono leading-none tracking-tight">isunfa.com</div>
            <div className="text-[14px] text-slate-400 mt-3">iSunFA 陽光智能碳會計</div>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
