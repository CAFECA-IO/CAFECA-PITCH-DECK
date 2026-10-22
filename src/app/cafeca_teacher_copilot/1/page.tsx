'use client';

import { TownSkyline } from '@/components/slide/redink_town_art';
import Image from 'next/image';
import { Building2, GraduationCap, Landmark } from 'lucide-react';

export default function CafecaTcSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-[#FDF9EB] relative overflow-hidden shadow-2xl flex flex-col border border-[#E6DCC3] text-[#2C2C2C] font-sans">

      {/* Info: (20261001 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-[#F6D9CB] rounded-full mix-blend-multiply filter blur-[140px]"></div>
        <div className="absolute right-0 -bottom-40 w-[700px] h-[700px] bg-[#FBF2D7] rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute left-1/2 top-1/4 w-[420px] h-[420px] bg-[#F8E7E1] rounded-full mix-blend-multiply filter blur-[130px]"></div>
      </div>

      <TownSkyline className="absolute bottom-0 left-0 w-full z-0 opacity-[0.16] pointer-events-none" />

      {/* Info: (20261001 - Luphia) Top Bar */}
      <div className="z-10 flex items-center justify-between px-16 pt-10">
        <Image
          src="/cafeca_logo.svg"
          alt="CAFECA Logo"
          width={160}
          height={48}
          className="object-contain"
        />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8B5A4] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D61313] animate-pulse"></span>
          <span className="text-xs font-bold text-[#A31111] tracking-wider">10 分鐘分享 · 致誠致教育基金會</span>
        </div>
      </div>

      {/* Info: (20261001 - Luphia) Main Title Area */}
      <div className="z-10 flex-1 flex flex-col justify-center px-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-md bg-[#2C2C2C] text-white text-xs font-bold tracking-widest">教師執筆 · AI 供墨</span>
          <span className="px-3 py-1 rounded-md bg-[#8A6508] text-white text-xs font-bold tracking-widest">真實理解 × 合作 × 社交</span>
        </div>

        <h1 className="text-[56px] font-black tracking-tight leading-[1.15] text-[#2C2C2C]">
          紅墨<span className="text-3xl font-bold text-[#998A76] tracking-normal ml-3 align-middle">RedInk</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D61313] via-[#9E2B20] to-[#C9940E]">
            以遊戲化完成一次教育改革
          </span>
        </h1>

        <p className="text-xl text-[#6F6259] font-medium leading-relaxed border-l-4 border-[#D61313] pl-6 mt-8">
          讓學校成為一場大型多人冒險：科目是城鎮、作業是委託任務、品格是榮譽徽章——<br />
          <span className="font-bold text-[#4A403B]">把制度獎勵的對象，從「一個人、答對、快」換成教育的核心本身。</span>
        </p>
      </div>

      {/* Info: (20261001 - Luphia) Bottom Info Strip */}
      <div className="z-10 grid grid-cols-3 gap-4 px-16 pb-9 items-stretch">
        <div className="bg-white/90 backdrop-blur-sm border border-[#E6DCC3] rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#F4E4DE] flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5 text-[#7E2420]" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#998A76] tracking-widest uppercase mb-0.5">開發團隊</div>
            <div className="text-[13px] font-bold text-[#2C2C2C]">卡菲卡金融科技（股）</div>
            <div className="text-[11px] text-[#6F6259]">紅墨 AI 產線與領域模型</div>
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm border border-[#E6DCC3] rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#F9EADF] flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-5 h-5 text-[#C01212]" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#998A76] tracking-widest uppercase mb-0.5">受邀夥伴</div>
            <div className="text-[13px] font-bold text-[#2C2C2C]">財團法人誠致教育基金會</div>
            <div className="text-[11px] text-[#6F6259]">教育哲學的共同設計者</div>
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm border border-[#E6DCC3] rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#FBF2D7] flex items-center justify-center flex-shrink-0">
            <Landmark className="w-5 h-5 text-[#A87B0A]" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#998A76] tracking-widest uppercase mb-0.5">未來 · 共同提案</div>
            <div className="text-[13px] font-bold text-[#2C2C2C]">百工百業 AI 計劃</div>
            <div className="text-[11px] text-[#6F6259]">成果開源 · 100 個示範導入場域</div>
          </div>
        </div>
      </div>

    </div>
  );
}
