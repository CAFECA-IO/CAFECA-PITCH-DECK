'use client';

import TwinSlideShell from '@/components/slide/twin_slide_shell';
import VoxelScene from '@/components/slide/voxel_store';
import { voxelPerson } from '@/components/slide/voxel_market_layout';

export default function IsunfaRetailTwinSlide12() {
  const personas = [
    {
      name: '三班制輪班族',
      en: 'SHIFT WORKER',
      share: '18%',
      time: '打烊前 22:00–23:00',
      basket: 'NT$268',
      shirt: '#5b7f96',
      hair: '#212121',
      accent: 'text-indigo-300',
      ring: 'border-indigo-400/30',
      traits: ['中鋼、日月光、楠梓廠區的交接班潮', '一次購足：微波便當＋提神飲料＋隔日御飯糰', '對促銷不敏感，對「來不來得及」極度敏感'],
    },
    {
      name: '週日移工採購團',
      en: 'SUNDAY CREW',
      share: '9%',
      time: '週日 13:00–18:00',
      basket: 'NT$212',
      shirt: '#f4a63a',
      hair: '#1b1b1b',
      accent: 'text-amber-300',
      ring: 'border-amber-400/30',
      traits: ['3–5 人同行，單客低、總量集中', '長米、椰奶、辣椒醬、東南亞辛香料', '停留 31 分鐘，全店最久'],
    },
    {
      name: '隔代教養長輩',
      en: 'GRANDPARENT',
      share: '14%',
      time: '平日 09:30–11:30',
      basket: 'NT$396',
      shirt: '#9575cd',
      hair: '#cfd8dc',
      accent: 'text-violet-300',
      ring: 'border-violet-400/30',
      traits: ['現金與實體會員卡 68%（全店平均 31%）', '走速最慢，對標價字級與照度敏感', '孫輩營養與自身照護同一趟解決'],
    },
    {
      name: '南漂租屋工程師',
      en: 'NEW RESIDENT',
      share: '11%',
      time: '平日 21:00–22:30',
      basket: 'NT$254',
      shirt: '#4dd0e1',
      hair: '#263238',
      accent: 'text-cyan-300',
      ring: 'border-cyan-400/30',
      traits: ['行動支付 94%，動線最短僅 6.8 分鐘', '單人份、冷凍水餃、清潔用品與咖啡', '對缺貨的容忍度最低，直接轉線上'],
    },
    {
      name: '即期折扣獵人',
      en: 'DISCOUNT HUNTER',
      share: '6%',
      time: '平日 19:30–21:00',
      basket: 'NT$286',
      shirt: '#e05c5c',
      hair: '#3e2723',
      accent: 'text-rose-300',
      ring: 'border-rose-400/30',
      traits: ['等生鮮貼標才進場，路徑幾乎不變', '貼標鮮食＋冷凍蔬菜＋保鮮盒的固定組合', '毛利最低，但撐住了晚間的來客與報廢率'],
    },
    {
      name: '家庭週末大採購',
      en: 'FAMILY RUN',
      share: '28%',
      time: '週六 15:00–20:00',
      basket: 'NT$780',
      shirt: '#7cb342',
      hair: '#4e342e',
      accent: 'text-emerald-300',
      ring: 'border-emerald-400/30',
      traits: ['走道覆蓋率 81%，全店最高', '推車＋孩童同行，動線受兒童牽引', '對促銷彈性最大，也最容易被端架攔截'],
    },
  ];

  return (
    <TwinSlideShell
      chapter="LAYER 2 · 行為分群"
      chapterColor="text-cyan-400"
      chapterDot="bg-cyan-400"
      pageLabel="12 / 22"
      compact
      title={<>演算法在這座賣場裡，<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">認出了六種高雄人</span></>}
      subtitle="非監督式分群（時段 × 品類 × 動線 × 支付 × 節奏），不使用任何個人身分資料。命名由營運團隊在看過群集特徵後人工標註。"
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-3.5 h-full">
        {personas.map((persona) => (
          <div key={persona.name} className={`rounded-2xl border ${persona.ring} bg-white/[0.04] px-4 py-4 flex gap-3.5`}>
            <div className="flex-shrink-0 flex flex-col items-center pt-1">
              <VoxelScene
                boxes={[
                  { key: 'pad', x: -0.15, y: -0.15, z: -0.22, w: 1.5, d: 1.5, h: 0.22, color: '#1f2937', outline: 'rgba(148,163,184,0.35)' },
                  ...voxelPerson(0, 0, { shirt: persona.shirt, hair: persona.hair, key: persona.en }),
                ]}
                scale={1.3}
                pad={4}
              />
              <div className={`mt-1.5 text-[17px] font-black font-mono ${persona.accent}`}>{persona.share}</div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="text-[16.5px] font-black text-white leading-tight">{persona.name}</div>
              <div className="text-[9px] font-mono tracking-[0.18em] text-slate-600 mt-[3px]">{persona.en}</div>

              <div className="flex gap-3 mt-2 pb-2 border-b border-white/10">
                <div>
                  <div className="text-[9px] text-slate-500">尖峰時段</div>
                  <div className="text-[11px] font-bold text-slate-200">{persona.time}</div>
                </div>
                <div>
                  <div className="text-[9px] text-slate-500">平均客單</div>
                  <div className={`text-[11px] font-bold font-mono ${persona.accent}`}>{persona.basket}</div>
                </div>
              </div>

              <ul className="mt-2.5 space-y-2">
                {persona.traits.map((trait) => (
                  <li key={trait} className="flex gap-1.5 text-[11px] text-slate-400 leading-snug">
                    <span className="text-slate-600 mt-[1px]">·</span>
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </TwinSlideShell>
  );
}
