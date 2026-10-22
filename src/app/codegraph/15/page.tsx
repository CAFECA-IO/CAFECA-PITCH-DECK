'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { Check, X } from 'lucide-react';

export default function CodeGraphSlide15() {
  const fit = [
    { who: '中大型 repo 的維護者', why: '幾萬行以上、跨多個模組，代理光是定位就要繞十幾圈——收益最大的一群。' },
    { who: '每天重度使用編碼代理的人', why: '任務次數愈多，省下的探索成本愈可觀；一天二十次和一週兩次，是完全不同的帳。' },
    { who: '多語言／跨端的專案', why: '前後端＋行動端混合、Swift ↔ ObjC、React Native bridge 這類跨語言邊界，正是它刻意處理的場景。' },
    { who: '不能把程式碼上雲的團隊', why: '金融、醫療、國防、政府標案。100% 本地、無 API key、無程式碼外傳，是少數過得了資安審查的選項。' },
    { who: '常做影響範圍評估的角色', why: '重構、升級相依套件、盤點技術債——impact 與 callers 直接對應日常工作。' },
  ];

  const unfit = [
    { who: '小型專案（幾千行以內）', why: '代理本來就塞得下整包程式碼，圖譜帶來的邊際效益低於安裝與維護的心力。' },
    { who: '偶爾才用 AI 寫程式的人', why: '省下的成本攤不平「多一個常駐工具要顧」的負擔；先把代理用熟再回頭看它。' },
    { who: '重度動態語言／metaprogramming', why: '大量反射、runtime DI、字串組出來的呼叫——靜態圖譜的覆蓋率會低到不值得信任。' },
    { who: '主要工作不是在既有程式碼中導航', why: '從零寫新專案、寫獨立腳本、做資料分析——沒有「找出誰呼叫誰」的需求。' },
    { who: '無法接受多一層需要維運的東西', why: '索引會過期、資料庫檔會長大、放錯磁碟會鎖定。它是很輕，但不是零。' },
  ];

  return (
    <CgSlideShell
      chapter="ACT 5 · WHO IT IS FOR"
      accent="emerald"
      pageLabel="15"
      title={<>誰該裝，誰可以先不用</>}
      subtitle={<>判斷標準只有一條：<span className="text-slate-100 font-bold">你的代理花在「找」的時間，是不是明顯多於花在「改」的時間？</span>是，就裝；不是，就先別。</>}
      footer="它是 MIT 開源、本地執行、可隨時移除——所以「不確定的話就試一週，用 codegraph status 和你的帳單自己驗證」是完全合理的做法。"
      compact
    >
      <div className="grid grid-cols-2 gap-5 flex-1">
        <div className="bg-emerald-400/[0.05] border border-emerald-400/25 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-emerald-400/15 flex items-center justify-center">
              <Check className="w-4 h-4 text-emerald-300" />
            </div>
            <span className="text-[15px] font-bold tracking-wide text-emerald-300">適合</span>
          </div>
          <div className="flex-1 flex flex-col justify-around pb-1">
            {fit.map((f) => (
              <div key={f.who}>
                <div className="text-[14.5px] font-bold text-white leading-tight">{f.who}</div>
                <div className="text-[12.5px] text-slate-400 leading-snug mt-0.5">{f.why}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-500/[0.05] border border-slate-600/40 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-slate-500/15 flex items-center justify-center">
              <X className="w-4 h-4 text-slate-400" />
            </div>
            <span className="text-[15px] font-bold tracking-wide text-slate-300">先不需要</span>
          </div>
          <div className="flex-1 flex flex-col justify-around pb-1">
            {unfit.map((u) => (
              <div key={u.who}>
                <div className="text-[14.5px] font-bold text-slate-200 leading-tight">{u.who}</div>
                <div className="text-[12.5px] text-slate-500 leading-snug mt-0.5">{u.why}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CgSlideShell>
  );
}
