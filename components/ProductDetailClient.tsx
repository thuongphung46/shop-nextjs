/** @format */

"use client";
import { useEffect, useState } from "react";
import { Product } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import { currency } from "@/utils/format";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Skeleton from "@/components/Skeleton";

type Props = {
  product: Product;
};

export default function ProductDetailClient({ product }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <ImageWithSkeleton
          src={product.image}
          alt={product.name}
          className="w-full h-80 rounded-lg"
        />
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description,
              image: product.image,
              category: product.category,
              brand: {
                "@type": "Brand",
                name: "Shop Nhà Làm",
              },
              offers: {
                "@type": "Offer",
                price: product.price,
                priceCurrency: "VND",
                availability:
                  product.stock > 0
                    ? "https://schema.org/InStock"
                    : "https://schema.org/OutOfStock",
                itemCondition: "https://schema.org/NewCondition",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: product.rating,
                bestRating: 5,
                worstRating: 1,
                ratingCount: Math.floor(Math.random() * 50) + 10, // Mock rating count
              },
            }),
          }}
        />
      </div>
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
              <span className="text-success font-bold">
                {currency(product.price)}
              </span>
              {product.stock > 0 ? (
                <span className="px-2 py-0.5 rounded-full bg-fuchsia-500/20">
                  Còn {product.stock}
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20">
                  Hết hàng
                </span>
              )}
              <span className="px-2 py-0.5 rounded-full bg-yellow-500/20">
                ⭐ {product.rating}
              </span>
            </div>
            <p className="text-muted-foreground mt-2">{product.description}</p>
            {product.tags && (
              <div className="mt-3">
                <h3 className="text-sm font-medium mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-1">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-secondary/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-4">
              <h2 className="font-semibold mb-2">Thông tin sản phẩm:</h2>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Danh mục: {product.category}</li>
                <li>• Đánh giá: {product.rating}/5 sao</li>
                <li>
                  • Tình trạng:{" "}
                  {product.stock > 0
                    ? `Còn ${product.stock} sản phẩm`
                    : "Hết hàng"}
                </li>
              </ul>
            </div>
            <div className="mt-4 flex gap-2">
              <AddToCartButton product={product} />
              <a href="/" className="btn-secondary">
                Quay lại
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
