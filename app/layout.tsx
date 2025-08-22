import './globals.css';
import Navbar from '@/components/Navbar';
import ThemeProvider from '@/components/ThemeProvider';
import { CartProvider } from '@/context/CartContext';
import CartAnimator from '@/components/CartAnimator';

export const metadata = {
  title: 'ShopPro (Portal z-fix full)',
  description: 'Drawer qua Portal, search dưới logo, cart, skeleton & theme'
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <CartAnimator />
            <main className="container py-3">{children}</main>
            <footer className="container py-10 text-sm text-muted-foreground text-center">Demo • Tailwind • Portal Drawer Z-Fix • Skeleton</footer>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
