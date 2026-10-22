'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { AlertOctagon, Clock, Weight, HandMetal } from 'lucide-react';

export default function CodeGraphSlide14() {
  const limits = [
    {
      icon: AlertOctagon,
      title: '靜態分析看不到的東西',
      desc: '動態派發、反射、執行期依賴注入容器、字串拼出來的呼叫——這些關係不在 AST 裡，圖譜就抓不全。愈重度使用 metaprogramming 的框架，缺口愈大。',
    },
    {
      icon: Clock,
      title: '索引仍然可能過期',
      desc: '自動同步做了三層，但仍是「事後追上」。剛剛大幅重構、或跨分支切換的當下，圖譜有短暫的落後窗口。',
    },
    {
      icon: Weight,
      title: 'context 佔用反而更重',
      desc: '官方明說：回傳結果密度高且會留在對話裡，多輪 session 的殘留 context 比純讀檔的代理高出約八成。省的是總量，不是每一則訊息的長度。',
    },
    {
      icon: HandMetal,
      title: '沒辦法強迫代理去用它',
      desc: '官方坦承，能影響代理的只有 MCP 初始化說明與工具描述，都是低顯著性的管道。代理要不要查圖譜、怎麼查，很大程度不受控。',
    },
  ];

  return (
    <CgSlideShell
      chapter="ACT 4 · THE HONEST PART"
      accent="rose"
      pageLabel="14"
      title={<>誠實的邊界：它<span className="text-rose-300">不能</span>做什麼</>}
      subtitle={<>以下四點都是官方文件自己寫出來的，不是外界批評。評估任何工具時，這一頁比效果那一頁更值得看。</>}
      footer="鐵律：用圖譜決定「去哪裡看」，用檔案、測試與執行結果決定「什麼是真的」。代理在動手改之前，仍然應該把那個檔案讀一遍。"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
        {limits.map((l) => (
          <div key={l.title} className="bg-rose-500/[0.04] border border-rose-500/20 rounded-2xl p-5 flex gap-4 items-center">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center flex-shrink-0">
              <l.icon className="w-5 h-5 text-rose-300" />
            </div>
            <div className="min-w-0">
              <div className="text-[16.5px] font-bold text-white leading-tight mb-2">{l.title}</div>
              <div className="text-[13.5px] text-slate-400 leading-relaxed">{l.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </CgSlideShell>
  );
}
