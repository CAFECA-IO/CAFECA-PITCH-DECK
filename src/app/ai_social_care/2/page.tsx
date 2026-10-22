'use client';

import { AlertTriangle, Users, FileText, Calculator, Clock, Search } from 'lucide-react';
import { AscWall } from '@/components/slide/asc_art';

export default function AiSocialCareSlide2() {
  const pains = [
    {
      id: 'p1',
      icon: Users,
      title: '痛點一｜人力之牆',
      sub: '案量遠超負荷，留不住人的惡性循環',
      desc: '第一線社工同時肩負數十個以上個案，超載導致職業倦怠與高流動率，交接斷層進一步惡化服務品質。',
      stat: '形成「人力荒 → 超載 → 流失」的循環',
      color: '#f97316',
      tint: 'bg-orange-50',
      ink: 'text-orange-600',
      brd: 'border-orange-200',
    },
    {
      id: 'p2',
      icon: FileText,
      title: '痛點二｜文書之牆',
      sub: '行政文書排擠直接服務時間',
      desc: '訪視紀錄、方案成果、補助核銷、主管機關申報——每一小時的表單，都是從服務對象身上挪走的一小時陪伴。',
      stat: '第一線普遍反映近半數工時耗費於文書作業',
      color: '#e11d48',
      tint: 'bg-rose-50',
      ink: 'text-rose-600',
      brd: 'border-rose-200',
    },
    {
      id: 'p3',
      icon: Calculator,
      title: '痛點三｜資源之牆',
      sub: '小型組織扛不起法遵與數位化',
      desc: '勸募條例、非營利會計準則與勞動法令之法遵強度比照企業；志工排班仍停留在紙本與通訊群組。',
      stat: '多數中小型機構連一位專職會計都聘不起',
      color: '#2563eb',
      tint: 'bg-blue-50',
      ink: 'text-blue-600',
      brd: 'border-blue-200',
    },
  ];
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-rose-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">01 · 需求訪談與問題定義</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[40px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <AlertTriangle className="w-9 h-9 text-orange-500 flex-shrink-0" />
          社工的時間，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">被行政吃掉了</span>
        </h2>
      </div>

      {/* Info: (20261005 - Luphia) Interview Source */}
      <div className="z-10 px-16 mb-5">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm flex items-center gap-6">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Search className="w-4 h-4 text-slate-500" />
            <span className="text-[12px] font-bold text-slate-700">需求訪談來源</span>
          </div>
          <div className="text-[12px] text-slate-600 leading-snug">
            與財團法人中華民國唐氏症基金會
            <span className="font-bold text-slate-800">朱貽莊 副執行長</span>、
            <span className="font-bold text-slate-800">簡林伶 秘書處主任</span>完成實地訪談與流程盤點，
            並佐以 iSunFA 既有非營利客戶服務經驗與全臺據點第一線行政回饋。
            <span className="text-rose-600 font-bold">訪談後主動收斂範圍</span>——個案處遇涉及高度專業判斷與敏感資料，
            回歸社工專業、AI 不予介入。
          </div>
          <div className="flex gap-5 flex-shrink-0 border-l border-slate-200 pl-6">
            <div className="text-center">
              <div className="text-[22px] font-black text-orange-500 leading-none">78</div>
              <div className="text-[9px] text-slate-400 tracking-wide mt-1">服務據點</div>
            </div>
            <div className="text-center">
              <div className="text-[22px] font-black text-rose-500 leading-none">43,352</div>
              <div className="text-[9px] text-slate-400 tracking-wide mt-1">年服務人數</div>
            </div>
            <div className="text-center">
              <div className="text-[22px] font-black text-blue-500 leading-none">11,298</div>
              <div className="text-[9px] text-slate-400 tracking-wide mt-1">志工人次</div>
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Three Pains */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 flex-1 items-start">
        {pains.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.id} className={`bg-white border ${p.brd} rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col`}>
              <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: p.color }}></div>
              <div className="flex items-start justify-between mb-3 mt-1">
                <div className={`w-11 h-11 ${p.tint} rounded-2xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${p.ink}`} />
                </div>
                <AscWall color={p.color} className="w-[62px] h-[42px]" />
              </div>
              <h3 className="text-[17px] font-black text-slate-800 leading-snug">{p.title}</h3>
              <div className="text-[12px] font-bold text-slate-500 leading-snug mb-2 mt-0.5">{p.sub}</div>
              <p className="text-[12.5px] text-slate-500 leading-relaxed">{p.desc}</p>
              <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-400 leading-snug">{p.stat}</div>
            </div>
          );
        })}
      </div>

      {/* Info: (20261005 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 py-7">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-lg">
          <Clock className="w-5 h-5 text-orange-400 flex-shrink-0" />
          <p className="text-[14px] text-white font-medium leading-snug">
            <span className="font-black text-orange-400">這不是一家機構的問題。</span>
            全臺社福機構普遍人力精簡、無專職資訊人員，卻要面對與企業相同的法遵、財報與揭露要求——
            <span className="font-black text-white">行政負擔直接排擠服務量能</span>，是整個產業的結構性缺口。
          </p>
        </div>
      </div>

    </div>
  );
}
