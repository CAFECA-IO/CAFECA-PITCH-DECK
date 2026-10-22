'use client';

import { Cctv, Cpu, Binary, Database, ShieldCheck, Timer, ArrowRight } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide10() {
  const pipeline = [
    {
      icon: Cctv,
      title: '既有監視器',
      spec: '1080p / 15fps',
      body: '不新增攝影機，直接複用現場既有的防損監視系統，避免重複佈線與二次投資。',
      tone: 'text-slate-300',
    },
    {
      icon: Cpu,
      title: '邊緣運算盒',
      spec: '每 40 路 1 台 NPU',
      body: '影像在店內完成推論，永不上傳雲端。設備斷網時本機續跑，只緩存事件不緩存影像。',
      tone: 'text-cyan-300',
    },
    {
      icon: Binary,
      title: '向量化事件',
      spec: '~1.8 Mbps 上行',
      body: '輸出的只有數字：骨架關鍵點、停留秒數、朝向、動作標籤、群體匿名分群 ID。',
      tone: 'text-emerald-300',
    },
    {
      icon: Database,
      title: '與 POS 對齊',
      spec: '時間戳 ±0.5s',
      body: '事件流與第一層的交易明細以時間軸對齊，行為與成交第一次被縫在同一條時間線上。',
      tone: 'text-indigo-300',
    },
  ];

  const guards = [
    { icon: Timer, title: '原始影像 30 秒內覆寫', body: '推論完成即進入循環緩衝區覆寫，不落地、不備份、不匯出。' },
    { icon: ShieldCheck, title: '不做人臉辨識與身分比對', body: '不建立人臉特徵庫、不與會員資料連結、不做跨日跨店的個人追蹤。' },
    { icon: Binary, title: '群體統計門檻', body: '任何分析結果需樣本數 ≥ 20 人才輸出，避免小樣本回推到特定個人。' },
    { icon: Cctv, title: '現場公告與退出機制', body: '入口與各區明確公告分析用途，設置不進行行為分析的無感知通道。' },
  ];

  return (
    <TwinSlideShell
      chapter="LAYER 2 · 感知架構"
      chapterColor="text-cyan-400"
      chapterDot="bg-cyan-400"
      pageLabel="10 / 22"
      compact
      title={<>第二層：接上攝影機，<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">但不讓任何一格影像離開現場</span></>}
      subtitle="這一層的技術難點不在辨識，而在「如何在不蒐集個人影像的前提下，仍然拿得到行為資料」。答案是：把辨識放在邊緣，把影像留在店裡。"
    >
      <div className="flex flex-col h-full gap-4">

        <div className="flex items-stretch gap-2">
          {pipeline.map((node, index) => {
            const Icon = node.icon;
            return (
              <div key={node.title} className="flex items-stretch gap-2 flex-1">
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-2.5">
                    <Icon className={`w-5 h-5 ${node.tone}`} />
                    <span className="text-[9.5px] font-mono text-slate-500">{node.spec}</span>
                  </div>
                  <div className="text-[16px] font-black text-white leading-tight">{node.title}</div>
                  <p className="text-[11.5px] text-slate-400 leading-snug mt-2">{node.body}</p>
                </div>
                {index < pipeline.length - 1 && (
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-slate-700" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-5 flex-1">
          <div className="flex-[56] rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-2 mb-3.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-[15px] font-black text-white">資料治理四條硬規則</span>
              <span className="ml-auto text-[10px] text-slate-500">寫進系統，不是寫進政策</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {guards.map((guard) => {
                const Icon = guard.icon;
                return (
                  <div key={guard.title} className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] px-3.5 py-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[12.5px] font-bold text-white leading-tight">{guard.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{guard.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-[44] flex flex-col gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-[13px] font-bold text-white mb-3">單店導入規格（示範門市）</div>
              <div className="space-y-2">
                {[
                  { k: '複用既有監視器', v: '24 路' },
                  { k: '新增邊緣運算盒', v: '1 台' },
                  { k: '新增攝影機', v: '0 台' },
                  { k: '上行頻寬需求', v: '< 2 Mbps' },
                  { k: '事件資料保存', v: '90 天' },
                  { k: '原始影像保存', v: '30 秒（循環覆寫）' },
                ].map((row) => (
                  <div key={row.k} className="flex justify-between items-center py-[5px] border-b border-white/[0.06] text-[12px]">
                    <span className="text-slate-400">{row.k}</span>
                    <span className="font-mono font-bold text-cyan-300">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/[0.12] to-transparent px-5 py-4">
              <p className="text-[15px] font-black text-white leading-snug">
                我們要的從來不是「誰來過」，<br />
                <span className="text-cyan-300">而是「這個貨架前發生了什麼」。</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
