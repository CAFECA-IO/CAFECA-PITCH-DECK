'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';
import { FolderTree, KeyRound, History, DatabaseBackup, Zap, Globe } from 'lucide-react';

export default function NasSlide5() {
  const solves = [
    {
      icon: FolderTree,
      pain: '最新版在誰電腦？',
      fix: '單一事實來源',
      how: '全公司只有一棵資料夾樹。檔案「存進去」就是發布，不再有人手上的私藏版。',
    },
    {
      icon: KeyRound,
      pain: '權限是「相信大家」',
      fix: '帳號 × 部門資料夾',
      how: '財務只有財務看得到、專案資料夾對外包唯讀。誰在幾點開了哪個檔，有紀錄。',
    },
    {
      icon: History,
      pain: '改壞了、刪錯了',
      fix: '快照（Snapshot）',
      how: '每小時自動拍一張「整顆磁碟的照片」。誤刪或被勒索軟體加密，倒帶回一小時前即可。',
    },
    {
      icon: DatabaseBackup,
      pain: '沒有人在做備份',
      fix: '自動備份中樞',
      how: 'Mac 的 Time Machine、PC 的備份軟體都指向它；它再排程把自己備到雲端或第二台機器。',
    },
    {
      icon: Zap,
      pain: '大檔靠隨身碟搬',
      fix: '內網直開、不用搬',
      how: '剪輯機直接掛載素材資料夾工作。同事把檔案放進去，你這邊就已經在了。',
    },
    {
      icon: Globe,
      pain: '出差、在家拿不到檔',
      fix: '遠端存取',
      how: '走 VPN 或廠商中繼服務，用手機或筆電連回公司拿檔案；速度受辦公室上傳頻寬限制。',
    },
  ];

  return (
    <NasSlideShell
      chapter="ACT 2 · WHAT IT SOLVES"
      accent="orange"
      pageLabel="05"
      title={<>第二幕：六個痛點，<span className="text-orange-600">NAS 各對應一個內建功能</span></>}
      subtitle={<>這些不是加購、不是外掛，是市售 NAS 作業系統出廠就有的東西。導入的重點不在買設備，而在把左邊那些習慣，換成右邊這些流程。</>}
      footer="「快照」與「備份」是兩件事：快照存在同一台機器裡，擋的是誤刪與勒索；備份要放在另一個地方，擋的是機器本身壞掉。第 11 頁會再談。"
      compact
    >
      <div className="grid grid-cols-2 grid-rows-3 gap-3.5 flex-1 min-h-0">
        {solves.map((s) => (
          <div key={s.fix} className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 grid grid-cols-[auto_170px_1fr] items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-300 flex items-center justify-center flex-shrink-0">
              <s.icon className="w-5 h-5 text-orange-600" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] text-slate-500 line-through leading-tight truncate">{s.pain}</div>
              <div className="text-[15px] font-black text-slate-900 leading-tight mt-0.5">{s.fix}</div>
            </div>
            <p className="text-[12.5px] text-slate-600 leading-snug">{s.how}</p>
          </div>
        ))}
      </div>
    </NasSlideShell>
  );
}
