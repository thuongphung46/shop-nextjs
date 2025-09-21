/** @format */

"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-fuchsia-50 to-purple-50 dark:from-fuchsia-950/10 dark:to-purple-950/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông
              tin để được tư vấn tốt nhất!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Địa chỉ</h4>
                      <p className="text-muted-foreground">
                        123 Đường ABC, Quận XYZ, TP.HCM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Điện thoại</h4>
                      <p className="text-muted-foreground">0123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">
                        contact@shopnhalam.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Giờ làm việc</h4>
                      <p className="text-muted-foreground">
                        Thứ 2 - Chủ nhật: 8:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Theo dõi chúng tôi
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <span className="text-blue-600">📘</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center hover:bg-pink-200 dark:hover:bg-pink-900/30 transition-colors"
                  >
                    <span className="text-pink-600">📷</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <span className="text-green-600">📱</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Gửi tin nhắn cho chúng tôi
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg">
                  Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian
                  sớm nhất.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg">
                  Có lỗi xảy ra. Vui lòng thử lại sau.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent bg-background"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent bg-background"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent bg-background resize-none"
                    placeholder="Nhập tin nhắn của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-fuchsia-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <span>📧</span>
                      Gửi tin nhắn
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
