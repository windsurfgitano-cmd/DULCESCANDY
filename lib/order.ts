import {
  WHATSAPP_NUMBER,
  EJECUTIVA,
  type Producto,
} from "./catalog";

export interface OrderLine {
  producto: Producto;
  cajas: number;
  subtotal: number;
}

export interface OrderPayload {
  lines: OrderLine[];
  subtotal: number;
  totalCajas: number;
  totalItems: number;
  cliente?: {
    nombre?: string;
    empresa?: string;
    comuna?: string;
  };
}

/**
 * FASE 1 — Cierre por WhatsApp.
 * Genera el texto del pedido y el link wa.me prellenado hacia la ejecutiva.
 */
export function buildWhatsappMessage(order: OrderPayload): string {
  const L: string[] = [];
  L.push("🍭 *NUEVO PEDIDO — Dulces Candy* 🍭");
  L.push("");
  if (order.cliente?.empresa) L.push(`🏪 Negocio: ${order.cliente.empresa}`);
  if (order.cliente?.nombre) L.push(`👤 Contacto: ${order.cliente.nombre}`);
  if (order.cliente?.comuna) L.push(`📍 Comuna: ${order.cliente.comuna}`);
  if (order.cliente?.empresa || order.cliente?.nombre || order.cliente?.comuna)
    L.push("");

  L.push("*Detalle del pedido:*");
  order.lines.forEach((l) => {
    L.push(
      `• ${l.cajas}× ${l.producto.nombre} (${l.producto.presentacion})`
    );
    L.push(`   Cantidad: ${l.cajas} bolsa(s)`);
  });
  L.push("");
  L.push(`📦 Total bolsas: ${order.totalCajas}`);
  L.push(`🍬 Total unidades: ${order.totalItems.toLocaleString("es-CL")}`);
  L.push("💬 Solicito precio, disponibilidad y condiciones de despacho.");
  L.push("");
  L.push("Quedo atenta a confirmar stock y despacho. ¡Gracias! 🎉");

  return L.join("\n");
}

export function buildWhatsappUrl(order: OrderPayload): string {
  const text = encodeURIComponent(buildWhatsappMessage(order));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * FASE 2 — Checkout de pago modular (Transbank Webpay / Flow).
 *
 * Contrato estable: el UI llama `initCheckout(order)` sin saber el proveedor.
 * Hoy devuelve `{ available: false }` y el flujo cae limpio a WhatsApp.
 * Cuando se integre pago real, este módulo:
 *   1. POST /api/checkout con el order
 *   2. crea la transacción en el gateway (Transbank.create / Flow.create)
 *   3. devuelve { available: true, redirectUrl } y el UI redirige.
 * El resto de la app NO cambia.
 */
export interface CheckoutResult {
  available: boolean;
  redirectUrl?: string;
  reason?: string;
}

export const PAYMENT_ENABLED = false;

export async function initCheckout(
  order: OrderPayload
): Promise<CheckoutResult> {
  void order;
  if (!PAYMENT_ENABLED) {
    return {
      available: false,
      reason: "Pago en línea próximamente. Cierra tu pedido por WhatsApp.",
    };
  }

  // --- FASE 2: descomentar cuando exista /api/checkout ---
  // const res = await fetch("/api/checkout", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(order),
  // });
  // if (!res.ok) return { available: false, reason: "No se pudo iniciar el pago." };
  // const data = (await res.json()) as { url: string };
  // return { available: true, redirectUrl: data.url };

  return { available: false, reason: "Checkout no disponible." };
}

export { EJECUTIVA };
