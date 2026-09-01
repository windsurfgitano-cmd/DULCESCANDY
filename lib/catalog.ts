export type CategoriaId =
  | "artesanales"
  | "diseno"
  | "fiestas"
  | "temporada";

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
  unidades_caja: number; // unidades por bolsa (10 o 20)
  precio_caja: number; // precio por bolsa (CLP) — PRECIOS DE EJEMPLO, reemplazar con los de Soledad
  precio_unidad_ref: number; // precio unitario de referencia
  min_cajas: number; // mínimo de bolsas por pedido de este producto
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
  artesanales: "#f0a5c8", // rosa artesanal
  diseno: "#f5cd3a", // amarillo diseño
  fiestas: "#8ec63f", // verde fiestas
  temporada: "#c98ad1", // púrpura temporada
};

export const CATEGORIAS: Categoria[] = [
  { id: "artesanales", nombre: "Paletas Artesanales", emoji: "🌀" },
  { id: "diseno", nombre: "Paletas con Diseño", emoji: "😎" },
  { id: "fiestas", nombre: "Paletas de Fiestas", emoji: "🎉" },
  { id: "temporada", nombre: "Temporada", emoji: "🎄" },
];

/**
 * CATÁLOGO REAL — 26 productos del catálogo físico de Soledad.
 * Fuente: fotos del catálogo (base catalogo_base_dulces.xlsx).
 * PRECIOS DE EJEMPLO por bolsa — reemplazar con los precios reales cuando
 * Soledad complete la ficha / Excel de carga masiva.
 */
