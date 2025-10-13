"use client"

import { Check, Users, BookOpen, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function BenefitsSection() {
  const { ref: mainRef, hasIntersected: mainIntersected } = useIntersectionObserver()
  const { ref: learningRef, hasIntersected: learningIntersected } = useIntersectionObserver()
  const { ref: careRef, hasIntersected: careIntersected } = useIntersectionObserver()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Benefits */}
        <div ref={mainRef} className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              mainIntersected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#cf0001] mb-6 text-balance">LÀM CHỦ TIẾNG ANH!</h2>

            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed text-justify transition-all duration-1000`}
              style={{
                transitionDelay: "200ms",
                opacity: mainIntersected ? 1 : 0,
                transform: mainIntersected ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <strong> Chào mừng bạn đến với Hồng Lĩnh Education (HLE)!</strong> Chúng tôi là hệ sinh thái đào tạo tiếng
              Anh ứng dụng cho cá nhân và doanh nghiệp, giúp bạn rèn luyện năng lực giao tiếp{" "}
              <strong> dùng được ngay </strong> trong công việc và đời sống.
            </p>

            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed text-justify transition-all duration-1000`}
              style={{
                transitionDelay: "400ms",
                opacity: mainIntersected ? 1 : 0,
                transform: mainIntersected ? "translateY(0)" : "translateY(16px)",
              }}
            >
              Tại HLE, bạn sẽ được sở hữu <strong> lộ trình cá nhân hóa </strong> theo mục tiêu nghề nghiệp, tiến bộ
              được <strong> đo lường minh bạch </strong> và luôn có đội ngũ đồng hành cho đến khi bạn{" "}
              <strong> tự tin sử dụng tiếng Anh.</strong> Với sứ mệnh{" "}
              <strong className="text-[#cf0001]"> mở khóa cơ hội học tập và nghề nghiệp cho người Việt</strong>, HLE cam
              kết mang đến hành trình học tiếng Anh hiệu quả, thực chiến và bền vững – hướng tới mục tiêu{" "}
              <strong className="text-[#cf0001]"> song ngữ tại Việt Nam.</strong>
            </p>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000`}
            style={{
              transitionDelay: "300ms",
              opacity: mainIntersected ? 1 : 0,
              transform: mainIntersected ? "translateX(0) scale(1)" : "translateX(32px) scale(0.95)",
            }}
          >
            <img
              src="/images/design-mode/lam-chu-tieng-anh.jpg.jpeg"
              alt="HONGLINH EDUCATION - Knowledge is Power"
              className="rounded-lg shadow-lg w-full max-w-full h-auto hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Learning Benefits */}
        <div ref={learningRef} className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Image */}
          <div
            className={`relative transition-all duration-1000`}
            style={{
              transitionDelay: "200ms",
              opacity: learningIntersected ? 1 : 0,
              transform: learningIntersected ? "translateX(0) scale(1)" : "translateX(-32px) scale(0.95)",
            }}
          >
            <img
              src="/tang-hieu-qua-hoc.png"
              alt="Tăng hiệu quả học tiếng Anh X5 lần - Hong Linh Education"
              className="rounded-lg shadow-lg w-full max-w-full h-auto hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-1000`}
            style={{
              transitionDelay: "400ms",
              opacity: learningIntersected ? 1 : 0,
              transform: learningIntersected ? "translateX(0)" : "translateX(32px)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#cf0001] mb-6 text-balance">
              Tăng hiệu quả học tiếng Anh của bạn
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
              Gấp 5 lần hiệu quả mỗi giờ học
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  text: "Huấn luyện 1-1 cá nhân hóa theo mục tiêu nghề nghiệp và nhu cầu thực tế",
                  delay: 400,
                },
                {
                  icon: BookOpen,
                  text: "Chỉnh sửa trực tiếp: phát âm, ngữ pháp, từ vựng để giao tiếp trôi chảy hơn",
                  delay: 500,
                },
                {
                  icon: TrendingUp,
                  text: "Luyện kỹ năng giao tiếp thực chiến trong bối cảnh công việc và đời sống hàng ngày",
                  delay: 600,
                },
                {
                  icon: Clock,
                  text: "Theo dõi tiến độ học tập và đánh giá kết quả minh bạch",
                  delay: 700,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  style={{
                    transition: "all 1s",
                    transitionDelay: `${item.delay}ms`,
                    opacity: learningIntersected ? 1 : 0,
                    transform: learningIntersected ? "translateX(0)" : "translateX(16px)",
                  }}
                >
                  <div className="bg-[#cf0001] rounded-full p-2 mt-1 transition-transform duration-300 hover:scale-110">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 text-justify">{item.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What You Care About Section */}
        <div ref={careRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000`}
            style={{
              transitionDelay: "300ms",
              opacity: careIntersected ? 1 : 0,
              transform: careIntersected ? "translateX(0)" : "translateX(-32px)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#cf0001] mb-6 text-balance">
              CHỈ HỌC NHỮNG THỨ BẠN CẦN HOẶC 
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#cf0001] mb-6 text-balance">
              ÍT NHẤT BẠN THÍCH
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
              CÁ NHÂN HOÁ LỘ TRÌNH THEO TỪNG NGÀNH NGHỀ, MỤC TIÊU CỦA HỌC VIÊN
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Kiến thức chuẩn",
                "Phù hợp từ cơ bản đến nâng cao",
                "Chủ đề bám sát như câu sử dụng",
                "Dễ dàng tùy chỉnh theo tiến độ học",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  style={{
                    transition: "all 1s",
                    transitionDelay: `${300 + index * 100}ms`,
                    opacity: careIntersected ? 1 : 0,
                    transform: careIntersected ? "translateX(0)" : "translateX(16px)",
                  }}
                >
                  <Check className="h-5 w-5 text-[#cf0001] transition-transform duration-300 hover:scale-110" />
                  <span className="text-gray-700 text-justify">{text}</span>
                </div>
              ))}
            </div>

            <a href="https://zalo.me/0325194889" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  transitionDelay: "700ms",
                  opacity: careIntersected ? 1 : 0,
                  transform: careIntersected ? "translateY(0)" : "translateY(16px)",
                }}
              >
                Tư vấn nhanh qua Zalo
              </Button>
            </a>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000`}
            style={{
              transitionDelay: "300ms",
              opacity: careIntersected ? 1 : 0,
              transform: careIntersected ? "translateX(0) scale(1)" : "translateX(32px) scale(0.95)",
            }}
          >
            <img
              src="/chi-hoc-nhung-thu-ban-can.png"
              alt="Chỉ học thứ bạn cần hoặc ít nhất là bạn thích - Hong Linh Education"
              className="rounded-lg shadow-lg w-full max-w-full h-auto hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
