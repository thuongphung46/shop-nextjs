/** @format */

"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useCart } from "@/context/CartContext";
import { currency } from "@/utils/format";
import { useState } from "react";
import Contact from "@/components/Contact";

export default function CartPage() {
  const { data: session } = useSession();
  const {
    items,
    removeItem,
    updateQty,
    subtotal,
    shipping,
    discount,
    total,
    applyCoupon,
    coupon,
  } = useCart();
  const [code, setCode] = useState("");
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Giỏ hàng</h1>
      {items.length === 0 ? (
        <div>
          Giỏ hàng trống.{" "}
          <Link href="/" className="underline">
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Desktop table view */}
          <div className="hidden md:block">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-muted-foreground">
                  <th className="text-left p-2 border-b border-border">
                    Sản phẩm
                  </th>
                  <th className="text-left p-2 border-b border-border">Giá</th>
                  <th className="text-left p-2 border-b border-border">
                    Số lượng
                  </th>
                  <th className="text-left p-2 border-b border-border">
                    Tạm tính
                  </th>
                  <th className="p-2 border-b border-border"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((it) => (
                  <tr key={it.id}>
                    <td className="p-2 flex items-center gap-2">
                      <img
                        src={it.image}
                        className="w-16 h-12 rounded-md object-cover border border-border"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          {it.name}
                          {it.stock <= 0 && (
                            <span className="px-2 py-1 text-xs bg-orange-500 text-white rounded-full">
                              ĐẶT TRƯỚC
                            </span>
                          )}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {it.category} •{" "}
                          {it.stock <= 0 ? "Hết hàng" : `Còn ${it.stock}`}
                        </div>
                        {it.stock <= 0 && (
                          <div className="text-orange-600 text-xs font-medium mt-1">
                            ⚠️ Giao hàng: 6-7 ngày, thanh toán trước
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-2">{currency(it.price)}</td>
                    <td className="p-2">
                      <input
                        className="w-20 rounded-xl border border-border bg-card px-2 py-1"
                        type="number"
                        min={1}
                        max={it.stock <= 0 ? 10 : it.stock}
                        value={it.quantity}
                        onChange={(e) =>
                          updateQty(it.id, Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="p-2">{currency(it.price * it.quantity)}</td>
                    <td className="p-2">
                      <button
                        className="btn-secondary"
                        onClick={() => removeItem(it.id)}
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile list view */}
          <div className="md:hidden space-y-3">
            {items.map((it) => (
              <div
                key={it.id}
                className="border border-border rounded-lg p-3 bg-card"
              >
                <div className="flex gap-3">
                  <img
                    src={it.image}
                    className="w-16 h-16 rounded-md object-cover border border-border flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm truncate">
                        {it.name}
                      </h3>
                      {it.stock <= 0 && (
                        <span className="px-2 py-1 text-xs bg-orange-500 text-white rounded-full flex-shrink-0">
                          ĐẶT TRƯỚC
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-xs">
                      {it.category} •{" "}
                      {it.stock <= 0 ? "Hết hàng" : `Còn ${it.stock}`}
                    </p>
                    {it.stock <= 0 && (
                      <div className="text-orange-600 text-xs font-medium mt-1">
                        ⚠️ Giao hàng: 6-7 ngày, thanh toán trước
                      </div>
                    )}
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-medium text-primary">
                        {currency(it.price)}
                      </span>
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-muted-foreground">
                          SL:
                        </label>
                        <input
                          className="w-16 rounded-lg border border-border bg-background px-2 py-1 text-sm"
                          type="number"
                          min={1}
                          max={it.stock <= 0 ? 10 : it.stock}
                          value={it.quantity}
                          onChange={(e) =>
                            updateQty(it.id, Number(e.target.value))
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Tạm tính: {currency(it.price * it.quantity)}
                      </span>
                      <button
                        className="text-xs px-3 py-1 rounded-lg border border-border hover:bg-muted/20 text-destructive"
                        onClick={() => removeItem(it.id)}
                      >
                        Xoá
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Nhập mã giảm giá"
                className="rounded-xl border border-border bg-card px-3 py-2 w-full sm:w-auto"
              />
              <button
                className="btn-secondary whitespace-nowrap"
                onClick={() => {
                  const err = applyCoupon(code);
                  if (err) alert(err);
                  else alert("Áp mã thành công");
                }}
              >
                Áp dụng
              </button>
            </div>
            {coupon && (
              <span className="px-2 py-1 rounded-full bg-fuchsia-500/20 text-sm">
                Đang dùng: {coupon.code}
              </span>
            )}
          </div>

          <div className="border-t border-border pt-3">
            <div className="grid grid-cols-2 gap-2 max-w-md ml-auto text-sm">
              <div className="text-muted-foreground">Tạm tính</div>
              <div className="text-right">{currency(subtotal())}</div>
              <div className="text-muted-foreground">Phí vận chuyển</div>
              <div className="text-right">{currency(shipping())}</div>
              <div className="text-muted-foreground">Giảm giá</div>
              <div className="text-right text-green-600">
                -{currency(discount())}
              </div>
              <div className="font-semibold text-base border-t border-border pt-2">
                TỔNG
              </div>
              <div className="text-right font-semibold text-base border-t border-border pt-2">
                {currency(total())}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 justify-end">
            <Link className="btn-secondary text-center" href="/">
              Tiếp tục mua
            </Link>
            {session ? (
              <Link className="btn-primary text-center" href="/checkout">
                Thanh toán
              </Link>
            ) : (
              <Link
                className="btn-primary text-center"
                href="/login?callbackUrl=/checkout"
              >
                Đăng nhập để thanh toán
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
