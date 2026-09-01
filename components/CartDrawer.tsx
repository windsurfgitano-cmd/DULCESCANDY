"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { EJECUTIVA } from "@/lib/catalog";
import { buildWhatsappUrl, type OrderPayload } from "@/lib/order";
import ProductPlaceholder from "./ProductPlaceholder";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const cart = useCart();

  function checkout() {
    const order: OrderPayload = {
      lines: cart.lines.map((l) => ({
        producto: l.producto,
        cajas: l.cajas,
        subtotal: l.subtotal,
      })),
      subtotal: cart.subtotal,
      totalCajas: cart.totalCajas,
      totalItems: cart.totalItems,
    };
    window.open(buildWhatsappUrl(order), "_blank");
  }


  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-maroon-deep/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <header className="flex items-center justify-between border-b border-pink-bg bg-white px-6 py-5">
              <div>
                <h2 className="font-heading text-xl font-700 text-maroon">
                  Tu pedido
                </h2>
                <p className="text-xs text-ink/50">
                  {cart.totalCajas} bolsas · {cart.totalItems.toLocaleString("es-CL")} unidades
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="rounded-full bg-pink-bg p-2 text-maroon hover:bg-pink-soft/40"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            <div className="drawer-scroll flex-1 overflow-y-auto px-6 py-4">
              {cart.lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-ink/50">
                  <span className="text-5xl">🍬</span>
                  <p>Tu pedido está vacío.</p>
                  <p className="text-sm">Agrega bolsas desde el catálogo.</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {cart.lines.map((l) => (
                    <li
                      key={l.sku}
                      className="flex gap-3 rounded-2xl bg-white p-3 ring-1 ring-pink-bg"
                    >
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-pink-bg">
                        <ProductPlaceholder producto={l.producto} />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-sm font-600 leading-tight text-maroon">
                          {l.producto.nombre}
                        </p>
                        <p className="text-xs text-ink/50">
                          Cotizar precio
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-1">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => cart.set(l.sku, l.cajas - 1)}
                              disabled={l.cajas <= l.producto.min_cajas}
                              className="grid h-7 w-7 place-items-center rounded-full bg-pink-bg text-maroon disabled:opacity-30"
                              aria-label="Menos"
                            >
                              −
                            </button>
                            <span className="tabular w-6 text-center text-sm font-700">
                              {l.cajas}
                            </span>
                            <button
                              onClick={() => cart.set(l.sku, l.cajas + 1)}
                              className="grid h-7 w-7 place-items-center rounded-full bg-pink-bg text-maroon"
                              aria-label="Más"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-xs font-700 text-coral">Por confirmar</span>
                        </div>
                      </div>
                      <button
                        onClick={() => cart.remove(l.sku)}
                        aria-label="Quitar"
                        className="self-start text-ink/30 hover:text-coral"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.lines.length > 0 && (
              <footer className="border-t border-pink-bg bg-white px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-heading text-lg text-maroon">Cotización</span>
                  <span className="text-sm font-700 text-coral">Precio por confirmar</span>
                </div>
                <p className="mb-3 text-center text-[11px] text-ink/40">
                  {EJECUTIVA} confirmará precio, stock y despacho por WhatsApp.
                </p>

                <button
                  onClick={checkout}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-4 font-bold text-white transition-all hover:brightness-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
                  </svg>
                  Cerrar pedido con {EJECUTIVA.split(" ")[0]}
                </button>
                <button
                  onClick={cart.clear}
                  className="mt-2 w-full text-center text-xs text-ink/40 hover:text-coral"
                >
                  Vaciar pedido
                </button>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
