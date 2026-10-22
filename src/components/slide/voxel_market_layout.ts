/**
 * Info: (20260826 - Luphia) voxel_market_layout.ts
 * - 高雄示範賣場（30 × 22 體素）的共用場景資料
 * - 各張投影片以同一座賣場為底，逐層疊加人流、情緒與周邊模擬圖層
 */

import { shade } from '@/components/slide/voxel_store';
import type { IVoxelBox } from '@/components/slide/voxel_store';

export const MARKET_WIDTH = 30;
export const MARKET_DEPTH = 22;

export const VOXEL_PALETTE = {
  floor: '#ccd5df',
  floorAlt: '#b8c3cf',
  wall: '#e4e9ee',
  chilled: '#4dd0e1',
  frozen: '#81d4fa',
  shelf: '#c9964f',
  snack: '#e0a458',
  instant: '#d2683c',
  beverage: '#5c6bc0',
  household: '#26a69a',
  baby: '#ef7fa5',
  produce: '#7cb342',
  meat: '#e05c5c',
  deli: '#f4a63a',
  senior: '#9575cd',
  stationery: '#ab47bc',
  checkout: '#78909c',
  service: '#ffb300',
  entrance: '#00bfa5',
  cart: '#90a4ae',
} as const;

// Info: (20260826 - Luphia) 走道座標，供熱區圖層與人物定位共用
export const MARKET_CORRIDORS = {
  back: { x: 1.6, y: 2.1, w: 12.8, d: 1.4 },
  row1: { x: 1.6, y: 4.9, w: 12.8, d: 1.4 },
  row2: { x: 1.6, y: 7.7, w: 12.8, d: 1.4 },
  row3: { x: 1.6, y: 10.5, w: 12.8, d: 1.4 },
  spine: { x: 15.7, y: 2.1, w: 2.1, d: 11.1 },
  right1: { x: 19.3, y: 3.6, w: 1.4, d: 9.6 },
  right2: { x: 22.1, y: 3.6, w: 1.4, d: 9.6 },
  right3: { x: 24.9, y: 3.6, w: 2.4, d: 9.6 },
  front: { x: 1.6, y: 13.5, w: 26.0, d: 1.5 },
  checkout: { x: 9.0, y: 20.3, w: 13.5, d: 1.4 },
} as const;

