"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function HeroSection() {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center"
      style={{
        background: "#dc2626 !important",
        backgroundColor: "#dc2626 !important",
        backgroundImage: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #cf0001 100%) !important",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#dc2626 !important",
          backgroundImage: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #cf0001 100%) !important",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
{/* Left Content */}
<div
  className={`transition-all duration-1000 ${
    hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  <div className="mb-8">
    <div className="p-8 rounded-2xl backdrop-blur-lg flex flex-col items-center">
      <h1
        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center leading-tight text-white whitespace-nowrap"
        style={{
          WebkitTextStroke: "0px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        HONG LINH
      </h1>
      <h1
        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center leading-tight text-white mt-2"
        style={{
          WebkitTextStroke: "0px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        EDUCATION
      </h1>
    </div>
  </div>
</div>



          {/* Right Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.95) !important",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                <span style={{ color: "#dc2626" }}>Hệ sinh thái đào tạo tiếng Anh</span>
                <br />
                <span style={{ color: "#374151" }}>ứng dụng cho cá nhân và doanh nghiệp </span>
              </h2>

              <div className="space-y-4 mb-8">
                <div
                  className={`px-8 py-4 rounded-full text-center font-bold italic text-lg transition-all duration-1000 delay-1000 hover:scale-105 ${
                    hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    backgroundColor: "#f59e0b",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(245, 158, 11, 0.3)",
                  }}
                >
                  Thực chiến – Cá nhân hóa – Minh bạch kết quả – Tôn trọng cam kết
                </div>
                <div
                  className={`px-8 py-4 rounded-full text-center font-bold text-lg transition-all duration-1000 delay-1200 hover:scale-105 ${
                    hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    backgroundColor: "#f59e0b",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(245, 158, 11, 0.3)",
                  }}
                >
                  50+ GIẢNG VIÊN & CHUYÊN GIA
                </div>
                <div
                  className={`px-8 py-4 rounded-full text-center font-bold text-lg transition-all duration-1000 delay-1400 hover:scale-105 ${
                    hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    backgroundColor: "#f59e0b",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(245, 158, 11, 0.3)",
                  }}
                >
                  2000+ HỌC VIÊN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 opacity-10 transition-all duration-2000 delay-500 ${
          hasIntersected ? "scale-100 rotate-0" : "scale-75 rotate-12"
        }`}
      >
        <div className="w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}></div>
      </div>
    </section>
  )
}
