'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/lib/products';
import AddToCartButton from '@/components/AddToCartButton';
import { currency } from '@/utils/format';
import ImageWithSkeleton from '@/components/ImageWithSkeleton';
import Skeleton from '@/components/Skeleton';

export default function ProductDetailPage(){
  const params = useParams();
  const id = Number(params?.id);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(products.find(p => p.id === id));

  useEffect(()=>{
    const t = setTimeout(()=>{ setProduct(products.find(p => p.id === id)); setLoading(false); }, 500);
    return () => clearTimeout(t);
  }, [id]);

  if (!product) return <div>Không tìm thấy sản phẩm.</div>;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ImageWithSkeleton src={product.image} alt={product.name} className="w-full h-80" />
      <div>
        {loading ? (
          <>
            <Skeleton className="h-7 w-1/2" />
            <div className="flex items-center gap-2 mt-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-16" />
            </div>
            <Skeleton className="h-4 w-full mt-3" />
            <Skeleton className="h-4 w-5/6 mt-1" />
            <Skeleton className="h-10 w-40 mt-3" />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-success font-bold">{currency(product.price)}</span>
              {product.stock>0 ? <span className="px-2 py-0.5 rounded-full bg-fuchsia-500/20">Còn {product.stock}</span> : <span className="px-2 py-0.5 rounded-full bg-rose-500/20">Hết hàng</span>}
              <span className="px-2 py-0.5 rounded-full bg-yellow-500/20">⭐ {product.rating}</span>
            </div>
            <p className="text-muted-foreground mt-2">{product.description}</p>
            <div className="mt-3 flex gap-2">
              <AddToCartButton product={product} />
              <a href="/" className="btn-secondary">Quay lại</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
