"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { MessageSquare, Target, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const missionItems = {
    message: {
      title: "Thông điệp",
      subtitle: "Mở ra cánh cửa tương lai với tiếng Anh",
      content: "English for Real – Tiếng Anh để dùng ngay, mở khóa cơ hội thật.",
      icon: MessageSquare,
      bgColor: "bg-[#cd0000]",
    },
    vision: {
      title: "Tầm nhìn",
      subtitle: "Trở thành trung tâm tiếng Anh hàng đầu Việt Nam",
      content:
        "Trở thành hệ sinh thái đào tạo tiếng Anh ứng dụng hàng đầu tại Việt Nam, góp phần xây dựng một thế hệ người Việt song ngữ, tự tin hội nhập và chinh phục cơ hội toàn cầu.",
      icon: Target,
      bgColor: "bg-[#cd0000]",
    },
    mission: {
      title: "Sứ mệnh",
      subtitle: "Đem lại chất lượng và hiệu quả học tập tối ưu",
      content:
        "Mở khóa cơ hội học tập và nghề nghiệp cho người Việt bằng năng lực giao tiếp tiếng Anh thực chiến, hướng tới mục tiêu song ngữ tại Việt Nam",
      icon: CheckCircle,
      bgColor: "bg-[#cd0000]",
    },
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Giới thiệu về HLE</h1>
            <p className="text-xl max-w-4xl mx-auto text-justify leading-relaxed text-gray-800">
              <strong className="text-white-900">Hồng Lĩnh Education (HLE)</strong> - Hệ sinh thái đào tạo tiếng Anh
              ứng dụng cho cá nhân và doanh nghiệp – được xây dựng với tâm huyết mở khóa cơ hội học tập và nghề nghiệp
              cho người Việt bằng năng lực giao tiếp tiếng Anh thực chiến.
            </p>
            <p className="text-lg mt-6 max-w-4xl mx-auto leading-relaxed text-gray-800">
              Với sứ mệnh đồng hành cùng người học từ bước khởi đầu đến khi tự tin sử dụng tiếng Anh trong công việc
              và đời sống, <strong className="text-gray-900">HLE</strong> lấy giá trị cốt lõi{" "}
              <strong className="text-gray-900">"Thực dụng – Cá nhân hóa – Minh bạch – Tôn trọng cam kết"</strong> làm
              kim chỉ nam. Thông qua các chương trình đào tạo cá nhân hóa lộ trình, đo lường tiến bộ rõ ràng và tập
              trung vào khả năng dùng được ngay, chúng tôi mang đến trải nghiệm học tập thiết thực, giúp học viên không
              chỉ chinh phục mục tiêu tiếng Anh mà còn mở rộng cánh cửa sự nghiệp và hội nhập toàn cầu.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 space-y-6 lg:w-2/3 lg:mx-auto">
          {Object.entries(missionItems).map(([key, item]) => {
            const IconComponent = item.icon
            return (
              <div
                key={key}
                className="bg-white rounded-2xl shadow-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredItem(key)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center gap-6 p-6">
                  <div
                    className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.subtitle}</p>
                  </div>
                </div>

                {/* Content hiển thị khi hover */}
                {hoveredItem === key && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-200 transition-all duration-300">
                    {item.content}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
