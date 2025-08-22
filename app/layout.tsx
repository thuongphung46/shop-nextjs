/** @format */

import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { CartProvider } from "@/context/CartContext";
import CartAnimator from "@/components/CartAnimator";

export const metadata = {
  title: "Shop Nhà Làm - Cửa hàng trực tuyến",
  description:
    "Shop Nhà Làm - Nền tảng mua sắm trực tuyến với đa dạng sản phẩm thủ công chất lượng",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <CartAnimator />
            <main className="container py-3">{children}</main>
            <footer className="container py-10 text-sm text-muted-foreground text-center">
              Shop Nhà Làm © 2025 • Sản phẩm thủ công chất lượng
            </footer>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
