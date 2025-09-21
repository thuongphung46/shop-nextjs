/** @format */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetailClient from "@/components/ProductDetailClient";
import Contact from "@/components/Contact";

type Props = {
  params: { id: string };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Sản phẩm không tồn tại - Shop Nhà Làm",
      description: "Sản phẩm bạn tìm kiếm không tồn tại hoặc đã bị xóa.",
    };
  }

  const title = `${product.name} - Shop Nhà Làm`;
  const description = `${product.shortDescription || product.description} Giá chỉ từ ${product.price.toLocaleString("vi-VN")}₫. ${product.stock > 0 ? `Còn ${product.stock} sản phẩm trong kho.` : "Hết hàng."} Đánh giá ${product.rating}/5 sao.`;

  const keywords = [
    product.name,
    product.category,
    "shop nhà làm",
    "sản phẩm thủ công",
    "chất lượng cao",
    product.category.toLowerCase(),
    ...(product.tags || []),
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [
        {
          url: product.image,
          width: 640,
          height: 480,
          alt: product.name,
        },
      ],
      type: "website",
      siteName: "Shop Nhà Làm",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/product/${product.id}`,
    },
  };
}

// Generate static params for better performance
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: Props) {
  const id = parseInt(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <ProductDetailClient product={product} />
      <Contact />
    </div>
  );
}
