"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { PRODUCTOS, CATEGORIAS, type CategoriaId } from "@/lib/catalog";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

type Filtro = "todos" | CategoriaId;

export default function Catalogo() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const productos = useMemo(
    () =>
      filtro === "todos"
        ? PRODUCTOS
        : PRODUCTOS.filter((p) => p.categoria === filtro),
    [filtro]
  );

  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
      <Reveal className="mb-8 text-center">
        <h2 className="font-display text-4xl font-800 text-maroon">
          Nuestro catálogo
        </h2>
        <p className="mt-2 text-ink/60">
          Catálogo mayorista · Cotiza disponibilidad y precio por WhatsApp
        </p>
      </Reveal>

      <div
        role="group"
        aria-label="Filtrar productos por categoría"
        className="mb-10 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <FiltroBtn active={filtro === "todos"} onClick={() => setFiltro("todos")}>
          🍭 Todos
        </FiltroBtn>
        {CATEGORIAS.map((c) => (
          <FiltroBtn
            key={c.id}
            active={filtro === c.id}
            onClick={() => setFiltro(c.id)}
          >
            {c.emoji} {c.nombre}
          </FiltroBtn>
        ))}
      </div>

      <ul className="grid list-none grid-cols-2 gap-4 p-0 sm:gap-6 lg:grid-cols-4" aria-label="Productos disponibles">
        <AnimatePresence mode="popLayout">
          {productos.map((p) => (
            <li key={p.sku}>
              <ProductCard producto={p} />
            </li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}

function FiltroBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 ${
        active
          ? "bg-maroon text-white shadow-md"
          : "bg-white text-maroon ring-1 ring-pink-bg hover:bg-pink-bg/50"
      }`}
    >
      {children}
    </button>
  );
}
