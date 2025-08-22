/** @format */

"use client";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import type { Product } from "@/lib/products";
import { currency } from "@/utils/format";
import ImageWithSkeleton from "./ImageWithSkeleton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-card">
      {/* Desktop view */}
      <div className="hidden md:block p-4">
        <Link href={`/product/${product.id}`}>
          <ImageWithSkeleton
            src={product.image}
            alt={product.name}
            className="w-full h-48"
          />
        </Link>
        <h3 className="mt-3 font-semibold">{product.name}</h3>
        <div className="flex items-center justify-between text-sm mt-1">
          <div>
            <span className="text-success font-bold">
              {product.unitOptions && product.unitOptions.length > 1
                ? `Từ ${currency(Math.min(...product.unitOptions.map((opt) => opt.price)))}`
                : currency(product.price)}
            </span>
            {product.unit && (
              <span className="text-muted-foreground text-xs ml-1">
                /{product.unit}
              </span>
            )}
          </div>
          <span className="text-muted-foreground">⭐ {product.rating}</span>
        </div>
        <p className="text-muted-foreground mt-1">{product.description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          <AddToCartButton product={product} />
          <Link className="btn-secondary" href={`/product/${product.id}`}>
            Chi tiết
          </Link>
        </div>
      </div>

      {/* Mobile view - simplified */}
      <Link href={`/product/${product.id}`} className="md:hidden block">
        <div className="p-3">
          <ImageWithSkeleton
            src={product.image}
            alt={product.name}
            className="w-full h-32 mb-2"
          />
          <h3 className="text-sm font-medium line-clamp-2 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground">
            Giá từ:{" "}
            <span className="text-primary font-semibold">
              {product.unitOptions && product.unitOptions.length > 1
                ? currency(
                    Math.min(...product.unitOptions.map((opt) => opt.price))
                  )
                : currency(product.price)}
            </span>
            {product.unit && <span className="ml-1">/{product.unit}</span>}
          </p>
        </div>
      </Link>
    </div>
  );
}
