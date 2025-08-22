'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { currency } from '@/utils/format';

export default function CheckoutPage() {
  const { items, subtotal, shipping, discount, total, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [method, setMethod] = useState<'cod'|'momo'>('cod');

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target as HTMLFormElement);
    const payload = {
      customer: {
        name: String(form.get('name')),
        email: String(form.get('email')),
        phone: String(form.get('phone')),
        address: String(form.get('address')),
      },
      items: items.map(i => ({ id: i.id, quantity: i.quantity, price: i.price })),
      method
    };

    if (method === 'momo') {
      const res = await fetch('/api/momo', { method: 'POST', body: JSON.stringify(payload) });
      const data = await res.json();
      if (res.ok && data.payUrl) {
        window.location.href = data.payUrl;
        return;
      } else {
        alert(data.message || 'Không tạo được phiên MoMo');
      }
      setLoading(false);
      return;
    }

    // COD mock
    await new Promise(r => setTimeout(r, 700));
    setOrderId('ORD-' + Math.random().toString(36).slice(2,8).toUpperCase());
    clear();
    setDone(true);
    setLoading(false);
  }

  if (done) {
    return (
      <div>
        <h1 className="text-xl font-bold">Đặt hàng thành công 🎉</h1>
        <p className="text-muted-foreground">Mã đơn: <strong>{orderId}</strong></p>
        <Link href="/" className="btn-primary mt-3 inline-flex">Tiếp tục mua sắm</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1 className="text-xl font-bold mb-2">Thanh toán</h1>
      {items.length === 0 ? (
        <div>Giỏ hàng trống. <Link href="/" className="underline">Mua sắm ngay</Link></div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <form className="grid grid-cols-1 gap-2" onSubmit={handleCheckout}>
            <input required name="name" className="rounded-xl border border-border bg-card px-3 py-2" placeholder="Họ và tên" />
            <input required name="email" className="rounded-xl border border-border bg-card px-3 py-2" placeholder="Email" type="email" />
            <input required name="phone" className="rounded-xl border border-border bg-card px-3 py-2" placeholder="Số điện thoại" />
            <input required name="address" className="rounded-xl border border-border bg-card px-3 py-2" placeholder="Địa chỉ giao hàng" />
            <div className="flex gap-2 items-center">
              <label className="px-2 py-1 rounded-lg border border-border"><input type="radio" name="method" checked={method==='cod'} onChange={()=>setMethod('cod')} /> &nbsp;COD</label>
              <label className="px-2 py-1 rounded-lg border border-border"><input type="radio" name="method" checked={method==='momo'} onChange={()=>setMethod('momo')} /> &nbsp;MoMo</label>
            </div>
            <div className="grid grid-cols-2 gap-2 max-w-sm">
              <div className="text-muted-foreground">Tạm tính</div><div className="text-right">{currency(subtotal())}</div>
              <div className="text-muted-foreground">Phí vận chuyển</div><div className="text-right">{currency(shipping())}</div>
              <div className="text-muted-foreground">Giảm giá</div><div className="text-right">-{currency(discount())}</div>
              <div className="font-semibold">TỔNG</div><div className="text-right font-semibold">{currency(total())}</div>
            </div>
            <button className="btn-primary" disabled={loading} type="submit">{loading ? 'Đang xử lý...' : 'Đặt hàng'}</button>
          </form>
          <div className="rounded-2xl border border-border bg-card p-4">
            <h3 className="font-semibold mb-2">Đơn hàng</h3>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {items.map(it => (
                  <tr key={it.id}>
                    <td className="py-1">{it.name} × {it.quantity}</td>
                    <td className="py-1 text-right">{currency(it.price*it.quantity)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-1 font-semibold">Tổng cộng</td>
                  <td className="py-1 text-right font-semibold">{currency(total())}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
