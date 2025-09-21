/** @format */

"use client";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";
import MiniCart from "./MiniCart";
import Portal from "./Portal";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  // Navbar is always visible - no scroll behavior

  // Lock scroll when drawer open
  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[4000] border-b border-border bg-background/80 backdrop-blur">
      <div className="container py-2 flex items-center justify-between gap-2">
        <button
          onClick={() => setOpen(true)}
          className="px-3 py-2 rounded-xl border border-border hover:bg-muted/20"
        >
          ☰
        </button>
        <Link
          href="/"
          className="font-extrabold tracking-wide flex items-center gap-2"
        >
          <img src="/logo.svg" alt="Shop Nhà Làm Logo" className="w-6 h-6" />
          <span>
            Shop <span className="text-fuchsia-400">Nhà Làm</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {status === "loading" ? (
            <div className="w-8 h-8 border-2 border-muted border-t-primary rounded-full animate-spin" />
          ) : session ? (
            <div className="flex items-center gap-2">
              {session.user?.image ? (
                <img
                  src={session.user.image}
                  alt={session.user?.name || "User"}
                  className="w-8 h-8 rounded-full border border-border"
                />
              ) : (
                <div className="w-8 h-8 rounded-full border border-border bg-muted flex items-center justify-center text-xs font-medium">
                  {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
              <button
                onClick={() => signOut()}
                className="hidden md:block text-sm px-3 py-1 rounded-xl border border-border hover:bg-muted/20"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden md:block text-sm px-3 py-2 rounded-xl border border-border hover:bg-muted/20"
            >
              Đăng nhập
            </Link>
          )}
          <ThemeToggle />
          <MiniCart />
        </div>
      </div>

      {/* search bar under logo */}
      <div className="container pb-1 pt-1">
        <Suspense
          fallback={
            <div className="relative">
              <input
                placeholder="Tìm sản phẩm..."
                className="w-full rounded-2xl border border-border bg-card px-3 py-2 md:px-4 md:py-3 pr-10 md:pr-12 text-base md:text-sm outline-none focus:ring-2 focus:ring-fuchsia-500"
                disabled
              />
              <button
                aria-label="Tìm"
                className="absolute right-2 md:right-2 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-lg border border-border flex items-center justify-center text-xs md:text-sm"
              >
                🔍
              </button>
            </div>
          }
        >
          <SearchBar />
        </Suspense>
      </div>

      {/* Drawer & overlay via Portal with huge z-index */}
      <Portal>
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/45 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-[1000000]`}
        />
        <aside
          className={`fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-background border-r border-border transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"} z-[1000001]`}
          role="dialog"
          aria-modal={open ? "true" : "false"}
        >
          <div className="p-3 border-b border-border flex items-center justify-between">
            <div className="font-bold">Danh mục</div>
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-1 rounded-xl border border-border"
            >
              ✕
            </button>
          </div>
          <nav className="p-3 flex flex-col gap-1">
            <Link className="nav-item" href="/">
              Trang chủ
            </Link>
            <details className="nav-details">
              <summary className="nav-item cursor-pointer">Sản phẩm</summary>
              <div className="ml-3 mt-1 flex flex-col">
                <Link className="nav-sub" href="/category/Thực phẩm gia vị">
                  Thực phẩm gia vị
                </Link>
                <Link className="nav-sub" href="/category/Mật ong">
                  Mật ong
                </Link>
                <Link className="nav-sub" href="/category/Thịt sấy">
                  Thịt sấy
                </Link>
              </div>
            </details>
            <Link className="nav-item" href="/about">
              Giới thiệu
            </Link>
            <Link className="nav-item" href="/contact">
              Liên hệ
            </Link>

            {/* Authentication section */}
            <div className="border-t border-border pt-2 mt-2">
              {status === "loading" ? (
                <div className="nav-item">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    <span>Đang tải...</span>
                  </div>
                </div>
              ) : session ? (
                <div className="space-y-1">
                  <div className="nav-item">
                    <div className="flex items-center gap-2">
                      {session.user?.image ? (
                        <img
                          src={session.user.image}
                          alt={session.user?.name || "User"}
                          className="w-6 h-6 rounded-full border border-border"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full border border-border bg-muted flex items-center justify-center text-xs font-medium">
                          {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                      )}
                      <span className="text-sm font-medium">
                        {session.user?.name || "User"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      signOut();
                      setOpen(false);
                    }}
                    className="nav-item text-left w-full text-red-600"
                  >
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <Link
                  className="nav-item text-primary font-medium"
                  href="/login"
                  onClick={() => setOpen(false)}
                >
                  Đăng nhập
                </Link>
              )}
            </div>
          </nav>
        </aside>
      </Portal>
    </div>
  );
}
