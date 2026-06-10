'use client';

import Image from 'next/image';
import { ShieldAlert, Database, FileText, TrendingDown, Server, Lock } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide14() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 top-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-10 bottom-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Key Cooperation Resources</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 leading-tight">
            合作關鍵資源：向和泰汽車申請之核心數據
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">

        {/* Left Column: Security Commitment */}
        <div className="w-[40%] flex flex-col justify-center gap-4">
          <div className="bg-gradient-to-br from-emerald-950 to-slate-950 border border-emerald-500/30 p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 text-emerald-500/5 group-hover:scale-110 transition-transform duration-500">
              <Lock size={150} />
            </div>

            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldAlert size={16} />
              Security & Compliance
            </div>

            <h3 className="text-2xl font-extrabold text-white mt-3">
              數據去識別化與合規承諾
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed mt-4">
              以保護隱私為最高前提，所有串接與訓練均可在和泰地端專網環境中運行。
            </p>

            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                去除所有個人車主姓名、身份證號與電話
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                遮蔽完整車牌號碼，僅保留 VIN 碼進行關聯
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                遵循集團資安規範，確保資料不出廠
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: 4 Core Data Requests */}
        <div className="w-[60%] grid grid-cols-2 gap-4">

          <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors">
            <div className="p-3 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-xl flex-shrink-0">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-sm mb-1.5">1. 原廠保修工單樣本</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                收集約 10,000 份歷史保修單（含技師手寫註記與零件收據去識別化樣本），用於 AI 多模態 OCR 筆跡辨識模型微調。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors">
            <div className="p-3 bg-sky-950/50 border border-sky-500/20 text-sky-400 rounded-xl flex-shrink-0">
              <Database size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-sm mb-1.5">2. 車身與規格主檔庫</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                全車系車型規格對照主檔（包含 VIN 碼對應之引擎代號、底盤規格、零件料號編碼），作為身分驗證與欄位對照基準。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors">
            <div className="p-3 bg-amber-950/50 border border-amber-500/20 text-amber-400 rounded-xl flex-shrink-0">
              <TrendingDown size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-sm mb-1.5">3. 中古車折舊交易歷史</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                和泰認證中古車歷史估價、成交殘值、里程數與車況檢測評分，用於精確微調 AI 剩餘價值評估模型。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors">
            <div className="p-3 bg-indigo-950/50 border border-indigo-500/20 text-indigo-400 rounded-xl flex-shrink-0">
              <Server size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-sm mb-1.5">4. 系統 API 與資料規格</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                原廠保修系統（TOYOTA/LEXUS）與租車平台（和運/iRent）的系統接口技術文件，以便規劃地端閘道資料同步。
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 14 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
