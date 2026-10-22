'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';
import { Laptop, Smartphone, Monitor, HardDrive, Cloud, Router, ArrowLeftRight } from 'lucide-react';

export default function NasSlide2() {
  const clients = [
    { icon: Laptop, label: 'Mac / PC', note: '掛載成 Z: 或 Finder 磁碟' },
    { icon: Monitor, label: '設計 / 剪輯機', note: '直接開啟大檔' },
    { icon: Smartphone, label: '手機 / 平板', note: 'App 或瀏覽器存取' },
  ];

  const facts = [
    { k: '本質', v: '一台省電的小型伺服器，內裝多顆硬碟，跑著專門管檔案的作業系統。' },
    { k: '怎麼用', v: '接上公司網路後，每台電腦把它當成一顆「大家共用的網路磁碟」，拖拉即存。' },
    { k: '誰在管', v: '有圖形化管理介面；不需要 IT 專職，需要一位「願意當管理員」的同事。' },
    { k: '不是什麼', v: '不是雲端硬碟的替代品、不是備份的終點、也不是隨身碟的放大版。' },
  ];

  return (
    <NasSlideShell
      chapter="DEFINITION"
      accent="sky"
      pageLabel="02"
      title={<>一頁講清楚：<span className="text-sky-600">NAS 是什麼</span></>}
      subtitle={<>Network Attached Storage——接在網路上的儲存裝置。把它想成「公司自己擁有的一片私有雲」，放在辦公室、走內網、資料不出門。</>}
      footer="常見品牌：Synology、QNAP、UGREEN、華芸 ASUSTOR；自組派則用 TrueNAS / Unraid。本簡報所有數字皆以「4 槽、20 人團隊」為例，不綁定品牌。"
      compact
    >
      <div className="grid grid-cols-[1.15fr_1fr] gap-6 flex-1 min-h-0">
        {/* Info: (20260914 - Luphia) 左：拓樸示意 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
          <div className="text-[11px] font-bold tracking-widest text-slate-500 mb-3">在公司網路裡的位置</div>
          <div className="flex-1 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
            <div className="flex flex-col gap-2.5">
              {clients.map((c) => (
                <div key={c.label} className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                  <c.icon className="w-4 h-4 text-slate-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-bold text-slate-800 leading-tight">{c.label}</div>
                    <div className="text-[10.5px] text-slate-500 leading-tight truncate">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-1 text-slate-400">
              <ArrowLeftRight className="w-4 h-4" />
              <span className="text-[9px] font-mono tracking-widest">LAN</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                <Router className="w-4 h-4 text-slate-600" />
                <div>
                  <div className="text-[12.5px] font-bold text-slate-800 leading-tight">交換器 / 路由器</div>
                  <div className="text-[10.5px] text-slate-500 leading-tight">1GbE ~ 10GbE</div>
                </div>
              </div>
              <div className="w-full bg-sky-50 border border-sky-400 rounded-xl px-3 py-3 flex items-center gap-2.5 shadow-[0_0_30px_rgba(249,115,22,0.18)]">
                <HardDrive className="w-5 h-5 text-sky-600" />
                <div>
                  <div className="text-[13.5px] font-black text-slate-900 leading-tight">NAS</div>
                  <div className="text-[10.5px] text-sky-700/80 leading-tight">4 顆硬碟 · RAID 保護</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 text-slate-400">
              <ArrowLeftRight className="w-4 h-4" />
              <span className="text-[9px] font-mono tracking-widest">WAN</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                <Cloud className="w-4 h-4 text-slate-500" />
                <div>
                  <div className="text-[12.5px] font-bold text-slate-700 leading-tight">異地備份</div>
                  <div className="text-[10.5px] text-slate-500 leading-tight">雲端或第二台 NAS</div>
                </div>
              </div>
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                <Laptop className="w-4 h-4 text-slate-500" />
                <div>
                  <div className="text-[12.5px] font-bold text-slate-700 leading-tight">遠端同事</div>
                  <div className="text-[10.5px] text-slate-500 leading-tight">走 VPN 進來</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info: (20260914 - Luphia) 右：四個重點 */}
        <div className="flex flex-col gap-3">
          {facts.map((f) => (
            <div key={f.k} className="flex-1 bg-white border border-slate-200 rounded-2xl px-5 py-3 flex items-center gap-4">
              <div className="w-[64px] flex-shrink-0 text-[13px] font-black text-sky-600 tracking-wide">{f.k}</div>
              <div className="text-[13.5px] text-slate-700 leading-snug">{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </NasSlideShell>
  );
}
