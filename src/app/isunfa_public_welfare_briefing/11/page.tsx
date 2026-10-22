'use client';

import { Building2, Landmark, Wrench } from 'lucide-react';

export default function IsunfaPwbSlide11() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-teal-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-sm font-bold text-orange-500 tracking-widest">誰在做這件事</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-9">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">
          三個單位，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500">各做各的專長</span>
        </h2>
      </div>

      <div className="z-10 px-16 grid grid-cols-3 gap-6 flex-1">
        {[
          {
            id: 'tifi', icon: Wrench, hex: '#f97316', tint: 'bg-orange-50', ink: 'text-orange-600', ring: 'border-orange-200',
            name: '台灣螺絲工業同業公會', role: '你的公會',
            duties: ['會員廠招募與說明會', '南部場域推動', '彙整會員需求給開發團隊', '教育訓練協辦'],
          },
          {
            id: 'mirdc', icon: Landmark, hex: '#14b8a6', tint: 'bg-teal-50', ink: 'text-teal-600', ring: 'border-teal-200',
            name: '財團法人金屬工業研究發展中心', role: '技術把關',
            duties: ['廢料檢測數據標準制定', '材料技術輔導', '品質分級驗證與背書', '長期產業輔導經驗'],
          },
          {
            id: 'cafeca', icon: Building2, hex: '#6366f1', tint: 'bg-indigo-50', ink: 'text-indigo-600', ring: 'border-indigo-200',
            name: '卡菲卡金融科技（iSunFA）', role: '系統開發',
            duties: ['AI 模型與平台開發', '系統維運與資安', '曾執行台積電碳盤查', '曾協助中國砂輪污泥再生'],
          },
        ].map((o) => {
          const Icon = o.icon;
          return (
            <div key={o.id} className={`bg-white border-2 ${o.ring} rounded-3xl p-8 shadow-sm flex flex-col relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-full h-2" style={{ background: o.hex }}></div>
              <div className={`w-16 h-16 ${o.tint} rounded-2xl flex items-center justify-center mb-5 mt-2`}>
                <Icon className={`w-8 h-8 ${o.ink}`} />
              </div>
              <div className={`text-xs font-black ${o.ink} tracking-widest uppercase mb-2`}>{o.role}</div>
              <h3 className="text-[21px] font-black text-slate-800 mb-5 leading-snug">{o.name}</h3>
              <div className="space-y-2.5 mt-auto">
                {o.duties.map((d) => (
                  <div key={d} className="flex gap-2.5 text-[15px] text-slate-600 leading-relaxed">
                    <span className={`${o.ink} font-bold flex-shrink-0`}>·</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="z-10 px-16 py-9">
        <div className="bg-slate-800 rounded-3xl px-9 py-5">
          <p className="text-[17px] text-slate-200 leading-relaxed text-center">
            本計畫向 <span className="font-bold text-white">數位發展部數位產業署</span>「AI 生態系實證應用徵案」申請補助，
            開發成果將依規定<span className="font-bold text-orange-400">開源釋出</span>，不由單一廠商壟斷。
          </p>
        </div>
      </div>

    </div>
  );
}
