'use client';

import { BrainCircuit, Layers3, ShieldCheck, FileCode2, GitBranch, CheckCircle2 } from 'lucide-react';

export default function IsunfaPwpSlide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">Model &amp; Data Governance</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          領域型模型訓練、{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">資料治理與開源機制</span>
        </h2>
      </div>

      {/* Info: (20260819 - Luphia) Main Grid */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 flex-1">

        {/* Info: (20260819 - Luphia) Column 1 - Model */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">領域型模型選用</h3>
          </div>

          <div className="space-y-3 flex-1">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="text-[11px] font-black text-blue-500 tracking-widest uppercase mb-1">Base Model</div>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                採國際開放權重模型（Llama / Gemma / Mistral 等非中資來源）為基座，符合須知對中資背景開源模型之禁用規範。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="text-[11px] font-black text-blue-500 tracking-widest uppercase mb-1">Fine-tuning + RAG</div>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                以金屬材料規格、國際永續法規（CBAM / ESPR / ISO 14067）與檢測報告語料進行
                <span className="font-bold text-slate-800">領域微調</span>，並以 RAG 檢索係數庫確保可溯源。
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="text-[11px] font-black text-blue-600 tracking-widest uppercase mb-1">訓練資料規模</div>
              <p className="text-[12px] text-slate-700 leading-relaxed">
                LLM 訓練語料達 <span className="font-black text-blue-600">20M Tokens 以上</span>，
                另建置 30 萬筆以上結構化材質／廢料檢測樣本。
              </p>
            </div>
          </div>
        </div>

        {/* Info: (20260819 - Luphia) Column 2 - Dataset */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center">
              <Layers3 className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">資料集與治理機制</h3>
          </div>

          <div className="space-y-2.5 flex-1">
            {[
              { id: 'src', t: '來源合法性', d: '場域端資料經工廠授權書取得；第三方資料集檢附授權證明，杜絕權利瑕疵。' },
              { id: 'anon', t: '去識別化', d: '客戶名稱、價格與營業秘密欄位一律遮罩，僅保留材質、成分與流向特徵。' },
              { id: 'label', t: '標註規則', d: '由金屬中心檢測專家共同制定合金別、雜質率與循環等級（A/B/C）標註準則。' },
              { id: 'qa', t: '品質檢核', d: '雙人標註 + 抽樣複核，標註一致性（Kappa）目標 0.85 以上。' },
              { id: 'ver', t: '版本管理', d: '資料集與模型權重採 Git LFS / DVC 版控，保留完整訓練微調 system log 備查。' },
            ].map((x) => (
              <div key={x.id} className="flex gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[13px] font-bold text-slate-800">{x.t}</div>
                  <div className="text-[11px] text-slate-500 leading-relaxed">{x.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 bg-indigo-50 rounded-xl px-4 py-3 border border-indigo-100">
            <div className="text-[11px] text-indigo-700 font-bold leading-relaxed">
              產出資料集：「金屬循環資材與 DPP 標籤資料集」
            </div>
          </div>
        </div>

        {/* Info: (20260819 - Luphia) Column 3 - Open Source */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">開源機制與技術文件</h3>
          </div>

          <div className="space-y-3 flex-1">
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <div className="flex items-center gap-2 mb-1">
                <FileCode2 className="w-4 h-4 text-emerald-600" />
                <span className="text-[13px] font-bold text-slate-800">授權與權利歸屬</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                核心物件（模型權重、範例程式、資料集、訓練教學與授權文件）著作財產權於成果交付時全數移轉數位產業署，
                並以 <span className="font-bold">Apache 2.0 / MIT</span> 釋出，本公司保留非專屬永久使用權以持續商業應用。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-slate-500" />
                <span className="text-[13px] font-bold text-slate-800">標準化技術文件</span>
              </div>
              <ul className="text-[11px] text-slate-600 leading-relaxed space-y-1 mt-1">
                <li>· <span className="font-bold">Model Card</span>：基礎模型與參數、用途與適用範圍、訓練資料概況、效能評測、已知限制與風險</li>
                <li>· <span className="font-bold">SBOM</span>：自研與第三方元件之名稱、版本、授權與來源</li>
                <li>· <span className="font-bold">Dataset Card</span>：蒐集方法、標註準則與偏誤說明</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl px-4 py-3">
              <div className="text-[11px] text-slate-300 leading-relaxed">
                所有文件格式均經數位產業署同意後實施，並配合計畫結束後至少 <span className="font-black text-orange-400">3 年</span> 之成效追蹤與紀錄檔備查。
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="h-8"></div>

    </div>
  );
}
