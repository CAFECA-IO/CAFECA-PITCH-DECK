'use client';

import { TrendingUp, Server, Cloud, HeartPulse, Recycle } from 'lucide-react';

export default function IsunfaPwp2Slide14() {
  const metrics = [
    { id: 'k1', value: '-50%', label: '行政文書工時', desc: '訪視紀錄、核銷與報表由 AI 草擬，人員只需審核', ink: 'text-orange-500' },
    { id: 'k2', value: '+10hr', label: '每週直接服務時間／每位社工', desc: '省下的文書時間全數回歸服務對象', ink: 'text-emerald-500' },
    { id: 'k3', value: '100+', label: '受惠社工場域', desc: '含日照、小作所、庇護工場、早療與社區據點', ink: 'text-blue-500' },
    { id: 'k4', value: '10,000+', label: '間接受惠服務對象與家庭', desc: '以每場域服務量能推估之覆蓋人次', ink: 'text-rose-500' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-teal-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
        <span className="text-xs font-mono text-teal-600 uppercase tracking-widest">Operations &amp; Impact</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-4">
          <TrendingUp className="w-4 h-4 text-teal-600" />
          <span className="text-sm font-semibold text-teal-700">營運規劃與預期效益</span>
        </div>
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          計畫結束不是終點：<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500">永續營運與社會影響</span>
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) Impact Metrics */}
      <div className="z-10 px-16 grid grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 relative overflow-hidden">
            <div className={`text-[34px] font-black leading-none ${m.ink}`}>{m.value}</div>
            <div className="text-[13px] font-bold text-slate-800 mt-2">{m.label}</div>
            <div className="text-[11px] text-slate-500 leading-relaxed mt-1.5">{m.desc}</div>
          </div>
        ))}
      </div>

      {/* Info: (20260904 - Luphia) Business Model & Sustainability */}
      <div className="z-10 px-16 pt-5 pb-8 flex-1">
        <div className="text-[11px] font-black text-slate-400 tracking-widest uppercase mb-2.5">計畫結束後之營運模式（雙軌收費支撐永續維運）</div>
        <div className="grid grid-cols-3 gap-5 h-[calc(100%-24px)]">
          <div className="bg-white border border-teal-200 rounded-2xl px-5 py-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-400"></div>
            <div className="flex items-center gap-2 mb-2 mt-0.5">
              <Server className="w-4 h-4 text-teal-600" />
              <span className="text-[13px] font-bold text-slate-800">地端買斷方案 · 一次購足</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-500 leading-relaxed">
              <li className="flex gap-1.5"><span className="text-teal-600 font-bold flex-shrink-0">·</span><span>購置「愛智扶 AI 主機」設備，即可<span className="font-bold text-slate-700">永久使用本專案 AI Agent 服務</span></span></li>
              <li className="flex gap-1.5"><span className="text-teal-600 font-bold flex-shrink-0">·</span><span>個案資料地端保存，服務不依賴外部連線</span></li>
              <li className="flex gap-1.5"><span className="text-teal-600 font-bold flex-shrink-0">·</span><span>重大版本採<span className="font-bold text-slate-700">付費升級制</span>，機構自主決定升級時點</span></li>
              <li className="flex gap-1.5"><span className="text-teal-600 font-bold flex-shrink-0">·</span><span><span className="font-bold text-slate-700">239,800 元／場域</span>（設備 199,900 ＋ 導入服務 39,900）</span></li>
              <li className="flex gap-1.5"><span className="text-teal-600 font-bold flex-shrink-0">·</span><span>計畫期間導入場域由本案負擔，所需設備由本公司自籌</span></li>
            </ul>
          </div>
          <div className="bg-white border border-indigo-200 rounded-2xl px-5 py-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-400"></div>
            <div className="flex items-center gap-2 mb-2 mt-0.5">
              <Cloud className="w-4 h-4 text-indigo-600" />
              <span className="text-[13px] font-bold text-slate-800">雲端訂閱方案 · 永遠最新</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-500 leading-relaxed">
              <li className="flex gap-1.5"><span className="text-indigo-600 font-bold flex-shrink-0">·</span><span><span className="font-bold text-slate-700">每月 840 元</span>訂閱制，功能與模型始終保持最新版本</span></li>
              <li className="flex gap-1.5"><span className="text-indigo-600 font-bold flex-shrink-0">·</span><span>免設備投資與機房維護，開通即用</span></li>
              <li className="flex gap-1.5"><span className="text-indigo-600 font-bold flex-shrink-0">·</span><span>適合小型機構與非敏感之行政、報表產製負載</span></li>
              <li className="flex gap-1.5"><span className="text-indigo-600 font-bold flex-shrink-0">·</span><span>訂閱收入回饋支撐公益版維運與開源社群</span></li>
            </ul>
          </div>
          <div className="bg-white border border-rose-200 rounded-2xl px-5 py-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-rose-400"></div>
            <div className="flex items-center gap-2 mb-2 mt-0.5">
              <HeartPulse className="w-4 h-4 text-rose-500" />
              <span className="text-[13px] font-bold text-slate-800">公益承諾與社會影響</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-500 leading-relaxed">
              <li className="flex gap-1.5"><span className="text-rose-500 font-bold flex-shrink-0">·</span><span>核心模型與平台開源，機構亦可自行建置</span></li>
              <li className="flex gap-1.5"><span className="text-rose-500 font-bold flex-shrink-0">·</span><span>硬體與訂閱收入支撐常態維運，配合貴署 3 年成效追蹤</span></li>
              <li className="flex gap-1.5"><span className="text-rose-500 font-bold flex-shrink-0">·</span><span>減緩社工過勞流失、善款徵信報表自動化更透明</span></li>
              <li className="flex gap-1.5"><span className="text-rose-500 font-bold flex-shrink-0">·</span><span>FAITH 開源帶動兒少、老福、長照垂直應用生態</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 pb-7 -mt-2">
        <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl px-8 py-4 shadow-lg">
          <Recycle className="w-5 h-5 text-teal-400 flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            <span className="font-black text-teal-400">市場規模</span>：每 1,000 場域對應約 <span className="font-black text-white">2.4 億元</span>導入產值；
            全國社福與非營利場域潛在市場逾 <span className="font-black text-white">26 億元</span>——導入越多、語料越豐富、FAITH 越聰明，
            公益投入轉化為可持續複利的國家級數位資產。
          </p>
        </div>
      </div>

    </div>
  );
}
