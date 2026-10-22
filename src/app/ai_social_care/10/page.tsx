'use client';

import { CalendarRange, Flag } from 'lucide-react';

export default function AiSocialCareSlide10() {
  // Info: (20261005 - Luphia) 工作項目與期程依已送件之提案申請書「工作項目及時程（8 個月）」
  const tasks = [
    { id: 't1', name: '基金會場域需求深訪與流程盤點', lane: 'model', start: 1, end: 2 },
    { id: 't2', name: '語料建置、去識別化與治理', lane: 'model', start: 1, end: 4 },
    { id: 't3', name: 'FAITH 模型微調與 RAG 索引建置', lane: 'model', start: 3, end: 5 },
    { id: 't4', name: 'Agentic 中介平台編排開發', lane: 'model', start: 3, end: 6 },
    { id: 't5', name: '愛智扶四大模組開發', lane: 'app', start: 4, end: 6 },
    { id: 't6', name: 'API／MCP 介接與 iSunFA 帳務核心整合', lane: 'app', start: 5, end: 7 },
    { id: 't7', name: '第三方資安檢測與弱點修補', lane: 'app', start: 5, end: 8 },
    { id: 't8', name: '社福巡迴宣導與機構媒合', lane: 'field', start: 4, end: 8 },
    { id: 't9', name: '場域導入與地端部署（至 100 個以上）', lane: 'field', start: 5, end: 8 },
    { id: 't10', name: '資服業者招募與技術說明會（至 5 家）', lane: 'field', start: 6, end: 8 },
    { id: 't11', name: '開源釋出與核心物件移轉', lane: 'field', start: 7, end: 8 },
    { id: 't12', name: '場域資料回流、模型再訓練與 v2.0.0 發佈', lane: 'model', start: 8, end: 8 },
  ];

  const lanes: { [k: string]: { c: string; label: string } } = {
    model: { c: '#f97316', label: 'AI 模型／中介平台' },
    app: { c: '#6366f1', label: 'AI 應用系統' },
    field: { c: '#10b981', label: '生態系場域擴散' },
  };

  const milestones = [
    { id: 'ms1', m: 2, t: '專案工作計畫書' },
    { id: 'ms2', m: 4, t: 'AI 中介平台 Alpha 版上線' },
    { id: 'ms3', m: 6, t: '系統測試報告書' },
    { id: 'ms4', m: 8, t: '成果驗收報告書、成果簡報、FAITH v2.0.0 釋出' },
  ];

  const ramp = [
    { id: 'r1', m: 5, v: '20' }, { id: 'r2', m: 6, v: '50' },
    { id: 'r3', m: 7, v: '80' }, { id: 'r4', m: 8, v: '100+' },
  ];

  // Info: (20261005 - Luphia) 甘特區：左側標籤 330px，右側 8 個月共 740px
  const LABEL_W = 330;
  const COL_W = 92.5;

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">09 · 計畫執行甘特圖</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-4 flex items-end justify-between">
        <h2 className="text-[34px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <CalendarRange className="w-7 h-7 text-slate-700 flex-shrink-0" />
          8 個月工作項目與里程碑
        </h2>
        <div className="flex items-center gap-4 pb-1.5">
          {Object.entries(lanes).map(([k, v]) => (
            <div key={k} className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm" style={{ background: v.c }}></span>
              <span className="text-[11px] font-bold text-slate-500">{v.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Info: (20261005 - Luphia) 甘特圖 */}
      <div className="z-10 px-16 flex-1">
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm">

          {/* Info: (20261005 - Luphia) 月份表頭 */}
          <div className="flex items-center mb-2">
            <div style={{ width: LABEL_W }} className="text-[10px] font-black text-slate-400 tracking-widest uppercase">工作項目</div>
            <div className="flex-1 flex">
              {Array.from({ length: 8 }, (_, i) => i + 1).map((m) => (
                <div key={m} style={{ width: COL_W }} className="text-center text-[11px] font-mono font-black text-slate-500">
                  M{m}
                </div>
              ))}
            </div>
          </div>

          {/* Info: (20261005 - Luphia) 任務列 */}
          <div className="relative">
            {/* Info: (20261005 - Luphia) 月份格線 */}
            <div className="absolute inset-0 flex pointer-events-none" style={{ left: LABEL_W }}>
              {Array.from({ length: 8 }, (_, i) => i + 1).map((m) => (
                <div key={m} style={{ width: COL_W }} className="border-l border-slate-100"></div>
              ))}
            </div>

            {tasks.map((t) => (
              <div key={t.id} className="flex items-center h-[26px]">
                <div style={{ width: LABEL_W }} className="text-[11.5px] text-slate-700 pr-3 truncate">{t.name}</div>
                <div className="flex-1 relative h-full flex items-center">
                  <div
                    className="h-[13px] rounded-full shadow-sm"
                    style={{
                      marginLeft: (t.start - 1) * COL_W + 4,
                      width: (t.end - t.start + 1) * COL_W - 8,
                      background: lanes[t.lane].c,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Info: (20261005 - Luphia) 場域導入節奏 */}
          <div className="flex items-center mt-2 pt-2 border-t border-slate-100">
            <div style={{ width: LABEL_W }} className="text-[11px] font-black text-slate-500 pr-3">場域導入累計數</div>
            <div className="flex-1 flex">
              {Array.from({ length: 8 }, (_, i) => i + 1).map((m) => {
                const hit = ramp.find((r) => r.m === m);
                return (
                  <div key={m} style={{ width: COL_W }} className="text-center">
                    {hit
                      ? <span className="text-[13px] font-black text-emerald-600">{hit.v}</span>
                      : <span className="text-[13px] text-slate-200">—</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) 里程碑交付 */}
      <div className="z-10 px-16 pb-8 pt-4">
        <div className="bg-slate-900 rounded-2xl px-6 py-3.5 flex items-center gap-5 shadow-lg">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Flag className="w-4 h-4 text-orange-400" />
            <span className="text-[12px] font-black text-white">里程碑交付</span>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-4">
            {milestones.map((ms) => (
              <div key={ms.id} className="border-l border-slate-700 pl-3.5">
                <div className="text-[11px] font-mono font-black text-orange-400 tracking-widest">M{ms.m}</div>
                <div className="text-[10.5px] text-slate-300 leading-snug mt-0.5">{ms.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
