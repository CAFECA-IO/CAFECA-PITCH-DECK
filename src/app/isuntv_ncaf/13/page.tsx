'use client';

import Image from 'next/image';

// Info: (20260824 - Luphia) Client roster. `logo` is the path under /public once the
// official logo file is in place; while it is null the card falls back to a wordmark.
type Client = {
  name: string;
  short: string;
  desc: string;
  logo: string | null;
  // Info: (20260824 - Luphia) Brand colour backing for white-on-transparent logos
  logoBg?: string;
};

const GROUPS: { group: string; accent: string; items: Client[] }[] = [
  {
    group: '政府機關與公益法人',
    accent: 'text-violet-600',
    items: [
      { name: '金融監督管理委員會檢查局', short: '金管會檢查局', desc: '金融監理機關', logo: '/clients/fsc_feb.png' },
      { name: '新北市政府環境保護局', short: '新北市環保局', desc: '地方環保主管機關', logo: '/clients/ntpc_epd.svg' },
      { name: '財團法人資訊工業策進會', short: '資策會 III', desc: '國家級資訊產業智庫', logo: '/clients/iii.svg' },
      { name: '財團法人國家文化藝術基金會', short: '國藝會 NCAF', desc: '藝文補助與推廣法人', logo: '/clients/ncaf.svg' },
    ],
  },
  {
    group: '上市企業與大型機構',
    accent: 'text-amber-600',
    items: [
      { name: '台灣積體電路製造股份有限公司', short: 'TSMC 台積電', desc: '全球半導體製造領導者', logo: '/clients/tsmc.webp' },
      { name: '華碩雲端股份有限公司', short: 'ASUS Cloud', desc: '企業雲端服務供應商', logo: '/clients/asus_cloud.png' },
      { name: '中國砂輪企業股份有限公司', short: 'KINIK 中砂', desc: '半導體研磨材料 · 上市 1560', logo: '/clients/kinik.png' },
      { name: '環興科技股份有限公司', short: '環興科技', desc: '環境工程顧問服務', logo: '/clients/sinotech.svg' },
    ],
  },
  {
    group: '金融科技與資訊安全',
    accent: 'text-emerald-600',
    items: [
      { name: '好好證券股份有限公司', short: '好好證券 FundSwap', desc: '台灣首家純網路券商', logo: '/clients/fundswap.svg' },
      { name: '博士旺創新股份有限公司', short: '博士旺創新', desc: '區塊鏈技術應用 · 上市 3555', logo: '/clients/ibaas.png' },
      { name: '關楗股份有限公司', short: 'KeyXentic 關楗', desc: '身分治理與硬體資安', logo: '/clients/keyxentic.png' },
      { name: '歐生全創新股份有限公司', short: 'AuthenTrend 歐生全', desc: 'FIDO 生物辨識安全金鑰', logo: '/clients/authentrend.webp', logoBg: '#C3002F' },
    ],
  },
];

export default function IsuntvNcafSlide13() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260824 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
        <span className="text-sm font-bold text-violet-600 tracking-widest">服務客戶名單</span>
      </div>

      <div className="z-10 px-14 pt-[86px] pb-5 flex items-end justify-between">
        <div>
          <h2 className="text-[40px] font-black leading-tight text-slate-800">
            金管會、台積電、資策會——<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">都是卡菲卡的客戶</span>
          </h2>
          <p className="text-[15px] text-slate-500 mt-2">
            從金融監理、半導體製造到公部門環境治理，卡菲卡金融科技的系統已在高度要求的場域實際交付。
          </p>
        </div>
        <div className="text-right pb-1 flex-shrink-0 pl-8">
          <div className="text-[38px] font-black text-violet-600 leading-none">12</div>
          <div className="text-[11px] text-slate-400 font-bold tracking-wider">代表性客戶單位</div>
        </div>
      </div>

      <div className="z-10 px-14 pb-12 flex-1 flex flex-col gap-4">
        {GROUPS.map((g) => (
          <div key={g.group} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className={`text-[13px] font-black tracking-wider ${g.accent}`}>{g.group}</span>
              <span className="flex-1 h-px bg-slate-200"></span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {g.items.map((c) => (
                <div
                  key={c.name}
                  className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm flex flex-col justify-center h-[124px]"
                >
                  <div
                    className={`h-14 flex items-center mb-2 ${c.logoBg ? 'self-start rounded-md px-2.5 py-2' : ''}`}
                    style={c.logoBg ? { backgroundColor: c.logoBg } : undefined}
                  >
                    {c.logo ? (
                      <Image src={c.logo} alt={c.name} width={200} height={56} loading="eager" className={`w-auto h-auto object-contain object-left ${c.logoBg ? 'max-h-7 max-w-[160px]' : 'max-h-14 max-w-[196px]'}`} />
                    ) : (
                      <span className="text-[17px] font-black text-slate-700 tracking-tight leading-none">{c.short}</span>
                    )}
                  </div>
                  <div className="text-[12.5px] font-bold text-slate-700 leading-snug">{c.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
