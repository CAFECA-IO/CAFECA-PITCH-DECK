'use client';

import { PaySceneShell } from '@/components/slide/pay_slide_shell';
import { MessageCircle, Check } from 'lucide-react';

export default function PaySlide15() {
  const chat = [
    { from: 'rina', text: 'Tolong kirim 8.000 ke Ibu tanggal 10, kalau kursnya bagus.', zh: '每月 10 號幫我寄 8,000 給媽媽，匯率好的時候。' },
    { from: 'agent', text: 'Baik. Aturan disimpan: tiap tanggal 8–10, maks NT$8.000, ke rekening Ibu.', zh: '好的，規則已存：每月 8–10 號之間、上限 NT$8,000、收款人是媽媽的帳戶。' },
    { from: 'agent', text: '10 Okt · Terkirim NT$8.000. Kurs hari ini lebih baik dari rata-rata 30 hari.', zh: '10/10 已寄出 NT$8,000，今天匯率優於近 30 日平均。' },
    { from: 'agent', text: '⚠ Ada permintaan NT$30.000 ke penerima baru. Ini di luar aturanmu. Saya tahan dulu.', zh: '⚠ 有一筆 NT$30,000 要匯給新收款人，超出你的規則，我先擋下來了。', alert: true },
  ];

  return (
    <PaySceneShell
      slug="SCENE 2 · 台中　週日下午　—　Rina 的代理人會說她的語言"
      pageLabel="15 / 20"
      footer="情境推演：匯款須在主管機關核准之國外小額匯兌業務範圍與額度內辦理；移工會員目標引自 2026 年 5 月全盈+PAY 受訪報導；外籍人士 Mobile ID 引自經濟日報（臺網 × 全盈+PAY）；Muse 目前僅於美國上線。"
    >
      <div className="grid grid-cols-[1fr_400px] gap-10 flex-1 min-h-0">
        <div className="flex flex-col">
          <div className="text-[14px] text-ink-400 mb-2">週日 16:20，Rina 在宿舍旁的全家櫃檯，把剛領的現金儲值進全盈+PAY。她來自印尼中爪哇，不太會讀中文表單，但每天都在 WhatsApp 上用語音。</div>
          <h2 className="text-[32px] font-black leading-tight text-ink-900 mb-5">
            對她來說，代理人最重要的功能<br />
            <span className="text-plus-500">不是「幫我付」，而是「幫我擋」。</span>
          </h2>
          <div className="flex flex-col gap-2.5 flex-1 min-h-0 rounded-[24px] bg-white border border-plus-100 shadow-sm p-4">
            {chat.map((c) => (
              <div key={c.text} className={`flex ${c.from === 'rina' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[88%] rounded-[20px] px-4 py-2.5 ${c.from === 'rina'
                    ? 'bg-plus-500 text-white rounded-br-md'
                    : c.alert
                      ? 'bg-bird-50 border-2 border-bird-500 text-ink-900 rounded-bl-md'
                      : 'bg-ink-100 text-ink-900 rounded-bl-md'
                    }`}
                >
                  <div className="text-[13.5px] leading-snug">{c.text}</div>
                  <div className={`text-[11.5px] mt-0.5 ${c.from === 'rina' ? 'text-white/80' : 'text-ink-500'}`}>{c.zh}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 justify-center">
          <div className="text-[12px] font-bold tracking-[0.2em] text-plus-500">移工族群要的代理人</div>
          {[
            { t: '聽得懂母語', d: '印尼語、越南語、泰語、菲律賓語，語音優先' },
            { t: '實名、可稽核', d: '收款人與額度寫進授權書，事後查得到' },
            { t: '主動擋詐騙', d: '新收款人、異常金額、深夜急件——超出規則就停' },
            { t: '全家櫃檯就是後援', d: '現金儲值、外籍人士 Mobile ID 核身、有真人可以問' },
          ].map((r) => (
            <div key={r.t} className="flex items-start gap-3 rounded-[18px] bg-white border border-plus-100 shadow-sm px-4 py-2.5">
              <span className="w-5 h-5 rounded-full bg-plus-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-white" />
              </span>
              <div>
                <div className="text-[14px] font-bold text-ink-900">{r.t}</div>
                <div className="text-[12px] text-ink-500 leading-snug">{r.d}</div>
              </div>
            </div>
          ))}
          <div className="flex items-start gap-3 rounded-[20px] bg-bird-500 px-4 py-3 mt-1 shadow-md shadow-bird-500/25">
            <MessageCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
            <div className="text-[12.5px] text-white leading-snug">
              回到第 5 頁：Muse 已經住進 WhatsApp。<span className="font-black">當它來到台灣，Rina 的代理人很可能不是全盈做的——問題是，它付款時會不會來問全盈。</span>
            </div>
          </div>
        </div>
      </div>
    </PaySceneShell>
  );
}
