'use client';

import { Eye, Filter, Lightbulb, FileSearch, Target, Wrench, TrendingUp, ChevronRight } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide8() {
  const chain = [
    {
      icon: Eye,
      step: '觀測',
      en: 'OBSERVE',
      body: '平日 09:30–11:30，同一張發票同時出現「箱購保久乳」與「痠痛貼布」的機率，是全時段平均的 7.4 倍。',
      tone: 'text-cyan-300',
    },
    {
      icon: Filter,
      step: '排除',
      en: 'RULE OUT',
      body: '非聯合促銷（當期兩區無合檔）、非動線相鄰（乳品 D2 與保健 E3 分居門市兩端，直線 26 公尺）、非結帳誤記（跨 5 台收銀機、12 家門市同時成立）。',
      tone: 'text-slate-300',
    },
    {
      icon: Lightbulb,
      step: '假設',
      en: 'HYPOTHESIZE',
      body: '買保久乳的人，不是要喝保久乳的人——是白天代替雙薪父母照顧孫輩的祖父母。',
      tone: 'text-amber-300',
    },
    {
      icon: FileSearch,
      step: '佐證',
      en: 'CORROBORATE',
      body: '現金與實體會員卡支付 68%（全店 31%）、常伴隨香蕉與三合一麥片等免冰好餵品項、買箱裝而非鮮乳，且該門市 800 公尺內隔代教養戶比例高於高雄市平均。',
      tone: 'text-emerald-300',
    },
    {
      icon: Target,
      step: '結論',
      en: 'CONCLUDE',
      body: '這不是兩筆消費，是一個「祖父母決策圈」：一趟採購，同時處理孫輩的營養與自己的身體。',
      tone: 'text-white',
    },
  ];

  const actions = [
    { label: '動線', text: '乳品區端架改設「阿公阿嬤專區」：箱購保久乳旁併陳痠痛貼布、鈣片與老花眼鏡。' },
    { label: '陳列', text: '該區標價字級由 18pt 放大為 36pt，加註大字品名與每瓶單價換算，走道照度提高 20%。' },
    { label: '服務', text: '平日 09:30–11:30 開放「箱購到府／到車」，解決長輩騎機車提不動整箱的問題。' },
    { label: '商品', text: '推出「孫子營養組合包」（保久乳＋麥片＋當季水果），並與會員點數加碼綁定。' },
  ];

  const impacts = [
    { v: '+41%', k: '端架週轉率' },
    { v: '+NT$58', k: '連帶客單價' },
    { v: '+9%', k: '該時段客流' },
    { v: '+96 萬', k: '年化毛利（單店）' },
  ];

  return (
    <TwinSlideShell
      chapter="LAYER 1 · 推理鏈"
      chapterColor="text-emerald-400"
      chapterDot="bg-emerald-400"
      pageLabel="08 / 22"
      compact
      title={<>拆解一條規則：<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">保久乳 × 痠痛貼布</span></>}
      subtitle="演算法只給出相關性。要變成可執行的營運決策，中間必須補上一條人看得懂、且能被推翻的推理鏈。"
    >
      <div className="flex flex-col h-full gap-4">

        <div className="flex items-stretch gap-1.5">
          {chain.map((node, index) => {
            const Icon = node.icon;
            return (
              <div key={node.step} className="flex items-stretch gap-1.5 flex-1">
                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-3.5 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${node.tone}`} />
                    <span className={`text-[14px] font-black ${node.tone}`}>{node.step}</span>
                  </div>
                  <div className="text-[9px] font-mono tracking-[0.16em] text-slate-600 mb-2">{node.en}</div>
                  <p className="text-[11.5px] text-slate-300 leading-snug">{node.body}</p>
                </div>
                {index < chain.length - 1 && (
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-slate-700" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-5 flex-1">

          <div className="flex-[58] rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3.5">
              <Wrench className="w-4 h-4 text-amber-400" />
              <span className="text-[15px] font-black text-white">於是我們改了四件事</span>
            </div>
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {actions.map((action) => (
                <div key={action.label} className="flex gap-3 items-start">
                  <span className="px-2 py-[3px] rounded-md bg-amber-400/15 border border-amber-400/30 text-[10.5px] font-bold text-amber-300 flex-shrink-0 w-[42px] text-center">
                    {action.label}
                  </span>
                  <p className="text-[12.5px] text-slate-300 leading-snug pt-[2px]">{action.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-[42] flex flex-col gap-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.07] p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-[15px] font-black text-white">3 週試辦結果（年化推估）</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 flex-1">
                {impacts.map((impact) => (
                  <div key={impact.k} className="rounded-xl bg-white/[0.05] border border-white/10 px-3.5 py-3 flex flex-col justify-center">
                    <div className="text-[20px] font-black text-emerald-300 leading-none">{impact.v}</div>
                    <div className="text-[10.5px] text-slate-400 mt-1.5">{impact.k}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5">
              <p className="text-[10.5px] text-slate-500 leading-snug">
                註：本頁數值為示範門市之去識別化模擬推估與試辦外插，非任何特定業者之實際營運資料；12 家門市推估年化毛利貢獻約 NT$1,050 萬。
              </p>
            </div>
          </div>

        </div>
      </div>
    </TwinSlideShell>
  );
}
