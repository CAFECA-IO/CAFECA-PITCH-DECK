'use client';

import PayCountrySlide from '@/components/slide/pay_country_slide';

export default function PaySlide9() {
  return (
    <PayCountrySlide
      pageLabel="09 / 20"
      flag="🇯🇵"
      country="日本"
      title={<>日本：卡的國度，<span className="text-plus-500">條碼錢包剛站穩就要面對代理人</span></>}
      subtitle={<>日本無現金比率 2025 年升到 58.0%，其中八成以上是信用卡。代理人用的正是卡的代碼化軌道——發卡行會先受益；PayPay 這類條碼錢包，則要面對和全盈一樣的「App 不被打開」問題。</>}
      stats={[
        { v: '58.0%', k: '無現金支付比率（2025，METI），2030 目標 65%' },
        { v: '82.7%', k: '無現金中信用卡的占比；條碼支付 10.2%' },
        { v: '7,500 萬', k: 'PayPay 登錄用戶；2025 年交易 88.8 億筆' },
        { v: '26.1 兆日圓', k: 'B2C 電商規模（2024），物販電商化率 9.78%' },
      ]}
      winners={[
        '發卡行：三菱 UFJ NICOS、樂天卡、三井住友卡等已加入 Visa Agentic Ready',
        '握有大量店頭的零售集團：代理人下單後仍需要取貨與退貨的地方',
      ]}
      losers={[
        '以「打開 App 掃碼」為核心的條碼錢包與點數活動',
        '依賴結帳頁廣告與回饋的導購模式',
      ]}
      sceneTitle="小安在東京的 FamilyMart"
      sceneLines={[
        '出發前，她告訴代理人：「日本五天，每天上限 ¥10,000，超商和藥妝不用問。」',
        '淺草的 FamilyMart，代理人以全盈+PAY 跨境通道付 ¥648 買早餐，帳單直接顯示新臺幣。',
        '第三天藥妝店結帳 ¥18,400，超過規則——手機跳出確認，她按下一次。',
      ]}
      move={<>把台灣的授權書<span className="font-black">帶出國</span>：規則跟著人走，跨境通道只是執行者。並探索與日本全家的 FamiPay 在「同一塊招牌」下互通的可能。</>}
      footer="資料來源：經濟產業省（2025 無現金比率，2026.03.31 發布；2024 電子商務調查）、PayPay 新聞稿（2026.08.10）、Visa Agentic Ready 亞太新聞稿（2026.04.30）、FamilyMart（FamiPay 累計下載）。小安情境為推演。"
    />
  );
}
