'use client';

import PayCountrySlide from '@/components/slide/pay_country_slide';

export default function PaySlide10() {
  return (
    <PayCountrySlide
      pageLabel="10 / 20"
      flag="🇲🇾"
      country="馬來西亞"
      title={<>馬來西亞：東南亞跑最快，<span className="text-plus-500">銀行搶先完成第一筆代理交易</span></>}
      subtitle={<>馬來西亞電商 2025 年成長 21%，是東南亞之冠；國家級 DuitNow QR 一年倍增到 30 億筆。今年 3 月，Mastercard 與 CIMB、RHB 在這裡完成首筆上線的代理交易——銀行比錢包先上車。</>}
      stats={[
        { v: '200 億美元', k: '電商 GMV（2025），年增 21%' },
        { v: '30 億筆', k: 'DuitNow QR 年交易量，一年倍增；受理點近 300 萬' },
        { v: '538 筆', k: '每人每年零售電子支付筆數（2025，共 184 億筆）' },
        { v: '9,686 人', k: '在台馬來西亞籍大專境外生（113 學年）' },
      ]}
      winners={[
        '銀行與卡組織：CIMB、RHB 已上線，Maybank、Alliance Bank 在 Visa Agentic Ready 名單',
        '國家級 QR 軌道：DuitNow 讓代理人「一個入口、全國通用」',
      ]}
      losers={[
        '只靠補貼與 App 首頁經營的電子錢包',
        '沒有跨境互通能力、只能在單一國家用的錢包',
      ]}
      sceneTitle="佳慧在台中的全家"
      sceneLines={[
        '她是來自吉隆坡的僑生，全盈外籍會員裡人數最多的那一群。',
        '代理人用中英馬三語跟她溝通，每天在宿舍樓下的全家替她扣寄杯、訂鮮食。',
        '寒假返馬前，代理人提醒：「還有 6 杯咖啡沒喝完，要轉贈給室友嗎？」她說好。',
      ]}
      move={<>把「最大的外籍會員群」變成第一批<span className="font-black">多語授權書</span>用戶；跨境 QR 互通是下一條可以洽談的軌道。</>}
      footer="資料來源：e-Conomy SEA 2025（Google、Temasek、Bain）、Bank Negara Malaysia 與 PayNet（2025 年報）、Mastercard 新聞稿（2026.03）、Visa Agentic Ready 亞太新聞稿、遠見雜誌（境外生統計）。佳慧情境為推演。"
    />
  );
}
