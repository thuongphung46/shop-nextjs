'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
export default function MiniCart(){
  const { totalItems } = useCart();
  return (
    <Link href="/cart" className="px-3 py-2 rounded-xl border border-border hover:bg-muted/20 transition" data-minicart>
      🛒 <span className="ml-1">{totalItems()}</span>
    </Link>
  );
}
