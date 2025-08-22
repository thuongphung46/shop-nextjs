'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { currency } from '@/utils/format';
import { useState } from 'react';

export default function CartPage(){
  const { items, removeItem, updateQty, subtotal, shipping, discount, total, applyCoupon, coupon } = useCart();
  const [code, setCode] = useState('');
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Giỏ hàng</h1>
      {items.length===0 ? (
        <div>Giỏ hàng trống. <Link href="/" className="underline">Tiếp tục mua sắm</Link></div>
      ) : (
        <div className="space-y-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-muted-foreground">
                <th className="text-left p-2 border-b border-border">Sản phẩm</th>
                <th className="text-left p-2 border-b border-border">Giá</th>
                <th className="text-left p-2 border-b border-border">Số lượng</th>
                <th className="text-left p-2 border-b border-border">Tạm tính</th>
                <th className="p-2 border-b border-border"></th>
              </tr>
            </thead>
            <tbody>
              {items.map(it => (
                <tr key={it.id}>
                  <td className="p-2 flex items-center gap-2">
                    <img src={it.image} className="w-16 h-12 rounded-md object-cover border border-border" />
                    <div>
                      <div>{it.name}</div>
                      <div className="text-muted-foreground text-xs">{it.category} • Còn {it.stock}</div>
                    </div>
                  </td>
                  <td className="p-2">{currency(it.price)}</td>
                  <td className="p-2"><input className="w-20 rounded-xl border border-border bg-card px-2 py-1" type="number" min={1} max={it.stock} value={it.quantity} onChange={e=>updateQty(it.id, Number(e.target.value))} /></td>
                  <td className="p-2">{currency(it.price*it.quantity)}</td>
                  <td className="p-2"><button className="btn-secondary" onClick={()=>removeItem(it.id)}>Xoá</button></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex gap-2">
              <input value={code} onChange={e=>setCode(e.target.value)} placeholder="Nhập mã giảm giá" className="rounded-xl border border-border bg-card px-3 py-2" />
              <button className="btn-secondary" onClick={()=>{ const err = applyCoupon(code); if(err) alert(err); else alert('Áp mã thành công'); }}>Áp dụng</button>
              {coupon && <span className="px-2 py-1 rounded-full bg-fuchsia-500/20">Đang dùng: {coupon.code}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md ml-auto">
            <div className="text-muted-foreground">Tạm tính</div><div className="text-right">{currency(subtotal())}</div>
            <div className="text-muted-foreground">Phí vận chuyển</div><div className="text-right">{currency(shipping())}</div>
            <div className="text-muted-foreground">Giảm giá</div><div className="text-right">-{currency(discount())}</div>
            <div className="font-semibold">TỔNG</div><div className="text-right font-semibold">{currency(total())}</div>
          </div>

          <div className="flex gap-2 justify-end">
            <Link className="btn-secondary" href="/">Tiếp tục mua</Link>
            <Link className="btn-primary" href="/checkout">Thanh toán</Link>
          </div>
        </div>
      )}
    </div>
  );
}
