'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';
import { AlertTriangle } from 'lucide-react';

export default function NasSlide11() {
  const limits = [
    {
      title: 'RAID 不是備份',
      body: 'RAID 只擋「一顆硬碟壞掉」。失火、水災、被偷、勒索軟體、管理員手滑刪整個共用資料夾——RAID 一個都擋不住。NAS 本身也要被備份到另一個地方。',
    },
    {
      title: '它需要一個「有人」',
      body: '每月看一次健康狀態、每季更新一次系統、硬碟亮紅燈時要有人換。工作量不大（每月一兩小時），但這個人必須存在，而且要有代理人。',
    },
    {
      title: '不要直接對網際網路開門',
      body: '把 NAS 的管理介面直接開 port 到公網，是勒索軟體最愛的入口。遠端存取請走 VPN 或廠商中繼服務，開兩步驟驗證，關掉預設 admin 帳號。',
    },
    {
      title: '遠端速度受辦公室上傳頻寬限制',
      body: '在辦公室很快，在家就是另一回事。全遠端或多據點團隊，NAS 的核心優勢會大幅縮水，要老實面對。',
    },
    {
      title: '即時共編不是它的強項',
      body: '多人同時編輯同一份文件、留言、建議模式——這是 Google Docs 的主場。NAS 附的辦公套件能用，但不會比雲端好。',
    },
    {
      title: '硬碟會壞，而且會一起老',
      body: '同一批買的硬碟常在相近時間壽終。預算要含「四到五年換一輪」，並且用 NAS 專用碟，不要拿桌機碟湊。',
    },
  ];

  return (
    <NasSlideShell
      chapter="ACT 3 · HONEST LIMITS"
      accent="rose"
      pageLabel="11"
      title={<>誠實的邊界：<span className="text-rose-600">NAS 不能做什麼，以及會在哪裡出事</span></>}
      subtitle={<>這一頁比前面任何一頁都重要。導入失敗的案例，幾乎都不是設備不夠好，而是把下面六件事當成「買了就自動解決」。</>}
      footer="備份原則記一句就夠：3-2-1——三份副本、兩種媒體、一份放異地。NAS 是那個「2」和方便的「3」，不是全部。"
      compact
    >
      <div className="grid grid-cols-2 grid-rows-3 gap-3.5 flex-1 min-h-0">
        {limits.map((l, i) => (
          <div key={l.title} className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 flex items-start gap-4">
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0 pt-0.5">
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-300 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
              </div>
              <span className="text-[10px] font-mono text-slate-400">{(i + 1).toString().padStart(2, '0')}</span>
            </div>
            <div>
              <div className="text-[15px] font-bold text-slate-900 leading-tight mb-1">{l.title}</div>
              <p className="text-[12.5px] text-slate-600 leading-snug">{l.body}</p>
            </div>
          </div>
        ))}
      </div>
    </NasSlideShell>
  );
}
