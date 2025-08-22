/** @format */

"use client";
import { useEffect, useState } from "react";
import { Product } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import ProductUnitSelector from "@/components/ProductUnitSelector";
import { currency } from "@/utils/format";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Skeleton from "@/components/Skeleton";

type Props = {
  product: Product;
};

export default function ProductDetailClient({ product }: Props) {
  const [loading, setLoading] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState(product.price);
  const [selectedUnit, setSelectedUnit] = useState("");

  // Tạo product object với giá và đơn vị được chọn
  const productWithSelectedUnit = {
    ...product,
    price: selectedPrice,
    unit: selectedUnit || product.unit || "sản phẩm",
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  const handleUnitChange = (value: number, price: number, label: string) => {
    setSelectedPrice(price);
    setSelectedUnit(label);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="relative">
        <ImageWithSkeleton
          src={product.image}
          alt={product.name}
          className="w-full h-80 rounded-lg"
        />
        {/* Overlay "Hết hàng" khi out of stock */}
        {product.stock <= 0 && (
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
            <div className="relative transform -rotate-12">
              <div className="bg-red-600/90 text-white text-xl md:text-2xl font-bold px-6 py-3 shadow-lg border-2 border-red-700">
                HẾT HÀNG
              </div>
            </div>
          </div>
        )}
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
                {currency(selectedPrice)}
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

            {/* Unit Selector */}
            <div className="mt-4">
              <ProductUnitSelector
                product={product}
                onUnitChange={handleUnitChange}
              />
            </div>
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
            <div className="mt-6 space-y-4">
              {/* Nút mua hàng chính */}
              <div className="flex gap-2">
                <AddToCartButton product={productWithSelectedUnit} />
                <a href="/" className="btn-secondary">
                  Quay lại
                </a>
              </div>

              {/* Nút mua hàng trên các nền tảng khác */}
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Hoặc mua trên:
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={
                      product.shopeeLink ||
                      `https://shopee.vn/search?keyword=${encodeURIComponent(product.name)}&sortBy=relevancy`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[#EE4D2D] hover:bg-[#D73C1A] text-white rounded-lg font-medium transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L13.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L10.91 8.26L12 2Z" />
                    </svg>
                    {product.shopeeLink ? "Mua trên Shopee" : "Tìm trên Shopee"}
                  </a>

                  <a
                    href={
                      product.tiktokShopLink ||
                      `https://vn.shop.tiktok.com/search/product?q=${encodeURIComponent(product.name)}&source=search`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.12 20.9a6.34 6.34 0 0 0 10.86-4.43V7.93a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.16-.36z" />
                    </svg>
                    {product.tiktokShopLink
                      ? "Mua trên TikTok Shop"
                      : "Tìm trên TikTok Shop"}
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
