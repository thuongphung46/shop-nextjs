/** @format */

"use client";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";
import { MouseEvent } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem, getQtyInCart } = useCart();
  const current = getQtyInCart(product.id);
  const isOutOfStock = product.stock <= 0;

  // Cho sản phẩm đặt trước, giới hạn tối đa 10, cho sản phẩm có sẵn thì theo stock
  const maxAllowed = isOutOfStock ? 10 : product.stock;
  const isMaxQty = current >= maxAllowed;
  const disabled = isMaxQty; // Chỉ disable khi đã đạt số lượng tối đa

  function handleAdd(e: MouseEvent<HTMLButtonElement>) {
    if (isOutOfStock) {
      // Thêm sản phẩm đặt trước vào giỏ hàng như bình thường
      addItem(product, 1);

      // Hiển thị thông báo đặt trước
      alert(
        `Đã thêm "${product.name}" vào giỏ hàng (ĐẶT TRƯỚC)\n\n⚠️ THÔNG BÁO QUAN TRỌNG:\n• Thời gian giao hàng: 6-7 ngày\n• Bắt buộc thanh toán trước\n• Vui lòng thanh toán trước cho shop\n\nShop xin chân thành cảm ơn! 🙏`
      );

      // Tạo hiệu ứng giỏ hàng như bình thường
      const rect = (
        e.currentTarget as HTMLButtonElement
      ).getBoundingClientRect();
      window.dispatchEvent(
        new CustomEvent("cart:add", {
          detail: {
            image: product.image,
            from: { x: rect.left, y: rect.top, w: rect.width, h: rect.height },
          },
        })
      );
      return;
    }

    addItem(product, 1);
    const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
    window.dispatchEvent(
      new CustomEvent("cart:add", {
        detail: {
          image: product.image,
          from: { x: rect.left, y: rect.top, w: rect.width, h: rect.height },
        },
      })
    );
  }

  // Xác định text và style của button
  let buttonText = "Thêm vào giỏ";
  let buttonClass = "btn-primary";

  if (isOutOfStock) {
    buttonText = isMaxQty ? "Đã đặt tối đa" : "Đặt trước";
    buttonClass = isMaxQty
      ? "btn-primary opacity-50 cursor-not-allowed"
      : "btn-secondary bg-orange-500 hover:bg-orange-600 text-white border-orange-500";
  } else if (isMaxQty) {
    buttonText = "Hết hàng";
    buttonClass = "btn-primary opacity-50 cursor-not-allowed";
  }

  return (
    <button onClick={handleAdd} disabled={disabled} className={buttonClass}>
      {buttonText}
    </button>
  );
}
