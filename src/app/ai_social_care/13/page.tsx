'use client';

import { HeartHandshake, GitFork, Users2, Sparkles, ScanLine } from 'lucide-react';
import SlideQRCode from '@/components/slide/slide_qr_code';
import { AscHandoverTime } from '@/components/slide/asc_art';

export default function AiSocialCareSlide13() {
  const promises = [
    {
      id: 'c1', icon: GitFork, color: '#f97316', tint: 'bg-orange-50', ink: 'text-orange-600',
      t: '一套開源地基',
      d: '繁中非營利會計與社福行政語料，目前沒有任何開源模型涵蓋。FAITH 模型與 Agentic 中介平台以 MIT 授權全數釋出。',
    },
    {
      id: 'c2', icon: Users2, color: '#6366f1', tint: 'bg-indigo-50', ink: 'text-indigo-600',
      t: '一百個真實場域',
      d: '不是試點，是 100 個每天都在服務人的機構。模型在這裡跑過一輪，才交付給貴署。',
    },
    {
      id: 'c3', icon: HeartHandshake, color: '#e11d48', tint: 'bg-rose-50', ink: 'text-rose-600',
      t: '一週十小時',
      d: '每位社工省下的行政工時，全數回到服務對象身上。這是這個計畫真正要產出的東西。',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-40 -top-40 w-[720px] h-[720px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[160px]"></div>
        <div className="absolute -right-32 -bottom-40 w-[640px] h-[640px] bg-rose-100 rounded-full mix-blend-multiply filter blur-[160px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">結語</span>
      </div>

      {/* Info: (20261005 - Luphia) Hero：標題、插圖與官網 QR */}
      <div className="z-10 px-16 pt-24 pb-5 flex items-center gap-8">
        <div className="flex-shrink-0">
          <h2 className="text-[48px] font-black leading-[1.15] text-slate-900">
            讓社工把時間，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">還給需要他的人。</span>
          </h2>
        </div>

        <AscHandoverTime className="w-[210px] h-[115px] flex-shrink-0" />

        <div className="ml-auto flex items-center gap-4 bg-white border border-orange-200 rounded-3xl pl-6 pr-4 py-4 shadow-[0_12px_40px_-28px_rgba(234,88,12,0.8)] flex-shrink-0">
          <div className="text-right">
            <div className="text-[10px] font-black text-orange-500 tracking-widest uppercase">了解更多</div>
            <div className="text-[22px] font-black text-slate-900 font-mono leading-tight mt-0.5">iSunFA.com</div>
            <div className="flex items-center justify-end gap-1.5 mt-1.5 text-[11px] text-orange-600 font-bold">
              <ScanLine className="w-3.5 h-3.5" />
              掃描前往官網
            </div>
          </div>
          <SlideQRCode url="https://iSunFA.com" size={104} className="!border-orange-100 !p-2 !shadow-none" />
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Three Promises */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 flex-1 items-start">
        {promises.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.id} className="bg-white border border-slate-200 rounded-3xl px-6 py-5 shadow-sm relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: p.color }}></div>
              <div className={`w-11 h-11 ${p.tint} rounded-2xl flex items-center justify-center mb-3 mt-1`}>
                <Icon className={`w-5 h-5 ${p.ink}`} />
              </div>
              <h3 className="text-[21px] font-black text-slate-800 leading-tight mb-2">{p.t}</h3>
              <p className="text-[12.5px] text-slate-500 leading-relaxed">{p.d}</p>
            </div>
          );
        })}
      </div>

      {/* Info: (20261005 - Luphia) Footer */}
      <div className="z-10 px-16 py-9">
        <div className="bg-slate-900 rounded-2xl px-8 py-5 flex items-center gap-6 shadow-lg">
          <Sparkles className="w-6 h-6 text-orange-400 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-[18px] font-black text-white leading-tight">愛智扶　AI SocialCare</div>
            <div className="text-[12px] text-slate-400 mt-1">
              卡菲卡金融科技股份有限公司（iSunFA）　×　財團法人中華民國唐氏症基金會
            </div>
          </div>
          <div className="text-right border-l border-slate-700 pl-6">
            <div className="text-[10px] text-slate-400 tracking-widest uppercase">敬請指教</div>
            <div className="text-[13px] font-bold text-orange-400 mt-0.5">isunfa.com</div>
          </div>
        </div>
      </div>

    </div>
  );
}
