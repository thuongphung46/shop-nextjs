'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/lib/products';
import { coupons as allCoupons, type Coupon } from '@/lib/coupons';

export type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  addItem: (p: Product, qty?: number) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
  subtotal: () => number;
  shipping: () => number;
  discount: () => number;
  total: () => number;
  applyCoupon: (code: string) => string | null;
  coupon: Coupon | null;
  totalItems: () => number;
  getQtyInCart: (id: number) => number;
};

const CartCtx = createContext<CartState | null>(null);
const STORAGE_KEY = 'shoppro.portal.full.cart.v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState<Coupon | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setItems(parsed.items || []);
        setCoupon(parsed.coupon || null);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, coupon }));
    } catch {}
  }, [items, coupon]);

  function totalItems() { return items.reduce((a, b) => a + b.quantity, 0); }
  function getQtyInCart(id: number) { return items.find(it => it.id === id)?.quantity ?? 0; }

  const api = useMemo(() => ({
    items,
    addItem: (p: Product, qty = 1) => {
      setItems(prev => {
        const existing = prev.find(it => it.id === p.id);
        const currentQty = existing?.quantity ?? 0;
        const nextQty = Math.min(currentQty + qty, p.stock);
        if (!existing) return [...prev, { ...p, quantity: nextQty }];
        return prev.map(it => (it.id === p.id ? { ...it, quantity: nextQty } : it));
      });
    },
    removeItem: (id: number) => setItems(prev => prev.filter(it => it.id !== id)),
    updateQty: (id: number, qty: number) => setItems(prev => prev.map(it => it.id === id ? { ...it, quantity: Math.max(1, Math.min(qty, it.stock)) } : it)),
    clear: () => { setItems([]); setCoupon(null); },
    subtotal: () => items.reduce((acc, it) => acc + it.price * it.quantity, 0),
    shipping: () => {
      const s = items.reduce((count, it) => count + it.quantity, 0);
      return s === 0 ? 0 : 30000 + Math.max(0, s - 1) * 10000;
    },
    discount: () => {
      const sub = items.reduce((acc, it) => acc + it.price * it.quantity, 0);
      if (!coupon) return 0;
      if (coupon.minSubtotal && sub < coupon.minSubtotal) return 0;
      return coupon.type === 'percent' ? Math.floor(sub * coupon.value / 100) : Math.min(sub, coupon.value);
    },
    total: () => {
      const sub = items.reduce((acc, it) => acc + it.price * it.quantity, 0);
      const ship = items.length === 0 ? 0 : 30000 + Math.max(0, totalItems() - 1) * 10000;
      const disc = (() => {
        if (!coupon) return 0;
        if (coupon.minSubtotal && sub < coupon.minSubtotal) return 0;
        return coupon.type === 'percent' ? Math.floor(sub * coupon.value / 100) : Math.min(sub, coupon.value);
      })();
      return Math.max(0, sub + ship - disc);
    },
    applyCoupon: (code: string) => {
      const c = allCoupons.find(x => x.code.toUpperCase() === code.trim().toUpperCase());
      if (!c) return 'Mã không hợp lệ';
      setCoupon(c);
      return null;
    },
    coupon,
    totalItems,
    getQtyInCart,
  }), [items, coupon]);

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
