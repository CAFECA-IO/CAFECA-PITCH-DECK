'use client';

import { Users, ShieldCheck, Cpu, Calculator, GitFork, Award, LineChart, FileSignature } from 'lucide-react';

export default function AiSocialCareSlide12() {
  const team = [
    { id: 't1', name: '張智崴', org: 'cafeca', role: '專案主持人', duty: '總體架構、開源治理與成果交付', tint: 'bg-orange-50 text-orange-600 border-orange-200' },
    { id: 't2', name: '梁紫涵', org: 'cafeca', role: 'FAITH 模型負責人', duty: '模型訓練與資料集治理', tint: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { id: 't3', name: '陳泓仁', org: 'cafeca', role: '設計總監', duty: 'UI／UX、無障礙介面與 API／MCP 整合', tint: 'bg-violet-50 text-violet-600 border-violet-200' },
    { id: 't4', name: '謝宜芳', org: 'cafeca', role: '專案聯絡人', duty: '單一窗口：場域推廣與教育訓練', tint: 'bg-blue-50 text-blue-600 border-blue-200' },
    { id: 't5', name: '朱貽莊', org: 'dsf', role: '副執行長', duty: '聯合提案主持人：社福知識共建與網絡動員', tint: 'bg-rose-50 text-rose-600 border-rose-200' },
    { id: 't6', name: '簡林伶', org: 'dsf', role: '秘書處主任', duty: '聯合提案聯絡人：需求訪談與訓練協辦', tint: 'bg-rose-50 text-rose-600 border-rose-200' },
  ];

  const records = [
    { id: 'r1', icon: ShieldCheck, year: '2018–2021', t: '金管會金融監理沙盒實證', d: '金融級合規與資安實作', tag: '場域落地' },
    { id: 'r2', icon: Cpu, year: '2020–2021', t: '國網中心「臺灣杉二號」', d: '國家級 AI 算力平台建構', tag: 'AI 模型開發' },
    { id: 'r3', icon: Calculator, year: '2022 迄今', t: 'iSunFA 智能會計 SaaS', d: '費思引擎商轉，本案技術基底', tag: '應用系統建置' },
    { id: 'r4', icon: GitFork, year: '2017 迄今', t: '開源社群深耕與政府資料開放', d: '十年以上開源治理實務', tag: '開源貢獻' },
    { id: 'r5', icon: Award, year: '2026', t: '經濟部與 NVIDIA Taipei-1', d: '第四批次算力執行單位', tag: 'AI 模型開發' },
    { id: 'r6', icon: LineChart, year: '2017–2020', t: '新北市政府全市級物聯網追蹤', d: '萬級節點地端佈建維運', tag: '場域落地' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">11 · 團隊組成分工與過往實績</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <Users className="w-8 h-8 text-orange-500 flex-shrink-0" />
          實績<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">完整覆蓋四個審查構面</span>
        </h2>
      </div>

      {/* Info: (20261005 - Luphia) Team */}
      <div className="z-10 px-16 grid grid-cols-6 gap-3 mb-5">
        {team.map((m) => (
          <div key={m.id} className={`bg-white rounded-2xl px-3.5 py-3 shadow-sm border ${m.org === 'dsf' ? 'border-rose-200' : 'border-slate-200'}`}>
            <div className="flex items-baseline gap-1.5 mb-1">
              <h3 className="text-[15px] font-black text-slate-800">{m.name}</h3>
              <span className="text-[8.5px] font-bold text-slate-400">{m.org === 'dsf' ? '基金會' : 'CAFECA'}</span>
            </div>
            <span className={`inline-block text-[9px] px-1.5 py-0.5 rounded border mb-1.5 ${m.tint}`}>{m.role}</span>
            <p className="text-[10px] text-slate-500 leading-snug">{m.duty}</p>
          </div>
        ))}
      </div>

      {/* Info: (20261005 - Luphia) Track Record */}
      <div className="z-10 px-16 grid grid-cols-3 gap-4 flex-1 items-start content-start">
        {records.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.id} className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 shadow-sm flex gap-3">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200">
                <Icon className="w-4 h-4 text-slate-500" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[9px] font-mono font-black text-orange-500 tracking-widest">{r.year}</span>
                  <span className="text-[8.5px] font-bold text-slate-400 bg-white border border-slate-200 rounded px-1.5">{r.tag}</span>
                </div>
                <div className="text-[12px] font-bold text-slate-800 leading-tight">{r.t}</div>
                <div className="text-[10.5px] text-slate-500 leading-snug mt-0.5">{r.d}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20261005 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 py-6">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-lg">
          <FileSignature className="w-5 h-5 text-orange-400 flex-shrink-0" />
          <p className="text-[13.5px] text-white font-medium leading-snug">
            <span className="font-black text-orange-400">合作關係不是意向，是已簽文件。</span>
            與唐氏症基金會之<span className="font-black text-white">合作意向書已於 115 年 9 月完成雙方用印</span>，
            權責分工、設備與費用負擔、智慧財產權歸屬、個資保護與非排他性均已逐條明訂——
            計畫一核定即可進場，不需要再花時間談合作。
          </p>
        </div>
      </div>

    </div>
  );
}
