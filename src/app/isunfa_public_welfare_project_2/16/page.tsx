'use client';

import { Handshake, Building2, HeartHandshake, Landmark, ArrowLeftRight, FileSignature } from 'lucide-react';

export default function IsunfaPwp2Slide16() {
  const orgs = [
    {
      id: 'cafeca',
      icon: Building2,
      label: '主提案單位 · 簽約主體',
      name: '卡菲卡金融科技（iSunFA）',
      tint: 'bg-indigo-50',
      ink: 'text-indigo-600',
      ring: 'border-indigo-200',
      bar: 'bg-indigo-400',
      duties: [
        'FAITH 領域模型訓練與資料治理',
        'Agentic 中介平台與愛智扶四大模組開發',
        '地端部署架構、資安檢測與開源釋出',
        '對貴署契約履行、進度提報與成果交付',
      ],
    },
    {
      id: 'foundation',
      icon: HeartHandshake,
      label: '聯合提案單位 · 財團法人',
      name: '中華民國唐氏症基金會',
      tint: 'bg-rose-50',
      ink: 'text-rose-600',
      ring: 'border-rose-200',
      bar: 'bg-rose-400',
      duties: [
        '社福營運與非營利行政領域知識共建',
        '示範場域提供與內部流程開放實證',
        '社福網絡動員：姊妹組織與聯盟轉介',
        '教育訓練協辦與使用者回饋蒐集',
      ],
    },
    {
      id: 'moda',
      icon: Landmark,
      label: '主辦 · 執行單位',
      name: '數位產業署 / 台灣智慧雲端 / 野村總研',
      tint: 'bg-slate-100',
      ink: 'text-slate-600',
      ring: 'border-slate-200',
      bar: 'bg-slate-400',
      duties: [
        '提供算力資源支持模型訓練',
        '計畫管理、審查會議與成果驗收',
        '取得核心物件著作財產權並開源釋出',
        '成效追蹤與後續推廣（計畫後 3 年）',
      ],
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest">Collaboration Structure</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 mb-4">
          <Handshake className="w-4 h-4 text-indigo-500" />
          <span className="text-sm font-semibold text-indigo-600">協作架構與權責分工</span>
        </div>
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          三方協作：<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500">技術 × 專業 × 治理</span>
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) 3 Organizations */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 flex-1">
        {orgs.map((o) => {
          const Icon = o.icon;
          return (
            <div key={o.id} className={`bg-white border ${o.ring} rounded-3xl shadow-sm p-6 flex flex-col relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-full h-1.5 ${o.bar}`}></div>
              <div className="flex items-center gap-3 mb-4 mt-1">
                <div className={`w-11 h-11 ${o.tint} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${o.ink}`} />
                </div>
                <div>
                  <div className={`text-[10px] font-black ${o.ink} tracking-widest uppercase`}>{o.label}</div>
                  <h3 className="text-[15px] font-bold text-slate-800 leading-tight">{o.name}</h3>
                </div>
              </div>
              <div className="w-full h-px bg-slate-100 mb-4"></div>
              <div className="space-y-3">
                {o.duties.map((d) => (
                  <div key={d} className="flex gap-2 text-[12px] text-slate-600 leading-relaxed">
                    <span className={`${o.ink} font-bold flex-shrink-0`}>·</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20260904 - Luphia) Bottom: IP & Contract Notes */}
      <div className="z-10 px-16 py-6 grid grid-cols-2 gap-4">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 flex items-center gap-3">
          <FileSignature className="w-4 h-4 text-indigo-500 flex-shrink-0" />
          <p className="text-[11.5px] text-slate-600 leading-snug">
            <span className="font-bold text-slate-800">契約簽署</span>：與台灣智慧雲端簽立合作契約；與唐氏症基金會之合作意向書已完成簽訂，併同協作廠商名單與委外合約影本於主約簽訂後 30 日內提報。
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 flex items-center gap-3">
          <ArrowLeftRight className="w-4 h-4 text-rose-500 flex-shrink-0" />
          <p className="text-[11.5px] text-slate-600 leading-snug">
            <span className="font-bold text-slate-800">權利歸屬</span>：核心物件著作財產權移轉數位產業署；機關開源釋出時授予原廠商非專屬、免權利金、全球性、永久之使用與再授權權利，確保 iSunFA 公益版持續營運。
          </p>
        </div>
      </div>

    </div>
  );
}
