"use client";

import { useCart } from "@/lib/cart";

export default function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const { totalCajas } = useCart();
  return (
    <header className="sticky top-0 z-30 border-b border-pink-bg/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-coral to-pink text-lg">
            🍭
          </span>
          <span className="font-display text-xl font-800 leading-none">
            <span className="text-coral">D</span>
            <span className="text-candy-teal">u</span>
            <span className="text-pink">l</span>
            <span className="text-candy-purple">c</span>
            <span className="text-candy-yellow">e</span>
            <span className="text-coral">s</span>{" "}
            <span className="text-maroon">Candy</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-600 text-ink/70 md:flex">
          <a href="#catalogo" className="hover:text-coral">Catálogo</a>
          <a href="#mayorista" className="hover:text-coral">Venta mayorista</a>
          <a href="#contacto" className="hover:text-coral">Contacto</a>
        </nav>

        <button
          onClick={onOpenCart}
          aria-label={`Abrir cotización${totalCajas > 0 ? `, ${totalCajas} bolsas agregadas` : ""}`}
          className="relative flex items-center gap-2 rounded-full bg-maroon px-4 py-2 text-sm font-bold text-white transition hover:bg-maroon-deep"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">Pedido</span>
          {totalCajas > 0 && (
            <span className="tabular grid h-5 min-w-5 place-items-center rounded-full bg-candy-yellow px-1 text-xs font-800 text-maroon">
              {totalCajas}
            </span>
          )}
        </button>
      </div>

    </header>
  );
}
