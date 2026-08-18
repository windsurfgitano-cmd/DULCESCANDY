"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const HERO_IMGS = [
  { src: "/productos/esp-001.webp", alt: "Paleta espiral arcoíris" },
  { src: "/productos/emo-001.webp", alt: "Paleta emoji lentes de sol" },
  { src: "/productos/fig-001.webp", alt: "Paleta conejito rosa" },
  { src: "/productos/fru-003.webp", alt: "Paleta mora silvestre" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="bg-candy-radial relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-700 text-coral shadow-sm ring-1 ring-pink-bg"
          >
            🎉 Venta mayorista · Despacho a todo Chile
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 font-display text-5xl font-800 leading-[0.95] text-maroon sm:text-6xl"
          >
            Colores, sabores y{" "}
            <span className="text-gradient-candy">alegría</span> en cada bocado
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-md text-lg text-ink/70"
          >
            Paletas y dulces al por mayor para tu almacén, quiosco o dulcería.
            Precios de fábrica, mínimo de pedido bajo y cierre directo por WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#catalogo"
              className="rounded-full bg-gradient-to-r from-coral to-pink px-7 py-3.5 font-bold text-white shadow-lg shadow-pink/30 transition hover:brightness-105 active:scale-95"
            >
              Ver catálogo
            </a>
            <a
              href="#mayorista"
              className="rounded-full bg-white px-7 py-3.5 font-bold text-maroon ring-1 ring-pink-bg transition hover:bg-pink-bg/50"
            >
              ¿Cómo comprar?
            </a>
          </motion.div>

          <p className="mt-6 font-script text-2xl text-pink">¡Endulza tu día!</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-pink-soft/40 via-candy-yellow/30 to-candy-teal/30 blur-2xl" />
          <div className="relative grid grid-cols-2 gap-4">
            {HERO_IMGS.map((img, i) => (
              <motion.div
                key={i}
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={reduce ? undefined : { duration: 2.4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="relative grid h-32 w-32 place-items-center overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-pink-bg sm:h-40 sm:w-40"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                  priority={i < 2}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
