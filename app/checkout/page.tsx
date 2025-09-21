/** @format */

"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { currency } from "@/utils/format";

export default function CheckoutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { items, subtotal, shipping, discount, total, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [method, setMethod] = useState<"cod" | "momo">("cod");

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?callbackUrl=/checkout");
    }
  }, [status, router]);

  // Kiểm tra có sản phẩm đặt trước không
  const hasPreOrderItems = items.some((item) => item.stock <= 0);

  // Tự động chuyển sang MoMo nếu có sản phẩm đặt trước
  useEffect(() => {
    if (hasPreOrderItems) {
      setMethod("momo");
    }
  }, [hasPreOrderItems]);

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault();

    // Kiểm tra nếu có sản phẩm đặt trước và chọn COD
    if (hasPreOrderItems && method === "cod") {
      alert(
        "⚠️ Sản phẩm đặt trước bắt buộc thanh toán trước!\n\nVui lòng chọn phương thức thanh toán MoMo để hoàn tất đơn hàng."
      );
      return;
    }

    setLoading(true);
    const form = new FormData(e.target as HTMLFormElement);
    const payload = {
      customer: {
        name: String(form.get("name")),
        email: String(form.get("email")),
        phone: String(form.get("phone")),
        address: String(form.get("address")),
      },
      items: items.map((i) => ({
        id: i.id,
        quantity: i.quantity,
        price: i.price,
      })),
      method,
    };

    if (method === "momo") {
      const res = await fetch("/api/momo", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.payUrl) {
        window.location.href = data.payUrl;
        return;
      } else {
        alert(data.message || "Không tạo được phiên MoMo");
      }
      setLoading(false);
      return;
    }

    // COD mock
    await new Promise((r) => setTimeout(r, 700));
    setOrderId("ORD-" + Math.random().toString(36).slice(2, 8).toUpperCase());
    clear();
    setDone(true);
    setLoading(false);
  }

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Đang kiểm tra đăng nhập...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect to login
  }

  if (done) {
    return (
      <div>
        <h1 className="text-xl font-bold">Đặt hàng thành công 🎉</h1>
        <p className="text-muted-foreground">
          Mã đơn: <strong>{orderId}</strong>
        </p>
        <Link href="/" className="btn-primary mt-3 inline-flex">
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1 className="text-xl font-bold mb-2">Thanh toán</h1>
      {items.length === 0 ? (
        <div>
          Giỏ hàng trống.{" "}
          <Link href="/" className="underline">
            Mua sắm ngay
          </Link>
        </div>
      ) : (
        <div>
          {/* Thông báo đặt trước */}
          {hasPreOrderItems && (
            <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="text-orange-500 text-xl">⚠️</div>
                <div>
                  <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-2">
                    THÔNG BÁO ĐẶT TRƯỚC
                  </h3>
                  <div className="text-orange-600 dark:text-orange-300 text-sm space-y-1">
                    <p>• Đơn hàng có sản phẩm đặt trước</p>
                    <p>
                      • Thời gian giao hàng: <strong>6-7 ngày</strong>
                    </p>
                    <p>
                      • <strong>Bắt buộc thanh toán trước</strong>
                    </p>
                    <p>• Vui lòng thanh toán trước cho shop</p>
                    <p className="font-medium">
                      Shop xin chân thành cảm ơn! 🙏
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <form className="grid grid-cols-1 gap-2" onSubmit={handleCheckout}>
              <input
                required
                name="name"
                className="rounded-xl border border-border bg-card px-3 py-2"
                placeholder="Họ và tên"
                defaultValue={session?.user?.name || ""}
              />
              <input
                required
                name="email"
                className="rounded-xl border border-border bg-card px-3 py-2"
                placeholder="Email"
                type="email"
                defaultValue={session?.user?.email || ""}
              />
              <input
                required
                name="phone"
                className="rounded-xl border border-border bg-card px-3 py-2"
                placeholder="Số điện thoại"
              />
              <input
                required
                name="address"
                className="rounded-xl border border-border bg-card px-3 py-2"
                placeholder="Địa chỉ giao hàng"
              />
              <div className="flex gap-2 items-center">
                <label
                  className={`px-2 py-1 rounded-lg border border-border ${hasPreOrderItems ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <input
                    type="radio"
                    name="method"
                    checked={method === "cod"}
                    onChange={() => setMethod("cod")}
                    disabled={hasPreOrderItems}
                  />{" "}
                  &nbsp;COD
                  {hasPreOrderItems && (
                    <span className="text-red-500 text-xs ml-1">
                      (Không khả dụng)
                    </span>
                  )}
                </label>
                <label className="px-2 py-1 rounded-lg border border-border">
                  <input
                    type="radio"
                    name="method"
                    checked={method === "momo"}
                    onChange={() => setMethod("momo")}
                  />{" "}
                  &nbsp;MoMo
                  {hasPreOrderItems && (
                    <span className="text-green-500 text-xs ml-1">
                      (Bắt buộc)
                    </span>
                  )}
                </label>
              </div>
              <div className="grid grid-cols-2 gap-2 max-w-sm">
                <div className="text-muted-foreground">Tạm tính</div>
                <div className="text-right">{currency(subtotal())}</div>
                <div className="text-muted-foreground">Phí vận chuyển</div>
                <div className="text-right">{currency(shipping())}</div>
                <div className="text-muted-foreground">Giảm giá</div>
                <div className="text-right">-{currency(discount())}</div>
                <div className="font-semibold">TỔNG</div>
                <div className="text-right font-semibold">
                  {currency(total())}
                </div>
              </div>
              <button className="btn-primary" disabled={loading} type="submit">
                {loading ? "Đang xử lý..." : "Đặt hàng"}
              </button>
            </form>
            <div className="rounded-2xl border border-border bg-card p-4">
              <h3 className="font-semibold mb-2">Đơn hàng</h3>
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {items.map((it) => (
                    <tr key={it.id}>
                      <td className="py-1">
                        <div className="flex items-center gap-2">
                          <span>
                            {it.name} × {it.quantity}
                          </span>
                          {it.stock <= 0 && (
                            <span className="px-1.5 py-0.5 text-xs bg-orange-500 text-white rounded">
                              ĐẶT TRƯỚC
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-1 text-right">
                        {currency(it.price * it.quantity)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-1 font-semibold">Tổng cộng</td>
                    <td className="py-1 text-right font-semibold">
                      {currency(total())}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
