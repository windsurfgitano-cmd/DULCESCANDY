"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import {
  PRODUCTOS,
  MIN_PEDIDO_CLP,
  type Producto,
} from "./catalog";

export interface CartLine {
  sku: string;
  cajas: number;
}

interface CartState {
  lines: CartLine[];
}

type CartAction =
  | { type: "ADD"; sku: string; cajas: number }
  | { type: "SET"; sku: string; cajas: number }
  | { type: "REMOVE"; sku: string }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; state: CartState };

const STORAGE_KEY = "dulces-candy-cart-v1";

function productBySku(sku: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.sku === sku);
}

function clampCajas(sku: string, cajas: number): number {
  const p = productBySku(sku);
  const min = p ? p.min_cajas : 1;
  return Math.max(min, Math.floor(cajas));
}

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return action.state;
    case "ADD": {
      const existing = state.lines.find((l) => l.sku === action.sku);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.sku === action.sku
              ? { ...l, cajas: clampCajas(action.sku, l.cajas + action.cajas) }
              : l
          ),
        };
      }
      return {
        lines: [
          ...state.lines,
          { sku: action.sku, cajas: clampCajas(action.sku, action.cajas) },
        ],
      };
    }
    case "SET":
      return {
        lines: state.lines.map((l) =>
          l.sku === action.sku
            ? { ...l, cajas: clampCajas(action.sku, action.cajas) }
            : l
        ),
      };
    case "REMOVE":
      return { lines: state.lines.filter((l) => l.sku !== action.sku) };
    case "CLEAR":
      return { lines: [] };
    default:
      return state;
  }
}

export interface CartLineDetailed extends CartLine {
  producto: Producto;
  subtotal: number;
}

interface CartContextValue {
  lines: CartLineDetailed[];
  totalCajas: number;
  totalItems: number;
  subtotal: number;
  cumpleMinimo: boolean;
  faltaParaMinimo: number;
  add: (sku: string, cajas?: number) => void;
  set: (sku: string, cajas: number) => void;
  remove: (sku: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });

  // Hydrate from localStorage once on mount (client only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartState;
        if (parsed && Array.isArray(parsed.lines)) {
          // sanitize against current catalog
          const clean = parsed.lines
            .filter((l) => productBySku(l.sku))
            .map((l) => ({ sku: l.sku, cajas: clampCajas(l.sku, l.cajas) }));
          dispatch({ type: "HYDRATE", state: { lines: clean } });
        }
      }
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  // Persist on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage may be full/blocked */
    }
  }, [state]);

  const add = useCallback((sku: string, cajas = 1) => {
    dispatch({ type: "ADD", sku, cajas });
  }, []);
  const set = useCallback((sku: string, cajas: number) => {
    dispatch({ type: "SET", sku, cajas });
  }, []);
  const remove = useCallback((sku: string) => {
    dispatch({ type: "REMOVE", sku });
  }, []);
  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const lines: CartLineDetailed[] = state.lines
      .map((l) => {
        const producto = productBySku(l.sku);
        if (!producto) return null;
        return {
          ...l,
          producto,
          subtotal: producto.precio_caja * l.cajas,
        };
      })
      .filter((x): x is CartLineDetailed => x !== null);

    const subtotal = lines.reduce((acc, l) => acc + l.subtotal, 0);
    const totalCajas = lines.reduce((acc, l) => acc + l.cajas, 0);
    const totalItems = lines.reduce(
      (acc, l) => acc + l.cajas * l.producto.unidades_caja,
      0
    );
    const cumpleMinimo = subtotal >= MIN_PEDIDO_CLP;

    return {
      lines,
      totalCajas,
      totalItems,
      subtotal,
      cumpleMinimo,
      faltaParaMinimo: Math.max(0, MIN_PEDIDO_CLP - subtotal),
      add,
      set,
      remove,
      clear,
    };
  }, [state, add, set, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
