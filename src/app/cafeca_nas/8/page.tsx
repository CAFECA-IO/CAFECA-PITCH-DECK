'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';
import { Container, Image, Video, GitBranch, Camera, BrainCircuit } from 'lucide-react';

export default function NasSlide8() {
  const extras = [
    { icon: Container, title: 'Docker 容器', desc: '內部 wiki、專案管理、密碼管理器等小工具，不用另租主機。', level: '常見', tone: 'text-orange-600 border-orange-300 bg-orange-50' },
    { icon: Image, title: '相片與素材庫', desc: '活動照、產品圖、社群素材集中管理，AI 自動分類人臉與場景。', level: '常見', tone: 'text-orange-600 border-orange-300 bg-orange-50' },
    { icon: Video, title: '影音串流', desc: '訓練影片、活動側錄放著就能在會議室電視播，不用再插隨身碟。', level: '常見', tone: 'text-orange-600 border-orange-300 bg-orange-50' },
    { icon: GitBranch, title: 'Git / 私有套件庫', desc: '對公開雲有疑慮的程式碼或大型二進位資產，可以自架一份鏡像。', level: '進階', tone: 'text-amber-600 border-amber-300 bg-amber-50' },
    { icon: Camera, title: '監控錄影 NVR', desc: '辦公室攝影機的錄影直接存在 NAS，多數系統內建授權數個頻道。', level: '進階', tone: 'text-amber-600 border-amber-300 bg-amber-50' },
    { icon: BrainCircuit, title: 'AI 資料集暫存', desc: '訓練或微調用的大型資料集放內網，比每次從雲端拉快也便宜。', level: '看需求', tone: 'text-sky-600 border-sky-300 bg-sky-50' },
  ];

  return (
    <NasSlideShell
      chapter="ACT 2 · THE EFFECT"
      accent="orange"
      pageLabel="08"
      title={<>效果三：<span className="text-orange-600">買來存檔案，順便得到的六件事</span></>}
      subtitle={<>這一頁刻意放在最後，因為它們是「加分」而不是「理由」。如果核心的檔案集中需求不成立，這些延伸應用單獨都撐不起一台 NAS。</>}
      footer="提醒：每多開一個服務，就多一個要顧的東西。建議前三個月只做檔案共享與備份，穩定後再逐一評估延伸應用。"
      compact
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-4 flex-1 min-h-0">
        {extras.map((e) => (
          <div key={e.title} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <e.icon className="w-5 h-5 text-slate-800" />
              </div>
              <span className={`px-2 py-0.5 rounded-md border text-[10px] font-bold tracking-widest ${e.tone}`}>{e.level}</span>
            </div>
            <div className="text-[15.5px] font-bold text-slate-900 leading-tight mb-1.5">{e.title}</div>
            <p className="text-[12.5px] text-slate-600 leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </NasSlideShell>
  );
}
