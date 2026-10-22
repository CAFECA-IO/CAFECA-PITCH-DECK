'use client';

import { Recycle, ArrowRight, Factory, Coins } from 'lucide-react';

export default function IsunfaPwbSlide7() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 bottom-0 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute right-0 -top-1/4 w-[600px] h-[600px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-sm font-bold text-emerald-600 tracking-widest">第二個好處</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">
          你現在花錢清運的東西，<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-orange-500">可能有人要買</span>
        </h2>
      </div>

      <div className="z-10 px-16 mb-9">
        <div className="flex items-stretch gap-5">
          <div className="flex-1 bg-white border-2 border-slate-200 rounded-3xl px-7 py-6">
            <div className="flex items-center gap-3 mb-2">
              <Factory className="w-6 h-6 text-slate-500" />
              <span className="text-[22px] font-black text-slate-800">你的工廠</span>
            </div>
            <p className="text-[16px] text-slate-500 leading-relaxed">上傳廢料的成分檢測數據與每月產出量</p>
          </div>
          <div className="flex items-center"><ArrowRight className="w-8 h-8 text-slate-300" /></div>
          <div className="flex-[1.2] bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl px-7 py-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <Recycle className="w-6 h-6 text-emerald-400" />
              <span className="text-[22px] font-black text-white">AI 分級與媒合</span>
            </div>
            <p className="text-[16px] text-slate-300 leading-relaxed">依成分與雜質率分成 A／B／C 級，找出附近願意收的廠商</p>
          </div>
          <div className="flex items-center"><ArrowRight className="w-8 h-8 text-slate-300" /></div>
          <div className="flex-1 bg-white border-2 border-emerald-300 rounded-3xl px-7 py-6">
            <div className="flex items-center gap-3 mb-2">
              <Coins className="w-6 h-6 text-emerald-600" />
              <span className="text-[22px] font-black text-slate-800">變成收入</span>
            </div>
            <p className="text-[16px] text-slate-500 leading-relaxed">分級越明確，議價空間越大</p>
          </div>
        </div>
      </div>

      <div className="z-10 px-16 flex-1">
        <div className="text-[15px] font-black text-slate-400 tracking-widest uppercase mb-3">扣件與金屬加工廠常見的四種</div>
        <div className="grid grid-cols-4 gap-5">
          {[
            { id: 'w1', w: '鐵 / 鋼 / 鋁切削屑', to: '綠色再生鋁錠、鋼胚', buyer: '汽車零組件廠' },
            { id: 'w2', w: '沖壓廢下腳料', to: '再生鋼捲、粉末冶金原料', buyer: '金屬製品廠' },
            { id: 'w3', w: '酸洗廢液 / 電鍍污泥', to: '工業級金屬鹽類', buyer: '化學品、電池材料廠' },
            { id: 'w4', w: '廢切削油 / 切削液', to: '再生切削油、潤滑油', buyer: '製造業廠內回收' },
          ].map((x) => (
            <div key={x.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="text-[17px] font-bold text-slate-800 mb-3 leading-snug min-h-[50px]">{x.w}</div>
              <div className="flex items-center gap-1.5 text-[14px] text-emerald-700 font-bold mb-2">
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{x.to}</span>
              </div>
              <div className="text-[13px] text-slate-500">買方：{x.buyer}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-12"></div>

    </div>
  );
}
