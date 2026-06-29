"use client"

import { Users, BookOpen, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function BenefitsSection() {
  const { ref: mainRef, hasIntersected: mainIntersected } = useIntersectionObserver()
  const { ref: learningRef, hasIntersected: learningIntersected } = useIntersectionObserver()
  const { ref: careRef, hasIntersected: careIntersected } = useIntersectionObserver()

  // Data for 3 cards with different images and texts
  const cards = [
    {
      id: 1,
      image: "/images/card-1.png",
      alt: "Card 1",
      text: 'SNAPSTUDY là nền tảng học tập cho sinh viên với thư viện bài tập – đề thi – mock test được biên soạn bởi 50+ chuyên gia, gồm hơn 1.200 câu hỏi và 1.500 đề cương. Nền tảng giúp tiết kiệm 70% thời gian học, tăng hiệu suất 180%, và hỗ trợ cộng đồng chia sẻ nội dung để nhận thu nhập.',
    },
    {
      id: 2,
      image: "/images/card-2.png",
      alt: "Card 2",
      text: "GrabStudy là nền tảng học 1–1 dành cho người đi làm, tập trung vào tiếng Anh giao tiếp công sở, phỏng vấn, sales, pitching và tiếng Anh chuyên ngành. Nền tảng tích hợp kết nối tutor, đặt lịch linh hoạt và theo dõi tiến độ. Mỗi học viên có mentor thiết kế lộ trình cá nhân hóa. Đội ngũ tutor giàu kinh nghiệm giúp 90% học viên đạt mục tiêu chỉ sau 3 tháng.",
    },
    {
      id: 3,
      image: "/images/card-3.png",
      alt: "Card 3",
      text: "Chương trình Kỹ sư AI toàn năng cho học sinh THPT, hợp tác cùng ĐH Bách khoa Hà Nội, giúp xây nền tảng Toán – Python – thuật toán và làm quen ML, DL, NLP, Computer Vision. Học sinh được học với giảng viên AI hàng đầu và mentor đồng hành, đồng thời nhận AI Portfolio và chứng nhận hỗ trợ mạnh khi xét tuyển và xin học bổng du học.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Benefits */}
        <div ref={mainRef} className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 order-2 lg:order-1 ${
              mainIntersected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#cf0001] mb-4 sm:mb-6 text-balance">GIỚI THIỆU</h2>

            <p
              className={`text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed text-justify transition-all duration-1000`}
              style={{
                transitionDelay: "200ms",
                opacity: mainIntersected ? 1 : 0,
                transform: mainIntersected ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <strong> Công ty Cổ phần Đầu tư và Phát triển Giáo dục Hồng Lĩnh (HLE)</strong>  là tổ chức giáo dục tiên phong trong việc cung cấp các giải pháp học tập toàn diện và tối ưu cho người học ở mọi cấp độ từ THPT, đại học, đến người đi làm.
Hồng Lĩnh không ngừng đổi mới trong mô hình đào tạo, kết hợp công nghệ giáo dục (EdTech) và dịch vụ học thuật chuyên sâu để mang đến trải nghiệm học tập linh hoạt và hiệu quả vượt trội.
Đội ngũ chuyên gia của Hồng Lĩnh quy tụ các giáo sư, tiến sĩ, giảng viên từ những đại học hàng đầu thế giới và Việt Nam giúp, hàng nghìn học viên đạt được mục tiêu học tập với kết quả vượt trội.

            </p>
          </div>

          {/* Right Image */}
          <div
            className={`relative w-full transition-all duration-1000 order-1 lg:order-2`}
            style={{
              transitionDelay: "300ms",
              opacity: mainIntersected ? 1 : 0,
              transform: mainIntersected ? "translateX(0) scale(1)" : "translateX(32px) scale(0.95)",
            }}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/design-mode/anh01.webp"
                alt="HONGLINH EDUCATION - Knowledge is Power"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Learning Benefits */}
        <div ref={learningRef} className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Image */}
          <div
            className={`relative w-full transition-all duration-1000 order-1`}
            style={{
              transitionDelay: "200ms",
              opacity: learningIntersected ? 1 : 0,
              transform: learningIntersected ? "translateX(0) scale(1)" : "translateX(-32px) scale(0.95)",
            }}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/design-mode/anh02.webp"
                alt="Tăng hiệu quả học tiếng Anh X5 lần - HONGLINHEDUCATION"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-1000 order-2`}
            style={{
              transitionDelay: "400ms",
              opacity: learningIntersected ? 1 : 0,
              transform: learningIntersected ? "translateX(0)" : "translateX(32px)",
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#cf0001] mb-6 sm:mb-8 lg:mb-10 text-balance">
              HỆ THỐNG SẢN PHẨM CỦA HONGLINHEDUCATION
            </h2>

            <p
              className={`text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed text-justify transition-all duration-1000`}
              style={{
                transitionDelay: "200ms",
                opacity: learningIntersected ? 1 : 0,
                transform: learningIntersected ? "translateY(0)" : "translateY(16px)",
              }}
            >
Hoạt động theo mô hình "hybrid house of brands", Hồng Lĩnh phát triển và vận hành nhiều thương hiệu giáo dục uy tín như <strong> SNAPSTUDY, GRABSTUDY & AI57 </strong>. Mỗi thương hiệu là một mảnh ghép trong hệ sinh thái học tập thông minh, hướng tới mục tiêu kiến tạo cơ hội học tập chất lượng, linh hoạt và bền vững cho người học Việt Nam và quốc tế.
Ba mảnh ghép này tạo thành một hành trình liên tục: Từ nền tảng AI – qua hỗ trợ học thuật đại học – đến nâng cấp kỹ năng nghề nghiệp suốt đời.

            </p>
          </div>
        </div>

        {/* What You Care About Section - 3 Cards */}
        <div ref={careRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{
                transitionDelay: `${300 + index * 100}ms`,
                opacity: careIntersected ? 1 : 0,
                transform: careIntersected ? "translateY(0)" : "translateY(32px)",
              }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = `https://via.placeholder.com/400x300?text=Card+${card.id}`
                  }}
                />
                
                {/* Overlay - Text appears on hover (desktop) and always visible on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-3 sm:p-4 md:p-6 text-white text-center w-full transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
