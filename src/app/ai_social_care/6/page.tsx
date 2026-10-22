'use client';

import { Network, Users2, Globe2, MapPin, Building } from 'lucide-react';
import { AscFacilities } from '@/components/slide/asc_art';

export default function AiSocialCareSlide6() {
  const waves = [
    { id: 'w1', label: '第一波 · 示範場域', count: '10+', period: 'M2–M4', color: '#f97316', ink: 'text-orange-600',
      desc: '基金會全臺據點：早療中心、日間照顧、社區家園、小型作業所、庇護性就業、公共托育與教養院園區' },
    { id: 'w2', label: '第二波 · 擴散導入', count: '50+', period: 'M5–M6', color: '#e11d48', ink: 'text-rose-600',
      desc: '經基金會姊妹組織與社福聯盟網絡，擴散至身障、老福、兒少等各類機構' },
    { id: 'w3', label: '第三波 · 生態系落地', count: '100+', period: 'M7–M8', color: '#2563eb', ink: 'text-blue-600',
      desc: '聯合各縣市社會局處、聯合勸募體系與資服夥伴，達成 100 個以上場域導入' },
  ];

  const bonus = [
    { id: 'b1', icon: Users2, t: '多方共同推動', d: '5 家資服業者依開源成果開發垂直應用，並邀集社福聯盟、聯合勸募等非營利法人共同推動', ink: 'text-blue-600' },
    { id: 'b2', icon: MapPin, t: '場域多元性', d: '涵蓋北中南東不同縣市、四種服務類型、從全國型基金會到地方小型協會，非集中於關係企業', ink: 'text-emerald-600' },
    { id: 'b3', icon: Globe2, t: '國際輸出規劃', d: '繁中社福語料為全球稀缺資產，規劃輸出港澳與星馬華語社福組織，並以英文 Model Card 參與國際社群', ink: 'text-indigo-600' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">05 · AI 場域規劃與生態系擴散能力</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <Network className="w-8 h-8 text-emerald-600 flex-shrink-0" />
          三波段導入：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-blue-500">從一個基金會，到 100 個場域</span>
        </h2>
      </div>

      {/* Info: (20261005 - Luphia) Three Waves */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 mb-5">
        {waves.map((w) => (
          <div key={w.id} className="bg-white border border-slate-200 rounded-3xl shadow-sm px-6 py-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: w.color }}></div>
            <div className="flex items-center justify-between mb-2 mt-1">
              <span className={`text-[11px] font-black ${w.ink} tracking-widest uppercase`}>{w.label}</span>
              <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 rounded-full px-2.5 py-1">{w.period}</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[42px] font-black leading-none" style={{ color: w.color }}>{w.count}</span>
              <span className="text-[12px] font-bold text-slate-400">場域（累計）</span>
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed">{w.desc}</p>
          </div>
        ))}
      </div>

      {/* Info: (20261005 - Luphia) 導入場域類型與節奏 */}
      <div className="z-10 px-16 mb-5">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-2.5 shadow-sm flex items-center gap-6">
          <AscFacilities className="w-[190px] h-[58px] flex-shrink-0" />
          <span className="text-[12px] font-black text-slate-700 flex-shrink-0 leading-snug">場域導入<br />節奏（累計）</span>
          <div className="flex-1 flex items-center gap-2">
            {[
              { id: 'r1', m: 'M5', v: '20', c: '#f97316' },
              { id: 'r2', m: 'M6', v: '50', c: '#e11d48' },
              { id: 'r3', m: 'M7', v: '80', c: '#6366f1' },
              { id: 'r4', m: 'M8', v: '100+', c: '#2563eb' },
            ].map((r, i, arr) => (
              <div key={r.id} className="flex items-center gap-2 flex-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[10px] font-mono font-black text-slate-400 tracking-widest">{r.m}</span>
                  <span className="text-[18px] font-black leading-none" style={{ color: r.c }}>{r.v}</span>
                  <span className="text-[10px] text-slate-400">個場域</span>
                </div>
                {i < arr.length - 1 && <div className="flex-1 h-px bg-slate-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Bonus Items */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 flex-1 items-start">
        {bonus.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.id} className="bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${b.ink}`} />
                <span className="text-[13px] font-black text-slate-800">{b.t}</span>
                <span className="text-[9px] font-black text-white bg-emerald-500 rounded-full px-2 py-0.5 tracking-widest">加分</span>
              </div>
              <p className="text-[11.5px] text-slate-500 leading-relaxed">{b.d}</p>
            </div>
          );
        })}
      </div>

      {/* Info: (20261005 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 py-7">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-lg">
          <Building className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <p className="text-[13.5px] text-white font-medium leading-snug">
            <span className="font-black text-emerald-400">為何從唐氏症基金會開始？</span>
            服務型態涵蓋嬰幼兒到老年的全生涯——早療、日照、就業、居住、長照一應俱全。
            <span className="font-black text-white">一個基金會就是整個社福產業的縮影</span>，在這裡驗證過的流程，可以直接複製到任何一類社福機構。
          </p>
        </div>
      </div>

    </div>
  );
}