// Info: (20260826 - Luphia) 基礎賣場結構：地板、牆體、貨架、收銀、出入口
export const buildMarketBase = (): IVoxelBox[] => {
  const boxes: IVoxelBox[] = [];

  boxes.push({ key: 'floor', x: 0, y: 0, z: -0.5, w: MARKET_WIDTH, d: MARKET_DEPTH, h: 0.5, color: VOXEL_PALETTE.floor, sortBias: -1000 });
  boxes.push({ key: 'wall-back', x: 0, y: 0, z: 0, w: MARKET_WIDTH, d: 0.4, h: 3.4, color: VOXEL_PALETTE.wall });
  boxes.push({ key: 'wall-left', x: 0, y: 0.4, z: 0, w: 0.4, d: MARKET_DEPTH - 0.4, h: 3.4, color: VOXEL_PALETTE.wall });

  // Info: (20260826 - Luphia) 後牆冷藏冷凍櫃
  boxes.push({ key: 'chill-1', x: 2, y: 0.6, w: 7.5, d: 1.4, h: 2.6, color: VOXEL_PALETTE.chilled });
  boxes.push({ key: 'chill-2', x: 10.2, y: 0.6, w: 7.5, d: 1.4, h: 2.6, color: VOXEL_PALETTE.frozen });
  boxes.push({ key: 'chill-3', x: 18.4, y: 0.6, w: 7.6, d: 1.4, h: 2.6, color: VOXEL_PALETTE.chilled });

  // Info: (20260826 - Luphia) 左側四排橫向乾貨走道，頂端以品類色帶標示
  const LEFT_AISLES = [
    { y: 3.6, band: VOXEL_PALETTE.snack },
    { y: 6.4, band: VOXEL_PALETTE.instant },
    { y: 9.2, band: VOXEL_PALETTE.produce },
    { y: 12.0, band: VOXEL_PALETTE.beverage },
  ];
  LEFT_AISLES.forEach((aisle, index) => {
    boxes.push({ key: `aisle-l-${index}`, x: 2, y: aisle.y, w: 12, d: 1.2, h: 1.9, color: VOXEL_PALETTE.shelf });
    boxes.push({ key: `band-l-${index}`, x: 2, y: aisle.y, z: 1.9, w: 12, d: 1.2, h: 0.34, color: aisle.band });
    boxes.push({ key: `endcap-l-${index}`, x: 14.4, y: aisle.y - 0.1, w: 1.2, d: 1.4, h: 1.5, color: VOXEL_PALETTE.deli });
  });

  // Info: (20260826 - Luphia) 右側三排直向貨架與靠牆冷藏
  const RIGHT_AISLES = [
    { x: 18.0, band: VOXEL_PALETTE.beverage },
    { x: 20.8, band: VOXEL_PALETTE.household },
    { x: 23.6, band: VOXEL_PALETTE.baby },
  ];
  RIGHT_AISLES.forEach((aisle, index) => {
    boxes.push({ key: `aisle-r-${index}`, x: aisle.x, y: 3.6, w: 1.2, d: 9.6, h: 2.0, color: VOXEL_PALETTE.shelf });
    boxes.push({ key: `band-r-${index}`, x: aisle.x, y: 3.6, z: 2.0, w: 1.2, d: 9.6, h: 0.34, color: aisle.band });
  });
  boxes.push({ key: 'chill-right', x: 27.4, y: 3.6, w: 1.6, d: 9.6, h: 2.6, color: VOXEL_PALETTE.frozen });

  // Info: (20260826 - Luphia) 前場生鮮、肉品與文具季節專區
  boxes.push({ key: 'produce-1', x: 1.6, y: 15.2, w: 3.0, d: 2.4, h: 0.9, color: VOXEL_PALETTE.produce });
  boxes.push({ key: 'produce-2', x: 5.0, y: 15.2, w: 3.0, d: 2.4, h: 0.9, color: VOXEL_PALETTE.produce });
  boxes.push({ key: 'meat-1', x: 1.6, y: 18.4, w: 6.4, d: 1.4, h: 1.1, color: VOXEL_PALETTE.meat });
  boxes.push({ key: 'stationery-1', x: 9.6, y: 15.2, w: 4.4, d: 1.2, h: 1.6, color: VOXEL_PALETTE.stationery });
  boxes.push({ key: 'stationery-2', x: 9.6, y: 17.0, w: 4.4, d: 1.2, h: 1.6, color: VOXEL_PALETTE.stationery });

  // Info: (20260826 - Luphia) 前場熟食與銀髮保健
  boxes.push({ key: 'deli-1', x: 18.0, y: 15.2, w: 4.6, d: 1.4, h: 1.2, color: VOXEL_PALETTE.deli });
  boxes.push({ key: 'senior-1', x: 23.4, y: 15.2, w: 4.2, d: 1.4, h: 1.7, color: VOXEL_PALETTE.senior });

  // Info: (20260826 - Luphia) 收銀線六台
  for (let i = 0; i < 6; i += 1) {
    boxes.push({ key: `checkout-${i}`, x: 9.6 + i * 2.2, y: 18.6, w: 1.6, d: 1.6, h: 1.0, color: VOXEL_PALETTE.checkout });
  }

  // Info: (20260826 - Luphia) 服務台、推車區與出入口地墊
  boxes.push({ key: 'service', x: 23.4, y: 18.6, w: 4.0, d: 1.6, h: 1.1, color: VOXEL_PALETTE.service });
  boxes.push({ key: 'cart', x: 6.6, y: 20.8, w: 3.2, d: 1.0, h: 0.9, color: VOXEL_PALETTE.cart });
  boxes.push({ key: 'entrance', x: 13.0, y: 20.8, w: 6.6, d: 1.0, h: 0.08, color: VOXEL_PALETTE.entrance, flat: true });

  return boxes;
};

export interface IPersonOptions {
  shirt: string;
  pants?: string;
  skin?: string;
  hair?: string;
  key?: string;
  opacity?: number;
}

