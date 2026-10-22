'use client';

import React from 'react';

/**
 * Info: (20260826 - Luphia) voxel_store.tsx
 * - 以純 SVG 實作 Minecraft 風格的等距（isometric）體素場景
 * - 專供簡報頁面使用，不依賴任何 3D 函式庫，可被 html-to-image 正常輸出成 PNG / PDF
 */

// Info: (20260826 - Luphia) 2:1 等距投影的單位尺寸（像素）
const UNIT_HALF_WIDTH = 17;
const UNIT_HALF_DEPTH = 8.5;
const UNIT_HEIGHT = 14;

// Info: (20260826 - Luphia) 三個面的明暗係數，模擬 Minecraft 的方向性打光
const FACE_TOP_LIGHT = 0.07;
const FACE_RIGHT_LIGHT = -0.16;
const FACE_LEFT_LIGHT = -0.34;

export interface IVoxelBox {
  x: number;
  y: number;
  z?: number;
  w: number;
  d: number;
  h: number;
  color: string;
  opacity?: number;
  outline?: string;
  pixelate?: boolean;
  flat?: boolean;
  sortBias?: number;
  key?: string;
}

export interface IVoxelOverlay {
  x: number;
  y: number;
  z?: number;
  node: React.ReactNode;
  dx?: number;
  dy?: number;
  key?: string;
}

export interface IVoxelSceneProps {
  boxes: IVoxelBox[];
  overlays?: IVoxelOverlay[];
  scale?: number;
  pad?: number;
  className?: string;
}

