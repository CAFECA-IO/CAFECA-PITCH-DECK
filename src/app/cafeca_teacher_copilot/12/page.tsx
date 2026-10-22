'use client';

import { TownSkyline, AdventureParty } from '@/components/slide/redink_town_art';
import Image from 'next/image';
import { FlaskConical, FileSignature, Network, ArrowRight, Mail, Sparkles } from 'lucide-react';

export default function CafecaTcSlide12() {
  const futures = [
    {
      icon: FlaskConical,
      step: '現在',
      title: '共同設計 · 單年級試點',
      desc: '一所 KIST 學校一個學期的實驗——內在動機與品格觀察前後測公開，數據說了算',
      color: 'bg-[#F9EADF] border-[#F2CDBE]',
      iconColor: 'text-[#C01212]',
    },
    {
      icon: FileSignature,
      step: '下一步',
      title: '以數據共同向政府提案',
      desc: '試點成效為根據，共同申請百工百業 AI 相關計畫——政府經費支應建設，誠致零出資',
      color: 'bg-[#FBF2D7] border-[#F3E3AC]',
      iconColor: 'text-[#A87B0A]',
    },
    {
      icon: Network,
      step: '目標',
      title: '100 個示範導入場域',
      desc: '從 KIST 聯盟擴散至轉型學校與全國偏鄉——成果開源，學校購置設備即可永久免費使用',
      color: 'bg-[#F4E4DE] border-[#EACCC2]',
      iconColor: 'text-[#7E2420]',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#FDF9EB] relative overflow-hidden shadow-2xl flex flex-col border border-[#E6DCC3] text-[#2C2C2C] font-sans">

      {/* Info: (20261001 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-[#F6D9CB] rounded-full mix-blend-multiply filter blur-[140px]"></div>
        <div className="absolute right-0 -bottom-40 w-[700px] h-[700px] bg-[#FBF2D7] rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <TownSkyline className="absolute bottom-0 left-0 w-full z-0 opacity-[0.14] pointer-events-none" />
      <AdventureParty className="absolute bottom-6 right-24 w-52 z-0 opacity-70 pointer-events-none" />

      {/* Info: (20261001 - Luphia) Top Bar */}
      <div className="z-10 flex items-center justify-between px-16 pt-10">
        <Image
          src="/cafeca_logo.svg"
          alt="CAFECA Logo"
          width={160}
          height={48}
          className="object-contain"
        />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9EADF] border border-[#E8B5A4] shadow-sm">
          <Sparkles className="w-4 h-4 text-[#C01212]" />
          <span className="text-xs font-bold text-[#A31111] tracking-wider">百工百業 AI · 成果開源 · 全民永久免費使用</span>
        </div>
      </div>

      {/* Info: (20261001 - Luphia) Closing Statement */}
      <div className="z-10 px-16 pt-10 pb-6">
        <h1 className="text-[44px] font-black tracking-tight leading-[1.2] text-[#2C2C2C] mb-4">
          從一座城鎮開始，<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D61313] via-[#9E2B20] to-[#C9940E]">
            走到一場全國偏鄉都玩得起的教育改革
          </span>
        </h1>
      </div>

      {/* Info: (20261001 - Luphia) Future Roadmap */}
      <div className="z-10 px-16 flex gap-4 items-stretch flex-1">
        {futures.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={f.step} className="flex items-center gap-4 flex-1">
              <div className={`border ${f.color} rounded-2xl p-6 flex flex-col flex-1 h-full shadow-sm`}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className={`w-5 h-5 ${f.iconColor}`} />
                  </div>
                  <span className={`text-[11px] font-black tracking-widest ${f.iconColor}`}>{f.step}</span>
                </div>
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-2 leading-snug">{f.title}</h3>
                <p className="text-[12.5px] text-[#6F6259] leading-relaxed">{f.desc}</p>
              </div>
              {i < futures.length - 1 && <ArrowRight className="w-5 h-5 text-[#C9BCA4] flex-shrink-0" />}
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Thanks & Contact */}
      <div className="z-10 px-16 py-8 flex items-center justify-between">
        <p className="text-lg text-[#6F6259] font-medium border-l-4 border-[#D61313] pl-5 leading-relaxed">
          感謝聆聽。<span className="font-bold text-[#4A403B]">教師執筆，AI 供墨</span>——
          學生的冒險地圖，仍然是老師用紅筆畫出來的。
        </p>
        <div className="flex items-center gap-2 text-[13px] text-[#998A76] flex-shrink-0">
          <Mail className="w-4 h-4" />
          <span>卡菲卡金融科技股份有限公司 · CAFECA FinTech</span>
        </div>
      </div>

    </div>
  );
}
