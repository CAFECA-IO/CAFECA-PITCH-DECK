'use client';

import Image from 'next/image';
import { Mail, CalendarCheck, FileSignature, HeartHandshake } from 'lucide-react';

export default function IsunfaPwp2Slide18() {
  const nextSteps = [
    { id: 'n1', icon: FileSignature, title: '合作證明文件', desc: '已完成與唐氏症基金會之合作意向書簽署，於主約簽訂後 30 日內提報' },
    { id: 'n2', icon: Mail, title: '申請送件', desc: '115 年 9 月 18 日（五）16:59:59 前 E-mail 送達 ai-ext@nri.co.jp' },
    { id: 'n3', icon: CalendarCheck, title: '審查會議簡報', desc: '配合貴署審查會議出席簡報，回應委員審查意見' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[140px]"></div>
        <div className="absolute right-0 -bottom-40 w-[700px] h-[700px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute left-1/2 top-1/4 w-[420px] h-[420px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[130px]"></div>
      </div>

      {/* Info: (20260904 - Luphia) Top Bar */}
      <div className="z-10 flex items-center justify-between px-16 pt-10">
        <Image
          src="/isunfa_logo_color.svg"
          alt="iSunFA Logo"
          width={180}
          height={46}
          className="object-contain"
        />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-xs font-bold text-orange-600 tracking-wider">數位發展部數位產業署 · AI 生態系實證應用徵案</span>
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Main Message */}
      <div className="z-10 flex-1 flex flex-col justify-center px-16">
        <div className="flex items-center gap-3 mb-6">
          <HeartHandshake className="w-8 h-8 text-rose-500" />
          <span className="text-sm font-black text-rose-500 tracking-widest uppercase">Thank You</span>
        </div>
        <h1 className="text-[52px] font-black tracking-tight leading-[1.2] text-slate-800">
          把行政交給 AI，<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-400 to-blue-500">
            把時間還給需要陪伴的人
          </span>
        </h1>
        <p className="text-lg text-slate-500 font-medium leading-relaxed border-l-4 border-orange-500 pl-6 mt-8">
          「愛智扶」不只是一套系統——它是 100 個社工場域重新呼吸的空間，<br />
          也是台灣 AI 公益生態系的第一塊開源基石。敬請委員支持。
        </p>
      </div>

      {/* Info: (20260904 - Luphia) Next Steps */}
      <div className="z-10 grid grid-cols-3 gap-4 px-16 pb-9 items-stretch">
        {nextSteps.map((n) => {
          const Icon = n.icon;
          return (
            <div key={n.id} className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-slate-800">{n.title}</div>
                <div className="text-[11px] text-slate-500 leading-snug">{n.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
