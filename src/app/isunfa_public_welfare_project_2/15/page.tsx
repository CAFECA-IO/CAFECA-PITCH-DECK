'use client';

import { Users, Building2, HeartHandshake, LineChart, ShieldCheck, Cpu, Calculator, GitFork, Award } from 'lucide-react';

export default function IsunfaPwp2Slide15() {
  const team = [
    { id: 'chiwei', name: '張智崴', role: 'Co-founder & CEO', duty: '專案主持人 · 總體架構與開源治理', bg: '環境工程 / 資訊科技', color: 'orange' },
    { id: 'tzuhan', name: '梁紫涵', role: 'Co-founder & PE', duty: 'FAITH 模型與資料集治理負責人', bg: '化學工程 / 數據分析', color: 'emerald' },
    { id: 'hungjen', name: '陳泓仁', role: '設計總監', duty: '愛智扶應用系統 UI／UX 與無障礙介面設計', bg: '數位產品設計 / UI・UX', color: 'violet' },
    { id: 'yifang', name: '謝宜芳', role: 'Growth Marketing', duty: '場域推廣、教育訓練與技術文件', bg: '視覺傳達 / 行銷', color: 'blue' },
  ];

  const records = [
    { id: 'r1', year: '2018-2021', title: '金管會金融監理沙盒實證', desc: '高度監理環境之合規與資安實績，對應本案個資要求', icon: ShieldCheck },
    { id: 'r2', year: '2020-2021', title: '國家高速網路中心「臺灣杉二號」', desc: '參與國家級 AI 大數據算力平台建構', icon: Cpu },
    { id: 'r3', year: '2021 迄今', title: 'iSunFA AI 智能會計 SaaS', desc: '費思（FAITH）引擎商轉，即本案會計模組技術基底', icon: Calculator },
    { id: 'r4', year: '2017 迄今', title: '開源社群深耕與政府資料開放', desc: '十年以上開源專案維運，具開源治理實務能力', icon: GitFork },
    { id: 'r5', year: '2026', title: '經濟部與 NVIDIA Taipei-1', desc: '獲選第四批次算力執行單位，深化模型訓練推理', icon: Award },
    { id: 'r6', year: '2017-2020', title: '新北市政府全市級物聯網追蹤', desc: '萬級節點邊緣運算，跨場域地端佈建維運實績', icon: LineChart },
  ];

  const colorMap: { [key: string]: string } = {
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    violet: 'bg-violet-50 text-violet-600 border-violet-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
  };

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-amber-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Team &amp; Track Record</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-800 flex items-center gap-3">
          <Users className="w-8 h-8 text-orange-500" />
          團隊組成、分工與{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">承接類似專案實績</span>
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) Two Organizations — detailed split on slide 16 */}
      <div className="z-10 px-16 grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-indigo-200 rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-black text-indigo-600 tracking-widest uppercase">主提案單位 · 簽約主體</div>
            <div className="text-[13px] font-bold text-slate-800">卡菲卡金融科技（iSunFA）</div>
            <div className="text-[10.5px] text-slate-500">FAITH 模型訓練、中介平台與愛智扶應用系統開發</div>
          </div>
        </div>
        <div className="bg-white border border-rose-200 rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <HeartHandshake className="w-5 h-5 text-rose-500" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-black text-rose-500 tracking-widest uppercase">聯合提案單位 · 財團法人</div>
            <div className="text-[13px] font-bold text-slate-800">財團法人中華民國唐氏症基金會</div>
            <div className="text-[10.5px] text-slate-500">社福營運知識共建、示範場域提供與社福網絡動員</div>
          </div>
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Team Members */}
      <div className="z-10 px-16 grid grid-cols-4 gap-4 mb-6">
        {team.map((m) => (
          <div key={m.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-800">{m.name}</h3>
              <span className="text-[10px] font-bold text-slate-400">{m.role}</span>
            </div>
            <div className={`inline-block text-[10px] px-2 py-0.5 rounded-md border mb-2 ${colorMap[m.color]}`}>{m.bg}</div>
            <p className="text-[11px] text-slate-500 leading-relaxed">{m.duty}</p>
          </div>
        ))}
      </div>

      {/* Info: (20260904 - Luphia) Track Record */}
      <div className="z-10 px-16 flex-1">
        <div className="grid grid-cols-3 gap-5">
          {records.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.id} className="bg-white border border-slate-200 rounded-2xl px-4 py-4 shadow-sm flex gap-3">
                <div className="w-9 h-9 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <div className="text-[9px] font-mono font-black text-orange-500 tracking-widest">{r.year}</div>
                  <div className="text-[12px] font-bold text-slate-800 leading-tight">{r.title}</div>
                  <div className="text-[10px] text-slate-500 leading-snug mt-0.5">{r.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Bottom Capability Strip */}
      <div className="z-10 px-16 py-6">
        <div className="bg-slate-800 rounded-2xl px-6 py-3.5 flex items-center gap-6 shadow-lg">
          <span className="text-[13px] font-bold text-white flex-shrink-0">實績涵蓋審查構面</span>
          <div className="flex-1 grid grid-cols-4 gap-5">
            {[
              { id: 'c1', t: '開源貢獻', d: '十年以上開源社群深耕與政府資料開放專案' },
              { id: 'c2', t: 'AI 模型開發', d: '費思（FAITH）智能核心引擎與 Taipei-1 算力實作' },
              { id: 'c3', t: '應用系統建置', d: 'iSunFA AI 會計 SaaS 與金融監理沙盒系統交付' },
              { id: 'c4', t: '場域落地案例', d: '金管會沙盒、新北市政府與企業客戶實證導入' },
            ].map((c) => (
              <div key={c.id}>
                <div className="text-[11px] font-bold text-orange-400">{c.t}</div>
                <div className="text-[10px] text-slate-300 leading-snug">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
