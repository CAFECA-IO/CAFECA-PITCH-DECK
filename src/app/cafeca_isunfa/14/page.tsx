'use client';

import { Server, Megaphone, UsersRound, LineChart, Flag } from 'lucide-react';

export default function CafecaIsunfaSlide14() {
  // Info: (20260714 - Luphia) Expected synergy from the capital raise
  const outcomes = [
    { icon: Server, tint: 'text-orange-500', bg: 'bg-orange-50', title: '服務量能 3–4 倍', desc: '算力擴充後，可同時承接的碳盤查廠商數大幅提升。' },
    { icon: Megaphone, tint: 'text-blue-500', bg: 'bg-blue-50', title: '品牌知名度躍升', desc: '媒體曝光與官網主動詢問量顯著成長，建立市場辨識度。' },
    { icon: UsersRound, tint: 'text-emerald-500', bg: 'bg-emerald-50', title: '年交付案量倍增', desc: '增聘人才並串接顧問通路，擴大服務交付能量。' },
  ];

  // Info: (20260714 - Luphia) Milestone timeline for the 12 months post-raise
  const milestones = [
    { q: 'Q1', text: '完成現金增資，GPU 算力推理叢集擴充上線。' },
    { q: 'Q2', text: '建立 3 家以上碳盤查顧問分潤通路，增聘工程與顧問團隊。' },
    { q: 'Q3', text: '啟動品牌行銷、國際展會與內容行銷，官網詢問量成長。' },
    { q: 'Q4', text: '服務廠商數翻倍、營收顯著年增，啟動東亞供應鏈擴散。' },
    { q: '次年+', text: '穩健成長，朝興櫃 / 上櫃等資本市場下一階段邁進。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260714 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260714 - Luphia) Header */}
      <div className="z-10 px-20 pt-14 pb-6 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Flag size={15} />
          Use of Funds &amp; Milestones
        </div>
        <h2 className="text-5xl font-black tracking-tight text-slate-800 leading-tight">
          資金運用效益與<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">成長里程碑</span>
        </h2>
      </div>

      {/* Info: (20260714 - Luphia) Two Column: Outcomes + Timeline */}
      <div className="z-10 flex-1 px-20 pb-16 grid grid-cols-12 gap-10">

        {/* Info: (20260714 - Luphia) Left: Expected Outcomes */}
        <div className="col-span-5 flex flex-col gap-4 justify-center">
          <div className="flex items-center gap-2 mb-1 text-slate-400 font-bold text-sm tracking-widest uppercase">
            <LineChart size={16} /> 預期綜效
          </div>
          {outcomes.map((o) => {
            const Icon = o.icon;
            return (
              <div key={o.title} className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <div className={`w-12 h-12 rounded-xl ${o.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={o.tint} size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 mb-1">{o.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{o.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info: (20260714 - Luphia) Right: Milestone Timeline */}
        <div className="col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 text-slate-400 font-bold text-sm tracking-widest uppercase">
            <Flag size={16} /> 里程碑時程
          </div>
          <div className="relative pl-8">
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-400 via-orange-300 to-emerald-300"></div>
            <div className="flex flex-col gap-4">
              {milestones.map((m) => (
                <div key={m.q} className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-white border-4 border-orange-500 shadow"></div>
                  <div className="bg-slate-50 rounded-xl border border-slate-200 px-5 py-3">
                    <span className="text-sm font-black text-orange-600 mr-2">{m.q}</span>
                    <span className="text-sm text-slate-600">{m.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
