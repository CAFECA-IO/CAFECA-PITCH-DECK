'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';
import { FileWarning, Usb, MessageSquareWarning, UserX, Snail, ShieldAlert } from 'lucide-react';

export default function NasSlide3() {
  const pains = [
    {
      icon: FileWarning,
      title: '最新版在誰電腦？',
      desc: '「提案_final_v3_真的最終版(2).pptx」躺在三個人的桌面，各自都改過。合併靠記憶、靠猜。',
    },
    {
      icon: MessageSquareWarning,
      title: '檔案靠 LINE 與 Slack 在流浪',
      desc: '傳檔方便，找檔痛苦。通訊軟體的檔案會過期、會被洗掉，三個月後沒人找得到。',
    },
    {
      icon: Usb,
      title: '大檔靠隨身碟與 AirDrop 搬',
      desc: '設計稿、影片素材、資料集動輒幾十 GB。上傳雲端要半小時，還得等對方下載完。',
    },
    {
      icon: UserX,
      title: '離職即失憶',
      desc: '資料存在個人電腦與個人雲端帳號。人走了，密碼帶走了，專案歷史就斷在那一天。',
    },
    {
      icon: Snail,
      title: '沒有人在做備份',
      desc: '大家都知道要備份，沒有人真的在做。筆電摔壞、硬碟掛掉的那天才發現代價。',
    },
    {
      icon: ShieldAlert,
      title: '權限是「相信大家」',
      desc: '財務、人資、客戶合約與一般素材混在同一個共用連結裡，誰能看、誰看過，說不清。',
    },
  ];

  return (
    <NasSlideShell
      chapter="ACT 1 · THE PAIN"
      accent="rose"
      pageLabel="03"
      title={<>第一幕：我們現在的檔案，<span className="text-rose-600">住在六個不同的地方</span></>}
      subtitle={<>這些不是誰的錯，是「沒有一個公司層級的檔案家」自然長出來的樣子。每一格，多數同事都能對號入座至少三格。</>}
      footer="檢查方式很簡單：隨機問一位同事「上一季那份客戶簡報的最終版在哪」。如果答案超過一句話，這一頁說的就是我們。"
      compact
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-4 flex-1">
        {pains.map((p) => (
          <div key={p.title} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col hover:border-rose-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-300 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-4.5 h-4.5 text-rose-600" />
              </div>
              <div className="text-[15px] font-bold text-slate-900 leading-tight">{p.title}</div>
            </div>
            <p className="text-[13px] text-slate-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </NasSlideShell>
  );
}
