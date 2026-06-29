"use client"

import { Award, Users, TrendingUp, Shield } from "lucide-react"
import { useState } from "react"

const coreValues = [
  {
    id: 1,
    title: "Tính thực chiến",
    subtitle: "Học để dùng ngay",
    description:"Chương trình tập trung vào kỹ năng áp dụng ngay — học tới đâu làm được tới đó, dự án thật, bài tập mô phỏng đúng nhu cầu doanh nghiệp.",
    icon: TrendingUp,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: 2,
    title: "Cá nhân hóa",
    subtitle: "Lộ trình riêng cho bạn",
    description: "Lộ trình được điều chỉnh theo trình độ, mục tiêu và tốc độ học của từng học sinh, đảm bảo ai cũng tiến bộ tối đa.",
    icon: Users,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: 3,
    title: "Chuẩn học thuật",
    subtitle: "Nền tảng vững chắc",
    description:
      "Nội dung được xây dựng theo nền tảng Toán – Tin – AI chuẩn quốc tế, bám sát khung năng lực của các trường kỹ thuật hàng đầu.",
    icon: Award,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: 4,
    title: "Tôn trọng cam kết",
    subtitle: "Học thông minh với AI",
    description:
      "Ứng dụng các nền tảng AI và công cụ học tập thông minh để tối ưu trải nghiệm, theo dõi tiến trình và hỗ trợ học tập hiệu quả.",
    icon: Shield,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
]

export default function CoreValuesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#cd0000] mb-4">Giá trị cốt lõi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hồng Lĩnh tin rằng giáo dục không chỉ là điểm số hay bằng cấp mà là năng lực thật sự của người học mang theo suốt đời
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value) => {
            const IconComponent = value.icon
            const isHovered = hoveredId === value.id

            return (
              <div
                key={value.id}
                className={`${value.bgColor} rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                  isHovered ? "shadow-2xl scale-105" : "shadow-lg hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredId(value.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 ${
                      isHovered ? "rotate-6" : ""
                    }`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-3">{value.subtitle}</p>

                  <div
                    className={`flex-1 overflow-hidden transition-all duration-300 ${
                      isHovered ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">{value.description}</p>
                  </div>

                  {!isHovered && <p className="text-xs text-gray-500 mt-2 italic">Di chuột vào để xem chi tiết</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
