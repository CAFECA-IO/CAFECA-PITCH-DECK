'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';
import { Check } from 'lucide-react';

export default function NasSlide7() {
  const before = [
    '離職交接靠「把電腦裡的東西拷給我」',
    '共用連結一發出去，誰轉給誰無從得知',
    '一台筆電壞掉，那個人的三年就沒了',
    '「大家記得備份」是唯一的備份政策',
    '每個人各自付 2TB 雲端月費，公司報帳',
  ];

  const after = [
    { t: '離職當天停用帳號', d: '檔案原本就在公司資料夾裡，人走資料不走。' },
    { t: '權限跟著組織圖', d: '部門、專案、外包三層；財務資料夾對其他人根本不存在。' },
    { t: '存取紀錄可查', d: '誰在何時開了、改了、刪了哪個檔案——出事有跡可循。' },
    { t: '全公司電腦自動備份', d: 'Time Machine / PC 備份都指向 NAS；換機、重灌一小時內恢復。' },
    { t: '成本從月費變資產', d: '一次採購、折舊入帳；擴充只要加硬碟，不隨人數計費。' },
  ];

  return (
    <NasSlideShell
      chapter="ACT 2 · THE EFFECT"
      accent="orange"
      pageLabel="07"
      title={<>效果二：<span className="text-orange-600">管理面的改變，比速度更值錢</span></>}
      subtitle={<>速度是同事會感謝你的地方；下面這些，是老闆、財務與稽核會感謝你的地方。</>}
      footer="資料留在境內、留在公司，對於有客戶合約或個資法規要求的專案，是「能不能接案」的差別，不只是「方便不方便」。"
      compact
    >
      <div className="grid grid-cols-[1fr_1.35fr] gap-5 flex-1 min-h-0">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col">
          <div className="text-[12px] font-bold tracking-widest text-slate-500 mb-4">導入前</div>
          <div className="flex-1 flex flex-col justify-around">
            {before.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                <span className="text-[14px] text-slate-600 leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-300 rounded-2xl p-5 flex flex-col">
          <div className="text-[12px] font-bold tracking-widest text-orange-600 mb-4">導入後</div>
          <div className="flex-1 flex flex-col justify-around">
            {after.map((a) => (
              <div key={a.t} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-md bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <div>
                  <div className="text-[14.5px] font-bold text-slate-900 leading-tight">{a.t}</div>
                  <div className="text-[12.5px] text-slate-600 leading-snug mt-0.5">{a.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NasSlideShell>
  );
}
