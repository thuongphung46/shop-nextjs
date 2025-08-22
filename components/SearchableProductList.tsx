/** @format */

"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products as staticProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function SearchableProductList() {
  const sp = useSearchParams();
  const q = (sp.get("q") ?? "").toLowerCase();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(staticProducts);

  useEffect(() => {
    // giả lập fetch 600ms
    const t = setTimeout(() => {
      setProducts(staticProducts);
      setLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const list = useMemo(() => {
    const source = products;
    if (!q) return source;
    return source.filter((p) =>
      (p.name + " " + p.description + " " + p.category)
        .toLowerCase()
        .includes(q)
    );
  }, [products, q]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {loading ? (
        Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
      ) : list.length ? (
        list.map((p) => <ProductCard key={p.id} product={p} />)
      ) : (
        <div className="text-muted-foreground">Không có sản phẩm phù hợp.</div>
      )}
    </div>
  );
}