// Info: (20260826 - Luphia) 色彩明暗調整，amount 為正變亮、為負變暗
export const shade = (hex: string, amount: number): string => {
  const clean = hex.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
  const num = parseInt(full, 16);
  const channels = [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  const mixed = channels.map((c) => {
    const target = amount >= 0 ? 255 : 0;
    const next = Math.round(c + (target - c) * Math.abs(amount));
    return Math.max(0, Math.min(255, next));
  });
  return `rgb(${mixed[0]}, ${mixed[1]}, ${mixed[2]})`;
};

interface IProjector {
  (x: number, y: number, z: number): [number, number];
}

const createProjector = (scale: number, offsetX: number, offsetY: number): IProjector => {
  const halfW = UNIT_HALF_WIDTH * scale;
  const halfD = UNIT_HALF_DEPTH * scale;
  const unitH = UNIT_HEIGHT * scale;
  return (x, y, z) => [(x - y) * halfW + offsetX, (x + y) * halfD - z * unitH + offsetY];
};

const toPath = (points: [number, number][]): string =>
  `${points.map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' ')}`;

// Info: (20260826 - Luphia) 產生單一方塊的三個可見面與像素格線
const renderBox = (box: IVoxelBox, project: IProjector, index: number): React.ReactNode => {
  const { x, y, w, d, h, color } = box;
  const z = box.z ?? 0;
  const opacity = box.opacity ?? 1;
  const pixelate = box.pixelate ?? true;
  const top = z + h;

  const topFace: [number, number][] = [
    project(x, y, top),
    project(x + w, y, top),
    project(x + w, y + d, top),
    project(x, y + d, top),
  ];

  const rightFace: [number, number][] = [
    project(x + w, y, top),
    project(x + w, y + d, top),
    project(x + w, y + d, z),
    project(x + w, y, z),
  ];

  const leftFace: [number, number][] = [
    project(x, y + d, top),
    project(x + w, y + d, top),
    project(x + w, y + d, z),
    project(x, y + d, z),
  ];

  const gridLines: React.ReactNode[] = [];
  if (pixelate) {
    const stroke = 'rgba(0,0,0,0.13)';
    for (let i = 1; i < w; i += 1) {
      const a = project(x + i, y, top);
      const b = project(x + i, y + d, top);
      gridLines.push(<line key={`tx${i}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={stroke} strokeWidth={0.7} />);
    }
    for (let j = 1; j < d; j += 1) {
      const a = project(x, y + j, top);
      const b = project(x + w, y + j, top);
      gridLines.push(<line key={`ty${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={stroke} strokeWidth={0.7} />);
    }
    if (!box.flat && h > 0) {
      for (let j = 1; j < d; j += 1) {
        const a = project(x + w, y + j, z);
        const b = project(x + w, y + j, top);
        gridLines.push(<line key={`rv${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={stroke} strokeWidth={0.7} />);
      }
      for (let i = 1; i < w; i += 1) {
        const a = project(x + i, y + d, z);
        const b = project(x + i, y + d, top);
        gridLines.push(<line key={`lv${i}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={stroke} strokeWidth={0.7} />);
      }
      for (let k = 1; k < h; k += 1) {
        const a = project(x + w, y, z + k);
        const b = project(x + w, y + d, z + k);
        gridLines.push(<line key={`rh${k}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={stroke} strokeWidth={0.7} />);
        const c = project(x, y + d, z + k);
        const e = project(x + w, y + d, z + k);
        gridLines.push(<line key={`lh${k}`} x1={c[0]} y1={c[1]} x2={e[0]} y2={e[1]} stroke={stroke} strokeWidth={0.7} />);
      }
    }
  }

  const outline = box.outline ?? 'rgba(8,15,30,0.35)';

  return (
    <g key={box.key ?? `box-${index}`} opacity={opacity}>
      {!box.flat && h > 0 && (
        <>
          <polygon points={toPath(leftFace)} fill={shade(color, FACE_LEFT_LIGHT)} stroke={outline} strokeWidth={0.8} strokeLinejoin="round" />
          <polygon points={toPath(rightFace)} fill={shade(color, FACE_RIGHT_LIGHT)} stroke={outline} strokeWidth={0.8} strokeLinejoin="round" />
        </>
      )}
      <polygon points={toPath(topFace)} fill={shade(color, FACE_TOP_LIGHT)} stroke={outline} strokeWidth={0.8} strokeLinejoin="round" />
      {gridLines}
    </g>
  );
};

export default function VoxelScene({ boxes, overlays = [], scale = 1, pad = 24, className = '' }: IVoxelSceneProps) {
  const probe = createProjector(scale, 0, 0);

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  boxes.forEach((box) => {
    const z = box.z ?? 0;
    const corners: [number, number, number][] = [
      [box.x, box.y, z],
      [box.x + box.w, box.y, z],
      [box.x, box.y + box.d, z],
      [box.x + box.w, box.y + box.d, z],
      [box.x, box.y, z + box.h],
      [box.x + box.w, box.y, z + box.h],
      [box.x, box.y + box.d, z + box.h],
      [box.x + box.w, box.y + box.d, z + box.h],
    ];
    corners.forEach(([cx, cy, cz]) => {
      const [px, py] = probe(cx, cy, cz);
      minX = Math.min(minX, px);
      maxX = Math.max(maxX, px);
      minY = Math.min(minY, py);
      maxY = Math.max(maxY, py);
    });
  });

  const sceneWidth = Math.ceil(maxX - minX) + pad * 2;
  const sceneHeight = Math.ceil(maxY - minY) + pad * 2;
  const project = createProjector(scale, -minX + pad, -minY + pad);

  // Info: (20260826 - Luphia) 畫家演算法：由遠到近排序，遠 = 座標和較小
  const ordered = boxes
    .map((box, index) => ({ box, index }))
    .sort((a, b) => {
      const ka = a.box.x + a.box.y + (a.box.z ?? 0) * 0.001 + (a.box.sortBias ?? 0);
      const kb = b.box.x + b.box.y + (b.box.z ?? 0) * 0.001 + (b.box.sortBias ?? 0);
      if (ka !== kb) return ka - kb;
      return a.index - b.index;
    });

  return (
    <div className={`relative ${className}`} style={{ width: sceneWidth, height: sceneHeight }}>
      <svg width={sceneWidth} height={sceneHeight} viewBox={`0 0 ${sceneWidth} ${sceneHeight}`} shapeRendering="geometricPrecision">
        {ordered.map(({ box, index }) => renderBox(box, project, index))}
      </svg>
      {overlays.map((overlay, index) => {
        const [px, py] = project(overlay.x, overlay.y, overlay.z ?? 0);
        return (
          <div
            key={overlay.key ?? `overlay-${index}`}
            className="absolute"
            style={{ left: px + (overlay.dx ?? 0), top: py + (overlay.dy ?? 0), transform: 'translate(-50%, -50%)' }}
          >
            {overlay.node}
          </div>
        );
      })}
    </div>
  );
}
