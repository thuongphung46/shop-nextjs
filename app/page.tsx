/** @format */

import { Suspense } from "react";
import { Metadata } from "next";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import SearchableProductList from "@/components/SearchableProductList";

export const metadata: Metadata = {
  title: "Shop Nhà Làm - Sản phẩm thủ công chất lượng cao",
  description:
    "Khám phá bộ sưu tập sản phẩm thủ công độc đáo tại Shop Nhà Làm. Gia vị rừng, mật ong nguyên chất, thịt sấy và nhiều sản phẩm chất lượng khác.",
  keywords: [
    "shop nhà làm",
    "sản phẩm thủ công",
    "gia vị rừng",
    "mật ong nguyên chất",
    "thịt sấy",
    "chất lượng cao",
  ],
  openGraph: {
    title: "Shop Nhà Làm - Sản phẩm thủ công chất lượng cao",
    description:
      "Khám phá bộ sưu tập sản phẩm thủ công độc đáo tại Shop Nhà Làm",
    type: "website",
    siteName: "Shop Nhà Làm",
    images: [
      {
        url: "/logo-large.svg",
        width: 120,
        height: 40,
        alt: "Shop Nhà Làm Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Shop Nhà Làm - Sản phẩm thủ công chất lượng cao",
    description:
      "Khám phá bộ sưu tập sản phẩm thủ công độc đáo tại Shop Nhà Làm",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Danh sách sản phẩm</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <SearchableProductList />
      </Suspense>
    </div>
  );
}
