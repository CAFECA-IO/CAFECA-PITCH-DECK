'use client';

import { CalendarRange, AlertTriangle, ShieldAlert, GitPullRequestArrow, Diamond } from 'lucide-react';

// Info: (20260819 - Luphia) Validated 3-slot categorical palette (worst adjacent CVD ΔE 16.3 deutan)
const STREAMS = [
  { id: 'model', name: 'AI 模型 / 中介平台', color: '#6366f1' },
  { id: 'app', name: 'AI 應用系統開發', color: '#f97316' },
  { id: 'field', name: 'AI 生態系場域擴散', color: '#14b8a6' },
];

const TASKS = [
  { id: 't1', stream: 'model', name: '需求訪談與場域資料盤點', s: 1, e: 2 },
  { id: 't2', stream: 'model', name: '資料集建置、標註與治理', s: 1, e: 4 },
  { id: 't3', stream: 'model', name: '領域型模型微調與 RAG 索引', s: 3, e: 5 },
  { id: 't4', stream: 'model', name: 'Agentic 中介平台編排開發', s: 3, e: 6 },
  { id: 't5', stream: 'app', name: 'DPP 生成器與媒合系統開發', s: 4, e: 6 },
  { id: 't6', stream: 'app', name: 'API / MCP 介接與 ERP 整合測試', s: 5, e: 7 },
  { id: 't7', stream: 'app', name: '第三方資安檢測與弱點修補', s: 5, e: 8 },
  { id: 't8', stream: 'field', name: '北中南宣導會與業者媒合', s: 4, e: 8 },
  { id: 't9', stream: 'field', name: '場域導入與部署（至 300+ 家）', s: 5, e: 8 },
  { id: 't10', stream: 'field', name: '開源釋出與核心物件移轉', s: 7, e: 8 },
];

const MILESTONES = [
  { id: 'ms1', m: 2, label: '專案工作計畫書', shift: '-50%' },
  { id: 'ms2', m: 4, label: '中介平台 Alpha 上線', shift: '-50%' },
  { id: 'ms3', m: 6, label: '系統測試報告書', shift: '-50%' },
  // Info: (20260819 - Luphia) Last marker sits on the right edge — clamp its label inside the plot
  { id: 'ms4', m: 8, label: '成果驗收報告書 / 成果簡報', shift: '-92%' },
];

const MONTHS = 8;

export default function IsunfaPwpSlide11() {
  const colorOf = (streamId: string) => STREAMS.find((s) => s.id === streamId)?.color ?? '#64748b';

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">Work Plan &amp; Milestones</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-[68px] pb-4 flex items-end justify-between">
        <div>
          <h2 className="text-[36px] font-black leading-tight text-slate-800">
            專案工作規劃：{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500">8 個月工作項目及時程</span>
          </h2>
          <p className="text-[13px] text-slate-500 mt-1.5 font-medium">工作項目依三大預算構面分流並行推動，各構面於里程碑節點交付對應文件。</p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0">
          <CalendarRange className="w-4 h-4 text-slate-500" />
          <span className="text-[11px] font-bold text-slate-600">自核定通知公告日起 8 個月</span>
        </div>
      </div>

      {/* Info: (20260819 - Luphia) Gantt Chart */}
      <div className="z-10 px-16">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 pt-4 pb-5 shadow-sm">

          {/* Info: (20260819 - Luphia) Legend — identity is never color-alone */}
          <div className="flex items-center gap-6 mb-3">
            {STREAMS.map((s) => (
              <div key={s.id} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm" style={{ background: s.color }}></span>
                <span className="text-[11px] font-bold text-slate-600">{s.name}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 ml-auto">
              <Diamond className="w-3 h-3 text-slate-700 fill-slate-700" />
              <span className="text-[11px] font-bold text-slate-600">里程碑交付</span>
            </div>
          </div>

          {/* Info: (20260819 - Luphia) Month axis */}
          <div className="flex items-center h-6 border-b border-slate-200">
            <div className="w-[230px] flex-shrink-0 text-[10px] font-black text-slate-400 tracking-widest uppercase">工作項目</div>
            <div className="flex-1 grid" style={{ gridTemplateColumns: `repeat(${MONTHS}, 1fr)` }}>
              {Array.from({ length: MONTHS }, (_, i) => (
                <div key={`hm-${i + 1}`} className="text-center text-[10px] font-mono font-bold text-slate-400 tabular-nums border-l border-slate-100">
                  M{i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Info: (20260819 - Luphia) Task rows */}
          <div className="pt-1.5">
            {TASKS.map((t) => (
              <div key={t.id} className="flex items-center h-[26px]">
                <div className="w-[230px] flex-shrink-0 pr-4 text-[11.5px] text-slate-600 leading-tight">{t.name}</div>
                <div className="flex-1 relative h-full">
                  <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${MONTHS}, 1fr)` }}>
                    {Array.from({ length: MONTHS }, (_, i) => (
                      <div key={`g-${t.id}-${i}`} className="border-l border-slate-100 h-full"></div>
                    ))}
                  </div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-[14px] rounded-[4px]"
                    style={{
                      left: `${((t.s - 1) / MONTHS) * 100}%`,
                      width: `${((t.e - t.s + 1) / MONTHS) * 100}%`,
                      background: colorOf(t.stream),
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Info: (20260819 - Luphia) Milestone track */}
          <div className="flex items-start h-[42px] pt-2 border-t border-slate-200 mt-1.5">
            <div className="w-[230px] flex-shrink-0 text-[10px] font-black text-slate-400 tracking-widest uppercase">里程碑</div>
            <div className="flex-1 relative h-full">
              {MILESTONES.map((ms) => (
                <div
                  key={ms.id}
                  className="absolute top-0"
                  style={{ left: `${(ms.m / MONTHS) * 100}%`, transform: `translateX(${ms.shift})`, width: 150 }}
                >
                  <div className="flex justify-center" style={{ marginLeft: ms.shift === '-50%' ? 0 : '42%' }}>
                    <Diamond className="w-3 h-3 text-slate-700 fill-slate-700" />
                  </div>
                  <span className="block text-[10px] text-slate-500 leading-tight text-center mt-1">{ms.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Info: (20260819 - Luphia) Monitoring & Risk */}
      <div className="z-10 px-16 py-5 grid grid-cols-3 gap-4 flex-1 items-start">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 flex gap-3">
          <GitPullRequestArrow className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-[12px] font-bold text-slate-800 mb-0.5">專案監控與管理</div>
            <p className="text-[10px] text-slate-500 leading-relaxed">雙週進度會議、月報表提報執行單位；採 Git 版控與看板管理，所有交付物納入里程碑驗收。</p>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 flex gap-3">
          <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-[12px] font-bold text-slate-800 mb-0.5">風險：場域招募不足</div>
            <p className="text-[10px] text-slate-500 leading-relaxed">因應：金屬中心會員廠基數遠大於 300 家，並預留公會、園區服務中心與縣市工策會為備援導入管道。</p>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 flex gap-3">
          <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-[12px] font-bold text-slate-800 mb-0.5">風險：資料品質與資安</div>
            <p className="text-[10px] text-slate-500 leading-relaxed">因應：導入前簽署授權書並執行去識別化；資安檢測提前至 M5 啟動，保留修補與複測時程。</p>
          </div>
        </div>
      </div>

    </div>
  );
}
