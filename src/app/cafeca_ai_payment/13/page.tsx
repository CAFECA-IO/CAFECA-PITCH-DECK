'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { Store, Smartphone, MapPin, Users, Globe2, PawPrint, Landmark, ShieldCheck } from 'lucide-react';

export default function PaySlide13() {
  const cards = [
    { icon: Store, asset: '全家門市網路', fact: '最大股東全家便利商店 4,504 家門市（2026.06），含 134 家 FamiSuper', meaning: '代理人會買，但不會走路——取貨、退貨、現金儲值都需要一個實體的點', key: '實體履約' },
    { icon: Smartphone, asset: '全家 APP 生態', fact: '2,000 萬會員、每日 110 萬人交易；隨買跨店取年營收破 50 億元', meaning: '寄杯＝先付款、後履約、可轉贈——全台最大的「預先授權」習慣已經養成', key: '授權書' },
    { icon: MapPin, asset: '受理網路', fact: '200+ 品牌、48 萬個支付據點', meaning: '代理人要的是「到處都收」，而不是再多一個 App', key: '受理' },
    { icon: Users, asset: '活躍會員', fact: '約 247 萬會員，活躍比例逾七成', meaning: '真實的消費習慣，是寫出好授權書的原料', key: '授權書' },
    { icon: Globe2, asset: '移工客群', fact: '目標兩年 10 萬名移工會員', meaning: '多語、實名、防詐需求最強的族群，也是全球平台最不懂的人', key: '授權書 · 身分' },
    { icon: PawPrint, asset: '寵物生態圈', fact: '集團成立「全寵家」；台灣登記犬貓逾 340 萬隻', meaning: '高頻、可預測、重複購買——代理人最擅長接手的消費', key: '場景' },
    { icon: Landmark, asset: '銀行股東', fact: '玉山銀行為股東，已在 Visa Agentic Ready 首波名單', meaning: '一座現成的橋，接上卡網路的代碼化憑證', key: '代碼' },
    { icon: ShieldCheck, asset: '已規劃的投資', fact: '擴編數位專員，強化防詐、身分認證、資料治理', meaning: '這三件事恰好就是「代理人身分」這把鑰匙的地基', key: '代理人身分' },
  ];

  return (
    <PaySlideShell
      act="ACT III · 最強配角"
      scene="第三幕"
      pageLabel="13 / 20"
      title={<>全盈與全家集團手上的八張牌，<span className="text-plus-600">在代理時代全部換了面額</span></>}
      subtitle={<>在「錢包之戰」裡，這些是周邊資產；在「代理之戰」裡，它們正好補上全球平台與卡組織都缺的那一層——在地信任。</>}
      footer="事實欄引自全盈支付公開資訊與 2026 年 5 月總經理受訪、2026.09 全家法說會、Visa 台灣 2026 年新聞稿；「代理時代意義」為本報告之分析。"
      compact
    >
      <div className="flex-1 min-h-0 flex flex-col gap-1.5 pb-2">
        <div className="grid grid-cols-[190px_1fr_1.25fr_110px] gap-4 px-4 text-[11px] font-bold tracking-widest text-ink-400">
          <span>既有資產</span><span>事實</span><span>在代理時代的意義</span><span className="text-right">對應鑰匙</span>
        </div>
        {cards.map((c) => (
          <div key={c.asset} className="grid grid-cols-[190px_1fr_1.25fr_110px] flex-1 gap-4 items-center bg-white border border-ink-200 rounded-xl px-4 py-2 shadow-sm">
            <div className="flex items-center gap-2.5">
              <c.icon className="w-4 h-4 text-plus-600 flex-shrink-0" />
              <span className="text-[14.5px] font-black text-ink-900">{c.asset}</span>
            </div>
            <span className="text-[12.5px] text-ink-500 leading-snug">{c.fact}</span>
            <span className="text-[13px] text-ink-900 leading-snug">{c.meaning}</span>
            <span className="text-right">
              <span className="inline-block px-2 py-0.5 rounded-md bg-plus-50 border border-plus-300 text-[11px] font-bold text-plus-700">{c.key}</span>
            </span>
          </div>
        ))}
      </div>
    </PaySlideShell>
  );
}
