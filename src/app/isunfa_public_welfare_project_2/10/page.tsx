'use client';

import { Brain, Calculator, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

export default function IsunfaPwp2Slide10() {
  const letters = [
    { id: 'f', letter: 'F', word: 'Finance', zh: '財務', desc: '非營利財務管理與預算執行' },
    { id: 'a', letter: 'A', word: 'Accounting', zh: '會計', desc: '憑證判讀、分錄與專款專用勾稽' },
    { id: 'i', letter: 'I', word: 'Intelligence', zh: '智能', desc: '領域微調 LLM ＋社福資源 RAG' },
    { id: 't', letter: 'T', word: 'Trust', zh: '信任', desc: '可稽核、可追溯、人審把關' },
    { id: 'h', letter: 'H', word: 'Humanity', zh: '人本', desc: '以社工專業與服務對象為中心' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        <span className="text-xs font-mono text-amber-600 uppercase tracking-widest">FAITH Model</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
          <Brain className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-semibold text-amber-700">領域型 AI 模型</span>
        </div>
        <h2 className="text-[40px] font-black leading-tight text-slate-800">
          FAITH：<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-500">會計 × 社福雙專業的信任模型</span>
        </h2>
        <p className="text-[13px] text-slate-500 mt-2 font-medium">
          市面上的通用模型不懂公益勸募條例，也不懂社福機構的營運語言——FAITH 是第一個同時受過這兩種專業訓練的開源領域模型。
        </p>
      </div>

      {/* Info: (20260904 - Luphia) FAITH Letters */}
      <div className="z-10 px-16 grid grid-cols-5 gap-4">
        {letters.map((l) => (
          <div key={l.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 text-center relative overflow-hidden">
            <div className="text-[44px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-blue-500">{l.letter}</div>
            <div className="text-[12px] font-mono font-bold text-slate-400 mt-1">{l.word}</div>
            <div className="text-[15px] font-bold text-slate-800 mt-1">{l.zh}</div>
            <div className="w-8 h-px bg-slate-200 mx-auto my-2"></div>
            <div className="text-[11px] text-slate-500 leading-relaxed">{l.desc}</div>
          </div>
        ))}
      </div>

      {/* Info: (20260904 - Luphia) Dual Expertise */}
      <div className="z-10 px-16 pt-5 pb-8 flex-1 grid grid-cols-2 gap-6">
        <div className="bg-white border border-amber-200 rounded-3xl shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-400"></div>
          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
              <Calculator className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">會計專業（iSunFA 既有累積）</h3>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
            {['非營利組織會計準則', '公益勸募條例法遵', '專款專用與徵信公告', '憑證辨識與自動分錄', '補助核銷規則引擎', '財報異常偵測'].map((t) => (
              <div key={t} className="flex gap-2 text-[12px] text-slate-600 leading-relaxed">
                <span className="text-amber-500 font-bold flex-shrink-0">·</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-blue-200 rounded-3xl shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-400"></div>
          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">社福專業（唐氏症基金會共建）</h3>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
            {['社福機構行政與服務流程', '社福法規與主管機關申報', '勞動人事與志工管理實務', '身障服務領域知識', '服務成效與影響力指標', '倫理界線與保密規範'].map((t) => (
              <div key={t} className="flex gap-2 text-[12px] text-slate-600 leading-relaxed">
                <span className="text-blue-500 font-bold flex-shrink-0">·</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 pb-7 -mt-2">
        <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl px-8 py-4 shadow-lg">
          <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            <span className="font-black text-amber-400">信任邊界</span>：FAITH 產出一律標註信心值與依據來源；帳務需會計簽核、人事與對外報告需主管簽核，
            <span className="font-bold">AI 輔助專業、永不取代專業判斷</span>。
          </p>
          <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 ml-auto" />
        </div>
      </div>

    </div>
  );
}
