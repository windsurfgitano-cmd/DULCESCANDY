"use client";

import type { Producto } from "@/lib/catalog";

const CANDY_COLORS: Record<string, [string, string]> = {
  espirales: ["#E8524E", "#2CB1B1"],
  emoji: ["#F5CD3A", "#E5568A"],
  frutales: ["#8AC926", "#F5CD3A"],
  figuras: ["#F08CB4", "#8A5CD1"],
  surtidos: ["#E5568A", "#8A5CD1"],
};

/**
 * Placeholder SVG con swirl de dulce por categoría.
 * Se reemplaza por la imagen real de Seedream cuando exista /public/productos/<sku>.png
 */
export default function ProductPlaceholder({ producto }: { producto: Producto }) {
  const [c1, c2] = CANDY_COLORS[producto.categoria] ?? ["#E5568A", "#2CB1B1"];
  const gid = `g-${producto.sku}`;
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" role="img" aria-label={producto.nombre}>
      <defs>
        <radialGradient id={gid} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="35%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </radialGradient>
      </defs>
      <circle cx="100" cy="82" r="60" fill={`url(#${gid})`} />
      <g stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.85">
        <path d="M100 82 m0 -44 a44 44 0 0 1 0 88" />
        <path d="M100 82 m0 -26 a26 26 0 0 0 0 52" />
      </g>
      <rect x="96" y="140" width="8" height="52" rx="4" fill="#fff" stroke={c2} strokeWidth="2" />
    </svg>
  );
}
