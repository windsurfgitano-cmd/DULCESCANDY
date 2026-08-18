"use client";

import { useState } from "react";
import { CartProvider } from "@/lib/cart";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Catalogo from "./Catalogo";
import { Mayorista, Footer } from "./Sections";
import CartDrawer from "./CartDrawer";

export default function StoreShell() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <CartProvider>
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Catalogo />
        <Mayorista />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </CartProvider>
  );
}