// Info: (20260826 - Luphia) 產生一名 Minecraft 風格的體素人物
// - 比例以「小於 20px 也要看得出是人」為準：肩寬 > 腿寬 > 頭寬，靠剪影辨識而非細節
// - 陣列順序即繪製順序，並以 sortBias 把所有部位歸位到同一個排序基準，避免頭髮被頭部蓋住
export const voxelPerson = (x: number, y: number, options: IPersonOptions): IVoxelBox[] => {
  const pants = options.pants ?? '#546e7a';
  const skin = options.skin ?? '#e6b98f';
  const hair = options.hair ?? '#4e342e';
  // Info: (20260826 - Luphia) 袖子只比上衣暗一點，讓彩色面積夠大，縮到 20px 仍認得出人物顏色
  const sleeve = shade(options.shirt, -0.12);
  const id = options.key ?? `p-${x}-${y}`;
  const opacity = options.opacity;
  const outline = 'rgba(6,12,26,0.55)';
  const cx = x + 0.45;
  const cy = y + 0.45;

  // Info: (20260826 - Luphia) [部位, x, y, z, 寬, 深, 高, 顏色]
  const parts: [string, number, number, number, number, number, number, string][] = [
    ['legs', cx - 0.23, cy - 0.21, 0, 0.46, 0.42, 0.58, pants],
    ['arm-far', cx - 0.5, cy - 0.23, 0.6, 0.16, 0.46, 0.66, sleeve],
    ['torso', cx - 0.34, cy - 0.26, 0.58, 0.68, 0.52, 0.72, options.shirt],
    ['arm-near', cx + 0.34, cy - 0.23, 0.6, 0.16, 0.46, 0.66, sleeve],
    ['head', cx - 0.25, cy - 0.25, 1.3, 0.5, 0.5, 0.5, skin],
    ['hair', cx - 0.27, cy - 0.27, 1.8, 0.54, 0.54, 0.16, hair],
  ];

  return parts.map(([name, px, py, pz, w, d, h, color], index) => ({
    key: `${id}-${name}`,
    x: px,
    y: py,
    z: pz,
    w,
    d,
    h,
    color,
    opacity,
    outline,
    pixelate: false,
    sortBias: x + y - (px + py) + index * 0.01,
  }));
};

// Info: (20260826 - Luphia) 地面熱區色塊，用來標示停留熱度或模擬結果
export const heatTile = (x: number, y: number, w: number, d: number, color: string, opacity = 0.72, key?: string): IVoxelBox => ({
  key: key ?? `heat-${x}-${y}`,
  x,
  y,
  z: 0.02,
  w,
  d,
  h: 0.04,
  color,
  opacity,
  flat: true,
  pixelate: false,
  sortBias: -500,
  outline: 'rgba(15,23,42,0.10)',
});

export interface ICorridorRect {
  x: number;
  y: number;
  w: number;
  d: number;
}

// Info: (20260826 - Luphia) 直接把整條走道塗成熱區
export const corridorHeat = (corridor: ICorridorRect, color: string, opacity: number, key: string): IVoxelBox =>
  heatTile(corridor.x, corridor.y, corridor.w, corridor.d, color, opacity, key);

export interface IRobotOptions {
  body?: string;
  head?: string;
  accent?: string;
  key?: string;
}

// Info: (20260826 - Luphia) 產生一台體素風格的服務機器人
export const voxelRobot = (x: number, y: number, options: IRobotOptions = {}): IVoxelBox[] => {
  const body = options.body ?? '#eceff1';
  const head = options.head ?? '#37474f';
  const accent = options.accent ?? '#22d3ee';
  const id = options.key ?? `r-${x}-${y}`;
  return [
    { key: `${id}-base`, x, y, z: 0, w: 0.86, d: 0.86, h: 0.26, color: '#455a64', pixelate: false },
    { key: `${id}-body`, x: x + 0.04, y: y + 0.04, z: 0.26, w: 0.78, d: 0.78, h: 0.92, color: body, pixelate: false },
    { key: `${id}-belt`, x: x + 0.02, y: y + 0.02, z: 0.86, w: 0.82, d: 0.82, h: 0.16, color: accent, pixelate: false },
    { key: `${id}-head`, x: x + 0.09, y: y + 0.09, z: 1.18, w: 0.68, d: 0.68, h: 0.5, color: head, pixelate: false },
    { key: `${id}-eye`, x: x + 0.07, y: y + 0.07, z: 1.42, w: 0.72, d: 0.72, h: 0.14, color: accent, pixelate: false },
    { key: `${id}-antenna`, x: x + 0.37, y: y + 0.37, z: 1.68, w: 0.12, d: 0.12, h: 0.34, color: '#78909c', pixelate: false },
    { key: `${id}-tip`, x: x + 0.32, y: y + 0.32, z: 2.02, w: 0.22, d: 0.22, h: 0.2, color: accent, pixelate: false },
  ];
};

// Info: (20260826 - Luphia) 產生一節輕軌車廂（情境模擬用）
export const voxelTram = (x: number, y: number, length: number, key = 'tram'): IVoxelBox[] => [
  { key: `${key}-body`, x, y, z: 0.3, w: length, d: 1.6, h: 1.9, color: '#00acc1' },
  { key: `${key}-window`, x: x - 0.03, y: y - 0.03, z: 1.1, w: length + 0.06, d: 1.66, h: 0.62, color: '#233240', pixelate: false },
  { key: `${key}-roof`, x: x + 0.1, y: y + 0.1, z: 2.2, w: length - 0.2, d: 1.4, h: 0.22, color: '#b0bec5', pixelate: false },
];
