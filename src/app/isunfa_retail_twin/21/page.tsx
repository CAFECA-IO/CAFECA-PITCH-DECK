'use client';

import Image from 'next/image';
import { Store, FileStack, UserCheck, ArrowRight } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide21() {
  const phases = [
    {
      tag: 'PHASE 1',
      days: '第 0–30 天',
      name: '帳本孿生上線',
      tone: 'border-emerald-400/30 bg-emerald-400/[0.06]',
      text: 'text-emerald-300',
      dot: 'bg-emerald-300',
      todo: ['接 POS 明細、商品主檔、貨架配置圖', '產出首份關聯規則與貨架 ROI 報表', '不需任何硬體投資'],
      out: '第一份「報表看不到的答案」',
    },
    {
      tag: 'PHASE 2',
      days: '第 31–90 天',
      name: '感知孿生試點',
      tone: 'border-cyan-400/30 bg-cyan-400/[0.06]',
      text: 'text-cyan-300',
      dot: 'bg-cyan-300',
      todo: ['複用既有監視器，加裝 2 台邊緣運算盒', '單一分區試點：熱區、猶豫指數、缺貨偵測', '行為資料回寫 iSunFA 管理會計科目'],
      out: '隱性損失第一次被記進帳',
    },
    {
      tag: 'PHASE 3',
      days: '第 91–180 天',
      name: '環境孿生與模擬台',
      tone: 'border-indigo-400/30 bg-indigo-400/[0.06]',
      text: 'text-indigo-300',
      dot: 'bg-indigo-300',
      todo: ['接入周邊人口、交通、氣象、民俗資料', '完成因果圖校準與 18 個月回測', '交付情境模擬台，供季度決策會議使用'],
      out: '會議上當場問、當場算',
    },
  ];

  const asks = [
    { icon: Store, title: '一組示範門市', body: '單店即可起步，最好是客層混合、有貼標折扣時段的社區型門市。' },
    { icon: FileStack, title: '12 個月歷史 POS', body: '逐筆品項明細（含時間戳與貨架代碼）、商品主檔與現行貨架配置圖。' },
    { icon: UserCheck, title: '一位營運窗口', body: '能決定貨架與陳列調整的人。技術不是瓶頸，能不能改貨架才是。' },
  ];

  return (
    <TwinSlideShell
      chapter="導入 · NEXT STEP"
      chapterColor="text-white"
      chapterDot="bg-white"
      pageLabel="21 / 22"
      compact
      title={<>導入路線：<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">90 天看到第一份答案</span></>}
      subtitle="不需要一開始就蓋到第三層。第一層 30 天就能產出可執行的貨架決策，而且不用買任何硬體。"
      footer={
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/cafeca_logo.svg" alt="CAFECA" width={104} height={30} className="object-contain brightness-0 invert opacity-80" />
            <span className="text-[11px] text-slate-500">卡菲卡 CAFECA · iSunFA 智能記帳</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 tracking-widest">RETAIL DIGITAL TWIN · KAOHSIUNG · 2026.08</span>
        </div>
      }
    >
      <div className="flex flex-col h-full gap-4">

        <div className="grid grid-cols-3 gap-4 flex-1">
          {phases.map((phase) => (
            <div key={phase.tag} className={`rounded-2xl border ${phase.tone} p-5 flex flex-col`}>
              <div className="flex items-center justify-between mb-2.5">
                <span className={`text-[10px] font-mono font-bold tracking-[0.2em] ${phase.text}`}>{phase.tag}</span>
                <span className="text-[10.5px] text-slate-500">{phase.days}</span>
              </div>
              <div className="text-[21px] font-black text-white leading-tight mb-3">{phase.name}</div>
              <ul className="space-y-4 flex-1 flex flex-col justify-center">
                {phase.todo.map((item) => (
                  <li key={item} className="flex gap-2 text-[12px] text-slate-300 leading-snug">
                    <span className={`w-1.5 h-1.5 rounded-full mt-[6px] flex-shrink-0 ${phase.dot}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                <ArrowRight className={`w-3.5 h-3.5 ${phase.text}`} />
                <span className={`text-[12px] font-bold ${phase.text}`}>{phase.out}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/12 bg-gradient-to-r from-white/[0.07] to-transparent px-6 py-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[16px] font-black text-white">我們只需要三件事，就可以開始</span>
            <span className="text-[11px] text-slate-500">— 其餘由 CAFECA 團隊建置</span>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {asks.map((ask) => {
              const Icon = ask.icon;
              return (
                <div key={ask.title} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-xl bg-emerald-400/12 border border-emerald-400/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-black text-white leading-tight">{ask.title}</div>
                    <p className="text-[11px] text-slate-400 leading-snug mt-1">{ask.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
