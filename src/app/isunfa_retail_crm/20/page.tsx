'use client';

import Image from 'next/image';
import { Microscope, EyeOff, UsersRound, FlaskConical, ScanLine } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';
import SlideQRCode from '@/components/slide/slide_qr_code';

export default function RetailCrmSlide20() {
  const shifts = [
    {
      no: '01',
      icon: Microscope,
      from: '記錄成交',
      to: '認識客人',
      body: '報表給你金額，客群給你動機。',
      text: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
    },
    {
      no: '02',
      icon: EyeOff,
      from: '有刷卡的',
      to: '沒刷卡的',
      body: '匿名的那 48%，第一次有了輪廓。',
      text: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
    },
    {
      no: '03',
      icon: UsersRound,
      from: '全體會員',
      to: '每一個人',
      body: '平均客單價，不屬於任何一位客人。',
      text: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
    },
    {
      no: '04',
      icon: FlaskConical,
      from: '事後檢討',
      to: '事前試錯',
      body: '先在模型裡跑一百次，再動賣場一次。',
      text: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
    },
  ];

  return (
    <CrmSlideShell
      chapter="結語 · CLOSING"
      pageLabel="20 / 20"
      compact
      title={<>AI 為零售的客戶關係，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">擴大了四個維度</span></>}
      subtitle="同一批交易資料，這一次多了四個可以提問的維度。"
      footer={
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/isunfa_logo_color.svg" alt="iSunFA" width={104} height={30} className="object-contain" />
            <span className="text-[11px] text-slate-400">iSunFA 陽光智能碳會計 · 零售場域智能客戶關係管理</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 tracking-widest">isunfa.com · 2026.09</span>
        </div>
      }
    >
      <div className="flex gap-6 h-full">

        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 gap-4 h-full">
            {shifts.map((shift) => {
              const Icon = shift.icon;
              return (
                <div key={shift.no} className={`rounded-2xl border ${shift.ring} ${shift.bg} px-7 py-6 flex flex-col justify-center shadow-sm`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-slate-500" />
                    <span className="text-[12px] font-mono font-bold tracking-[0.2em] text-slate-400">維度 {shift.no}</span>
                  </div>
                  <div className="text-[27px] font-black text-slate-900 leading-[1.3]">
                    從「{shift.from}」<br />
                    到<span className={shift.text}>「{shift.to}」</span>
                  </div>
                  <p className="text-[15px] text-slate-500 leading-relaxed mt-3.5">{shift.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info: (20260916 - Luphia) 結尾 QR：iSunFA 官網 */}
        <div className="w-[430px] flex-shrink-0 rounded-2xl border border-orange-200 bg-white flex flex-col items-center justify-center gap-6 py-6 shadow-[0_12px_40px_-28px_rgba(234,88,12,0.7)]">
          <SlideQRCode url="https://isunfa.com" size={320} className="!border-orange-100" />
          <div className="text-center">
            <div className="text-[30px] font-black text-slate-900 font-mono leading-none tracking-tight">isunfa.com</div>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-[14px] text-orange-600 font-bold">
              <ScanLine className="w-4 h-4" />
              掃描立即免費試用
            </div>
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
