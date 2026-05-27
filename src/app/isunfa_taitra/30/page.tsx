'use client';

import { ShieldCheck, Link2, FileCheck, Cpu, Lock, Database } from 'lucide-react';

export default function TaitraSlide28() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
              Step 3 Review & Trust
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
              步驟三(下)複核：碳足跡計算邏輯與證據鏈審計軌跡
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              如何利用密碼學與分散式帳本，建立讓 SGS、BSI 查證官百分之百信任的數字憑證防線？
            </p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg h-fit border border-emerald-100">
            <Lock size={24} />
          </div>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-12 gap-8 mt-4 pb-12 items-center">
          {/* Left Block: Hash Chain Visualizer (7 cols) */}
          <div className="col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col h-[340px] justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.08),rgba(255,255,255,0))]" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-3 z-10">
              <div className="flex items-center gap-2">
                <Database size={14} className="text-emerald-400" />
                <span className="text-xs font-mono text-slate-400">On-Chain Audit Ledger</span>
              </div>
              <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-mono border border-emerald-800/50">
                ACTIVE DEPLOYED
              </span>
            </div>

            {/* Hash flow nodes */}
            <div className="flex items-center justify-between gap-2 z-10 my-4">
              {/* Node 1 */}
              <div className="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-3 text-center">
                <span className="text-[9px] text-slate-500 block mb-1 uppercase font-bold">Raw Receipt File</span>
                <div className="bg-slate-950 rounded py-1 px-1.5 text-[9px] font-mono text-emerald-400 truncate mb-1">
                  invoice_9827.pdf
                </div>
                <div className="text-[8px] font-mono text-slate-400">
                  Size: 245 KB
                </div>
              </div>

              <Link2 className="text-emerald-500/40 w-4 h-4 flex-shrink-0 animate-pulse" />

              {/* Node 2 */}
              <div className="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-3 text-center relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[7px] font-black px-1 py-0.5 rounded uppercase">
                  SHA-256
                </div>
                <span className="text-[9px] text-slate-500 block mb-1 mt-1 uppercase font-bold">Metadata Hash</span>
                <div className="bg-slate-950 rounded py-1 px-1.5 text-[9px] font-mono text-amber-400 truncate mb-1">
                  8f3c7d9a1b02e...
                </div>
                <div className="text-[8px] font-mono text-slate-400">
                  Matched & Audited
                </div>
              </div>

              <Link2 className="text-emerald-500/40 w-4 h-4 flex-shrink-0 animate-pulse" />

              {/* Node 3 */}
              <div className="flex-1 bg-emerald-950/20 border border-emerald-800/50 rounded-lg p-3 text-center">
                <span className="text-[9px] text-emerald-400 block mb-1 uppercase font-bold">Ledger Block</span>
                <div className="bg-slate-950 rounded py-1 px-1.5 text-[9px] font-mono text-emerald-300 truncate mb-1">
                  Tx: 0x9f82d1c6...
                </div>
                <div className="text-[8px] font-mono text-slate-400">
                  Timestamp Anchored
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 z-10">
              <span className="text-[10px] text-slate-400 block mb-1 font-bold">區塊鏈智能合約驗證結果</span>
              <p className="text-[9px] text-slate-500 leading-relaxed font-mono">
                [SYSTEM] Hash anchor match: true. Timestamp: 2026-05-22 01:39:04 UTC. No modifications detected since anchoring. Third-party auditors can query the public ledger to verify report integrity.
              </p>
            </div>
          </div>

          {/* Right Block: Audit Trail Value (5 cols) */}
          <div className="col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="text-emerald-600" /> 3. 區塊鏈溯源與不可篡改性
            </h3>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
              <Cpu className="text-emerald-500 flex-shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">一鍵溯源 (One-Click Traceability)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">查證機構（如 SGS、BSI 等）在稽核報告書時，可直接點擊內嵌的區塊鏈鏈結，即時核對原始電子發票的 SHA-256 哈希值與發行戳記，免除人工翻找原始紙本單據的耗時流程。</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
              <FileCheck className="text-sky-500 flex-shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">防篡改審計軌跡 (Anti-Tampering Audit Trail)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">一旦原始憑證被篡改（如修改金額、品名或日期），生成的哈希值將與區塊鏈上的存證紀錄產生衝突，系統將立即警示，極大化提升財務與綠色數據的可信度與合規強度。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#28</div>
        </div>
      </div>
    </div>
  );
}
