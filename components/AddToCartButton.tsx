'use client';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/products';
import { MouseEvent } from 'react';

export default function AddToCartButton({ product }: { product: Product }){
  const { addItem, getQtyInCart } = useCart();
  const current = getQtyInCart(product.id);
  const disabled = product.stock <= 0 || current >= product.stock;
  function handleAdd(e: MouseEvent<HTMLButtonElement>){
    addItem(product, 1);
    const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
    window.dispatchEvent(new CustomEvent('cart:add', { detail: { image: product.image, from: { x: rect.left, y: rect.top, w: rect.width, h: rect.height } } }));
  }
  return <button onClick={handleAdd} disabled={disabled} className="btn-primary">{disabled ? 'Hết hàng' : 'Thêm vào giỏ'}</button>;
}
