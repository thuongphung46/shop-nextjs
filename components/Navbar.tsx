'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import MiniCart from './MiniCart';
import Portal from './Portal';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [q, setQ] = useState(searchParams.get('q') ?? '');

  useEffect(()=>{ setQ(searchParams.get('q') ?? ''); }, [searchParams]);

  function submit(e?: React.FormEvent){
    e?.preventDefault();
    const sp = new URLSearchParams(Array.from(searchParams.entries()));
    if(q) sp.set('q', q); else sp.delete('q');
    router.push(pathname + '?' + sp.toString());
  }

  // Lock scroll when drawer open
  useEffect(()=>{
    const html = document.documentElement;
    if (open) { html.style.overflow = 'hidden'; }
    else { html.style.overflow = ''; }
    return () => { html.style.overflow = ''; };
  }, [open]);

  return (
    <div className="sticky top-0 z-[4000] border-b border-border bg-background/80 backdrop-blur">
      <div className="container py-2 flex items-center justify-between gap-2">
        <button onClick={()=>setOpen(true)} className="px-3 py-2 rounded-xl border border-border hover:bg-muted/20">☰</button>
        <Link href="/" className="font-extrabold tracking-wide flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-fuchsia-500 to-sky-400"></span>
          <span>Shop<span className="text-fuchsia-400">Pro</span></span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MiniCart />
        </div>
      </div>

      {/* search bar under logo */}
      <div className="container pb-2 -mt-2">
        <form onSubmit={submit}>
          <div className="relative">
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm sản phẩm..." className="w-full rounded-2xl border border-border bg-card px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <button aria-label="Tìm" onClick={submit} className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl border border-border hover:bg-muted/20">🔍</button>
          </div>
        </form>
      </div>

      {/* Drawer & overlay via Portal with huge z-index */}
      <Portal>
        <div onClick={()=>setOpen(false)} className={`fixed inset-0 bg-black/45 transition-opacity ${open?'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'} z-[1000000]`} />
        <aside className={`fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-background border-r border-border transform transition-transform ${open?'translate-x-0':'-translate-x-full'} z-[1000001]`} role="dialog" aria-modal={open?'true':'false'}>
          <div className="p-3 border-b border-border flex items-center justify-between">
            <div className="font-bold">Danh mục</div>
            <button onClick={()=>setOpen(false)} className="px-3 py-1 rounded-xl border border-border">✕</button>
          </div>
          <nav className="p-3 flex flex-col gap-1">
            <Link className="nav-item" href="/">Trang chủ</Link>
            <details className="nav-details">
              <summary className="nav-item cursor-pointer">Sản phẩm</summary>
              <div className="ml-3 mt-1 flex flex-col">
                <Link className="nav-sub" href="/category/Thực phẩm gia vị">Thực phẩm gia vị</Link>
                <Link className="nav-sub" href="/category/Mật ong">Mật ong</Link>
                <Link className="nav-sub" href="/category/Thịt sấy">Thịt sấy</Link>
              </div>
            </details>
            <Link className="nav-item" href="/about">Giới thiệu</Link>
            <Link className="nav-item" href="/contact">Liên hệ</Link>
          </nav>
        </aside>
      </Portal>
    </div>
  );
}
