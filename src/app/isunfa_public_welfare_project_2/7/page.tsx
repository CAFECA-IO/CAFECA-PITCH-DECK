'use client';

import { Database, ShieldCheck, GitFork, FileCheck2, Lock, Scale } from 'lucide-react';

export default function IsunfaPwp2Slide7() {
  const dataSources = [
    { id: 'd1', name: '非營利組織會計語料', desc: '非營利會計準則、公益勸募條例、財報與徵信公告範本、核銷憑證樣態' },
    { id: 'd2', name: '社福與人事法規知識庫', desc: '社會福利法規、勞動人事法令、主管機關申報規範（RAG 索引）' },
    { id: 'd3', name: '行政文書範本語料', desc: '公文、補助申請書、方案計畫與 ESG／影響力報告之結構化範本（基金會授權）' },
    { id: 'd4', name: '去識別化流程數據', desc: '人事、帳務、財產與服務成效統計之「格式與流程」樣態——僅取結構，個資一律去除' },
  ];

  const governance = [
    { id: 'g1', icon: Lock, title: '去識別化三道關卡', desc: '欄位遮罩 → 實體辨識移除（NER）→ 人工抽查複核，通過方可離開場域地端' },
    { id: 'g2', icon: Scale, title: '合法授權取得', desc: '訓練資料均取得書面授權；人事薪資等個人資料依個資法規範辦理' },
    { id: 'g3', icon: FileCheck2, title: '標註規則與品質檢核', desc: '雙人標註交叉驗證、版本管理（DVC）、品質門檻未達即退回重標' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">Data Governance &amp; Open Source</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          模型訓練、資料治理與{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">開源機制</span>
        </h2>
        <p className="text-[13px] text-slate-500 mt-2 font-medium">人事薪資與財務資料的敏感性是本案最高原則：模型學的是「專業與格式」，不是「個人與隱私」。</p>
      </div>

      {/* Info: (20260904 - Luphia) Main Grid */}
      <div className="z-10 px-16 grid grid-cols-2 gap-6 flex-1">

        {/* Info: (20260904 - Luphia) Left: Data Sources */}
        <div className="bg-white border border-blue-200 rounded-3xl shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-400"></div>
          <div className="flex items-center gap-3 mb-4 mt-1">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Database className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">訓練資料規劃（逾 20M Tokens）</h3>
          </div>
          <div className="space-y-3">
            {dataSources.map((d) => (
              <div key={d.id} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                <div className="text-[13px] font-bold text-slate-800 mb-0.5">{d.name}</div>
                <div className="text-[11.5px] text-slate-500 leading-relaxed">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info: (20260904 - Luphia) Right: Governance + Open Source */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-emerald-200 rounded-3xl shadow-sm p-6 relative overflow-hidden flex-1">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-400"></div>
            <div className="flex items-center gap-3 mb-4 mt-1">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">資料治理機制</h3>
            </div>
            <div className="space-y-3">
              {governance.map((g) => {
                const Icon = g.icon;
                return (
                  <div key={g.id} className="flex gap-3">
                    <Icon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[13px] font-bold text-slate-800">{g.title}</div>
                      <div className="text-[11.5px] text-slate-500 leading-relaxed">{g.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-800 rounded-3xl shadow-lg p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                <GitFork className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white">開源機制規劃</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                '軟體與模型產出（權重、範例程式、資料集）以 MIT 授權釋出',
                'Model Card 完整揭露用途、限制與評測結果',
                'SBOM 軟體物料清單，第三方元件授權相容',
                '核心物件著作財產權移轉數位產業署，取得回授權持續營運',
              ].map((t) => (
                <div key={t} className="flex gap-2 text-[11.5px] text-slate-300 leading-relaxed">
                  <span className="text-emerald-400 font-bold flex-shrink-0">·</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 h-8"></div>
    </div>
  );
}
