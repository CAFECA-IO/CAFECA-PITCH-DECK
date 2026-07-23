'use client';

import { Sparkles } from 'lucide-react';

export default function Pmis20060723Slide4() {
  const modules = [
    { no: '01', name: '行事曆預警', point: '履約、里程碑、送審、查核、改善期限之提醒與儀表板彙整' },
    { no: '02', name: '待辦追蹤', point: '各單位待辦與改善辦理情形之紀錄、查詢、統計' },
    { no: '03', name: '工程專案', point: '契約履約、里程碑、變更、文件、人力配置與專案總覽' },
    { no: '04', name: '時程進度', point: '工程進度、預定／實際對比、落後預警' },
    { no: '05', name: '環安衛管理', point: '環境、職安衛、交通維持稽核；AI 工地影像判讀' },
    { no: '06', name: '簽核管理', point: '送審文件、簽核流程設定與逐關數位簽核' },
    { no: '07', name: '品質稽核', point: '施工查驗、材料抽驗、缺失改善追蹤' },
    { no: '08', name: '財務管理', point: '專案損益、收支、現金水位；憑證 AI 轉會計傳票' },
    { no: '09', name: '碳盤查', point: 'GHG Protocol／ISO 14064 溫室氣體盤查與跨專案彙總' },
    { no: '10', name: '智能監測', point: 'AIoT 感測與影像即時監測、事件標注、時間軸回溯' },
    { no: '11', name: '工程日誌', point: '監造日報人工填報；費思自動生成週／月／季／年報' },
    { no: '12', name: 'GIS 地圖', point: '政府圖資套疊 OSM 白底、圖層開關、周邊風險判讀' },
    { no: '13', name: '資料庫', point: '工程紀錄、照片、影片、文件之集中查詢與上傳管理' },
    { no: '14', name: '組織管理', point: '帳號、組織、職位（模組權限）與組織架構圖' },
  ];

  const col1 = modules.slice(0, 7);
  const col2 = modules.slice(7, 14);

  const Row = ({ m }: { m: { no: string; name: string; point: string } }) => (
    <div className="flex items-start gap-3 py-2.5 border-b border-slate-100 last:border-0">
      <span className="flex-shrink-0 w-11 h-7 rounded-md bg-orange-50 border border-orange-200 text-orange-600 text-xs font-black flex items-center justify-center font-mono">
        {m.no}
      </span>
      <div className="min-w-0">
        <p className="text-[15px] font-black text-slate-800 leading-tight">{m.name}</p>
        <p className="text-[12.5px] text-slate-500 leading-snug mt-0.5">{m.point}</p>
      </div>
    </div>
  );

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-slate-100 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="z-10 px-20 pt-12 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          14 Modules Overview
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-800 leading-tight">
          模組總覽，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">PMIS-01 ～ PMIS-14</span>
        </h2>
      </div>

      <div className="z-10 flex-1 px-16 pb-10 grid grid-cols-2 gap-x-10">
        <div className="bg-white/70 rounded-2xl border border-slate-200 shadow-sm px-6 py-2">
          {col1.map((m) => <Row key={m.no} m={m} />)}
        </div>
        <div className="bg-white/70 rounded-2xl border border-slate-200 shadow-sm px-6 py-2">
          {col2.map((m) => <Row key={m.no} m={m} />)}
        </div>
      </div>
    </div>
  );
}
