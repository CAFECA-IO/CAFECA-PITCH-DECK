'use client';

import { GraduationCap, School, Landmark, Theater, Camera, MapPin } from 'lucide-react';

export default function IsuntvNcafSlide9() {
  const fields = [
    { icon: GraduationCap, label: '大專影視／藝術科系', count: '80+', color: 'text-violet-500', bg: 'bg-violet-50' },
    { icon: School, label: '高中職多媒體／設計科', count: '60+', color: 'text-amber-500', bg: 'bg-amber-50' },
    { icon: Landmark, label: '地方文化局處與館所', count: '40+', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: Theater, label: '立案藝文團體', count: '80+', color: 'text-rose-500', bg: 'bg-rose-50' },
    { icon: Camera, label: '獨立創作者工作室', count: '40+', color: 'text-sky-500', bg: 'bg-sky-50' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 top-0 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute right-0 -bottom-1/4 w-[700px] h-[700px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-sm font-bold text-emerald-600 tracking-widest">場域擴散</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8 flex items-end justify-between">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-violet-600">300 個藝文場域</span>，靠競賽一次到位
        </h2>
        <div className="text-right pb-2">
          <div className="text-[40px] font-black text-emerald-600 leading-none">300+</div>
          <div className="text-xs text-slate-400 font-bold tracking-wider">雲端服務型場域擴散目標</div>
        </div>
      </div>

      <div className="z-10 px-16 flex items-stretch gap-4">
        {fields.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.label} className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
              <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-3`}>
                <Icon className={`w-7 h-7 ${f.color}`} />
              </div>
              <div className={`text-[28px] font-black ${f.color} leading-none mb-1.5`}>{f.count}</div>
              <div className="text-[13px] font-bold text-slate-600 leading-snug">{f.label}</div>
            </div>
          );
        })}
      </div>

      <div className="z-10 px-16 pt-6 flex-1">
        <div className="grid grid-cols-2 gap-4 h-full pb-2">
          <div className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-center">
            <h3 className="text-[20px] font-black mb-2 text-amber-300">國藝會的網絡，是別的提案抄不走的</h3>
            <p className="text-[15px] text-violet-100 leading-relaxed">
              長年補助往來的藝文團體名錄、藝評人社群、與各地文化單位的信任關係——一紙共同主辦公文，動員力勝過任何行銷預算。
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-emerald-500" />
              <h3 className="text-[20px] font-black text-slate-800">多元性直接對應審查加分</h3>
            </div>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              北中南東與離島並進、學校／團體／個人不同規模兼備、不集中於特定關係企業——完全符合「場域多元性」加分條件。
            </p>
          </div>
        </div>
      </div>

      <div className="h-8"></div>

    </div>
  );
}
