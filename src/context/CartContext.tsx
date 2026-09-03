import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "../data/products";

interface CartLine {
  productId: string;
  qty: number;
}

interface CartContextValue {
  lines: CartLine[];
  add: (productId: string) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  items: { product: Product; qty: number }[];
  total: number;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const add = (productId: string) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === productId);
      if (existing) {
        return prev.map((l) => (l.productId === productId ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { productId, qty: 1 }];
    });
  };

  const remove = (productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  };

  const setQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      remove(productId);
      return;
    }
    setLines((prev) => prev.map((l) => (l.productId === productId ? { ...l, qty } : l)));
  };

  const clear = () => setLines([]);

  const items = useMemo(
    () =>
      lines
        .map((l) => ({ product: products.find((p) => p.id === l.productId)!, qty: l.qty }))
        .filter((i) => i.product),
    [lines]
  );

  const total = useMemo(() => items.reduce((sum, i) => sum + i.product.price * i.qty, 0), [items]);
  const count = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);

  return (
    <CartContext.Provider value={{ lines, add, remove, setQty, clear, items, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