export const PRODUCTOS: Producto[] = [
  {
    sku: "PA-MON-010",
    nombre: "Paletas Moñas",
    categoria: "artesanales",
    descripcion: "Paleta redonda espiral multicolor, 9 cm. La clásica del mostrador.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2490,
    precio_unidad_ref: 249,
    min_cajas: 1,
    destacado: true,
    img: "/productos/PA-MON-010.webp",
  },
  {
    sku: "PA-NL-010",
    nombre: "Paletas Naranja y Limón",
    categoria: "artesanales",
    descripcion: "Forma rodaja cítrica, sabores naranja y limón, 8 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2490,
    precio_unidad_ref: 249,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-NL-010.webp",
  },
  {
    sku: "PA-COR-010",
    nombre: "Paletas Corazones",
    categoria: "diseno",
    descripcion: "Corazón con frase en el centro, fresa crema, 5 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 1990,
    precio_unidad_ref: 199,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-COR-010.webp",
  },
  {
    sku: "PA-EMO-010",
    nombre: "Paletas Emojis",
    categoria: "diseno",
    descripcion: "Caritas emoji amarillas, variedades, 7 cm. Las más pedidas.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 1990,
    precio_unidad_ref: 199,
    min_cajas: 1,
    destacado: true,
    img: "/productos/PA-EMO-010.webp",
  },
  {
    sku: "PA-PIR-010",
    nombre: "Pirulas",
    categoria: "diseno",
    descripcion: "Paleta alargada espiral multicolor, 12 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2490,
    precio_unidad_ref: 249,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-PIR-010.webp",
  },
  {
    sku: "PA-RAT-010",
    nombre: "Paletas Ratones",
    categoria: "diseno",
    descripcion: "Cabeza de ratón, sabores fresa y mora, 10 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2990,
    precio_unidad_ref: 299,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-RAT-010.webp",
  },
  {
    sku: "PA-CHO-010",
    nombre: "Paleta Chocomaní",
    categoria: "diseno",
    descripcion: "Mitad chocolate, mitad maní, 7 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2490,
    precio_unidad_ref: 249,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-CHO-010.webp",
  },
  {
    sku: "PA-MAR-010",
    nombre: "Paletas Mariposas",
    categoria: "diseno",
    descripcion: "Forma mariposa multicolor, fresa crema, 8 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2490,
    precio_unidad_ref: 249,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-MAR-010.webp",
  },
  {
    sku: "PA-PAY-010",
    nombre: "Paletas Payaso",
    categoria: "fiestas",
    descripcion: "Cara de payaso colorida, 7 cm. Ideal cumpleaños.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2990,
    precio_unidad_ref: 299,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-PAY-010.webp",
  },
  {
    sku: "PA-SAN-010",
    nombre: "Paletas Sandía",
    categoria: "fiestas",
    descripcion: "Tajada de sandía, sabor fresa, 8 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2490,
    precio_unidad_ref: 249,
    min_cajas: 1,
    destacado: true,
    img: "/productos/PA-SAN-010.webp",
  },
  {
    sku: "PA-FRU-010",
    nombre: "Paletas Frutilla",
    categoria: "fiestas",
    descripcion: "Corazón frutilla con semillas y hojas, 8 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2490,
    precio_unidad_ref: 249,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-FRU-010.webp",
  },
  {
    sku: "PA-RPQ-010",
    nombre: "Paletas Raquetas y Patitas",
    categoria: "diseno",
    descripcion: "Raqueta y pie, sabor fantasía, 9 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2990,
    precio_unidad_ref: 299,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-RPQ-010.webp",
  },
  {
    sku: "PA-UVA-010",
    nombre: "Paletas Uvas",
    categoria: "diseno",
    descripcion: "Racimo de uvas, mora y uva verde, 8 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2990,
    precio_unidad_ref: 299,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-UVA-010.webp",
  },
  {
    sku: "PA-CHM-010",
    nombre: "Chupetes y Moños",
    categoria: "diseno",
    descripcion: "Chupete anillo y paleta a franjas, sabor fantasía, 7 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2490,
    precio_unidad_ref: 249,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-CHM-010.webp",
  },
  {
    sku: "PA-SAT-020",
    nombre: "Paletas Satélites",
    categoria: "artesanales",
    descripcion: "Redonda plana multicolor, 5 cm. Formato mayorista.",
    presentacion: "Bolsa de 20 unidades",
    unidades_caja: 20,
    precio_caja: 4290,
    precio_unidad_ref: 215,
    min_cajas: 1,
    destacado: true,
    img: "/productos/PA-SAT-020.webp",
  },
  {
    sku: "PA-KOY-020",
    nombre: "Koyac",
    categoria: "artesanales",
    descripcion: "Esfera con capas de colores, sabor fantasía.",
    presentacion: "Bolsa de 20 unidades",
    unidades_caja: 20,
    precio_caja: 4290,
    precio_unidad_ref: 215,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-KOY-020.webp",
  },
  {
    sku: "PA-CR-020",
    nombre: "Paletas Corazón y Ratón",
    categoria: "artesanales",
    descripcion: "Corazón rojo y ratón verde, 5 cm.",
    presentacion: "Bolsa de 20 unidades",
    unidades_caja: 20,
    precio_caja: 4290,
    precio_unidad_ref: 215,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-CR-020.webp",
  },
  {
    sku: "PA-PAT-020",
    nombre: "Patitas",
    categoria: "artesanales",
    descripcion: "Forma de pie rosado, sabor fantasía.",
    presentacion: "Bolsa de 20 unidades",
    unidades_caja: 20,
    precio_caja: 4290,
    precio_unidad_ref: 215,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-PAT-020.webp",
  },
  {
    sku: "PA-PLA-020",
    nombre: "Paletas Planas",
    categoria: "artesanales",
    descripcion: "Paleta plana lisa, 5 cm. Rendimiento para piñatas.",
    presentacion: "Bolsa de 20 unidades",
    unidades_caja: 20,
    precio_caja: 3990,
    precio_unidad_ref: 200,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-PLA-020.webp",
  },
  {
    sku: "PA-PIR-020",
    nombre: "Pirulas",
    categoria: "diseno",
    descripcion: "Espiral multicolor 12 cm, formato bolsa de 20.",
    presentacion: "Bolsa de 20 unidades",
    unidades_caja: 20,
    precio_caja: 4290,
    precio_unidad_ref: 215,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-PIR-020.webp",
  },
  {
    sku: "PA-TET-020",
    nombre: "Chupetes (tetes)",
    categoria: "fiestas",
    descripcion: "Chupete tipo tete con anillo, ideal niños pequeños.",
    presentacion: "Bolsa de 20 unidades",
    unidades_caja: 20,
    precio_caja: 4290,
    precio_unidad_ref: 215,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-TET-020.webp",
  },
  {
    sku: "PA-CHO-020",
    nombre: "Chocomaní",
    categoria: "diseno",
    descripcion: "Chocolate y maní, formato bolsa de 20.",
    presentacion: "Bolsa de 20 unidades",
    unidades_caja: 20,
    precio_caja: 4290,
    precio_unidad_ref: 215,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-CHO-020.webp",
  },
  {
    sku: "PA-ZAN-020",
    nombre: "Zanahoria",
    categoria: "artesanales",
    descripcion: "Forma de zanahoria con hojas verdes.",
    presentacion: "Bolsa de 20 unidades",
    unidades_caja: 20,
    precio_caja: 4290,
    precio_unidad_ref: 215,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-ZAN-020.webp",
  },
  {
    sku: "PA-PAS-010",
    nombre: "Paletas Pascua",
    categoria: "temporada",
    descripcion: "Conejos, huevos y zanahorias. Producto de Pascua.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2990,
    precio_unidad_ref: 299,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-PAS-010.webp",
  },
  {
    sku: "PA-PIN-010",
    nombre: "Paletas Pino de Navidad",
    categoria: "temporada",
    descripcion: "Árbol de Navidad a franjas rojo/blanco/verde, 9 cm.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2990,
    precio_unidad_ref: 299,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-PIN-010.webp",
  },
  {
    sku: "PA-CAB-010",
    nombre: "Paletas Calabazas Halloween",
    categoria: "temporada",
    descripcion: "Forma calabaza naranja. Temporada Halloween.",
    presentacion: "Bolsa de 10 unidades",
    unidades_caja: 10,
    precio_caja: 2990,
    precio_unidad_ref: 299,
    min_cajas: 1,
    destacado: false,
    img: "/productos/PA-CAB-010.webp",
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