<!-- @format -->

# Shop Nhà Làm – Cửa hàng trực tuyến

- Drawer + overlay render qua **Portal** (z-index rất cao) → không bị đè ở trang detail
- Navbar sticky, **search dưới logo**
- Dark/Light (next-themes)
- Cart context (nhiều loại sản phẩm OK) + fly-to-cart (1.0s)
- Product list & detail + **Skeleton loading** (card, ảnh, text)
- Cart & Checkout (MoMo stub)
- **Authentication**: Google & Facebook login với NextAuth.js
- **Protected checkout**: Yêu cầu đăng nhập để thanh toán

## Setup Authentication

1. Tạo file `.env.local` từ `.env.example`
2. Thiết lập Google OAuth:
   - Vào [Google Developers Console](https://console.developers.google.com/)
   - Tạo project mới hoặc chọn project có sẵn
   - Bật Google+ API
   - Tạo OAuth client ID với redirect URI: `http://localhost:3000/api/auth/callback/google`
3. Thiết lập Facebook OAuth:
   - Vào [Facebook for Developers](https://developers.facebook.com/)
   - Tạo app mới
   - Thêm Facebook Login product
   - Thêm redirect URI: `http://localhost:3000/api/auth/callback/facebook`
4. Cập nhật file `.env.local` với các giá trị thực

## Run

```bash
npm install
npm run dev
```
