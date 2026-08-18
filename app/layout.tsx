import type { Metadata } from "next";
import { Baloo_2, Fredoka, Inter, Pacifico } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dulces Candy — Paletas y Dulces al por Mayor",
  description:
    "Catálogo mayorista de paletas y dulces. Colores, sabores y alegría en cada bocado. Pedidos por WhatsApp con Soledad López. Despacho a todo Chile.",
  openGraph: {
    title: "Dulces Candy — Mayorista de Paletas y Dulces",
    description:
      "Catálogo mayorista de paletas y dulces. ¡Endulza tu día! Pedidos por WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${baloo.variable} ${fredoka.variable} ${inter.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <a
          href="#catalogo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-maroon focus:px-5 focus:py-3 focus:font-bold focus:text-white focus:shadow-lg"
        >
          Saltar al catálogo
        </a>
        {children}
      </body>
    </html>
  );
}
