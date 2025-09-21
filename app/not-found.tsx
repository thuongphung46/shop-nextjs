/** @format */

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-8"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="text-center max-w-md mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1
            className="select-none pointer-events-none"
            style={{
              fontSize: "144px",
              fontWeight: "bold",
              color: "#a855f7",
              opacity: "0.8",
              lineHeight: "1",
              margin: "0",
            }}
          >
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2
            className="font-bold mb-3"
            style={{
              fontSize: "24px",
              color: "#1f2937",
              fontWeight: "700",
            }}
          >
            Trang không tồn tại
          </h2>
          <p
            className="leading-relaxed"
            style={{
              color: "#6b7280",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
            <br />
            Có thể trang đã được di chuyển hoặc URL không đúng.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              padding: "12px 24px",
              backgroundColor: "#a855f7",
              color: "white",
              borderRadius: "12px",
              fontWeight: "500",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
              fontSize: "14px",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#9333ea")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#a855f7")
            }
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Về trang chủ
          </Link>

          <button
            onClick={() => router.back()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              padding: "12px 24px",
              border: "1px solid #d1d5db",
              borderRadius: "12px",
              backgroundColor: "white",
              color: "#374151",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
              fontSize: "14px",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#f9fafb")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "white")
            }
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Quay lại
          </button>
        </div>

        {/* Additional Help */}
        <div
          style={{
            marginTop: "32px",
            paddingTop: "24px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "12px",
            }}
          >
            Bạn cần hỗ trợ?
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "16px" }}
          >
            <Link
              href="/"
              style={{
                fontSize: "14px",
                color: "#a855f7",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.textDecoration = "none")
              }
            >
              Liên hệ hỗ trợ
            </Link>
            <span style={{ color: "#6b7280" }}>|</span>
            <Link
              href="/"
              style={{
                fontSize: "14px",
                color: "#a855f7",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.textDecoration = "none")
              }
            >
              Trung tâm trợ giúp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
