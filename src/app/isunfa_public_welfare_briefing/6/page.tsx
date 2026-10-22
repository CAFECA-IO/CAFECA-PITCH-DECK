'use client';

import { QrCode, Percent, Route, Leaf, ShieldCheck } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function IsunfaPwbSlide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-sm font-bold text-emerald-600 tracking-widest">護照長什麼樣</span>
      </div>

      <div className="z-10 w-[58%] h-full flex flex-col justify-center px-16 pt-10">
        <h2 className="text-[44px] font-black leading-tight text-slate-800 mb-4">
          客戶掃一下，<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-orange-500">要的資料全都在</span>
        </h2>
        <p className="text-[17px] text-slate-500 leading-relaxed mb-8">
          歐盟買方稽核時會問的四件事，護照裡直接回答。
        </p>

        <div className="space-y-4">
          {[
            { id: 'a', icon: Percent, c: 'emerald', t: '再生資材比例', d: '這批貨用了多少再生料，占比多少' },
            { id: 'b', icon: Route, c: 'blue', t: '材料可追溯性', d: '材料從哪裡來、經過哪些製程' },
            { id: 'c', icon: Leaf, c: 'orange', t: '碳足跡與減碳履歷', d: '這批貨的碳排放，以及用再生料省下多少' },
            { id: 'd', icon: ShieldCheck, c: 'indigo', t: '資料可查證', d: '每個數字都對應得到原始單據' },
          ].map((x) => {
            const Icon = x.icon;
            return (
              <div key={x.id} className="bg-white border border-slate-200 rounded-2xl px-6 py-4 flex items-center gap-5 shadow-sm">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  x.c === 'emerald' ? 'bg-emerald-50' : x.c === 'blue' ? 'bg-blue-50' : x.c === 'orange' ? 'bg-orange-50' : 'bg-indigo-50'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    x.c === 'emerald' ? 'text-emerald-600' : x.c === 'blue' ? 'text-blue-500' : x.c === 'orange' ? 'text-orange-500' : 'text-indigo-500'
                  }`} />
                </div>
                <div>
                  <div className="text-[19px] font-bold text-slate-800">{x.t}</div>
                  <div className="text-[15px] text-slate-500">{x.d}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="z-10 w-[42%] h-full flex items-center justify-center px-10">
        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-200 p-9 w-full max-w-[380px]">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Digital Product Passport</div>
              <div className="text-xl font-black text-slate-800">六角法蘭面螺栓</div>
              <div className="text-[13px] text-slate-500">批次 LOT-2026-0842</div>
            </div>
            <QrCode className="w-11 h-11 text-slate-800" />
          </div>

          <div className="bg-white rounded-2xl p-4 mb-5 flex items-center justify-center border border-slate-200">
            <QRCodeSVG
              value="https://isunfa.com/dpp/LOT-2026-0842"
              size={190}
              bgColor={"#ffffff"}
              fgColor={"#0f172a"}
              level={"M"}
              includeMargin={false}
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-[14px] text-slate-500">再生資材比例</span>
              <span className="text-[22px] font-black text-emerald-600">42%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '42%' }}></div>
            </div>
            <div className="flex justify-between items-baseline pt-1">
              <span className="text-[14px] text-slate-500">產品碳足跡</span>
              <span className="text-[17px] font-bold text-slate-800">2.14 kgCO₂e / kg</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-[14px] text-slate-500">較原生料減碳</span>
              <span className="text-[17px] font-bold text-emerald-600">−38%</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center">
            示意畫面，實際欄位依買方要求調整
          </div>
        </div>
      </div>

    </div>
  );
}
