'use client';

import PayCountrySlide from '@/components/slide/pay_country_slide';

export default function PaySlide11() {
  return (
    <PayCountrySlide
      pageLabel="11 / 20"
      flag="🇮🇩"
      country="印尼"
      title={<>印尼：QRIS 加 WhatsApp，<span className="text-plus-500">可能是 Muse 最大的海外牌桌</span></>}
      subtitle={<>印尼有 6,700 萬人用國家級 QRIS 付款，每 10 個網路用戶有 8 個天天用 AI。代理支付還沒有公開試點——這代表第一個把 WhatsApp 裡的代理人接上 QRIS 的人，會一次拿下整個市場的入口。</>}
      stats={[
        { v: '6,700 萬', k: 'QRIS 用戶；商家 4,546 萬，九成以上是中小微企業' },
        { v: '150 億筆', k: '2026 年 1–7 月 QRIS 交易，上半年量翻倍' },
        { v: '710 億美元', k: '電商 GMV（2025）；數位支付 GTV 5,380 億美元' },
        { v: '約 33.5 萬', k: '在台印尼籍移工（2026.06），最大的移工族群' },
      ]}
      winners={[
        '先把代理人接上 QRIS 的平台——WhatsApp 用戶約 1.1 億，是 Muse 的天然入口',
        '跨境匯款走廊的兩端：台灣端的實名帳戶、印尼端的收款網路',
      ]}
      losers={[
        '只做單一國內支付、沒有跨境與代理接口的錢包',
        '靠人工客服與表單的傳統匯款通路',
      ]}
      sceneTitle="Rina 在台中的全家"
      sceneLines={[
        '週日領到薪水，她走進宿舍旁的全家，在櫃檯把現金儲值進全盈+PAY。',
        '回宿舍後，她對 WhatsApp 說：「10 號寄 8,000 回家。」',
        '錢從台灣的實名帳戶出發，落地成家鄉可以用 QRIS 花的錢。',
      ]}
      move={<>成為印尼走廊的<span className="font-black">台灣端守門人</span>：現金入口在全家門市、實名在全盈、規則在授權書——不論最後是哪個代理人在對話。</>}
      footer="資料來源：Bank Indonesia（經 CNBC Indonesia、Kontan 2026.07–09 報導）、e-Conomy SEA 2025、勞動部移工統計（經二手整理，定稿前請再核對）；WhatsApp 用戶數為二手彙整估計。匯款須在主管機關核准之範圍內辦理；Rina 情境為推演。"
    />
  );
}
