'use client';

import { Bot, PackageSearch, Sparkles, AlertTriangle } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';
import VoxelScene from '@/components/slide/voxel_store';
import { voxelRobot } from '@/components/slide/voxel_market_layout';

export default function IsunfaRetailTwinSlide18() {
  const roles = [
    {
      icon: Bot,
      name: '導購機器人 × 1',
      accent: '#22d3ee',
      ring: 'border-cyan-400/30',
      text: 'text-cyan-300',
      job: '解決「找不到商品」——語音問路、帶路、查庫存與替代品',
      metrics: [
        { k: '平均尋物時間', v: '3.4 分 → 1.1 分' },
        { k: '挫折指數 FI', v: '0.58 → 0.27' },
        { k: '年效益', v: 'NT$36 萬' },
      ],
      caveat: '平日上午的銀髮客群使用率僅 6%，該時段仍需保留真人。',
    },
    {
      icon: PackageSearch,
      name: '補貨盤點機器人 × 1',
      accent: '#34d399',
      ring: 'border-emerald-400/30',
      text: 'text-emerald-300',
      job: '每 45 分鐘巡架一次，即時偵測空位、錯位與標價不符',
      metrics: [
        { k: '日均斷貨時數', v: '2.4 hr → 0.9 hr' },
        { k: '缺貨成本回收', v: '−64%' },
        { k: '年效益', v: 'NT$62 萬' },
      ],
      caveat: '效益最大，但完全看不見——因為它救回的是原本沒被記帳的損失。',
      star: true,
    },
    {
      icon: Sparkles,
      name: '清潔巡場機器人 × 1',
      accent: '#a78bfa',
      ring: 'border-violet-400/30',
      text: 'text-violet-300',
      job: '離峰時段自動清潔，同時回傳地面濕滑與障礙物警示',
      metrics: [
        { k: '釋出人力', v: '0.7 FTE' },
        { k: '滑倒事故風險', v: '−31%' },
        { k: '年效益', v: 'NT$20 萬' },
      ],
      caveat: '效益最確定，但天花板最低，屬於保底項目。',
    },
  ];

  const finance = [
    { k: '導入 CAPEX', v: 'NT$180 萬', tone: 'text-rose-300' },
    { k: '年度 OPEX', v: 'NT$36 萬', tone: 'text-rose-300' },
    { k: '年度效益合計', v: 'NT$118 萬', tone: 'text-emerald-300' },
    { k: '投資回收期', v: '2.2 年', tone: 'text-white' },
  ];

  return (
    <TwinSlideShell
      chapter="情境 B · 機器人"
      chapterColor="text-emerald-400"
      chapterDot="bg-emerald-400"
      pageLabel="18 / 22"
      compact
      title={<>如果導入機器人店員，<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">最該先買哪一種？</span></>}
      subtitle="把三種機器人分別放進示範門市的孿生模型跑 12 個月。模擬的價值不在證明機器人有用，而在指出「哪一種最沒用」。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="grid grid-cols-3 gap-4 flex-1">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.name}
                className={`rounded-2xl border ${role.ring} ${role.star ? 'bg-emerald-400/[0.08]' : 'bg-white/[0.04]'} p-4 flex flex-col`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <VoxelScene
                    boxes={[
                      { key: 'pad', x: -0.15, y: -0.15, z: -0.22, w: 1.5, d: 1.5, h: 0.22, color: '#1f2937', outline: 'rgba(148,163,184,0.35)' },
                      ...voxelRobot(0, 0, { accent: role.accent, key: role.name }),
                    ]}
                    scale={1.05}
                    pad={3}
                  />
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-4 h-4 ${role.text}`} />
                      {role.star && <span className="px-1.5 py-[1px] rounded bg-emerald-400/20 text-[9px] font-bold text-emerald-300">最高效益</span>}
                    </div>
                    <div className="text-[15px] font-black text-white leading-tight">{role.name}</div>
                    <p className="text-[11px] text-slate-400 leading-snug mt-1.5">{role.job}</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-3.5 mt-2 pt-3 border-t border-white/10">
                  {role.metrics.map((metric) => (
                    <div key={metric.k} className="flex justify-between items-baseline">
                      <span className="text-[11px] text-slate-400">{metric.k}</span>
                      <span className={`text-[12.5px] font-mono font-bold ${role.text}`}>{metric.v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-2.5">
                  <p className="text-[10.5px] text-slate-500 leading-snug border-l-2 border-white/15 pl-2.5">{role.caveat}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4">
          <div className="flex-[46] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 flex items-center gap-6">
            {finance.map((row) => (
              <div key={row.k}>
                <div className="text-[9.5px] text-slate-500 mb-1">{row.k}</div>
                <div className={`text-[16px] font-black font-mono ${row.tone}`}>{row.v}</div>
              </div>
            ))}
          </div>

          <div className="flex-[54] rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-400/[0.12] to-transparent px-5 py-3 flex items-center gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-[13.5px] font-black text-white leading-snug">
                反直覺結論：機器人最大的效益不在取代收銀，而在<span className="text-amber-300">缺貨偵測</span>。
              </p>
              <p className="text-[11px] text-slate-400 leading-snug mt-1">
                模擬另顯示：若同步全面改自助結帳，65 歲以上客群流失 4.2%，淨效益反而下降——建議混合配置，保留 2 條真人通道。
              </p>
            </div>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
