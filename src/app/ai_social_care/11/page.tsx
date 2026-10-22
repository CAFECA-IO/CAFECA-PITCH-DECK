'use client';

import { Table2, Scale } from 'lucide-react';

export default function AiSocialCareSlide11() {
  /**
   * Info: (20261005 - Luphia) 人力成本依「機關委託資訊服務廠商評選及計費辦法」第 16 條服務成本加公費法，
   * 單價採中華民國資訊軟體協會 112 年 6 月修訂之「直接薪資計價基準表」J62 行業別（本公司行業分類）。
   * 管理費率第三類上限 100%，本案保守採 80%；本案為政府補助計畫，不編列公費（利潤）。
   */
  const groups = [
    {
      id: 'g1', no: '一', name: 'AI 模型訓練或 AI 中介平台', total: '12,000,000', pct: '40%',
      color: '#f97316', tint: 'bg-orange-50', ink: 'text-orange-600', brd: 'border-orange-200',
      rows: [
        { id: 'a1', k: '1-1 直接薪資', d: '計畫主持人及模型技術主管 7×179,946；資訊及通訊專業人員 24×100,575；資料治理與標註 9×52,275；專案管理師 2×93,345（42 人月）', v: '4,330,587' },
        { id: 'a2', k: '1-2 管理費用', d: '直接薪資扣除非經常性給與獎金後 3,539,127 × 80%（第三類上限 100%，保守編列）', v: '2,831,302' },
        { id: 'a3', k: '1-3 語料與標註', d: '語料授權取得整理、去識別化與人工複核（委外）、標註平台授權、領域專家審閱、評測集建置', v: '2,400,000' },
        { id: 'a4', k: '1-4 模型調校', d: 'H100 雲端算力租用 60 萬；微調與 RAG 索引建置 50 萬；評測與迭代（含 M8 再訓練）40 萬', v: '1,500,000' },
        { id: 'a5', k: '1-5 文件與開源', d: 'Model Card 中英文版、SBOM 產製與第三方授權合規檢核、開源儲存庫與社群維運', v: '500,000' },
        { id: 'a6', k: '1-6 資安檢驗', d: '委由第三方檢測機構執行源碼掃描、弱點掃描與滲透測試', v: '400,000' },
        { id: 'a7', k: '1-7 其他直接費用', d: '資料收集、文獻授權與印刷費', v: '38,111' },
      ],
    },
    {
      id: 'g2', no: '二', name: 'AI 應用系統開發', total: '6,000,000', pct: '20%',
      color: '#6366f1', tint: 'bg-indigo-50', ink: 'text-indigo-600', brd: 'border-indigo-200',
      rows: [
        { id: 'b1', k: '2-1 直接薪資', d: '資訊及通訊專業人員（設計、前後端）18×100,575；資訊管理及維護技術員（測試）5×60,018（23 人月）', v: '2,110,440' },
        { id: 'b2', k: '2-2 管理費用', d: '直接薪資扣除非經常性給與獎金後 1,724,735 × 80%', v: '1,379,788' },
        { id: 'b3', k: '2-3 系統整合', d: 'iSunFA 帳務核心介接 40 萬；API／MCP 介面設計與技術文件 30 萬；申報格式轉換 30 萬', v: '1,000,000' },
        { id: 'b4', k: '2-4 無障礙與測試', d: 'WCAG 2.1 AA 設計與檢測 25 萬；場域實地使用性測試 3 輪×8 人 25 萬；設計系統元件庫 10 萬', v: '600,000' },
        { id: 'b5', k: '2-5 測試與部署', d: '整合與壓力測試、地端部署自動化工具、版本管理與 CI／CD 環境', v: '500,000' },
        { id: 'b6', k: '2-6 資安檢驗', d: '應用系統源碼掃描、弱點掃描與滲透測試，涵蓋 OWASP Top 10', v: '300,000' },
        { id: 'b7', k: '2-7 其他直接費用', d: '開發工具授權與 CI／CD 環境租費', v: '109,772' },
      ],
    },
    {
      id: 'g3', no: '三', name: 'AI 生態系場域擴散', total: '12,000,000', pct: '40%',
      color: '#10b981', tint: 'bg-emerald-50', ink: 'text-emerald-600', brd: 'border-emerald-200',
      rows: [
        { id: 'c1', k: '3-1 直接薪資', d: '導入工程師（資訊管理及維護技術員）20×60,018；客服與遠端技術支援 6×58,712（26 人月）', v: '1,552,632' },
        { id: 'c2', k: '3-2 管理費用', d: '直接薪資扣除非經常性給與獎金後 1,268,872 × 80%', v: '1,015,098' },
        { id: 'c3', k: '3-3 場域導入作業', d: '環境評估與資料匯入 100 場域×20,000；到府安裝與系統設定 100 場域×8,000', v: '2,800,000' },
        { id: 'c4', k: '3-4 機構媒合輔導', d: '聯合提案單位協同執行 120 萬；場域招募與需求訪談 64 萬；合作文件行政 16 萬', v: '2,000,000' },
        { id: 'c5', k: '3-5 宣導與推廣', d: '北中南東巡迴宣導會 8 場×12 萬；資服業者技術說明會 2 場×15 萬；成果發表會 20 萬；文宣 14 萬', v: '1,600,000' },
        { id: 'c6', k: '3-6 教育訓練', d: '場域教育訓練 100 場域×2 小時 80 萬；圖解手冊與影音教學 40 萬；線上問答知識庫 20 萬', v: '1,400,000' },
        { id: 'c7', k: '3-7 導入差旅費', d: '100 個場域跨縣市導入差旅，含連江縣馬祖等離島據點', v: '1,232,270' },
        { id: 'c8', k: '3-8 維運與更新', d: '系統維運與地端節點版本更新推送', v: '400,000' },
      ],
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-9 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">10 · 預算分配細項</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-14 pt-16 pb-2 flex items-end justify-between">
        <h2 className="text-[29px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <Table2 className="w-7 h-7 text-slate-700 flex-shrink-0" />
          計畫預算 3,000 萬元　細項編列
        </h2>
        <div className="text-right pb-1">
          <div className="text-[9.5px] text-slate-400 tracking-widest uppercase">人力投入合計</div>
          <div className="text-[12.5px] font-black text-slate-700">91 人月　直接薪資＋管理費 1,322 萬元（占 44%）</div>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) 編列基準 */}
      <div className="z-10 px-14 pb-2">
        <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-1 flex items-center gap-2.5">
          <Scale className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
          <p className="text-[10px] text-slate-600 leading-snug">
            <span className="font-black text-slate-800">人力成本編列基準</span>：依
            <span className="font-bold">「機關委託資訊服務廠商評選及計費辦法」第 16 條服務成本加公費法</span>，
            單價採中華民國資訊軟體協會 112 年 6 月修訂之<span className="font-bold">直接薪資計價基準表（62 中類　電腦程式設計、諮詢及相關服務業）</span>，
            已含非經常性給與、不扣薪假與雇主依法負擔；管理費率第三類上限 100%，本案<span className="font-bold text-orange-600">保守採 80%</span>；
            本案為政府補助計畫，<span className="font-bold text-orange-600">不編列公費（利潤）</span>。
          </p>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) 細項表 */}
      <div className="z-10 px-14 flex-1 flex flex-col gap-1">
        {groups.map((g) => (
          <div key={g.id} className={`bg-white border ${g.brd} rounded-xl overflow-hidden shadow-sm`}>
            <div className={`${g.tint} px-4 py-[3px] flex items-center gap-3`}>
              <span className="text-[12px] font-black text-slate-800">{g.no}、{g.name}</span>
              <span className={`text-[9.5px] font-black ${g.ink} bg-white rounded-full px-2`}>{g.pct}</span>
              <span className="ml-auto text-[13px] font-black" style={{ color: g.color }}>{g.total}</span>
              <span className="text-[9.5px] text-slate-400">元</span>
            </div>
            <table className="w-full">
              <tbody>
                {g.rows.map((r) => (
                  <tr key={r.id} className="border-t border-slate-100">
                    <td className="px-4 py-[1.5px] text-[10px] font-bold text-slate-700 align-top whitespace-nowrap w-[116px]">{r.k}</td>
                    <td className="px-2 py-[1.5px] text-[9px] text-slate-500 leading-tight align-top">{r.d}</td>
                    <td className="px-4 py-[1.5px] text-[10px] font-mono font-bold text-slate-800 text-right align-top whitespace-nowrap w-[80px]">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Info: (20261005 - Luphia) 自籌說明 */}
      <div className="z-10 px-14 py-2">
        <div className="bg-slate-900 rounded-xl px-5 py-2.5 flex items-center gap-4 shadow-lg">
          <p className="text-[10.5px] text-white leading-snug">
            <span className="font-black text-orange-400">自籌經費（不列入計畫預算）：</span>
            地端 AI 推理節點採 ASUS Ascent GX10 等同級機種，依各場域資料敏感性與服務規模評估配置，
            <span className="font-black">設備與建置費用全數由本公司自籌</span>；聯合提案單位與導入機構均無須負擔。
          </p>
          <span className="ml-auto text-[13px] font-black text-white flex-shrink-0 whitespace-nowrap">總計　30,000,000 元</span>
        </div>
      </div>

    </div>
  );
}
