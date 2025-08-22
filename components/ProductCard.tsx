'use client';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import type { Product } from '@/lib/products';
import { currency } from '@/utils/format';
import ImageWithSkeleton from './ImageWithSkeleton';

export default function ProductCard({ product }: { product: Product }){
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
      <Link href={`/product/${product.id}`}>
        <ImageWithSkeleton src={product.image} alt={product.name} className="w-full h-48" />
      </Link>
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <div className="flex items-center justify-between text-sm mt-1">
        <span className="text-success font-bold">{currency(product.price)}</span>
        <span className="text-muted-foreground">⭐ {product.rating}</span>
      </div>
      <p className="text-muted-foreground mt-1">{product.description}</p>
      <div className="flex gap-2 mt-3 flex-wrap">
        <AddToCartButton product={product} />
        <Link className="btn-secondary" href={`/product/${product.id}`}>Chi tiết</Link>
      </div>
    </div>
  );
}
