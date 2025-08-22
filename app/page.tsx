/** @format */

import { Suspense } from "react";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import SearchableProductList from "@/components/SearchableProductList";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Danh sách sản phẩm</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
