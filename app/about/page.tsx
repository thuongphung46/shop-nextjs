/** @format */

import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fuchsia-50 to-purple-50 dark:from-fuchsia-950/20 dark:to-purple-950/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Về <span className="text-fuchsia-600">Shop Nhà Làm</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Mang đến những sản phẩm thủ công chất lượng cao từ tình yêu và tâm
              huyết
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Câu chuyện của chúng tôi
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Shop Nhà Làm được thành lập với niềm đam mê tạo ra những sản
                  phẩm thủ công chất lượng cao. Chúng tôi tin rằng những món đồ
                  được làm bằng tay mang trong mình tình yêu và tâm huyết đặc
                  biệt.
                </p>
                <p className="text-lg text-muted-foreground">
                  Từ những nguyên liệu tự nhiên được chọn lọc kỹ càng đến quy
                  trình sản xuất tỉ mỉ, mỗi sản phẩm của chúng tôi đều mang đậm
                  dấu ấn riêng biệt.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-fuchsia-100 to-purple-100 dark:from-fuchsia-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🏠</div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Tự nhiên</h3>
                <p className="text-muted-foreground">
                  Sử dụng nguyên liệu tự nhiên, không chất bảo quản có hại
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Tình yêu</h3>
                <p className="text-muted-foreground">
                  Mỗi sản phẩm được tạo ra với tình yêu và sự tỉ mỉ
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Chất lượng</h3>
                <p className="text-muted-foreground">
                  Cam kết mang đến sản phẩm chất lượng cao nhất
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="text-center bg-gradient-to-r from-fuchsia-50 to-purple-50 dark:from-fuchsia-950/20 dark:to-purple-950/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sứ mệnh của chúng tôi
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Chúng tôi mong muốn lan tỏa những giá trị tốt đẹp thông qua các
                sản phẩm thủ công, góp phần tạo nên một cuộc sống khỏe mạnh và ý
                nghĩa hơn cho mọi người. Mỗi sản phẩm không chỉ là món đồ, mà
                còn là câu chuyện về tình yêu và sự chăm sóc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
