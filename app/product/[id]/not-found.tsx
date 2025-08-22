/** @format */

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold mb-4">Sản phẩm không tồn tại</h1>
      <p className="text-muted-foreground mb-8">
        Sản phẩm bạn tìm kiếm không tồn tại hoặc đã bị xóa khỏi cửa hàng.
      </p>
      <div className="space-x-4">
        <Link href="/" className="btn-primary">
          Về trang chủ
        </Link>
        <Link href="/" className="btn-secondary">
          Xem tất cả sản phẩm
        </Link>
      </div>
    </div>
  );
}
