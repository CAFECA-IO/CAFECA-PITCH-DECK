'use client';

import { Cctv, Cpu, Binary, Database, ShieldCheck, Timer, ArrowRight } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide10() {
  const pipeline = [
    { icon: Cctv, title: '既有監視器', spec: '1080p / 15fps', body: '不新增攝影機，直接複用現場既有的防損監視系統，避免重複佈線與二次投資。', tone: 'text-slate-700' },
    { icon: Cpu, title: '邊緣運算盒', spec: '每 40 路 1 台 NPU', body: '影像在店內完成推論，永不上傳雲端。斷網時本機續跑，只緩存事件不緩存影像。', tone: 'text-slate-700' },
    { icon: Binary, title: '向量化事件', spec: '~1.8 Mbps 上行', body: '輸出的只有數字：停留秒數、朝向、動作標籤、匿名群體分群 ID。', tone: 'text-slate-700' },
    { icon: Database, title: '與 POS 對齊', spec: '時間戳 ±0.5s', body: '事件流與交易明細以時間軸對齊，行為與成交第一次被縫在同一條時間線上。', tone: 'text-orange-600' },
  ];

  const guards = [
    { icon: Timer, title: '原始影像 30 秒內覆寫', body: '推論完成即進入循環緩衝區覆寫，不落地、不備份、不匯出。' },
    { icon: ShieldCheck, title: '不做人臉辨識與身分比對', body: '不建立人臉特徵庫、不與會員資料連結、不做跨日跨店的個人追蹤。' },
    { icon: Binary, title: '群體統計門檻', body: '任何分析結果需樣本數 ≥ 20 人才輸出，避免小樣本回推到特定個人。' },
    { icon: Cctv, title: '現場公告與退出機制', body: '入口與各區明確公告分析用途，設置不進行行為分析的無感知通道。' },
  ];

  return (
    <CrmSlideShell
      chapter="LAYER 2 · 場域感知"
      pageLabel="10 / 20"
      compact
      title={<>第二層：認識沒刷卡的人，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">但不認人臉</span></>}
      subtitle="交易層只認得成交、只認得刷卡的人——每 100 位進店者，有 59 位不會在 CRM 留下任何紀錄。要認識他們，得讓賣場自己有眼睛；但不能認人臉，所以把辨識放在邊緣、把影像留在店裡。"
    >
      <div className="flex flex-col h-full gap-4">

        <div className="flex items-stretch gap-2">
          {pipeline.map((node, index) => {
            const Icon = node.icon;
            return (
              <div key={node.title} className="flex items-stretch gap-2 flex-1">
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-2.5">
                    <Icon className={`w-5 h-5 ${node.tone}`} />
                    <span className="text-[9.5px] font-mono text-slate-400">{node.spec}</span>
                  </div>
                  <div className="text-[16px] font-black text-slate-900 leading-tight">{node.title}</div>
                  <p className="text-[11.5px] text-slate-500 leading-snug mt-2">{node.body}</p>
                </div>
                {index < pipeline.length - 1 && (
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-5 flex-1">
          <div className="flex-[56] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3.5">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span className="text-[15px] font-black text-slate-900">資料治理四條硬規則</span>
              <span className="ml-auto text-[10px] text-slate-400">寫進系統，不是寫進政策</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {guards.map((guard) => {
                const Icon = guard.icon;
                return (
                  <div key={guard.title} className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-3.5 h-3.5 text-orange-600" />
                      <span className="text-[12.5px] font-bold text-slate-900 leading-tight">{guard.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">{guard.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-[44] flex flex-col gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 flex-1 shadow-sm">
              <div className="text-[13px] font-bold text-slate-900 mb-3">單店導入規格（示範門市）</div>
              <div className="space-y-2">
                {[
                  { k: '複用既有監視器', v: '24 路' },
                  { k: '新增邊緣運算盒', v: '1 台' },
                  { k: '新增攝影機', v: '0 台' },
                  { k: '上行頻寬需求', v: '< 2 Mbps' },
                  { k: '事件資料保存', v: '90 天' },
                  { k: '原始影像保存', v: '30 秒（循環覆寫）' },
                ].map((row) => (
                  <div key={row.k} className="flex justify-between items-center py-[5px] border-b border-slate-100 text-[12px]">
                    <span className="text-slate-500">{row.k}</span>
                    <span className="font-mono font-bold text-orange-600">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50/50 px-5 py-4">
              <p className="text-[15px] font-black text-slate-900 leading-snug">
                我們要的從來不是「他是誰」，<br />
                <span className="text-orange-600">而是「這一群人在這裡發生了什麼」。</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
