"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Producto } from "@/lib/catalog";
import { formatCLP, GLOW_POR_CATEGORIA } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import ProductPlaceholder from "./ProductPlaceholder";

export default function ProductCard({ producto }: { producto: Producto }) {
  const { add } = useCart();
  const [imgOk, setImgOk] = useState(true);
  const [justAdded, setJustAdded] = useState(false);
  const glow = GLOW_POR_CATEGORIA[producto.categoria] ?? "#f0a5c8";

  function handleAdd() {
    add(producto.sku, producto.min_cajas);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_6px_24px_-8px_rgba(122,39,64,0.25)] ring-1 ring-pink-bg transition-shadow hover:shadow-[0_16px_44px_-12px_rgba(229,86,138,0.45)]"
    >
      {producto.destacado && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-coral px-3 py-1 text-xs font-bold text-white shadow-sm">
          ⭐ Más vendido
        </span>
      )}

      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-bg to-cream p-4">
        {/* Glow de color del producto detrás (aura difuminada en relieve) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 42%, ${glow} 0%, ${glow}88 22%, transparent 60%)`,
            opacity: 0.55,
            filter: "blur(4px)",
          }}
        />
        {/* Segundo glow más amplio y tenue para profundidad */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 120% 90% at 50% 80%, ${glow}55 0%, transparent 55%)`,
            opacity: 0.5,
          }}
        />

        {imgOk ? (
          <Image
            src={producto.img}
            alt={producto.nombre}
            fill
            sizes="(max-width:768px) 50vw, 25vw"
            className="relative object-contain p-4 drop-shadow-[0_8px_16px_rgba(122,39,64,0.18)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
            <ProductPlaceholder producto={producto} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-lg font-600 leading-tight text-maroon">
          {producto.nombre}
        </h3>
        <p className="line-clamp-2 min-h-[2.5rem] text-sm leading-snug text-ink/70">{producto.descripcion}</p>

        <div className="mt-auto pt-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-ink/50">{producto.presentacion}</p>
              <p className="tabular font-heading text-2xl font-700 text-maroon">
                {formatCLP(producto.precio_caja)}
              </p>
              <p className="tabular text-xs text-ink/50">
                ≈ {formatCLP(producto.precio_unidad_ref)}/unidad
                {producto.min_cajas > 1 && (
                  <span className="ml-1 text-coral">· mín. {producto.min_cajas} cajas</span>
                )}
              </p>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className={`mt-4 w-full rounded-full px-4 py-3 text-sm font-bold text-white transition-all active:scale-95 ${
              justAdded
                ? "bg-candy-teal"
                : "bg-gradient-to-r from-pink to-coral hover:brightness-105"
            }`}
          >
            {justAdded ? "✓ Agregado" : "Agregar al pedido"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
