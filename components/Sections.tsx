import { formatCLP, MIN_PEDIDO_CLP, WHATSAPP_NUMBER, EJECUTIVA } from "@/lib/catalog";
import Reveal from "./Reveal";

export function Mayorista() {
  const pasos = [
    { n: "1", t: "Arma tu pedido", d: "Elige las cajas que necesitas. El mínimo es solo " + formatCLP(MIN_PEDIDO_CLP) + "." },
    { n: "2", t: "Cierra por WhatsApp", d: `Envías tu pedido directo a ${EJECUTIVA}, que confirma stock y despacho.` },
    { n: "3", t: "Recibe y vende", d: "Coordinamos el envío a tu comuna. Tú te enfocas en vender." },
  ];
  return (
    <section id="mayorista" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl font-800 text-maroon">
            Comprar al por mayor es fácil
          </h2>
          <p className="mt-2 text-ink/60">Hecho con amor, pensado para tu negocio 💗</p>
        </div>
        <Reveal className="grid gap-6 md:grid-cols-3" stagger={0.15}>
          {pasos.map((p) => (
            <div
              key={p.n}
              className="rounded-3xl bg-cream p-7 ring-1 ring-pink-bg"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-coral to-pink font-800 text-white" aria-hidden="true">
                {p.n}
              </span>
              <h3 className="mt-4 font-heading text-xl font-700 text-maroon">{p.t}</h3>
              <p className="mt-2 text-sm text-ink/70">{p.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contacto" className="mt-auto bg-maroon-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-800">🍭 Dulces Candy</p>
          <p className="mt-3 text-sm text-white/70">
            Colores, sabores y alegría en cada bocado. Paletas y dulces al por mayor,
            hechos con amor.
          </p>
          <p className="mt-4 font-script text-xl text-pink-soft">¡Endulza tu día!</p>
        </div>
        <div>
          <p className="font-heading text-lg font-700">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Ejecutiva: {EJECUTIVA}</li>
            <li>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="rounded text-candy-yellow hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-candy-yellow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir a Dulces Candy por WhatsApp (abre en una pestaña nueva)"
              >
                +56 9 7334 3767
              </a>
            </li>
            <li>Despacho a todo Chile 🇨🇱</li>
          </ul>
        </div>
        <div>
          <p className="font-heading text-lg font-700">Pedidos</p>
          <p className="mt-3 text-sm text-white/70">
            Mínimo de pedido: {formatCLP(MIN_PEDIDO_CLP)} · IVA incluido.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp para hacer tu pedido (abre en una pestaña nueva)"
            className="mt-4 inline-block rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Dulces Candy · Catálogo mayorista demo · Precios referenciales editables
      </div>
    </footer>
  );
}
