'use client';

import { Eye, Filter, Lightbulb, FileSearch, Target, Wrench, TrendingUp, ChevronRight } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide9() {
  const chain = [
    { icon: Eye, step: '觀測', en: 'OBSERVE', body: '平日 09:30–11:30，同一張發票同時出現「箱購保久乳」與「痠痛貼布」的機率，是全時段平均的 7.4 倍。', tone: 'text-slate-700' },
    { icon: Filter, step: '排除', en: 'RULE OUT', body: '非聯合促銷、非動線相鄰（乳品 D2 與保健 E3 分居兩端，直線 26 公尺）、非結帳誤記（跨 5 台收銀機、12 家門市同時成立）。', tone: 'text-slate-700' },
    { icon: Lightbulb, step: '假設', en: 'HYPOTHESIZE', body: '買保久乳的人，不是要喝保久乳的人——是白天代替雙薪父母照顧孫輩的祖父母。', tone: 'text-slate-700' },
    { icon: FileSearch, step: '佐證', en: 'CORROBORATE', body: '現金與實體會員卡 68%（全店 31%）、常伴隨香蕉與麥片等免冰好餵品項、買箱裝而非鮮乳，且門市 800 公尺內隔代教養戶比例高於全市。', tone: 'text-slate-700' },
    { icon: Target, step: '結論', en: 'CONCLUDE', body: '這不是兩筆消費，是一個「祖父母決策圈」：一趟採購，同時處理孫輩的營養與自己的身體。', tone: 'text-orange-600' },
  ];

  const actions = [
    { label: '陳列', text: '乳品區端架改設「阿公阿嬤專區」：箱購保久乳旁併陳痠痛貼布、鈣片與老花眼鏡。' },
    { label: '溝通', text: '標價字級由 18pt 放大為 36pt，加註每瓶單價換算；該時段走道照度提高 20%。' },
    { label: '服務', text: '平日 09:30–11:30 開放「箱購到府／到車」，解決長輩騎機車提不動整箱的問題。' },
    { label: '會員', text: '推出「孫子營養組合包」，並針對該客群綁定會員點數加碼與開學前定期提醒。' },
  ];

  const impacts = [
    { v: '+41%', k: '端架週轉率' },
    { v: '+NT$58', k: '連帶客單價' },
    { v: '+9%', k: '該時段客流' },
    { v: '+96 萬', k: '年化毛利（單店）' },
  ];

  return (
    <CrmSlideShell
      chapter="LAYER 1 · 客戶洞察"
      pageLabel="09 / 20"
      compact
      title={<>從一條規則，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">拆出一個真實的客戶</span></>}
      subtitle="演算法只給相關性。要變成可執行的營運與行銷決策，中間必須補上一條人看得懂、且能被推翻的推理鏈。"
    >
      <div className="flex flex-col h-full gap-4">

        <div className="flex items-stretch gap-1.5">
          {chain.map((node, index) => {
            const Icon = node.icon;
            return (
              <div key={node.step} className="flex items-stretch gap-1.5 flex-1">
                <div className="flex-1 rounded-xl border border-slate-200 bg-white p-3.5 flex flex-col shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${node.tone}`} />
                    <span className={`text-[14px] font-black ${node.tone}`}>{node.step}</span>
                  </div>
                  <div className="text-[9px] font-mono tracking-[0.16em] text-slate-300 mb-2">{node.en}</div>
                  <p className="text-[11.5px] text-slate-600 leading-snug">{node.body}</p>
                </div>
                {index < chain.length - 1 && (
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-5 flex-1">

          <div className="flex-[58] rounded-2xl border border-slate-200 bg-white p-5 flex flex-col shadow-sm">
            <div className="flex items-center gap-2 mb-3.5">
              <Wrench className="w-4 h-4 text-slate-500" />
              <span className="text-[15px] font-black text-slate-900">於是我們對這一群人，改了四件事</span>
            </div>
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {actions.map((action) => (
                <div key={action.label} className="flex gap-3 items-start">
                  <span className="px-2 py-[3px] rounded-md bg-orange-50 border border-orange-300 text-[10.5px] font-bold text-orange-700 flex-shrink-0 w-[42px] text-center">
                    {action.label}
                  </span>
                  <p className="text-[12.5px] text-slate-600 leading-snug pt-[2px]">{action.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-[42] flex flex-col gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 flex-1 flex flex-col shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                <span className="text-[15px] font-black text-slate-900">3 週試辦結果（年化推估）</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 flex-1">
                {impacts.map((impact) => (
                  <div key={impact.k} className="rounded-xl bg-orange-50/60 border border-orange-200 px-3.5 py-3 flex flex-col justify-center">
                    <div className="text-[20px] font-black text-orange-600 leading-none">{impact.v}</div>
                    <div className="text-[10.5px] text-slate-500 mt-1.5">{impact.k}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5">
              <p className="text-[10.5px] text-slate-400 leading-snug">
                註：本頁數值為示範門市之去識別化模擬推估與試辦外插，非任何特定業者之實際營運資料；12 家門市推估年化毛利貢獻約 NT$1,050 萬。
              </p>
            </div>
          </div>

        </div>
      </div>
    </CrmSlideShell>
  );
}
