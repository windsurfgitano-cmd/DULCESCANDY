export type CategoriaId =
  | "espirales"
  | "emoji"
  | "frutales"
  | "figuras"
  | "surtidos";

export interface Categoria {
  id: CategoriaId;
  nombre: string;
  emoji: string;
}

export interface Producto {
  sku: string;
  nombre: string;
  categoria: CategoriaId;
  descripcion: string;
  presentacion: string;
  unidades_caja: number;
  precio_caja: number;
  precio_unidad_ref: number;
  min_cajas: number;
  destacado: boolean;
  img: string;
}

export interface CatalogMeta {
  moneda: string;
  iva_incluido: boolean;
  min_pedido_clp: number;
  actualizado: string;
}

export const MIN_PEDIDO_CLP = 50000;

// Color de resplandor (glow) por categoría — usado en el fondo difuminado de las cards
export const GLOW_POR_CATEGORIA: Record<CategoriaId, string> = {
  espirales: "#f0a5c8", // rosa arcoíris
  emoji: "#f5cd3a", // amarillo emoji
  frutales: "#8ec63f", // verde cítrico
  figuras: "#f2a2c0", // rosa figura
  surtidos: "#c98ad1", // púrpura mix
};

export const CATEGORIAS: Categoria[] = [
  { id: "espirales", nombre: "Paletas Espiral", emoji: "🌀" },
  { id: "emoji", nombre: "Paletas Emoji", emoji: "😎" },
  { id: "frutales", nombre: "Frutales & Cítricos", emoji: "🍋" },
  { id: "figuras", nombre: "Figuras & Formas", emoji: "🐰" },
  { id: "surtidos", nombre: "Surtidos & Mix", emoji: "🎁" },
];

export const PRODUCTOS: Producto[] = [
  {
    sku: "DC-ESP-001",
    nombre: "Espiral Arcoíris Grande",
    categoria: "espirales",
    descripcion: "Paleta espiral multicolor tamaño XL. La estrella del mostrador.",
    presentacion: "Caja x 24 unidades",
    unidades_caja: 24,
    precio_caja: 18990,
    precio_unidad_ref: 791,
    min_cajas: 2,
    destacado: true,
    img: "/productos/esp-001.webp",
  },
  {
    sku: "DC-ESP-002",
    nombre: "Espiral Mini Colores",
    categoria: "espirales",
    descripcion: "Espiral pequeña, ideal para bolsas de dulces y piñatas.",
    presentacion: "Caja x 50 unidades",
    unidades_caja: 50,
    precio_caja: 22990,
    precio_unidad_ref: 460,
    min_cajas: 1,
    destacado: false,
    img: "/productos/esp-002.webp",
  },
  {
    sku: "DC-EMO-001",
    nombre: "Emoji Lentes de Sol",
    categoria: "emoji",
    descripcion: "Paleta cara feliz con lentes de sol. Sabor tutti-frutti.",
    presentacion: "Caja x 36 unidades",
    unidades_caja: 36,
    precio_caja: 20490,
    precio_unidad_ref: 569,
    min_cajas: 1,
    destacado: true,
    img: "/productos/emo-001.webp",
  },
  {
    sku: "DC-EMO-002",
    nombre: "Emoji Beso Corazón",
    categoria: "emoji",
    descripcion: "Paleta emoji lanzando un beso con corazón. Sabor cereza.",
    presentacion: "Caja x 36 unidades",
    unidades_caja: 36,
    precio_caja: 20490,
    precio_unidad_ref: 569,
    min_cajas: 1,
    destacado: false,
    img: "/productos/emo-002.webp",
  },
  {
    sku: "DC-FRU-001",
    nombre: "Rodaja Limón",
    categoria: "frutales",
    descripcion: "Paleta rodaja de limón, verde cítrico. Sabor ácido refrescante.",
    presentacion: "Caja x 40 unidades",
    unidades_caja: 40,
    precio_caja: 17990,
    precio_unidad_ref: 450,
    min_cajas: 1,
    destacado: false,
    img: "/productos/fru-001.webp",
  },
  {
    sku: "DC-FRU-002",
    nombre: "Rodaja Naranja",
    categoria: "frutales",
    descripcion: "Paleta rodaja de naranja. Sabor cítrico dulce.",
    presentacion: "Caja x 40 unidades",
    unidades_caja: 40,
    precio_caja: 17990,
    precio_unidad_ref: 450,
    min_cajas: 1,
    destacado: false,
    img: "/productos/fru-002.webp",
  },
  {
    sku: "DC-FRU-003",
    nombre: "Mora Silvestre",
    categoria: "frutales",
    descripcion: "Paleta morada forma de mora con hoja verde. Sabor frutos del bosque.",
    presentacion: "Caja x 40 unidades",
    unidades_caja: 40,
    precio_caja: 18490,
    precio_unidad_ref: 462,
    min_cajas: 1,
    destacado: true,
    img: "/productos/fru-003.webp",
  },
  {
    sku: "DC-FIG-001",
    nombre: "Conejito Rosa",
    categoria: "figuras",
    descripcion: "Paleta figura de conejo. Sabor frutilla crema. Ideal Pascua/eventos.",
    presentacion: "Caja x 30 unidades",
    unidades_caja: 30,
    precio_caja: 19990,
    precio_unidad_ref: 666,
    min_cajas: 1,
    destacado: false,
    img: "/productos/fig-001.webp",
  },
  {
    sku: "DC-FIG-002",
    nombre: "Zanahoria Divertida",
    categoria: "figuras",
    descripcion: "Paleta forma zanahoria con hojas verdes. Sabor naranja.",
    presentacion: "Caja x 30 unidades",
    unidades_caja: 30,
    precio_caja: 19990,
    precio_unidad_ref: 666,
    min_cajas: 1,
    destacado: false,
    img: "/productos/fig-002.webp",
  },
  {
    sku: "DC-FIG-003",
    nombre: "Flor de Colores",
    categoria: "figuras",
    descripcion: "Paleta redonda con patrón de flores. Sabor mix frutal.",
    presentacion: "Caja x 30 unidades",
    unidades_caja: 30,
    precio_caja: 18990,
    precio_unidad_ref: 633,
    min_cajas: 1,
    destacado: false,
    img: "/productos/fig-003.webp",
  },
  {
    sku: "DC-SUR-001",
    nombre: "Mix Fiesta Surtido",
    categoria: "surtidos",
    descripcion:
      "Caja surtida con todos los modelos mezclados. El mejor valor para revendedores.",
    presentacion: "Caja x 100 unidades surtidas",
    unidades_caja: 100,
    precio_caja: 39990,
    precio_unidad_ref: 400,
    min_cajas: 1,
    destacado: true,
    img: "/productos/sur-001.webp",
  },
  {
    sku: "DC-SUR-002",
    nombre: "Mega Bulto Mayorista",
    categoria: "surtidos",
    descripcion: "Bulto de 6 cajas surtidas. Máximo descuento por volumen.",
    presentacion: "Bulto x 6 cajas (600 unidades)",
    unidades_caja: 600,
    precio_caja: 219990,
    precio_unidad_ref: 366,
    min_cajas: 1,
    destacado: false,
    img: "/productos/sur-002.webp",
  },
];

export const WHATSAPP_NUMBER = "56973343767";
export const EJECUTIVA = "Soledad López";

export function formatCLP(n: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(n);
}
