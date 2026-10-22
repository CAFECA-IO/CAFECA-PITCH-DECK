'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';
import { ClipboardList, FolderTree, KeyRound, Truck, DatabaseBackup, GraduationCap } from 'lucide-react';

export default function NasSlide13() {
  const steps = [
    { icon: ClipboardList, week: 'W1', title: '盤點', desc: '現在有多少 GB、在哪、誰的；哪些是敏感資料。' },
    { icon: FolderTree, week: 'W1', title: '規劃資料夾', desc: '部門／專案／公共三層；命名規則寫成一頁文件。' },
    { icon: KeyRound, week: 'W2', title: '帳號與權限', desc: '一人一帳號、群組套權限；關掉 admin，開兩步驟驗證。' },
    { icon: Truck, week: 'W2 ~ 3', title: '搬遷', desc: '先搬「已完成的專案」試水，再搬進行中的；舊位置改唯讀。' },
    { icon: DatabaseBackup, week: 'W3', title: '快照與備份', desc: '每小時快照留 7 天；每夜備份到雲端；做一次「還原演練」。' },
    { icon: GraduationCap, week: 'W4', title: '教育訓練', desc: '30 分鐘全員說明；三個月內每月一次「哪裡卡住」回顧。' },
  ];

  const spec = [
    { k: '機型', v: '4 槽中階、x86 四核、8GB 起' },
    { k: '硬碟', v: '4 × 8TB NAS 專用碟，RAID 5 或混合 RAID，可用約 24TB' },
    { k: '網路', v: '2.5GbE 交換器；剪輯／設計機拉有線' },
    { k: '電源', v: 'UPS 一台，停電自動安全關機' },
    { k: '備份', v: '雲端異地 5TB 熱資料，或第二台 2 槽機放另一地點' },
    { k: '負責人', v: '一位管理員 + 一位代理人，寫進職務說明' },
  ];

  return (
    <NasSlideShell
      chapter="ACT 4 · HOW TO START"
      accent="sky"
      pageLabel="13"
      title={<>如果要做：<span className="text-sky-600">一套 20 人的建議配置，與四週導入節奏</span></>}
      subtitle={<>設備一天就能上線；讓大家「真的把檔案放進去」才是工程。所以時程表裡有一半的格子，跟機器無關。</>}
      footer="最容易失敗的一步是「搬遷」：如果舊位置不改成唯讀，三個月後你會有兩份不同步的資料。寧可搬慢一點，也不要兩邊都活著。"
      compact
    >
      <div className="grid grid-cols-[1fr_1.55fr] gap-5 flex-1 min-h-0">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
          <div className="text-[11px] font-bold tracking-widest text-slate-600 mb-3">建議配置（中階級）</div>
          <div className="flex-1 flex flex-col justify-around">
            {spec.map((s) => (
              <div key={s.k} className="flex items-start gap-3 border-b border-slate-200 pb-2">
                <span className="w-[52px] flex-shrink-0 text-[11px] font-bold text-sky-600 pt-0.5">{s.k}</span>
                <span className="text-[13px] text-slate-800 leading-snug">{s.v}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200 flex items-baseline justify-between">
            <span className="text-[11px] font-bold tracking-widest text-slate-500">初期總預算</span>
            <span className="text-[20px] font-black text-slate-900">約 NT$ 6 ~ 7 萬</span>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-300 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-sky-600" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-500">{s.week}</span>
              </div>
              <div className="text-[14.5px] font-bold text-slate-900 leading-tight mb-1">
                <span className="text-sky-500 mr-1.5">{i + 1}.</span>{s.title}
              </div>
              <p className="text-[12px] text-slate-600 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </NasSlideShell>
  );
}
